---
{
  "articleId": "hc-two-factor-reenroll-after-recovery",
  "locale": "en",
  "revision": 5,
  "title": "Re-enroll two-factor authentication after recovery",
  "summary": "Re-enroll Dosya authenticator 2FA after recovery-code access, replace the old secret, and confirm new codes before ending the session securely.",
  "category": "account",
  "articleSlug": "two-factor-reenroll-after-recovery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/login-2fa.tsx, apps/api/src/pages/api/auth/2fa/verify.ts, apps/api/src/pages/api/me/2fa/disable.ts, and apps/api/src/pages/api/me/2fa/verify-totp.ts. Production 2FA changes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor reenroll after recovery",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
A recovery code signs in once; it does not disable authenticator 2FA or restore the lost secret. Use the resulting trusted session to replace the factor before it ends.

<figure class="help-screenshot"><a href="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp" alt="Recovery re-enrollment map from one-time recovery code through Disable 2FA, a new authenticator secret, and replacement codes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The recovered session is used to destroy the lost factor, complete Verify and enable, and store the newly issued code set. <a href="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Complete email/password login, select **Use a recovery code instead**, enter one XXXX-XXXX value, and choose **Use recovery code**. Spaces and hyphens are normalized, but a successful code is atomically marked used.
2. The login challenge lasts 5 minutes and permits 5 attempts. Errors count down **Invalid code. N attempts remaining.**; the cap returns **Too many attempts. Please log in again.**
3. Open **Profile → Password & 2FA**. Confirm that you know the current password; an OAuth-only account must set one before it can turn 2FA off.
4. Select **Disable**, provide the password, and complete **Disable 2FA**. This destroys the old authenticator secret and all remaining old recovery codes.
5. Immediately choose **Enable authenticator**, scan the new QR, enter the six-digit value, and select **Verify & enable**.
6. Store the newly displayed ten recovery codes and confirm the **Authenticator** badge.
7. Review sessions if the factor was lost through theft or account compromise.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Password and two-factor auth settings with the Password and 2FA sidebar item highlighted and Enable authenticator visible." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>The visible Authenticator row says Not enabled and provides the button used to begin another setup. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

There is a short interval between disable and successful enrollment when the account has no second factor. Keep the authenticated browser private and finish the replacement without leaving it unattended.

## Expected result

The recovery code used for entry cannot be reused, the lost authenticator secret no longer works, and the replacement app supplies valid TOTP codes. Only the new recovery-code set remains available.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Use two-factor recovery](/account/two-factor-recovery)
