---
{
  "articleId": "hc-preview-image-load-failure",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot an image preview that will not load",
  "summary": "Diagnose a web image preview that falls through thumbnail, original, or HEIC decoding, then preserve and test the downloaded source without editing it.",
  "category": "files",
  "articleSlug": "preview-image-load-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/file-preview-image.tsx, apps/web/src/components/file-viewer.tsx, apps/web/src/lib/file-url.ts, apps/api/src/pages/api/files/[id]/thumb.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-preview-unsupported-download"
  ],
  "keywords": [
    "preview image load failure",
    "File preview troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web image viewer tries more than one path before giving up. Normal images request a server thumbnail and then the raw original; HEIC first requests a WebP thumbnail and can fall back to browser-side decoding.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-image-load-failure-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" alt="Image preview recovery workflow: verify the file and version, reopen that image once, test the downloaded source in a trusted image app, and report the exact failure facts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Image preview recovery workflow: verify the file and version, reopen that image once, test the downloaded source in a trusted image app, and report the exact failure facts. <a class="workflow-map-full" href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-image-load-failure-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

If every path fails, the viewer replaces the picture with the file-type icon; it does not show a dedicated Retry button or a detailed image error. Reopening a different file or version resets the preview failure state.

## Steps

1. In the image preview, confirm the filename, selected version, and displayed size in the viewer details.
2. Let the image fallback chain finish; a HEIC conversion or large original can take longer than a normal thumbnail.
3. Close and reopen the same image version once after confirming the network and session are active.
4. If the file icon replaces the image again, choose the header **Download** action to preserve the original bytes.
5. Open the download in a trusted image application and check whether it decodes at full resolution.
6. Report the image filename, version, format, size, and whether the downloaded original opens; do not resave over the source during diagnosis.

A working download with a failed preview points to thumbnail or browser decoding. A download that also fails or will not decode points to access, incomplete bytes, misleading extension, or source corruption. The 128 MB Worker memory budget can make very large HEIC images use browser decoding, but that fallback is expected behavior rather than data loss.

## Expected result

Either the preview renders through its thumbnail, raw, or HEIC path, or the original is downloaded unchanged and the failure is isolated with enough version and format detail to investigate.

## Related guides

- [Preview files](/files/preview-files)
- [Handle unsupported previews](/files/preview-unsupported-download)
