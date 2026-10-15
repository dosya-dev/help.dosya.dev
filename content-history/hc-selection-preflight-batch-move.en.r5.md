---
{
  "articleId": "hc-selection-preflight-batch-move",
  "locale": "en",
  "revision": 5,
  "title": "Preflight a batch move",
  "summary": "Check a page-scoped selection, destination, permissions, locks, and name collisions before moving files or folders, then verify every outcome.",
  "category": "files",
  "articleSlug": "selection-preflight-batch-move",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/components/folder-picker-dialog.tsx, apps/api/src/pages/api/files/[id]/move.ts, and apps/api/src/pages/api/folders/[id]/move.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-select-multiple-files",
    "hc-clear-file-selection"
  ],
  "keywords": [
    "selection preflight batch move",
    "Multi-file selection operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
A batch move acts on the rows selected in the current Files view. Preflight the exact page and destination because changing page, folder, filter, search, library kind, or workspace clears the selection.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14.webp" data-light-href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for checking selected rows, opening Move, choosing a destination, and reviewing moved or skipped items." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map separates the page-scoped selection check from the destination and result checks. <a class="workflow-map-full" href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14.webp" data-light-href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/selection-preflight-batch-move-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Permissions and blockers.** Moving a file requires `upload_files`; moving a folder requires `rename_folders`. A confined member cannot move content outside the assigned subtree. Full file locks, locked ancestor folders, hidden destinations, locked targets, and locked WordPress backups can refuse the operation.

## Steps

1. In **Files**, open the source folder and page that contains the items. Remove any search or filter that hides a row you intend to move.
2. Select each file or folder with its checkbox, Ctrl-click, or Command-click. Read the **N selected** badge; **Select all** covers only the rows loaded on this page and skips a fully locked file unless it has been unlocked.
3. Check the destination before starting. A file or folder with the same name causes a `409` refusal, and moving an item to its current folder is rejected as already there.
4. Choose **Move**, then use **Search folders…**, the folder tree, or **Root (top level)**. Folder search waits 250 ms before requesting matches. The picker never changes workspaces.
5. Select the intended destination and choose **Move**. Dosya moves selected items concurrently; a Live Photo still also carries its paired video even when that video row was not selected.
6. Read the final toast. **Moved** reports the successful selected-item count. **Move finished** reports how many moved and how many were skipped; reopen both source and destination before retrying a skipped row.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Files list showing two selected rows, the 2 selected badge, and Download ZIP, Share, Move, Delete, Select all, and Clear controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The Files toolbar shows the count and the exact batch actions that will use the current selection. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Resolve a refusal before retrying.** The APIs can return `This file is locked and cannot be moved`, `Target folder is locked`, `A file with this name already exists in the target folder`, `Folder is already here`, or `Cannot move a folder into its own subfolder`. Rename or relocate the collision, unlock the relevant source or destination, or choose a location inside your permitted subtree.

## Expected result

Every successful item appears once in the chosen folder and leaves the source. Any skipped item remains in place, so you can correct its specific lock, permission, cycle, or name-collision cause without moving the successful rows again.

## Related guides

- [Select multiple files for one action](/files/select-multiple-files)
- [Clear a selection without changing files](/files/clear-file-selection)
