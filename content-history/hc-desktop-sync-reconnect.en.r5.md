---
{
  "articleId": "hc-desktop-sync-reconnect",
  "locale": "en",
  "revision": 5,
  "title": "Reconnect sync after sleep or network change",
  "summary": "Wake the computer or change networks and wait for reconnect, then verify that queued changes resume after connectivity returns.",
  "category": "desktop",
  "articleSlug": "desktop-sync-reconnect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop sync reconnect",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to reconnect sync after sleep or network change in the intended account or workspace.

Check the workspace, local path and sync state associated with an existing sync pair. Use an existing sync pair to distinguish device files from cloud files before a broader change.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" alt="Workflow for “Reconnect sync after sleep or network change”: wake the computer or change networks and wait for reconnect; verify that queued changes resume after connectivity returns." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Reconnect sync after sleep or network change”: wake the computer or change networks and wait for reconnect; verify that queued changes resume after connectivity returns. <a class="workflow-map-full" href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Desktop Sync activity in the current released Dosya client.
- Confirm the active account and workspace, then identify an existing sync pair.

## Steps: reconnect sync after sleep or network change

1. Open Desktop Sync activity and confirm the active workspace.
2. Select an existing sync pair and check its name or identifying details.
3. Wake the computer or change networks and wait for reconnect.
4. Verify that queued changes resume after connectivity returns.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Reference for “Reconnect sync after sleep or network change”: Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Reconnect sync after sleep or network change”: Verified Dosya desktop Sync Activity view showing transfer and connection state. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a small test pair and let its current activity settle before changing advanced sync behavior.

## Verify the result

Verify that queued changes resume after connectivity returns.

## Expected result

The workflow completes for the controlled test and queued changes resume after connectivity returns.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync activity, confirm the active workspace and check that your role permits the action.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
