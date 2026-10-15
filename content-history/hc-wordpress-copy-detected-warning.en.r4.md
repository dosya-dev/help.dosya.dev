---
{
  "articleId": "hc-wordpress-copy-detected-warning",
  "locale": "en",
  "revision": 4,
  "title": "Respond to a WordPress copy-detected warning",
  "summary": "Confirm whether the WordPress site was cloned or migrated and reconnect the intended installation. Verify that the legitimate site has its own recognized connection.",
  "category": "integrations",
  "articleSlug": "wordpress-copy-detected-warning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress copy detected warning",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Respond to a WordPress copy-detected warning** in Dosya. The main action is to confirm whether the WordPress site was cloned or migrated and reconnect the intended installation; the decisive check is whether the legitimate site has its own recognized connection.

<figure class="help-screenshot"><a href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" alt="Workflow for “Respond to a WordPress copy-detected warning”: confirm whether the WordPress site was cloned or migrated and reconnect the intended installation; the legitimate site has its own recognized connection." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Respond to a WordPress copy-detected warning”: confirm whether the WordPress site was cloned or migrated and reconnect the intended installation; the legitimate site has its own recognized connection. <a href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress and locate the site row marked “Copy detected, check the site”.
- Confirm the active account and workspace, then identify site row marked Copy detected, check the site.

## Steps: respond to a WordPress copy-detected warning

1. Confirm the account and workspace in WordPress wp-admin and Integrations > WordPress when reviewing the site row marked “Copy detected, check the site”.
2. Locate site row marked Copy detected, check the site and verify its name or identifying details.
3. Confirm whether the WordPress site was cloned or migrated and reconnect the intended installation.
4. Confirm that the legitimate site has its own recognized connection.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Respond to a WordPress copy-detected warning”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Respond to a WordPress copy-detected warning”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a staging site or verified restore plan before changing production backup behavior.

## Verify the result

After completing the steps, check the expected result: The legitimate site has its own recognized connection.

## Expected result

The controlled workflow completes and the legitimate site has its own recognized connection.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the site row marked “Copy detected, check the site”, check the active workspace, your role and the client version.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
