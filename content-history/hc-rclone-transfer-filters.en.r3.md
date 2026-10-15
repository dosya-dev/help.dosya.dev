---
{
  "articleId": "hc-rclone-transfer-filters",
  "locale": "en",
  "revision": 3,
  "title": "Filter files in an rclone transfer",
  "summary": "Apply include or exclude rules in dry-run and inspect the candidate list. Verify that only intended paths are transferred.",
  "category": "integrations",
  "articleSlug": "rclone-transfer-filters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone transfer filters",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Filter files in an rclone transfer** in Dosya. The main action is to apply include or exclude rules in dry-run and inspect the candidate list; the decisive check is whether only intended paths are transferred.

<figure class="help-screenshot"><a href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp" alt="Four-step workflow map for filter files in an rclone transfer, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for filter files in an rclone transfer: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/rclone-transfer-filters-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify source tree with known include and exclude examples.

## Steps: filter files in an rclone transfer

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate source tree with known include and exclude examples and verify its name or identifying details.
3. Apply include or exclude rules in dry-run and inspect the candidate list.
4. Confirm that only intended paths are transferred.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya and rclone overview for scripted WebDAV transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Run dry-run first and use a disposable destination before any command that can delete files. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Only intended paths are transferred.

## Expected result

The controlled workflow completes and only intended paths are transferred.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
