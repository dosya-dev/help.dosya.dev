---
{
  "articleId": "hc-pdf-preview",
  "locale": "en",
  "revision": 6,
  "title": "Preview a PDF in Dosya",
  "summary": "Open a PDF with ranged loading, navigate pages, zoom, search, print, and recover from corrupt or unsupported documents without editing the file.",
  "category": "files",
  "articleSlug": "pdf-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/pdf-viewer/pdf-viewer.tsx, apps/web/src/components/pdf-viewer/pdf-toolbar.tsx, apps/web/src/lib/use-pdf-find.ts and apps/web/src/components/pdf-viewer/pdf-viewer.test.tsx. Production PDF delivery was not tested and no production action was performed.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "pdf preview",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya's web PDF viewer reads the stored PDF through authenticated range requests. It requests 1 MiB chunks and disables whole-file prefetch, so a large document can show its first page without downloading every byte first.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" alt="Web PDF preview workflow showing thumbnail sidebar, page field, zoom menu, search, print, and download recovery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the page total and a later page to confirm the document loaded beyond its cover. <a class="workflow-map-full" href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a PDF file from **Files** and confirm its name, size, and selected version. The PDF component resets page and zoom state when the file or version changes.
- Unlock a fully locked file before requesting bytes. Workspace membership, folder scope, hidden-file rules, and read access still apply.
- Interactive forms, scripts, signatures, and exact print color can behave differently from a dedicated PDF application. Download the original when those features are decisive.

## Steps

1. Wait for the spinner to disappear and confirm the toolbar reports page **1 / _total_**.
2. Enter a number in **Page number** and press Enter, or leave the field. Dosya reads the leading integer, so `2.9` goes to page 2, then clamps the result between page 1 and the document's last page. An entry with no leading integer returns to the current page.
3. Select **Toggle sidebar** to show page thumbnails. This preference is stored in the browser under **dosya:pdf-sidebar** for later PDF previews.
4. Use **Zoom out**, **Zoom options**, or **Zoom in**. The menu offers **Fit width**, **Fit page**, 50%, 75%, 100%, 125%, 150%, and 200%; the step ladder can continue to 300%.
5. Select **Search** to find text, then move through matches. Scrolling updates the current-page field; only the current page and two pages on either side keep live canvases to control memory use.
6. Select **Print** only after saving other work. Dosya renders every page at scale 2 into temporary images before opening the browser print dialog, which can take time and memory for long documents.
7. Use the viewer header's **Download** control to save the original PDF when preview fidelity is insufficient.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya viewer layout illustrating where a PDF's file identity and inspector remain visible during document review." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The shared viewer keeps filename, version information, and download access around the PDF-specific controls. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Troubleshooting

**Could not display this PDF** followed by **The file may be corrupted or use unsupported features.** means PDF.js could not open the document. Select **Download** and test the unchanged original in another reader. A slow first page can be network latency rather than corruption because later chunks are fetched on demand.

Printing is a client-side rendering action and does not update the cloud file. Search, page jumps, sidebar state, and zoom also leave the stored PDF and its version history unchanged.

## Expected result

The toolbar shows the correct page count, navigation reaches the requested page, and zoom or search updates only the viewer. Failures expose the original-file download without creating or replacing cloud data.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
