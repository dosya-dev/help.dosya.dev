---
{
  "articleId": "hc-audio-lyrics-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot missing audio lyrics",
  "summary": "Restore the Lyrics tab by checking MP3 ID3 frames, 256 KiB placement, encoding, and unsupported MP4/M4A behavior without editing files in Dosya.",
  "category": "files",
  "articleSlug": "audio-lyrics-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-audio-tags.ts, apps/web/src/components/audio/use-lyrics.ts, packages/audio-player/src/tags/id3.ts, packages/audio-player/src/tags/mp4.ts, and packages/audio-player/src/lyrics/lrc.ts. Production tags were not tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "audio lyrics troubleshoot",
    "Advanced audio playback",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web player shows **Lyrics** only when its metadata parser finds nonempty lyric text. There is no manual Lyrics tab when no supported frame was read.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14.webp" alt="Missing lyrics diagnosis workflow: inspect a supported MP3 lyrics frame, keep it within the first 256 KiB, upload a separate test copy, and reopen Lyrics." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Missing lyrics diagnosis workflow: inspect a supported MP3 lyrics frame, keep it within the first 256 KiB, upload a separate test copy, and reopen Lyrics. <a class="workflow-map-full" href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-lyrics-troubleshoot-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Use the browser player for this check. Client feature sets can differ.
- Dosya reads only the first 256 KiB of the audio file for tags.
- Lyrics are parsed from MP3 ID3 frames. The current MP4/M4A parser does not return lyrics, and the player does not look for a neighboring `.lrc` file.

## Steps

1. Open the affected MP3 in Dosya and check whether **Lyrics** appears beside **Up next** and other player sections.
2. Inspect a local copy with a trusted tag editor. Look for ID3 `USLT`/`ULT`, or a `TXXX`/`TXX` field whose description is `USLT`, `LYRICS`, or `UNSYNCEDLYRICS`.
3. Confirm that the frame and its text fit within the tag data reachable in the first 262,144 bytes. Large leading artwork can push later frames beyond Dosya's range.
4. Save a small test copy with UTF text and one supported lyrics frame. Upload it under a clearly different name before replacing any existing version.
5. Reopen that test file. If **Lyrics** appears, retag the source locally and upload the corrected bytes only after preserving any original you need.


### How timing text is interpreted

Lines beginning with `[mm:ss]`, `[mm:ss.xx]`, or `[mm:ss:xx]` can become timed cues; one to three minute digits and exactly two second digits are accepted. If at least one timed cue parses, Dosya returns only parsed timed cues: untimed text, malformed timestamp lines, and metadata headers are omitted. When no timed cue parses anywhere, every nonempty raw line is shown as plain untimed text, including header-looking lines.

Dosya has no in-app audio tag editor. Re-uploading a corrected file or version changes the cloud content and can affect shared recipients; deleting the original afterward is a separate action.

## Expected result

A supported, reachable ID3 lyric frame makes the browser **Lyrics** section available. Unsupported or absent tag text continues to hide it while playback and filename fallback can still work.

## Related guides

- [Show synchronized audio lyrics](/files/audio-lyrics)
- [Review audio artwork and metadata](/files/audio-artwork-metadata)
