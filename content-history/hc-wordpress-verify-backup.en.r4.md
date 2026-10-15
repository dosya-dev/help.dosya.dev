---
{
  "articleId": "hc-wordpress-verify-backup",
  "locale": "en",
  "revision": 4,
  "title": "Verify a completed WordPress backup",
  "summary": "Wait for Uploaded or Verified, open the site folder, and inspect expected backup items. Verify that the backup is stored and its state no longer reports running or failed.",
  "category": "integrations",
  "articleSlug": "wordpress-verify-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-wordpress-backups",
    "hc-wordpress-review-backup-status"
  ],
  "keywords": [
    "wordpress verify backup",
    "WordPress backup details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify a completed WordPress backup** in Dosya. The main action is to wait for Uploaded or Verified, open the site folder, and inspect expected backup items; the decisive check is whether the backup is stored and its state no longer reports running or failed.

<figure class="help-screenshot"><a href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp"><img src="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp" alt="Workflow for “Verify a completed WordPress backup”: wait for Uploaded or Verified, open the site folder, and inspect expected backup items; the backup is stored and its state no longer reports running or failed." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify a completed WordPress backup”: wait for Uploaded or Verified, open the site folder, and inspect expected backup items; the backup is stored and its state no longer reports running or failed. <a href="/screenshots/wordpress-verify-backup-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open WordPress wp-admin and Integrations > WordPress and locate the newest backup for a controlled site.
- Confirm the active account and workspace, then identify newest backup for a controlled site.

## Steps: verify a completed WordPress backup

1. Confirm the account and workspace in WordPress wp-admin and Integrations > WordPress when reviewing the newest backup for a controlled site.
2. Locate newest backup for a controlled site and verify its name or identifying details.
3. Wait for Uploaded or Verified, open the site folder, and inspect expected backup items.
4. Confirm that the backup is stored and its state no longer reports running or failed.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Verify a completed WordPress backup”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a completed WordPress backup”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a staging site or verified restore plan before changing production backup behavior.

## Verify the result

After completing the steps, check the expected result: The backup is stored and its state no longer reports running or failed.

## Expected result

The controlled workflow completes and the backup is stored and its state no longer reports running or failed.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the newest backup for a controlled site, check the active workspace, your role and the client version.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
