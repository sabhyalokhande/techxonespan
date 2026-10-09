<?php
// ─── Config ───────────────────────────────────────────────────────────────────
$TO_LIST   = ['sabhya@urbansingapore.com', 'vinays@techflex.co.in', 'jackie100.sm@gmail.com'];
$SUBJECT   = 'New Demo Request - TechFlex x OneSpan';
$LOG_FILE  = __DIR__ . '/contact_log.txt';

// ─── Secrets ──────────────────────────────────────────────────────────────────
// SMTP password and the hCaptcha secret live in config.local.php, which is
// gitignored (see .gitignore: *.local) and NEVER committed. On the server,
// this file must exist alongside contact.php with real values — see
// config.local.example.php for the template.
require __DIR__ . '/config.local.php';
// Expects config.local.php to define:
//   define('SMTP_PASS', '...');
//   define('HCAPTCHA_SECRET', '...');

// ─── Anti-spam config ──────────────────────────────────────────────────────────
$HONEYPOT_FIELD   = 'hp_confirm_9x2';              // must match the field name injected in index.html
$RATE_LIMIT_FILE  = __DIR__ . '/rate_limit.json';  // per-IP submission timestamps
$RATE_LIMIT_MAX   = 8;                             // max submissions
$RATE_LIMIT_WINDOW = 15 * 60;                       // per this many seconds (15 min)

$HCAPTCHA_SITEKEY = 'b456e4f8-7150-478e-aa14-ae60ec62cdaa'; // public, sent along for hCaptcha's extra domain check

// ─── SMTP credentials ──────────────────────────────────────────────────────────
// Host/user are not secret on their own; the password comes from config.local.php.
$SMTP_HOST     = 'smtp.hostinger.com';
$SMTP_PORT     = 465;
$SMTP_USER     = 'noreply@secure-digitalbanking.com';
$SMTP_PASS     = SMTP_PASS;
$SMTP_FROM     = 'noreply@secure-digitalbanking.com';
$SMTP_FROMNAME = 'TechFlex x OneSpan';

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ─── Logger ───────────────────────────────────────────────────────────────────
function logMsg($level, $msg, $data = []) {
    global $LOG_FILE;
    $timestamp = date('Y-m-d H:i:s T');
    $line      = "[{$timestamp}] [{$level}] {$msg}";
    if (!empty($data)) {
        $line .= ' | ' . json_encode($data, JSON_UNESCAPED_SLASHES);
    }
    $line .= PHP_EOL;
    file_put_contents($LOG_FILE, $line, FILE_APPEND | LOCK_EX);
}

// ─── CORS / method guard ───────────────────────────────────────────────────────
header('Content-Type: text/plain; charset=utf-8');

logMsg('INFO', 'Request received', [
    'method'     => $_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'ip'         => $_SERVER['REMOTE_ADDR'] ?? '',
    'php'        => PHP_VERSION,
]);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    logMsg('WARN', 'Non-POST request rejected');
    http_response_code(405);
    exit('Method Not Allowed');
}

// ─── Honeypot check ─────────────────────────────────────────────────────────────
// Real users never see or fill this field (it's hidden via CSS in index.html).
// Bots that auto-fill every input on the page will trip it. We return a fake
// "OK" so the bot doesn't learn its submission was rejected, but we never send
// the email or count it as a real lead.
$honeypotValue = trim($_POST[$HONEYPOT_FIELD] ?? '');
if ($honeypotValue !== '') {
    logMsg('WARN', 'Honeypot triggered — spam bot rejected silently', [
        'ip'        => $_SERVER['REMOTE_ADDR'] ?? '',
        'field'     => $HONEYPOT_FIELD,
        'value'     => substr($honeypotValue, 0, 100),
        'user_agent'=> $_SERVER['HTTP_USER_AGENT'] ?? '',
    ]);
    http_response_code(200);
    echo 'OK';
    exit;
}

// ─── Rate limiting (per IP) ─────────────────────────────────────────────────────
function checkRateLimit($ip, $file, $max, $window) {
    $now = time();
    $data = [];

    if (file_exists($file)) {
        $raw = file_get_contents($file);
        $data = json_decode($raw, true);
        if (!is_array($data)) $data = [];
    }

    // Prune old entries for this IP and drop stale IPs entirely to keep file small
    foreach ($data as $key => $timestamps) {
        $data[$key] = array_values(array_filter($timestamps, function ($t) use ($now, $window) {
            return ($now - $t) < $window;
        }));
        if (empty($data[$key])) unset($data[$key]);
    }

    $recent = $data[$ip] ?? [];
    if (count($recent) >= $max) {
        return false; // blocked
    }

    $recent[] = $now;
    $data[$ip] = $recent;
    file_put_contents($file, json_encode($data), LOCK_EX);
    return true; // allowed
}

$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (!checkRateLimit($clientIp, $RATE_LIMIT_FILE, $RATE_LIMIT_MAX, $RATE_LIMIT_WINDOW)) {
    logMsg('WARN', 'Rate limit exceeded — request rejected', [
        'ip'     => $clientIp,
        'max'    => $RATE_LIMIT_MAX,
        'window' => $RATE_LIMIT_WINDOW,
    ]);
    http_response_code(429);
    exit('Too many submissions — please try again later.');
}

// ─── hCaptcha verification ──────────────────────────────────────────────────────
// Calls hCaptcha's siteverify endpoint with the token the frontend generated.
// Returns the decoded response array, or null if the request itself failed
// (network/curl issue) — treated as "unknown" rather than "bot" so an
// hCaptcha-side outage doesn't block every real submission.
function verifyHCaptcha($token, $secret, $sitekey, $remoteIp) {
    $postFields = http_build_query([
        'secret'   => $secret,
        'response' => $token,
        'sitekey'  => $sitekey,
        'remoteip' => $remoteIp,
    ]);

    if (function_exists('curl_init')) {
        $ch = curl_init('https://api.hcaptcha.com/siteverify');
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $postFields,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 5,
        ]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method'  => 'POST',
                'header'  => 'Content-Type: application/x-www-form-urlencoded',
                'content' => $postFields,
                'timeout' => 5,
            ],
        ]);
        $raw = @file_get_contents('https://api.hcaptcha.com/siteverify', false, $context);
    }

    if ($raw === false) return null;
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : null;
}

$hcaptchaToken = trim($_POST['h-captcha-response'] ?? '');

if ($hcaptchaToken === '') {
    // No token at all — most likely the widget was never completed (or its
    // script was blocked). Previously this "failed open" and sent the email
    // anyway, which let anyone skip the captcha entirely. Now it's rejected
    // the same way the honeypot is: logged, faked "OK" back to the client,
    // no email sent. Real users who complete the widget are unaffected.
    logMsg('WARN', 'hCaptcha token missing — rejected silently (no email sent)', [
        'ip' => $clientIp,
    ]);
    http_response_code(200);
    echo 'OK';
    exit;
}

$verification = verifyHCaptcha($hcaptchaToken, HCAPTCHA_SECRET, $HCAPTCHA_SITEKEY, $clientIp);

if ($verification === null) {
    logMsg('WARN', 'hCaptcha verification request failed (network/hCaptcha issue) — proceeding anyway', [
        'ip' => $clientIp,
    ]);
} else {
    $success = $verification['success'] ?? false;

    logMsg('INFO', 'hCaptcha verification result', [
        'ip'      => $clientIp,
        'success' => $success,
        'errors'  => $verification['error-codes'] ?? [],
    ]);

    if (!$success) {
        logMsg('WARN', 'hCaptcha verification failed — rejected silently', [
            'ip' => $clientIp,
        ]);
        http_response_code(200);
        echo 'OK'; // fake success, same pattern as the honeypot rejection
        exit;
    }
}

// ─── Sanitise inputs ──────────────────────────────────────────────────────────
function clean($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')), ENT_QUOTES, 'UTF-8');
}

// Maps the <select> option value (sent by the form) to a human-readable label
// for the notification email. Keep this in sync with the option values in the
// frontend's Product Interest dropdown.
$PRODUCT_LABELS = [
    'fraud-protection'     => 'Fraud & Transaction Protection',
    'mfa'                  => 'Multi-Factor Authentication (MFA)',
    'hardware-auth'        => 'Hardware Authenticators',
    'software-auth'        => 'Software Authenticators',
    'mobile-security'      => 'Next-Gen Mobile App Shielding',
    'transaction-signing'  => 'Transaction Signing',
];

function labelFor($value, $map) {
    $value = trim($value ?? '');
    return $map[$value] ?? $value; // fall back to raw value if unrecognised
}

$firstName    = clean($_POST['firstName'] ?? '');
$lastName     = clean($_POST['lastName']  ?? '');
$rawEmail     = trim($_POST['email']      ?? '');
$email        = filter_var($rawEmail, FILTER_SANITIZE_EMAIL);
$company      = clean($_POST['company']   ?? '');
$phone        = clean($_POST['phone']     ?? '');
$productValue = clean($_POST['product']   ?? '');
$product      = clean(labelFor($productValue, $PRODUCT_LABELS));
$message      = clean($_POST['message']   ?? '');

logMsg('INFO', 'POST fields received', [
    'firstName' => $firstName,
    'lastName'  => $lastName,
    'email_raw' => $rawEmail,
    'email_san' => $email,
    'company'   => $company,
    'phone'     => $phone,
    'product_raw'   => $productValue,
    'product_label' => $product,
    'message'   => substr($message, 0, 80),
]);

// ─── Validation ───────────────────────────────────────────────────────────────
$errors = [];
if (empty($firstName))                              $errors[] = 'firstName is empty';
if (empty($lastName))                               $errors[] = 'lastName is empty';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))     $errors[] = "invalid email: [{$rawEmail}]";
if (empty($company))                                $errors[] = 'company is empty';

if (!empty($errors)) {
    logMsg('ERROR', 'Validation failed', $errors);
    http_response_code(400);
    exit('Validation failed: ' . implode(', ', $errors));
}

// ─── Build email body ──────────────────────────────────────────────────────────
$body  = "New demo request from the TechFlex x OneSpan website.\r\n\r\n";
$body .= "Name:     {$firstName} {$lastName}\r\n";
$body .= "Email:    {$email}\r\n";
$body .= "Company:  {$company}\r\n";
$body .= "Phone:    {$phone}\r\n";
$body .= "Product:  {$product}\r\n\r\n";
$body .= "Message:\r\n{$message}\r\n";

// ─── Send via SMTP (PHPMailer) ─────────────────────────────────────────────────
$mail = new PHPMailer(true);
$result = false;
$sendError = null;

try {
    $mail->isSMTP();
    $mail->Host       = $SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = $SMTP_USER;
    $mail->Password   = $SMTP_PASS;
    $mail->SMTPSecure = ($SMTP_PORT == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $SMTP_PORT;

    $mail->setFrom($SMTP_FROM, $SMTP_FROMNAME);
    $mail->addReplyTo($email, "{$firstName} {$lastName}");

    foreach ($TO_LIST as $recipient) {
        $mail->addAddress($recipient);
    }

    $mail->Subject = $SUBJECT;
    $mail->Body    = $body;
    $mail->isHTML(false);

    logMsg('INFO', 'Attempting SMTP send', [
        'to'   => $TO_LIST,
        'host' => $SMTP_HOST,
        'port' => $SMTP_PORT,
        'user' => $SMTP_USER,
    ]);

    $result = $mail->send();
} catch (Exception $e) {
    $sendError = $mail->ErrorInfo ?: $e->getMessage();
}

if ($result) {
    logMsg('SUCCESS', 'SMTP mail sent to ' . implode(', ', $TO_LIST));
    http_response_code(200);
    echo 'OK';
} else {
    logMsg('ERROR', 'SMTP send failed', ['error' => $sendError]);
    http_response_code(500);
    echo 'Mail failed — check contact_log.txt for details';
}
