---
{
  "articleId": "hc-media-verify-video-duration",
  "locale": "en",
  "revision": 5,
  "title": "Verify video duration and file details",
  "summary": "Verify video duration after the mobile player loads, compare it with the timeline, and distinguish decoder metadata from stored file details.",
  "category": "files",
  "articleSlug": "media-verify-video-duration",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/stages/VideoStage.tsx, apps/mobile/src/viewer/stages/VlcVideoStage.tsx, apps/mobile/src/viewer/viewerModel.ts, and apps/mobile/src/files/download.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-file-details"
  ],
  "keywords": [
    "media verify video duration",
    "Media metadata inspection details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Video duration in the Dosya mobile viewer comes from the active player after media status loads. It is not a duration field stored in the general file record.

<figure class="help-screenshot"><a href="/screenshots/media-verify-video-duration-help-workflow-2026-10-14.webp"><img src="/screenshots/media-verify-video-duration-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing a video file, viewer controls, duration comparison, playback confirmation, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible cards open a video, compare duration, file size and format, play a controlled section, and reopen the result. <a href="/screenshots/media-verify-video-duration-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before comparing values**

Confirm the exact filename, size, and current version. Created or modified timestamps are dates, not playback lengths. The mobile viewer obtains a signed media URL and lets the native player, or its VLC fallback, report duration when the selected platform can decode the content.

## Steps

1. Open the video from **Files** in the Dosya mobile app. Wait for the first frame and playback controls rather than reading the initial loading state.
2. Read the duration added to the viewer metadata line when it becomes a positive value. Compare it with the end of the seek timeline.
3. Seek to a point near the end and play a short segment. This confirms that the reported duration and the playable timeline describe the same current version.
4. Return to file details and compare filename, stored byte size, type, and version. Do not expect the general details surface to reproduce a decoder-derived duration.
5. If the platform cannot decode the file, use the permitted save action and inspect the local copy with a compatible player. Saving creates a separate device copy and leaves the cloud file unchanged.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Browser image preview with Campaign overview.png and its Details panel open." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>This screenshot shows the general preview and Details surfaces; video duration is supplied by the mobile player after decoding begins. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If duration never appears**

A slow connection, expired media grant, unsupported codec, or decoder failure can prevent loaded status. The mobile viewer waits 15 seconds for a first frame before showing **Still loading**. Retry on a stable connection and verify access to the unlocked current version.

A recognized filename extension does not guarantee that the device supports its codec. The browser preview shown here exposes common file metadata, while duration for this task must come from the mobile playback stage.

## Expected result

The player reports a finite duration that agrees with its seek timeline for the current video, and the verification does not alter the cloud file or create a version.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
