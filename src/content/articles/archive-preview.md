---
{
  "articleId": "hc-archive-preview",
  "locale": "en",
  "revision": 6,
  "title": "Inspect an archive before extracting files",
  "summary": "Inspect ZIP, ISO, and IMG contents without extracting the whole file; understand listing limits, preview rules, and safe save options in Dosya.",
  "category": "files",
  "articleSlug": "archive-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/desktop/src/renderer/components/files/ArchiveViewer.tsx, apps/api/src/pages/api/files/[id]/archive/index.ts, apps/api/src/lib/zip/central-directory.ts, and apps/api/src/lib/container/iso/directory.ts. Production behavior was not re-tested.",
  "related": ["hc-preview-files", "hc-organize-files"],
  "keywords": ["archive preview", "zip file", "extract archive", "cloud storage", "file management"]
}
---
Dosya can inspect `.zip`, `.iso`, and `.img` files in the browser and desktop app without extracting the whole container first. EPUB and CBZ files use their readers instead. An `.img` file must contain an ISO 9660 image; raw FAT or ext4 images are not supported by this viewer.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-preview-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-preview-workflow-map-2026-10-14.webp" alt="Archive inspection workflow showing the entry tree, file selection, preview stage, and safe save decision." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Inspect names, sizes, and supported entry types before downloading or saving anything from the archive. <a class="workflow-map-full" href="/screenshots/archive-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- You need access to view the stored archive and every containing folder. A full lock or hidden ancestor can prevent the archive from opening.
- Listing is read-only. Downloads and **Save to dosya** have separate permission checks.
- Treat unfamiliar entry names as untrusted. Dosya neutralizes unsafe display names and identifies entries by their directory index, but it does not evaluate an extracted file for you.

## Steps

1. In **Files**, open the ZIP, ISO, or IMG file. Wait while the viewer shows **Opening…** and loads only the archive directory.
2. Read the summary above the tree. It reports the total entry count, stored archive size, and whether Dosya opened it as an archive or disk image.
3. Expand folders in **Archive contents**. Directories start closed so a large container does not render every nested row at once.
4. Enter part of a name in **Filter entries** when the tree is long. Matching descendants remain reachable because filtering opens their parent folders in the result view.
5. Select an eligible file. Stored and Deflate entries, compression methods 0 and 8, can open. A lock marks an encrypted entry; the tooltip says **This entry is password-protected**. Other compression methods are marked unavailable and name their numeric method.
6. Review the right-hand stage. Images, PDFs, video, audio, and readable text can preview there. Other formats present **Download this file** instead of inventing a preview.
7. Choose **Download** for a local copy or **Save to dosya** for a new cloud file only after the path, displayed name, and uncompressed size are the ones you expect.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Image preview example used to compare an archive entry name and size with the content shown on the preview stage." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>An image entry should show its own content and a caption containing that entry's cleaned name and uncompressed size. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Listing limits and errors

Dosya lists at most 20,000 entries. ZIP central-directory data and ISO directory data each have a 16 MiB processing ceiling, and decoded entry names have a combined 2 MiB budget. ISO traversal also stops after 400 directory reads. If a valid container exceeds a directory budget, the service responds with a 413 refusal and the viewer tells you to download the file instead. A truncated result says **Showing the first X of Y entries**; filtering searches only the entries that were returned.

**This file isn't a valid zip** or the disk-image equivalent means the parser rejected the container. **This archive could not be opened** can also mean access, storage, or network failure. Retry once after confirming the file version and connection. If the 413 message remains, download the original archive and inspect it with a trusted local tool.

Archive index and entry responses are private-cacheable for up to 3,600 seconds. Dosya includes the selected version in its requests; if another upload creates a newer version, close the viewer and open the intended version rather than assuming the old tree describes the new bytes.

## Expected result

The left pane shows the allowed portion of the archive hierarchy, and selecting an openable file displays that same indexed entry on the right. Inspection alone creates no folder, extracted file, or modification to the source archive.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
