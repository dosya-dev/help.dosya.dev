---
{
  "articleId": "hc-upload-test-one-file",
  "locale": "en",
  "revision": 5,
  "title": "Run a one-file upload preflight",
  "summary": "Send one uniquely named sample to the final folder, wait for Done, then use View file and File details to verify destination, name, and size.",
  "category": "uploading",
  "articleSlug": "upload-test-one-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/router.tsx; apps/web/src/pages/uploads.tsx; apps/web/src/lib/upload-runner.ts; apps/api/src/lib/upload/init-gates.ts; apps/api/src/lib/upload/body-pipeline.ts; apps/web/src/components/file-detail-panel.tsx.",
  "related": [
    "hc-upload-files",
    "hc-upload-states"
  ],
  "keywords": [
    "upload test one file",
    "Upload preparation and preflight",
    "Dosya help",
    "file upload"
  ]
}
---

A one-file preflight checks the actual workspace, folder, role, storage gate, extension policy, transfer path, and completion receipt before a large upload. Use a small representative file with a unique name; an exact name collision in the destination can create a new version of the existing item.

The **Uploads** route requires `access_upload`, and the upload area requires `upload_files`. Workspace settings can also restrict the extension, size, per-member storage, concurrent uploads, or destination folder. Files over 50 MiB use resumable 10 MiB parts, so a small test does not exercise that multipart path.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-test-one-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-test-one-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-test-one-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-test-one-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-test-one-file-help-workflow-2026-10-14.webp" alt="Four-step one-file preflight showing a collision-free sample, final Folder selection, Queued-to-Done monitoring, and destination-path plus downloaded-byte verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use one representative file in the final destination, stop on Error, then verify both its stored path and downloaded bytes before scaling up. <a class="workflow-map-full" href="/screenshots/upload-test-one-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-test-one-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-test-one-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Create or choose a small source file whose extension matches the larger batch and whose name does not already exist in the destination.
2. Open **Uploads**, confirm the active workspace, and set **Folder** under **Upload options** to the exact final location.
3. Choose **Select files**, add only the sample, and confirm the **Upload queue** shows one file with the expected name and size.
4. Keep the tab open as the row changes from **Queued** to percentage progress and finally **Done**; investigate an **Error** before adding more sources.
5. Choose **View file** on the completed row, open **File details**, and compare the stored name and displayed size with the local sample.
6. Choose **Go to location** and confirm the file sits in the final folder; download and open it when the preflight must also test byte retrieval.

<figure class="help-screenshot"><a href="/screenshots/files-upload-2026-10-10.webp"><img src="/screenshots/files-upload-2026-10-10.webp" alt="Dosya Files view with the destination contents visible and the Upload button highlighted before a one-file preflight." width="1440" height="520" loading="lazy" decoding="async" /></a><figcaption>Inspect the destination for a name collision before using the highlighted <strong>Upload</strong> action. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The sample reaches **Done**, opens from its completed row, and appears in the chosen workspace folder with the expected name and size. The local source remains unchanged.

**Your role can't upload files** means the page is visible but `upload_files` is absent; ask an owner or admin. A workspace file-size or extension refusal names the exact setting. A successful small preflight proves the ordinary one-file path, destination, and permissions, but a production batch above 50 MiB per file should also include one large multipart sample before unattended transfer.

## Related guides

- [Uploading files and folders to Dosya](/uploading/files-and-folders)
- [Interpret the sample file's queue states](/uploading/progress-and-states)
