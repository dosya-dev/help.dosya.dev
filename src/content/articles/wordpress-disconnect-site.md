---
{
  "articleId": "hc-wordpress-disconnect-site",
  "locale": "en",
  "revision": 5,
  "title": "Disconnect a WordPress site safely",
  "summary": "Revoke one WordPress site's restricted key, stop later off-site uploads, preserve stored backups, and understand how to reconnect safely when needed.",
  "category": "integrations",
  "articleSlug": "wordpress-disconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; disconnect was not executed on a production site. Claims checked against apps/web/src/pages/integrations/wordpress.tsx; apps/web/src/pages/integrations/wordpress.test.tsx; apps/api/src/pages/api/wp/sites/[id]/disconnect.ts; apps/api/src/pages/api/wp/sites/[id]/disconnect.unit.test.ts; apps/wordpress/src/Wp/Connector.php; apps/wordpress/src/Wp/Admin/AdminPage.php; apps/wordpress/assets/js/dosya.js; and apps/wordpress/src/Wp/SiteKeyStore.php. Illustrations show the confirmed decision flow.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress disconnect site",
    "WordPress backup operations",
    "revoke WordPress site key",
    "cloud storage integration"
  ]
}
---
Disconnecting revokes the site's restricted Dosya key and prevents later off-site uploads. Backups already stored in Dosya, their folder, database rows, and active protection locks remain in place.

<figure class="help-screenshot"><a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp" alt="Safe WordPress disconnection path showing site identification, retained-backup review, confirmation, and revoked access." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verify recoverable copies before confirming; disconnection removes access for the selected site but deliberately keeps its previously uploaded backups. <a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Decide which control matches your access. The account that connected the site can use Dosya **Integrations → WordPress**; a WordPress administrator can use **dosya Backup → dosya** from that installation.
2. Before disconnecting, verify the exact site name and host. Open its folder and confirm at least one usable stored copy if off-site recovery matters.
3. In Dosya, open **Actions for _site_**, choose **Disconnect**, and read **Disconnect _site_ from dosya? Backups already stored in dosya are kept.** In wp-admin, press **Disconnect** and read the equivalent site-level warning.
4. Choose **Cancel** to leave the connection intact, or press **Disconnect** to proceed.
5. In the web app, wait for **Site disconnected** and `_site_ is no longer connected. Its backups are kept.` The row is removed from the active list.
6. In wp-admin, the page reloads after the request. The connection card returns to **Store copies in dosya** with **Connect to dosya**.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="WordPress integration overview where a site's row menu exposes the Disconnect action." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The web route disconnects the named row; wp-admin can also disconnect itself using that site's own credential. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The API key is deleted, its cache entry is invalidated, and the connected-site record becomes disconnected. Existing remote backup records, files, folders, and locks are retained; local backups on the WordPress server are untouched.

The credential revocation cannot be undone. Reconnecting authorizes a newly issued site key and may create another uniquely suffixed site folder, so confirm the new **Folder** fact rather than assuming it reused the retained directory.

## Failure and recovery behavior

- **Disconnect failed** in Dosya means the server did not confirm revocation; keep the dialog state and retry after checking the connection.
- From wp-admin, the plug-in first tries to abort an open remote upload and disconnect remotely, then clears the locally stored key even if that remote call fails. If the page returns to **Store copies in dosya**, reconnect before expecting another off-site copy.
- If Dosya later reports **This site was disconnected from dosya.dev**, select **Connect again**. The backups already held by Dosya remain safe while uploads are paused.
- Disconnecting does not cancel WordPress's local schedule. Scheduled jobs can continue creating server-only backups until you set **Automatic backups** to **Off** on the **Schedule** tab.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
