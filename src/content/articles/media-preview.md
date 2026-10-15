---
{
  "articleId": "hc-media-preview",
  "locale": "en",
  "revision": 6,
  "title": "Use image, audio and video preview controls",
  "summary": "Preview images, audio, and video in Dosya, use each format's real controls, understand browser limits, and recover without changing originals.",
  "category": "files",
  "articleSlug": "media-preview-controls",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/file-viewer.tsx, apps/web/src/components/file-preview-image.tsx, apps/web/src/lib/helpers.ts and apps/mobile/src/viewer/useFilePreview.ts. Production preview delivery was not tested and no production action was performed.",
  "related": [
    "hc-preview-files",
    "hc-download-files"
  ],
  "keywords": [
    "image preview",
    "video preview",
    "audio preview",
    "cloud storage",
    "file management"
  ]
}
---
Dosya previews stored media without replacing its bytes. Opening a preview can read the original or a generated thumbnail, but playback, zooming, seeking, and switching viewer panels do not create a new file version.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" data-light-href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/media-preview-controls-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/media-preview-controls-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" alt="Dosya media viewer workflow showing image zoom, browser video playback, audio transport, and the original-file download fallback." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose controls for the current media type, then use Download when the browser cannot decode the stored format. <a class="workflow-map-full" href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" data-light-href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/media-preview-controls-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Files** in the workspace that contains the media. Folder scope, hidden-item rules, and a **full lock** password gate still control whether the bytes are available.
- Confirm the filename, extension, displayed size, and version. The viewer can open an older version from **Versions**, so do not assume the stage always shows the latest bytes.
- Browser playback depends on both container and codec. Dosya recognizes images including PNG, JPEG, GIF, WebP, AVIF, BMP, SVG, ICO, HEIC, and HEIF; video and audio recognition does not guarantee that every browser can decode the file.

## Steps

1. Select a media file in **Files** to open the full-screen viewer. Use **Previous file** and **Next file**, or the left and right arrow keys, to move through the loaded file set.
2. For an image, use **Zoom out**, **Zoom in**, and **Fit to screen**. Desktop web zoom moves in 25-point steps from 25% through 300%; **Fit to screen** returns to 100%. These header controls are hidden on narrow screens.
3. For video, use the browser's native play, pause, timeline, volume, and full-screen controls. Playback starts automatically when browser policy allows it.
4. For audio, use **Play** or **Pause**, the seek control, 15-second back/forward controls, volume, and playback speed. Waveform analysis is skipped above 80 MiB, but a plain seek slider remains available.
5. Open **Details** to verify type, region, uploader, and size. Use the header **Download** control when local playback or exact metadata matters.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Supported PNG open in Dosya with image content centered beside the file Details panel." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The image stage keeps the stored filename and metadata visible while zoom changes only the on-screen rendering. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Decode failures and privacy

If video decoding fails, Dosya says **This browser can't decode this video. Download it and open it in a player like VLC, which decodes everything.** Audio uses **This browser can't decode this audio format. Download the file to play it in another app.** A failed HEIC thumbnail falls back to the file icon rather than changing the original.

Preview requests use the signed-in session. Downloading creates a local copy outside Dosya's storage controls; later cloud deletion, revocation, or replacement does not recall that copy. Selecting **Edit** is a separate mutation and can upload a new version, so leave it closed when the goal is inspection only.

## Expected result

The selected file remains unchanged while the supported viewer responds to zoom, seek, or playback controls. Unsupported decoding produces an explicit download path instead of an indefinite blank stage.

## Related guides

- [Preview files](/files/preview-files)
- [Download files](/uploading/download-files)
