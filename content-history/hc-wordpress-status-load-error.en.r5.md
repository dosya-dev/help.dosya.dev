---
{
  "articleId": "hc-wordpress-status-load-error",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot WordPress backup status that will not load",
  "summary": "Separate a failed WordPress site-list request from one site’s backup-list failure, preserve evidence, and retry without disconnecting healthy sites.",
  "category": "integrations",
  "articleSlug": "wordpress-status-load-error",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/wordpress.tsx, apps/api/src/pages/api/wp/sites/index.ts, apps/api/src/pages/api/wp/sites/[id]/backups.ts, apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php. Production behavior for “Troubleshoot WordPress backup status that will not load” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress status load error",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The WordPress integration page makes one request for sites and then one backup-list request per displayed site. A top-level failure and a row with unknown backup details therefore have different causes and should not trigger the same recovery.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" alt="Four panels show capturing the account-wide alert, isolating one Unknown backup row, comparing wp-admin evidence, and preserving a redacted failing response." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show capturing the account-wide alert, isolating one Unknown backup row, comparing wp-admin evidence, and preserving a redacted failing response. <a class="workflow-map-full" href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Integrations → WordPress** while signed in and copy the exact alert. **Could not load your WordPress sites. Please try again.** means the site-list request itself failed.
2. If the table loads but one row shows **Unknown** or blank stored details, record that site ID and URL. The page converts a failure of that site’s backup request to an unknown row while leaving other sites visible.
3. Reload once after confirming the browser is online. Do not disconnect a site merely to refresh status; disconnect revokes its credential and is not a status reload.
4. Check whether the account session expired. The sites route returns **Sign in required** for an unsigned session, **Site not found** for a missing record, and **You can only view your own sites** for another owner.
5. Compare the same site in wp-admin. Its **dosya** tab shows whether the local key is connected, unreadable, or revoked; the Backups list remains the source for the local archive.
6. If only one row still fails, preserve the request status and response body for support. If every row fails, preserve the top-level alert, account, time, and browser before signing in again.

The page fetches backup details for only the first 20 displayed sites. A **Showing 20 of N sites** notice means additional active sites exist even though their backup rows were not requested on that view.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Troubleshoot WordPress backup status that will not load”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot WordPress backup status that will not load”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The page either repopulates the account’s active site rows and their newest backup states, or the evidence identifies whether the account-wide sites request or one site-specific backups request failed. No healthy connection is revoked as a refresh tactic.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
