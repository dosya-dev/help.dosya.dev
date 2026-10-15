---
{
  "articleId": "hc-audio-lyrics",
  "locale": "en",
  "revision": 6,
  "title": "Show synchronized or embedded lyrics",
  "summary": "Display embedded MP3 lyrics in Dosya, distinguish timed LRC cues from plain lines, and diagnose a missing Lyrics tab without altering the audio file.",
  "category": "files",
  "articleSlug": "audio-lyrics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-audio-tags.ts, apps/web/src/components/audio/use-lyrics.ts, apps/web/src/components/audio/lyrics-panel.tsx and packages/audio-player/src/tags/id3.ts. Production audio tags were not changed and no production action was performed.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "audio lyrics",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The web player reads the first 262,144 bytes of the stored audio through one range request. For MP3 files it can extract an ID3 USLT frame or a lyrics-labeled TXXX frame; Dosya does not search the folder for a separate LRC file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-lyrics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-lyrics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-lyrics-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-lyrics-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-lyrics-workflow-map-2026-10-14.webp" alt="Embedded-lyrics workflow showing the 256 KiB tag read, conditional Lyrics tab, timed highlighting, and plain-text fallback." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the Lyrics tab only when it appears for the current file; Dosya hides it when no supported lyric tag was found. <a class="workflow-map-full" href="/screenshots/audio-lyrics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-lyrics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-lyrics-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use an MP3 with embedded lyric metadata. The shared parser recognizes ID3 at the start of the file or by the MP3 extension; MP4 and M4A metadata parsing currently returns title, artist, album, duration, and artwork but no lyrics.
- A lyric block must be inside the file's own tag header. A sibling file such as song.lrc is not loaded by the web viewer.
- Opening lyrics is read-only. No lyric text is uploaded, edited, or sent to an external lookup service.

## Steps

1. Open the MP3 in **Files** and wait for the tag request to complete. The player still uses the filename when title metadata is absent.
2. Look beside **Up next** for **Lyrics**. The tab is rendered only when the parsed tag contains at least one non-empty lyric line.
3. Select **Lyrics**, then start playback. Timed content accepts leading cues in **[mm:ss]**, **[mm:ss.xx]**, or **[mm:ss:xxx]** form, including multiple leading timestamps for one line.
4. Confirm the current line becomes bold as playback crosses its cue. The panel centers that line smoothly, or jumps without animation when reduced motion is enabled.
5. For untimed text, verify that each non-empty source line appears in order. Untimed lines remain static because they all have no usable playback cue.
6. Switch tracks and recheck the tab. A Lyrics tab from the prior file is closed automatically when the new track carries none.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file viewer frame used to verify the active audio filename before reading its embedded lyrics." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Match lyric text to the active filename because each track's tag data is fetched and parsed independently. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## When lyrics do not appear

No tab means the first 256 KiB contained no supported non-empty lyrics, the tag request failed, or the container parser does not expose lyrics. Metadata headers such as **[ar:...]** and blank timestamped lines are discarded; timestamps embedded after ordinary lyric text are treated as text rather than cues.

The panel has a **No lyrics in this file** state, but the player normally hides the Lyrics tab when parsing returns no lines. Playback and the queue continue without lyrics. Download the original and inspect its tags in a dedicated editor if you need to confirm or add metadata; any edit made outside Dosya must be uploaded as a new version to appear here.

## Expected result

A supported embedded tag produces a Lyrics tab for that track. Timed lines follow playback, plain lines remain readable, and missing metadata does not interrupt audio or change the stored file.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
