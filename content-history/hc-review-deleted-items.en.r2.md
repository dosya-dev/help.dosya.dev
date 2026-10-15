---
{
  "articleId": "hc-review-deleted-items",
  "locale": "en",
  "revision": 2,
  "title": "Review Deleted items before cleanup",
  "summary": "Sort or inspect names, paths and deletion times before selecting anything, then verify that the cleanup selection contains only items you can remove.",
  "category": "files",
  "articleSlug": "review-deleted-items",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review deleted items before cleanup workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "review deleted items",
    "trash and restore",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to review Deleted items before cleanup in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Deleted items is the last review point before restoration or permanent removal. Names, original paths and deletion times help identify the correct records.

<figure class="help-screenshot"><a href="/screenshots/review-deleted-items-workflow-map-2026-10-14.webp"><img src="/screenshots/review-deleted-items-workflow-map-2026-10-14.webp" alt="Four-step interface map for review deleted items before cleanup, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/review-deleted-items-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
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

## Verify the result

Build a small cleanup selection and recheck every name before continuing to a permanent action.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

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

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
