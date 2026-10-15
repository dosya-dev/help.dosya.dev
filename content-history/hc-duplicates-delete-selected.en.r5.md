---
{
  "articleId": "hc-duplicates-delete-selected",
  "locale": "en",
  "revision": 5,
  "title": "Delete selected duplicate copies",
  "summary": "Select exact copies, keep the right cloud file, interpret Dosya's reclaimable total, and move only permitted duplicates into recoverable workspace trash.",
  "category": "files",
  "articleSlug": "duplicates-delete-selected",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/duplicates.tsx, apps/web/src/lib/duplicates.ts, apps/api/src/pages/api/duplicates.ts, apps/api/src/lib/duplicates/group.ts, apps/api/src/pages/api/files/batch-delete.ts, apps/api/src/lib/repo/file-trash-many.ts and apps/web/src/pages/files.tsx. Verified exact labels, newest ordering, 100-group display cap, 500-file request chunks, permission and lock refusals, partial-batch behavior, soft-delete outcome, share revocation and retained storage usage. Local repository evidence only; no production files were deleted.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates delete selected",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Duplicates page groups files by exact content, but it does not decide which copy matters. Review names, folder locations, uploader context and creation times before moving anything. The **newest** badge describes the latest `created_at` value, not the best filename, preferred folder or most recently edited document.

<figure class="help-screenshot"><a href="/screenshots/duplicates-delete-selected-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-delete-selected-help-workflow-2026-10-14.webp" alt="Duplicate cleanup map showing keeper review, copy selection, the every-copy warning, and files arriving in Dosya trash." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Choose a keeper inside every exact-content group, check the warning for fully selected groups, and confirm that the intended copies leave the live file list. <a href="/screenshots/duplicates-delete-selected-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Duplicates** in the correct workspace. Use the folder button on every candidate row to confirm where that copy lives; the button opens its containing folder, or **Files** for a root-level item.
2. Select copies manually when folder placement or naming determines the keeper. To keep the creation-time leader in one group, choose that group's **Select all but newest**. The page-level control applies the same choice to every displayed group.
3. Inspect the selection again. **Clear** removes the current selection. Selecting the row marked **newest** is allowed, so do not treat the automatic choice as protection against deleting the wrong copy.
4. Choose **Move _N_ to trash**. The confirmation title repeats the number of selected files and shows the selected groups' reclaimable byte total.
5. Stop if the red message says **In _N_ groups you selected EVERY copy - nothing of those files will remain outside the trash.** Clear at least one row in each affected group unless removing every live copy is intentional.
6. Select **Move to trash**. The browser sends up to 500 file IDs per request and splits a larger choice across sequential requests. Wait for the result before navigating away.
7. Reopen **Duplicates** and **Files → Deleted** to verify what moved. A successful web message reads **Moved to trash** and reports the selected count.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Exact duplicate group in Dosya with checkboxes, a newest badge, containing-folder links, and per-copy timestamps for keeper selection." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The group view supplies the evidence needed to keep the correct copy; exact bytes alone do not identify the useful location or filename. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

This action is a soft delete. The chosen rows leave ordinary folders, their direct share links are revoked, and the files remain recoverable in **Deleted** until manual or scheduled permanent purge. They continue using storage while in trash. The confirmation sentence **This frees _X_** describes duplicate bytes that become reclaimable after permanent deletion; moving them to trash does not immediately reduce workspace usage.

The server applies the role to each file. **Delete any file** covers every visible copy; **Delete own files** covers only uploads by the current member. The current Duplicates screen can still let an own-only member select a colleague's row, and its success toast uses the requested count rather than the API's moved count. Always verify the list after a mixed-owner cleanup.

A batch is refused if any visible live file has its own lock: `This file is locked and cannot be deleted`. An unopened password-locked ancestor refuses the request with `This file is inside a locked folder. Unlock the folder to delete it.` A folder-confined member cannot submit IDs outside the assigned subtree. Hidden items are silently excluded for viewers who cannot see them.

If a later 500-file chunk fails, earlier chunks may already be in trash. The page then shows **Delete failed** and refreshes its data; compare **Deleted** with the remaining groups instead of repeating the entire selection. Restoration returns file rows but does not recreate revoked share links.

## Expected result

Only files accepted by the permission and protection gates move to **Deleted**. At least one reviewed keeper remains in each intended group, the Duplicates page recalculates its totals, and workspace storage falls only after permanent purge.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
