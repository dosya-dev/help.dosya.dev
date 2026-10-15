---
{
  "articleId": "hc-wordpress-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect a WordPress site",
  "summary": "Connect dosya Backup from wp-admin, choose an allowed workspace, approve the site, and verify its restricted backup key, folder, and status.",
  "category": "integrations",
  "articleSlug": "wordpress-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production site was connected. Claims checked against apps/wordpress/README.md; apps/wordpress/src/Wp/Plugin.php; apps/wordpress/src/Wp/Connector.php; apps/wordpress/src/Wp/Admin/Connect.php; apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php; apps/web/src/pages/connect/wordpress.tsx; apps/api/src/lib/wp/connect.ts; apps/api/src/lib/plans.ts; apps/api/src/pages/api/wp/connect/authorize.ts; and apps/web/src/pages/connect/wordpress.test.tsx. Workflow diagrams describe the verified controls and results rather than a production capture.",
  "related": [
    "hc-cloud-import-connect",
    "hc-contact-support"
  ],
  "keywords": [
    "WordPress backup",
    "connect WordPress",
    "WordPress integration",
    "file upload"
  ]
}
---
Connect the dosya Backup plug-in from WordPress, choose where its off-site copies belong, and approve a credential made specifically for that site. The connection never asks for your WordPress administrator password.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" alt="WordPress connection map from the dosya tab through workspace approval and the Connected to dosya state." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start inside the site's dosya Backup screen, approve the displayed host and workspace in the browser, then return to the connection card. <a class="workflow-map-full" href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you connect

- The plug-in requires WordPress 6.0 or newer, PHP 7.4 or newer, 64-bit PHP, and MySQL or MariaDB through `mysqli`. It does not require PHP's ZIP extension.
- In a single-site installation, sign in with a role that has WordPress's `manage_options` capability. For multisite, use a network administrator with `manage_network_options`.
- The Dosya account approving the request must be an unconfined member of the chosen workspace with both `create_folders` and `upload_files`. A folder-confined member cannot place the site folder at the workspace root.
- The plan controls active sites, retention, and protection: Free is 1 site / 7 days / 24 hours; Starter 3 / 30 / 72; Plus 10 / 90 / 168; Pro 25 / 180 / 336; Business unlimited / 365 / 720.

## Steps

1. In wp-admin, open **dosya Backup**, select the **dosya** tab, and press **Connect to dosya**.
2. If Dosya asks you to sign in, complete sign-in in that browser. Do not reuse a bookmarked connect URL: WordPress keeps the pending request for 15 minutes, and the one-time approval code itself lasts 5 minutes.
3. On **Connect _host_ to dosya**, compare the site name and host with the WordPress installation you started from.
4. Under **Save backups in workspace**, choose the intended workspace. The page shows the plan's site count, retention days, and immutability hours.
5. Press **Allow**. Dosya creates `WordPress Backups/<site name> (<host>)`; if that name exists, it uses `(2)`, `(3)`, or another available suffix.
6. After the browser returns to wp-admin, look for **Connected to dosya**. Confirm the account, workspace, **Folder**, **Retention**, and **Protection** facts before running a backup.

The issued site key can write to that site's backup folder and register its backups. It cannot browse the rest of the workspace, overwrite a backup, or delete a protected copy.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier integration page shown only as a contrast to WordPress, which creates its key through Allow instead of a pasted API key." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Other integrations may expose API-key setup; WordPress uses the dedicated **Connect to dosya** approval and should not receive a manually created full-scope key. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The wp-admin card says **Connected to dosya**, identifies the selected workspace and site folder, and offers **Open in dosya ↗** plus **Disconnect**. A first backup can now stay on the server and upload a second copy to the displayed folder.

## If connection fails

- **Your plan's connected site limit is reached.** Disconnect an unused site or choose a plan with a higher site cap.
- **You don't have permission to back up a site into this workspace.** Ask a workspace administrator for folder-creation and upload permissions, or choose a workspace where you already have them.
- **This connect link expired or was already used. Start again.** Return to the plug-in's **dosya** tab and begin a fresh request.
- **This connect link does not match the request this site started. Start again.** Use the same wp-admin session and its newest browser tab; the state belongs to one request.
- **The site's folder in dosya no longer exists. Connect the site again.** Approving again creates a new site folder and a new restricted key; it does not restore the deleted folder.
- **Connecting was cancelled. Nothing was changed.** Restart only when you are ready to approve the listed site and workspace.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Contact support](/troubleshooting/contact-support)
