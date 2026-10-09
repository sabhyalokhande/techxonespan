import { Link } from "react-router-dom";

const Fido2ForBanks = () => (
  <>
    <p className="lead">
      Passwords and one-time codes share a weakness: anything a customer can read or type, an attacker can trick them into
      handing over. FIDO2 removes that weakness by replacing shared secrets with public-key cryptography. This guide explains how
      FIDO2 works, why it resists phishing, and where it fits in a bank's authentication strategy.
    </p>

    <h2>What is FIDO2?</h2>
    <p>
      FIDO2 is an open authentication standard developed by the FIDO Alliance together with the World Wide Web Consortium (W3C).
      It has two parts:
    </p>
    <ul>
      <li>
        <strong>WebAuthn</strong> — a W3C web standard that lets websites and apps register and authenticate users with
        cryptographic credentials, supported by all major browsers and operating systems.
      </li>
      <li>
        <strong>CTAP</strong> (Client to Authenticator Protocol) — the protocol a browser or device uses to talk to an external
        authenticator, such as a security key connected over USB, NFC or Bluetooth.
      </li>
    </ul>
    <p>
      The credentials FIDO2 creates are often called <em>passkeys</em>. They can live on a dedicated hardware security key, or
      inside a phone or laptop's secure hardware.
    </p>

    <h2>How FIDO2 authentication works</h2>
    <p>FIDO2 replaces the shared secret at the heart of passwords and OTPs with a key pair:</p>
    <ol>
      <li>
        <strong>Registration.</strong> When a customer enrols, their authenticator generates a new public/private key pair just
        for that bank. The public key is sent to the bank. The private key never leaves the authenticator.
      </li>
      <li>
        <strong>Authentication.</strong> At login, the bank sends a random challenge. The customer confirms their presence —
        usually with a fingerprint, face scan, PIN or a touch of the key — and the authenticator signs the challenge with the
        private key.
      </li>
      <li>
        <strong>Verification.</strong> The bank checks the signature with the stored public key. If it matches, the customer is
        authenticated.
      </li>
    </ol>
    <p>
      Biometric data, where used, is checked locally on the device or key. It is not sent to the bank, and there is no central
      database of fingerprints or passwords to steal.
    </p>

    <h2>Why FIDO2 resists phishing</h2>
    <p>
      The defining feature of FIDO2 is <strong>origin binding</strong>. Each credential is tied to the exact web domain or app it
      was registered with. If a customer is lured to a look-alike phishing site, the authenticator simply has no credential for
      that domain and will not sign anything. There is no code to read out over the phone and nothing to type into a fake page.
    </p>
    <p>
      This is why security agencies and standards bodies describe FIDO-based authentication as <em>phishing-resistant</em> — a
      stronger category than MFA that relies on one-time codes, which can be relayed by an attacker in real time.
    </p>

    <h2>Types of FIDO2 authenticators</h2>
    <ul>
      <li>
        <strong>Roaming authenticators (security keys).</strong> Small hardware devices that connect over USB, NFC or Bluetooth.
        Some include a fingerprint sensor so the key itself verifies the user. They work across devices and do not depend on the
        customer's phone.
      </li>
      <li>
        <strong>Platform authenticators.</strong> Built into the device — Windows Hello, Apple Touch ID and Face ID, or Android
        biometrics. They need no extra hardware.
      </li>
      <li>
        <strong>Synced passkeys.</strong> Credentials backed up and synchronised across a user's devices by their platform
        provider, which makes recovery easier at some cost in control over where the key lives.
      </li>
    </ul>

    <h2>Why banks are adopting FIDO2</h2>
    <p>
      <strong>Phishing and social engineering remain the main threat.</strong> Many banking frauds succeed not by breaking
      technology but by persuading customers or staff to share a code. FIDO2 removes the code.
    </p>
    <p>
      <strong>Regulation is moving towards stronger factors.</strong> India's 2025 authentication directions are method-neutral,
      leaving banks free to adopt factors beyond SMS OTP. Regulators elsewhere have gone further: the Central Bank of the UAE has
      directed banks to move away from SMS and email OTPs towards methods such as in-app approval and FIDO2 passkeys.
    </p>
    <p>
      <strong>Better customer experience.</strong> A fingerprint or a tap is faster than waiting for and typing a six-digit code,
      and there is no dependency on mobile network coverage.
    </p>
    <p>
      <strong>Lower operational cost.</strong> Fewer password resets, fewer SMS messages and fewer fraud investigations.
    </p>

    <h2>Where FIDO2 fits in a bank</h2>
    <ul>
      <li>
        <strong>Employee and privileged access</strong> — protecting staff who access core banking, payment and administrative
        systems, a frequent target for attackers.
      </li>
      <li>
        <strong>Corporate and treasury banking</strong> — high-value users who benefit from dedicated hardware keys.
      </li>
      <li>
        <strong>Retail customers</strong> — passwordless login to mobile and internet banking using device biometrics or passkeys.
      </li>
    </ul>

    <h2>What to plan for</h2>
    <p>FIDO2 is a strong foundation, but a successful rollout needs a few decisions up front:</p>
    <ul>
      <li>
        <strong>Recovery.</strong> Customers lose phones and keys. Plan a secure re-enrolment process that does not reintroduce
        the weakest link, and consider registering more than one authenticator per user.
      </li>
      <li>
        <strong>Transaction confirmation.</strong> FIDO2 proves who is logging in. For high-value payments, many banks add
        transaction signing so the customer confirms the actual amount and beneficiary on a trusted display.
      </li>
      <li>
        <strong>Channel coverage.</strong> Decide how FIDO2 works alongside branch, call-centre and legacy channels during the
        transition.
      </li>
      <li>
        <strong>Customer onboarding.</strong> Clear guidance at enrolment makes the difference between adoption and drop-off.
      </li>
    </ul>
    <p>
      In practice, banks usually combine FIDO2 with other authenticators matched to each customer segment — for example{" "}
      <Link to="/authentication">FIDO2 security keys with built-in fingerprint sensors alongside mobile soft tokens</Link> for
      customers who prefer to use their phone.
    </p>

    <h2>Summary</h2>
    <p>
      FIDO2 replaces passwords and one-time codes with device-held cryptographic keys bound to the bank's genuine website or app.
      That makes it resistant to phishing by design, faster for customers, and well aligned with the direction regulators are
      taking. For banks, the question is no longer whether to adopt phishing-resistant authentication, but which customers and
      channels to start with.
    </p>
  </>
);

export default Fido2ForBanks;
