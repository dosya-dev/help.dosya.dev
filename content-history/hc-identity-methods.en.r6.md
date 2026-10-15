---
{
  "articleId": "hc-identity-methods",
  "locale": "en",
  "revision": 6,
  "title": "Review account identity and sign-in methods",
  "summary": "Confirm the account email, determine whether a password exists, and add email-and-password sign-in safely to an OAuth-created account without lockout.",
  "category": "account",
  "articleSlug": "identity-and-sign-in",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally from apps/web/src/pages/profile/identity.tsx, apps/web/src/pages/profile/password.tsx, apps/api/src/pages/api/me.ts, apps/api/src/pages/api/me/password.ts, and apps/web/src/pages/login.tsx. This source-only check made no live sign-in or provider request.",
  "related": [
    "hc-profile-settings",
    "hc-password-reset",
    "hc-two-factor"
  ],
  "keywords": [
    "Dosya sign in methods",
    "set account password",
    "Google GitHub Apple login",
    "account identity"
  ]
}
---
Dosya supports email and password plus **Continue with Google**, **Continue with GitHub**, and **Continue with Apple** on the sign-in page. The profile does not provide a connected-provider list or a disconnect button. It exposes the verified account email and whether the account currently has a usable password.

An account created through Google, GitHub, or Apple can show **Password — Not set**. In that state, **Set a password** adds email-and-password sign-in to the same account; it does not remove the provider sign-in. The password must contain **8 to 256 characters**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/identity-and-sign-in-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" alt="Account identity review linking the verified email to the Password status and safe private-window sign-in test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm the email under <strong>Identity</strong>, inspect <strong>Password & 2FA</strong>, then test any newly added password in a private window. <a class="workflow-map-full" href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Identity** and read **Email address**. A **Verified** badge means the stored address has completed verification; **Unverified** means it has not.
2. Open **Profile → Password & 2FA**.
3. If the **Password** row offers **Change password**, the account already supports email-and-password sign-in.
4. If it shows **Not set**, select **Set a password**. Enter **New password** and **Confirm new password**, using at least 8 and no more than 256 characters.
5. Select **Set a password** in the dialog. The success message says **Password set — You can now sign in with your email and password too.**
6. Keep the current session open and use a private browser window to sign in with the email from **Identity** and the new password.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile Identity reference showing the email that must match the account used in a sign-in test." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the exact <strong>Email address</strong> shown here when testing the password; changing a display name does not change this identity. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Rules and effects

OAuth-created accounts do not need a current password when setting their first one. Accounts that already have a password must use **Change password** and provide **Current password**. A successful password update keeps the requesting credential and revokes other browser and mobile sessions, so be prepared to sign in again on those devices.

Two-factor authentication cannot be enabled from a no-password state in the web profile, because disabling it later requires password verification. Set the password first, then configure email or authenticator-app 2FA.

The last-used badge on the sign-in page is stored in that browser and is only a convenience hint. It is not an authoritative inventory of identity providers attached to the account.

## Troubleshooting

**Passwords do not match** means the two new values differ. **Password too short** is shown below 8 characters. If a private-window test fails, keep the original session open, confirm the email again, and use [Reset a password](/account/reset-password) rather than repeatedly guessing.

## Expected result

You know the account's verified email and password status, and any new password signs into that same account without removing Google, GitHub, or Apple access.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Reset a password](/account/reset-password)
- [Use two-factor authentication](/account/two-factor)
