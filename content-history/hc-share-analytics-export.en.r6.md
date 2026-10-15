---
{
  "articleId": "hc-share-analytics-export",
  "locale": "en",
  "revision": 6,
  "title": "Export sharing analytics safely",
  "summary": "Understand why per-link analytics cannot currently be exported, what the visible 25-row log contains, and which evidence can be recorded safely.",
  "category": "sharing",
  "articleSlug": "export-analytics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against local analytics UI, API, repository contract, and account-export builder: apps/web/src/pages/share-analytics.tsx; apps/api/src/pages/api/shares/[id]/analytics.ts; apps/api/src/lib/repo/repo-d1/shares.ts; apps/api/src/lib/repo/contract/shares.contract.unit.test.ts; apps/api/src/lib/account/export/report.ts. No production export attempt was made.",
  "related": [
    "hc-share-analytics",
    "hc-workspace-activity"
  ],
  "keywords": [
    "export analytics",
    "CSV share report",
    "download activity report",
    "file sharing"
  ]
}
---
Dosya does not currently offer a CSV, spreadsheet or download action for one link’s analytics. The browser page is a review surface, and its access log loads only the newest 25 events. Do not present a screenshot or copied table as a complete export.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/export-analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/export-analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/export-analytics-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/export-analytics-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/export-analytics-workflow-map-2026-10-14.webp" alt="Supported analytics evidence workflow showing Shared, the selected link, range and event filters, the 25-row limit, and controlled note-taking." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Review the selected link in the browser and record only the limited evidence the page actually exposes; there is no per-link export control. <a class="workflow-map-full" href="/screenshots/export-analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/export-analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/export-analytics-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the web app and select **Shared → By me**. Choose the exact row by file name, region, expiry and status. The row’s **Views** cell also shows its lifetime download count; record those list values now if the review needs them, because the analytics detail does not repeat either counter.
2. Check the URL bar and header before recording anything. The page identifies the file or folder, sharer, creation time and **Active**, **Expiring**, **Expired** or **Revoked** state. A bundle is displayed with its first file’s name, so retain the link identifier when similar bundles exist.
3. Set **7d**, **30d** or **90d** above **Access over time**. This changes only the daily **First opens** and **Downloads** chart. The exposure headline, reach, recipient list and access-log total do not shrink to the chosen window; lifetime view and download counters remain back on the **Shared** row.
4. In **Access log**, use **All**, **Opens** or **Downloads**. These filters operate in the browser on the 25 rows already returned, newest first; they do not request every matching event. Read **Showing X of Y events** to distinguish visible rows from the all-time total.
5. If a reviewer needs evidence, record the link identifier, current status, selected chart range, any lifetime list counts captured before opening, the **Showing X of Y events** statement, and only the visible fields required for the review. A row contains **When**, **Event**, an eight-character opaque **Visitor** value or `unknown`, a two-letter country or an unavailable marker, and parsed **Device** information.
6. Mark the record as a partial browser observation when `Y` exceeds 25. Country summaries are likewise derived from those currently loaded rows. Device/browser reach may cover up to the first 5,000 distinct visitors and displays **Counted from the first 5,000 visitors.** when that ceiling matters.
7. **Evidence note:** Store any manually captured analytics in the organization’s approved private system and remove temporary copies after the review period. Visitor handles, recipient email addresses and timestamps are operational data even though Dosya never exposes raw IP addresses here.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Share analytics overview annotated as a browser-only evidence source rather than a complete downloadable report." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The overview can support a point-in-time review, but its newest-25 access table cannot establish a complete event history. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Account export is different

The account data-export archive contains `sharing.csv` for share-link and file-request records and `activity.csv` for workspace audit actions. It does not include the per-link `share_views` access-log rows shown by analytics. Generating that account archive therefore does not work around the absence of a link-analytics export.

Named-recipient links also cannot supply a recipient identity for each open or download. The recipient list proves which addresses accepted a one-time code, while the event table remains anonymous because its stored view row has no recipient column.

## If the page is unavailable

**This share link is not available** can mean the record or associated resource is gone, the target is hidden from you, your folder scope excludes it, or your role lacks access. An owner of a link may use **view_own_shares**; reviewing a teammate’s link requires **view_all_shares**. API refusals include **You don't have permission to view share links** and **You don't have permission to view this share link**.

## Expected result

The reviewer has a clearly labelled, limited observation of the selected link rather than an inaccurate “export.” No file is generated by the analytics page, no recipient is contacted, and no link setting changes.

## Related guides

- [Read sharing-link analytics](/sharing/analytics)
- [Inspect a share access event](/sharing/share-access-event)
- [Review download events](/sharing/share-review-download-events)
- [Read workspace activity](/workspaces/activity)
