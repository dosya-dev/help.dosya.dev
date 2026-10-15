---
{
  "articleId": "hc-desktop-sync-local-disk-space",
  "locale": "en",
  "revision": 5,
  "title": "Recover desktop sync when local disk space is low",
  "summary": "Recover a download blocked by low disk space: reserve its bytes plus Dosya\u2019s 256 MiB margin, retry the transfer, and verify the final local file.",
  "category": "desktop",
  "articleSlug": "desktop-sync-local-disk-space",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/sync/remote-client.ts, and apps/desktop/src/renderer/pages/SyncPage.tsx; low-space recovery was not repeated against production.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync local disk space",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya checks free space before downloading. The destination volume must hold the download plus a 256 MiB safety margin, and a batch needs room for the combined download actions before it starts.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14.webp" alt="Four-step map for low-disk recovery: record the requirement, pause the pair, delete data or move it to another volume, then verify the downloaded file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The displayed requirement already includes Dosya’s 256 MiB margin; delete data from the destination volume or move it to another volume before verifying the download. <a class="workflow-map-full" href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-local-disk-space-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Find the affected pair or file in **Sync**. The exact preflight message is **Low disk space: {freeMB} MB free, need ~{needMB} MB. Free up space to continue syncing.** This guard applies to downloads; an upload-only action does not need a local destination copy.

A download writes resumable data under `.dosya-sync-tmp` and renames the completed file into place. Dosya cleans abandoned temporary entries when the pair starts, but the final file and temporary work still need space on the same destination volume.

## Steps

1. Record the sync path, download size, reported free megabytes, and approximate required megabytes from the desktop error.
2. Pause the affected pair so additional cloud changes do not add more download work while capacity is being cleared.
3. Delete disposable data from the destination volume or move it to another volume, leaving at least the reported requirement, which includes Dosya’s 256 MiB margin.
4. If that volume cannot be expanded, choose **Remove** for the pair and add a smaller cloud folder or stronger exclusions; Remove does not delete local or cloud files.
5. Resume the pair and select its single **Retry** control to retry every listed error, or use **Sync now** when the pair has no retained failed-file list.
6. Verify the final local path opens, matches the cloud file size, and is no longer represented only by temporary data.

On some network filesystems the operating system cannot report free bytes. Dosya then skips the early space guard, and the write can still fail later with the underlying filesystem message.

## Expected result

The download completes after the destination has enough working capacity. The visible file replaces its temporary download state, opens normally, and the low-space issue clears.

If space falls again during a batch, pause the pair and free more than the minimum. Repeatedly clearing the error without reserving capacity can leave the remaining downloads blocked.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
