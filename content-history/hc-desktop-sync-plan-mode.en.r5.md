---
{
  "articleId": "hc-desktop-sync-plan-mode",
  "locale": "en",
  "revision": 5,
  "title": "Choose a desktop sync mode for a folder",
  "summary": "Choose among Dosya\u2019s five desktop sync modes by deciding which side may change, which deletions propagate, and how Full Sync resolves conflicts.",
  "category": "desktop",
  "articleSlug": "desktop-sync-plan-mode",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/types.ts, and apps/desktop/src/main/sync/planner.ts; destructive mode effects were not exercised in production.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync plan mode",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A sync mode decides which changes cross the boundary and whether a deletion on one side may remove a file on the other. Choose it from the intended source of truth before selecting **Start syncing**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14.webp" alt="Four-step map for sync modes: choose who originates changes, compare upload-mode deletions, compare download-mode deletions, then set Full Sync conflict handling." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the source of changes, deletion rules, and Full Sync conflict policy to the folder’s intended ownership. <a class="workflow-map-full" href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-plan-mode-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

In **Sync**, select **Add sync folder**, then choose the cloud and local folders. Dosya currently exposes all five modes in the desktop wizard; no separate subscription-plan switch controls this list.

- **Full Sync** mirrors changes and deletions in both directions.
- **Push to Cloud** sends local changes and local deletions; cloud changes are ignored locally.
- **Protect & Upload** uploads local files but never deletes cloud content.
- **Pull from Cloud** downloads cloud changes and applies cloud deletions locally; local changes are ignored.
- **Save to Device** downloads cloud files but never deletes local content.

## Steps

1. Decide whether the local folder, the cloud folder, or both locations are allowed to originate changes.
2. Decide separately whether a local deletion may remove cloud data and whether a cloud deletion may remove local data.
3. Choose **Protect & Upload** for a local source that must not delete cloud files, or **Push to Cloud** when local deletions should propagate.
4. Choose **Save to Device** for a protected local copy, or **Pull from Cloud** when cloud deletions should also clear the device.
5. Choose **Full Sync** for two-way ownership, then select **Keep both copies** or **Last write wins** for same-path conflicts.
6. Start desktop sync with a disposable file and deletion test, then verify the mode’s transfer direction and allowed deletion behavior.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Reference for “Choose a desktop sync mode for a folder”: Dosya desktop sync mode selection for a local folder and workspace destination." width="512" height="676" loading="lazy" decoding="async" /></a><figcaption>Reference for “Choose a desktop sync mode for a folder”: Dosya desktop sync mode selection for a local folder and workspace destination. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

One-way modes filter transfer and deletion operations, but a same-path conflict can still require attention. **Protect & Upload** is the wizard default and provides the least destructive cloud behavior for a new pair.

## Expected result

The sample change travels only in the direction allowed by the selected mode. A deletion affects the opposite side only when that mode explicitly includes deletion propagation.

If the test behaves differently, pause or remove the pair before adding more data. Removing the mapping stops future sync and leaves existing local and cloud files in place.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
