---
{
  "articleId": "hc-rclone-verify-exit-status",
  "locale": "en",
  "revision": 4,
  "title": "Verify an rclone automation exit status",
  "summary": "Capture the process exit code, inspect the final summary and errors, and compare representative destination files before marking success. Verify that automation reports success only when the transfer and verification both pass.",
  "category": "integrations",
  "articleSlug": "rclone-verify-exit-status",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone verify exit status",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify an rclone automation exit status** in Dosya. The main action is to capture the process exit code, inspect the final summary and errors, and compare representative destination files before marking success; the decisive check is whether automation reports success only when the transfer and verification both pass.

<figure class="help-screenshot"><a href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" alt="Workflow for “Verify an rclone automation exit status”: capture the process exit code, inspect the final summary and errors, and compare representative destination files before marking success; automation reports success only when the transfer and verification both pass." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify an rclone automation exit status”: capture the process exit code, inspect the final summary and errors, and compare representative destination files before marking success; automation reports success only when the transfer and verification both pass. <a href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal with an rclone remote for Dosya in the current released client.
- Confirm the active account and workspace, then identify completed automated rclone run.

## Steps: verify an rclone automation exit status

1. Open a terminal with an rclone remote for Dosya and confirm the active account and workspace.
2. Locate completed automated rclone run and verify its name or identifying details.
3. Capture the process exit code, inspect the final summary and errors, and compare representative destination files before marking success.
4. Confirm that automation reports success only when the transfer and verification both pass.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Verify an rclone automation exit status”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify an rclone automation exit status”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a dedicated restricted remote, a dry run, and durable logs for scheduled jobs.

## Verify the result

After completing the steps, check the expected result: Automation reports success only when the transfer and verification both pass.

## Expected result

The controlled workflow completes and automation reports success only when the transfer and verification both pass.

## Troubleshooting

**The expected control is missing.** Return to a terminal with an rclone remote for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
