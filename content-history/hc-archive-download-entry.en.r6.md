---
{
  "articleId": "hc-archive-download-entry",
  "locale": "en",
  "revision": 6,
  "title": "Download one archive entry",
  "summary": "Download one eligible file from a ZIP, ISO, or IMG archive while keeping the stored archive unchanged and respecting view-only access controls.",
  "category": "files",
  "articleSlug": "archive-download-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/desktop/src/renderer/components/files/ArchiveViewer.tsx, apps/api/src/pages/api/files/[id]/archive/entry.ts, apps/api/src/lib/files/download-gate.ts, and apps/api/src/lib/container/refusals.ts. Production behavior was not re-tested.",
  "related": ["hc-archive-preview", "hc-preview-files"],
  "keywords": ["archive download entry", "archive tools", "Dosya help", "cloud storage", "file management"]
}
---
Download a single item when you do not need the complete ZIP or disk image. The operation streams the chosen central-directory entry and leaves the archive stored in Dosya unchanged.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-download-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-download-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-download-entry-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-download-entry-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-download-entry-workflow-map-2026-10-14.webp" alt="Single-entry archive download workflow from selecting an indexed file to checking the saved local copy." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Select the exact archive row, use its download action, and validate the resulting local file rather than downloading the container. <a class="workflow-map-full" href="/screenshots/archive-download-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-download-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-download-entry-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements

- The entry must be a file compressed with STORE or DEFLATE. Folders, encrypted items, and unsupported compression methods cannot be streamed.
- The archive must remain viewable, and its byte-copy gate must pass. The entry route does not separately test the role's `download_files` permission; it refuses an archive marked view-only and any blocked view-only, locked, or hidden ancestor.
- Browser downloads use the browser's configured download location. The desktop app opens its native save dialog and requests the selected entry index, not the whole archive.

## Steps

1. Open the archive from **Files**, then expand the directory that contains the item.
2. Select the row and compare the displayed file name and uncompressed size with what you intend to receive.
3. Choose **Download** in the selected-entry header. If the format has no inline renderer, use **Download this file** on its fallback card.
4. In the desktop app, choose a local destination in the system save dialog. In a browser, wait for the browser download to finish.
5. Open the saved item with an appropriate local application. Verify its name, size, and content before deleting or changing the source archive.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Selected image content used to verify that a downloaded archive member matches its listed name and visual contents." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>For a visual file, compare the downloaded item with the entry preview and the name-size caption shown inside the archive viewer. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Refusals and recovery

The download request includes `dl=1`, which runs the byte-copy gate after the archive has passed the preview path. An archive whose own lock mode is view-only returns **This file is view-only and cannot be downloaded** with 403. A blocked ancestor is concealed as **File not found** with 404. Unlock the relevant full lock or have an administrator change the lock, hidden state, or folder access; reopening the same URL does not bypass the chain.

Other server responses distinguish the failure:

- **That entry is a folder, not a file.** means the selected index names a directory.
- **This entry is password-protected.** means Dosya cannot decrypt it.
- **This entry uses … compression, which is not supported.** names the unsupported method.
- **No such entry in this archive.** can occur when the chosen version and entry index no longer correspond.
- **Archive not found in storage.** means the metadata exists but the archive bytes cannot be read.

Download usage and transfer limits are charged against the entry's uncompressed size before streaming begins. If a usage, egress, or concurrency limit refuses the operation, wait for an active transfer to finish or resolve the account limit, then retry. A partially written local file is not a verified result; remove it and start the download again.

## Expected result

Exactly one local file is produced from the selected archive index. Its content matches the listing and preview, while the cloud archive, its version history, and every other entry remain untouched.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
