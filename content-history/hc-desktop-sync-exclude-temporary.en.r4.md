---
{
  "articleId": "hc-desktop-sync-exclude-temporary",
  "locale": "en",
  "revision": 4,
  "title": "Exclude temporary files from desktop sync",
  "summary": "Add the narrow exclusion, save, and verify the path no longer enters the pending queue. Verify that temporary data remains outside the remote workspace.",
  "category": "desktop",
  "articleSlug": "desktop-sync-exclude-temporary",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync exclude temporary",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
This guide covers **Exclude temporary files from desktop sync** in Dosya. The main action is to add the narrow exclusion, save, and verify the path no longer enters the pending queue; the decisive check is whether temporary data remains outside the remote workspace.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" alt="Workflow for “Exclude temporary files from desktop sync”: add the narrow exclusion, save, and verify the path no longer enters the pending queue; temporary data remains outside the remote workspace." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Exclude temporary files from desktop sync”: add the narrow exclusion, save, and verify the path no longer enters the pending queue; temporary data remains outside the remote workspace. <a href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Sync settings in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify known cache, build, or temporary path inside a sync root.

## Steps: exclude temporary files from desktop sync

1. Open Sync settings in the Dosya desktop app and confirm the active account and workspace.
2. Locate known cache, build, or temporary path inside a sync root and verify its name or identifying details.
3. Add the narrow exclusion, save, and verify the path no longer enters the pending queue.
4. Confirm that temporary data remains outside the remote workspace.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Reference for “Exclude temporary files from desktop sync”: Dosya desktop sync mode selection for a local folder and workspace destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Exclude temporary files from desktop sync”: Dosya desktop sync mode selection for a local folder and workspace destination. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Plan the first sync with a small folder and enough local and workspace storage.

## Verify the result

After completing the steps, check the expected result: Temporary data remains outside the remote workspace.

## Expected result

The controlled workflow completes and temporary data remains outside the remote workspace.

## Troubleshooting

**The expected control is missing.** Return to Sync settings in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
