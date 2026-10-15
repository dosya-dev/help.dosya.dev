---
{
  "articleId": "hc-mobile-video-playback",
  "locale": "en",
  "revision": 5,
  "title": "Play a video in the mobile viewer",
  "summary": "Play and seek mobile video with native controls, understand the one-hour stream URL and 15-second stall state, and recover from unsupported codecs.",
  "category": "files",
  "articleSlug": "mobile-video-playback",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/stages/VideoStage.tsx, apps/mobile/src/viewer/stages/VlcVideoStage.tsx, apps/mobile/src/viewer/videoSupport.ts, apps/mobile/src/viewer/useFilePreview.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-media-preview",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile video playback",
    "Mobile media viewing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Mobile video uses the phone’s native controls when the container is supported and a built-in libVLC stage for known iOS-incompatible containers when that module is available. Stream URLs are requested for one hour so long playback can continue past the old five-minute boundary.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-video-playback-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-video-playback-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-video-playback-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-video-playback-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-video-playback-help-workflow-2026-10-14.webp" alt="Mobile video workflow: open the video and wait for its first frame, seek with libVLC when used, save an undecodable format when allowed, and verify both picture and sound." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile video workflow: open the video and wait for its first frame, seek with libVLC when used, save an undecodable format when allowed, and verify both picture and sound. <a class="workflow-map-full" href="/screenshots/mobile-video-playback-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-video-playback-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-video-playback-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The native stage supports fullscreen and Picture in Picture. On iOS, MKV, WebM, AVI, WMV, FLV, OGV, MPG, MPEG, RMVB, and TS are routed away from AVPlayer; Android gives its player the first attempt. A view-only source cannot be handed to libVLC because that player cannot attach the authentication header.

## Steps

1. Open the video from **Files** and wait for a frame rather than judging the initial black surface.
2. Use the native play, pause, seek, fullscreen, or Picture in Picture controls when they appear.
3. On the libVLC stage, use its play button and tap the seek bar after a duration has been detected.
4. If **Still loading** appears after 15 seconds without a first frame, choose **Retry** on a stable connection.
5. If the phone cannot decode the format, choose **Save to phone** and open it in a compatible player; view-only files may not offer Save.
6. Verify playback beyond the chosen seek point and listen for audio before treating the file as usable on this device.

The 15-second message does not prove the file is corrupt; it covers both poor connectivity and a decoder that never produces a frame. libVLC failures say **Couldn’t play this video** and offer Retry or Save when allowed. Saving creates a device copy but does not change the cloud original.

## Expected result

A supported file plays with video and audio, seeks to the chosen position, and can enter the native display modes. Unsupported or stalled playback ends with an actionable Retry or Save route rather than an indefinite black screen.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Download on mobile](/files/mobile-download-file)
