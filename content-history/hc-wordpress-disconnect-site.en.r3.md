---
{
  "articleId": "hc-wordpress-disconnect-site",
  "locale": "en",
  "revision": 3,
  "title": "Disconnect a WordPress site safely",
  "summary": "Open its actions menu, choose Disconnect, and confirm. Verify that the site connection is removed while existing backups are kept.",
  "category": "integrations",
  "articleSlug": "wordpress-disconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress disconnect site",
    "WordPress backup operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Disconnect a WordPress site safely** in Dosya. The main action is to open its actions menu, choose Disconnect, and confirm; the decisive check is whether the site connection is removed while existing backups are kept.

<figure class="help-screenshot"><a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp" alt="Four-step workflow map for disconnect a wordpress site safely, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for disconnect a wordpress site safely: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify site that should no longer upload backups.

## Steps: disconnect a WordPress site safely

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate site that should no longer upload backups and verify its name or identifying details.
3. Open its actions menu, choose Disconnect, and confirm.
4. Confirm that the site connection is removed while existing backups are kept.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress backup integration overview for connecting sites and reviewing stored backups." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Install the plug-in only from the official Dosya download and connect it through wp-admin. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The site connection is removed while existing backups are kept.

## Expected result

The controlled workflow completes and the site connection is removed while existing backups are kept.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
