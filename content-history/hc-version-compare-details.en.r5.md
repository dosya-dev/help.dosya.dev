---
{
  "articleId": "hc-version-compare-details",
  "locale": "en",
  "revision": 5,
  "title": "Compare entries in file version history",
  "summary": "Compare version number, Latest state, exact timestamp, size, uploader, and previewed bytes before restoring; understand fields history does not show.",
  "category": "files",
  "articleSlug": "version-compare-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/versions.ts, and apps/api/src/pages/api/files/[id]/versions/restore.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-version-history",
    "hc-file-details"
  ],
  "keywords": [
    "version compare details",
    "Version history operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
The viewer’s **Versions** tab lists rows newest first. Each row shows a version number, byte size, local date and time, and uploader when available; only the current top row carries **Latest**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/version-compare-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-compare-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-compare-details-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/version-compare-details-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/version-compare-details-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for opening Versions, comparing numbered rows, previewing an older revision, and returning to Latest without restoring." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The comparison workflow uses the metadata and preview controls present in the current inspector. <a class="workflow-map-full" href="/screenshots/version-compare-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-compare-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-compare-details-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the file preview and make sure the inspector is visible. On a phone-width viewport, open the inspector bottom sheet.
2. Choose **Versions**. Its count includes the implicit first version even when an untouched file has no historical database row.
3. Compare `vN`, size, date, time, and uploader. The panel does not show a change summary, checksum, filename per revision, or side-by-side diff.
4. Select an older row to preview its bytes. Use ↑ and ↓ when multiple versions exist; the selected row gains the active styling.
5. Inspect the previewed content against **Latest**. Comments can carry a version association, but the version row itself does not summarize those comments.
6. Return to the top **Latest** row if you only needed comparison. Choose **Restore** only when you intend to create a new current version from older bytes.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="Versions inspector for meeting-notes.txt showing v3 Latest plus v2 and v1 rows with sizes, timestamps, uploader, and Restore buttons." width="400" height="560" loading="lazy" decoding="async" /></a><figcaption>The inspector screenshot shows every field available for choosing among three revisions. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Access rules.** Listing history requires workspace membership, Files-page access, folder scope, and visibility. A full-locked file refuses its version metadata until the file is appropriately accessible.

## Expected result

You identify the intended revision by version number, timestamp, size, uploader, and actual previewed content, while leaving Latest unchanged until a deliberate restore action.

## Related guides

- [Use the full version-history workflow](/files/version-history)
- [Inspect current file metadata](/files/file-details)
