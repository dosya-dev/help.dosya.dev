---
{
  "articleId": "hc-desktop-duplicates-review",
  "locale": "en",
  "revision": 5,
  "title": "Review duplicate files in the desktop app",
  "summary": "Review exact-content duplicate groups by path, age, copy count, and reclaimable bytes before choosing which cloud files should remain in each workspace.",
  "category": "desktop",
  "articleSlug": "desktop-duplicates-review",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed duplicate grouping and visibility in `apps/desktop/src/renderer/pages/DuplicatesPage.tsx`, `renderer/lib/duplicates.ts`, and API `duplicates.ts`/`lib/duplicates/group.ts` on 2026-10-14. Production scan state was not sampled.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop duplicates review",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Open **Duplicates** to review live files that share the same content hash. Grouping compares content, not filename. A group can therefore contain differently named files, while same-named files with different bytes remain separate.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-duplicates-review-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-duplicates-review-help-workflow-2026-10-14.webp" alt="Duplicate-review workflow for checking exact-content groups, folder paths, newest markers, and reclaimable bytes." width="1200" height="675" loading="lazy" decoding="async" /></a>
  <figcaption>Inspect each exact-content group and open its folder links before deciding which copy is the keeper. <a href="/screenshots/desktop-duplicates-review-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Select the correct workspace. Results never combine files from different workspaces.
- You need file-page access. Folder-confined members see only duplicates within their authorized subtree, and hidden items they cannot view are removed before groups are formed.
- Wait for the scan signal to settle before concluding that the workspace is clean. Hashing reads file contents and finishes asynchronously.
- Keep business, legal or workflow context in mind. Identical bytes do not mean two paths serve the same purpose.

## Steps

1. Choose **Duplicates** in the desktop navigation. The subtitle states **Identical files, by content - not by name**.
2. If the banner says **Still scanning N files. This list will fill in as it goes.**, leave the page open. The desktop refreshes every **15 seconds** while pending candidates remain.
3. Read the summary: **N duplicate groups · X reclaimable**. The total reclaimable value represents keeping one copy from every exact-content group. Groups are ordered by the largest reclaimable amount, and the page displays at most **100 groups** even though the summary totals cover the full result set.
4. In each card, compare the copy count and reclaimable bytes. Copies are sorted newest first; the first carries the **newest** badge. Newest describes creation time, not correctness or preferred folder.
5. Select a displayed folder path such as **Workspace root** to open that file in the Files detail panel. Confirm the name, uploader, path and intended use before selecting its checkbox.
6. If appropriate, choose **Select all but newest**. This selects every copy after the newest entry in every displayed group. Review every selected row; use **Clear** to discard the selection without changing files.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop shell used to enter the Duplicates page for the active workspace and inspect file locations." width="1200" height="630" loading="lazy" decoding="async" /></a>
  <figcaption>Confirm the active workspace in the desktop shell because duplicate groups are scoped to the member’s visible files there. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption>
</figure>

Files larger than **256 MiB** are marked too large by the current hash scanner and are not hashed in this version. Hash candidates stop retrying after **3 attempts**. These limits can explain why files you believe are identical do not appear together.

## Expected result

Each visible card contains two or more live files with the same content hash, their folder locations, ages and a calculated reclaimable amount. Your selection contains only copies you have personally reviewed. No file changes until you use **Delete** and confirm the trash dialog.

A **No duplicates** state means no exact-content group is currently returned for this member's visible scope. Duplicate scanning is opt-in per workspace, but the current desktop page does not render the API's `scan_enabled` flag; disabled scanning can therefore look like an empty result. If scanning is pending, disabled, exhausted its retries, or skipped a file over the hash limit, do not treat the empty state as proof that every stored object was compared.

## Troubleshooting

**The page says Couldn't check for duplicates.** Select **Retry**. Confirm the workspace still exists, your session is active and your role has file access.

**A hidden copy is absent.** The API applies the same hidden-item visibility rules as Files before grouping. Ask an authorized workspace administrator to review it; the duplicates page will not disclose hidden paths.

**Select all but newest chose the wrong keeper.** Choose **Clear**, then select individual rows. The newest marker is based on `created_at`, with ID used only as a stable tie-breaker.

**The summary exceeds what is on screen.** Only the top 100 groups are returned, sorted by reclaimable bytes. Clean reviewed groups and refresh to expose later results.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
