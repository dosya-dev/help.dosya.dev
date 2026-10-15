---
{
  "articleId": "hc-desktop-map-clusters",
  "locale": "en",
  "revision": 6,
  "title": "Expand a photo cluster on desktop",
  "summary": "Open dense desktop map clusters, understand the zoom-16 clustering ceiling and count badges, and handle files sharing identical coordinates.",
  "category": "desktop",
  "articleSlug": "desktop-map-clusters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/pages/MapPage.tsx, apps/desktop/src/renderer/lib/map/map-cluster.ts, apps/desktop/src/renderer/lib/map/map-pins.ts and apps/desktop/tests/e2e/map.spec.ts. Verified the 60-pixel radius, maximum cluster zoom 16, expansion behavior, coincident-point fallback, six representative samples, compact count labels and viewport-only markers. Production behavior was not re-tested.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop map clusters",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "cloud storage"
  ]
}
---
The desktop map groups nearby pins into clusters so dense areas remain usable. Clustering uses a **60-pixel radius** through zoom level **16** and recalculates for the visible viewport as you pan or zoom.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-map-clusters-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" alt="Desktop Map cluster expanding toward individual pins with a fallback for identical coordinates." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Cluster selection increases zoom until pins separate or an identical-coordinate fallback opens a file. <a class="workflow-map-full" href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Map** with at least two nearby located items visible. Cluster contents can include exact EXIF positions and approximate upload-IP positions when **Show approximate locations** is enabled.

## Steps

1. Find a numbered cluster. Counts through 999 display in full; larger badges are shortened by thousands, so 1,000 displays as **1k**.
2. Select the cluster. The map eases to Supercluster's expansion zoom when its members can separate.
3. Repeat until individual markers appear, then select a file pin to open its viewer or a folder pin to navigate to that folder.
4. Pan the map and observe that only markers for the current bounds are rendered. A cluster can therefore change as the viewport or zoom changes.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop workspace frame surrounding the Map where clustered markers are explored." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Selecting an individual marker leaves the Map for the related file viewer or folder listing. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A cluster may use up to six representative items internally and prefers a raster-photo cover where one is available. Those samples do not limit the number reported by its badge.

## Expected result

A normal cluster expands toward separate markers without changing coordinates or file metadata. Map navigation remains read-only.

## Troubleshooting

Items with identical coordinates cannot be separated spatially, even at the clustering ceiling. When such a cluster contains a file, selecting it at maximum expansion opens the first file sample as a practical fallback.

If a cluster disappears after zooming or panning, return to its previous bounds or clear active folder/date filters. Turning off approximate locations can also remove every member of an upload-IP cluster.

## Related guides

- [Explore the map](/files/file-map)
- [Review duplicates](/files/review-duplicates)
