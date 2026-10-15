---
{
  "articleId": "hc-desktop-map-filters",
  "locale": "en",
  "revision": 6,
  "title": "Filter the desktop photo map",
  "summary": "Filter the desktop map by a folder subtree or inclusive local-date range, see immediate marker updates, and reset all query criteria with Clear.",
  "category": "desktop",
  "articleSlug": "desktop-map-filters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/map/MapFilterPanel.tsx, apps/desktop/src/renderer/pages/MapPage.tsx, apps/desktop/src/renderer/lib/map/map-pins.ts and apps/desktop/tests/e2e/map.spec.ts. Verified Everywhere/folder controls, recursive folder scope, local inclusive day boundaries, captured-date fallback, immediate queries, Clear behavior and approximate-location independence. Production behavior was not re-tested.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop map filters",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "cloud storage"
  ]
}
---
Desktop map filtering supports a folder and a **From**/**To** date range. There is no file-type filter and no Apply button; changing a control immediately requests and frames the matching pins.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-map-filters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-map-filters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-map-filters-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-map-filters-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-map-filters-workflow-map-2026-10-14.webp" alt="Desktop Map filters for Everywhere or an allowed folder subtree plus inclusive From and To dates." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Clear removes the chosen folder and dates, while a folder-confined role remains inside its assigned subtree. <a class="workflow-map-full" href="/screenshots/desktop-map-filters-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-map-filters-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-map-filters-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Map** in the intended workspace. The folder selector lists folders returned for your accessible area. **Everywhere** removes the optional narrower folder choice; for a member confined to one folder, the API still anchors this request to that assigned folder and its descendants. Filters change only the current map query.

## Steps

1. Open the folder selector and choose a folder. Its descendants are included recursively, so nested located items remain eligible.
2. Set **From** to include records from 00:00:00 on that local calendar day.
3. Set **To** to include records through 23:59:59 on the chosen local day. A photo's captured/taken time is used when available; otherwise filtering falls back to upload time.
4. Watch the markers update after each control change. Use **Show approximate locations** separately if upload-IP pins should be included.
5. Select **Clear** to remove the chosen folder and both dates. The button appears only while at least one of those three controls is active. A folder-confined member returns to the assigned subtree rather than gaining a workspace-wide view.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop workspace context used when choosing which folder subtree the Map should query." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The active workspace determines both the folder options and the location results being filtered. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

No stored metadata is rewritten by filtering. Local-day boundaries mean the same date selection can represent different Unix timestamps in different system time zones.

## Expected result

Only pins inside the selected folder subtree and inclusive date interval remain. Clearing restores the broadest query your role permits while keeping the approximate-location toggle at its current setting; folder-confined access remains anchored.

## Troubleshooting

If a photo appears outside the date you expected, check whether it has a captured timestamp; items without one use upload time. Also confirm the computer's current time zone before comparing day boundaries.

If choosing a parent omits a nested item, clear the date fields and verify that the item has a usable GPS or approximate location. **No pins to show** can also mean all remaining pins are approximate while their toggle is off.

## Related guides

- [Explore the map](/files/file-map)
- [Review duplicates](/files/review-duplicates)
