---
{
  "articleId": "hc-version-download-previous",
  "locale": "en",
  "revision": 5,
  "title": "Download a previous file version",
  "summary": "Download an older revision from the Files details panel, verify its metadata and local bytes, and avoid the viewer header link that targets Latest.",
  "category": "files",
  "articleSlug": "version-download-previous",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-detail-panel.tsx, apps/web/src/components/file-viewer.tsx, and apps/api/src/pages/api/files/[id]/download.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-version-history",
    "hc-file-details"
  ],
  "keywords": [
    "version download previous",
    "Version history operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
Selecting a file row opens a details panel whose **Versions** section gives every revision its own download icon. This is the supported visible path for historical bytes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/version-download-previous-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-download-previous-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-download-previous-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/version-download-previous-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/version-download-previous-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for selecting a file, locating the required Versions row, downloading an eligible historical revision, and verifying the local copy." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map follows the historical download control for a file that is not protected by a full lock. <a class="workflow-map-full" href="/screenshots/version-download-previous-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-download-previous-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-download-previous-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, click the target row once to open its details panel. Confirm the filename, current version badge, folder context, and preview before downloading anything.
2. Find **Versions** in that panel. Each row shows `vN`, size, uploader or **Unknown**, relative time, and a download icon; the current row has green styling.
3. For a file without `full_lock`, choose the download icon on the required historical row. The link includes `?version=N`, so it requests that row rather than the current file.
4. Keep the tab open while Dosya checks membership, Files access, folder confinement, download permission, hidden or ancestor locks, and the file’s own lock mode. The per-row link omits the `ut` unlock token, so a `full_lock` historical download fails even after you unlocked the preview.
5. Save the response under a distinct local name. The server uses the cloud filename, so add a suffix such as `-v2` locally to avoid replacing another download.
6. Compare the local byte size with the chosen row and open it in a trusted application. If the API returns `Version not found`, refresh the panel and confirm that revision still exists.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="File Versions panel showing v3 Latest and selectable v2 and v1 historical rows." width="400" height="560" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the numbered history rows used to choose the intended older revision. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Viewer-header warning.** The full preview viewer also lets you select an older row and inspect its raw bytes, but its header **Download** link is still built without a version parameter and retrieves Latest. Use the per-row icon in the Files details panel for a historical download.

**Full-lock limitation.** If you are authorized to manage protection, remove or change the file’s full lock, download the required historical row, and restore the intended protection afterward. Without that permission, the current browser UI has no supported historical-download link that carries the unlock token.

**What changes.** Downloading meters the selected revision’s bytes against applicable egress allowance. It does not restore the revision, create a version, or change the cloud file.

## Expected result

For an eligible file, the saved local copy matches the selected historical row’s content and size, while the cloud record remains on its existing Latest version and its history stays unchanged. A full-locked file remains blocked until its protection is changed by an authorized user.

## Related guides

- [Review version history before downloading](/files/version-history)
- [Find the file metadata needed for verification](/files/file-details)
