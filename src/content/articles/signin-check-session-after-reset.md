---
{"articleId":"hc-signin-check-session-after-reset","locale":"en","revision":2,"title":"Check your sessions after resetting your password","summary":"Confirm the new password and second factor work, then verify that the password reset removed every earlier browser and mobile session.","category":"account","articleSlug":"signin-check-session-after-reset","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web reset form, password-reset API, browser and mobile credential revocation, two-factor challenge path and Sessions page against local product source and relevant tests on 2026-10-14. Screenshots use an isolated account.","related":["hc-password-reset","hc-sessions","hc-two-factor"],"keywords":["sessions after password reset","sign out devices after password change","secure Dosya account","password reset session revocation","account recovery"]}
---
A completed Dosya password reset invalidates the account's earlier browser sessions and mobile access tokens. The reset browser receives a fresh session when no second factor is enrolled. Accounts with two-factor authentication must finish the verification challenge first.

## Before you start

- Use the newest password-reset email and finish the reset on a device you trust.
- Never send the reset URL, new password or two-factor code to another person.
- Keep access to the account email and enrolled authenticator or email factor.
- If you did not request the reset, stop and secure the email account before continuing.

## Steps: complete the reset and check the current session

1. Open the reset link and enter the new password twice. Follow every rule shown by the strength meter.
2. Select **Reset password** once. A reset link is single-use, so retrying the same link after success reports that it was already used.
3. If Dosya opens the two-factor page, enter the expected code. The password has already changed at this point; the code controls the new sign-in session.
4. If Dosya reports that the password changed but it could not send the verification code, return to sign in and use the new password to start a fresh challenge.
5. After access is restored, open **Profile → Sessions**.
6. Confirm that the current post-reset session is present and earlier browsers or phones are absent. The reset revokes them automatically.
7. Test one other device you previously used. It should require a new sign-in rather than opening the account from its old credential.

<figure class="help-screenshot"><a href="/screenshots/account-password-reset-2026-10-12.webp"><img src="/screenshots/account-password-reset-2026-10-12.webp" alt="Dosya Set a new password page with password and confirmation fields." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Complete the reset on a trusted device. The submitted reset invalidates earlier browser and mobile credentials. <a href="/screenshots/account-password-reset-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The new password works, any required two-factor check completes, and the Sessions page contains only sessions created after the reset. Every older browser and mobile device must authenticate again.

## Limits and important details

- Password reset revokes both browser sessions and mobile refresh credentials, including devices that were offline during the reset.
- A two-factor account does not receive a full session until its second factor succeeds.
- Changing a password does not rotate API keys or third-party integration credentials. Review those separately if they may be exposed.
- A session can appear with an approximate device or location label. Use timing and your own activity as context.

## Troubleshooting

**The new password works but Dosya asks for a code.** This is expected when two-factor authentication is enrolled. Complete the challenge using the configured method.

**An old device still displays cached content.** Refresh it and try an authenticated action. The revoked credential should be refused even if an old screen remains visible.

**You still see an unfamiliar new session.** Revoke it immediately, secure the email account and two-factor method, then contact private support with nonsecret timestamps and device labels.

## Related guides

- [Reset your password](/account/reset-password)
- [Review active sessions](/account/sessions)
- [Use two-factor authentication](/account/two-factor)
