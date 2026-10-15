---
{
  "articleId": "hc-mobile-backup-live-media",
  "locale": "en",
  "revision": 6,
  "title": "Back up Live Photos and motion photos",
  "summary": "Back up Live Photos and motion photos, distinguish pair detection from companion upload failure, and understand the current 25-item backfill limit.",
  "category": "files",
  "articleSlug": "mobile-backup-live-media",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/backup/livePhoto.ts, apps/mobile/src/backup/motionPhoto.ts, apps/mobile/src/backup/orchestrator.ts, apps/mobile/src/backup/ledger.ts, and apps/mobile/src/backup/transport/backgroundTransport.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-mobile-backup-settings"
  ],
  "keywords": [
    "mobile backup live media",
    "mobile backup controls",
    "Dosya help",
    "file transfer"
  ]
}
---
Dosya detects supported paired media automatically during mobile backup. There is no Live Photo or motion-photo toggle: keep normal Photos backup enabled, then distinguish a pair that was never discovered from a discovered companion whose upload failed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14.webp" alt="Live media backup workflow: keep Photos backup enabled with no pair toggle, let Dosya detect the motion companion automatically, verify the still and sibling, and match recovery to the companion row status." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Live media backup workflow: keep Photos backup enabled with no pair toggle, let Dosya detect the motion companion automatically, verify the still and sibling, and match recovery to the companion row status. <a class="workflow-map-full" href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-live-media-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**How pairing works**

On iOS, the native media helper uses the Photos asset identifier to retrieve the paired video. On Android, Dosya reads the first 256 KiB of a motion photo for supported XMP offset or container-item metadata, then copies the motion-video tail. If no pair is detected, the format is unsupported, or extraction fails, the still image continues, the still is marked pair-checked, and no `#video` ledger row exists to retry. A temporary background-staging budget or no-space result is treated as inconclusive instead, so the still remains eligible for a later probe.

## Steps

1. In **Backup settings**, enable Photos and select the intended device folders and destination. Grant the operating system access to the original media and keep upload and destination-folder permissions available.
2. Start a backup with one supported Live Photo or motion photo. No separate paired-media option should appear.
3. In cloud **Files**, look for the still and, when discovery and staging succeeded, its sibling motion file in the same folder. They share a base name. The in-process iOS path creates a `.MOV` name, native iOS background staging keeps the exported companion filename, and Android creates `.MP4`.
4. Open both files when the sibling exists. A successfully discovered and staged motion part receives its own ledger row using the still asset ID plus `#video`; only that row can deduplicate, fail an upload, and retry independently.
5. If older stills were uploaded before pairing was checked, run backup again. Backfill probes at most 25 previously uploaded unpaired stills per run; remaining candidates wait for later runs.


**Counts and recovery**

The dashboard’s protected-library coverage counts the source media asset, not the companion as a second library item. Once staging succeeds, the companion owns a `#video` ledger row, but later failures do not all give that row the same status:

- A native background job or registration failure normally returns the row to `pending` and increments its attempts. The background planner can retry it while its attempt count is below five; it does not appear in **Failed items** while pending.
- An in-process upload failure records the row as `error` with another attempt. A later in-process scan can retry it while below five, and the row can also appear in **Failed items**.
- A direct-upload initialization refusal records `error` immediately. Use the batch **Retry all** action after fixing the refusal’s cause; there is no per-row retry.

A `#video` row that already exists is planned independently from its still. If its native restaging is unreadable, it remains pending while the attempt count increases. A budget or device-space stop leaves the probe inconclusive without charging that attempt.

When detection or extraction returns no companion before a row exists, Dosya marks the still pair-checked and creates no failed item to reset; the destination contains only the still. Do not delete the device original until both expected files open correctly. The still and motion sibling are separate cloud files, so deleting or moving one does not automatically change the other.

## Expected result

A discovered and successfully uploaded pair produces a readable still plus a MOV or MP4 sibling. A pair rejected before companion-row creation leaves only the still and no retry row. After a `#video` row exists, a native background failure can leave it retryable as `pending`, while in-process failure or direct initialization refusal can leave it as `error`.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Change backup settings](/files/mobile-backup-settings)
