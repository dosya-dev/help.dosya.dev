---
{
  "articleId": "hc-preview-refresh-new-version",
  "locale": "en",
  "revision": 5,
  "title": "Refresh a preview after replacing a file",
  "summary": "Refresh a preview after a same-name upload, select the row marked Latest, and avoid mistaking an intentionally selected older version for stale content.",
  "category": "files",
  "articleSlug": "preview-refresh-new-version",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/file-viewer.tsx, apps/web/src/pages/files.tsx, apps/web/src/lib/file-url.ts, apps/api/src/pages/api/files/[id]/versions.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-preview-unsupported-download"
  ],
  "keywords": [
    "preview refresh new version",
    "File preview troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Uploading another file with the same name creates a new version on the existing file record. The viewer loads the version list newest first and marks the newest row **Latest**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14.webp" alt="New-version preview workflow: refresh the Files listing, reopen the canonical row, select the version marked Latest, and verify the changed content and version number." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>New-version preview workflow: refresh the Files listing, reopen the canonical row, select the version marked Latest, and verify the changed content and version number. <a class="workflow-map-full" href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-refresh-new-version-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The raw and PDF preview URLs include the selected version. If you deliberately click an older version in the **Versions** tab, closing and reopening is the clearest way to return to the latest state after the listing refreshes.

## Steps

1. Finish replacing the file, wait for upload success, and refresh the preview only after that new version exists.
2. Close the open viewer so its current version selection cannot be confused with the refreshed listing.
3. Refresh the Files listing from the blank-area **Refresh** menu or reload the page, then reopen the same canonical file row.
4. Open **Versions** and select the first row carrying the **Latest** badge.
5. Confirm the version number, upload time, size, and a known content change in the preview.
6. If the old content remains, verify that the upload created a version on this file rather than a separate conflict-named file, then refresh once more.

Choosing **Restore** on an older row is a write action: it makes that historical content current and cannot be used as a harmless refresh. Merely selecting an old version is read-only. Cached current previews are keyed by file and version, so a correctly incremented version receives a different source URL.

## Expected result

The reopened viewer shows the row marked Latest and its new content. Historical versions remain selectable, and no restore or extra upload is needed merely to refresh the preview.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
