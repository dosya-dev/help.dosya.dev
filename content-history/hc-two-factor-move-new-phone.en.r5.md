---
{
  "articleId": "hc-two-factor-move-new-phone",
  "locale": "en",
  "revision": 5,
  "title": "Move two-factor authentication to a new phone",
  "summary": "Move Dosya authenticator 2FA to a replacement phone without losing access by preserving recovery options, then disabling and re-enabling securely.",
  "category": "account",
  "articleSlug": "two-factor-move-new-phone",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/password.tsx, apps/api/src/pages/api/me/2fa/disable.ts, and apps/api/src/pages/api/me/2fa/verify-totp.ts. Production 2FA changes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor move new phone",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The current web interface does not provide a direct “move phone” button. It requires disabling 2FA and enabling **Authenticator** again, which replaces the secret and recovery-code set. Keep the old phone, current session, and an unused recovery code until the new setup succeeds.

<figure class="help-screenshot"><a href="/screenshots/two-factor-move-new-phone-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-move-new-phone-help-workflow-2026-10-14.webp" alt="New-phone 2FA map from Disable and Current password through a replacement QR, Verify and enable, and new recovery codes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Moving the factor deliberately clears the old secret and codes before enrolling the replacement phone and testing a separate login. <a href="/screenshots/two-factor-move-new-phone-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in on a trusted browser and verify that you know the account password. OAuth-only accounts must use **Set a password** first because disabling 2FA requires one.
2. Preserve an unused recovery code offline. Do not erase the old phone yet.
3. In **Profile → Password & 2FA**, select **Disable**, enter **Current password**, and choose **Disable 2FA**. Wrong credentials return **Incorrect password**.
4. Understand the transition: disabling clears the live and pending authenticator secrets and deletes every existing recovery code. The account temporarily has no second factor.
5. Select **Enable authenticator**, scan the new QR on the replacement phone, enter a fresh six-digit code, and choose **Verify & enable**.
6. Save the new set of 10 codes. Confirm the **Authenticator** badge before signing out or wiping the old device.
7. Test a separate login with the new phone. The 2FA challenge expires after 5 minutes and allows 5 attempts; repeated failure requires starting login again.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Dosya Password and two-factor auth screen showing Authenticator as Not enabled and the green Enable authenticator control." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>The screenshot displays the disabled authenticator row and its enrollment entry point beneath the Password card. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Disabling and re-enabling generates mandatory security notices. If either action was not yours, change the password and review sessions immediately.

## Expected result

Only the replacement phone's secret generates accepted authenticator codes. The previous secret and all earlier recovery codes are invalid, while the newly issued ten codes can recover future sign-ins one time each.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Use two-factor recovery](/account/two-factor-recovery)
