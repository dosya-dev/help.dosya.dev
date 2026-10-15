---
{
  "articleId": "hc-desktop-audio-waveform",
  "locale": "en",
  "revision": 5,
  "title": "Seek with the desktop audio waveform",
  "summary": "Seek precisely in a desktop audio preview, use keyboard jumps, and understand when large or unsupported tracks fall back to a plain seek control.",
  "category": "desktop",
  "articleSlug": "desktop-audio-waveform",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/audio/AudioPlayer.tsx, apps/desktop/src/renderer/components/files/audio/Waveform.tsx, apps/desktop/src/renderer/components/files/audio/usePeaks.ts, apps/desktop/src/renderer/components/files/audio/useAudioKeys.ts, packages/audio-player/src/peaks/extract.ts and apps/desktop/tests/e2e/audio-viewer.spec.ts. Verified the 80 MiB analysis ceiling, five- and fifteen-second keyboard jumps, cached peaks, fallback seek control and decode error. Production behavior was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop audio waveform",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop audio preview draws a seekable waveform for tracks it can analyse. It is a playback aid: seeking changes only the current player position and never edits the audio file or its cloud metadata.

<figure class="help-screenshot"><a href="/screenshots/desktop-audio-waveform-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-audio-waveform-help-workflow-2026-10-14.webp" alt="Audio preview showing a seekable waveform, elapsed time, and the fallback Seek slider conditions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the rendered bars for precise seeking; files over 80 MiB or failed analysis use the accessible Seek slider instead. <a href="/screenshots/desktop-audio-waveform-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open an audio file that you can view in the active workspace. Dosya routes MP3, WAV, OGG/OGA, Opus, FLAC, AAC, M4A, MKA and WMA extensions to this player, but playback still depends on Chromium having the required codec. The waveform analysis limit is **80 MiB**.

## Steps

1. In **Files**, open an audio file and wait for its duration to appear.
2. Move the pointer across the waveform to read the hover time, then click or drag to the required point. The solid section shows played audio and the vertical playhead marks the current position.
3. Focus the waveform and press **Left Arrow** or **Right Arrow** to move by five seconds. During normal playback, **J** and **L** jump 15 seconds and **Space** or **K** toggles play/pause. Shortcuts are ignored while focus is in a form field.
4. Compare the elapsed time at the left of the waveform with the total duration at the right.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop Files view used to open the exact audio file before testing seek behavior." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Open the intended cloud track from this desktop file context before comparing the playhead with its time labels. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The player caches calculated peaks by file ID and version. A track over 80 MiB, an analysis download failure or an undecodable analysis stream falls back to a standard range control labeled **Seek**; that fallback does not by itself stop audio playback.

## Expected result

The playhead moves to the chosen time and playback resumes from there. No new file, version or activity event is created because seeking is local player state.

## Troubleshooting

If the player says **“This app can't decode this audio format. Download the file to play it in another app.”**, use the file download and open it in a compatible player. WMA files and files whose extension hides an unsupported codec are common examples.

If a flat seek slider remains, confirm the file is at most 80 MiB and retry on a stable connection. The slider still permits seeking even when peak generation is unavailable.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
