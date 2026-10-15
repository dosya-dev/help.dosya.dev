---
{
  "articleId": "hc-archive-entry-preview",
  "locale": "en",
  "revision": 6,
  "title": "Preview one file inside an archive",
  "summary": "Preview a supported file inside a ZIP, ISO, or IMG archive, including text limits, blocked compression methods, and view-only behavior in Dosya.",
  "category": "files",
  "articleSlug": "archive-entry-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/desktop/src/renderer/components/files/ArchiveViewer.tsx, apps/web/src/lib/text-detect.ts, apps/api/src/pages/api/files/[id]/archive/entry.ts, and apps/api/src/lib/container/refusals.ts. Production behavior was not re-tested.",
  "related": ["hc-archive-preview", "hc-preview-files"],
  "keywords": ["archive entry preview", "archive tools", "Dosya help", "cloud storage", "file management"]
}
---
The archive viewer can render one supported member without first saving it as a separate Dosya file. This is useful for confirming content, but it does not grant download permission or alter the container.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-entry-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-entry-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-entry-preview-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-entry-preview-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-entry-preview-workflow-map-2026-10-14.webp" alt="Archive member preview workflow showing a file row selected by index and its content rendered in the stage." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the row name and size to establish which member is selected, then compare them with the preview-stage caption. <a class="workflow-map-full" href="/screenshots/archive-entry-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-entry-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-entry-preview-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What can preview

Browser and desktop archive views render images, PDF documents, video, audio, and readable text. For an archive member, text detection uses only its filename: common source, configuration, markup, subtitle, and plain-text extensions plus recognized extensionless names such as `README` and `Dockerfile`. The archive viewer supplies no MIME type to this check.

Text entries larger than 2 MiB are not fetched for inline display. The card reports **Too large to preview inline (size)** and offers **Download this file**. For an eligible text member, Dosya fetches the complete entry but renders at most 200,000 characters; when shortened, it says **Showing the first 200,000 characters. Download the file to see the rest.**

## Steps

1. Open the ZIP, ISO, or IMG in the browser or desktop client.
2. Navigate the **Archive contents** list, or type into **Filter entries** to narrow it by name.
3. Select a file row that shows a size. Directory rows expand or collapse and do not become preview selections.
4. Confirm the selected-entry bar names the intended member. The caption on image, media, and text stages includes the cleaned file name and uncompressed size.
5. Use the native controls inside PDF, video, or audio previews as needed. Unsupported file types show a download card rather than misleading rendered content.
6. Close the viewer when inspection is complete. No extraction is required for this workflow.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Supported image example demonstrating the visual content that should appear after selecting an image member from an archive." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>A supported image opens directly on the stage; its archive-row identity remains the deciding check when duplicate base names exist. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and failure behavior

Preview requests use the viewable-file permission path. A view-only archive or ancestor may still allow this display, even though **Download** and **Save to dosya** are later rejected by their stricter gates. Full locks, hidden content, or a folder outside a member's allowed anchor remain unavailable.

Only STORE and DEFLATE members open. Password protection produces **This entry is password-protected**. Other algorithms return an error such as **This entry uses Deflate64 compression, which is not supported.** If the data length differs from the declared size, Dosya treats the container as malformed rather than streaming unchecked bytes.

**This entry could not be opened.** indicates a fetch or decoding failure in the text view. Reselect the row once, confirm that the correct archive version is open, and try downloading the whole archive with a trusted local utility if the same preview continues to fail. Entry responses can remain in a private cache for 3,600 seconds, and version-specific URLs prevent one version's member from being confused with another.

## Expected result

The preview displays the exact selected member, or gives a download-only or refusal state that explains why inline rendering is unavailable. The stored archive receives no new version and no extracted cloud item is created.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
