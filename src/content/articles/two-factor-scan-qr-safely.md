---
{
  "articleId": "hc-two-factor-scan-qr-safely",
  "locale": "en",
  "revision": 5,
  "title": "Scan the authenticator QR code safely",
  "summary": "Scan Dosya's authenticator QR locally, protect the embedded shared secret, and confirm the six-digit setup code without exposing credentials.",
  "category": "account",
  "articleSlug": "two-factor-scan-qr-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/password.tsx and apps/api/src/lib/totp.ts. Production 2FA changes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor scan qr safely",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The authenticator QR contains the same raw shared secret shown beneath it. Anyone who copies either value can generate your future codes, so treat the setup screen like a password.

<figure class="help-screenshot"><a href="/screenshots/two-factor-scan-qr-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-scan-qr-safely-help-workflow-2026-10-14.webp" alt="Safe QR setup map showing Enable authenticator, local QR rendering, controlled scan, Verify and enable, and separate code storage." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The setup path keeps the reusable QR secret on controlled devices and requires a fresh six-digit code before activation. <a href="/screenshots/two-factor-scan-qr-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Use a private device and open **Profile → Password & 2FA → Enable authenticator**.
2. Dosya renders the QR inside your browser from the otpauth URI; it is not sent to a third-party QR image service.
3. Scan it with an authenticator you control. If scanning fails, enter the displayed secret manually.
4. Confirm that the authenticator entry identifies **dosya.dev** and your account email. The URI specifies SHA-1, six digits, and a 30-second period.
5. Do not send the QR or secret through chat, email, tickets, or screenshots. A QR image is a reusable credential, not a one-time login code.
6. Type a fresh code in **6-digit code** and select **Verify & enable**. Dosya accepts one adjacent 30-second step on either side for clock skew.
7. After the recovery codes appear, store them separately and close the modal with **Done**.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Two-factor settings page before QR setup, with Authenticator labeled Not enabled and Enable authenticator highlighted in green." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>The selected Password and 2FA view shows Authenticator marked Not enabled above the green enrollment button. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

If you exposed the QR before confirmation, cancel and reopen setup to stage a different secret. If exposure occurred after activation, replace the factor through a controlled disable-and-enable cycle.

## Expected result

The authenticator produces codes that Dosya verifies, the QR never leaves the controlled setup devices, and the settings page displays the **Authenticator** badge. Merely scanning without **Verify & enable** does not activate 2FA.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Use two-factor recovery](/account/two-factor-recovery)
