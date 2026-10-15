---
{"articleId":"hc-two-factor-move-new-phone","locale":"en","revision":1,"title":"Move two-factor authentication to a new phone","summary":"Move two-factor authentication to a new phone with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"two-factor-move-new-phone","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the move two-factor authentication to a new phone workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-two-factor","hc-two-factor-recovery"],"keywords":["two factor move new phone","Two-factor authentication operations","Dosya help"]}
---
Move two-factor authentication to a new phone is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Account settings > Security > Two-factor authentication in the current released client.
- Confirm the active account and workspace, then identify signed-in account, old authenticator, and replacement device.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: move two-factor authentication to a new phone

1. Open Account settings > Security > Two-factor authentication and confirm the active account and workspace.
2. Locate signed-in account, old authenticator, and replacement device and verify its name or identifying details.
3. Keep the old factor available, follow the replace or re-enroll flow, test a code from the new device, and then remove the old entry.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the replacement authenticator completes a fresh sign-in.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Dosya two-factor authentication setup showing an authenticator QR code." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Finish enrollment only after a fresh authenticator code succeeds and recovery codes are stored safely. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the replacement authenticator completes a fresh sign-in. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Two-factor authentication, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Recover two-factor access](/account/two-factor-recovery)
