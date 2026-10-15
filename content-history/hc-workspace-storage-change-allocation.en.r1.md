---
{"articleId":"hc-workspace-storage-change-allocation","locale":"en","revision":1,"title":"Change a workspace storage allocation safely","summary":"Change a workspace storage allocation safely with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-storage-change-allocation","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the change a workspace storage allocation safely workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-storage-allocation","hc-storage-usage"],"keywords":["workspace storage change allocation","Workspace storage controls","Dosya help"]}
---
Change a workspace storage allocation safely is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the workspace storage and usage view in the current released client.
- Confirm the active account and workspace, then identify authorized allocation control and current workspace usage.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: change a workspace storage allocation safely

1. Open the workspace storage and usage view and confirm the active account and workspace.
2. Locate authorized allocation control and current workspace usage and verify its name or identifying details.
3. Choose a value above current usage, review the confirmation, save, and reopen the storage view.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the workspace reports the new allocation without placing existing data over quota.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown showing used and available workspace capacity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Allow storage accounting to update after transfers or permanent deletion before comparing totals. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the workspace reports the new allocation without placing existing data over quota. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the workspace storage and usage view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
