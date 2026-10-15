---
{
  "articleId": "hc-map-missing-photo",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a photo missing from the map",
  "summary": "Diagnose a photo missing from Map by checking scan state, GPS metadata, approximate upload origin, map filters, locks, hiding, deletion, and refresh.",
  "category": "files",
  "articleSlug": "map-missing-photo",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/api/map/pins.ts, apps/api/src/lib/location/origin.ts, apps/web/src/pages/map.tsx, and apps/mobile/app/map.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map missing photo",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
A photo appears on Map only when Dosya has a usable location and the current viewer is allowed to receive its pin. Work through metadata, processing, visibility, and filters in that order.

<figure class="help-screenshot"><a href="/screenshots/map-missing-photo-help-workflow-2026-10-14.webp"><img src="/screenshots/map-missing-photo-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing Map, photo detail inspection, metadata confirmation, and refresh for a missing photo." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible cards guide the reader from the active Map to item details, location-metadata confirmation, and a reopened view after processing. <a href="/screenshots/map-missing-photo-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Where a pin comes from**

Dosya can use embedded EXIF GPS coordinates from the image or an approximate origin recorded at upload. Approximate origin can point to a network gateway or VPN rather than where the photo was taken. If upload-origin recording was disabled and the file contains no EXIF GPS, Dosya has no location from which to create a pin.

## Steps

1. Find the exact photo in **Files** and confirm it is not in Trash. Record its name, folder, upload time, lock state, and whether the current member can open it.
2. Open **Map** in the browser. If the header shows **scanning…**, allow the location scan to finish and refresh. A newly processed image may not appear in the response already on screen.
3. Clear the folder, **From**, and **To** filters. Then verify **Show approximate locations** separately because **Clear** does not change that toggle.
4. If the photo came from a camera, inspect the original for GPS metadata. A resized, exported, or privacy-scrubbed copy may have lost EXIF coordinates even when the source retained them.
5. Check access as the affected member. Deleted, hidden, and locked file pins are excluded, and an assigned-root boundary can exclude a folder before map filtering is applied.


**Read the empty state**

**No geotagged photos yet** means no visible pin and no pending scan remain. **No files or folders with a location yet** plus **Scanning your files for location…** means processing is still pending. **No pins to show** with the approximate-location message means the toggle is hiding all current results.

The mobile map does not expose the browser’s folder and date panel and may reuse a response for up to five minutes. Reopen it after the server scan or verify first in the browser. Location display does not rewrite the photo, and turning approximate pins off only changes the current view.

## Expected result

The photo appears after processing when it has EXIF GPS or an allowed upload-origin location, passes the active filters, and is visible and unlocked for the member.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
