---
{
  "articleId": "hc-move-folder",
  "locale": "en",
  "revision": 5,
  "title": "Move a folder and its contents",
  "summary": "Select a destination outside the folder and confirm the move, then verify that the complete subtree appears at the destination.",
  "category": "files",
  "articleSlug": "move-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "move folder",
    "folder management",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to move a folder and its contents in the intended workspace.

Moving a folder changes the location of the whole subtree. A folder cannot be moved into itself or one of its descendants.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/move-folder-workflow-map-2026-10-14.webp" alt="Workflow for “Move a folder and its contents”: select a destination outside the folder and confirm the move; verify that the complete subtree appears at the destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Move a folder and its contents”: select a destination outside the folder and confirm the move; verify that the complete subtree appears at the destination. <a class="workflow-map-full" href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/move-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/move-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Files → Move in the current released Dosya client.
- Confirm the active account and workspace, then identify a small test folder tree.

## Steps: move a folder and its contents

1. Open Files → Move and confirm the active workspace.
2. Select a small test folder tree and check its name or identifying details.
3. Select a destination outside the folder and confirm the move.
4. Verify that the complete subtree appears at the destination.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Reference for “Move a folder and its contents”: Dosya destination picker showing workspace folders before a move operation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reference for “Move a folder and its contents”: Dosya destination picker showing workspace folders before a move operation. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use the destination picker to confirm the parent folder before saving.

## Verify the result

Open the new parent and inspect several child items, then confirm the old parent no longer lists the folder.

## Expected result

The workflow completes for the controlled test and the complete subtree appears at the destination.

## Troubleshooting

**The expected control is missing.** Return to Files → Move, confirm the active workspace and check that your role permits the action.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
