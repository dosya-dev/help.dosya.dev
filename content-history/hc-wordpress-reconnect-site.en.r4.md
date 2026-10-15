---
{
  "articleId": "hc-wordpress-reconnect-site",
  "locale": "en",
  "revision": 4,
  "title": "Reconnect a disconnected WordPress site",
  "summary": "Open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace. Verify that the site returns to the connected-sites table.",
  "category": "integrations",
  "articleSlug": "wordpress-reconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
This guide covers **Reconnect a disconnected WordPress site** in Dosya. The main action is to open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace; the decisive check is whether the site returns to the connected-sites table.

<figure class="help-screenshot"><a href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" alt="Workflow for “Reconnect a disconnected WordPress site”: open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace; the site returns to the connected-sites table." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Reconnect a disconnected WordPress site”: open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace; the site returns to the connected-sites table. <a href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress and locate the site that no longer shows an active connection.
- Confirm the active account and workspace, then identify site that no longer shows an active connection.

## Steps: reconnect a disconnected WordPress site

1. Confirm the account and workspace in WordPress wp-admin and Integrations > WordPress when reviewing the site that no longer shows an active connection.
2. Locate site that no longer shows an active connection and verify its name or identifying details.
3. Open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace.
4. Confirm that the site returns to the connected-sites table.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Reconnect a disconnected WordPress site”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Reconnect a disconnected WordPress site”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Record the site URL, backup time, state, and nonsecret error before changing the connection.

## Verify the result

After completing the steps, check the expected result: The site returns to the connected-sites table.

## Expected result

The controlled workflow completes and the site returns to the connected-sites table.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the site that no longer shows an active connection, check the active workspace, your role and the client version.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
