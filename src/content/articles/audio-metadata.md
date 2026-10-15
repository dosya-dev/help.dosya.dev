---
{
  "articleId": "hc-audio-metadata",
  "locale": "en",
  "revision": 6,
  "title": "Read audio title and artist metadata",
  "summary": "Learn which audio tags Dosya reads on web, desktop and mobile, why filenames appear as fallbacks, and how to troubleshoot missing metadata safely.",
  "category": "files",
  "articleSlug": "audio-metadata",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-audio-tags.ts, packages/audio-player/src/tags/parse.ts, packages/audio-player/src/tags/id3.ts, packages/audio-player/src/tags/mp4.ts, apps/mobile/src/player/metadata/extract.ts, and apps/mobile/src/player/metadata/metadataStore.ts on 2026-10-14; production playback was not exercised for this revision.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "audio metadata",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya reads embedded audio tags in the client that opens the file. Reading metadata does not change the file, write corrected tags, or send tag values back to the file record.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-metadata-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-metadata-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-metadata-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-metadata-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-metadata-workflow-map-2026-10-14.webp" alt="Audio metadata workflow showing an opened track, embedded tag fields, filename fallback, and platform-specific reading limits." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Trace a track from its embedded title, artist, album, and artwork to the fallback information Dosya displays when a tag cannot be read. <a class="workflow-map-full" href="/screenshots/audio-metadata-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-metadata-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-metadata-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What Dosya can read

On the web and desktop app, Dosya requests only the first 262,144 bytes (256 KiB) of the file. It recognizes MP3 ID3v2.2, ID3v2.3, and ID3v2.4 tags and MP4-family metadata in `.m4a`, `.mp4`, or `.m4b` files. MP3 parsing can supply title, artist, album, cover art, lyrics, duration, bitrate, and sample rate. MP4 parsing can supply title, artist, album, duration, and cover art. Embedded artwork above 2 MiB is ignored for both ID3-tagged MP3 and MP4-family files.

The mobile app reads the locally cached copy instead of making a tag request. It accepts the MP4 family plus `.aac` and `.alac`, but skips tag parsing when the cached file is larger than 50 MiB. Mobile caches extracted data by file ID, size, and modification time, so a changed or reuploaded version is read again.

Every client falls back to the filename without its extension when no embedded title is available. Web and desktop omit missing artist or album rows. Mobile can use the containing folder or source name as the fallback artist in the player queue. The mobile file preview shows cached artwork and tags only after the player has extracted them.

## Steps

1. Open **Files**, choose an audio file that your role can read, and unlock it first if it uses full-file locking.
2. Open the audio preview or player. Compare the displayed title, artist, and album with the tags in the source file rather than with its filename alone.
3. On web or desktop, inspect the chips below the title. Dosya can show the uppercase extension, file size, and any bitrate or sample rate found in the MP3 tag.
4. On mobile, play the cached file once if its preview still shows only the filename or generic audio artwork. Return to the preview after extraction completes.
5. If a field is absent, check the platform limit above. A large ID3 block, MP4 metadata stored after the first 256 KiB, artwork over 2 MiB, or a mobile file over 50 MiB can produce a valid filename fallback.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview reference used to locate a file's viewer and details before comparing its displayed audio metadata." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the file viewer entry point shown here, then compare the audio player's tag fields with the known source metadata for that track. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The player shows supported embedded values when they are present and readable. Missing or unreadable tags fall back without changing the stored audio file. A decode failure is separate from missing metadata: web says `This browser can't decode this audio format. Download the file to play it in another app.` and desktop says `This app can't decode this audio format. Download the file to play it in another app.`

## Troubleshooting

- **The filename appears instead of the title.** Confirm that the source really contains a supported title tag and that it sits within the platform's read limit.
- **Artwork is absent but text tags appear.** Check the embedded image and keep it at or below 2 MiB for an ID3-tagged MP3 or an MP4-family file.
- **Mobile still shows old metadata.** Confirm that the uploaded file's size or modification time changed; those values invalidate the mobile metadata cache.
- **The file will not play.** Download it and use another app when the exact decode message above appears. Changing tags does not add codec support.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
