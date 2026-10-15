---
{
  "articleId": "hc-api-usage-analytics",
  "locale": "en",
  "revision": 5,
  "title": "Review Dosya API usage analytics",
  "summary": "Filter account-level API analytics by key and time range, inspect request and error totals, and page through 50-row REST and S3 activity logs.",
  "category": "developers",
  "articleSlug": "api-usage-analytics",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/pages/api-analytics.tsx, apps/api/src/pages/api/me/api-analytics/series.ts and apps/api/src/pages/api/me/api-analytics/logs.ts, and apps/api/src/lib/api-analytics.ts. Production analytics were not opened.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api usage analytics",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
API analytics are account-level, not limited to the currently active workspace. Open the Analytics action from an API key card in Profile, then choose all owned keys or one owned key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-usage-analytics-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-usage-analytics-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" alt="Four workflow panels show opening API Analytics, choosing an account-owned key, selecting the time range and totals, and paging through recent requests." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers opening API Analytics, choosing an account-owned key, selecting the time range and totals, and paging through recent requests. <a class="workflow-map-full" href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-usage-analytics-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-usage-analytics-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in through the browser; this page uses the web session rather than an API key in the request.
- Allow one to two minutes for recent activity to appear.
- Pick the investigation window: 24 hours uses one-hour buckets, 7 days uses six-hour buckets, and 30 days uses one-day buckets.

## Steps

1. Open **Profile**, find the relevant API key card, and select **Analytics**. The page route includes `?key=` when opened for one key.
2. Choose **All keys** for an account-wide view or select one owned key. Changing workspaces does not change this account-level ownership filter.
3. Set **24h**, **7d**, or **30d** and read **Requests** and **Errors**. Errors count responses whose status is 400 or higher.
4. Inspect **Requests over time** using the bucket size for that range. Compare a spike with deployment time before attributing it to one route.
5. Review **Recent requests**. Rows show Time, optional Key, Action, Source, Status, IP, Country, and Client; avoid copying IP details into public tickets.
6. Use **Load more** to fetch another 50 log rows. Save the chosen key, range, timestamps, statuses, and actions as the investigation receipt.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for review dosya api usage analytics." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Review Dosya API usage analytics”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The totals, time series, and paginated request rows reflect the selected account key filter and range. A recent call may appear after the normal one-to-two-minute ingestion delay.

## Troubleshooting

**The page says `Analytics temporarily unavailable`.** The backing request returned 502; retry later without rotating a working key.

**A request is missing.** Wait two minutes, confirm the account owns the selected key, expand the range, and load more rows.

**Counts look different from one workspace.** The dashboard follows account-owned keys across workspaces; filter to the specific key used by that workspace.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
