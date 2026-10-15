---
{
  "articleId": "hc-download-folder-archive",
  "locale": "en",
  "revision": 6,
  "title": "Download a cloud folder as a ZIP archive",
  "summary": "Download one Dosya folder with its nested paths intact, recognize protected or empty content, and resolve the exact archive size and file-count limits.",
  "category": "uploading",
  "articleSlug": "download-folder-archive",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified the folder context action, recursive entry rules and refusal text in apps/web/src/pages/files.tsx, apps/api/src/lib/archive-entries.ts and apps/api/src/pages/api/files/download-archive.ts. Local repository evidence only; no production request was made.",
  "related": [
    "hc-large-folder-download",
    "hc-verify-downloaded-archive"
  ],
  "keywords": [
    "download cloud folder",
    "folder ZIP archive",
    "download folder tree",
    "cloud storage download"
  ]
}
---
A folder download creates one streamed ZIP containing downloadable files from that folder and its descendants. Paths leading to included files are retained. Empty descendant folders are not represented because the ZIP contains file entries rather than standalone folder entries.

You need a workspace role with **download_files**. The folder's **Download** action is absent when the role lacks that permission. Content protected by a hidden or locked boundary is not disclosed through the archive; unlock an item you are permitted to access before starting the download.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/download-folder-archive-workflow-map-2026-10-14.webp" data-light-href="/screenshots/download-folder-archive-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/download-folder-archive-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/download-folder-archive-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/download-folder-archive-workflow-map-2026-10-14.webp" alt="Folder context menu Download action followed by a streamed ZIP that preserves the folder's nested file paths." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start the archive from the folder row, wait for the browser download, then compare the extracted hierarchy with Dosya. <a class="workflow-map-full" href="/screenshots/download-folder-archive-workflow-map-2026-10-14.webp" data-light-href="/screenshots/download-folder-archive-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/download-folder-archive-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, confirm the workspace and browse to the folder's parent.
2. Open the target folder first if you need to review its contents. Return to its parent when the list is correct.
3. Open the folder row's action menu and choose **Download**. In a pointer context menu, the same action appears between **Open** and **Share**.
4. The browser opens the archive request and begins saving `dosya-download.zip`. A successful attachment normally closes the temporary tab into the browser download shelf.
5. Wait for the browser to mark the file complete before opening, moving or renaming it.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya folder row ready for a folder archive download from the Files view." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>A single selected folder remains one archive request even when the tree contains many descendants. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Included names and protected items

The ZIP begins with the chosen folder's name for every included file and preserves the folder segments leading to that file. Dosya makes each path segment safe for local extraction. Colliding paths are retained with numbered names instead of overwriting one another.

Files marked **View only**, password-locked files, and hidden content outside your available view are excluded. This prevents the archive response from revealing that a protected name exists. If you expected such a file and are authorized to open it, unlock it in Files, verify that it appears, and request a new archive.

## Folder download limits

Archive preparation refuses a tree containing more than **10,000 downloadable files** with **“Too many files to archive at once (max 10000)”**. The combined source size may not exceed **5 GiB**; over that boundary the response is **“Archive too large (max 5 GiB)”**. These are per-ZIP limits, independent of free disk space on your computer.

A truly empty folder produces **“This folder is empty - there's nothing to download.”** If several empty folders were selected through the bulk action, the response uses **“These folders are empty - there's nothing to download.”** A protected or unavailable folder can instead return **“No items found”** without explaining what was concealed.

## Expected result

Extract the ZIP into a new local directory. Match the top-level folder name, descendant paths and a sample of file sizes against Files. Do not delete the cloud folder until the archive opens, the expected branches exist, and representative files can be read.

If an archived file vanished from object storage while the database still listed it, Dosya puts a `MISSING - <original filename>.txt` notice at the corresponding path. For example, `report.pdf` becomes `MISSING - report.pdf.txt`. The notice means the original bytes are absent from this ZIP; try the file's individual **Download**, then give support the visible file name if that also fails.

## Related guides

- [Handle a large folder download](/uploading/large-folder-download)
- [Verify the downloaded ZIP](/uploading/verify-downloaded-archive)
