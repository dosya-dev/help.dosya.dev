---
{
  "articleId": "hc-desktop-duplicates-cleanup",
  "locale": "en",
  "revision": 5,
  "title": "Clean up duplicates from the desktop app",
  "summary": "Select reviewed duplicate copies, understand permission and lock failures, move them to cloud trash in 500-file batches, and verify the keeper.",
  "category": "desktop",
  "articleSlug": "desktop-duplicates-cleanup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified cleanup controls against `apps/desktop/src/renderer/pages/DuplicatesPage.tsx`, `renderer/lib/duplicates.ts`, and API `files/batch-delete.ts` on 2026-10-14. Production deletion was not performed.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop duplicates cleanup",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Use the desktop **Duplicates** page only after reviewing paths and choosing a keeper. Its delete action soft-deletes selected cloud files to trash. Trashed data continues to consume storage until it is permanently purged, and active share links on moved files are revoked.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-duplicates-cleanup-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-duplicates-cleanup-help-workflow-2026-10-14.webp" alt="Duplicate-cleanup workflow for selecting reviewed copies, reading the all-copies warning, and moving files to cloud trash." width="1200" height="675" loading="lazy" decoding="async" /></a>
  <figcaption>Check the selected count and reclaimable estimate, preserve one intended copy, then confirm Move to trash. <a href="/screenshots/desktop-duplicates-cleanup-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Finish the review while **Still scanning N files** is absent, or accept that more groups can appear later.
- Open each keeper from its folder path and confirm it is accessible where collaborators expect it.
- The **Delete** button appears only when the member has `delete_any_file` or `delete_own_files`. The server restricts own-file permission to copies uploaded by that member.
- Locked files, files inside locked folders and locked WordPress backup content can refuse an entire batch. Unlock or remove those selections before retrying.

## Steps

1. Open **Duplicates** in the intended workspace. Select individual copies or choose **Select all but newest**, then audit the checkboxes.
2. Read the summary's selected bytes. This value adds the full size of each selected copy. It is an estimate of content moved out of the live set; quota is not released while the files remain in trash.
3. Select **Delete N**. The dialog title is **Move N files to trash?** and its explanation says **They go to trash, not straight out.**
4. If the warning says one or more groups have every copy selected, choose **Cancel** and leave a keeper unless removing the content entirely is intentional. The desktop allows an all-copy selection but never hides that consequence.
5. Select **Move to trash**. The desktop sends at most **500 file IDs per request**, splitting a larger selection into sequential chunks.
6. Wait for **Moved to trash** and the description **N files moved to trash.** The page clears the selection and refreshes Duplicates and Files.
7. Open the keeper in its expected folder. Then check Deleted items if you need to confirm or restore a moved copy. Restoration is possible only while the trash entry still exists.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop workspace shell used to revisit Files and verify a retained copy after duplicate cleanup." width="1200" height="630" loading="lazy" decoding="async" /></a>
  <figcaption>After cleanup, verify the surviving file from Files and use Deleted items for any needed recovery. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Successfully authorized copies leave the live duplicate groups and appear in cloud trash. Their active share links are revoked. The retained copy stays in its reviewed folder. Storage accounting remains unchanged until a later permanent purge, so the confirmation's reclaimable figure does not mean quota is immediately freed.

Cleanup is not all-or-nothing across more than 500 selected files. Each chunk is a separate request. If a later chunk fails, earlier chunks can already be in trash; the refresh shows what actually moved. Within one request, a visible locked file or out-of-scope ID refuses the whole batch before deletion.

## Troubleshooting

**Delete is missing.** Your role has neither delete permission. Ask a workspace administrator to remove the copies or grant the appropriate role capability.

**Delete failed says No delete permission.** Your current role has neither delete capability. Ask a workspace administrator to perform the cleanup or change the role.

**The error says This file is locked and cannot be deleted.** Unlock that file and submit again. For **This file is inside a locked folder. Unlock the folder to delete it.**, resolve the ancestor lock first.

**The toast count does not match what moved.** With only `delete_own_files`, the server filters the request to your uploads, while the desktop success description uses the selected count. Treat the refreshed Duplicates and Files views as authoritative.

**Some files moved before the error.** This can occur between 500-file chunks. Refresh, compare the current duplicate groups with Deleted items, and retry only the remaining reviewed copies.

**I selected every copy by mistake.** If the items remain in cloud trash, restore the required copy before it is purged. A permanent purge is irreversible and cannot be recovered through this cleanup page.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
