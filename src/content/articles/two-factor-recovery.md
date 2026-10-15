---
{"articleId":"hc-two-factor-recovery","locale":"en","revision":1,"title":"Recovering access when a second factor is unavailable","summary":"Use a saved one-time recovery code when an authenticator device is unavailable, then replace codes and review account security.","category":"account","articleSlug":"two-factor-recovery","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current login 2FA recovery-code path, one-time code behavior and regeneration controls against the local current web app, API and automated tests on 2026-10-12. No real recovery code was entered or captured.","related":["hc-two-factor","hc-password-reset","hc-suspicious-activity"],"keywords":["lost authenticator","recovery code","2FA recovery","second factor","lost phone"]}
---
Authenticator-based two-factor authentication provides one-time recovery codes during setup. Use one when you know the account password but cannot access the authenticator device.

Email-based 2FA does not use authenticator recovery codes. Restore access to the email inbox or contact private support with non-secret account details.

## Before you start

- Complete the normal email and password sign-in first.
- Find the recovery codes saved during authenticator setup. Never send them to support or another person.
- Use a trusted device and private connection.
- Each recovery code works once.

## Steps: sign in with a recovery code

1. At **Two-factor authentication**, select **Use a recovery code instead**.
2. Enter one unused code in the displayed format.
3. Select **Use recovery code**.
4. After sign-in, open **Profile → Password & 2FA**.
5. Confirm the remaining recovery-code count.
6. If codes were exposed or are running low, choose the regenerate action and confirm with the current password.
7. Store the replacement codes offline. Regeneration invalidates the previous set.
8. Enroll a replacement authenticator if the original device is permanently unavailable.

<figure class="help-screenshot"><a href="/screenshots/account-two-factor-recovery-2026-10-12.webp"><img src="/screenshots/account-two-factor-recovery-2026-10-12.webp" alt="Dosya Two-factor authentication page switched to the Recovery code field with a Use recovery code button." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Select Use a recovery code instead, enter one unused code and continue. Do not include a real code in screenshots or support messages. <a href="/screenshots/account-two-factor-recovery-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A valid unused recovery code completes the second-factor challenge and creates the signed-in session. That code is marked used and cannot authenticate another sign-in.

<figure class="help-screenshot"><a href="/screenshots/two-factor-enabled-2026-10-10.webp"><img src="/screenshots/two-factor-enabled-2026-10-10.webp" alt="Dosya Password and two-factor authentication settings showing authenticator protection enabled and remaining recovery codes." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>After recovery, return to Password & 2FA to review the method and replace recovery codes when needed. <a href="/screenshots/two-factor-enabled-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Limits and security behavior

- Recovery codes apply to authenticator-based 2FA and are single-use.
- Regenerating codes invalidates every unused code from the old set.
- Resetting the account password does not remove the second-factor requirement.
- Support should never ask for a password, authenticator code or recovery code.
- Losing both the authenticator and every recovery code can require private account-recovery review; recovery is not guaranteed from public information.

## Troubleshooting

**The code is rejected.** Check for transcription errors and try another unused code from the same set. A code used before or invalidated by regeneration will fail.

**The page expects six digits.** Select **Use a recovery code instead** before entering the alphanumeric recovery code.

**The account uses email 2FA.** Recovery codes are not used. Restore inbox access and request a new email code through the sign-in flow.

**No recovery material remains.** From a still-signed-in trusted session, open Password & 2FA and regenerate codes. Without a trusted session, contact [private support](https://app.dosya.dev/support) and do not share secrets.

## Related guides

- [Turning on two-factor authentication](/account/two-factor)
- [Signing in and resetting a forgotten password](/account/reset-password)
- [Responding to suspicious account activity](/account/suspicious-activity)
