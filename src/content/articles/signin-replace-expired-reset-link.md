---
{"articleId":"hc-signin-replace-expired-reset-link","locale":"en","revision":2,"title":"Replace an expired password reset link","summary":"Request one replacement after the cooldown, discard older reset messages and use the newest single-use link within its 30-minute lifetime.","category":"account","articleSlug":"signin-replace-expired-reset-link","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current forgot-password and reset-password pages, 30-minute token expiry, single-use enforcement, old-token invalidation, 10-minute resend cooldown and two-factor continuation against local product source and relevant tests on 2026-10-14. The screenshot uses an isolated account.","related":["hc-password-reset","hc-signin-find-missing-reset-email","hc-two-factor"],"keywords":["expired password reset link","request new reset email","Dosya recovery link expired","single use password reset","account recovery"]}
---
A Dosya password-reset link expires 30 minutes after it is issued and works only once. A newly issued reset token also invalidates older unused tokens for the same account. Replace an expired link instead of repeatedly reopening old messages.

## Before you start

- Confirm that the error came from a `dosya.dev` reset page.
- Keep the correct verified account email available.
- Close old reset tabs and avoid copying their URLs into chat, notes or support requests.
- Wait 10 minutes after the most recent reset request before asking for another message.

## Steps: request and use a replacement

1. From the expired-link message, follow **request a new one**, or open **Forgot password** directly.
2. Enter the exact account email and complete the verification challenge.
3. Select **Send reset link** once. Requests inside the 10-minute account cooldown return the normal success message but do not send another email.
4. Find the newest message with subject **Reset your dosya.dev password**. Compare delivery times and ignore every earlier reset message.
5. Open the newest link on a trusted device. Dosya reads the token into memory and removes it from the address bar to reduce accidental exposure.
6. Enter and confirm a strong new password, then submit the form once.
7. Complete the two-factor challenge if prompted. The reset is already complete before that challenge; the second factor authorizes the new session.

<figure class="help-screenshot"><a href="/screenshots/account-password-reset-2026-10-12.webp"><img src="/screenshots/account-password-reset-2026-10-12.webp" alt="Dosya Set a new password page opened from a valid recovery email." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The newest valid link opens this form. Finish it within 30 minutes and submit it only once. <a href="/screenshots/account-password-reset-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The newest link opens the password form, the new password is accepted, and the token cannot be reused. Dosya signs the account in with a fresh session or continues to two-factor verification.

## Limits and important details

- Expired, already-used and invalidated links cannot be reactivated.
- Requesting another reset too soon does not extend the existing token or send a second message.
- Resetting the password revokes earlier browser and mobile credentials.
- If two-factor delivery fails after the reset, sign in normally with the new password to start another challenge.

## Troubleshooting

**The newest message still says expired.** Verify its delivery time and the device clock, then wait for the cooldown and request one final replacement.

**The link says it was already used.** Try signing in with the password set during that attempt. If it does not work, request a new link.

**The form says the reset link is missing or invalid.** Open the full link directly from the email. A security product or manual copy may have removed its token fragment.

## Related guides

- [Reset your password](/account/reset-password)
- [Find a missing reset email](/account/signin-find-missing-reset-email)
- [Use two-factor authentication](/account/two-factor)
