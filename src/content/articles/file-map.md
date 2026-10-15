---
{
  "articleId": "hc-file-map",
  "locale": "en",
  "revision": 6,
  "title": "Explore files on the map",
  "summary": "Use Dosya Map to find files and folders by EXIF or upload-origin location, apply date and folder filters, and understand privacy and access rules.",
  "category": "files",
  "articleSlug": "file-map",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/api/src/pages/api/map/pins.ts, apps/api/src/lib/location/origin.ts, apps/web/src/pages/map.tsx, and apps/web/src/components/map-filter-panel.tsx; the production Map was not independently queried.",
  "related": [
    "hc-search-files",
    "hc-preview-files"
  ],
  "keywords": [
    "file map",
    "geotagged photos",
    "location metadata",
    "cloud storage",
    "file management"
  ]
}
---
Map plots location-bearing file and folder pins returned for the current workspace and assigned folder scope. A file can use exact GPS extracted from image metadata or an approximate upload-origin coordinate. Folder coordinates are always upload origins.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-map-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-map-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-map-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-map-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-map-workflow-map-2026-10-14.webp" alt="Dosya Map workflow distinguishing EXIF GPS pins, approximate upload origins, pending scans, and folder or date filters." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the counters and filters to separate exact EXIF positions from approximate upload locations before opening a mapped item. <a class="workflow-map-full" href="/screenshots/file-map-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-map-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-map-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you use location data

Dosya obtains an upload origin from the network location supplied with an upload request. It is approximate and may identify a VPN exit, office gateway, or mobile network rather than where the file was created. If later scanning finds EXIF GPS, that exact coordinate replaces the upload origin for the file. A folder has no EXIF and keeps its approximate origin.

Turning off workspace upload-origin recording removes IP-derived file and folder pins from Map; EXIF pins can still appear. A missing, invalid, or zero coordinate from the request is not saved. Location data can reveal sensitive travel or work patterns, so verify the source label before sharing what the map shows.

## Steps

1. Open **Map** in the intended workspace. Your workspace role must allow file-page access; otherwise the API returns `You don't have access to the files page`.
2. Read the status values: `located` counts EXIF GPS pins, `approximate` counts upload-origin pins, and `scanning…` reports files still awaiting location extraction.
3. On web or desktop, choose **Show approximate locations** only when coarse upload origins are useful. Approximate pins are shown by default, and the toggle controls whether they remain visible.
4. Use **All folders** on web, or **Everywhere** on desktop, to select a folder. The selection includes that folder and all descendants. Folder-confined members cannot move the map filter outside their assigned subtree.
5. Enter **From** or **To** dates if needed. Web interprets each selected day as a UTC boundary; desktop uses the local day's boundary. File filtering uses capture time when available and otherwise upload time; folders use creation time.
6. Pan or zoom to the area you need, select a marker or cluster, and verify the file or folder name before continuing.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file viewer reference for checking the identity and details of an item opened from a map marker." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>After opening a map file, compare its viewer details with the marker you selected so nearby locations are not confused. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Map limits coordinates to the current workspace and any assigned folder subtree. File pins exclude deleted, hidden, and locked files. Folder pins exclude deleted folders and obey the same subtree and date filters; the folder-pin query does not apply the file hidden or lock predicates. Raster images can use thumbnails, while other files and folders use icons. A file marker opens its viewer, and a folder marker opens that folder in Files.

Map requests are returned with `Cache-Control: no-store`. Mobile still keeps its fetched pin query fresh for five minutes and provides plain markers without the web and desktop filter panel.

## Troubleshooting

- **`No geotagged photos yet` or `No files or folders with a location yet` appears.** Check whether the files contain EXIF GPS, whether upload-origin recording is enabled, and whether scanning is still pending.
- **`All located items are approximate - enable the toggle above to see them.` appears.** Turn on **Show approximate locations** or upload an image with EXIF GPS.
- **`No pins to show` appears after filtering.** Select a broader folder, remove a date bound, or press **Clear**. Map **Clear** resets folder, **From**, and **To**; it does not change the approximate-location toggle.
- **Mobile says `Couldn't load your map.`** Confirm an active workspace and network connection, then press **Retry**.

## Related guides

- [Search files](/files/search-files)
- [Preview files](/files/preview-files)
