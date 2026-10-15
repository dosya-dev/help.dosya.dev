---
{
  "articleId": "hc-map-filter-files",
  "locale": "en",
  "revision": 6,
  "title": "Filter files on the map",
  "summary": "Filter the web map by folder, inclusive UTC date range, or approximate-location toggle without changing file metadata or the main Files listing.",
  "category": "files",
  "articleSlug": "map-filter-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/map-filter-panel.tsx, apps/web/src/pages/map.tsx, apps/api/src/pages/api/map/pins.ts, and apps/api/src/lib/location/origin.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map filter files",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
The browser map can narrow pins by folder and date, then separately include or hide approximate locations. These filters affect the map response only; they do not edit files or the **Files** page.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" alt="Light-theme four-step map showing Map, the supported date filter, matching-marker verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow image shows opening Map, choosing a supported date filter, confirming marker changes, and reopening the view. <a class="workflow-map-full" href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Filter behavior**

The user needs access to the file page; the API otherwise returns **You don't have access to the files page**. A member confined to an assigned folder can filter only within that reachable subtree. Choosing a folder includes its descendants. **From** and **To** are applied as inclusive UTC calendar-day boundaries, which can differ from local midnight.

## Steps

1. Open **Map** in the web app and note the current counters: **located**, **approximate**, and **scanning…** when present.
2. Choose **All folders** to open **Filter map by folder**. Pick an allowed folder, then select **Apply folder**. Folder filtering includes nested descendants.
3. Set **From** or **To** if needed. Use both for a bounded period and remember that the server evaluates the inclusive dates in UTC.
4. Turn **Show approximate locations** off when you want only embedded GPS coordinates. Upload-origin locations are approximate and may identify a VPN or gateway rather than the capture point.
5. Wait for the refreshed no-store map response, then compare the pin count with the intended folder and date window.


**Clear and diagnose**

**Clear** resets the folder, From, and To fields. It does not reset **Show approximate locations**, so check that toggle separately. If all located items are approximate and the toggle is off, the map says **No pins to show** and **All located items are approximate - enable the toggle above to see them.**

Deleted, hidden, and locked file pins are omitted. Folder pins follow separate visibility rules and are not evidence that every descendant file is readable. A pending scan can temporarily show **No files or folders with a location yet** with **Scanning your files for location…**. Filters are reversible and do not modify coordinates, capture dates, folder membership, or stored bytes.

## Expected result

The web map shows only pins inside the chosen reachable subtree and inclusive UTC date range, with approximate pins included or excluded by their separate toggle.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
