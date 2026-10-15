---
{
  "articleId": "hc-rclone-check-transfer",
  "locale": "en",
  "revision": 3,
  "title": "Verify an rclone transfer with checksums",
  "summary": "Run rclone check or the supported comparison mode and record mismatches. Verify that source and destination contents verify or specific differences are listed.",
  "category": "integrations",
  "articleSlug": "rclone-check-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone check transfer",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify an rclone transfer with checksums** in Dosya. The main action is to run rclone check or the supported comparison mode and record mismatches; the decisive check is whether source and destination contents verify or specific differences are listed.

<figure class="help-screenshot"><a href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for verify an rclone transfer with checksums, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for verify an rclone transfer with checksums: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify completed controlled transfer.

## Steps: verify an rclone transfer with checksums

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate completed controlled transfer and verify its name or identifying details.
3. Run rclone check or the supported comparison mode and record mismatches.
4. Confirm that source and destination contents verify or specific differences are listed.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya and rclone overview for scripted WebDAV transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Run dry-run first and use a disposable destination before any command that can delete files. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Source and destination contents verify or specific differences are listed.

## Expected result

The controlled workflow completes and source and destination contents verify or specific differences are listed.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
