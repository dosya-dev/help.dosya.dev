---
{
  "articleId": "hc-review-duplicates",
  "locale": "en",
  "revision": 1,
  "title": "Reviewing exact duplicate files before removing copies",
  "summary": "Compare byte-identical file groups, keep the intended copy, move selected copies to Deleted and permanently purge them only after review.",
  "category": "files",
  "articleSlug": "review-duplicates",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Verified the current English Duplicates page and current web/API source and focused tests on 2026-10-12. Screenshots use an isolated local owner workspace with controlled current-API fixtures and fictional exact-copy groups. The review confirmed SHA-256 grouping after visibility filtering, newest-first ordering, all-but-newest selection, manual checkboxes, selected-byte calculation, all-copies warning, batch move to trash, scan progress, 100-group display cap and 256 MiB background-scan cap. A production workspace scan and destructive cleanup were not performed.",
  "related": ["hc-permanent-delete", "hc-restore-deleted", "hc-organize-files", "hc-storage-usage"],
  "keywords": ["duplicate files", "exact copies", "remove duplicates", "Select all but newest", "reclaim storage", "duplicate scan", "move to trash", "keep newest"]
}
---
Dosya's Duplicates page groups files whose stored bytes have the same cryptographic fingerprint. Names and folders can differ. Similar-looking photos, resized exports and separately edited documents are not treated as duplicates unless their bytes are exactly identical.

Moving selected copies to trash is recoverable, but those bytes still count against storage until you permanently delete them from **Deleted**. Review the keeper in each group before taking either action.

## Before you start

- Confirm the active workspace. Duplicate results do not combine workspaces.
- Use the application header search, enter `Duplicates`, and choose **Duplicates** to open the page.
- Wait for any **still being scanned** count to finish before treating the results as complete.
- Check whether any copy has a more useful name, folder, share link, comments or workflow history. Identical content does not make the surrounding records interchangeable.
- Make sure your role can access Files and delete the copies you select.
- Use **Move to trash** first. Permanently delete only after you verify the retained copy.

## Steps: compare duplicate groups

1. Open **Duplicates** in the correct workspace.
2. Read the number of duplicate groups and the total reclaimable bytes at the top.
3. Review each card. It shows the number of identical copies, the size of each copy and the bytes represented by all copies beyond one keeper.
4. Compare each filename, containing folder and creation time.
5. Use the folder path beside a copy to open its containing folder when you need more context.
6. Identify the copy you want to retain. The first row is labelled **newest**, based on when that copy was created in Dosya.

<figure class="help-screenshot">
  <a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Dosya Duplicates page showing two fictional exact-copy groups with newest labels, folder paths and reclaimable byte totals." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Each card contains byte-identical files and gives enough location and timing context to choose the keeper. Names and data are fictional local fixtures. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: select copies safely

1. For a single group, choose **Select all but newest** inside that card when the newest Dosya copy is the one you want to keep.
2. To apply that rule to every visible group, choose **Select all but newest** at the top of the page.
3. Adjust individual checkboxes when another copy has the preferred name or location. Leave at least one intended keeper unselected in every group.
4. Review the selected count and the highlighted rows before continuing.
5. If every copy in a group is selected, stop and clear at least one checkbox. The confirmation warns about this condition, but it does not choose a keeper for you.

## Steps: move selected copies to Deleted

1. Choose **Move _n_ to trash**.
2. Read the confirmation count and selected-byte estimate.
3. Choose **Move to trash**.
4. Wait for the completion message, then allow the Duplicates page to refresh.
5. Open the retained copy from its folder and confirm it still works.
6. Open **Files** → **Deleted** and verify that only the intended copies moved there.
7. Restore any mistaken selection. When the review is complete, permanently delete the unwanted copies to actually free workspace storage.

<figure class="help-screenshot">
  <a href="/screenshots/duplicate-cleanup-confirmation-2026-10-12.webp"><img src="/screenshots/duplicate-cleanup-confirmation-2026-10-12.webp" alt="Dosya confirmation asking to move three selected duplicate files to trash and showing a 55 MB selected-byte estimate." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The dialog confirms how many copies are moving to trash and their selected-byte total. The files remain recoverable and continue counting against storage until permanently deleted. <a href="/screenshots/duplicate-cleanup-confirmation-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The selected copies move to **Deleted**, while the unselected keeper remains in its original folder. The Duplicates page refreshes and removes any group that no longer has at least two visible live copies.

Workspace storage is reclaimed only after the unwanted copies are deleted permanently from Deleted. Until then, the trash provides a recovery window.

## Duplicate-scan limits and permission behavior

- Groups are based on the stored content fingerprint, not the filename, extension, image appearance or metadata similarity.
- Duplicate scanning is opt-in per workspace and runs in the background. An unfinished scan can temporarily omit groups.
- The current background scanner does not fingerprint a file larger than 256 MiB. Files without a completed fingerprint do not appear in duplicate groups, so an empty page is not proof that every possible copy was compared.
- The page shows up to the 100 largest groups while keeping the total group and reclaimable-byte counts across all results. After cleanup, additional groups can move into view.
- Hidden-item rules and folder confinement apply before groups are formed. You see only copies your role can access.
- **Newest** refers to the most recently created copy record in Dosya. Because the bytes are identical, it is a convenient default keeper, not a judgment about the best filename, folder or surrounding activity.
- The selected-byte estimate counts the full size of each selected copy. Moving it to Deleted does not reduce the storage meter yet.
- Batch deletion is sent in bounded chunks. A failure can leave part of a large selection moved and part still live; use the refreshed page to decide what remains.

## Troubleshooting

**Duplicates shows Scanning your files.** Leave the workspace scan running and return later. The page refreshes while pending candidates remain.

**No duplicates appear even though filenames match.** Matching names are not enough. The bytes may differ, scanning may be disabled or unfinished, the files may exceed the current background-scan cap, or visibility rules may exclude a copy.

**Similar photos are in different groups or no group.** Resizing, recompressing, cropping, editing metadata or exporting again changes the bytes. The current duplicate finder is for exact copies, not visual similarity.

**I selected every copy.** Clear at least one checkbox before confirming. If you already moved them, restore the intended keeper from Deleted before any permanent deletion.

**The reclaimable number did not change the storage meter.** Moving to trash preserves the files and their storage use. Permanently delete the reviewed unwanted copies from Deleted to free the bytes.

**Some selected copies remain on the page.** Read the completion message and refresh. Resolve ownership, lock or permission failures, then retry only the remaining copies.

## Frequently asked questions

### Are similar-looking photos considered duplicates?

Only when their stored bytes are identical. Visually similar images with different exports, metadata or edits are not grouped as exact copies.

### Which copy remains after Select all but newest?

The first, newest Dosya copy in each group remains unselected. You can change the checkboxes when another name or folder should be kept.

### Does Move to trash free the displayed bytes immediately?

No. It creates a recoverable trash state. Permanently delete the unwanted copies from Deleted after checking the keeper.

## Related guides

- [Permanently deleting files and freeing storage](/files/permanently-delete-files)
- [Restoring a deleted file or folder](/files/restore-deleted)
- [Organizing files with folders, favourites and groups](/files/organize-files)
- [Understanding storage usage and failed quota checks](/uploading/storage-usage)
