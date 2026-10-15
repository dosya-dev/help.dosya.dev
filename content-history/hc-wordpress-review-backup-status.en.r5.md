---
{
  "articleId": "hc-wordpress-review-backup-status",
  "locale": "en",
  "revision": 5,
  "title": "Review WordPress backup status",
  "summary": "Read each connected site's latest backup, stored bytes, warning state, and protection deadline without mistaking upload for completed verification.",
  "category": "integrations",
  "articleSlug": "wordpress-review-backup-status",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production backup was started or changed. Claims checked against apps/web/src/pages/integrations/wordpress.tsx; apps/web/src/pages/integrations/wordpress.test.tsx; apps/api/src/pages/api/wp/sites/index.ts; apps/api/src/pages/api/wp/sites/[id]/backups.ts; apps/api/src/lib/wp/types.ts; and apps/api/src/lib/plans.ts. The diagrams are explanatory artwork, not live-account screenshots.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress review backup status",
    "WordPress backup operations",
    "WordPress backup status",
    "cloud storage integration"
  ]
}
---
Dosya's WordPress integration page gives the account that connected a site a cross-site status view. Use it to find stale, failed, unverified, or protected backups before opening wp-admin for recovery work.

<figure class="help-screenshot"><a href="/screenshots/wordpress-review-backup-status-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-review-backup-status-help-workflow-2026-10-14.webp" alt="Status-review path across the Site, Last backup, Stored, and Status columns on Dosya's WordPress integration page." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Read the entire site row: recency, byte count, and protection state answer different questions and should be checked together. <a href="/screenshots/wordpress-review-backup-status-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to Dosya with the account that approved the WordPress connection, then open **Integrations → WordPress**.
2. In **Your WordPress sites**, identify the row by its **Site** name and host. The page loads at most 20 sites; if more exist, it says **Showing 20 of _total_ sites.**
3. Read **Last backup**. **None yet** means no returned backup; **Uploading…** means the newest job is running; **Failed** includes when it occurred. A successful row shows relative time plus `full, <size>` or `incremental, <size> new`.
4. Compare **Stored**. Dosya displays the total bytes from the first uploaded or verified backup in the returned history. **None** means no such copy was found; **Unknown** means that site's backup-history request failed.
5. Read **Status** independently of the size. Possible labels are **No backup yet**, **Last backup failed**, **Copy detected, check the site**, **Protected until _date and time_**, **Connected**, or **Unknown**.
6. Check the plan line above the table: **_count_ of _limit_ on your plan · _days_-day retention · _hours_ h protection**. Stored sizes use binary byte formatting, while protection deadlines use an exact local date and time.
7. If the row needs investigation, open that site's wp-admin **dosya Backup → Backups** screen. The web overview intentionally does not start, restore, download, or delete backups.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress integration overview used to locate the connected-sites status table." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The integration overview leads to the account-level site table; backup operations themselves remain inside each site's WordPress administration. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

You can name the site's newest backup condition, the bytes reported for a stored copy, and whether any retained backup is still protected. A green **Connected** status alone does not assert that the newest upload was verified.

## Interpret unusual states

- **Unknown** under **Last backup**, **Stored**, or **Status** means Dosya could list the site but could not load that site's backups. Refresh once; if it remains, inspect wp-admin and the plug-in log.
- **Copy detected, check the site** takes priority over backup state. Review the clone warning before allowing the copied installation to upload under the original identity.
- **Protected until _date_** uses the latest lock end found in the returned backups. During that window the site's restricted key cannot change or delete the protected remote copy.
- **Last backup failed** does not erase an earlier completed backup. Open the WordPress log to find the failure and verify the older row before retrying.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
