---
{
  "articleId": "hc-desktop-photo-map",
  "locale": "en",
  "revision": 5,
  "title": "Open the photo map in the desktop app",
  "summary": "Open the active workspace map, distinguish GPS and approximate locations, handle scanning or basemap failures, and open mapped files or folders.",
  "category": "desktop",
  "articleSlug": "desktop-photo-map",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/pages/MapPage.tsx, apps/desktop/src/renderer/lib/map/map-pins.ts, apps/desktop/src/renderer/lib/map/map-cluster.ts, apps/api/src/pages/api/map/pins.ts, apps/api/src/lib/location/origin.ts and apps/desktop/tests/e2e/map.spec.ts. Verified EXIF/IP sources, the upload-origin setting gate, count labels, empty and basemap states, initial fit, click destinations and read-only behavior. Production behavior was not re-tested.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop photo map",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop **Map** visualizes locations available to the active workspace. Photo GPS metadata creates exact pins; when upload-origin recording is enabled for the workspace, upload-IP data can create approximate file or folder locations that the map shows by default.

<figure class="help-screenshot"><a href="/screenshots/desktop-photo-map-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-photo-map-help-workflow-2026-10-14.webp" alt="Workspace Map showing exact GPS pins, approximate upload locations, counts, and empty states." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The status chip distinguishes GPS, approximate, and still-scanning location records in the active workspace. <a href="/screenshots/desktop-photo-map-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Sign in, select the intended workspace and choose **Map** in desktop navigation. The map reads accessible location records; opening it does not add GPS metadata, move files or alter upload history.

## Steps

1. Read the status chip: it reports values such as **2 located**, **3 approximate** and **1 scanning…**.
2. Leave **Show approximate locations** enabled to include recorded upload-IP positions, or turn it off when you only want GPS-derived items. The toggle cannot restore approximate data that the workspace's upload-origin setting did not record.
3. Allow the first result set to frame automatically. The initial fit is capped at zoom level 12 so nearby pins retain context.
4. Select a file marker to open that file's viewer. Selecting a folder marker navigates to that folder in **Files**.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop workspace navigation with the Map destination and Files return path." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A selected file pin opens the viewer, while a folder pin returns to its Files location. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Exact coordinates come from EXIF data, while approximate coordinates can reflect an upload network rather than the place where the content was created. Consider that distinction before treating a pin as evidence of a person's location.

## Expected result

Accessible located items appear for the selected workspace, and choosing a pin opens its associated file or folder without modifying it.

## Troubleshooting

**“Map background unavailable right now. Your pins still work.”** means the basemap failed while interactive markers remain usable.

**“No geotagged photos yet”** appears when nothing is located. If processing continues, the page instead shows **“No files or folders with a location yet”** and **“Scanning your files for location…”**. With approximate locations hidden, **“No pins to show”** may be followed by **“All located items are approximate - enable the toggle above to see them.”**

If no approximate markers or folders appear, check whether upload-origin recording is enabled for that workspace. Disabling it excludes IP-derived records from the map; the approximate-location toggle only filters records the API returns.

## Related guides

- [Explore the map](/files/file-map)
- [Review duplicates](/files/review-duplicates)
