---
{
  "articleId": "hc-desktop-office-preview",
  "locale": "en",
  "revision": 5,
  "title": "Preview an Office document in the desktop app",
  "summary": "Preview Office files as server-converted PDF in the desktop app, understand the 50 MiB source limit, and recover from conversion or network errors.",
  "category": "desktop",
  "articleSlug": "desktop-office-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/OfficePreview.tsx, apps/desktop/src/renderer/lib/file-type.ts, apps/api/src/pages/api/files/[id]/preview-pdf.ts, apps/api/src/lib/onlyoffice/convert.ts and apps/desktop/tests/e2e/office-preview.spec.ts. Verified formats, 50 MiB limits, the 3-second retry interval, 20-attempt timeout, version handling and exact failure messages. Production behavior was not re-tested.",
  "related": [
    "hc-desktop-install",
    "hc-preview-files"
  ],
  "keywords": [
    "desktop office preview",
    "Desktop file viewer",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop app requests a server-side PDF conversion and displays the returned PDF in a read-only embedded viewer. The document is not converted solely on your device, and previewing does not edit the source.

<figure class="help-screenshot"><a href="/screenshots/desktop-office-preview-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-office-preview-help-workflow-2026-10-14.webp" alt="Office preview flow from server conversion status to a read-only PDF inside the desktop window." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Dosya converts an eligible Office source on the server and embeds the temporary PDF for reading. <a href="/screenshots/desktop-office-preview-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use a DOCX, XLSX, PPTX, DOC, XLS, PPT, ODT, ODS, ODP, RTF or CSV file no larger than **50 MiB**. You must be signed in and allowed to view the selected file; no separate desktop-preview role control is present.

## Steps

1. Open the Office file from **Files**.
2. While the server converts it, leave the viewer open at **Preparing preview…**. A busy conversion is retried every **3 seconds**, up to **20 attempts**.
3. Read the PDF result with the embedded PDF controls. This surface is for viewing; use the product's separate editor workflow when you need to change document content.
4. If you selected an older file version before opening the viewer, verify that version's pages; the current version is cached separately from version-specific requests.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop Files area containing the Office source before server-side PDF conversion." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The PDF is a viewing rendition; the Office source remains the authoritative stored object. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The temporary PDF blob URL is revoked when the component closes. That cleanup affects only the local preview resource, not the stored Office document.

## Expected result

The converted pages become readable inside the desktop window while the original cloud object and version history remain unchanged.

## Troubleshooting

After the retry window, the app says **“This preview is taking too long. Download the file instead.”** A source over the limit produces **“This file is too large to preview. Download it instead.”**

**“This file type cannot be previewed. Download it instead.”** identifies an unsupported conversion type. **“Could not reach the server.”** indicates connectivity trouble, while **“Could not prepare a preview for this file.”** covers another conversion failure. Download the original when retrying cannot produce a preview.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
