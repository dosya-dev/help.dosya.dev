---
{
  "articleId": "hc-preview-unsupported-download",
  "locale": "en",
  "revision": 5,
  "title": "Handle a file type Dosya cannot preview",
  "summary": "Handle an unsupported preview with the exact Open as text and Download choices, protect binary readability, and preserve the untouched cloud original.",
  "category": "files",
  "articleSlug": "preview-unsupported-download",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/file-viewer.tsx, apps/web/src/lib/helpers.ts, apps/web/src/lib/file-url.ts, apps/api/src/pages/api/files/[id]/download.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-archive-preview"
  ],
  "keywords": [
    "preview unsupported download",
    "Document and data previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
When no specialised viewer claims a file, Dosya shows its extension and says **Preview isn't available for this file type. You can open it as plain text - binary content will show up garbled.**

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-unsupported-download-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-unsupported-download-help-workflow-2026-10-14.webp" alt="Unsupported-file workflow: verify the file facts, interpret garbled binary text correctly, validate an unfamiliar download, and open the unchanged copy in a compatible app." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Unsupported-file workflow: verify the file facts, interpret garbled binary text correctly, validate an unfamiliar download, and open the unchanged copy in a compatible app. <a class="workflow-map-full" href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-unsupported-download-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Open as text** is an opt-in diagnostic path; it does not convert the file. The text viewer refuses bodies over 2 MB and ordinarily warns when bytes look binary, while this explicit action accepts that binary output may be unreadable. **Download** keeps the stored bytes unchanged when your lock mode and permissions permit it.

## Steps

1. Check the filename, extension, MIME type, and selected version in the viewer details.
2. Choose **Open as text** only when the format may contain readable text or you intentionally need a raw diagnostic view.
3. In the unsupported preview's text view, do not treat garbled binary characters as source corruption.
4. Choose **Download** to obtain the untouched original for its native application.
5. Scan or validate the downloaded file as your organisation requires before opening an unfamiliar executable or archive.
6. Open the copy in a compatible app and verify its content; keep the cloud source unchanged until the format is confirmed.

A full-lock file must be unlocked before its bytes can be read. A view-only file can be previewed only through allowed inline paths and may not permit attachment download. If neither action appears, confirm the file’s lock state and your access rather than renaming its extension.

## Expected result

The unsupported file is either inspected knowingly as text or downloaded byte-for-byte for a compatible application. No preview attempt rewrites the original or promises that binary data will be human-readable.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
