---
{
  "articleId": "hc-audio-troubleshoot-lyrics-timing",
  "locale": "en",
  "revision": 5,
  "title": "Correct lyrics that do not match playback",
  "summary": "Fix lyric highlighting by validating accepted timestamp syntax, sorted cues, current playback time, and untimed fallback behavior in the browser player.",
  "category": "files",
  "articleSlug": "audio-troubleshoot-lyrics-timing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against packages/audio-player/src/lyrics/lrc.ts, apps/web/src/components/audio/use-lyrics.ts, apps/web/src/components/audio/lyrics-panel.tsx, and their unit tests. Production lyric timing was not re-tested.",
  "related": [
    "hc-audio-queue",
    "hc-audio-lyrics-troubleshoot"
  ],
  "keywords": [
    "audio troubleshoot lyrics timing",
    "Audio playback troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web player highlights the last parsed lyric cue whose time is at or before the current playback position. It scrolls that cue toward the center, or jumps without smooth motion when reduced motion is enabled.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14.webp" alt="Lyric timing repair workflow: compare playback time with valid cues, inspect supported timestamp syntax, upload a separate corrected test, and seek across cue boundaries." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Lyric timing repair workflow: compare playback time with valid cues, inspect supported timestamp syntax, upload a separate corrected test, and seek across cue boundaries. <a class="workflow-map-full" href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-lyrics-timing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Accepted timing syntax

A timed line must begin with `[mm:ss]`, `[mm:ss.xx]`, or `[mm:ss:xx]`. Minutes use one to three digits and seconds use exactly two. Several timestamps may precede one lyric line; Dosya creates a cue for each and sorts all cues by time. Once any timed cue parses, lines without a valid leading timestamp and metadata headers are omitted from the displayed result.

## Steps

1. Open the MP3 in the browser and choose **Lyrics**. Start playback at a clearly identifiable line.
2. Compare the displayed elapsed time with the active lyric. Seeking to just before and just after the cue helps distinguish a bad timestamp from delayed audio encoding.
3. Inspect a local copy's embedded lyric frame. Check for missing brackets, one-digit seconds, unsupported hour fields, decimal commas, or timestamps placed after the text.
4. Verify that lyrics are in a supported ID3 `USLT`/`ULT` frame or approved `TXXX`/`TXX` description and reachable within the first 256 KiB.
5. Correct the timestamps locally and upload a separate test file. Reopen it and seek across several cue boundaries before replacing the original version.


### Untimed and offset results

Plain fallback is all-or-nothing. If zero timed cues parse, every nonempty raw line displays at time zero without highlighting, including malformed or header-looking lines. If even one timed cue parses, only valid timed cues display; untimed lines do not remain beside them. The parser sorts out-of-order timed cues; it does not infer a global offset or compensate for silence encoded before the music.

If all cues are consistently early or late, adjust their timestamps in the source lyrics. Dosya provides no in-app lyric editor. Uploading corrected media changes cloud bytes and may affect shares using the current file, so retain the original until the test is verified.

## Expected result

With timed input, each valid cue becomes active as playback crosses its parsed time and non-cue lines are absent. With zero parsed cues, all nonempty lines remain readable without synchronization. Testing and seeking do not alter the stored audio.

## Related guides

- [Show synchronized audio lyrics](/files/audio-lyrics)
- [Troubleshoot missing lyrics](/files/audio-lyrics-troubleshoot)
