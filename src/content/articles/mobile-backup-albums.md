---
{
  "articleId": "hc-mobile-backup-albums",
  "locale": "en",
  "revision": 6,
  "title": "Choose albums for mobile backup",
  "summary": "Select Android folders or iPhone albums, understand partial-library access, and verify exactly which device media enters future backup scans.",
  "category": "files",
  "articleSlug": "mobile-backup-albums",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed in local source at apps/mobile/app/backup-folders.tsx and apps/mobile/src/backup/albumDefaults.ts, scanner.ts, filters.ts, settings.ts, with the matching unit tests. Production has not yet received this article revision.",
  "related": ["hc-mobile-backup-setup", "hc-mobile-backup-settings"],
  "keywords": ["mobile backup albums", "device folder backup", "photo album selection", "cloud storage", "file backup"]
}
---
**Device folders** narrows the part of the photo library considered by later scans. Android exposes media buckets such as Camera, Screenshots, Downloads, and chat-app folders; iPhone exposes overlapping albums.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-albums-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-albums-workflow-map-2026-10-14.webp" alt="Album and device-folder selection flow showing all-folder coverage, an include list, and the empty-selection warning." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the accessible sources whose photos and videos may enter future backup scans. <a class="workflow-map-full" href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-albums-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Go to **Settings → Backup → Device folders**. The screen reads the library and shows **Reading your library...** while album data loads.
2. Review each folder or album name and its **N items** count. Empty sources are omitted, and the largest sources appear first.
3. In **Device folders**, turn on only the sources you want included. The footer reports how many items are selected out of the accessible total.
4. Leave every switch on to use **Every folder**. In this mode, newly created Android folders and later albums are automatically included.
5. If you turn every switch off, the app saves an empty include list and displays **No folders selected, so nothing will be backed up. Turn at least one on.** Enable at least one source before expecting another upload.
6. Return to the Backup tab. Filter changes remove pending scan rows and reset the scan watermark, so the next run re-evaluates the accessible library under the new selection. Work already queued or uploaded is left alone.

On a fresh Android installation, Dosya looks for Camera or DCIM buckets and selects those by default. When no recognizable camera bucket exists, it deliberately falls back to every folder and raises a one-time review prompt instead of silently excluding media. Older installs that predate filters also keep their broad coverage until you choose.

iPhone defaults to the full accessible library. Albums can overlap, and an asset may belong to several albums or none. During a selected-album scan, a per-run set prevents the same asset from being emitted twice. Selecting two albums that contain one photo therefore does not create two cloud copies.

Operating-system access is an outer boundary. With iOS Limited Photos or Android 14 selected-photo access, Dosya can only list the items granted to the app even if **Every folder** is chosen. The Backup tab shows **Limited photo access** and can open device Settings to widen it. If the app cannot read any albums, this screen says **No folders found. Allow photo access to choose what gets backed up.**

Folder selection does not choose the cloud path. Eligible items still land under `Mobile Backup/<device name>/Camera Roll/YYYY/MM` inside each configured workspace. Removing a device folder from coverage does not delete its existing cloud copies or the phone originals.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Mobile app installation options for testing folder selection on either iPhone Photos or Android MediaStore." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Album semantics follow the media-library model of the installed iOS or Android client. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The Backup screen's coverage reflects the selected, OS-accessible sources. A new eligible item in an enabled source is queued on the next allowed run; a new item that exists only in a disabled source remains outside backup scope.

When checking the result, use two newly created harmless items rather than relying on old cloud files: place one in an included source and one only in an excluded source. Existing uploads remain visible regardless of the current selection.

## Related guides

- [Start copying a mobile library](/files/mobile-photo-backup)
- [Configure media and destination rules](/files/mobile-backup-settings)
