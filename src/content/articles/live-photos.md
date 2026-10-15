---
{
  "articleId": "hc-live-photos",
  "locale": "en",
  "revision": 6,
  "title": "Work with Live Photos and paired media",
  "summary": "Identify Dosya Live Photo pairs, play their motion safely, move or copy both files, and avoid separating still and video during deletion or download.",
  "category": "files",
  "articleSlug": "live-photos",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/api/src/lib/repo/repo-d1/live-pairs.ts, apps/web/src/components/live-photo-stage.tsx, apps/web/src/lib/live-photos.ts and apps/web/src/pages/files.tsx. Production media was not moved or deleted and no production action was performed.",
  "related": [
    "hc-preview-files",
    "hc-download-files",
    "hc-move-rename"
  ],
  "keywords": [
    "Live Photos",
    "paired media",
    "HEIC video",
    "cloud storage",
    "file management"
  ]
}
---
Dosya derives a Live Photo pair when a HEIC, HEIF, JPG, or JPEG still and a MOV or MP4 share the same case-insensitive filename stem and folder. The motion file must be no larger than 40 MiB. Pairing is recalculated from the current listing rather than stored permanently.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-light-href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/live-photos-workflow-map-2026-10-14.webp" alt="Live Photo workflow showing stem-based pairing, motion playback, paired move, separate downloads, and the delete-video checkbox." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Check the paired video's name and size before moving, downloading, or deleting either component. <a class="workflow-map-full" href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-light-href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Keep both files in the same folder with the same stem, such as IMG_0042.HEIC and IMG_0042.MOV. Renaming or moving only one file breaks the derived pair on the next listing.
- When several eligible videos share a stem, the query chooses the lowest file ID. A video over 41,943,040 bytes remains a normal video and is not attached as motion.
- A pair consumes storage as two independent files. Downloading the still does not automatically download its motion component.

## Steps

1. Find the still carrying the **Live Photo** badge. Grid and viewer filmstrip collapse its twin into one stop, while list view keeps the motion row directly beneath the still and labels it **Live Photo video**.
2. Open the still. On web, hover to play the muted motion once, or select **Play Live Photo**. Leaving the stage pauses and rewinds; with reduced motion enabled, only the explicit button starts playback.
3. On mobile, press and hold for 400 ms to play while held, or tap **LIVE** for a play-through. The video is muted and does not loop.
4. Open **Details** and find **Live Photo video**. Confirm its name and size, then use that row's **Download** plus the still's normal **Download** when you need a complete local pair.
5. Moving or copying the still asks Dosya to move or copy the video separately. Verify both rows in the destination because the second request can fail after the still has already succeeded.
6. For ordinary deletion, leave **Also delete _video name_** selected to send both items to trash. Clear it only when you deliberately want the motion file to remain.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya image viewer used as the still-image stage beneath a Live Photo motion overlay." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The still remains visible when motion playback ends or its paired video cannot load. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Failure and irreversible behavior

If the motion cannot load, **Play Live Photo** becomes disabled with **Video unavailable** and the still remains usable. Copy can report **Copied** with **The photo was copied, but its video could not be.** Delete can report **Deleted** with **Photo deleted, but its video could not be deleted.** Inspect both folders after either partial result.

Permanent deletion never carries a remembered twin automatically because the trash listing does not expose pairing fields. Permanently delete each intended component explicitly; that action cannot be undone. Ordinary deletion keeps each file in trash and continues using storage until purge.

## Expected result

The still displays one Live Photo identity, motion plays from its paired file, and both components reach the intended folder or trash when requested. Separate downloads remain separate local files.

## Related guides

- [Preview files](/files/preview-files)
- [Download files](/uploading/download-files)
- [Move files](/files/move-and-rename)
