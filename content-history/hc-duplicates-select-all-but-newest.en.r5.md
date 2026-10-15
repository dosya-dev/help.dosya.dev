---
{
  "articleId": "hc-duplicates-select-all-but-newest",
  "locale": "en",
  "revision": 5,
  "title": "Select all but the newest duplicate",
  "summary": "Use Select all but newest as a starting point, review the creation-order choice in every matching group, and avoid trashing the only useful copy.",
  "category": "files",
  "articleSlug": "duplicates-select-all-but-newest",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/duplicates.tsx and apps/api/src/lib/duplicates/group.ts plus apps/api/src/pages/api/files/batch-delete.ts on 2026-10-14. Production deletion was not performed.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates select all but newest",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Select all but newest** checks older entries in duplicate groups and leaves the first creation-ordered entry unchecked. It is a convenience for selection, not proof that the unchecked file is the correct keeper.

<figure class="help-screenshot"><a href="/screenshots/duplicates-select-all-but-newest-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-select-all-but-newest-help-workflow-2026-10-14.webp" alt="Four-step map for using Select all but newest, inspecting the resulting checkboxes, and confirming that the intended newest copy remains unselected." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the bulk-selection result that must be reviewed before any trash confirmation. <a href="/screenshots/duplicates-select-all-but-newest-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**How “newest” is decided.** Files in a group are ordered by `created_at` descending, then by file ID when times match. Dosya does not compare folder importance, comments, shares, filename clarity, or human preference when assigning the badge.

## Steps

1. Open **Duplicates** and review the workspace total and visible groups. The view shows no more than the 100 largest reclaimable groups at once.
2. Choose the page-level **Select all but newest**, or use the same control on one group when you want a smaller scope.
3. Inspect every checked row. The `newest` entry should remain unchecked; older copies should be selected. Uncheck any older file that is still the canonical working copy.
4. Open containing folders when names or dates do not establish business use. Selection itself does not alter a file.
5. Read the aggregate button **Move N to trash** and reclaimable amount. If Dosya warns **In N groups you selected EVERY copy - nothing of those files will remain outside the trash**, stop and restore at least one intended keeper to the unchecked set.
6. Continue only when you intend to use the separate trash confirmation. **Clear** discards the current checkbox selection.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Duplicates view with a page-level Select all but newest control above two groups and row checkboxes beside exact copies." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The image shows where bulk selection begins and which per-file details remain available for manual review. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If you confirm cleanup.** The dialog says **Move N files to trash?** and **This frees X. Files go to the trash and can be restored from there.** Requests are submitted in chunks of 500. Earlier chunks can remain trashed if a later chunk fails, so verify the result rather than assuming the whole operation was atomic.

**Recovery.** Selected files are soft-deleted and can be restored while trash retention permits. Their former folder context matters when deciding whether a restored file belongs back in active work.

## Expected result

The shortcut leaves the creation-ordered newest copy unchecked in each scoped group and selects the older matches. You retain final control over every checkbox before any file enters trash.

## Related guides

- [Review each exact-match group before selection](/files/review-duplicates)
- [Restore selected copies after an incorrect cleanup](/files/restore-deleted)
