---
{
  "articleId": "hc-preview-pdf-load-failure",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a PDF preview",
  "summary": "Diagnose a PDF preview failure, use the exact viewer error and Download action, and separate access or network problems from corrupt PDF structure.",
  "category": "files",
  "articleSlug": "preview-pdf-load-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/pdf-viewer/pdf-viewer.tsx, apps/web/src/components/file-viewer.tsx, apps/web/src/lib/file-url.ts, apps/api/src/pages/api/files/[id]/raw.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-preview-unsupported-download"
  ],
  "keywords": [
    "preview pdf load failure",
    "File preview troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web PDF viewer reads the file in 1 MiB range chunks and renders only pages near the current page. This allows large PDFs to open without downloading the entire document before page one.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14.webp" alt="PDF preview recovery workflow: verify the selected version, retry the viewer on a stable session, use Download from the error card, and test the same bytes in a trusted PDF reader." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>PDF preview recovery workflow: verify the selected version, retry the viewer on a stable session, use Download from the error card, and test the same bytes in a trusted PDF reader. <a class="workflow-map-full" href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-pdf-load-failure-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

When pdf.js cannot load the document, the viewer says **Could not display this PDF** and **The file may be corrupted or use unsupported features.** The same card offers **Download**. This message does not by itself identify whether the bytes, network, access, or PDF structure caused the failure.

## Steps

1. Check the filename and active version before troubleshooting so an older revision is not mistaken for the latest PDF.
2. After a PDF load failure, reload the viewer once with an active session and stable connection.
3. If the PDF preview renders page one, jump to the reported problem page and wait for its nearby render window.
4. When **Could not display this PDF** appears, choose its **Download** action.
5. Use **Download**, open the PDF bytes in a trusted desktop reader, and test the same page.
6. Report the file ID or name, version, size, failing page, and whether the downloaded file opens; keep the original unchanged.

A download that opens normally isolates the problem to browser rendering, range delivery, or a PDF feature that pdf.js does not support. If another reader also rejects the same download, obtain a fresh source copy or repair it outside Dosya, then upload that as a new version only after preserving the original.

## Expected result

The PDF either renders and navigates to the tested page, or the error card provides an intact download for comparison. The diagnosis distinguishes preview behavior from damage in the stored source.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
