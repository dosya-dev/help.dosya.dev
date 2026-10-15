---
{
  "articleId": "hc-mobile-oauth-signin",
  "locale": "en",
  "revision": 6,
  "title": "Sign in on mobile with Google, Apple or GitHub",
  "summary": "Sign in on mobile with Google, GitHub, or Apple, complete provider and two-factor checks, and recover safely from cancelled or rejected callbacks.",
  "category": "account",
  "articleSlug": "mobile-oauth-signin",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 using apps/mobile/app/(auth)/login.tsx, apps/mobile/src/ui/AuthProviders.tsx, apps/mobile/src/ui/OAuthButton.tsx, apps/mobile/src/auth/oauth.ts, apps/mobile/src/auth/authStore.ts, and mobile auth routes/tests. No identity provider or production session was contacted.",
  "related": [
    "hc-mobile-signin",
    "hc-sessions"
  ],
  "keywords": [
    "mobile oauth signin",
    "mobile account security",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya mobile offers **Continue with Google**, **Continue with GitHub**, and **Sign in with Apple** on both login and signup. iOS uses Apple’s native sheet; Android uses a protected browser flow.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14.webp" alt="Mobile OAuth sign-in map covering provider choice, PKCE callback validation, optional two-factor authentication, and account verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start each provider attempt inside Dosya so its nonce and one-time callback can be verified. <a class="workflow-map-full" href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-oauth-signin-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On **Welcome back**, check the optional **Last used** marker, then select the provider connected to the intended Dosya account.
2. For Google, GitHub, or Apple on Android, complete the provider page in the system authentication session. For Apple on iOS, approve the native Apple sheet.
3. Return through the `dosya://auth/callback` link. The app compares the callback nonce with the pending flow and exchanges the one-time code using PKCE.
4. If Dosya asks for two-factor authentication, enter the authenticator/email code or choose the recovery-code path. OAuth does not bypass an account’s 2FA requirement.
5. After the Files screen opens, check the email on the **Settings** account card and review **My workspaces**.

Closing the browser or cancelling Apple’s native sheet returns without an error and creates no session. Apple may provide a name only on the first authorization. Provider credentials and the PKCE verifier are not shown in the app UI.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view used to confirm the account returned by a mobile OAuth provider." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Compare the authenticated email with the provider identity before accessing workspaces. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

A successful sign-in stores a mobile access/refresh token pair in secure storage. Refresh sessions can last up to the server policy’s lifetime; an explicit sign-out revokes this device best-effort. If another account replaces the saved identity, Dosya clears cached responses immediately and purges account-scoped local data.

## Expected result

The provider returns to Dosya, any required 2FA completes, and the Settings card shows the intended account. No workspace file changes occur merely from authentication.

## Troubleshooting

**The browser cannot open.** The app shows **Could not open the sign-in page.** Check the default browser, connectivity, and content restrictions, then try again.

**The callback was interrupted.** Retry after **Sign-in was interrupted. Please try again.** A provider code is single-use and duplicate delivery from Android’s browser and deep link is ignored after one accepted exchange.

**The app rejects the link.** **That sign-in link didn't come from this app. Please try signing in again.** means the saved nonce is absent or different. Start a new provider flow from Dosya instead of reopening an old callback URL.

**Apple cannot complete.** A missing token produces **Apple sign in failed. Please try again.**; native availability failures say **Apple sign in is unavailable on this device.**

## Related guides

- [Use the full mobile sign-in procedure](/account/mobile-sign-in)
- [Reviewing active sessions](/account/sessions)
