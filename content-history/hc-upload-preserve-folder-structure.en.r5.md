---
{
  "articleId": "hc-upload-preserve-folder-structure",
  "locale": "en",
  "revision": 5,
  "title": "Preserve folder structure during an upload",
  "summary": "Use Select folder or a folder drop, let Dosya rebuild parent folders first, and verify skipped subtrees instead of accepting a flattened upload.",
  "category": "uploading",
  "articleSlug": "upload-preserve-folder-structure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-15; production behavior was not exercised for this revision. Verified against: apps/web/src/pages/uploads.tsx; apps/web/src/lib/upload-drop.ts; apps/web/src/lib/dropped-entries.ts; apps/web/src/lib/folder-upload.ts; apps/api/src/pages/api/folders/index.ts.",
  "related": [
    "hc-upload-files",
    "hc-upload-states"
  ],
  "keywords": [
    "upload preserve folder structure",
    "Upload preparation and preflight",
    "Dosya help",
    "file upload"
  ]
}
---

Use **Select folder** or drag a folder onto **Drop files or folders here to upload**. The browser supplies each file's relative path, then Dosya creates parents before children and sends each file to its resolved folder. Loose-file selection does not carry a tree.

One folder action accepts the first 2,000 files. A directory drag or drop can preserve empty folders through the FileSystem Entry API. **Select folder** reconstructs directories only from file relative paths, so wholly empty directories are absent. `.DS_Store`, `Thumbs.db`, `desktop.ini`, and `._` AppleDouble entries are skipped. You need `access_upload`, `upload_files`, and `create_folders`; without folder creation rights, Dosya leaves affected subtree files out instead of flattening them into the destination.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14.webp" alt="Four-step folder upload map showing destination selection, Select folder versus empty-folder-preserving drag and drop, nested-row review, and final path comparison." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use <strong>Select folder</strong> for file-backed paths or drag and drop when wholly empty directories matter, then inspect nested rows and resulting paths. <a class="workflow-map-full" href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/upload-preserve-folder-structure-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Uploads** and use **Folder** under **Upload options** to choose the parent that should contain the uploaded top-level folder.
2. Choose **Select folder** to rebuild directories represented by file paths, or drag and drop the directory when wholly empty folders must also be preserved. Do not use **Select files** when relative paths are required.
3. Approve the browser's folder access prompt and keep the tab open while Dosya reports **Recreating N folders, then uploading**.
4. Expand **Upload queue** to inspect nested folder rows, file counts, total bytes, and failed counts; trees over 50 visible rows open only their top level initially.
5. If Dosya reports **Some folders could not be created**, record the failed-folder and left-out-file counts, correct the named permission, lock, or name issue, and retry that subtree.
6. After every expected file shows **Done**, choose **Go to location** on representative rows and compare the resulting parent/child paths with the source tree.

<figure class="help-screenshot"><a href="/screenshots/files-upload-2026-10-10.webp"><img src="/screenshots/files-upload-2026-10-10.webp" alt="Dosya Files view with a Client delivery folder and the Upload action highlighted before choosing a folder tree." width="1440" height="520" loading="lazy" decoding="async" /></a><figcaption>Open the intended Files location before starting the folder-upload flow so the recreated tree has the correct parent. <a href="/screenshots/files-upload-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The chosen destination contains the supported hierarchy represented by the chosen input. Accepted files follow their relative paths; empty directories are retained only when the browser exposes them through a directory drag or drop. Source files on the device are not moved or deleted.

**Too many files in one go** means only the first 2,000 were queued; the toast states how many were left out, and those files must be added separately. **You don't have permission to create folders** requires an owner or admin to change the role. A failed parent causes its descendants to fail and their files to remain unqueued, which protects the tree from silent flattening.

## Related guides

- [Uploading files and folders to Dosya](/uploading/files-and-folders)
- [Track nested folder rows in the upload queue](/uploading/progress-and-states)
