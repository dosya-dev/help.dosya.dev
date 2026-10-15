---
{
  "articleId": "hc-rclone-copy-vs-sync",
  "locale": "en",
  "revision": 4,
  "title": "Choose between rclone copy and sync",
  "summary": "Compare commands and choose copy to preserve extra destination files or sync for an exact mirror. Verify that the selected command has the intended deletion semantics.",
  "category": "integrations",
  "articleSlug": "rclone-copy-vs-sync",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone copy vs sync",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Choose between rclone copy and sync** in Dosya. The main action is to compare commands and choose copy to preserve extra destination files or sync for an exact mirror; the decisive check is whether the selected command has the intended deletion semantics.

<figure class="help-screenshot"><a href="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp" alt="Workflow for “Choose between rclone copy and sync”: compare commands and choose copy to preserve extra destination files or sync for an exact mirror; the selected command has the intended deletion semantics." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Choose between rclone copy and sync”: compare commands and choose copy to preserve extra destination files or sync for an exact mirror; the selected command has the intended deletion semantics. <a href="/screenshots/rclone-copy-vs-sync-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open rclone configured for Dosya WebDAV in the current released client.
- Confirm the active account and workspace, then identify transfer whose deletion behavior matters.

## Steps: choose between rclone copy and sync

1. Open rclone configured for Dosya WebDAV and confirm the active account and workspace.
2. Locate transfer whose deletion behavior matters and verify its name or identifying details.
3. Compare commands and choose copy to preserve extra destination files or sync for an exact mirror.
4. Confirm that the selected command has the intended deletion semantics.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Choose between rclone copy and sync”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Choose between rclone copy and sync”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Run dry-run first and use a disposable destination before any command that can delete files.

## Verify the result

After completing the steps, check the expected result: The selected command has the intended deletion semantics.

## Expected result

The controlled workflow completes and the selected command has the intended deletion semantics.

## Troubleshooting

**The expected control is missing.** Return to rclone configured for Dosya WebDAV, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
