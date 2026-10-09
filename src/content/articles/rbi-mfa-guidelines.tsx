import { Link } from "react-router-dom";

const RBI_DIRECTIONS = "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12898&Mode=0";

const RbiMfaGuidelines = () => (
  <>
    <p className="lead">
      For more than a decade, the SMS one-time password has been the default second factor for digital payments in India. The
      Reserve Bank of India's 2025 authentication directions change the basis of that arrangement: they set out principles every
      digital payment must meet, rather than relying on a single method. This guide explains what the rules require, what is
      exempt, and what they mean in practice for banks.
    </p>

    <h2>The directions at a glance</h2>
    <p>
      On 25 September 2025 the RBI issued the{" "}
      <a href={RBI_DIRECTIONS} target="_blank" rel="noopener noreferrer">
        Reserve Bank of India (Authentication mechanisms for digital payment transactions) Directions, 2025
      </a>
      . They apply to banks and other regulated entities that issue payment instruments, and came into force on 1 April 2026,
      with a later date of 1 October 2026 for one provision on cross-border card payments.
    </p>
    <p>The core requirements are:</p>
    <ul>
      <li>
        <strong>Two distinct factors.</strong> Every digital payment transaction must be authenticated with at least two distinct
        factors, unless it falls under a specific exemption.
      </li>
      <li>
        <strong>One dynamic factor.</strong> For transactions where the card is not physically present, at least one of those
        factors must be dynamically created or proven — that is, unique to that transaction.
      </li>
      <li>
        <strong>Technology neutrality.</strong> The RBI does not prescribe a method. Issuers may offer customers a choice of
        authentication factors.
      </li>
      <li>
        <strong>Risk-based checks.</strong> Issuers may apply additional checks, beyond the two-factor minimum, to transactions
        they identify as higher risk.
      </li>
      <li>
        <strong>Full liability for non-compliance.</strong> If a customer suffers a loss from a transaction processed without
        complying with the directions, the issuer must compensate the customer in full.
      </li>
    </ul>

    <h2>What counts as an authentication factor?</h2>
    <p>
      The directions follow the familiar three categories: something the user <em>knows</em>, something the user <em>has</em>,
      and something the user <em>is</em>. The two factors used for a transaction must be distinct — a password and a PIN are both
      knowledge factors and do not satisfy the rule on their own.
    </p>
    <p>
      The RBI gives examples including passwords, passphrases and PINs; card hardware and software tokens; SMS-based OTPs; and
      fingerprints or other biometrics, whether native to the device or Aadhaar-based. Nothing in the list is mandatory. SMS OTP
      remains permitted, but it is now one option among several rather than the assumed default.
    </p>

    <h2>The dynamic-factor requirement</h2>
    <p>
      The most significant technical requirement is that, for card-not-present and other remote transactions, at least one
      factor must be dynamic — a proof generated for that specific transaction. A static password re-used across sessions does
      not qualify. An OTP, a cryptographic signature from a software or hardware token, or a challenge signed on a registered
      device can.
    </p>
    <p>
      Methods that bind the proof to the transaction details themselves — such as transaction signing, where the amount and
      beneficiary are included in what the customer approves — go further than the minimum. They help protect against
      man-in-the-middle and social-engineering attacks in which a customer is tricked into approving a payment they did not
      intend.
    </p>

    <h2>Which transactions are exempt?</h2>
    <p>The directions list specific categories that do not need two-factor authentication. They include:</p>
    <ul>
      <li>small-value contactless card payments;</li>
      <li>recurring e-mandate transactions after the first one;</li>
      <li>certain prepaid payment instruments, such as gift cards;</li>
      <li>NETC (electronic toll) payments;</li>
      <li>small-value offline digital payments;</li>
      <li>certain corporate travel bookings; and</li>
      <li>UPI tap-and-pay payments at NFC-enabled terminals, within prescribed limits.</li>
    </ul>
    <p>
      Each exemption is subject to the conditions and limits set out in the directions and related RBI circulars, so banks should
      confirm the exact thresholds against the source text.
    </p>

    <h2>Interoperability and cross-border card payments</h2>
    <p>
      Two further provisions are easy to overlook. First, where an issuer or provider offers an authentication solution within a
      given operating environment, that solution must be accessible to all applications and token requestors operating in that
      environment — authentication cannot be used to lock customers into a single app.
    </p>
    <p>
      Second, by 1 October 2026 card issuers must have a mechanism to validate non-recurring cross-border card-not-present
      transactions when an overseas merchant or acquirer requests it, supported by risk-based checks and registration of the
      relevant card ranges with card networks.
    </p>

    <h2>What the directions do not cover</h2>
    <p>
      These directions are about payment transactions. They do not, on their own, set rules for how customers log in to internet
      or mobile banking. Login security, device controls and application security fall under the RBI's broader directions on IT
      governance and digital payment security controls. In practice most banks design a single authentication architecture that
      covers both login and payments, so the two sets of expectations should be planned together.
    </p>

    <h2>What this means for banks in practice</h2>
    <p>For most institutions, compliance is now a question of evidence and resilience rather than adding a second factor. Practical steps include:</p>
    <ol>
      <li>
        <strong>Map every payment channel</strong> — cards, net banking, mobile banking, UPI, wallets and corporate platforms —
        and record which factors each uses and whether one is dynamic.
      </li>
      <li>
        <strong>Review reliance on SMS OTP.</strong> Because the rules are method-neutral, banks can introduce factors that are
        harder to intercept or phish, such as app-based push approval, soft tokens, device-bound cryptographic keys or FIDO2
        security keys.
      </li>
      <li>
        <strong>Define risk-based policies.</strong> Decide which transactions — by value, beneficiary, device, location or
        behaviour — should trigger step-up checks beyond the minimum.
      </li>
      <li>
        <strong>Check interoperability</strong> so that any authentication service you offer is accessible to all eligible apps
        in that environment.
      </li>
      <li>
        <strong>Account for liability.</strong> With full compensation required for non-compliant transactions, gaps in
        authentication now carry a direct financial cost.
      </li>
    </ol>
    <p>
      Many banks are using the directions as an opportunity to offer customers stronger and simpler options at the same time — for
      example{" "}
      <Link to="/authentication">FIDO2 security keys, mobile soft tokens and visual transaction signing</Link> — while keeping SMS
      OTP as a fallback during migration.
    </p>

    <h2>Summary</h2>
    <p>
      The RBI's 2025 directions move India from a single assumed method to a principles-based regime: two distinct factors, one of
      them dynamic for remote transactions, risk-based checks where needed, and clear issuer liability. Banks keep the freedom to
      choose how they authenticate customers, and the responsibility for getting it right.
    </p>
    <p className="text-sm">
      <em>
        This article is a general summary for information only and is not legal advice. Always refer to the{" "}
        <a href={RBI_DIRECTIONS} target="_blank" rel="noopener noreferrer">
          full text of the directions
        </a>{" "}
        and any subsequent RBI circulars.
      </em>
    </p>
  </>
);

export default RbiMfaGuidelines;
