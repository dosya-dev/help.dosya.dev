---
{
  "articleId": "hc-carplay-recents",
  "locale": "en",
  "revision": 6,
  "title": "Open recently played Dosya audio",
  "summary": "Use CarPlay’s root history rows on iPhone, distinguish resumed from restarted audio, and recover when a saved cloud track is no longer reachable.",
  "category": "files",
  "articleSlug": "carplay-recents",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/incar/browseScreen.ts, apps/mobile/src/incar/recents.ts, apps/mobile/src/incar/historyHooks.ts, and apps/mobile/src/incar/browseScreen.test.ts on 2026-10-14; production CarPlay hardware was not connected.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay recents",
    "in-car audio",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya places playback history at the top of its CarPlay root list. There is no separate **Recents** screen or button.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" alt="CarPlay history with Continue Listening at a saved position and recent tracks restarting from zero." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose between one resumable row and workspace-filtered recent tracks, noting that an ordinary recent item starts from the beginning. <a class="workflow-map-full" href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## How history works

CarPlay is iPhone-only and needs Apple's audio entitlement plus a restorable signed-in session and active workspace.

When audio becomes active, Dosya stores its identity and source locally. Position checkpoints update every 2 seconds. The device keeps at most 20 recent file IDs across all workspaces, then displays only entries for the active workspace.

**Continue Listening** resumes the single current item at its positive saved position. Other history rows begin at 0:00. Both fetch one selected file and play it alone; neither reconstructs the earlier folder queue.

## Steps

1. While parked, connect iPhone and open **dosya** in CarPlay.
2. Confirm the phone's active workspace. A missing session shows **Open dosya on your iPhone to sign in**.
3. Choose **Continue Listening** to use its stored checkpoint.
4. Select a following history row to restart that track.
5. Confirm the title in Now Playing before driving.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Phone file preview used to verify a cloud audio item when its saved CarPlay row cannot play." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify on the phone that a saved file remains reachable when selecting its CarPlay history row does nothing. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Continue Listening seeks after opening its file, while a normal recent row begins at zero. Neither changes cloud data. Signing out clears both history tables so another account cannot see them.

Deleted, inaccessible, or offline saved tracks produce no CarPlay modal; the tap is a no-op. A stale row can remain until newer listening exceeds the 20-entry cap or account data is purged.

## Troubleshooting

- **No history appears.** Play unlocked audio on the phone, confirm workspace, and reconnect.
- **Resume is slightly behind.** Persistence follows the 2-second progress interval.
- **A row does nothing.** Check phone connectivity and file reachability.
- **The sign-in row appears.** Restore the session on iPhone.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Browse files on mobile](/files/mobile-browse-files)
