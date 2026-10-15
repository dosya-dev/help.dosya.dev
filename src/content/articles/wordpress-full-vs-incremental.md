---
{
  "articleId": "hc-wordpress-full-vs-incremental",
  "locale": "en",
  "revision": 5,
  "title": "Understand full and incremental WordPress backups",
  "summary": "Tell full and incremental WordPress backups apart, understand their dependency chain, and learn why a later valid run may become full again.",
  "category": "integrations",
  "articleSlug": "wordpress-full-vs-incremental",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/src/Jobs/BackupJob.php, apps/wordpress/src/Remote/RemoteStore.php, apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php, apps/wordpress/src/Wp/Admin/ListPayload.php, apps/api/src/pages/api/wp/backups/[id]/complete.ts. Production behavior for “Understand full and incremental WordPress backups” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress full vs incremental",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A full backup writes all selected database and file content. An incremental can reuse unchanged rows from earlier stored volumes and writes only changed data, so it depends on the backups it references.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14.webp" alt="Four panels show comparing completed rows, separating new bytes from restore size, preserving the referenced chain, and reading the dependent-backup deletion refusal." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show comparing completed rows, separating new bytes from restore size, preserving the referenced chain, and reading the dependent-backup deletion refusal. <a class="workflow-map-full" href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-full-vs-incremental-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **dosya Backup → Backups** and compare the **Type**, **Contents**, **Size**, and **Stored** columns for two completed runs.
2. Read an incremental row’s contents hint, such as **incremental, 38 MB new**. The main size is the restore set; the hint is the newly written portion.
3. Expect the first connected backup to be full. Database-only runs, local-only runs, and runs without a usable previous remote manifest also stay full.
4. For an incremental, the plug-in must still see the prior backup and every referenced backup as uploaded or verified, find their local volumes, and keep the base full younger than 30 days.
5. If Dosya cannot list earlier backups, the new row records **dosya could not be reached to check the earlier backups, so this backup is a full one.** A chain that exceeds the reference ceiling also restarts full.
6. Before deleting any base, check the action refusal. The list disables deletion and states how many newer backups depend on that row; delete dependents first only when you intend to remove the chain.

Backup scope and backup kind are different. **Database**, **Files**, and **Database + files** describe contents; full or incremental describes whether stored volumes reuse earlier data.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Understand full and incremental WordPress backups”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Understand full and incremental WordPress backups”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Each row identifies its effective backup kind and newly stored bytes. A full fallback remains a valid independent backup; an incremental remains restorable only while its referenced local and remote chain is retained.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
