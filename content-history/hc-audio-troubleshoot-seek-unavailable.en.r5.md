---
{
  "articleId": "hc-audio-troubleshoot-seek-unavailable",
  "locale": "en",
  "revision": 5,
  "title": "Handle unavailable audio seeking",
  "summary": "Recover audio seeking when waveform analysis is unavailable by using the plain seek range and checking the 80 MiB analysis and duration requirements.",
  "category": "files",
  "articleSlug": "audio-troubleshoot-seek-unavailable",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-peaks.ts, apps/web/src/components/audio/waveform.tsx, apps/web/src/components/audio/audio-player.tsx, and packages/audio-player/src/peaks/extract.ts. Production seeking was not re-tested.",
  "related": [
    "hc-audio-queue",
    "hc-audio-lyrics-troubleshoot"
  ],
  "keywords": [
    "audio troubleshoot seek unavailable",
    "Audio playback troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Waveform generation and media seeking are separate. When peak analysis is unavailable, Dosya renders a plain **Seek** slider as long as the audio player can establish useful duration.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14.webp" alt="Audio seeking recovery workflow: distinguish the waveform from the plain Seek slider, confirm duration, test a small file, and identify the 80 MiB or decode limit." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio seeking recovery workflow: distinguish the waveform from the plain Seek slider, confirm duration, test a small file, and identify the 80 MiB or decode limit. <a class="workflow-map-full" href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-seek-unavailable-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Why the waveform can disappear

The browser downloads the complete raw file for peak analysis only when its stored size is at most 80 MiB. It decodes at 8 kHz, reduces the result to 900 peaks, and caches peaks by file ID and version. An oversized file, raw fetch failure, or decode failure selects the fallback range instead.

## Steps

1. Open the file and wait for media metadata. Check whether you see the canvas waveform or a plain slider labelled **Seek**.
2. If the plain range appears, drag its thumb after duration is displayed. Bare Left Arrow or Right Arrow also moves playback by 5 seconds when the player handles the key.
3. Confirm elapsed time changes. Seeking clamps to zero and the known duration, so a stream reporting duration `0` cannot move to a later position.
4. Test a small known-good audio file. A waveform there confirms that analysis is available and the original likely exceeded 80 MiB or failed decoding.
5. If the player shows **This browser can't decode this audio format. Download the file to play it in another app.**, use a compatible local player or upload a separately transcoded test copy.


### What retrying changes

Peak extraction runs in the browser and has no server processing queue to wait for. Reopening the same version can recover a transient fetch failure, while a cached successful peak set should return for that file/version. Uploading different bytes creates a distinct analysis target.

The fallback slider can exist even without waveform peaks. If it remains at zero, check browser support and source duration rather than repeatedly waiting for a nonexistent background job. Playback controls and analysis do not edit cloud bytes.

## Expected result

Either the waveform rendered from a 900-value peak array or the plain **Seek** control moves playback to a valid time. A documented size or decode constraint explains cases where visualization or seeking remains unavailable.

## Related guides

- [Seek through audio with the waveform](/files/audio-waveform-seek)
- [Troubleshoot audio playback](/files/audio-troubleshoot-no-playback)
