---
{
  "articleId": "hc-wordpress-copy-detected-warning",
  "locale": "en",
  "revision": 5,
  "title": "Respond to a WordPress copy-detected warning",
  "summary": "Resolve a WordPress copy-detected warning by identifying the clone, stopping new backups, and connecting the installation that should continue.",
  "category": "integrations",
  "articleSlug": "wordpress-copy-detected-warning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/api/wp/sites/[id]/heartbeat.ts, apps/api/src/pages/api/wp/backups/index.ts, apps/wordpress/src/Wp/Connector.php, apps/web/src/pages/integrations/wordpress.tsx, apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php. Production behavior for “Respond to a WordPress copy-detected warning” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress copy detected warning",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya identifies a WordPress installation with a stored fingerprint. If the same credential reports a different site or home URL, the service marks that connection **Copy detected, check the site** to prevent a clone from silently writing into the original site’s backup chain.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" alt="Four panels show recording the copy-detected row, distinguishing the original from a clone, disconnecting the copied credential, and verifying a separate folder for the intended site." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show recording the copy-detected row, distinguishing the original from a clone, disconnecting the copied credential, and verifying a separate folder for the intended site. <a class="workflow-map-full" href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Dosya open **Integrations → WordPress** and note the row labeled **Copy detected, check the site**. Record its site name, URL, workspace, and last backup before changing either installation.
2. Determine whether the URL changed because of an intentional migration, a staging clone, or an unexpected database copy. Do not let both installations keep the same saved site key.
3. Pause scheduled backups on the copy that should not own the connection. A clone-suspected site may report status and may finish a backup already in progress, but the API rejects every new backup registration.
4. On the installation that should continue, open **dosya Backup → dosya** and disconnect the copied credential if it remains readable. Stored Dosya backups are retained.
5. Choose **Connect again**, approve the intended workspace, and let the flow create a fresh confined connection. Reconnection can create a newly suffixed site folder; it does not merge the old chain.
6. Run one manual backup from the intended installation. Verify its new site row and folder, then separately retain or remove the old site connection only after confirming the new copy.

A copy warning is a credential-identity safeguard, not proof of compromise. Preserve both URLs and the last successful timestamps if the copy was unexpected.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Respond to a WordPress copy-detected warning”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Respond to a WordPress copy-detected warning”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Only the intended WordPress installation can register new backups with its new credential. The prior remote backups remain in their original folder, and the new connection begins its own chain instead of silently attaching clone data to the old record.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
