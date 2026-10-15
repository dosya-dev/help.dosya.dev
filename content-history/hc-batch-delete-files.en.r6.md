---
{
  "articleId": "hc-batch-delete-files",
  "locale": "en",
  "revision": 6,
  "title": "Delete multiple items together",
  "summary": "Delete many Dosya files and folders safely, understand chunk limits, locked-item refusals and partial results, then verify each item in Deleted.",
  "category": "files",
  "articleSlug": "batch-delete-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/web/src/lib/bulk-run.ts, apps/api/src/pages/api/files/batch-delete.ts, apps/api/src/lib/backup-lock.ts, apps/api/src/lib/folder-trash.ts, and apps/desktop/src/renderer/pages/FileBrowserPage.tsx. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "batch delete files",
    "batch file actions",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
A normal batch delete is recoverable: it moves selected files and complete folder subtrees into **Deleted**. The bytes continue counting against workspace storage until a later permanent deletion.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/batch-delete-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-delete-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-delete-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/batch-delete-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/batch-delete-files-workflow-map-2026-10-14.webp" alt="Dosya batch delete flow showing selected counts, confirmation, progress chunks, and verification in Deleted." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Soft deletion confirms the visible selection, processes bounded chunks, and leaves recoverable trash roots for review. <a class="workflow-map-full" href="/screenshots/batch-delete-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-delete-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-delete-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- `delete_any_file` permits deletion regardless of creator. `delete_own_files` applies only to items owned by the signed-in user and to subtrees whose contents pass the same ownership check.
- A locked selected file, or a live file below a locked ancestor, refuses the whole API chunk. Hidden rows are omitted from processing.
- A live WordPress backup lock is a separate preflight guard. If any selected file or folder touches the protected tree, the API returns HTTP 423 with `error: backup_locked` and refuses the entire mixed request before writing either half. After that guard passes, a folder that fails ownership, its own or an ancestor lock, or subtree authorization is skipped while eligible folders continue.
- A folder selection includes every live child folder and file in its authorized snapshot. The confirmation names the selected roots rather than every descendant.
- The API accepts at most 500 file IDs per request. Web divides the overall selection into sequential chunks of 20 combined file and folder IDs so progress can advance.

## Steps

1. In **Files**, select the rows to remove. Selecting a Live Photo still automatically includes its paired video in the delete request; the confirmation states how many extra videos are included.
2. Choose **Delete** in the selection bar.
3. Read **Delete selected items?** and verify its separate file and folder counts. If folders are included, read the notice that everything inside them is deleted too.
4. Press **Delete**. Soft-delete progress cannot be cancelled after it begins; wait for all chunks to settle.
5. Read **Deleted** for complete success or **Some items could not be deleted** with the chunk-level deleted and failed counts.
6. Open **Deleted** and confirm each intended file or folder root. A folder’s descendants stay attached to that trash root and are restored with it rather than shown as independent roots.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Dosya Files list with row checkboxes and the bulk action area used before a recoverable delete." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Compare the selected rows with Deleted after the operation, especially when a role can delete only its own uploads. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Successful rows leave the live listing and remain recoverable. File and folder share links are revoked during trashing. Storage usage does not fall, and deleted data has no automatic expiry job. A later **Delete permanently** action removes bytes and cannot be undone.

## Troubleshooting

- **“This file is locked and cannot be deleted.”** One visible file in that chunk has `view_only` or `full_lock`. Remove it from the selection or have the owner change the lock.
- **“This file is inside a locked folder. Unlock the folder to delete it.”** Unlock the ancestor, then select the remaining rows again.
- **The response is HTTP 423 with `error: backup_locked`.** At least one requested file or folder touches a live protected WordPress backup. Nothing in that mixed request was deleted; wait until its returned `locked_until` time before selecting the batch again.
- **A folder stayed live although the request completed.** Batch folder deletion is best effort. It skips a root when the role lacks rights to any required descendant, the tree is locked, or the folder is hidden. Delete that folder separately to receive its specific refusal.
- **The success count looks larger than Deleted.** Web counts a successful 20-item request as the chunk size, while the endpoint can omit hidden, missing, already-deleted, or unauthorized rows. Verify actual trash roots and retry only visible survivors.
- **You need storage immediately.** Open **Deleted**, select the confirmed trash items, and choose **Delete permanently**. That separate action is irreversible and large folders can require several bounded purge passes.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
