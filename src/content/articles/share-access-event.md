---
{
  "articleId": "hc-share-access-event",
  "locale": "en",
  "revision": 6,
  "title": "Inspect details for a share access event",
  "summary": "Read one access-log row's time, event, opaque visitor, country and device fields without mistaking anonymous telemetry for recipient identity.",
  "category": "sharing",
  "articleSlug": "share-access-event",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against local event-table rendering, analytics response comments, repository ordering, and page tests: apps/web/src/pages/share-analytics.tsx; apps/web/src/pages/share-analytics.test.tsx; apps/api/src/pages/api/shares/[id]/analytics.ts; apps/api/src/lib/repo/repo-d1/shares.ts. A production event was not opened or generated.",
  "related": [
    "hc-create-link",
    "hc-link-activity"
  ],
  "keywords": [
    "share access event",
    "share access log",
    "visitor device details",
    "file sharing"
  ]
}
---
A share access event is one row in the link’s **Access log**. Rows are not clickable and Dosya has no event-detail drawer; all supported detail is already present in the table.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-access-event-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-access-event-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-access-event-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-access-event-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-access-event-workflow-map-2026-10-14.webp" alt="Access-event reading workflow focused on the visible When, Event, Visitor, Country and Device columns and their privacy limits." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Inspect a visible log row in context; there is no hidden panel with a raw address, recipient email or additional request data. <a class="workflow-map-full" href="/screenshots/share-access-event-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-access-event-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-access-event-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the web app, open **Shared → By me** and select the link. You need membership and target visibility. **view_own_shares** permits your own link; inspecting a teammate’s link requires **view_all_shares**.
2. Scroll to **Access log — Every open and download, newest first**. Dosya returns the newest 25 events. If **Showing X of Y events** has a larger `Y`, older rows exist but this screen has no pagination or load-more button.
3. Choose **All**, **Opens** or **Downloads**. The selection filters the already loaded rows in the browser. It does not retrieve older matching entries or alter the link’s all-time counters.
4. Read **When** as the recorded event time. The table orders events newest first, so use this value—not row position alone—when comparing with a controlled test or an incident timeline.
5. Read **Event** as **Opened** or **Downloaded**. Opens are first-open evidence for the analytics count because returning visits sharing the same stored hash are deduplicated; downloads are recorded without that deduplication.
6. Treat **Visitor** as an opaque correlation label. It is the first eight characters of a non-reversible IP hash, or `unknown` when absent. Neither a raw IP address nor the full hash is sent to the page, and the short value is not a person’s identity.
7. Read **Country** as the two-letter location code supplied by the edge at event time. Hover an unavailable value to see **Not known for this event**. Missing location is expected for older or unplaceable traffic and must not be converted into a guessed country.
8. Read **Device** as a friendly label parsed from the stored user-agent string. It describes browser/device software and can be inaccurate or shared; it does not authenticate the operator.
9. For a named-recipient link, compare the row with the separate **Invited** panel only as context. **Verified** proves an email address completed a one-time-code check, but the grant cookie and event row do not contain that address. You cannot attribute an individual open or download to one recipient from this page.
10. If the row is unexpected, verify the share URL, access mode, password, expiry and download policy before deciding whether to revoke. Reading or filtering an event changes no data and sends no notification.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Share activity table reference highlighting the five fields available for each anonymous open or download row." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The access table provides operational context for one link, within the newest-25-row and anonymous-visitor boundaries. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Missing rows or page errors

A controlled first open is expected to reach the chart within a minute. Refresh after that interval and make sure you opened the same link. A later event may displace an older row once the visible list reaches 25, while the all-time total continues to include it.

If the route shows **This share link is not available**, return with **Back to Shared** and check scope and ownership. Exact API messages can be **Share link not found**, **Associated resource not found**, **You don't have permission to view share links**, or **You don't have permission to view this share link**.

## Expected result

You can describe the visible event’s recorded time, action, short visitor handle, country availability and parsed device, together with the limits on completeness and attribution. No extra event details are available by selecting the row.

## Related guides

- [Read sharing-link analytics](/sharing/analytics)
- [Read sharing-link visitor counts](/sharing/share-read-visitors)
- [Review file download events](/sharing/share-review-download-events)
- [Audit a sensitive delivery](/sharing/audit-delivery)
