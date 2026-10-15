---
{
  "articleId": "hc-media-inspect-audio-tags",
  "locale": "en",
  "revision": 5,
  "title": "Inspect audio title and artist metadata",
  "summary": "Inspect mobile audio title, artist, album, duration, bitrate, and sample rate while understanding parser formats, the 50 MiB ceiling, and fallbacks.",
  "category": "files",
  "articleSlug": "media-inspect-audio-tags",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/player/metadata/extract.ts, apps/mobile/src/player/metadata/id3.ts, apps/mobile/src/player/metadata/mp4.ts, and apps/mobile/src/player/InfoSheet.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-file-details"
  ],
  "keywords": [
    "media inspect audio tags",
    "Media metadata inspection details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya extracts audio tags on the device from locally cached bytes. Start playback before inspecting the result because opening general file details alone does not run the audio parser.

<figure class="help-screenshot"><a href="/screenshots/media-inspect-audio-tags-help-workflow-2026-10-14.webp"><img src="/screenshots/media-inspect-audio-tags-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing an audio file, audio viewer details, tag verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The pictured sequence opens an audio file, examines its viewer details, checks title and artist values, and reopens the result. <a href="/screenshots/media-inspect-audio-tags-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Supported metadata path**

The mobile parser recognizes ID3-tagged MP3 and MP4-family files such as M4A, M4B, MP4, AAC, and ALAC, with byte sniffing as a fallback for an incorrect extension. It reads the full file only when the stored size is at most 50 MiB. Larger tracks are marked parsed without embedded tags to avoid loading a large base64 copy into memory.

## Steps

1. Play the intended unlocked audio file in the Dosya mobile player and wait for playback to start. Metadata extraction uses the local cached copy and does not send tag contents to a separate server parser.
2. Open the button labelled **Track info**. The sheet always shows **Size**, **Type**, and **Modified**.
3. When present, compare **Artist**, **Album**, and **Duration** with the source. MP3 parsing can also add **Bitrate** in kbps and **Sample rate** in kHz.
4. Compare the player heading. If no embedded title exists, Dosya uses the filename without its extension; if no embedded artist exists, the queue uses the source folder name.
5. After replacing a track, play the current version again. Cached metadata is accepted only when its file ID, byte size, modified timestamp, and parser version still match.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Browser preview of Campaign overview.png with the File Details panel visible." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>This image shows the browser preview shell only; embedded audio tags are inspected through the mobile player control labelled Track info. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Missing or partial tags**

An unsupported container, malformed tags, or a file larger than 50 MiB can leave the sheet with only file properties. Playback may still supply a duration for a format the tag parser does not understand. ID3 MP3 provides the richer technical values; MP4-family parsing does not promise bitrate or sample rate.

The browser screenshot illustrates the common preview and Details shell rather than the mobile **Track info** sheet. Do not expect embedded audio fields in that browser panel.

## Expected result

The mobile Track info sheet shows each supported tag found in the cached audio bytes and uses filename or folder fallbacks without changing the stored track.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
