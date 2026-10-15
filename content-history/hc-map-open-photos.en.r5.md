---
{
  "articleId": "hc-map-open-photos",
  "locale": "en",
  "revision": 5,
  "title": "Open photos on the Dosya map",
  "summary": "Open Dosya Map on web, desktop or mobile, distinguish exact EXIF pins from approximate upload origins, and recover when locations are missing.",
  "category": "files",
  "articleSlug": "map-open-photos",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/api/src/pages/api/map/pins.ts, apps/api/src/lib/location/origin.ts, apps/web/src/pages/map.tsx, and apps/mobile/app/map.tsx on 2026-10-14; no production workspace was opened during this check.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map open photos",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya Map can show a photo at GPS coordinates stored in its EXIF metadata. When the workspace records upload origins, it can also show an approximate location for an uploaded file that has no EXIF GPS.

<figure class="help-screenshot"><a href="/screenshots/map-open-photos-help-workflow-2026-10-14.webp"><img src="/screenshots/map-open-photos-help-workflow-2026-10-14.webp" alt="Map-opening workflow showing EXIF photo pins, approximate upload-origin pins, scanning status, and recovery choices." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Open Map, identify whether the position came from EXIF or the upload network, and wait for pending location scans before diagnosing a missing photo. <a href="/screenshots/map-open-photos-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Select the correct workspace, then open **Map**. The account must be a workspace member whose role has file-page access.
2. On web or desktop, wait for the counters beside the map to settle. `located` means an EXIF GPS coordinate, `approximate` means an upload-origin coordinate, and `scanning…` is the number of files still pending location extraction.
3. Leave **Show approximate locations** enabled to include upload origins, or switch it off when you only want EXIF-derived positions.
4. Look for the photo thumbnail marker. If several items are close together, select the numbered cluster or zoom in until the photo becomes an individual marker.
5. Select the photo marker. Web and desktop open the file viewer; mobile opens the file route for that item.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for opening the Map screen and selecting a plain file marker on iPhone or Android." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>On the mobile clients, Map uses plain markers and opens a selected file on its own route rather than displaying a photo thumbnail in the map. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected file opens from its stored coordinate. A thumbnail identifies supported raster images on web and desktop; mobile sends only the pin ID, coordinate, and kind to its map view. Mobile considers the pin request fresh for five minutes, so a newly scanned position may require a refresh after that interval.

The map position is navigation data, not proof of where an event occurred. An EXIF coordinate can be edited before upload, and an approximate pin can reflect a proxy or network gateway.

## Troubleshooting

- **A new photo is missing.** If `scanning…` is nonzero, allow the location scan to finish and reload Map. Extraction runs after upload rather than during the map click.
- **Only approximate pins exist.** On web or desktop, make sure **Show approximate locations** is on. Workspace settings can disable creation and display of upload-origin pins.
- **The map is empty on mobile.** The exact empty message is `No geotagged photos yet`. Confirm the active workspace contains a readable located file; hidden, deleted, and locked files do not become pins.
- **Mobile cannot fetch pins.** When `Couldn't load your map.` appears, restore connectivity and press **Retry**.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
