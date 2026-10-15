---
{
  "articleId": "hc-audio-artwork-metadata",
  "locale": "en",
  "revision": 5,
  "title": "Review audio artwork and metadata",
  "summary": "Inspect browser audio title, artist, album, artwork, bitrate, and sample rate while understanding 256 KiB tag reads and format-specific fallbacks.",
  "category": "files",
  "articleSlug": "audio-artwork-metadata",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-audio-tags.ts, apps/web/src/components/audio/audio-player.tsx, packages/audio-player/src/tags/parse.ts, packages/audio-player/src/tags/id3.ts, and packages/audio-player/src/tags/mp4.ts. Production media was not tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "audio artwork metadata",
    "Advanced audio playback",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web player reads a 256 KiB byte range from the start of an audio file and parses recognized embedded tags locally in the browser. It does not write those tags back to Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14.webp" alt="Audio metadata review workflow: open the web player, compare title, artist, album, and artwork, check the 256 KiB head-read limit, and confirm fallbacks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio metadata review workflow: open the web player, compare title, artist, album, and artwork, check the 256 KiB head-read limit, and confirm fallbacks. <a class="workflow-map-full" href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-artwork-metadata-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Supported tag sources

MP3 parsing recognizes ID3v2.2, v2.3, and v2.4 title, artist, album, embedded artwork, lyrics, bitrate, and sample rate. MP4/M4A parsing can provide title, artist, album, duration, and artwork, but not lyrics, bitrate, or sample rate in this player. In the web viewer, the entire tag and artwork payload must be reachable within the first 256 KiB fetched from the file. The shared parser also rejects an individual JPEG or PNG artwork payload over 2 MiB when a caller supplies more data.

## Steps

1. Open an audio file in the browser file viewer and wait for its metadata range request to finish.
2. Compare the large player title with the Dosya filename. When no embedded title is found, the player removes the extension and uses the remaining filename.
3. Check the artist and album lines. Missing values are simply omitted; Dosya does not manufacture **Unknown artist** or **Unknown album** labels.
4. Inspect the artwork area. Valid embedded cover art appears there; otherwise the fallback tile shows an audio glyph and the extension.
5. Read the chips below the identity. Extension and file size are always available, while bitrate and sample rate appear only when the parser extracted them.


### Why correct metadata can look missing

Only bytes `0–262143` are requested by the web viewer. Large leading artwork can consume that range, and an ID3 frame or MP4 `moov` atom placed after it is unavailable. The parser’s separate 2 MiB artwork cap does not expand this 256 KiB web read. Unsupported containers also fall back silently. The player does not present a metadata parse error because playback may still work.

To fix source tags, edit a local copy with a trusted tag editor and upload the corrected media as the intended file or version. That upload changes cloud content and may affect anyone using the current version; recheck title and artwork after processing the new bytes.

## Expected result

The player shows every supported field found within the inspected head range and uses filename artwork fallbacks for the rest. Reading metadata creates no new cloud object and never modifies the audio file.

## Related guides

- [Preview media files](/files/media-preview-controls)
- [Troubleshoot missing audio metadata](/files/audio-troubleshoot-missing-metadata)
