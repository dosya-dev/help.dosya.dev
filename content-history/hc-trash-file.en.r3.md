---
{
  "articleId": "hc-trash-file",
  "locale": "en",
  "revision": 3,
  "title": "Move a file to Deleted items",
  "summary": "Confirm the item name and move it to Deleted items, then verify that the file leaves its folder and appears in Deleted items.",
  "category": "files",
  "articleSlug": "trash-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current move a file to deleted items workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "trash file",
    "trash and restore",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to move a file to Deleted items in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Moving a file to Deleted items removes it from the active folder but keeps a recovery record until permanent deletion or retention cleanup.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-file-workflow-map-2026-10-14.webp" alt="Four-step interface map for move a file to deleted items, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Delete in the current released Dosya client.
- Confirm the active account and workspace, then identify one disposable file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: move a file to Deleted items

1. Open Files → Delete and confirm the active workspace.
2. Select one disposable file and check its name or identifying details.
3. Confirm the item name and move it to Deleted items.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file leaves its folder and appears in Deleted items.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted items view showing removed files available for review or restoration." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review names and deletion details in Deleted items before restoring or cleaning up. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the file is absent from its source and present in Deleted items with the expected name and deletion time.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the file leaves its folder and appears in Deleted items. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Delete, confirm the active workspace and check that your role permits the action.

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
