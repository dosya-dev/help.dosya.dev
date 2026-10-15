---
{
  "articleId": "hc-desktop-sync-check-storage",
  "locale": "en",
  "revision": 5,
  "title": "Check storage before starting desktop sync",
  "summary": "Check cloud capacity, large-folder count warnings, and the desktop download guard before starting a storage-intensive sync pair with fewer surprises.",
  "category": "desktop",
  "articleSlug": "desktop-sync-check-storage",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/desktop/src/renderer/pages/DashboardPage.tsx, apps/desktop/src/renderer/components/layout/Sidebar.tsx, apps/desktop/src/main/sync/folder-estimate.ts, apps/desktop/src/renderer/pages/SyncPage.tsx, and apps/desktop/src/main/sync/index.ts. Production quota and disk limits were not tested.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync check storage",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya exposes cloud usage and a large-folder entry count, but it does not calculate one combined local-size, disk-free, and workspace-headroom forecast. Check each available signal before starting a large pair.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14.webp" alt="Four panels show Dashboard cloud usage, the count-only Add sync folder estimate, the 50000-file warning, and the full download batch plus 256 MiB disk guard." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Check cloud capacity and estimate bounds, then reserve the combined planned download bytes plus 256 MiB before writes begin. <a class="workflow-map-full" href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-check-storage-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Select the destination workspace and decide whether the pair uploads, downloads, or works in both directions.
- Use the operating system’s storage view when you need the volume’s current free bytes; the Add sync flow does not display that number.

## Steps

1. Open **Dashboard** and read **Storage used**, its percentage, and `_used_ of _total_`. Include the displayed trash bytes because trashed workspace items still consume cloud capacity.
2. Open the workspace switcher as a second capacity check. A workspace row with storage data reports `_free_ free of _total_`; absence of that subline is not evidence of unlimited space.
3. In **Sync**, choose **Add sync folder**, select the cloud and local folders, and continue to **Advanced**. Dosya estimates file and folder counts without calculating their byte size.
4. Interpret the estimate bounds: the breadth-first read stops after five seconds or 200,000 entries, skips unreadable directories and symlinks, and marks the result truncated when its budget ends.
5. When the folder has at least 50,000 files or the estimate is truncated, read the many-hours/memory/bandwidth warning and enable **Sync it anyway** only after checking the source independently.
6. For a planned download batch, Dosya sums every new or updated remote file before writing bytes; a pull preflight likewise sums every new or changed file in the remote snapshot. Keep that combined total plus 256 MiB free or the pair records `Low disk space: _free_ MB free, need ~_required_ MB. Free up space to continue syncing.`

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Desktop sync mode selection used to determine whether the planned pair will consume cloud storage, local disk, or both." width="512" height="676" loading="lazy" decoding="async" /></a><figcaption>The chosen sync direction determines which capacity matters and whether Dosya’s local download guard applies. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The pair starts only after any large-folder acknowledgement, and the destination workspace has enough visible cloud headroom for expected uploads. Upload-only work intentionally has no local free-space guard.

The guard runs once for the whole planned download set or pull snapshot, before those bytes are written. When `statfs` is unavailable, such as on some network drives, Dosya permits the attempt, so external disk monitoring remains necessary.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
