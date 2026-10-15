---
{
  "articleId": "hc-carplay-browse-library",
  "locale": "en",
  "revision": 6,
  "title": "Browse your Dosya audio library in the car",
  "summary": "Browse Dosya audio through Apple CarPlay using active-workspace folders, up to 20 recents, 100-item folder pages, depth limits, and phone recovery.",
  "category": "files",
  "articleSlug": "carplay-browse-library",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/incar/browseScreen.ts, apps/mobile/src/incar/browse.ts, apps/mobile/src/incar/recents.ts, apps/mobile/src/incar/nowPlayingScreen.ts, and apps/mobile/src/incar/carplayNative.ts, and apps/mobile/app.config.ts. Production CarPlay was not road-tested.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay browse library",
    "in-car audio",
    "Dosya help",
    "cloud storage"
  ]
}
---
The CarPlay code path requires iOS 15.1 or later and a Dosya iOS build produced with `DOSYA_CARPLAY=1`. Standard production builds omit the integration while Apple’s restricted CarPlay Audio entitlement remains unavailable, so Dosya does not appear on the vehicle display unless you have an entitlement-enabled build.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-browse-library-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-browse-library-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-browse-library-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-browse-library-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-browse-library-workflow-map-2026-10-14.webp" alt="Entitlement-enabled CarPlay workflow: confirm Dosya appears in CarPlay, open the active workspace library, choose an unlocked audio row, and verify native Now Playing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Entitlement-enabled CarPlay workflow: confirm Dosya appears in CarPlay, open the active workspace library, choose an unlocked audio row, and verify native Now Playing. <a class="workflow-map-full" href="/screenshots/carplay-browse-library-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-browse-library-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-browse-library-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- First confirm that the installed Dosya build exposes the app in CarPlay. If it does, sign in on the iPhone, select the intended workspace, and connect while parked.
- The in-car library is read-only. It does not upload, move, rename, share, or delete files.
- Only audio files with `lock_mode` set to `none` become playable rows; folders can still appear even when no eligible audio is inside.

## Steps

1. If Dosya is present on the CarPlay display, open it. When signed out, the root says **Open dosya on your iPhone to sign in**.
2. Choose **Continue Listening** when it appears to resume the current file for that workspace at its saved position.
3. Open **Recent** to browse up to 20 device-saved items for the active workspace. Selecting a recent entry starts it from `0:00` unless it is the current resumable item.
4. Browse a folder to load its direct children. The request retrieves one page of at most 100 items; selecting an audio row queues eligible audio siblings from that returned level and starts the chosen track.
5. Use native **Now Playing** for playback. Dosya opens it while a selection is playing or buffering.
6. Stop at the supported navigation depth. After root plus three pushed folder levels, the next view reports **Too many nested folders - browse this on your iPhone**.


### Recovery

A 401 response says **Reconnect on your iPhone to keep browsing.** Other listing failures say **Couldn't load your files. Check your connection.** Reauthenticate or restore the phone connection while parked, then reopen the CarPlay template.

A deleted or inaccessible saved recent can silently fail to open and is only logged by the app. Verify it in phone **Files** and choose another entry. Signing out clears the local recent history.

## Expected result

In an entitlement-enabled build, the selected unlocked audio file enters native Now Playing with eligible siblings from its loaded folder level. Browsing and playback leave the cloud library unchanged.

## Related guides

- [Browse backed-up files on mobile](/files/mobile-browse-files)
- [Preview media files](/files/media-preview-controls)
