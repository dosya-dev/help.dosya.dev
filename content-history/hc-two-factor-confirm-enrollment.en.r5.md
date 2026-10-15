---
{
  "articleId": "hc-two-factor-confirm-enrollment",
  "locale": "en",
  "revision": 5,
  "title": "Confirm two-factor enrollment",
  "summary": "Confirm Dosya authenticator enrollment with a fresh six-digit code, understand the accepted time window, and save the recovery set safely offline.",
  "category": "account",
  "articleSlug": "two-factor-confirm-enrollment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/password.tsx, apps/api/src/pages/api/me/2fa/verify-totp.ts, apps/api/src/lib/totp.ts, and apps/api/src/lib/totp-consume.ts. Production 2FA changes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor confirm enrollment",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Opening **Enable authenticator** creates a pending secret, but authenticator 2FA is not active until Dosya accepts a six-digit code. The live secret is promoted and recovery codes are created in one database batch.

<figure class="help-screenshot"><a href="/screenshots/two-factor-confirm-enrollment-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-confirm-enrollment-help-workflow-2026-10-14.webp" alt="Authenticator-enrollment map from Enable authenticator and QR scan through Verify and enable and ten recovery codes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Enrollment becomes active only after a fresh six-digit TOTP is accepted and the Recovery codes screen is displayed. <a href="/screenshots/two-factor-confirm-enrollment-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Password & 2FA → Enable authenticator**.
2. Scan the QR or enter the displayed secret in your authenticator. The setup uses issuer **dosya.dev**, six digits, SHA-1, and a 30-second period.
3. Wait for a fresh code if the current one is about to roll over, type all six digits, and choose **Verify & enable**.
4. Dosya accepts the current 30-second step plus one step before or after, a 90-second tolerance for clock skew. An invalid value returns **Invalid code. Check your authenticator app and try again.**
5. If setup was not started or its pending secret is absent, the response is **No TOTP secret found. Start setup first.**
6. After success, save all 10 recovery codes with **Copy all** or **Download**, then choose **Done**.
7. Return to the settings row and verify the **Authenticator** badge and **10 of 10 codes remaining**.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Password and two-factor auth page with Password and 2FA selected, Authenticator marked Not enabled, and an Enable authenticator button." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>The pictured settings state shows the authenticator method still disabled and the control that starts enrollment. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

The setup code's time step is recorded as used, so that same authenticator value cannot immediately complete a sign-in. Closing the dialog before verification leaves 2FA unchanged.

## Expected result

The pending encrypted secret becomes the live authenticator secret, the method becomes TOTP, and ten one-time recovery-code hashes replace any previous set. A mandatory security notice records that authenticator 2FA was enabled.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Use two-factor recovery](/account/two-factor-recovery)
