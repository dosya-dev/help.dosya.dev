---
{
  "articleId": "hc-share-analytics",
  "locale": "en",
  "revision": 6,
  "title": "Read sharing-link analytics",
  "summary": "Interpret first opens, downloads, visitor reach, recipient verification, and the newest 25 access events for one Dosya sharing link accurately.",
  "category": "sharing",
  "articleSlug": "analytics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against the local shared-list route, analytics page, endpoint, repository query, user-agent parser, download counter, and tests: apps/web/src/pages/shared.tsx; apps/web/src/pages/share-analytics.tsx; apps/api/src/pages/api/shares/[id]/analytics.ts; apps/api/src/lib/repo/repo-d1/shares.ts; apps/api/src/lib/repo/contract/shares.contract.unit.test.ts. Production analytics were not queried.",
  "related": [
    "hc-link-activity",
    "hc-share-delivery-audit",
    "hc-revoke-link"
  ],
  "keywords": [
    "share analytics",
    "link views",
    "download analytics",
    "file sharing"
  ]
}
---
Sharing-link analytics report recorded activity for one browser share. They can show reach and timing, but they cannot identify the person behind a public visit or prove which verified recipient produced an individual event.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/analytics-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/analytics-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/analytics-workflow-map-2026-10-14.webp" alt="Sharing analytics workflow from the By me list through exposure, time range, access log, controls, recipient verification, and reach." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the link’s configuration and all-time evidence before interpreting the selected timeline or acting on a suspicious row. <a class="workflow-map-full" href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/analytics-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the Dosya web app, open **Shared** and choose **By me**. The list can be searched with **Filter by name or person...** and filtered by **All**, **Active**, **Expiring soon**, **Expired** or **Revoked**. Each row’s **Views** cell shows lifetime views with lifetime downloads beneath it; record those values before selecting the row if needed. The detail route is `/shared/{link_id}` and does not repeat those two counters.
2. Confirm the header’s display name, size, region, sharer and age. The status becomes **Expiring** when fewer than three days remain, **Expired** after the expiry time, and **Revoked** after terminal revocation. The URL strip says **Open to anyone with the URL**, **Restricted to N invited addresses**, or **This link no longer works**.
3. Read the exposure statement. For a public URL, Dosya counts distinct visitors by a non-reversible IP hash and explicitly warns that you do not know who they are. Repeat visits from the same hash are deduplicated forever. For a restricted URL, the headline counts invited addresses that proved inbox control with a one-time code before file bytes were served.
4. Under **Access over time**, choose **7d**, **30d** or **90d**; 30 days is the default. **First opens** counts the first observed open per hashed address, while **Downloads** counts every recorded download without that deduplication. This selector affects only the chart. The exposure headline, reach and access-log total remain unchanged, while lifetime list counts stay on **Shared**.
5. Interpret an empty chart precisely. Before any recorded traffic, the section says **Nothing recorded yet** and **Nothing to chart yet. The first open will appear here within a minute.** When activity exists outside the range, it says **No opens in the last N days. Try a wider range.**
6. Review **Access log — Every open and download, newest first**. The endpoint loads at most 25 rows at a time and the current page has no load-more control. **All**, **Opens** and **Downloads** filter those loaded rows locally. **Showing X of Y events** reports displayed versus all-time rows.
7. Use each row’s **When**, **Event**, **Visitor**, **Country** and **Device** values. **Visitor** is the first eight characters of an IP hash or `unknown`; the full hash and raw address never reach the browser. Country is the edge’s two-letter code, and an unavailable value has the tooltip **Not known for this event**. Device and browser names come from the stored user-agent string.
8. Check the right-side controls for end/expiry, access mode, password protection and **Downloads**. Download policy reads **Allowed** or **View only**. This rail does not display a maximum-download limit, downloads remaining or a lifetime download total.
9. For a restricted link, use **Invited** to see each address as **Verified** or **Not opened**. “Verified” records the first successful one-time-code acceptance, not every open. Dosya cannot attach a specific access row to that email address, even when only named recipients are permitted.
10. Read **Who reached it** for distinct-visitor device and browser composition. The rollup is capped at 5,000 visitors. Its country breakdown comes from the newest loaded access rows, with older or unplaceable events grouped as unknown, so do not treat it as an all-time geographic report.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Per-link analytics overview showing status, timeline, anonymous access log, link controls, invited recipients, and reach." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The page combines all-time link evidence with a range-limited timeline; labels and limits determine which conclusion each panel supports. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and errors

There is no separate analytics plan requirement. You must still be a workspace member whose folder scope contains the shared target. A role with **view_own_shares** can inspect links it created; **view_all_shares** is required for a colleague’s link. Hidden targets answer as missing instead of exposing their existence.

The page shows **This share link is not available** for a failed load, followed by the API detail or **It may have been deleted, or you may not have permission to view it.** Use **Back to Shared** and reopen the row. Server details can include **Share link not found**, **Associated resource not found**, **Not a member**, **You don't have permission to view share links**, or **You don't have permission to view this share link**. Only ranges 7, 30 and 90 are valid; another value is rejected as **range must be one of 7, 30, 90**.

## Respond to unexpected activity

Compare the timing with the link’s intended audience and policy. If access must stop, select **Revoke**, read **Revoke this link**, and confirm only after accepting that holders lose access immediately, the log remains, and the operation cannot be undone. Revocation does not erase copies already downloaded.

## Expected result

You can explain which figures are all-time, which belong to the chosen range, how event and recipient records differ, and where sampling applies. Reviewing analytics itself changes no link and sends no notification.

## Related guides

- [Inspect one access event](/sharing/share-access-event)
- [Read visitor counts](/sharing/share-read-visitors)
- [Understand analytics export limits](/sharing/export-analytics)
- [Audit a sensitive delivery](/sharing/audit-delivery)
- [Revoke a sharing link](/sharing/revoke-link)
