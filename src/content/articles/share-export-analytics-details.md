---
{
  "articleId": "hc-share-export-analytics-details",
  "locale": "en",
  "revision": 5,
  "title": "Export sharing analytics for review",
  "summary": "Review the available 7-, 30-, or 90-day analytics and capture the visible 25-event table while recognizing that web CSV export is unavailable.",
  "category": "sharing",
  "articleSlug": "share-export-analytics-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/shares/[id]/analytics.ts.",
  "related": [
    "hc-share-analytics",
    "hc-link-activity"
  ],
  "keywords": [
    "share export analytics details",
    "Sharing analytics details",
    "Dosya help",
    "file sharing"
  ]
}
---
The current web analytics page has no CSV or export control. You can review its range, counters, reach, recipients, and newest 25 events, then preserve that visible evidence.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-export-analytics-details-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-export-analytics-details-help-workflow-2026-10-14.webp" alt="Four-step map for opening exact link analytics, filtering the newest 25 events, recording visible columns, and capturing the page without a CSV export." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Preserve the web analytics with its selected range, loaded-row limit, and Unknown-country meaning because the current client has no export action. <a class="workflow-map-full" href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-export-analytics-details-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Shared** → **By me**, select the link, and confirm its exact URL and status on the analytics page.
2. Choose **7d**, **30d**, or **90d**. The timeline shows first opens and downloads by day; a returning hashed IP is not counted as another first open.
3. Use **All**, **Opens**, or **Downloads** above the access log. This filter applies only to the rows already loaded; the web page requests 25 newest events and shows **Showing N of total events**.
4. Record the visible columns: **When**, **Event**, **Visitor**, **Country**, and **Device**. Visitor is an eight-character fragment of a one-way IP hash; **Unknown** country covers missing edge location and older rows written before country was recorded.
5. Capture the page with your browser’s print or screenshot tools if a review artifact is required. The current web client contains no **Export**, CSV, or download-analytics action.
6. Add the chosen range, capture time, loaded-row count, and total event count to your review note. Do not imply the visible country tally covers events beyond the loaded 25.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Sharing activity overview with access and download rows used for the review capture." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Capture the activity overview together with the selected time range and **Showing N of total events** line because the web client has no export button. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

You have a clearly scoped capture of the analytics that the web app actually displays, including its range and row limit, without a nonexistent export claim.

**Reach tallies devices and browsers from at most 5,000 distinct visitor rows and marks truncation.**
**Restricted-link events cannot be attributed to individual recipients.**

## Related guides

- [Read sharing analytics](/sharing/analytics)
- [Read link activity](/sharing/link-activity)
