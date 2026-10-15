---
{
  "articleId": "hc-wordpress-site-limit",
  "locale": "en",
  "revision": 3,
  "title": "Fix a WordPress site limit error",
  "summary": "Compare connected sites with the plan maximum and disconnect an unused test site or change plan capacity. Verify that the intended site can be connected within the available limit.",
  "category": "integrations",
  "articleSlug": "wordpress-site-limit",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress site limit",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix a WordPress site limit error** in Dosya. The main action is to compare connected sites with the plan maximum and disconnect an unused test site or change plan capacity; the decisive check is whether the intended site can be connected within the available limit.

<figure class="help-screenshot"><a href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix a wordpress site limit error, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix a wordpress site limit error: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/wordpress-site-limit-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify plan line and site count on Integrations > WordPress.

## Steps: fix a WordPress site limit error

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate plan line and site count on Integrations > WordPress and verify its name or identifying details.
3. Compare connected sites with the plan maximum and disconnect an unused test site or change plan capacity.
4. Confirm that the intended site can be connected within the available limit.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress integration overview used to review site connection and backup failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Record the site URL, backup time, state, and nonsecret error before changing the connection. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The intended site can be connected within the available limit.

## Expected result

The controlled workflow completes and the intended site can be connected within the available limit.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
