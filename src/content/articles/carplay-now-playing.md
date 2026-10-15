---
{
  "articleId": "hc-carplay-now-playing",
  "locale": "en",
  "revision": 6,
  "title": "Use Now Playing controls in the car",
  "summary": "Control active Dosya audio through CarPlay, understand queue and metadata behavior, and recover safely when streaming or session access fails.",
  "category": "files",
  "articleSlug": "carplay-now-playing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/incar/nowPlayingScreen.ts, apps/mobile/src/player/controller.ts, apps/mobile/src/player/service.ts, and apps/mobile/src/player/metadata/triggers.ts on 2026-10-14; production vehicle controls were not exercised.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay now playing",
    "in-car audio",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
CarPlay uses Apple's shared Now Playing screen for an active Dosya audio session. Dosya supplies queue and metadata; the vehicle determines layout.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" alt="CarPlay Now Playing with live audio URLs, transport commands, metadata, and one retry before skipping." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Follow a cloud track into the native queue, then use vehicle commands while Dosya resolves URLs and metadata. <a class="workflow-map-full" href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Playback behavior

This is iOS-only and requires Apple's CarPlay audio entitlement. The template opens for Playing or Buffering. Dosya disables its Up Next and album-artist buttons.

The service advertises play, pause, next, previous, and seek. Remote Next wraps at a populated queue's end. Active and next tracks get live URLs; later ones resolve when needed. Folder queues contain unlocked audio only and cap at 500.

Title, artist, artwork, progress, and state use the native media center. Filename without final extension and folder/source name are fallbacks. Cached ID3 or MP4 tags can replace title, artist, and artwork.

## Steps

1. Park, connect iPhone, and open **dosya**.
2. Choose unlocked audio and wait through buffering.
3. Open Now Playing and verify its title.
4. Test Pause, Play, and seek when exposed.
5. In a multi-track queue, use Next and verify audio plus metadata.
6. Put the phone away before driving.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Phone file preview used to inspect the source when CarPlay shows unexpected audio metadata." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the source on the phone when CarPlay shows a filename fallback or cannot advance to the expected track. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Car and phone control one native session, so transport changes affect the same queue without modifying cloud files.

On failure, Dosya resolves a fresh URL and retries once at the prior position. If that fails, the phone says **Couldn't play "title" - skipping.** and advances when possible. Cached audio may survive an outage; uncached items need access.

## Troubleshooting

- **Now Playing never opens.** Start audio first.
- **Up Next is absent.** Dosya explicitly disables it.
- **Only a filename appears.** Let caching and tag extraction finish.
- **Dosya is absent from the car.** Confirm an entitled iOS build and supported CarPlay; Android Auto is not implemented here.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Browse files on mobile](/files/mobile-browse-files)
