---
{
  "articleId": "hc-wordpress-backup-failed",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a failed WordPress backup",
  "summary": "Read the exact WordPress backup error, distinguish a local backup from a failed cloud upload, correct the cause, and retry the same scope safely.",
  "category": "integrations",
  "articleSlug": "wordpress-backup-failed",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/src/Wp/Admin/ViewModel/StatusCard.php, apps/wordpress/src/Wp/Admin/ListPayload.php, apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php, apps/wordpress/src/Remote/RemoteStage.php, apps/wordpress/assets/js/api.js. Production behavior for “Troubleshoot a failed WordPress backup” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress backup failed",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A failed run can stop before any usable backup exists, or it can finish the local archive and fail only while sending that archive to Dosya. The Backups status card and row badges distinguish these cases, so preserve the error text before retrying.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14.webp" alt="Four panels show the failed-run headline, View log classification, cause correction while preserving the last good backup, and one same-scope retry ending with a completed badge." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show the failed-run headline, View log classification, cause correction while preserving the last good backup, and one same-scope retry ending with a completed badge. <a class="workflow-map-full" href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backup-failed-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In WordPress wp-admin, open **dosya Backup → Backups**. You need an administrator on a single site, or a network administrator on multisite; other roles cannot run or inspect jobs.
2. Read the status headline and choose **View log**. Record the backup time, requested scope, and exact error. A row labeled **Failed · …** has no restorable archive; **dosya · upload failed** means the local archive exists and only its off-site copy failed.
3. Fix the named cause before another run. Restore disk space for archive errors, restore outbound HTTPS for Dosya errors, or reconnect if the Dosya tab says **Connection to dosya lost** or **This site was disconnected from dosya.dev**.
4. If storage is nearly full, review exclusions or capacity first. The plug-in warns at 90% usage; once full, the next upload is skipped and its backup remains on this server only.
5. Choose **Retry now** once. The status card repeats the failed run’s `full`, `db`, or `files` scope; it does not silently change the requested contents.
6. Keep the page open while the job advances. Requests poll about every 300 ms, slow to 3 seconds while busy, and retry a dropped connection after 1, 3, then 10 seconds before showing a failure.

Do not delete the last good backup while diagnosing the failure. Incomplete working directories older than 24 hours are cleanup candidates, but completed local backups follow the separate **Keep on this server** setting.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Troubleshoot a failed WordPress backup”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot a failed WordPress backup”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The new row completes with **local**, **dosya · not verified**, or **dosya · verified** instead of a failure badge. An upload-only failure still leaves the local row downloadable and restorable; retry after connectivity returns. A later successful backup clears the persistent failed-backup status.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
