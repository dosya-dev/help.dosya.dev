---
{
  "articleId": "hc-mobile-background",
  "locale": "en",
  "revision": 6,
  "title": "Fix paused mobile background backup",
  "summary": "Restore Dosya photo backup after permission, network, power, workspace, storage, manual-stop, or operating-system scheduling interruptions.",
  "category": "troubleshooting",
  "articleSlug": "mobile-background-backup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/mobile/src/backup/background.ts; apps/mobile/src/backup/policy.ts; apps/mobile/src/backup/settings.ts; apps/mobile/src/backup/runState.ts; apps/mobile/src/backup/ui/engineStatus.ts; apps/mobile/src/backup/ui/CoverageRing.tsx; apps/mobile/src/backup/orchestrator.ts; apps/mobile/src/backup/ledger.ts; apps/mobile/src/onboarding/permissions.ts; apps/mobile/src/upload/uploadBlock.ts. No physical-device background run was performed. Local repository evidence only; no production request was made.",
  "related": [
    "hc-mobile-permissions",
    "hc-mobile-backup-progress",
    "hc-storage-usage"
  ],
  "keywords": [
    "mobile backup paused",
    "background photo backup",
    "waiting for Wi-Fi",
    "Dosya backup not running"
  ]
}
---
First prove that one photo can upload while Dosya is open. A foreground failure points to permission, account, workspace, storage, or file policy; a foreground success followed by no closed-app progress points to operating-system scheduling or background restrictions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-background-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-background-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-background-backup-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-background-backup-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-background-backup-workflow-map-2026-10-14.webp" alt="Mobile backup recovery path: read the Backup status, repair photo access and policy holds, complete one foreground upload, then test a later background wake-up." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Separate a transfer refusal from an operating-system scheduling delay by opening one recent cloud copy before testing closed-app behavior. <a class="workflow-map-full" href="/screenshots/mobile-background-backup-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-background-backup-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-background-backup-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Open **Backup** and confirm the workspace displayed at the top. The centre label identifies the next check:

- **Paused — waiting for Wi-Fi**: connect to Wi-Fi or turn off the Wi-Fi-only setting.
- **Paused — waiting for charger**: attach power or disable charging-only backup.
- **Paused — offline**: restore network access before retrying.
- **Cooling down…**: stop heavy device activity and let the phone cool; the run can continue automatically.
- **Paused** with **Tap to retry**: a fatal upload condition was saved. Correct the visible reason, then tap once to clear the block and retry.
- **Ready**: automatic backup is off. Enable it or start the backup manually.
- **Protected**: the engine is enabled and idle; inspect coverage and the latest Activity rather than expecting a constant upload indicator.

If you previously selected **Stop**, automatic triggers remain stopped until you start backup again. Relaunching alone does not override that choice.

## Repair photo access and selection

Dosya must be allowed to read the photo or video before it can upload it. In the operating-system app settings, grant Photos/Media access. On iPhone, **Limited Access** backs up only the items selected for Dosya; add the missing item to the allowed selection or grant broader access if that matches your intent.

Return to **Backup → What gets backed up** and check album, media-type, date and size filters. An excluded item is outside the coverage total and will not become pending. A library item that cannot be materialized, such as an unavailable iCloud original or a newly restricted photo, is retried on a later run and surfaced for attention.

## Check power and network policy

The default configuration uses Wi-Fi only, does not require a charger, and starts only at 20% battery or higher when unplugged. The battery minimum is a start gate. An upload already in progress is held when connectivity, Wi-Fi, or charging-only requirements change; crossing below the battery floor mid-run does not by itself pause that active transfer.

Operating systems decide when background work actually runs. Dosya requests periodic work with a 15-minute minimum interval, but Android and iOS can delay it for battery, thermal, network, or scheduling reasons. Treat 15 minutes as a requested floor, not a delivery promise.

Allow background activity and data for Dosya in device settings. Disable any per-app battery optimization that prevents scheduled work if continuous backup is important. On iPhone, supported uploads can continue through the native background transfer after the phone locks; on Android the app uses its foreground backup service while transferring. A force-stop or operating-system restriction can prevent later wake-ups.

## Prove the upload path in the foreground

1. Keep Dosya open on **Backup** with an allowed network and sufficient power.
2. Choose one recent, non-confidential photo included by the current filters.
3. Start or retry backup once. Watch **Scanning…**, queued activity and the per-file upload state.
4. If the screen shows a storage, membership, upload-permission, blocked-extension or file-size refusal, fix that condition in the named workspace. Background scheduling cannot bypass a server policy.
5. Wait until the item leaves pending/queued activity. Open **Files** in the same workspace and open the cloud copy.

Each repeatedly unreadable or failed asset has a five-attempt automatic cap. After that it remains in the failed count until you open the failed-items view and explicitly retry it. An item marked **too large** is not retried until the size filter or source is changed; tapping retry without changing that limit cannot make the same bytes acceptable.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability page used to identify the installed iPhone or Android client before checking platform-specific background settings." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the operating-system instructions for the installed mobile platform; browser permission settings do not control native photo backup. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

After the foreground sample succeeds, leave automatic backup enabled and create one new harmless photo that matches the filters. Lock or leave the app normally; do not force-stop it. Later, reopen Dosya. Returning to the foreground settles completed background work and runs a catch-up check, so inspect **Activity**, then open the new cloud copy in **Files**.

A background run is skipped when the account is signed out, automatic backup is disabled, no destination workspace is selected, the user stopped the engine, policy blocks the run, or a fatal upload block awaits manual retry. If the foreground copy works but repeated background opportunities do not, include the phone model, operating-system and Dosya versions, displayed Backup state, selected workspace, power/network policy, approximate test time and whether the app was force-stopped in a private support ticket. Do not attach private photo contents unless support provides an approved transfer method.

## Related guides

- [Manage mobile permissions](/account/mobile-permissions)
- [Monitor backup progress](/files/mobile-backup-progress)
- [Understand storage usage](/uploading/storage-usage)
