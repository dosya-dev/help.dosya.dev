---
{
  "articleId": "hc-wordpress-site-limit",
  "locale": "en",
  "revision": 5,
  "title": "Fix a WordPress site limit error",
  "summary": "Resolve a WordPress connected-site limit by counting active sites, disconnecting the correct unused row, or increasing account plan capacity.",
  "category": "integrations",
  "articleSlug": "wordpress-site-limit",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/plans.ts, apps/api/src/lib/wp/repo.ts, apps/api/src/pages/api/wp/connect/authorize.ts, apps/web/src/pages/connect/wordpress.tsx, apps/web/src/pages/integrations/wordpress.tsx, apps/api/src/pages/api/wp/sites/[id]/disconnect.ts. Production behavior for “Fix a WordPress site limit error” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress site limit",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A WordPress connection consumes one active site slot. The authorization page checks the plan cap transactionally, so simultaneous approvals cannot exceed it; disconnected sites no longer count, while their stored backups remain.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-site-limit-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" alt="Four panels show comparing the active count with the plan cap, identifying an unused site, disconnecting it while retaining backups, and confirming one new connection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show comparing the active count with the plan cap, identifying an unused site, disconnecting it while retaining backups, and confirming one new connection. <a class="workflow-map-full" href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Dosya open **Integrations → WordPress** and read the plan line above **Your WordPress sites**. It shows the active count and finite cap; Business reports no numeric maximum.
2. Use the current plan limits as a diagnostic: Free 1, Starter 3, Plus 10, Pro 25, and Business unlimited active WordPress sites.
3. Identify an unused site by URL, status, and last backup. The web table renders at most 20 rows and says **Showing 20 of N sites** when more exist, so avoid assuming the visible set is the total.
4. If removing one, open its actions and choose **Disconnect**. Confirm the named site; this immediately revokes its API key but keeps existing backups and folder data.
5. Otherwise change the account plan before retrying approval. On the connect page, a full account reports **Your plan’s connected site limit is reached. See plans to connect more sites.**
6. Restart **Connect to dosya** from the intended WordPress installation and approve once. Confirm that the new site appears and that the plan count increased by one.

Only an account owner’s signed-in browser can approve the connection; impersonated sessions are refused. The approval endpoint is also limited to 10 requests per 15 minutes and returns a retry delay when throttled.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Fix a WordPress site limit error”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix a WordPress site limit error”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The intended site connects within the active-site allowance. A disconnected site frees a slot without erasing its prior backups, and a failed over-cap approval creates neither a usable site key nor a partial site connection.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
