---
{
  "articleId": "hc-trash-retention",
  "locale": "en",
  "revision": 3,
  "title": "Understand automatic trash retention",
  "summary": "Compare its deletion date with the retention notice for the current plan, then verify that you know whether to restore it before scheduled cleanup.",
  "category": "files",
  "articleSlug": "trash-retention",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current understand automatic trash retention workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "trash retention",
    "trash and restore",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to understand automatic trash retention in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-retention-workflow-map-2026-10-14.webp" alt="Four-step interface map for understand automatic trash retention, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Deleted items in the current released Dosya client.
- Confirm the active account and workspace, then identify an item showing a deletion date.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: understand automatic trash retention

1. Open Deleted items and confirm the active workspace.
2. Select an item showing a deletion date and check its name or identifying details.
3. Compare its deletion date with the retention notice for the current plan.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that you know whether to restore it before scheduled cleanup.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted items view showing removed files available for review or restoration." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review names and deletion details in Deleted items before restoring or cleaning up. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that you know whether to restore it before scheduled cleanup. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and you know whether to restore it before scheduled cleanup. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Deleted items, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
