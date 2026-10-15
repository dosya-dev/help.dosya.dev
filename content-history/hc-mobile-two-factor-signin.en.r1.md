---
{"articleId":"hc-mobile-two-factor-signin","locale":"en","revision":1,"title":"Complete two-factor sign-in on mobile","summary":"Complete two-factor sign-in on mobile. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"account","articleSlug":"mobile-two-factor-signin","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the complete two-factor sign-in on mobile workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-signin","hc-sessions"],"keywords":["mobile two factor signin","mobile account security","Dosya help"]}
---
Complete two-factor sign-in on mobile is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Sign in in the current released Dosya client.
- Confirm the active account and workspace, then identify an account with two-factor authentication.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: complete two-factor sign-in on mobile

1. Open Mobile Sign in and confirm the active workspace.
2. Select an account with two-factor authentication and check its name or identifying details.
3. Enter the password, then the current verification code.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the session opens only after both factors succeed.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view showing the account that security settings apply to." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing device or sign-in security. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the session opens only after both factors succeed. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Sign in, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Mobile sign-in](/account/mobile-sign-in)
- [Review sessions](/account/sessions)
