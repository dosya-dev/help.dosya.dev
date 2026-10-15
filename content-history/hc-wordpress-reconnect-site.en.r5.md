---
{
  "articleId": "hc-wordpress-reconnect-site",
  "locale": "en",
  "revision": 5,
  "title": "Reconnect a disconnected WordPress site",
  "summary": "Reconnect a WordPress site after revocation or lost local keys, preserve existing cloud backups, and verify a fresh confined upload path safely.",
  "category": "integrations",
  "articleSlug": "wordpress-reconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/src/Wp/Admin/ViewModel/ConnectCard.php, apps/wordpress/src/Wp/Connector.php, apps/api/src/pages/api/wp/connect/authorize.ts, apps/api/src/pages/api/wp/connect/exchange.ts, apps/api/src/pages/api/wp/sites/[id]/disconnect.ts. Production behavior for “Reconnect a disconnected WordPress site” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress reconnect site",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Reconnection is required when the saved site key was revoked or can no longer be decrypted after WordPress security keys changed. Existing Dosya backups remain safe, but uploads pause until a new approval completes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" alt="Four panels show identifying an unreadable or revoked key, approving Connect again, recording the fresh site folder, and confirming one manual backup reaches Dosya." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show identifying an unreadable or revoked key, approving Connect again, recording the fresh site folder, and confirming one manual backup reaches Dosya. <a class="workflow-map-full" href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **dosya Backup → dosya** and identify the state. **Connection to dosya lost** means local security keys changed; **This site was disconnected from dosya.dev** means the remote key was revoked.
2. Record the old folder, last upload, retention, and protection facts if they are still visible. Do not delete old backup files while recovering access.
3. Choose **Connect again**, sign in to the intended Dosya account, and select **Save backups in workspace** for the correct workspace.
4. Choose **Allow** once and return promptly. The authorization code is single-use and expires in 5 minutes; the WordPress pending request expires after 15 minutes.
5. Confirm the new **Connected to dosya** card. The flow creates a new site credential and may create a uniquely suffixed site folder, so do not assume it reattaches the earlier remote chain.
6. Start one manual backup and wait for **dosya · not verified** or **dosya · verified**. Use **Open in dosya ↗** to confirm the new folder before changing the retained old copy.

If the browser returns **This connect link expired or was already used. Start again.**, begin a new approval from wp-admin. Do not reuse the URL or a code from a different browser session.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Reconnect a disconnected WordPress site”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Reconnect a disconnected WordPress site”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Uploads resume through a fresh credential confined to its site folder. Previously stored backups remain in Dosya and are not deleted by disconnect or reconnect, while the new connection starts from its own current full backup.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
