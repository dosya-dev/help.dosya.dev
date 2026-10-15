---
{
  "articleId": "hc-desktop-deletion-guard",
  "locale": "en",
  "revision": 6,
  "title": "Protect against unexpected mass deletion",
  "summary": "Review a paused mass deletion, choose whether cloud copies stay or move to trash, and recover safely from permission or network failures in desktop sync.",
  "category": "desktop",
  "articleSlug": "desktop-deletion-guard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/main/sync/deletion-guard.ts, apps/desktop/src/main/sync/index.ts, apps/desktop/src/renderer/pages/SyncPage.tsx and apps/desktop/src/main/sync/sync-engine-refusals.test.ts. Production behavior was not tested and no production action was performed.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop deletion guard",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya pauses a sync pair when a local disappearance looks more like an unreadable or unplugged folder than an intentional deletion. The guard activates only when the pair tracks more than 10 files and one watcher batch would remove both more than 5 files and more than half of all tracked files.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" alt="Desktop sync deletion guard comparing a missing local tree with Keep the cloud copies and Delete from the cloud too decisions." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Inspect the named sync pair and sample paths before deciding what happens to the cloud copies. <a class="workflow-map-full" href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-deletion-guard-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Reconnect an external drive, remount a network volume, or restore the moved local folder before making a decision.
- Open **Sync** and identify the pair by both its cloud folder name and local path. The warning includes up to five missing sample paths and the remaining count.
- Stop other tools from changing the same local tree until the pair is healthy.
- Deleting an item you uploaded requires **delete_own_files**; deleting another member’s item requires **delete_any_file**. A mixed batch can therefore complete only partly. The guard is part of desktop sync on supported Windows, macOS, and Linux builds and has no separate plan entitlement.

## Steps

1. Find the warning beginning **dosya paused this folder: _N_ files disappeared locally.**
2. Compare the displayed cloud folder, local path, sample names, and total count with the device. If a drive was unplugged or a folder moved accidentally, restore that path first.
3. Choose **Keep the cloud copies** when the local disappearance was accidental or uncertain. Dosya clears the held batch without changing the server, restarts the watcher, and performs a full rescan.
4. Choose **Delete from the cloud too** only when every listed disappearance was intentional. The button changes to **Deleting...** while Dosya submits the held IDs as one cloud batch.
5. Review the result toast and Sync activity. A complete deletion says **Deleted _N_ files from the cloud**. Keeping them says **Cloud copies kept**.
6. If a partial server result deleted fewer objects than requested, use the activity record to identify the shortfall; Dosya keeps those remaining rows tracked rather than falsely reporting success.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified desktop Sync Activity view used to confirm the guarded pair resumed after a deletion decision." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>After the decision, confirm that the affected pair resumes and records the actual server result. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## What each choice changes

**Keep the cloud copies** does not delete server data. A subsequent rescan reconciles the still-present cloud copies according to the pair’s sync mode, so they may return locally where downloads are enabled.

**Delete from the cloud too** moves the accepted cloud files to cloud trash. That action changes shared storage and may affect every device syncing the folder. Recovery is possible only while the trash retention policy still keeps the files; permanent purge or an expired trash item cannot be reversed from the desktop guard.

While the question is open, the watcher is stopped and the pair reports **needs-confirmation**. There is only one held deletion batch per pair, and unrelated changes wait for the full rescan after the decision.

## Troubleshooting

- **No delete permission** or another 403 restores the same hold. Ask a workspace owner or administrator for the correct delete permission, then retry.
- **session expired** means sign in again before confirming. The pending files remain held.
- A rate-limit refusal tells you to try again in a minute; the app does not drop the question or claim that deletion happened.
- **Could not apply that - try again** leaves the pair paused. Fix connectivity and use the existing prompt instead of recreating the sync pair.
- A scan that cannot read a folder may report that files **were not deleted this time** and that Dosya will retry after the next healthy scan. Repair access to the path first.

## Expected result

The chosen pair resumes only after the held batch is kept or successfully processed. Keeping preserves server files; confirming trashes only the IDs the server accepts. Refusals retain the hold and tracked records so the user can recover without silent data loss.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
