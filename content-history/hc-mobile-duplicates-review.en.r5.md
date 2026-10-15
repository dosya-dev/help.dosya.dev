---
{
  "articleId": "hc-mobile-duplicates-review",
  "locale": "en",
  "revision": 5,
  "title": "Review exact duplicates on mobile",
  "summary": "Review content-identical files on mobile, keep the newest copy, understand the 100-group display cap, and move selected duplicates safely to trash.",
  "category": "files",
  "articleSlug": "mobile-duplicates-review",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/duplicates.tsx, apps/mobile/src/duplicates/api.ts, apps/mobile/src/duplicates/select.ts, apps/api/src/pages/api/duplicates.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-review-duplicates"
  ],
  "keywords": [
    "mobile duplicates review",
    "Mobile file tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
The **Duplicates** screen groups files by content hash, so matching names alone do not create a group. It operates only in the active workspace and can show a partial list while file hashing is still in progress.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14.webp" alt="Duplicate review workflow showing content-hash groups, newest badges and folder paths, All but newest selection, the no-copy-left warning, and Move to trash." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Duplicate review workflow: wait for hashing, inspect each content-identical group, keep the newest copy or select manually, review reclaimable bytes, and move choices to trash. <a class="workflow-map-full" href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-duplicates-review-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Groups are sorted newest-first within each set. The first file receives the **newest** badge, and each row shows its folder path or **Workspace root**.

## Steps

1. Open **Settings** → **Duplicates** after confirming the workspace in the header.
2. If **Still scanning _N_ files - this list will fill in.** appears, wait for the 15-second polling cycle and let hashing continue.
3. Open each visible group and compare its filename, copy count, reclaimable bytes, folder paths, and **newest** marker.
4. Select individual copies, or use **All but newest** to select every visible group’s older copies.
5. Check the selected count and bytes; if every copy in any group is selected, read the warning that no copy will be left.
6. Choose **Trash**, then confirm **Move to trash** and verify the toast and refreshed file list.

### Display and deletion limits

The server returns the 100 largest groups while also reporting the true group total. When more exist, the screen says **Showing the 100 largest groups of _N_. Clean these up and the rest move up.**

Deletion is sent in chunks of 500 file IDs. Selected files go to Trash rather than being erased immediately. **Moved _N_ to trash** appears only after every chunk completes; the current request path cannot produce a partial-success count.

If a later chunk fails, Dosya shows the request error, or **Could not move those to trash** when no specific message is available, and refreshes the duplicate query because earlier chunks may already have moved files. Do not repeat the full prior selection without checking what remains. **Couldn’t check for duplicates.** offers **Retry** and is distinct from **No duplicates / Nothing in this workspace is stored twice.** The API also returns `scan_enabled: false` when duplicate scanning is disabled, but the released mobile mapper drops that field. Mobile therefore shows the same **No duplicates** state for a clean enabled scan and a workspace that was never scanned. Confirm the workspace duplicate-scan setting outside this screen before treating the empty state as proof that no duplicates exist.

## Expected result

Only the confirmed file IDs move to Trash, selected bytes become reclaimable, and the duplicate list refreshes. At least one copy remains when you use **All but newest**; a manual all-copy selection is allowed only after an explicit warning.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Review duplicates](/files/review-duplicates)
