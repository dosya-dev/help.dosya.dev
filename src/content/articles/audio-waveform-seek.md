---
{
  "articleId": "hc-audio-waveform-seek",
  "locale": "en",
  "revision": 5,
  "title": "Seek through audio with the waveform",
  "summary": "Seek precisely on the browser waveform by clicking, dragging, using five-second keys, reading hover time, and understanding 80 MiB analysis fallback.",
  "category": "files",
  "articleSlug": "audio-waveform-seek",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/waveform.tsx, apps/web/src/components/audio/use-peaks.ts, apps/web/src/components/audio/audio-player.tsx, and packages/audio-player/src/peaks/extract.ts. Production waveform interaction was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "audio waveform seek",
    "Advanced audio playback",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web waveform maps horizontal position to the current track duration. Analysis produces 900 peak values, then the canvas resamples them to the number of bars that fit its current width. Timed comment buttons sit in a separate row above the canvas.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-waveform-seek-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-waveform-seek-help-workflow-2026-10-14.webp" alt="Waveform seeking workflow: hover for time, click or drag the seek surface, test five-second arrow movement, and verify elapsed time at the new playhead." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Waveform seeking workflow: hover for time, click or drag the seek surface, test five-second arrow movement, and verify elapsed time at the new playhead. <a class="workflow-map-full" href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-waveform-seek-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Wait until the browser knows the media duration.
- Waveform analysis fetches the full raw file only when stored size is 80 MiB or less.
- Lower volume before jumping into an unknown section.

## Steps

1. Open a supported audio file and find the waveform beneath the player identity.
2. Move the pointer across it. The floating time label previews the position represented by that horizontal point.
3. Click once at a controlled location and compare the new playhead with the elapsed `mm:ss` value.
4. Press and drag across the waveform for continuous positioning, then release at the desired moment.
5. Focus the waveform and use Left Arrow or Right Arrow to change the target by 5 seconds. Values are clamped between zero and the track duration.
6. If a timed comment button is present above the waveform, select it to seek to its saved millisecond and open that comment.


### Rendering and fallback

Peak extraction decodes at 8 kHz and reduces the result to 900 values. At render time, the canvas takes the maximum within each resampled bucket to fit its viewport-dependent bar count. Successful data is cached under file ID and version. The waveform grows in over 620 ms; with reduced motion, it appears immediately.

For files above 80 MiB or when fetch/decode fails, Dosya shows the ordinary **Seek** range. That fallback can still move playback once duration is known. It does not mean the audio is waiting on a server waveform job because analysis is entirely local to the browser.

Changing the playhead, selecting comments, and caching peaks do not create a new version or alter bytes. A later uploaded version gets its own cache key.

## Expected result

The playhead and elapsed time jump to the clicked, dragged, keyed, or comment-marked position. If peaks are unavailable, the fallback range provides the supported seek path.

## Related guides

- [Preview media files](/files/media-preview-controls)
- [Handle unavailable audio seeking](/files/audio-troubleshoot-seek-unavailable)
