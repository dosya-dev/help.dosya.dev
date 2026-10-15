---
{
  "articleId": "hc-wordpress-backup-retention",
  "locale": "en",
  "revision": 5,
  "title": "Understand WordPress backup retention",
  "summary": "Compare local backup count with the remote expiry date, preserve incremental dependencies, and know which WordPress copy will remain available.",
  "category": "integrations",
  "articleSlug": "wordpress-backup-retention",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/src/Wp/SettingsSchema.php, apps/wordpress/src/Wp/Admin/templates/schedule.php, apps/wordpress/src/Jobs/LocalStore.php, apps/wordpress/src/Jobs/BackupJob.php, apps/wordpress/src/Remote/RemoteStore.php, apps/api/src/lib/wp/repo.ts, apps/api/src/pages/api/wp/backups/[id]/complete.ts, and apps/api/src/pages/api/wp/connect/exchange.ts. Production behavior for “Understand WordPress backup retention” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress backup retention",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
WordPress keeps local backups by count and remote backups by an expiry timestamp. These are independent policies: a local prune does not prove the Dosya copy expired, and remote expiry does not change the plug-in’s local count.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14.webp" alt="Four panels show the local keep count, the connected site’s remote retention, pruning after a successful backup, and the automatic conditions that restart a full chain." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show the local keep count, the connected site’s remote retention, pruning after a successful backup, and the automatic conditions that restart a full chain. <a class="workflow-map-full" href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-retention-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **dosya Backup → Schedule** and read **Keep on this server**. The accepted local count is 1 through 30; the default for a new install is 3.
2. Open the **dosya** tab and read **Retention** for the connected site. New connections in the current release initialize at 7 days, even when the account plan exposes a higher retention ceiling.
3. Return to **Backups** and compare each created time with the two policies. Remote completion sets `expires_at` from the site’s stored retention days.
4. Run a successful backup before expecting local pruning. The local store prunes after success and retains any older backup that a kept incremental still references.
5. Do not delete an older full merely because its date exceeds the simple count. The UI refuses deletion when one or more newer backups depend on it and names the dependent count.
6. If a later row is full, treat that as an automatic chain restart. The plug-in chooses full when no usable previous remote manifest exists, the base chain is at least 30 days old, the earlier list is unavailable, required local volumes are missing, or the reference ceiling is exceeded; wp-admin has no force-full control.

The local setting removes older completed backups only after a successful run. Source review found the API assignment of `expires_at`, but no local production sweeper contract that guarantees immediate deletion at that second.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Understand WordPress backup retention”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Understand WordPress backup retention”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

You can identify which copies are governed by the local count and which carry a remote expiry. Necessary incremental bases remain local while referenced, and the remote record exposes its expiry date without promising an exact physical-deletion minute.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
