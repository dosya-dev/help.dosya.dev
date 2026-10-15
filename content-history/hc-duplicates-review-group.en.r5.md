---
{
  "articleId": "hc-duplicates-review-group",
  "locale": "en",
  "revision": 5,
  "title": "Review a duplicate group before cleanup",
  "summary": "Inspect one exact-duplicate group by filename, folder, size, age, and uploader before choosing a safe keeper or moving any matching copy to trash.",
  "category": "files",
  "articleSlug": "duplicates-review-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/duplicates.tsx, apps/web/src/lib/duplicates.ts, and apps/api/src/lib/duplicates/group.ts on 2026-10-14. No production files were trashed.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates review group",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
A Dosya duplicate group contains files with the same content hash and byte size. Review the locations and business use before choosing a keeper; the `newest` badge describes creation order, not quality or importance.

<figure class="help-screenshot"><a href="/screenshots/duplicates-review-group-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-review-group-help-workflow-2026-10-14.webp" alt="Four-step map for opening Duplicates, comparing each copy’s name and folder, choosing the intended keeper, and rechecking the group." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the evidence to review before taking any destructive duplicate action. <a href="/screenshots/duplicates-review-group-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What the page counts.** Each group contains at least two exact matches. Dosya orders copies newest first by `created_at`, using file ID to break a tie. Reclaimable size is one file size multiplied by all copies except one. The page sorts groups by greatest reclaimable space and displays at most 100 at once; totals still include every group.

## Steps

1. Open **Duplicates** in the correct workspace. Membership and `access_files` are required; a folder-confined member sees only the permitted subtree, and hidden files are excluded before grouping.
2. Read the group header, such as **3 identical copies**, and its reclaimable amount. Treat this as a storage estimate, not a deletion recommendation.
3. Compare every row’s filename, folder path, size, age, uploader tooltip, and `newest` badge. Use **Open containing folder** to inspect how each copy is referenced by current work.
4. Decide which file ID should remain outside trash. A renamed or older file may still be the team’s active copy.
5. Select only the entries you have confirmed can leave their folders. If you select every copy in a group, Dosya warns that nothing from that group will remain outside trash.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Duplicates page showing two exact-match groups, 53 MB reclaimable, per-file checkboxes, names, folder paths, sizes, and times." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot exposes the group totals and row-level evidence needed to compare the candidate copies. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**What review does not do.** Opening folders and selecting checkboxes does not move files. **Move N to trash** triggers a separate confirmation: **Move N files to trash?** and explains that the files can be restored. Clearing selection with **Clear** is safe.

**Large result sets.** If more than 100 groups exist, Dosya says **Showing the {shown} largest groups of {total}. Clean these up and the rest move up.** Revisit the page after cleanup rather than assuming omitted groups vanished.

## Expected result

You can identify one deliberate keeper and understand the folder impact of every selected copy before a trash request. No content changes until you confirm **Move N to trash**.

## Related guides

- [Use the complete exact-duplicate cleanup page](/files/review-duplicates)
- [Recover a duplicate moved to trash by mistake](/files/restore-deleted)
