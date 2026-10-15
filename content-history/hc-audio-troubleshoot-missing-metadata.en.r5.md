---
{
  "articleId": "hc-audio-troubleshoot-missing-metadata",
  "locale": "en",
  "revision": 5,
  "title": "Fix missing audio metadata",
  "summary": "Explain missing audio tags by checking supported MP3 and M4A fields, the 256 KiB head range, 2 MiB artwork cap, and safe local retagging steps.",
  "category": "files",
  "articleSlug": "audio-troubleshoot-missing-metadata",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against packages/audio-player/src/tags/parse.ts, packages/audio-player/src/tags/id3.ts, packages/audio-player/src/tags/mp4.ts, and apps/web/src/components/audio/use-audio-tags.ts. Production metadata parsing was not re-tested.",
  "related": [
    "hc-audio-queue",
    "hc-audio-lyrics-troubleshoot"
  ],
  "keywords": [
    "audio troubleshoot missing metadata",
    "Audio playback troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Missing title, artist, album, or cover art does not necessarily prevent playback. The browser parser fails softly and uses the cloud filename as the title fallback.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14.webp" alt="Missing audio metadata workflow: compare filename fallbacks, inspect supported source tags and their position, retag a test copy, and reopen the current file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Missing audio metadata workflow: compare filename fallbacks, inspect supported source tags and their position, retag a test copy, and reopen the current file. <a class="workflow-map-full" href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-missing-metadata-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Fields Dosya reads

MP3 ID3v2.2–v2.4 can supply title, artist, album, artwork, lyrics, bitrate, and sample rate. MP4/M4A parsing supplies title, artist, album, duration, and artwork. The current M4A path does not expose lyrics, bitrate, or sample rate. Other containers may play through the browser while providing no supported tags.

## Steps

1. Open the file in the web viewer and compare the large title with its cloud filename. A filename without its extension indicates the fallback is active.
2. Note which optional artist, album, bitrate, sample-rate, or artwork elements are absent rather than assuming all metadata failed.
3. Inspect the downloaded original with a trusted tag utility. Confirm the expected values exist in a supported ID3 or MP4 metadata atom.
4. Check placement and size. The web viewer requests bytes `0–262143`, so an artwork frame must fit inside that head read along with its tag headers; later MP4 atoms or ID3 frames are unseen. The shared parser additionally rejects artwork payloads over 2 MiB when another caller provides more bytes.
5. Retag a copy with modest artwork and early metadata, then upload it under a temporary name and reopen it in Dosya.


### Safe recovery

There is no metadata editing action in the Dosya web player. Replacing or versioning the cloud audio with locally changed bytes is the only repair path, and that can alter what collaborators or share recipients receive. Keep the original until the corrected test displays and plays as expected.

Range-request or parse failure produces no dedicated tag error in the player. If a known-good tagged MP3 also falls back to its filename, refresh access and network state before changing source files.

## Expected result

Supported tags within the inspected head appear, while missing or unsupported fields use a filename or artwork fallback without blocking audio. Diagnosis alone is read-only.

## Related guides

- [Review audio artwork and metadata](/files/audio-artwork-metadata)
- [Preview media files](/files/media-preview-controls)
