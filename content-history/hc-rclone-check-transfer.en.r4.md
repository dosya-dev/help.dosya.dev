---
{
  "articleId": "hc-rclone-check-transfer",
  "locale": "en",
  "revision": 4,
  "title": "Verify an rclone transfer with checksums",
  "summary": "Run rclone check or the supported comparison mode and record mismatches. Verify that source and destination contents verify or specific differences are listed.",
  "category": "integrations",
  "articleSlug": "rclone-check-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" alt="Workflow for “Verify an rclone transfer with checksums”: run rclone check or the supported comparison mode and record mismatches; source and destination contents verify or specific differences are listed." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify an rclone transfer with checksums”: run rclone check or the supported comparison mode and record mismatches; source and destination contents verify or specific differences are listed. <a href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify completed controlled transfer.

## Steps: verify an rclone transfer with checksums

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate completed controlled transfer and verify its name or identifying details.
3. Run rclone check or the supported comparison mode and record mismatches.
4. Confirm that source and destination contents verify or specific differences are listed.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Verify an rclone transfer with checksums”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify an rclone transfer with checksums”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Run dry-run first and use a disposable destination before any command that can delete files.

## Verify the result

After completing the steps, check the expected result: Source and destination contents verify or specific differences are listed.

## Expected result

The controlled workflow completes and source and destination contents verify or specific differences are listed.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
