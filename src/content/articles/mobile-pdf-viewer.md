---
{
  "articleId": "hc-mobile-pdf-viewer",
  "locale": "en",
  "revision": 5,
  "title": "Read a PDF on mobile",
  "summary": "Preview and read PDFs on mobile, resume a saved page, use contents and bookmarks, share a local copy, and recover when the document cannot open.",
  "category": "files",
  "articleSlug": "mobile-pdf-viewer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/viewer/stages/PdfStage.tsx, apps/mobile/src/reader/PdfReader.tsx, apps/mobile/src/viewer/useFilePreview.ts and apps/mobile/src/reader/PdfReader.test.tsx. Production mobile delivery was not tested and no production action was performed.",
  "related": [
    "hc-media-preview",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile pdf viewer",
    "Mobile media viewing",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile file viewer first shows a native PDF stage with a **Page _n_ of _total_** badge. Selecting **Read** opens the dedicated reader, which stores page progress and bookmarks on the device for that file ID.

<figure class="help-screenshot"><a href="/screenshots/mobile-pdf-viewer-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-pdf-viewer-help-workflow-2026-10-14.webp" alt="Mobile PDF workflow from the Page count preview through Read, saved position, contents, and bookmark controls." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Confirm the page counter first, then enter Read mode for resume, contents, and bookmark features. <a href="/screenshots/mobile-pdf-viewer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in to the account and workspace that owns the PDF. A fully locked file needs its password before mobile resolves preview bytes.
- Mobile caches ordinary PDF files on device after the first network-backed open; a view-only file stays on the authenticated raw route and is not placed in the download cache.
- The first open can use mobile data equal to the bytes the native PDF library needs. Use Wi-Fi for a large document and keep enough local space for the cache.

## Steps

1. Open the PDF in the mobile file viewer. Wait for the activity indicator, then verify **Page 1 of _total_** or the page where the preview settles.
2. Pinch to zoom and swipe or scroll to a known later page. A single tap toggles viewer chrome.
3. Select **Read** to open the full reader. After saved state resolves, Dosya returns to the last stored page location unless you already changed page during this open.
4. Turn a page and let the controls hide. Dosya waits 2 seconds after the latest page change before writing that position; tap once to restore the controls, then open the reader menu.
5. Use **Contents** for the PDF outline when the file provides one. Toggle the bookmark control for the current **Page _n_**, then open the separate **Bookmarks** tab to revisit or remove saved pages. The **Contents** tab lists only outline entries.
6. Use the reader's share action only when a local copy may leave Dosya. Search and theme controls are intentionally unavailable for PDFs in this mobile reader.
7. Close the reader normally. The queued position saver flushes the current page during unmount.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile application overview representing the iPhone and Android clients that host the native PDF reader." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The native reader uses the same saved file identity across supported iPhone and Android clients. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Errors, storage, and recovery

If the preview URL or body cannot be resolved, use **Try again** from the file viewer. The full reader reports **Couldn't open this book** and offers **Close** plus **Open file details** when that callback is available. Confirm the file version and retry on a stable connection before downloading another copy.

PDF caching improves the next open and does not modify the cloud object. Sharing or saving creates a device copy governed by the phone and recipient app; deleting the Dosya file later does not retract it. Bookmarks and reading position are local reading state, not PDF annotations embedded into the document.

## Expected result

The page badge matches the document, Read mode resumes the saved location, and bookmarks return to their stored pages. Previewing and reading leave the cloud PDF unchanged.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Download on mobile](/files/mobile-download-file)
