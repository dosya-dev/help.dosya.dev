---
{"articleId":"hc-mobile-two-factor-signin","locale":"en","revision":6,"title":"Complete two-factor sign-in on mobile","summary":"Finish a Dosya mobile login with an email code, authenticator code or unused recovery code, and recover from expiry or attempt limits safely.","category":"account","articleSlug":"mobile-two-factor-signin","status":"published","lastReviewed":"2026-10-14","verification":"Source-reviewed on 2026-10-14 using apps/mobile/app/(auth)/2fa.tsx, apps/mobile/src/auth/api.ts, apps/mobile/src/auth/authStore.ts, apps/api/src/pages/api/auth/mobile/login.ts, apps/api/src/pages/api/auth/mobile/2fa.ts, apps/api/src/lib/totp.ts, apps/api/src/lib/totp-consume.ts, and apps/api/src/lib/recovery.ts. No live email, authenticator device, physical phone, or production session was tested.","related":["hc-mobile-signin","hc-two-factor","hc-sessions"],"keywords":["Dosya mobile 2FA","email verification code login","authenticator app cloud storage","recovery code sign in","two factor attempt limit"]}
---
Dosya requests a second factor after a password or identity-provider login when the account has email or authenticator 2FA enabled. The first successful factor creates a **five-minute** challenge; it does not create a signed-in mobile session yet.

The mobile screen accepts the method named by the account and also provides **Use a recovery code**. Workspace roles and subscription plans do not alter this account-security check.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14.webp" alt="Two-factor mobile sign-in map showing a five-minute challenge, verification choice, and new session." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Complete the method requested by the account before the challenge expires or use one saved recovery code. <a class="workflow-map-full" href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-two-factor-signin-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Begin from **Welcome back** and complete the password, Google, GitHub or Apple step for the intended account.
- For email 2FA, open the inbox attached to the Dosya account and use the most recent message whose subject begins with the six-digit code.
- For authenticator 2FA, use the current six-digit value shown for `dosya.dev`.
- If neither method is available, locate one unused recovery code saved when authenticator 2FA was enabled or regenerated.

## Steps

1. Wait for the screen titled **Two-factor authentication**.
2. Read its subtitle. Email accounts show **Enter the code we emailed you**; authenticator accounts show **Enter the code from your authenticator app**.
3. Enter the six digits in **Code** and tap **Verify**. Authenticator values advance every 30 seconds; Dosya accepts the matching current interval and one interval on either side to tolerate clock drift.
4. To use account recovery, tap **Use a recovery code**. The input changes to **Recovery code**, and the secondary action becomes **Use authenticator code**.
5. Enter one saved recovery value. Generated codes contain eight characters in `XXXX-XXXX` form, but spaces and the hyphen are ignored during verification.
6. Tap **Verify** once. A valid factor is consumed and the app opens the signed-in tabs.
7. Visit **Settings**, tap the identity card, open **Sessions**, and find the new row marked **This device**. That row proves the second factor completed and a mobile session was minted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity screen for confirming the account reached after a mobile two-factor challenge." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>After verification, confirm the account email before using the newly created session. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The verification screen closes only after the server accepts the factor. Dosya stores a one-hour mobile access token plus a renewable refresh credential with a maximum 60-day lifetime, displays the intended account, and lists the phone in **Sessions**.

## Limits and irreversible effects

- During a live challenge, every non-empty submitted value consumes one of five attempts. The error states how many attempts remain.
- After the cap, Dosya returns **Too many attempts. Please log in again.** A fresh password or provider sign-in is required.
- The challenge expires five minutes after the first factor. There is no resend button on the mobile 2FA screen; restart sign-in to create a new challenge and email code.
- An authenticator value accepted for one protected action cannot be replayed during the same time window.
- A recovery code is single-use. Two simultaneous requests using the same saved code cannot both succeed.
- TOTP enrollment creates ten recovery codes. The current count is visible in **Settings → Security**; regenerating them invalidates the previous set.

## Troubleshooting

**The message is “Invalid code. 4 attempts remaining.”** Confirm the requested method, use the newest email, or wait for a fresh authenticator interval. Do not keep guessing because each rejection spends an attempt.

**Dosya says “This challenge has expired. Please log in again.”** Return to **Welcome back**, repeat the first factor, and finish the new challenge within five minutes.

**You see “This challenge has already been used. Please log in again.”** The token was consumed by an earlier successful request. Start a clean login rather than resubmitting the screen.

**An authenticator code is rejected immediately after another login.** The server makes an accepted TOTP interval single-use. Wait for the app to show the next six-digit value.

**The email never arrives.** Check spam and the account address. If the first step reports **Could not send verification email. Try again.**, retry the full sign-in later; no redeemable challenge is stored when sending fails.

## Related guides

- [Sign in to Dosya on mobile](/account/mobile-sign-in)
- [Set up two-factor authentication](/account/two-factor)
- [Review and revoke sessions](/account/sessions)
