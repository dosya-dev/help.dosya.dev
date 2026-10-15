---
{
  "articleId": "hc-version-upload-replacement",
  "locale": "en",
  "revision": 5,
  "title": "Upload a replacement as a new file version",
  "summary": "Upload a replacement through Upload new version, track the upload dock, verify one file ID with a higher version, and handle current race limits.",
  "category": "files",
  "articleSlug": "version-upload-replacement",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/web/src/lib/upload-runner.ts, apps/api/src/pages/api/upload/init.ts, and apps/web/src/components/file-viewer.tsx on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-version-history",
    "hc-file-details"
  ],
  "keywords": [
    "version upload replacement",
    "Version history operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Upload new version** sends a selected local file through the shared upload runner with the existing cloud file’s ID. The local filename does not create a second cloud record in this flow.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/version-upload-replacement-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-upload-replacement-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-upload-replacement-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/version-upload-replacement-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/version-upload-replacement-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for choosing Upload new version, selecting one local file, monitoring the upload dock, and checking the new Latest row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The replacement workflow preserves the cloud record while appending its new bytes. <a class="workflow-map-full" href="/screenshots/version-upload-replacement-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-upload-replacement-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-upload-replacement-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, verify the target cloud file by name, location, details, and current version. You need `upload_files` for the context-menu action to appear.
2. Open the target’s menu and choose **Upload new version**. The hidden picker accepts one local file for that target.
3. Select the replacement. Dosya immediately reports **Uploading version — [local name] is uploading — track it in the upload dock.**
4. Keep the app open and use the upload dock for progress, cancel, or resume. The shared runner uses multipart transport above its configured threshold and applies plan, storage, extension, member, and concurrency limits.
5. After completion, reopen the target and choose **Versions**. A new highest row should be **Latest**, while the cloud file keeps its original ID and listing identity.
6. Preview the new row and compare size, MIME behavior, and content. If upload fails, inspect the dock before selecting the local file again to avoid an unnecessary duplicate attempt.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="File version inspector showing one cloud file with v3 Latest and two preserved earlier rows." width="400" height="560" loading="lazy" decoding="async" /></a><figcaption>A successful replacement adds another numbered row to this same file timeline. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Race limitation.** The upload API supports `expected_version` and can reject stale clients, but this Files action currently enqueues only workspace ID, target file ID, and the selected file. It does not pin the current version seen before the picker opened; review Latest again after completion when collaborators may be uploading simultaneously.

## Expected result

The existing cloud record gains one new Latest revision, retains its prior versions, and remains addressable by the same file ID. The operation does not add a separate same-named file row.

## Related guides

- [Review all versions of the target](/files/version-history)
- [Confirm the record identity in file details](/files/file-details)
