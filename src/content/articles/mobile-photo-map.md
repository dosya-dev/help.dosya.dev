---
{
  "articleId": "hc-mobile-photo-map",
  "locale": "en",
  "revision": 5,
  "title": "Explore geotagged photos on the mobile map",
  "summary": "Use the mobile photo map\u2019s workspace-scoped pins and clusters, understand its five-minute data cache, and open the correct file or folder from a location.",
  "category": "files",
  "articleSlug": "mobile-photo-map",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/map.tsx, apps/mobile/src/map/api.ts, apps/mobile/src/map/map-page/main.js, apps/mobile/src/map/mapHtml.generated.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-review-duplicates"
  ],
  "keywords": [
    "mobile photo map",
    "Mobile file tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile **Map** plots workspace files and folders that have coordinates. It sends only ID, longitude, latitude, and kind into the local map page; markers do not contain filenames or photo thumbnails.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-photo-map-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-map-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-map-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-photo-map-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-photo-map-help-workflow-2026-10-14.webp" alt="Photo-map workflow showing workspace selection, cluster expansion or first-leaf routing by kind, a raw marker opening, and separate file or folder verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Photo-map workflow: confirm the workspace, expand a cluster or open its first returned leaf, and verify the destination as a file or folder according to the recorded pin kind. <a class="workflow-map-full" href="/screenshots/mobile-photo-map-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-photo-map-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-photo-map-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The pin query treats cached data as fresh for 5 minutes; this is eligibility for reuse, not a scheduled refresh interval. The map automatically frames the pins once per workspace, then preserves your manual pan and zoom when data refetches.

## Steps

1. Confirm the active workspace, then open **Settings** → **Map**.
2. Wait for the map and pin query; read the **_N_ located** badge when points exist.
3. Pan and zoom to the expected area; tap a cluster to move closer even if the basemap is label-free or absent.
4. When a cluster cannot expand past the clustering ceiling, tap it to open its first returned leaf, which can be a file or a folder.
5. Tap one location marker to open it; Dosya uses the recorded pin kind to choose the file or folder route.
6. For a file, verify its filename, preview, and details; for a folder, verify its title and contents before acting.

### Cluster behavior

MapLibre clusters nearby coordinates with a 60-pixel radius. At high zoom, items at exactly the same coordinates cannot separate into different dots. In that case, tapping opens the first cluster leaf and routes by that leaf’s recorded kind, so the destination can be either a file viewer or a folder. Return to the map or use the file list to inspect the others.

The screen shows the count of plotted pins, not the server’s GPS/approximate/pending breakdown. **No geotagged photos yet** means the successful query returned no pins. **Couldn’t load your map.** means the workspace or network request failed and offers **Retry**.

### Missing basemap or recent uploads

Dosya probes the basemap separately. If tiles are unavailable, it draws a flat light or dark background and still plots coordinates. Newly uploaded or newly scanned locations do not trigger a five-minute timer. Once the cached query becomes stale, a later mount of the Map screen can fetch it again. After a request error, **Retry** calls the pin query again immediately.

## Expected result

The map displays the active workspace’s located items, expands ordinary clusters, and routes a marker tap to the matching file or folder. Missing labels, thumbnails, or tiles do not prevent pin navigation.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Review duplicates](/files/review-duplicates)
