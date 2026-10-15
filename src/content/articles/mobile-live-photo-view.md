---
{
  "articleId": "hc-mobile-live-photo-view",
  "locale": "en",
  "revision": 5,
  "title": "View a Live Photo on mobile",
  "summary": "Play a paired Live Photo on mobile with the exact tap or 400 ms hold gesture, understand muted one-shot playback, and diagnose missing pair context.",
  "category": "files",
  "articleSlug": "mobile-live-photo-view",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/viewer/stages/LivePhotoStage.tsx, apps/mobile/src/files/livePhotos.ts, apps/mobile/src/files/FileRow.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-media-preview",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile live photo view",
    "Mobile media viewing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya renders a Live Photo only when the file-list row identifies the still’s paired video. The still appears immediately; the motion layer mounts only while it is playing.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14.webp" alt="Live Photo viewing workflow showing the Live badge in Files, the still-image stage, a 400 ms press-and-hold or LIVE-button tap, muted motion, and pair checks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Live Photo viewing workflow: open the still from its file list, confirm the **Live** badge, hold for 400 ms or tap **LIVE**, watch muted motion, and verify the pair. <a class="workflow-map-full" href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-live-photo-view-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Grid view hides the paired video beneath the still. List view shows the still with a **Live** pill and places an indented **Live Photo video** row directly below it.

## Steps

1. Open **Files** in the intended workspace and find a still marked **Live**.
2. Open the still from that list so the viewer receives its paired-video ID.
3. Wait for the still to load, then press and hold the image for 400 milliseconds.
4. Keep holding to watch the muted motion; releasing pauses it immediately.
5. Alternatively, tap the **LIVE** badge for one play-through from the beginning.
6. Return to list view and verify that the still and its **Live Photo video** row form the expected pair.

### Playback behavior

Motion is muted, does not loop, and restarts at time zero for each play. The native player listens for the end and returns to the still automatically. The video uses `contain`, so neither the still nor motion is cropped to fill the stage.

Opening a file through a deep link, notification, or search result may provide no folder-list pairing context. In that case the detail endpoint does not carry `live_video_id`, so Dosya honestly shows a normal image stage even if the server has a pair elsewhere.

### Missing or incorrect motion

If there is no **Live** pill and no paired video row, confirm that both files exist in the workspace and open the still from the folder list. A separately uploaded short video is not enough; the API must have paired the file IDs.

Moving the still to Trash from the viewer asks **Delete photo?** and **Also delete its Live Photo video?** Choose **Keep video** or **Delete both** deliberately. The delete choice is separate from playback.

## Expected result

The still opens immediately, a 400 ms hold or **LIVE** tap plays its paired motion once without sound, and release or playback end returns to the still. Unpaired or context-free opens remain ordinary image previews.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Download on mobile](/files/mobile-download-file)
