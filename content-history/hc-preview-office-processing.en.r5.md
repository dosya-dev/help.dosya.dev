---
{
  "articleId": "hc-preview-office-processing",
  "locale": "en",
  "revision": 5,
  "title": "Wait for an Office preview to finish processing",
  "summary": "Interpret Office preview processing, wait through two bounded web retries or twenty mobile polls, and choose Download when conversion cannot finish.",
  "category": "files",
  "articleSlug": "preview-office-processing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/office-preview.tsx, apps/mobile/src/viewer/officePreview.ts, apps/api/src/pages/api/files/[id]/preview-pdf.ts, apps/api/src/lib/onlyoffice/convert.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-preview-unsupported-download"
  ],
  "keywords": [
    "preview office processing",
    "File preview troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Preparing preview...** means another conversion currently holds the file-version lock. The server returns 503 with **Retry-After: 3** while that lock is present; it is a temporary state, not a request to re-upload the document.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-office-processing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-office-processing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-office-processing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-office-processing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-office-processing-help-workflow-2026-10-14.webp" alt="Office processing workflow: keep the selected version open through bounded retries, reopen after the conversion lock expires, then download and report the exact fallback if it repeats." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Office processing workflow: keep the selected version open through bounded retries, reopen after the conversion lock expires, then download and report the exact fallback if it repeats. <a class="workflow-map-full" href="/screenshots/preview-office-processing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-office-processing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-office-processing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The web viewer makes the first request plus two retries. Mobile polls every 3 seconds for up to 20 attempts, matching the server’s 60-second conversion-lock lifetime. Repeatedly replacing the file during this window creates a new version and a different conversion key.

## Steps

1. Leave the viewer open on the intended version while **Preparing preview...** is visible.
2. Do not upload another same-named file merely to restart processing; that would create another version.
3. On web, allow the initial request and two timed retries to finish; on mobile, allow the 3-second polling cycle to settle.
4. When the Office PDF preview appears, confirm its version and a known piece of document content.
5. If web returns to the file card or mobile says the preview is taking too long, close and reopen once after the conversion lock has expired.
6. Use **Download** when another attempt gives the same fallback, then report the file version, size, format, and exact displayed message.

A source over 50 MB returns `too_large` without conversion. Unsupported input returns 415. Conversion service failures return 502 and the UI falls back rather than polling forever. The current-version PDF is cached only after successful conversion, so a failed attempt does not replace the Office original.

## Expected result

Processing either resolves to a PDF for the unchanged file version or stops at a bounded fallback with the original still downloadable. The workflow does not create a replacement version simply to clear a temporary conversion lock.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
