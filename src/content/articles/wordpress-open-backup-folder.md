---
{
  "articleId": "hc-wordpress-open-backup-folder",
  "locale": "en",
  "revision": 5,
  "title": "Open a WordPress site backup folder",
  "summary": "Open the exact connected site's Dosya folder, verify its generated path and stored backup files, and handle a missing folder control safely.",
  "category": "integrations",
  "articleSlug": "wordpress-open-backup-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production folder or backup was changed. Claims checked against apps/web/src/pages/integrations/wordpress.tsx; apps/web/src/pages/integrations/wordpress.test.tsx; apps/api/src/pages/api/wp/sites/index.ts; apps/api/src/pages/api/wp/connect/authorize.ts; apps/api/src/lib/wp/names.ts; apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php; and apps/wordpress/src/Wp/Admin/templates/partials/connect-card.php. Images are task diagrams and overview artwork rather than live storage data.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress open backup folder",
    "WordPress backup operations",
    "WordPress backup folder",
    "cloud storage integration"
  ]
}
---
Every approved WordPress connection receives its own folder beneath `WordPress Backups`. Open it from the connected-site row so similarly named sites do not lead you to the wrong backup set.

<figure class="help-screenshot"><a href="/screenshots/wordpress-open-backup-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-open-backup-folder-help-workflow-2026-10-14.webp" alt="Folder-opening sequence from a verified WordPress site row to that site's backup directory in Dosya Files." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Match the site name and host first; **Open folder** then routes directly to the root folder recorded for that connection. <a href="/screenshots/wordpress-open-backup-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Use the Dosya account that originally approved the site and open **Integrations → WordPress**.
2. Under **Your WordPress sites**, match both the bold site name and the smaller host. This prevents confusion between production, staging, and cloned installations.
3. Select **Open folder** on that row. The control exists only when the connected-site record has a `root_folder_id`; it opens Dosya Files with that folder selected.
4. Check the breadcrumb and folder name. Connection creates `WordPress Backups/<site name> (<host>)`; a collision receives `(2)`, `(3)`, or a later free suffix rather than reusing another site's directory.
5. Inspect the ordinary files in that location. Compare backup timestamps and sizes with the WordPress **Backups** tab before downloading or restoring a set.
6. For the same destination from wp-admin, open **dosya Backup → dosya** and choose **Open in dosya ↗**. Its **Folder** fact should agree with the web-app destination.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="WordPress integration overview from which the connected-site folder action is reached." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Begin at the WordPress integration overview, then use the row-level destination rather than searching by a possibly duplicated site title. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya Files opens the root assigned to the chosen WordPress site, and the visible site-folder path matches the connection you inspected. Opening the folder is read-only by itself; it does not start a backup, restore WordPress, or alter retention.

## If Open folder is missing or wrong

- A missing **Open folder** means the site list did not receive a root-folder ID. Refresh the page, then inspect **dosya Backup → dosya** in wp-admin for **The site's folder in dosya no longer exists. Connect the site again.**
- If you signed in with another workspace member, the site may not appear because this page lists sites for the Dosya account that connected them.
- If the folder was deleted, reconnecting creates a fresh restricted key and a new uniquely named directory. It cannot reconstruct the removed files.
- If the host or site name is unexpected, stop before downloading or restoring anything and resolve a possible clone warning from the connected-sites table.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
