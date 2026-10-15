---
{
  "articleId": "hc-media-troubleshoot-missing-artwork",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot missing album artwork",
  "summary": "Restore missing mobile album artwork by checking playback-triggered parsing, supported tag containers, the 50 MiB file limit, and the 2 MiB image cap.",
  "category": "files",
  "articleSlug": "media-troubleshoot-missing-artwork",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/player/metadata/extract.ts, apps/mobile/src/player/metadata/id3.ts, apps/mobile/src/player/metadata/mp4.ts, and apps/mobile/src/player/InfoSheet.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-file-details"
  ],
  "keywords": [
    "media troubleshoot missing artwork",
    "Media metadata inspection details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Album artwork appears only when the mobile player extracts a supported embedded image and writes it to its local metadata cache. There is no server-side artwork refresh command.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14.webp" data-light-href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14.webp" alt="Light-theme workflow showing current-track playback, Track info inspection, embedded-cover validation, and corrected-version verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The artwork workflow checks the current track, reads Track info, validates the embedded cover, and verifies the corrected version without clipped instructions. <a class="workflow-map-full" href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14.webp" data-light-href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/media-troubleshoot-missing-artwork-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Artwork requirements**

Start playback so the app caches the audio and triggers parsing. Supported sources are ID3 artwork in MP3 and cover art in MP4-family containers. The full audio file must be 50 MiB or smaller for tag parsing, and embedded artwork larger than 2 MiB is ignored for both parser families.

## Steps

1. Play the intended track in the Dosya mobile app. Confirm that its filename, size, and modified time describe the version you expect.
2. Open **Track info**. If title, artist, or album appear but the artwork does not, the image may be absent, oversized, malformed, or unable to be written to the local cache.
3. Inspect the source audio in a trusted tag editor. Embed one JPEG or PNG cover within the supported container and keep that image at or below 2 MiB.
4. Upload the corrected audio as the intended new or replacement version. Playing the old version again cannot repair bytes that never contained usable artwork.
5. Play the current version and reopen **Track info**. The cache key includes file ID, byte size, modified timestamp, and parser version, so a changed file is parsed again.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Campaign overview.png displayed in the browser preview with File Details open." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The pictured browser panel helps confirm file identity and version; album artwork itself is produced by the mobile audio parser after playback. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**When the music-note fallback remains**

Files above 50 MiB deliberately skip the full tag read. Unsupported containers can still play but yield no embedded art. A local artwork-write failure preserves any text tags, which explains why title and artist can appear beside the fallback icon. Removing and reinstalling the app may clear local cache data, but it cannot create missing source artwork.

The browser preview screenshot does not show an album-art processor. Use it only to identify the current file and version before returning to the mobile player.

## Expected result

A supported track no larger than 50 MiB shows embedded JPEG or PNG artwork no larger than 2 MiB after playback triggers a successful local parse.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
