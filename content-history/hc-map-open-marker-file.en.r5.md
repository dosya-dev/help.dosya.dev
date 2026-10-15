---
{
  "articleId": "hc-map-open-marker-file",
  "locale": "en",
  "revision": 5,
  "title": "Open a file from its map marker",
  "summary": "Identify photo, file and folder markers on Dosya Map, open the intended item across each client, and handle clusters or approximate locations.",
  "category": "files",
  "articleSlug": "map-open-marker-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 with apps/web/src/pages/map.tsx, apps/desktop/src/renderer/pages/MapPage.tsx, apps/mobile/app/map.tsx, and apps/api/src/pages/api/map/pins.ts; production marker routing remains untested in this revision.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map open marker file",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
A map marker can represent a raster image, another file type, or a folder. Confirm the marker shape and location source before opening it, especially where several uploads share one approximate coordinate.

<figure class="help-screenshot"><a href="/screenshots/map-open-marker-file-help-workflow-2026-10-14.webp"><img src="/screenshots/map-open-marker-file-help-workflow-2026-10-14.webp" alt="Marker-opening workflow distinguishing photo thumbnails, generic file icons, folder icons, approximate pins, and numbered clusters." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the marker's thumbnail or icon to the item kind, then verify the opened viewer or folder instead of relying on the coordinate alone. <a href="/screenshots/map-open-marker-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Map** in the correct workspace and apply any needed folder or date filter.
2. On web or desktop, identify the marker: supported raster files can show a thumbnail, other files use a file icon, and folders use a folder icon. An approximate marker also carries the approximate visual treatment.
3. If the marker has a number, select it to expand the cluster before choosing a member. A web or desktop cluster that cannot expand opens the first sampled file; it may not be the visible cover item.
4. Select one individual marker. Web and desktop open a file in the file viewer or route a folder to **Files** with that folder selected.
5. On mobile, select the plain pin. The app routes a file to its file screen and a folder to its folder screen.
6. Verify the name, folder, and preview after navigation. Close the viewer or return to Map if the item is not the one you intended.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile reference for following a plain map pin to the matching file or folder route on iPhone or Android." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The mobile map sends the selected pin's ID and kind to the app shell, which chooses the file route or folder route. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

An individual file marker opens the exact file represented by its pin, while a folder marker opens the corresponding folder. Opening a marker does not move, edit, download, or share the stored item.

Only items returned for the current membership can become markers. Deleted, hidden, and fully locked files are omitted, and a folder-confined member sees coordinates only within the assigned subtree.

## Troubleshooting

- **The thumbnail and opened file differ.** You probably selected an unexpandable cluster rather than an individual marker. Web and desktop use one of at most six sampled items for the cluster cover and open the first sampled file.
- **Selecting a folder-only cluster does nothing on web or desktop.** Zoom or change the filters until folder pins separate, then choose the individual folder icon.
- **A file has no marker.** Check its EXIF GPS or upload-origin availability, wait for pending scanning, and confirm it is not hidden, deleted, or locked.
- **The location looks wrong.** An approximate pin describes the upload network. Treat it as coarse context and verify file details after opening.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
