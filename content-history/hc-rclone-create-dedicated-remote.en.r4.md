---
{
  "articleId": "hc-rclone-create-dedicated-remote",
  "locale": "en",
  "revision": 4,
  "title": "Create a dedicated rclone remote",
  "summary": "Configure the documented endpoint and credential under a task-specific name, then list one disposable path. Verify that the new remote reaches only the intended Dosya scope.",
  "category": "integrations",
  "articleSlug": "rclone-create-dedicated-remote",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone create dedicated remote",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Create a dedicated rclone remote** in Dosya. The main action is to configure the documented endpoint and credential under a task-specific name, then list one disposable path; the decisive check is whether the new remote reaches only the intended Dosya scope.

<figure class="help-screenshot"><a href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp" alt="Workflow for “Create a dedicated rclone remote”: configure the documented endpoint and credential under a task-specific name, then list one disposable path; the new remote reaches only the intended Dosya scope." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Create a dedicated rclone remote”: configure the documented endpoint and credential under a task-specific name, then list one disposable path; the new remote reaches only the intended Dosya scope. <a href="/screenshots/rclone-create-dedicated-remote-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal with an rclone remote for Dosya in the current released client.
- Confirm the active account and workspace, then identify restricted Dosya credential and unique rclone remote name.

## Steps: create a dedicated rclone remote

1. Open a terminal with an rclone remote for Dosya and confirm the active account and workspace.
2. Locate restricted Dosya credential and unique rclone remote name and verify its name or identifying details.
3. Configure the documented endpoint and credential under a task-specific name, then list one disposable path.
4. Confirm that the new remote reaches only the intended Dosya scope.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Create a dedicated rclone remote”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a dedicated rclone remote”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a dedicated restricted remote, a dry run, and durable logs for scheduled jobs.

## Verify the result

After completing the steps, check the expected result: The new remote reaches only the intended Dosya scope.

## Expected result

The controlled workflow completes and the new remote reaches only the intended Dosya scope.

## Troubleshooting

**The expected control is missing.** Return to a terminal with an rclone remote for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
