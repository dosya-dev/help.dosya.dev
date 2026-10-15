---
{
  "articleId": "hc-rclone-sync-dry-run",
  "locale": "en",
  "revision": 3,
  "title": "Run an rclone sync dry-run",
  "summary": "Run sync with --dry-run and review every planned copy, update, and deletion. Verify that the plan matches the intended one-way mirror.",
  "category": "integrations",
  "articleSlug": "rclone-sync-dry-run",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone sync dry run",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Run an rclone sync dry-run** in Dosya. The main action is to run sync with --dry-run and review every planned copy, update, and deletion; the decisive check is whether the plan matches the intended one-way mirror.

<figure class="help-screenshot"><a href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp" alt="Four-step workflow map for run an rclone sync dry-run, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for run an rclone sync dry-run: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/rclone-sync-dry-run-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify small source and disposable destination.

## Steps: run an rclone sync dry-run

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate small source and disposable destination and verify its name or identifying details.
3. Run sync with --dry-run and review every planned copy, update, and deletion.
4. Confirm that the plan matches the intended one-way mirror.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya and rclone overview for scripted WebDAV transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Run dry-run first and use a disposable destination before any command that can delete files. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The plan matches the intended one-way mirror.

## Expected result

The controlled workflow completes and the plan matches the intended one-way mirror.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
