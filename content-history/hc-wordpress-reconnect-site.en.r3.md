---
{
  "articleId": "hc-wordpress-reconnect-site",
  "locale": "en",
  "revision": 3,
  "title": "Reconnect a disconnected WordPress site",
  "summary": "Open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace. Verify that the site returns to the connected-sites table.",
  "category": "integrations",
  "articleSlug": "wordpress-reconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp" alt="Four-step workflow map for reconnect a disconnected wordpress site, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for reconnect a disconnected wordpress site: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/wordpress-reconnect-site-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify site that no longer shows an active connection.

## Steps: reconnect a disconnected WordPress site

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate site that no longer shows an active connection and verify its name or identifying details.
3. Open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace.
4. Confirm that the site returns to the connected-sites table.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress integration overview used to review site connection and backup failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Record the site URL, backup time, state, and nonsecret error before changing the connection. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The site returns to the connected-sites table.

## Expected result

The controlled workflow completes and the site returns to the connected-sites table.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
