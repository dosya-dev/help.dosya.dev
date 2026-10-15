---
{
  "articleId": "hc-desktop-first-sync",
  "locale": "en",
  "revision": 6,
  "title": "Review a first-sync plan",
  "summary": "Choose folders, direction, conflict and exclusion rules before the first desktop sync, then verify the immediate comparison without silent overwrites.",
  "category": "desktop",
  "articleSlug": "desktop-first-sync",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the wizard and first comparison in `apps/desktop/src/renderer/pages/SyncPage.tsx`, `main/sync/index.ts`, `first-sync.test.ts`, `planner.ts`, and `deletion-guard.ts` on 2026-10-14. Production was not exercised.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop first sync",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
The desktop wizard lets you review folders, direction, conflict handling and exclusions before a first run. It does **not** show a file-by-file operation preview. Selecting **Start syncing** creates an enabled pairing and begins the comparison immediately.

<figure class="help-screenshot">
  <a class="workflow-map-link" href="/screenshots/desktop-first-sync-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-first-sync-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-first-sync-workflow-map-2026-10-14-dark.webp">
    <picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-first-sync-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-first-sync-workflow-map-2026-10-14.webp" alt="First-sync workflow map for choosing local and cloud folders, reviewing sync mode and exclusions, and starting comparison." width="1200" height="675" loading="lazy" decoding="async" /></picture>
  </a>
  <figcaption>Treat the wizard choices as the first-sync plan: the operation begins as soon as Start syncing is selected. <a class="workflow-map-full" href="/screenshots/desktop-first-sync-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-first-sync-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-first-sync-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Keep an independent copy of important files and test with small folders first.
- Compare the existing local and cloud contents. Same names with different bytes can become conflicts; a matching name and size can be adopted as the same item during initial state building.
- Ensure the signed-in workspace member can access the cloud destination and perform the uploads, downloads or deletions required by the selected mode.
- Decide how deletions should behave. **Full Sync** applies them both ways; **Push to Cloud** applies local deletion remotely; **Pull from Cloud** applies cloud deletion locally. **Protect & Upload** keeps cloud copies, and **Save to Device** keeps local copies.

## Steps

1. Open **Sync → Add sync folder**. In **Folders**, choose a **Cloud folder** or **Root (entire workspace)**, then set **Local folder** with **Browse**. Desktop, Documents, Pictures and Downloads can appear as quick choices when the operating system provides them.
2. Select **Continue** and choose one of five modes. The initial selection is **Protect & Upload**, which uploads local changes and never deletes a cloud copy because its local source disappeared.
3. If you select **Full Sync**, choose **Keep both copies** or **Last write wins** under **Conflict resolution**. Keep both is the default and preserves competing content as separate copies; last-write selection can replace the other side's version.
4. Continue to **Advanced** and review the exclusion patterns. Virtual filesystems `/proc`, `/sys`, `/dev`, and `/run` are always skipped even if you change the visible list.
5. Read the size estimate. At **50,000 files** or when counting is truncated, the wizard warns **This folder contains about … files.** or **This folder contains more than … files.** It also says large folders can take many hours and use substantial memory and bandwidth. Select **Sync it anyway** before the final button becomes available.
6. Recheck both destinations and the mode, then select **Start syncing** once. Success shows **Sync folder added**. A creation error reports its message or the fallback **Failed to add sync pair**.
7. Watch Overview and Activity. The first Full Sync can pass through **Connecting to server...**, **Comparing with server...**, **Scanning local files...**, and **Checking for changes...** before visible transfer progress. Do not interpret comparison time as a stall unless Activity reports no progress.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Desktop Sync Activity showing the operation messages used to follow an initial folder comparison." width="1100" height="800" loading="lazy" decoding="async" /></a>
  <figcaption>Activity records initial comparison and transfer phases; verify the destination after the pairing becomes idle. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

During an empty-state first comparison, cloud-only content downloads in download-capable modes and local-only content uploads in upload-capable modes. Tests pin that pre-existing content on only one side is not silently deleted, and that different content colliding at the same path becomes a conflict instead of an automatic overwrite.

## Expected result

The new row shows the chosen cloud folder, local path and **Mode**. Eligible files reach the destinations permitted by that mode, while exclusions and conflicts remain visible for review. The initial poll interval is 30 seconds, but the first comparison starts on creation rather than waiting for that interval.

For deletion-capable upload modes, a safety valve pauses a suspicious local disappearance when more than 5 files and more than half of a pairing with over 10 tracked files would be removed. Choose **Keep the cloud copies** to leave the server unchanged or authorize the displayed cloud deletion, which moves those items to cloud trash. Cloud-driven local deletion tries the operating-system trash first and can permanently unlink when trash is unavailable.

## Troubleshooting

**Start syncing is disabled.** Choose both folders and a mode, complete the prior wizard steps, and acknowledge **Sync it anyway** when the large-folder warning is present.

**The row remains on comparison.** Check Activity for the current count. Inactivity must exceed 30 seconds, and the engine evaluates that condition on its next 30-second recovery tick, so the first **Still working:** entry normally appears about 30–60 seconds after the last progress. Keep the app awake and connected; large trees can legitimately take hours.

**A collision appears.** Compare both copies before resolving it. Keep both preserves content for manual review; last-write behavior may not select the version you intended.

**The destination is wrong.** Pause the row immediately. **Remove** stops the relationship without deleting existing local or cloud files, but recreating it starts a fresh comparison and does not undo transfers already completed.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
