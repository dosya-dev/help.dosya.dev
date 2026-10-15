---
{
  "articleId": "hc-wordpress-copy-detected-warning",
  "locale": "en",
  "revision": 3,
  "title": "Respond to a WordPress copy-detected warning",
  "summary": "Confirm whether the WordPress site was cloned or migrated and reconnect the intended installation. Verify that the legitimate site has its own recognized connection.",
  "category": "integrations",
  "articleSlug": "wordpress-copy-detected-warning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp" alt="Four-step workflow map for respond to a wordpress copy-detected warning, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for respond to a wordpress copy-detected warning: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/wordpress-copy-detected-warning-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify site row marked Copy detected, check the site.

## Steps: respond to a WordPress copy-detected warning

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate site row marked Copy detected, check the site and verify its name or identifying details.
3. Confirm whether the WordPress site was cloned or migrated and reconnect the intended installation.
4. Confirm that the legitimate site has its own recognized connection.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress backup integration overview showing site and backup status." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a staging site or verified restore plan before changing production backup behavior. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The legitimate site has its own recognized connection.

## Expected result

The controlled workflow completes and the legitimate site has its own recognized connection.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
