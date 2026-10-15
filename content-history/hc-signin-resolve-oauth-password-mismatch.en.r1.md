---
{"articleId":"hc-signin-resolve-oauth-password-mismatch","locale":"en","revision":1,"title":"Resolve an OAuth and password identity mismatch","summary":"Resolve an OAuth and password identity mismatch with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"signin-resolve-oauth-password-mismatch","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the resolve an oauth and password identity mismatch workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-password-reset","hc-identity-methods"],"keywords":["signin resolve oauth password mismatch","Account sign-in recovery details","Dosya help"]}
---
Resolve an OAuth and password identity mismatch is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Dosya sign-in and account recovery in the current released client.
- Confirm the active account and workspace, then identify account that may use Google, Apple, or password sign-in.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: resolve an OAuth and password identity mismatch

1. Open Dosya sign-in and account recovery and confirm the active account and workspace.
2. Locate account that may use Google, Apple, or password sign-in and verify its name or identifying details.
3. Return to sign-in, choose the method originally used for that email, and verify the profile after access.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the session opens the expected Dosya identity and workspaces.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-password-reset-2026-10-12.webp"><img src="/screenshots/account-password-reset-2026-10-12.webp" alt="Dosya password reset screen used to recover account access." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the newest recovery message and verify the account identity before setting a password. <a href="/screenshots/account-password-reset-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the session opens the expected Dosya identity and workspaces. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya sign-in and account recovery, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Reset your password](/account/reset-password)
- [Understand sign-in methods](/account/identity-and-sign-in)
