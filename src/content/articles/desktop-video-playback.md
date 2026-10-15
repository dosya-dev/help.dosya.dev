---
{
  "articleId": "hc-desktop-video-playback",
  "locale": "en",
  "revision": 5,
  "title": "Play video in the desktop app",
  "summary": "Stream a cloud video in the desktop viewer, use native playback controls, and recover when Chromium cannot decode the file’s video or audio codec.",
  "category": "desktop",
  "articleSlug": "desktop-video-playback",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/FileViewer.tsx and apps/desktop/src/renderer/lib/file-type.ts. Verified routed extensions, raw-URL streaming, native controls, autoplay request, codec failure copy and download fallback. No dedicated video-playback test was found; production behavior was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop video playback",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop viewer streams the selected cloud file into Chromium's native video player. Opening or seeking a video is read-only and does not create a new version, but downloading writes a separate local copy.

<figure class="help-screenshot"><a href="/screenshots/desktop-video-playback-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-video-playback-help-workflow-2026-10-14.webp" alt="Desktop file viewer with native video playback, timeline, volume, fullscreen, and download recovery." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Supported containers stream through Chromium controls, while an unsupported codec leads to the download option. <a href="/screenshots/desktop-video-playback-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Dosya routes MP4, MOV, AVI, MKV, WebM, WMV and FLV filenames to the video surface. The extension determines the viewer, while successful playback still depends on the codecs available in the installed desktop runtime. You need permission to view the file in the active workspace.

## Steps

1. Open the video from **Files**. The viewer requests autoplay, although operating-system or runtime policy may require you to press **Play**.
2. Use the native timeline to seek and the speaker control to change playback volume.
3. Select the native fullscreen control, then leave fullscreen with that control or **Esc**.
4. Confirm the current position remains correct after seeking and pausing.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop Files view used to select the source video and return after playback." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Returning to Files after viewing confirms that playback controls did not replace or revise the stored video. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Playback comes from the file's authorized raw URL; Dosya does not first save the entire video as a user-visible local file. Position, volume and fullscreen state are transient viewer state.

## Expected result

A supported stream responds to Chromium's play, pause, timeline, volume and fullscreen controls. Closing the viewer leaves the stored cloud object unchanged.

## Troubleshooting

If the surface reports **“This app can't decode this video. Download it and open it in a player like VLC, which decodes everything.”**, select **Download** and open the saved copy in a suitable player. AVI and WMV content, or MKV files containing DTS audio or 10-bit video, may route correctly yet fail codec decoding.

If playback stalls without the decode message, verify network access and reopen the file. A file extension alone cannot guarantee that every contained stream is supported.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
