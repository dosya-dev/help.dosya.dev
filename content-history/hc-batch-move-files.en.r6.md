---
{
  "articleId": "hc-batch-move-files",
  "locale": "en",
  "revision": 6,
  "title": "Move several files together",
  "summary": "Move a mixed file and folder selection in Dosya, understand partial results and Live Photo pairs, and recover from permission or destination conflicts.",
  "category": "files",
  "articleSlug": "batch-move-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/web/src/lib/bulk-run.ts, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/files/[id]/move.ts, and apps/api/src/pages/api/folders/[id]/move.ts. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "batch move files",
    "batch file actions",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Moving a selection changes each item’s parent inside one workspace. Dosya does not copy file bytes during a move, but a mixed selection is processed item by item, so one refusal does not roll back items that already moved.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/batch-move-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-move-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-move-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/batch-move-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/batch-move-files-workflow-map-2026-10-14.webp" alt="Dosya batch move flow from a mixed selection through the destination picker to moved and skipped counts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>A mixed batch runs one move per selected row and reports the number moved or skipped after every request settles. <a class="workflow-map-full" href="/screenshots/batch-move-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-move-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-move-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Files** in the intended workspace. The destination picker stays within that workspace; this workflow cannot move items between workspaces.
- File moves require the role permission `upload_files`. Folder moves require `rename_folders`. The **Move** button appears when either permission exists, so a mixed selection can include rows your role cannot move.
- Unlock the selected file, its ancestor folders, and the destination when required. A locked WordPress backup cannot be moved into, out of, or within.
- Check the destination for same-name files and folders. Dosya does not merge or overwrite on a move.

## Steps

1. Select the checkboxes beside the files and folders. Use **Select all** only after checking the current folder, filters, and page.
2. Read the selection count in the bulk bar, then choose **Move**.
3. In **Move to folder**, open the intended destination or leave the picker at the workspace root. The picker omits a single folder being moved, but a descendant can still be browsed; the server rejects that cycle.
4. Choose **Move**. The web client keeps up to six item requests in flight. A selected Live Photo still also moves its paired video, although the twin is not added to the displayed selection count.
5. Read the completion toast. Web reports **Moved** when every selected row succeeds, or **Move finished** with “N moved, M skipped” after partial completion. Those counts omit the extra Live Photo video request, so **Moved** can still appear when that paired-video move failed.
6. Open both source and destination. Confirm each expected item appears once, verify that every selected Live Photo still and its paired video arrived together, and check that any skipped row remains at the source.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Dosya Files overview used to compare a batch move source with its chosen destination." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify the final location from the refreshed file list because successful items are not rolled back when another item is skipped. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each successful file keeps its ID, bytes, versions, and storage usage while its folder reference changes. A successful folder carries its complete subtree to the new parent. Existing links address the same IDs, and sync or WebDAV listings refresh for the old and new locations.

## Troubleshooting

- **“File is already in this folder” or “Folder is already here.”** Pick a different destination. That item stays where it was.
- **A same-name item blocks the move.** Files return **A file with this name already exists in the target folder**; folders return **A folder with this name already exists in the target folder**. Rename one item before retrying.
- **A folder is skipped.** Do not choose the folder itself or any folder below it. The exact cycle errors are **Cannot move a folder into itself** and **Cannot move a folder into its own subfolder**.
- **Only part of the selection moved.** Permissions, confinement, hidden state, locks, or destination conflicts are evaluated for each item. Correct the skipped rows, select those remaining at the source, and run a second move.
- **A Live Photo split across two folders despite “Moved.”** The web result ignores the added paired-video request. Locate the still and video, move the remaining half to the intended destination, and verify the pair there.
- **Desktop says items moved after individual error toasts.** Desktop currently catches per-item failures while continuing the batch. Treat the refreshed source and destination as authoritative.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
