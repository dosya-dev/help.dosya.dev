---
{"articleId":"hc-signin-find-missing-reset-email","locale":"en","revision":2,"title":"Find a missing password reset email","summary":"Verify the account address, check filtered mail, respect the reset cooldown and request one current Dosya recovery message without exposing whether an account exists.","category":"account","articleSlug":"signin-find-missing-reset-email","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current forgot-password page, generic success response, verified-email requirement, 10-minute resend cooldown, 30-minute token lifetime and reset email generation against local product source and relevant tests on 2026-10-14. The screenshot uses an isolated account.","related":["hc-password-reset","hc-signin-replace-expired-reset-link","hc-identity-methods"],"keywords":["password reset email not received","missing Dosya reset link","forgot password email","account recovery email","reset email spam"]}
---
Dosya always shows the same success message after a reset request, even when the address is unknown or unverified. This protects account privacy, so the message confirms only that the request was accepted, not that an email was sent.

## Before you start

- Write the exact address normally used to sign in, including spelling and domain.
- Check whether the account was created only with Google, Apple or another sign-in method.
- Keep access to the inbox and its spam, junk, quarantine and forwarding rules.
- Do not share screenshots containing a reset URL or email security details.

## Steps: locate or replace the reset email

1. Open **Forgot password**, enter the exact account email and complete the verification challenge.
2. Select **Send reset link** once. The page says that a link is on its way only if an account exists for that address.
3. Wait several minutes, then search all mail for the subject **Reset your dosya.dev password** and the `dosya.dev` sender domain.
4. Check spam, junk, promotions, focused or other inbox tabs, organization quarantine and mailbox rules.
5. Confirm that the address is verified. Dosya does not send password resets for an unverified account address.
6. Avoid repeated clicks. Dosya allows one reset email per account every 10 minutes and silently ignores faster requests while keeping the same privacy-preserving success message.
7. After 10 minutes, request one new message if none arrived. Open only the newest message because a new issued token invalidates older unused reset tokens.

<figure class="help-screenshot"><a href="/screenshots/account-password-reset-2026-10-12.webp"><img src="/screenshots/account-password-reset-2026-10-12.webp" alt="Dosya password recovery page used after opening a valid reset email." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A valid recovery message opens the Dosya password form. Treat its URL as a secret and use the newest message. <a href="/screenshots/account-password-reset-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One current reset message reaches the correct verified inbox and opens the Dosya **Set a new password** page. The link remains private and is used before its 30-minute expiry.

## Limits and important details

- Reset links expire after 30 minutes and are single-use.
- The success screen cannot confirm whether an account exists for the entered address.
- A mailbox provider can delay or quarantine delivery after Dosya accepts the request.
- Support should never ask for the reset URL, password or two-factor code.

## Troubleshooting

**You may have used another sign-in address.** Check password-manager records, prior Dosya notifications and the identity provider used at registration. Do not test addresses that belong to other people.

**The message exists but the link is expired.** Wait until the cooldown has passed, request one replacement and use the newest email.

**No message arrives after a correct, verified address and one careful retry.** Contact private support with the address, approximate request time and mailbox provider. Do not include the inbox password or any reset link.

## Related guides

- [Reset your password](/account/reset-password)
- [Replace an expired reset link](/account/signin-replace-expired-reset-link)
- [Understand sign-in methods](/account/identity-and-sign-in)
