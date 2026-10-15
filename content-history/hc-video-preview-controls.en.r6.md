---
{
  "articleId": "hc-video-preview-controls",
  "locale": "en",
  "revision": 6,
  "title": "Use video preview controls",
  "summary": "Play and seek a Dosya video preview, understand browser and mobile decoder differences, and recover from a stalled or unsupported format safely.",
  "category": "files",
  "articleSlug": "video-preview-controls",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/file-viewer.tsx, apps/web/src/lib/helpers.ts, apps/mobile/src/viewer/stages/VideoStage.tsx and apps/mobile/src/viewer/videoSupport.ts. Production streaming was not tested and no production action was performed.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "video preview controls",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The web viewer passes the stored video to the browser's native player. Dosya recognizes MP4, MOV, AVI, MKV, WebM, WMV, and FLV by extension, but actual playback still depends on the browser, operating system, and codec inside the container.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/video-preview-controls-workflow-map-2026-10-14.webp" data-light-href="/screenshots/video-preview-controls-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/video-preview-controls-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/video-preview-controls-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/video-preview-controls-workflow-map-2026-10-14.webp" alt="Video preview workflow from opening a named file through seeking, checking duration, and downloading after a decoder failure." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm that a real frame and duration load before relying on the timeline or time-based comments. <a class="workflow-map-full" href="/screenshots/video-preview-controls-workflow-map-2026-10-14.webp" data-light-href="/screenshots/video-preview-controls-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/video-preview-controls-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Verify the selected filename and version in the viewer header. Previewing an older version streams that version rather than silently switching back to the current one.
- Keep enough bandwidth for range requests. Mobile requests a streaming URL valid for 3,600 seconds so a large file does not lose authorization after the ordinary five-minute window.
- A fully locked file must be unlocked first. A view-only file can be previewed through the authenticated raw route but cannot be saved when its lock policy forbids downloads.

## Steps

1. Open the video from **Files**. On web, the player attempts autoplay and exposes the controls supplied by the current browser.
2. Select play or pause, drag the timeline to a known scene, and adjust volume or full-screen mode. Wait for duration metadata before treating the timeline as ready.
3. If a comment marker appears below the web player, select it to seek to that timestamp and open the matching comment.
4. On mobile, wait for the first frame. Native playback reports **Still loading** after 15 seconds without a frame and offers retry or save actions.
5. If playback fails, use **Download** on web or **Save to phone** on mobile, then open the original in a compatible player.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file viewer shell whose header and inspector remain available around a media preview." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The common viewer header supplies file identity and download recovery even when the embedded video decoder refuses the content. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Platform behavior and errors

Web displays **This browser can't decode this video. Download it and open it in a player like VLC, which decodes everything.** That result means the browser rejected the container or codec; it does not prove the stored bytes are corrupt.

On iOS, the native route treats MKV, WebM, AVI, WMV, FLV, OGV, MPG, MPEG, RMVB, and TS as unsupported by AVPlayer. A build with the Dosya VLC module can route eligible presigned files to VLC; a view-only raw stream cannot use that fallback because VLC cannot attach the required authorization header. Android tries its native player first.

Playback and seeking do not alter storage or upload a version. Saving the file creates a device copy that Dosya cannot remove later.

## Expected result

A compatible file produces a visible frame, finite duration, responsive timeline, and working sound controls. A decoder or first-frame failure presents a named recovery path while the cloud object remains unchanged.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
