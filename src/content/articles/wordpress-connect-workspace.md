---
{
  "articleId": "hc-wordpress-connect-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Connect a WordPress site to a Dosya workspace",
  "summary": "Approve a WordPress site for one Dosya workspace, understand the confined site key, and confirm its folder, retention, and protection facts.",
  "category": "integrations",
  "articleSlug": "wordpress-connect-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/connect/wordpress.tsx, apps/api/src/lib/wp/connect.ts, apps/api/src/pages/api/wp/connect/authorize.ts, apps/api/src/pages/api/wp/connect/exchange.ts, apps/wordpress/src/Wp/Connector.php, apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php, and apps/wordpress/readme.txt. Production behavior for “Connect a WordPress site to a Dosya workspace” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress connect workspace",
    "WordPress backup operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The connection flow grants one WordPress installation a dedicated `wp_site` key confined to a newly created site folder. It does not give the plug-in general access to the workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14.webp" alt="Four panels show starting Connect to dosya, selecting from every workspace membership with permission checks on Allow, approving the confined folder grant, and confirming connection facts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show starting Connect to dosya, selecting from every workspace membership with permission checks on Allow, approving the confined folder grant, and confirming connection facts. <a class="workflow-map-full" href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workspace-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm WordPress 6.0 or later, PHP 7.4 or later, a MySQL or MariaDB connection, and 64-bit PHP. Sign in to the Dosya account that belongs to the target workspace.
2. In wp-admin open **dosya Backup → dosya** and select **Connect to dosya**. The browser approval request expires after 15 minutes on the WordPress side.
3. On **Save backups in workspace**, choose the intended workspace. The selector lists every workspace membership and defaults to the active workspace when present, otherwise its first row; it does not pre-filter rows by backup permissions.
4. Read the grant and choose **Allow** once. Authorization separately requires both `create_folders` and `upload_files`; an insufficient role returns **You don't have permission to back up a site into this workspace** and creates no connection. An accepted site key is confined to its new `WordPress Backups` site folder.
5. Return to wp-admin within the one-time exchange window. The authorization code lasts 5 minutes and cannot be reused; an expired attempt says **This connect link expired or was already used. Start again.**
6. Confirm **Connected to dosya** and record the **Folder**, **Retention**, and **Protection** facts. Then run one manual backup and wait for an off-site badge.

The site sends its address, name, and backup data to Dosya. If PHP sodium is unavailable, the plug-in warns that the saved site key is stored unencrypted in the WordPress database.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Connect a WordPress site to a Dosya workspace”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect a WordPress site to a Dosya workspace”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The site has its own confined credential and unique folder under `WordPress Backups`, and the Dosya tab names the account and workspace. Current connections initialize with 7-day retention and 24-hour protection; the displayed facts control, even if the plan page shows higher ceilings.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
