---
{
  "articleId": "hc-mobile-backup-status-ring",
  "locale": "en",
  "revision": 5,
  "title": "Read the mobile backup status ring",
  "summary": "Read protected, pending, failed, skipped, paused, and filtered mobile-backup states correctly, including the ring\u2019s three-second refresh timing.",
  "category": "files",
  "articleSlug": "mobile-backup-status-ring",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/backup.tsx, apps/mobile/src/backup/coverage.ts, apps/mobile/src/backup/ui/CoverageRing.tsx, apps/mobile/src/backup/ui/CoverageFigures.tsx, apps/mobile/src/backup/ui/coverageScope.ts, apps/mobile/src/backup/ui/engineStatus.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup status ring",
    "Mobile backup status and widgets",
    "Dosya help",
    "cloud storage"
  ]
}
---
The backup ring measures eligible photos and videos in the current filter scope. It is not a storage meter and it is not derived only from the rows already scanned into the ledger.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14.webp" alt="Mobile backup status workflow showing the protected fraction, Backed up and Pending figures, Failed and too-large counts, scope text, and the ring control states." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile backup status workflow: read the protected fraction and scope first, compare the three count columns, open failed or oversized items, then interpret the ring’s action and pause state. <a class="workflow-map-full" href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-status-ring-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

When photo-library permission allows a count, the headline is **_uploaded_ of _total_ protected**. The arc uses that fraction. During a live run, ledger counts refresh every 3 seconds; the elapsed clock updates each second.

## Steps

1. Open **Backup** and read the headline inside the ring before interpreting its arc.
2. Read the scope line such as **Photos only**, **3 folders**, or **Since 17 Sep 2025**; tap it to change the limiting setting.
3. Compare **Backed up**, **Pending**, and **Failed** beneath the ring; a separate **_N_ too large** line can appear under Failed.
4. Tap the Failed column when it has errors or size skips to open **Failed items** and see filenames and messages.
5. Read the ring center and caption: **Start backup**, **Continue backup**, **Tap to stop**, **Tap to retry**, or **Select a workspace to back up**.
6. Confirm completion in cloud **Files** when the ring says **Protected**; the ring describes library coverage, not whether a specific cloud file opens.

### How the counts are calculated

**Backed up** is the uploaded ledger count capped at the current eligible library size. **Pending** is calculated as eligible library items minus uploaded, skipped-large, and error rows, so queued transfers remain pending and a large library does not look nearly complete just because only a small scan window has been seeded.

Without a readable library total, Dosya falls back to ledger counts: uploaded remains the completed count, and both `pending` and `queued` contribute to Pending. A restricted photo permission can therefore make the denominator unavailable or smaller than the whole phone library.

### Ring states

- **Scanning…** means Dosya is discovering eligible media.
- **Backing up** uses a green active core; the caption can add speed, estimated time left, and elapsed time.
- **Paused - waiting for Wi-Fi**, **Paused - waiting for charger**, or **Paused - offline** resumes automatically when the condition clears.
- **Cooling down…** means thermal pacing is active and also resumes automatically.
- A destructive-color **Paused** with **Tap to retry** is a blocking failure, not a policy hold.
- **Protected** appears when automatic backup is enabled and no blocking work is active; **Ready** appears when automatic backup is off.

## Expected result

The protected fraction matches the selected media types, folders, and start date; Pending falls as eligible items settle; Failed and too-large items remain separately actionable; and the ring’s caption tells whether a tap starts, stops, continues, or retries.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
