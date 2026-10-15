---
{
  "articleId": "hc-media-compare-preview-details",
  "locale": "en",
  "revision": 5,
  "title": "Compare preview metadata with File details",
  "summary": "Compare the preview with File details using filename, size, kind, and version while treating decoded dimensions or duration as viewer-only data.",
  "category": "files",
  "articleSlug": "media-compare-preview-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/viewerModel.ts, apps/mobile/src/viewer/stages/ImageStage.tsx, apps/mobile/src/viewer/stages/VideoStage.tsx, and apps/web/src/components/file-detail-panel.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-file-details"
  ],
  "keywords": [
    "media compare preview details",
    "Media metadata inspection details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Preview metadata and **File details** answer different questions. Compare their shared identity fields first, then treat dimensions and duration as values decoded by the active viewer.

<figure class="help-screenshot"><a href="/screenshots/media-compare-preview-details-help-workflow-2026-10-14.webp"><img src="/screenshots/media-compare-preview-details-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing Files, preview metadata comparison, File details verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible cards show opening a media file, comparing filename, identifier, size, type and timestamp, checking both views, then reopening the result. <a href="/screenshots/media-compare-preview-details-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What each surface knows**

The file record supplies the filename, byte size, kind, timestamps, and version information. A mobile image stage can add natural dimensions after decoding. A mobile video stage can add duration after playback status loads. Those media-specific values are not general fields returned by the files API, and the browser Details panel does not promise them.

## Steps

1. In **Files**, select the exact item and record its name, folder, and current version before opening it.
2. Open the preview. Compare its filename, readable type, size, and created date with the list entry. Wait for the media stage to load before judging a missing dimension or duration.
3. Open **File details** in the available client. Compare file identity, storage size, timestamps, and version information with the previewed item.
4. Treat an image dimension or video duration as a decoder result. It may be absent when the format, network, or platform decoder cannot provide it; that absence does not by itself prove the file record is corrupt.
5. If shared fields disagree, refresh the file list and reopen the current version. A stale view after rename, replacement, or version change can display older metadata.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Campaign overview.png open in the browser preview with a Details panel on the right." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot provides the actual browser preview and Details layout used to compare file identity and storage metadata. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Resolve common mismatches**

Size is the stored byte count, not the dimensions of an image or the playback length of a video. Created and modified dates also answer different questions. For HEIC images, the mobile viewer may decode a generated derivative, so its displayed dimensions should not be used as proof of the original pixel grid.

Previewing does not rewrite the file. If the wrong version is open, return to the file record and deliberately choose the intended version rather than uploading a duplicate merely to force a refresh.

## Expected result

The preview and details identify the same file and current version through their shared fields, while dimensions or duration appear only when the relevant viewer decodes them.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
