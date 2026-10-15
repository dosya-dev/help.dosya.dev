---
{
  "articleId": "hc-mobile-backup-retry-large-video",
  "locale": "en",
  "revision": 5,
  "title": "Retry a large video in mobile backup",
  "summary": "Understand why a large video was skipped, change the mobile backup size limit, and identify the current retry limitation before relying on it.",
  "category": "files",
  "articleSlug": "mobile-backup-retry-large-video",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/backup-failed.tsx, apps/mobile/app/backup-settings.tsx, apps/mobile/src/backup/orchestrator.ts, apps/mobile/src/backup/ledger.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-retry-failed",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup retry large video",
    "Mobile backup recovery details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A video above the configured cap is recorded as `skipped_large`, not as an upload error. The mobile client exposes the skipped row and the size setting, but its current ledger logic does not return an existing skipped row to the queue after that setting changes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14.webp" alt="Large-video backup workflow showing the Failed items size section, changing Skip large files, starting a new run, and the current no-retry result for an existing skipped row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Large-video backup workflow: review **Skipped by your size limit**, choose an appropriate **Skip large files** value, run backup again, and recognize that an already skipped row is not reset in the current client. <a class="workflow-map-full" href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-retry-large-video-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The available **Skip large files** choices are **No limit**, **Over 200 MB**, **Over 1 GB**, and **Over 5 GB**. Raising the cap can admit newly discovered videos, but **Retry all** affects only rows with status `error`.

## Steps

1. Open **Backup**, tap the **Failed** count, and find the video under **Skipped by your size limit**.
2. Check the displayed filename, byte size, and stored message before changing any backup rule.
3. Return to **Backup settings**, open **Skip large files**, and choose a cap above the video size or **No limit**.
4. Keep Videos and the containing device folder selected; confirm the intended destination workspace before starting another run.
5. Start backup again and watch **Pending**, the ring, and the activity feed for newly eligible videos.
6. If this exact video stays under the skipped count, use **Report these failures** or support; the released client has no control that resets a `skipped_large` ledger row.

### Why retry does not appear

The failure screen deliberately offers **Change the size limit** for skipped rows instead of **Retry all**. The batch retry function resets only `error` rows. During later scans, the orchestrator also ignores an asset already marked `skipped_large`, so changing the cap alone does not requeue that historical row.

Do not delete the device original while testing. A skipped video has not been copied to Dosya, and no success toast or completed row exists to protect it.

### Other conditions that can pause a large transfer

The size cap is separate from network and power policy. With **Wi-Fi only** enabled, a run can show **Paused - waiting for Wi-Fi**; with **Only while charging**, it can wait for a charger. A manual run can begin despite the start policy, but a mid-run network or charger change can still hold uploads until the condition returns.

## Expected result

New videos below the revised cap can enter the backup queue. The previously skipped video may remain listed as too large because the current client does not reset that row; treat it as not backed up until it appears in cloud **Files** and opens correctly.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
