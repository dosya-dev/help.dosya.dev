---
{
  "articleId": "hc-wordpress-disconnect-site",
  "locale": "en",
  "revision": 4,
  "title": "Disconnect a WordPress site safely",
  "summary": "Open its actions menu, choose Disconnect, and confirm. Verify that the site connection is removed while existing backups are kept.",
  "category": "integrations",
  "articleSlug": "wordpress-disconnect-site",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp" alt="Workflow for “Disconnect a WordPress site safely”: open its actions menu, choose Disconnect, and confirm; the site connection is removed while existing backups are kept." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Disconnect a WordPress site safely”: open its actions menu, choose Disconnect, and confirm; the site connection is removed while existing backups are kept. <a href="/screenshots/wordpress-disconnect-site-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress and locate the site that should no longer upload backups.
- Confirm the active account and workspace, then identify site that should no longer upload backups.

## Steps: disconnect a WordPress site safely

1. Confirm the account and workspace in WordPress wp-admin and Integrations > WordPress when reviewing the site that should no longer upload backups.
2. Locate site that should no longer upload backups and verify its name or identifying details.
3. Open its actions menu, choose Disconnect, and confirm.
4. Confirm that the site connection is removed while existing backups are kept.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Disconnect a WordPress site safely”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Disconnect a WordPress site safely”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The site connection is removed while existing backups are kept.

## Expected result

The controlled workflow completes and the site connection is removed while existing backups are kept.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the site that should no longer upload backups, check the active workspace, your role and the client version.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage WordPress backups](/integrations/wordpress-backups)
