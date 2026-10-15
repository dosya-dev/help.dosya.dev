---
{"articleId":"hc-review-deleted-items","locale":"en","revision":1,"title":"Review Deleted items before cleanup","summary":"Review Deleted items before cleanup. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"review-deleted-items","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the review deleted items before cleanup workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-restore-deleted","hc-permanent-delete"],"keywords":["review deleted items","trash and restore","Dosya help"]}
---
Review Deleted items before cleanup is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Deleted items in the current released Dosya client.
- Confirm the active account and workspace, then identify the current trash list.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review Deleted items before cleanup

1. Open Deleted items and confirm the active workspace.
2. Select the current trash list and check its name or identifying details.
3. Sort or inspect names, paths and deletion times before selecting anything.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the cleanup selection contains only items you can remove.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted items view showing removed files available for review or restoration." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review names and deletion details in Deleted items before restoring or cleaning up. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the cleanup selection contains only items you can remove. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Deleted items, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
