---
{
  "articleId": "hc-wordpress-status-load-error",
  "locale": "en",
  "revision": 3,
  "title": "Troubleshoot WordPress backup status that will not load",
  "summary": "Refresh once, verify account and workspace, and check whether the site or backups request alone failed. Verify that site status loads or the failing request is isolated for support.",
  "category": "integrations",
  "articleSlug": "wordpress-status-load-error",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress status load error",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Troubleshoot WordPress backup status that will not load** in Dosya. The main action is to refresh once, verify account and workspace, and check whether the site or backups request alone failed; the decisive check is whether site status loads or the failing request is isolated for support.

<figure class="help-screenshot"><a href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp" alt="Four-step workflow map for troubleshoot wordpress backup status that will not load, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for troubleshoot wordpress backup status that will not load: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/wordpress-status-load-error-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify WordPress integration page showing Unknown or a load error.

## Steps: troubleshoot WordPress backup status that will not load

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate WordPress integration page showing Unknown or a load error and verify its name or identifying details.
3. Refresh once, verify account and workspace, and check whether the site or backups request alone failed.
4. Confirm that site status loads or the failing request is isolated for support.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress integration overview used to review site connection and backup failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Record the site URL, backup time, state, and nonsecret error before changing the connection. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Site status loads or the failing request is isolated for support.

## Expected result

The controlled workflow completes and site status loads or the failing request is isolated for support.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
