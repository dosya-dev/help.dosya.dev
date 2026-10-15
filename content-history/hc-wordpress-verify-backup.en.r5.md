---
{
  "articleId": "hc-wordpress-verify-backup",
  "locale": "en",
  "revision": 5,
  "title": "Verify a completed WordPress backup",
  "summary": "Confirm a WordPress backup completed locally, distinguish uploaded from remotely verified, and run an optional local volume integrity check.",
  "category": "integrations",
  "articleSlug": "wordpress-verify-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php, apps/wordpress/src/Wp/Cli.php, apps/wordpress/src/Archive/VolumeReader.php, apps/api/src/pages/api/wp/backups/[id]/complete.ts, apps/wordpress/src/Wp/Admin/ListPayload.php. Production behavior for “Verify a completed WordPress backup” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress verify backup",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A completed archive, a successful upload, and remote verification are three distinct states. Use the row’s action availability and storage badge first, then use WP-CLI when you need to validate the local volume bytes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" alt="Four panels show matching the completed row, distinguishing remote badges, checking every local volume with wp dosya verify, and testing restoration on a disposable site." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show matching the completed row, distinguishing remote badges, checking every local volume with wp dosya verify, and testing restoration on a disposable site. <a class="workflow-map-full" href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **dosya Backup → Backups** and locate the row by created time, note, type, and contents. A failed row has no Restore or Download action and is not a completed backup.
2. Confirm its local receipt: a normal completed row lists size and volume downloads and offers **Restore**. **local** means the copy exists only on this WordPress server.
3. Read the remote badge. **dosya · uploading** is unfinished; **dosya · not verified** means upload completion was accepted but Dosya has not confirmed every volume; **dosya · verified** is the remote verification receipt.
4. If command-line access is available, run `wp dosya list` to copy the exact backup ID, then run `wp dosya verify <backup-id>`. This reads every local volume and checks its SHA-256 and archive structure.
5. Treat **N volumes verified.** as local integrity evidence only. **Volume N is missing or damaged.** names the first local volume that fails; it does not change the remote badge.
6. For recovery confidence, keep the row and its dependencies, and perform a controlled restore test on a disposable installation. Verification does not prove the restored application behaves correctly.

Remote completion validates up to 2,000 volumes and 2,000 references, checks that files are live and in the correct folders, checks sizes, and accepts references only to uploaded or verified backups from the same site.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Verify a completed WordPress backup”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a completed WordPress backup”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The backup has a usable completed local row, a clearly identified remote state, and—when WP-CLI was run—a local volume-integrity receipt. You know whether the copy is local-only, uploaded but awaiting verification, or remotely verified.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
