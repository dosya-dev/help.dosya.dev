---
{"articleId":"hc-sessions-compare-last-active","locale":"en","revision":1,"title":"Compare session last-active times","summary":"Compare session last-active times with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"sessions-compare-last-active","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the compare session last-active times workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-sessions","hc-revoke-other-sessions"],"keywords":["sessions compare last active","Active-session management details","Dosya help"]}
---
Compare session last-active times is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Account settings > Security > Active sessions in the current released client.
- Confirm the active account and workspace, then identify two similar session entries.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: compare session last-active times

1. Open Account settings > Security > Active sessions and confirm the active account and workspace.
2. Locate two similar session entries and verify its name or identifying details.
3. Refresh the page, perform one harmless action on the current device, and compare the updated time and client details.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the recently used session can be identified without guessing from location alone.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Dosya active sessions view listing devices and recent activity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare device, browser, time, and location context before revoking a session. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the recently used session can be identified without guessing from location alone. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Active sessions, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
