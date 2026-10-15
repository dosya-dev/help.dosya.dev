---
{
  "articleId": "hc-mobile-backup-history",
  "locale": "en",
  "revision": 5,
  "title": "Review mobile backup history",
  "summary": "Read the device-local Backup Activity feed, interpret backed-up, already-backed-up, failed, and nothing-new rows, and understand retention and sign-out.",
  "category": "files",
  "articleSlug": "mobile-backup-history",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/backup/history.ts, apps/mobile/src/backup/ui/ActivityFeed.tsx, apps/mobile/src/backup/orchestrator.ts, and apps/mobile/app/(tabs)/backup.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup history",
    "Mobile backup status and widgets",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile **Activity** feed is a device-local summary of recent backup runs. Use it to find a run, then verify important files in cloud **Files** rather than treating the row as a byte-level receipt.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-history-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-backup-history-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing mobile backup Activity, latest-run counts, result verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible cards open mobile backup, review the latest run, compare transferred, skipped and failed items, then reopen the activity view. <a href="/screenshots/mobile-backup-history-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What a history row shows**

Each row begins with the formatted run time and workspace name. Its second line starts with **_N_ backed up**, then adds **_N_ already backed up** and **_N_ failed** when those counts are non-zero. A run with zero in all three fields says **Nothing new**. The stored skipped-large count is not printed in this history row.

## Steps

1. Open the **Backup** tab and scroll to **Activity**. Live work can show **Scanning your library…**, individual upload percentages, a queued count, and up to five current error lines followed by **_N_ more failed**.
2. Find the newest row for the intended workspace. History is ordered newest first and paged six runs at a time.
3. Compare the counts with the live state and the **Failed items** screen. A run can identify failures, while oversized items remain a separate size-limit category.
4. Open **Files** and verify several expected cloud files, including their destination folder, size, and readable content.
5. If the feed says **No backups yet.**, confirm that a run actually performed work. A manual no-op can update the Last run state without adding an empty history record.


**Retention and privacy**

The local SQLite table keeps the 100 newest runs and removes older entries. The feed is stored on this device rather than synchronized as account history. Signing out clears the table entirely because its rows are not scoped for safe reuse by another account on the same installation.

Deleting a history row through retention or sign-out does not delete uploaded cloud files. Conversely, a history count does not prove a later rename, move, lock, or deletion has not changed the file since that run.

## Expected result

The Activity feed explains the recent run with device-local counts, pagination exposes retained older runs, and cloud Files confirms the important outputs independently.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
