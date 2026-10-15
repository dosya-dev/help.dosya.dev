---
{
  "articleId": "hc-desktop-audio-lyrics",
  "locale": "en",
  "revision": 5,
  "title": "Show lyrics in the desktop audio player",
  "summary": "Read embedded lyrics in a desktop audio preview, follow timestamped lines during playback, and diagnose why the Lyrics tab may be unavailable.",
  "category": "desktop",
  "articleSlug": "desktop-audio-lyrics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/audio/AudioPlayer.tsx, apps/desktop/src/renderer/components/files/audio/LyricsPanel.tsx, apps/desktop/src/renderer/components/files/audio/useLyrics.ts, apps/desktop/src/renderer/components/files/audio/useAudioTags.ts, packages/audio-player/src/lyrics/lrc.ts, packages/audio-player/src/tags/parse.ts and apps/desktop/tests/e2e/audio-viewer.spec.ts. Verified the 256 KiB head read, ID3-only lyric extraction, timed and untimed rendering, active-line scrolling and missing-tab behavior. Production behavior was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop audio lyrics",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya shows lyrics found in an ID3 lyric frame near the start of an audio file. It does not search for a sibling `.lrc` file, fetch lyrics from an outside service or extract lyrics from MP4/M4A metadata.

<figure class="help-screenshot"><a href="/screenshots/desktop-audio-lyrics-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-audio-lyrics-help-workflow-2026-10-14.webp" alt="Audio player Lyrics tab showing embedded timed lines that follow the current playback position." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The Lyrics tab reads the track’s own lyric tag; timed entries highlight and scroll with playback. <a href="/screenshots/desktop-audio-lyrics-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Choose an ID3-tagged track whose lyric data fits within the first **256 KiB**. The desktop player makes one ranged read of those leading bytes through the authorized raw URL; a larger tag cut off by that range can yield partial or empty metadata. The MP4/M4A parser can return title, artist, album and artwork, but it does not return lyrics. No parsed tag is written back to cloud storage.

## Steps

1. Open the track in **Files** and wait for its metadata to load.
2. Select the **Lyrics** tab beside **Up next**. The tab is offered only when non-empty embedded lyric text was found.
3. Start playback. Timestamped, LRC-style lines inside the lyric tag highlight as their cue time is reached and scroll toward the middle of the panel.
4. For lyrics without timestamps, read the plain lines in order. Untimed text has no active-line tracking.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop file context used to choose a track containing embedded lyric metadata." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Choose the tagged source here; a separate sidecar lyric file is not read by the audio panel. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The highlighted lyric follows the audio element's current time, so seeking backward or forward recalculates the active line. Reduced-motion settings change the automatic scroll from smooth to immediate.

## Expected result

Embedded words appear without changing the source file. Synchronized lines follow the current playback position; untagged timing produces a static lyric sheet.

## Troubleshooting

If **Lyrics** is missing, the 256 KiB head read did not expose usable ID3 lyric text. Add lyrics to an ID3-compatible file with a separate tag editor, upload the revised file as appropriate, and reopen it. An MP4/M4A lyric field or adjacent `.lrc` file will not populate this panel.

A player decode failure is separate from lyric parsing. When Dosya displays **“This app can't decode this audio format. Download the file to play it in another app.”**, download the track for playback in software that supports its codec.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
