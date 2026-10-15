---
{
  "articleId": "hc-wordpress-plugin-install",
  "locale": "en",
  "revision": 5,
  "title": "Install the Dosya WordPress backup plug-in",
  "summary": "Install dosya Backup from its official ZIP, review the default schedule, connect your workspace and verify the first cloud backup before relying on it.",
  "category": "integrations",
  "articleSlug": "wordpress-plugin-install",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production account or native client installation performed. Product claims checked against src/lib/wordpress-integration.ts; src/pages/integration/wordpress.astro; apps/wordpress/dosya-backup.php; apps/wordpress/bin/build; apps/wordpress/src/Wp/Plugin.php; apps/wordpress/src/Wp/SettingsSchema.php; apps/wordpress/src/Wp/Scheduler.php; apps/wordpress/src/Wp/Connector.php; apps/wordpress/src/Wp/SiteKeyStore.php; apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php; apps/wordpress/src/Wp/Admin/ViewModel/BackupRow.php; apps/wordpress/src/Wp/Admin/ViewModel/StatusCard.php; apps/wordpress/src/Wp/Admin/templates/partials/status-card.php; apps/wordpress/src/Wp/Admin/AdminPage.php; apps/wordpress/assets/js/backups.js; apps/api/src/lib/wp/connect.ts; apps/api/src/lib/wp/site-auth.ts; apps/api/src/lib/plans.ts; apps/api/src/pages/api/wp/connect/authorize.ts; apps/wordpress/tests/unit/Wp/ConnectorPkceTest.php; apps/wordpress/tests/unit/Wp/SettingsSchemaTest.php; apps/wordpress/src/Wp/Admin/Ajax.php; apps/wordpress/src/Wp/Admin/Connect.php; apps/api/src/pages/api/wp/connect/exchange.ts; apps/wordpress/src/Wp/Admin/ViewModel/RunningCard.php. External client procedure checked against https://wordpress.org/documentation/article/manage-plugins/; https://developer.wordpress.org/plugins/cron/. Light/dark process diagrams depict documented controls and outcomes, not captured UI.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "install WordPress cloud backup plugin",
    "dosya-backup.zip",
    "WordPress 6.0 PHP 7.4",
    "Connect to dosya",
    "WordPress backup verified",
    "WordPress backup schedule"
  ]
}
---
Install **dosya Backup 0.3.0** using its official ZIP in WordPress, then connect the site to Dosya if you want off-server backup copies. Installation, authorization and the first backup are separate checks. You can make local backups without a Dosya account; cloud upload requires the site connection.

## Check the site and download

The plug-in requires **WordPress 6.0+**, **PHP 7.4+**, **64-bit PHP** and a **MySQL or MariaDB connection through mysqli**. Use a WordPress administrator allowed to install/activate plug-ins. On multisite, install/manage it through network administration; the Dosya admin page uses `manage_network_options`, versus `manage_options` on a single site. A hosting service that disables plug-in uploads must enable that capability before you can follow the ZIP procedure.

Download [dosya-backup.zip](https://dosya.dev/downloads/wordpress/dosya-backup.zip). Use this official manual-install package rather than a similarly named search result. Keep the ZIP compressed for WordPress upload. Its top-level folder is `dosya-backup`, containing `dosya-backup.php` and the bundled job scheduler.

A fresh activation enables a **daily 03:00** backup schedule in the site's WordPress timezone. Review **Schedule** promptly if you want a manual-only installation. Defaults also keep **3 local backups**, use **64 MiB** archive volumes, enable a restore safety copy and failure emails, and leave success emails off. The retention setting can keep **1–30** local backups and the archive volume setting accepts **16–256 MiB**. These local settings are separate from cloud retention.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-plugin-install-process-2026-10-14.webp" data-light-href="/screenshots/wordpress-plugin-install-process-2026-10-14.webp" data-dark-href="/screenshots/wordpress-plugin-install-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-plugin-install-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-plugin-install-process-2026-10-14.webp" alt="WordPress backup setup: upload and activate dosya-backup.zip, review Schedule, connect to Dosya and verify the first cloud backup." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Activation starts the default schedule; a Connected to dosya card is a separate check from a dosya · verified backup. <a class="workflow-map-full" href="/screenshots/wordpress-plugin-install-process-2026-10-14.webp" data-light-href="/screenshots/wordpress-plugin-install-process-2026-10-14.webp" data-dark-href="/screenshots/wordpress-plugin-install-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: install and activate

1. In wp-admin open **Plugins → Add New Plugin** (called **Add New** in some WordPress versions), then **Upload Plugin**.
2. Choose `dosya-backup.zip`, click **Install Now**, wait for installation to finish and choose **Activate Plugin**. On multisite, use the corresponding network activation control.
3. Open the **dosya Backup** admin menu. If you plan to connect before any backup, first inspect **Schedule** and turn automatic backups off until setup is complete. Otherwise a local-only backup can run before the connection exists.
4. Confirm the version in the plug-in list. If activation fails, address the exact requirement instead of repeatedly installing the same archive.

Two activation errors are **dosya Backup needs 64-bit PHP.** and **dosya Backup needs a MySQL or MariaDB database connection.** These deactivate the plug-in rather than leaving it usable. Ask your host to correct PHP architecture or database configuration. A corrupt/incomplete ZIP or failed scheduler dependency should be replaced with a fresh official package.

## Connect the site to cloud storage

1. In **dosya Backup → dosya**, click **Connect to dosya**. Sign in on the Dosya browser page and review the site URL/name and workspace.
2. Pick a workspace in which your Dosya membership can **create folders** and **upload files**. Folder-confined memberships cannot create the site folder at the workspace root. A local/private site address is not a valid cloud-connected site URL.
3. Approve the site and return to wp-admin. The authorization uses a one-time code protected by the site's PKCE challenge; you do not paste an account API key into WordPress. The site stores its dedicated credential encrypted using the site's security keys.
4. Confirm **Connected to dosya**, the account/workspace and **Folder** on the connection card. **Open in dosya ↗** lets you inspect that destination.

The WordPress side keeps the pending connection for **15 minutes**; once approved, the exchange code lives **5 minutes** and is single-use. If the flow is interrupted, restart from Connect to dosya rather than resubmitting the old callback. Dosya receives the site's address, its name and backups you make. Backups can include database content and site files; configure exclusions or encryption before storing data you do not intend to upload.

Each site gets a no-delete credential restricted to its backup folder. It does not grant the WordPress server ordinary account-wide REST, WebDAV or S3 access. Backups are stored under **WordPress Backups** in the approved workspace and consume Dosya storage. The effective account plan caps connections and cloud retention/protection as follows; the current connection card shows the configured values.

| Plan | Connected sites | Maximum retention | Maximum lock after upload |
| --- | ---: | ---: | ---: |
| Free | 1 | 7 days | 24 hours |
| Starter | 3 | 30 days | 72 hours |
| Plus | 10 | 90 days | 168 hours |
| Pro | 25 | 180 days | 336 hours |
| Business | Unlimited | 365 days | 720 hours |

Cloud locks prevent overwrite/deletion until expiry, including from your own account. Do not upload a test containing confidential data if you expect to delete it immediately. A **Your dosya plan does not allow another connected site.** message means free a connection slot or change the plan before trying again.

## Verify the result with a first backup

In **Backups**, choose **Back up now**, select **Database and files** for a whole-site check and click **Start backup**. Keep the page open while checking progress. Background work runs through the bundled Action Scheduler; the open admin page can also advance work when background/loopback execution is unavailable. A queued job is not evidence that bytes reached Dosya.

Wait for a completed row and inspect its **Stored** status. **dosya · verified** means Dosya confirmed every volume. **dosya · not verified** means upload occurred but volume confirmation is pending. A local-only row remains on your server; if upload failed or storage is full, it is not an off-server recovery copy. Use Open in dosya to check the destination and keep a downloaded backup for an independent restore test before relying on it.

In **Schedule**, choose off, daily or weekly and verify the next-run display. WordPress scheduled execution depends on the host/cron reaching the scheduler, so 03:00 is the target time, not a guaranteed completion time. Review exclusions, local retention and failure email delivery; scheduled work skips a slot if another job is running. Restoring is a separate, destructive operation that can overwrite the current site's database/files—do not use Restore just to verify installation.

## Recover a setup problem

| Message/state | Recovery |
| --- | --- |
| **This connect link expired or was already used. Start again.** | Start a fresh connect flow from wp-admin and return promptly after approval. |
| **This connect link does not match the request this site started. Start again.** | Use the same site/browser request; abandon the stale callback. |
| **Could not reach dosya to finish connecting. Please try again.** | Check the host's outbound HTTPS, then start again. |
| **Connection to dosya lost** after site security keys change | Click Connect again. The old encrypted credential cannot be read with new salts; existing cloud backups remain safe. |
| **The site's folder in dosya no longer exists. Connect the site again.** | Reconnect after investigating who removed that folder. |
| **Session expired** during an admin action | Reload/sign in to wp-admin for a fresh session and action nonce. |
| Job stuck or upload failed | Read **Log**, check local disk, scheduler/cron and network, and inspect the actual backup row before starting another job. |

## Upgrade, deactivate and remove

For a manual ZIP upgrade, save a working backup first and upload the fresh official ZIP through the same Plugins screen, confirming WordPress's replacement of the existing plug-in. The code upgrades its job tables by version; existing settings and connection are retained. An older installation without saved settings does not acquire the fresh-install daily schedule merely through this upgrade.

Deactivation removes scheduled backups and queued steps; it retains plug-in settings, job data and the connection. Reactivation enables the stored schedule again. **Disconnect** revokes the remote site connection when reachable and forgets the local credential; an open upload is aborted best-effort. The confirmation says **Backups already stored in dosya are kept.** If remote revocation could not reach Dosya, review the connected site there too.

Deleting the plug-in's code has no custom uninstall cleanup for saved settings/job tables or backups. Treat removal and data deletion as separate tasks: disconnect first, keep recovery copies, then explicitly manage local/cloud backups and their locks. Local-only backups do not survive loss of this server merely because the plug-in was once active.

## Expected result

WordPress lists dosya Backup as active, the configured schedule matches your intention and the first cloud copy is marked verified in the selected workspace. Installation alone is not a verified backup.

## Related guides

- [Connect a WordPress site](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
