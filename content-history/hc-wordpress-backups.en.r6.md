---
{
  "articleId": "hc-wordpress-backups",
  "locale": "en",
  "revision": 6,
  "title": "Manage WordPress backups",
  "summary": "Start scoped WordPress backups, read local and Dosya states, inspect logs and downloads, and understand retention before safely deleting a copy.",
  "category": "integrations",
  "articleSlug": "wordpress-backups",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production backup, restore, or deletion was run. Claims checked against apps/wordpress/src/Wp/Admin/templates/backups.php; apps/wordpress/src/Wp/Admin/templates/partials/status-card.php; apps/wordpress/src/Wp/Admin/templates/partials/backup-row.php; apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php; apps/wordpress/src/Wp/Admin/ViewModel/StatusCard.php; apps/wordpress/src/Wp/Admin/ListAssembler.php; apps/wordpress/src/Wp/Admin/Ajax.php; apps/wordpress/assets/js/backups.js; apps/wordpress/src/Wp/SettingsSchema.php; apps/wordpress/src/Jobs/BackupJob.php; and apps/wordpress/tests/e2e/remote.sh. Workflow diagrams describe source-confirmed behavior.",
  "related": [
    "hc-wordpress-connect",
    "hc-storage-usage"
  ],
  "keywords": [
    "WordPress backup history",
    "disconnect WordPress",
    "site backup",
    "file upload"
  ]
}
---
Use the WordPress **Backups** tab to start a database-and-files, database-only, or files-only job and to distinguish the copy on your server from the copy stored in Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" alt="WordPress backup management map showing scope selection, progress, stored-state badges, logs, and safe deletion checks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the backup contents, let the resumable job finish, and read the row's **Stored** badge before downloading, restoring, or removing anything. <a class="workflow-map-full" href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-backups-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-backups-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In wp-admin, open **dosya Backup**. Only a single-site administrator (`manage_options`) or multisite network administrator (`manage_network_options`) can use these controls.
2. On **Backups**, read the status card before starting another job. **No backup yet**, **Backed up on this server**, **Uploading to dosya**, **Uploaded to dosya, not yet verified**, and **Verified restorable** describe different checkpoints.
3. Press **Back up now**, then choose **Database and files**, **Database only**, or **Files only** under **What to back up**.
4. Optionally fill **Note (optional)**. The plug-in keeps at most 80 characters and shows the note beneath the backup's creation time.
5. Select **Start backup**. One backup or restore may run at a time; the page disables competing start actions while the job advances in short resumable steps.
6. Wait for the result banner, then find the row by **Created** and **Type**. The table also reports **Contents**, **Size**, and **Stored**; it shows 20 rows per page with **Newer backups** and **Older backups** pagination.
7. Treat **local** as “stored on this server only.” Prefer **dosya · verified** before depending on the off-site copy. **dosya · not verified**, **dosya · uploading**, and **dosya · upload failed** need more attention.
8. Open **More actions** for **Download manifest**, numbered `v0001.dosya` volume downloads, **View log**, or **Delete**. An incremental download needs its earlier chain; use a full backup for migration.

The first remotely stored backup is full. Later jobs may become incremental when the earlier uploaded chain is eligible; the row says `incremental, <size> new`. Volume size defaults to 64 MiB and is validated from 16 through 256 MiB. Local retention is 1–30 backups, while the visible Schedule choices are 3, 5, and 10 unless another saved value exists.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Zapier API-key screen included as a reminder that WordPress backup controls live in wp-admin rather than this integration setup page." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Do not manage WordPress backup files from this Zapier setup reference; return to **dosya Backup → Backups** for job state, downloads, restore, and local deletion. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A completed row identifies its scope and byte size, and its **Stored** badge tells you whether the recoverable copy exists locally, is still transferring, or has been verified by Dosya. The footer totals every backup and byte kept on this WordPress server.

## Resolve a failed or blocked action

- **Last backup failed: _cause_** keeps the previous good backup visible. Choose **View log**, correct the reported cause, and use **Retry now**; retry repeats the failed scope.
- **dosya connection lost, uploads paused** means the local backup can still exist, but off-site transfer needs **Connect again**.
- **A backup or restore is running.** Wait for that job to end before deleting another local backup.
- A disabled **Delete** names how many newer incremental backups depend on the selected base. Remove those dependents first. Deleting from this page removes the server copy; its Dosya copy is kept.
- Automatic jobs may run later than the selected clock time because WP-Cron starts on a site visit. **Backup overdue** appears only after 1.5 schedule intervals, when a whole run has effectively been missed.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Understand storage usage](/uploading/storage-usage)
