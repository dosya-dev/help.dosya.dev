---
{
  "articleId": "hc-desktop-sync-existing-folder",
  "locale": "en",
  "revision": 5,
  "title": "Sync an existing local folder safely",
  "summary": "Pair an existing folder without losing either side: choose the mode and conflict rule, start with a backup, then verify each first-sync outcome.",
  "category": "desktop",
  "articleSlug": "desktop-sync-existing-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/sync/planner.ts, apps/desktop/src/main/sync/first-sync.test.ts, apps/desktop/src/main/sync/system-paths.ts, and apps/desktop/src/renderer/pages/SyncPage.tsx; this first-sync workflow was not exercised in production.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync existing folder",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Pairing two folders that already contain files is a merge operation. Dosya does not show a dry-run before **Start syncing**, so back up irreplaceable local data and choose the deletion and conflict rules before creating the pair.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14.webp" alt="Four-step map for pairing an existing folder: back up the local folder, choose both paths, select Protect & Upload or Full Sync, then verify a known file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Back up the local folder, confirm both paths and the authoritative side, then verify a known cloud result. <a class="workflow-map-full" href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-existing-folder-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Sync** in the current desktop client and sign in to the intended workspace. A local folder cannot overlap another configured sync root; Dosya rejects that selection and tells you to remove the existing pair or choose another folder.

The safest starting point for a local folder whose contents must reach the cloud is **Protect & Upload**. It uploads local changes and never deletes cloud files. Use **Full Sync** only when local and cloud changes, including deletions, should travel both ways.

## Steps

1. Copy the important local folder to a separate backup location that is outside every Dosya sync root.
2. In **Sync**, select **Add sync folder**, choose the destination under **Cloud folder**, and choose the existing path under **Local folder**.
3. Select **Protect & Upload** when the local folder is authoritative; choose **Full Sync** only if cloud-only items should download and deletions should mirror.
4. For **Full Sync**, leave **Keep both copies** selected when independent files may share a path, or select **Last write wins** only after checking timestamps.
5. Review exclusions and folder size, then select **Start syncing**; this creates the pair and begins work immediately.
6. Inspect **Activity**, **Issues**, the local folder, and the cloud destination until a small known file has the expected path and bytes.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Reference for “Sync an existing local folder safely”: Dosya desktop sync mode selection for a local folder and workspace destination." width="512" height="676" loading="lazy" decoding="async" /></a><figcaption>Reference for “Sync an existing local folder safely”: Dosya desktop sync mode selection for a local folder and workspace destination. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

On the first Full Sync, a local-only file uploads and a cloud-only file downloads. When both sides independently contain the same path, **Keep both copies** automatically renames the local version to a dated, device-named conflict copy and uploads it; the following cycle restores the cloud version at the original path. Dosya records a notice explaining that both versions were kept. **Last write wins** instead compares the cloud update time with the local modification time and transfers the newer side.

## Expected result

The pair appears in Sync and the sample item reaches its expected destination. Cloud-only content is not mistaken for a deletion during initial reconciliation, and **Keep both copies** leaves two named files rather than discarding either version.

If Dosya reports that the folder is inside, contains, or duplicates another sync folder, remove the conflicting pair or choose a non-overlapping local path. Removing a pair stops synchronization; it does not delete files on either side.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
