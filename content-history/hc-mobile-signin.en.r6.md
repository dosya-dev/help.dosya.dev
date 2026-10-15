---
{
  "articleId": "hc-mobile-signin",
  "locale": "en",
  "revision": 6,
  "title": "Sign in to Dosya on mobile",
  "summary": "Sign in on iPhone or Android with a password, Google, GitHub or Apple, complete any required challenge, and confirm the correct workspace first.",
  "category": "account",
  "articleSlug": "mobile-sign-in",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/mobile/app/(auth)/login.tsx, apps/mobile/src/ui/AuthProviders.tsx, apps/mobile/src/auth/authStore.ts, apps/mobile/src/auth/tokenStore.ts, apps/mobile/src/api/client.ts, apps/api/src/pages/api/auth/mobile/login.ts, and apps/api/src/lib/auth-login.ts. No physical iPhone, Android device, store build, or production account was used for this review.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-two-factor-signin",
    "hc-sessions"
  ],
  "keywords": [
    "Dosya mobile sign in",
    "iPhone cloud storage login",
    "Android file sharing login",
    "mobile two factor authentication",
    "Dosya workspace"
  ]
}
---
The Dosya mobile app supports email and password, Google, GitHub and Apple sign-in. On iPhone, **Sign in with Apple** opens Apple's native sheet; on Android it uses a browser flow. Google and GitHub use the browser on both platforms. These account choices work on iOS 15.1 or later and Android 7.0 or later.

A workspace role does not control whether you can authenticate. Your membership controls which workspaces and files appear after the account session opens.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" alt="Mobile sign-in map showing credentials, a possible two-factor challenge, and workspace verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the requested account factor, finish a security challenge if one appears, then inspect the workspace before changing files. <a class="workflow-map-full" href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Install Dosya from the platform source described in the installation guide.
- Have the account email and password ready, or access to the Google, GitHub or Apple identity linked to the account.
- If two-factor authentication is enabled, keep the authenticator, email inbox or an unused recovery code available.
- Connect the phone to the internet. An offline launch can restore a previously saved session, but a new sign-in must reach the API.

## Steps

1. Open Dosya. A returning installation shows **Welcome back** with **Email**, **Password**, **Forgot password?** and **Log In**.
2. For password sign-in, enter the complete email address and password, then tap **Log In**. The app trims the email and normalizes its case before sending it.
3. Alternatively, choose **Continue with Google**, **Continue with GitHub** or **Sign in with Apple**. Finish the provider screen and return to Dosya. The provider used most recently carries a **Last used** badge on this phone.
4. If the account requires another factor, Dosya opens **Two-factor authentication**. Enter the emailed or authenticator code, or tap **Use a recovery code**, then press **Verify**.
5. After the session opens, select **Settings** and inspect the name and email on the account card.
6. Open **Files** and read the workspace name in its header. Change the workspace there if the intended files belong somewhere else.
7. Open one known, non-sensitive folder. Its contents should match the selected account and workspace before you enable backup or upload anything.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability cards for the supported iPhone and Android installations." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>The same Dosya account can be used by the supported iPhone and Android apps. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya opens the signed-in tabs, **Settings** displays the intended identity, and **Files** shows a workspace that belongs to that account. A new mobile session also appears under **Profile → Sessions**. The access token lasts one hour and is refreshed from a session credential that can remain valid for up to 60 days unless it is revoked.

## Security and session behavior

- A successful login stores the token pair and last known profile in the operating system's secure store. On iPhone, the token is readable by background work after the device has been unlocked once following a restart.
- The app retries an expired access token through the saved refresh session. A network outage or server error does not by itself erase the credential.
- An explicit **Sign out** revokes the mobile session on the server when reachable, removes local tokens, clears cached account data and returns the app to its signed-out state.
- The password door and OAuth doors all enforce the account's enrolled two-factor method. Completing a provider screen does not bypass 2FA.
- Photo access, push permission and backup choices are device settings. Signing in does not silently grant them.

## Troubleshooting

**The app says “Email and password are required.”** Fill both fields. A blank password or an email made only of spaces is rejected before authentication.

**You see “Invalid email or password.”** Re-enter the credentials or use **Forgot password?**. Avoid repeated guesses: failures from one network trigger 15-minute and one-hour network locks, and 20 consecutive failures can lock the account for 24 hours.

**The response is “Please verify your email before signing in.”** Complete the email-verification flow for that address, then return to **Welcome back**.

**Dosya shows “Network request failed.”** Check connectivity and retry. That message means the app did not receive an API response; it is different from rejected credentials.

**A provider callback is refused.** If the app says **That sign-in link didn't come from this app. Please try signing in again.**, start that provider flow again from Dosya instead of reopening an old link.

**The wrong files appear after login.** Confirm the account card first, then inspect the workspace header. Changing workspaces is different from changing accounts.

## Related guides

- [Install the Dosya mobile app](/account/mobile-install)
- [Complete two-factor sign-in on mobile](/account/mobile-two-factor-signin)
- [Review and revoke sessions](/account/sessions)
