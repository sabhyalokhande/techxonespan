import { Link } from "react-router-dom";

const SmsOtpAlternatives = () => (
  <>
    <p className="lead">
      SMS one-time passwords became the default second factor for online banking because they were simple: every customer has a
      phone number, and nothing needs installing. But the threats have changed, and regulators are taking note. This article
      explains the risks of SMS OTP and the stronger alternatives banks are moving to.
    </p>

    <h2>Why SMS OTP became the default</h2>
    <p>
      When banks first added a second factor for online transactions, SMS was the obvious choice. It worked on any handset,
      needed no app, and customers understood it instantly. For years that convenience outweighed the risks. Today, attackers
      have industrialised the techniques that defeat it.
    </p>

    <h2>The risks of SMS OTP</h2>
    <h3>SIM swap and number takeover</h3>
    <p>
      In a SIM swap, a fraudster convinces or bribes someone at a mobile operator to move the victim's number to a SIM they
      control. From that moment, every OTP goes to the attacker. The customer often notices only when their phone loses signal.
    </p>
    <h3>Interception in the telecom network</h3>
    <p>
      SMS was not designed as a secure channel. Messages are not end-to-end encrypted, and weaknesses in telecom signalling
      protocols such as SS7 have been used to redirect or read messages in transit.
    </p>
    <h3>Social engineering</h3>
    <p>
      The most common attack is also the simplest: calling the customer while posing as the bank, a delivery company or a
      government agency, and persuading them to read out the code. Because the OTP is a short string a person can see and repeat,
      it can be shared.
    </p>
    <h3>Real-time phishing</h3>
    <p>
      Phishing kits now relay credentials and OTPs to the genuine bank site the moment the victim types them into a fake page.
      The OTP is valid, used within seconds, and the attacker is in.
    </p>
    <h3>Malware on the device</h3>
    <p>
      On mobile devices, malicious apps that obtain permission to read notifications or messages can capture OTPs silently and
      forward them to an attacker.
    </p>
    <h3>Delivery and reliability</h3>
    <p>
      Beyond security, SMS depends on network coverage and operator delivery. Delays and failures frustrate customers,
      particularly when travelling, and every message carries a cost.
    </p>

    <h2>Regulators are moving away from SMS OTP</h2>
    <ul>
      <li>
        <strong>United States:</strong> NIST's digital identity guidelines (SP 800-63B, revision 4, finalised in 2025) classify
        authentication over the public telephone network, which includes SMS, as a <em>restricted</em> authenticator.
        Organisations using it must assess and accept the risk.
      </li>
      <li>
        <strong>Singapore:</strong> in July 2024, MAS and the Association of Banks in Singapore announced that major retail banks
        would phase out OTPs for account login by customers who have activated a digital token on their phone.
      </li>
      <li>
        <strong>United Arab Emirates:</strong> in 2025 the Central Bank of the UAE directed licensed institutions to phase out SMS
        and email OTPs for customer authentication in favour of stronger methods.
      </li>
      <li>
        <strong>India:</strong> the RBI's 2025 authentication directions, in force since April 2026, are deliberately
        technology-neutral. SMS OTP remains permitted, but banks are free to adopt other factors.
      </li>
    </ul>

    <h2>The main alternatives</h2>
    <h3>In-app push approval</h3>
    <p>
      The customer receives a notification in the bank's own app and approves the login or payment with a tap, often with a
      biometric check. The approval is cryptographically tied to a registered device, so there is no code to intercept or read
      out. Showing the transaction details in the app also helps customers spot requests they did not start.
    </p>
    <h3>Mobile soft tokens</h3>
    <p>
      A soft token generates time-based codes or cryptographic signatures inside an app on the customer's phone, linked to that
      device at enrolment. It works without network coverage and is not exposed to SIM swap or SMS interception.
    </p>
    <h3>Transaction signing</h3>
    <p>
      For high-value payments, transaction signing binds the authentication to the payment itself. The customer sees the amount
      and beneficiary on a trusted app or device, and the signature they produce is only valid for those details. Visual
      cryptogram methods let the customer scan a coloured pattern from the screen instead of typing details by hand. Even if a
      session is hijacked, the attacker cannot reuse the approval for a different payment.
    </p>
    <h3>FIDO2 and passkeys</h3>
    <p>
      FIDO2 replaces codes entirely with a cryptographic key held on the customer's device or a hardware security key, unlocked
      with a fingerprint, face scan or PIN. Because each credential only works on the bank's genuine domain, FIDO2 is resistant
      to phishing by design.
    </p>
    <h3>Hardware OTP tokens</h3>
    <p>
      Dedicated hardware tokens generate codes offline. They remove SIM swap and SMS interception from the picture and suit
      customers who do not use a smartphone, though a displayed code can still be shared under pressure.
    </p>

    <h2>Choosing the right mix</h2>
    <p>
      There is rarely a single replacement for SMS OTP. Banks typically match methods to customer segments and risk:
    </p>
    <ul>
      <li>
        <strong>Retail mobile customers:</strong> in-app push approval or soft tokens with biometrics, with FIDO2 passkeys for
        passwordless login.
      </li>
      <li>
        <strong>High-value and corporate customers:</strong> transaction signing and hardware security keys.
      </li>
      <li>
        <strong>Customers without smartphones:</strong> hardware OTP tokens, with SMS retained as a fallback where necessary.
      </li>
    </ul>
    <p>
      Whatever the mix, an app that approves payments becomes a target in its own right, so the banking app needs protection
      against tampering, overlay attacks and malware too.
    </p>

    <h2>Planning the migration</h2>
    <ol>
      <li>
        <strong>Secure enrolment.</strong> Binding the app or token to the customer is the moment attackers target. Verify identity
        strongly when a new device is registered.
      </li>
      <li>
        <strong>Run SMS in parallel.</strong> Keep SMS as a fallback while customers move over, and reduce its scope over time.
      </li>
      <li>
        <strong>Use risk-based step-up.</strong> Reserve the strongest checks for new beneficiaries, high values and unusual
        behaviour, so everyday banking stays fast.
      </li>
      <li>
        <strong>Educate customers.</strong> Explain the change, and that the bank will never ask them to approve something they
        did not start.
      </li>
    </ol>
    <p>
      A practical starting point is to compare the{" "}
      <Link to="/authentication#software">software and hardware authenticators available for banks</Link> against your customer
      segments and transaction risk.
    </p>

    <h2>Summary</h2>
    <p>
      SMS OTP is convenient, but SIM swap, interception, real-time phishing and social engineering have eroded its value as a
      security control. Regulators from the US to Singapore and the UAE are steering banks toward stronger options, and India's
      method-neutral rules leave banks free to follow. Push approval, soft tokens, transaction signing and FIDO2 each close gaps
      that SMS leaves open, and most banks will use a combination of them.
    </p>
  </>
);

export default SmsOtpAlternatives;
