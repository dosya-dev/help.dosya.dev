---
{
  "articleId": "hc-preview-office-document",
  "locale": "en",
  "revision": 5,
  "title": "Preview an Office document in Dosya",
  "summary": "Open supported Office documents as converted PDFs in the web viewer, use the editor when allowed, and understand source and rendered size limits.",
  "category": "files",
  "articleSlug": "preview-office-document",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/office-preview.tsx, apps/web/src/components/file-viewer.tsx, apps/api/src/pages/api/files/[id]/preview-pdf.ts, apps/api/src/lib/onlyoffice/formats.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-archive-preview"
  ],
  "keywords": [
    "preview office document",
    "Document and data previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web Files viewer converts supported Office documents to PDF on demand. DOCX, XLSX, and PPTX are editable in ONLYOFFICE; DOC, XLS, PPT, ODT, ODS, ODP, and RTF also use the read-only conversion preview. CSV files open in Dosya's table preview first.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-office-document-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-office-document-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-office-document-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-office-document-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-office-document-help-workflow-2026-10-14.webp" alt="Web Office preview workflow: open a supported file, wait for Loading or Preparing preview, read the converted PDF, and choose Open in editor or Download when appropriate." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Web Office preview workflow: open a supported file, wait for Loading or Preparing preview, read the converted PDF, and choose Open in editor or Download when appropriate. <a class="workflow-map-full" href="/screenshots/preview-office-document-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-office-document-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-office-document-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The source conversion cap is 50 MB and the web component will not embed a converted PDF larger than 20 MB. The preview is keyed to the selected file version. A current-version rendition is cached; an older version is converted transiently.

## Steps

1. Open the Office file from **Files** and verify the filename and version in the viewer.
2. Wait through **Loading preview...** and, when conversion is already in flight, **Preparing preview...**.
3. In the Office preview, read a heading, spreadsheet value, or slide title to confirm the intended version.
4. Use the PDF toolbar for page navigation; the preview does not edit the source document.
5. Choose **Open in editor** when the file type and your permissions allow editing, understanding that a save creates a new version.
6. If the viewer falls back to its file card, choose **Download** and open the original in a compatible Office application.

The web preview retries a 503 response twice, using the server’s **Retry-After** value or 3 seconds by default. Any fetch failure, non-success response, source over 50 MB, or rendered PDF over 20 MB falls back to the file card. A view-only or locked source is not converted into a retained derivative.

## Expected result

A supported, accessible document appears as a readable PDF for the chosen version. Editing is a separate explicit action, while size, access, and conversion failures preserve a Download route to the original.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
