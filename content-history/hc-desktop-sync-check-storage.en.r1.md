---
{"articleId":"hc-desktop-sync-check-storage","locale":"en","revision":1,"title":"Check storage before starting desktop sync","summary":"Check storage before starting desktop sync with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-sync-check-storage","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the check storage before starting desktop sync workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-modes","hc-desktop-sync-folder"],"keywords":["desktop sync check storage","Desktop sync planning","Dosya help"]}
---
Check storage before starting desktop sync is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Sync settings in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify local source size, device free space, and workspace headroom.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: check storage before starting desktop sync

1. Open Sync settings in the Dosya desktop app and confirm the active account and workspace.
2. Locate local source size, device free space, and workspace headroom and verify its name or identifying details.
3. Compare all three values and allow space for temporary files and version changes.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the first sync can finish without predictable storage exhaustion.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Dosya desktop sync mode selection for a local folder and workspace destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Plan the first sync with a small folder and enough local and workspace storage. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the first sync can finish without predictable storage exhaustion. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Sync settings in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
