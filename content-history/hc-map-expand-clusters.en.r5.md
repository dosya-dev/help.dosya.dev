---
{
  "articleId": "hc-map-expand-clusters",
  "locale": "en",
  "revision": 5,
  "title": "Zoom and expand photo map clusters",
  "summary": "Expand crowded map clusters, understand zoom and identical-coordinate behavior across Dosya clients, and open the correct file or folder safely.",
  "category": "files",
  "articleSlug": "map-expand-clusters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 with apps/web/src/lib/map-cluster.ts, apps/web/src/pages/map.tsx, apps/desktop/src/renderer/pages/MapPage.tsx, and apps/mobile/src/map/mapHtml.generated.ts; production cluster interaction was not repeated.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map expand clusters",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Map groups nearby coordinates so a dense area does not create hundreds of overlapping controls. The badge is the number of items in the cluster; values above 999 are shortened to a whole-thousand label such as `1k`.

<figure class="help-screenshot"><a href="/screenshots/map-expand-clusters-help-workflow-2026-10-14.webp"><img src="/screenshots/map-expand-clusters-help-workflow-2026-10-14.webp" alt="Cluster expansion workflow showing a numbered map marker, automatic zoom, separated pins, and the identical-coordinate fallback." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Select a numbered cluster to zoom toward its members, then use the fallback behavior when several items share one coordinate and cannot separate. <a href="/screenshots/map-expand-clusters-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Map** and find a marker with a count badge greater than one.
2. Select the cluster. Dosya calculates an expansion level and moves the map there; on mobile, this ease animation lasts 350 milliseconds.
3. Repeat the selection if the cluster remains expandable. Clustering uses a 60-pixel radius and stops calculating new expansion levels after zoom 16.
4. When individual pins appear, choose the intended thumbnail, file icon, or folder icon.
5. If the same cluster no longer zooms, its members either share a coordinate or remain within the 60-pixel cluster radius at zoom 16. On web and desktop, selecting it opens the first file among the cluster's sample items; a cluster containing only sampled folders does nothing. Mobile opens the first leaf, which can be a file or folder.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile reference for selecting a map cluster that animates to its expansion zoom before opening a leaf marker." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Mobile expands a separable cluster with a 350 ms map movement, then routes the chosen leaf to either its file or folder screen. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Nearby positions split into smaller clusters and then individual markers as zoom increases. Web and desktop build a cluster cover from at most six sample items, preferring a raster-photo thumbnail when one is present. A cluster made entirely from approximate upload origins may remain together because those items can share the same network coordinate.

Cluster selection never edits coordinates or file contents. The only follow-up action is map movement or opening one member according to the platform behavior above.

## Troubleshooting

- **The count does not split after repeated zooming.** Its items share a coordinate or are still too close for the 60-pixel clustering radius at zoom 16. Use the platform fallback, or open Files and identify them by folder and filename.
- **A web or desktop folder-only cluster does not open.** That fallback searches the sampled members for a file. Zoom, adjust the folder/date filter, or open the folder through Files.
- **The marker you expected is outside the cluster.** Clear restrictive dates or choose a broader folder; hidden, deleted, and locked files are absent from the map data.
- **Approximate uploads dominate one point.** Hide **Show approximate locations** on web or desktop to leave EXIF GPS pins visible.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
