---
{
  "articleId": "hc-mobile-preview-office",
  "locale": "en",
  "revision": 5,
  "title": "Preview an Office document on mobile",
  "summary": "Preview Office files on mobile through the server PDF conversion, understand the 50 MB source cap, and recover from preparation or access failures.",
  "category": "files",
  "articleSlug": "mobile-preview-office",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/stages/OfficeStage.tsx, apps/mobile/src/viewer/officePreview.ts, apps/mobile/src/viewer/useFilePreview.ts, apps/api/src/pages/api/files/[id]/preview-pdf.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile preview office",
    "Mobile document previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya mobile previews supported Office files by asking the server to convert the selected version to PDF. The viewer is read-only: editing remains in the web editor, and a full-lock, view-only, hidden, or otherwise inaccessible file is not converted.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-preview-office-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-office-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-office-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-preview-office-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-preview-office-help-workflow-2026-10-14.webp" alt="Mobile Office preview workflow: open the intended Office file, wait through 3-second preparation checks, follow the 50 MB message, and use the exact type or conversion recovery shown." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile Office preview workflow: open the intended Office file, wait through 3-second preparation checks, follow the 50 MB message, and use the exact type or conversion recovery shown. <a class="workflow-map-full" href="/screenshots/mobile-preview-office-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-office-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-office-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Supported Office formats include DOCX, XLSX, PPTX and the older DOC, XLS and PPT families accepted by the conversion service. The source must be 50 MB or smaller. A current-version conversion may be cached; an older selected version is converted for that view without being retained as the current preview.

## Steps

1. Open **Files** in the intended workspace and select the Office document by its full name.
2. If Dosya shows a lock badge, use an allowed download path instead; the PDF conversion route cannot accept full-lock or view-only source bytes, even after the mobile password gate is cleared.
3. Wait while the stage says **Preparing preview…**; mobile checks again every 3 seconds and allows 20 preparation attempts.
4. When the PDF appears, move through its pages and confirm a heading or value from the source document.
5. If the stage says **This file is too large to preview. Download it instead.**, use the download action; the source exceeded 50 MB or the converted PDF exceeded 50 MB.
6. For **This file type cannot be previewed** or **Could not prepare a preview for this file**, confirm access and format, then download the original or retry after the service recovers.

A 503 response means conversion is still in flight, not that the document is broken. After 20 checks—about one minute plus request time—the mobile client stops polling and says the preview is taking too long. Unsupported formats return their own download guidance; missing, hidden, locked, and other failures use the generic preparation message.

## Expected result

The supported document opens as a readable PDF for the selected version. If conversion cannot produce that PDF, the viewer ends in a specific size, type, timeout, or preparation state and leaves the original available for download.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download on mobile](/files/mobile-download-file)
