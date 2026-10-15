---
{
  "articleId": "hc-media-check-image-dimensions",
  "locale": "en",
  "revision": 5,
  "title": "Check image dimensions in Dosya",
  "summary": "Read image dimensions from the mobile viewer, distinguish decoded size from server metadata, and avoid treating a HEIC derivative as original pixels.",
  "category": "files",
  "articleSlug": "media-check-image-dimensions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/stages/ImageStage.tsx, apps/mobile/src/viewer/viewerModel.ts, and apps/mobile/src/viewer/imageSource.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-file-details"
  ],
  "keywords": [
    "media check image dimensions",
    "Media metadata inspection details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Dosya mobile viewer learns image dimensions from the native decoder after the image loads. The files API does not store or return a width and height for this display.

<figure class="help-screenshot"><a href="/screenshots/media-check-image-dimensions-help-workflow-2026-10-14.webp"><img src="/screenshots/media-check-image-dimensions-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing Files, an image preview, displayed dimensions, and refresh verification." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The workflow image visibly directs the reader to open a media file, compare the preview and details, confirm displayed dimensions, and reopen the view. <a href="/screenshots/media-check-image-dimensions-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Choose a reliable test file**

Use a JPEG or PNG when you must verify original pixel dimensions. The mobile viewer may display a generated thumbnail for HEIC content, so a reported HEIC width and height can describe the decoded derivative rather than the untouched original. Compare against the source file before using the value for print, design, or forensic work.

## Steps

1. Open **Files** in the Dosya mobile app and select the intended image. Confirm its filename and folder first so that a similarly named derivative is not mistaken for the original.
2. Wait until the image finishes loading. The viewer uses a contain layout, so the entire photo remains visible rather than being cropped to fill the screen.
3. Read the metadata line beneath the filename. When the decoder reports a natural size, Dosya adds a value such as **4032 x 3024** alongside size, kind, and created date.
4. Rotate the device or zoom the preview if useful, but do not interpret the onscreen rendered size as a new pixel count. Those view operations do not modify the file.
5. For a critical measurement, download the original through an allowed client and compare its dimensions with the viewer result.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Browser image preview showing Campaign overview.png with the Details panel open." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>This screenshot visibly shows the common preview shell and Details panel; decoded image dimensions for this task are read from the Dosya mobile viewer. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If no dimensions appear**

The dimension label is dynamic and is omitted until the native image loader supplies both non-zero values. A network, decode, access, or unsupported-format failure can therefore leave only the server-backed metadata. Retry after reconnecting, confirm the file is not hidden or locked for the member, and test a known JPEG or PNG.

The pictured browser viewer shows the common file preview and **Details** layout, but that side panel contains identity and storage information rather than decoded image dimensions. Use the mobile viewer’s metadata line for this task.

## Expected result

After a supported image decodes, the mobile viewer shows its width and height in pixels. Viewing, rotating, or zooming the image leaves the stored bytes and version unchanged.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
