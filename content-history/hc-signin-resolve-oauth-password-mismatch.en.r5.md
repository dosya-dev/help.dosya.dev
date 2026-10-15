---
{
  "articleId": "hc-signin-resolve-oauth-password-mismatch",
  "locale": "en",
  "revision": 5,
  "title": "Resolve an OAuth and password identity mismatch",
  "summary": "Resolve Dosya sign-in confusion between Google, GitHub, Apple, and passwords by identifying the account's original method and adding a password.",
  "category": "account",
  "articleSlug": "signin-resolve-oauth-password-mismatch",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/login.tsx, apps/web/src/pages/profile/password.tsx, apps/api/src/lib/oauth-accounts.ts, and apps/api/src/pages/api/me/password.ts. Production authentication was not attempted.",
  "related": [
    "hc-password-reset",
    "hc-identity-methods"
  ],
  "keywords": [
    "signin resolve oauth password mismatch",
    "Account sign-in recovery details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
An account created with Google, GitHub, or Apple initially has no usable Dosya password. Entering a guessed provider password produces the same **Invalid email or password** response as any failed password login.

<figure class="help-screenshot"><a href="/screenshots/signin-resolve-oauth-password-mismatch-help-workflow-2026-10-14.webp"><img src="/screenshots/signin-resolve-oauth-password-mismatch-help-workflow-2026-10-14.webp" alt="OAuth sign-in map from Continue with Google, GitHub, or Apple through Password Not set and Set a password." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The identity path returns to the linked provider first, then adds a Dosya password inside Password and 2FA when desired. <a href="/screenshots/signin-resolve-oauth-password-mismatch-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On **Log In**, use the provider you originally chose: **Continue with Google**, **Continue with GitHub**, or **Continue with Apple**. A **Last used** badge reflects only this browser's stored choice, not server-confirmed account history.
2. For provider errors, follow the exact banner. A missing email asks for a verified/public provider email and email access; cancellation says sign-in was cancelled; other failures offer another method.
3. After provider sign-in, open **Profile → Password & 2FA**. An OAuth-only account shows **Password — Not set** and **Set a password**.
4. Set a password of at least 8 characters. No current password is requested because none exists. Success reads **Password set — You can now sign in with your email and password too.**
5. On later visits, either the linked provider identity or the newly set email/password can reach the same Dosya account.
6. If the provider's email changes, its stable provider subject remains linked to the existing account. On first linkage, a canonical email match can attach the provider to an existing Dosya user.
7. Contact support before creating a second account when the provider returns a different identity or inaccessible relay address.

<figure class="help-screenshot"><a href="/screenshots/account-password-reset-2026-10-12.webp"><img src="/screenshots/account-password-reset-2026-10-12.webp" alt="Dosya authentication recovery screen with email input for returning to the intended account instead of creating a duplicate." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use account recovery or the original provider when an inaccessible relay address or different provider identity blocks sign-in. <a href="/screenshots/account-password-reset-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Setting a password is a security change: the caller remains signed in and other browser/mobile credentials are revoked. It does not change the provider password.

## Expected result

The original provider signs in to the intended Dosya account, and **Set a password** adds a second working method when desired. Workspace membership and files stay with the resolved account rather than moving between identities.

## Related guides

- [Reset your password](/account/reset-password)
- [Understand sign-in methods](/account/identity-and-sign-in)
