---
{
  "articleId": "hc-wordpress-backup-protection-window",
  "locale": "en",
  "revision": 5,
  "title": "Understand protected WordPress backups",
  "summary": "Read the exact lock deadline on a WordPress backup, understand which site key is restricted, and wait before deleting protected cloud backup data.",
  "category": "integrations",
  "articleSlug": "wordpress-backup-protection-window",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/wp/repo.ts, apps/api/src/pages/api/wp/backups/[id]/complete.ts, apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php, apps/wordpress/src/Wp/Admin/Ajax.php, apps/wordpress/src/Jobs/LocalStore.php, apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php, and apps/api/src/pages/api/wp/connect/exchange.ts. Production behavior for “Understand protected WordPress backups” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress backup protection window",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Every completed remote WordPress backup receives a `locked_until` time. While that time is in the future, the site key cannot delete or change the protected copy, and the Backups row shows **🔒 until …**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14.webp" alt="Four panels show matching a stored row, confirming its Dosya badge, separating the remote folder-lock deadline from continuing site-key route limits, and distinguishing local deletion." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show matching a stored row, confirming its Dosya badge, separating the remote folder-lock deadline from continuing site-key route limits, and distinguishing local deletion. <a class="workflow-map-full" href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-protection-window-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **dosya Backup → Backups** in wp-admin and find the remote row by its created time and note.
2. Confirm the row is stored off-site: it must show **dosya · not verified** or **dosya · verified**. A **local** row has no Dosya protection deadline.
3. Read the **🔒 until …** badge and its tooltip. The displayed deadline uses the WordPress site timezone and states only when the remote backup-folder lock expires. The site key’s route restrictions remain in force afterward; expiry does not grant a change or delete route.
4. Treat that deadline as a Dosya cloud control. It does not lock the separate archive stored on the WordPress server, and the badge makes no claim about folders belonging to earlier referenced backups.
5. If the deadline is still future, leave the copy in place. Disconnecting the site revokes its key but keeps stored backups; it does not shorten an existing lock.
6. Keep wp-admin **Delete** separate from the cloud lock. It removes the local backup directory and checks only for newer local dependents; it neither waits for the badge to expire nor deletes the protected remote folder.

A new connection currently starts with 24 hours of protection. The plan model exposes higher protection ceilings, but the row deadline and the Dosya tab’s **Protection** fact are the authoritative values for this connection.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Understand protected WordPress backups”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Understand protected WordPress backups”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The row displays the exact deadline for its remote backup-folder lock, and the site credential cannot change that cloud folder early. Local wp-admin deletion remains a separate operation governed by local incremental dependencies, not by the remote protection clock.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
