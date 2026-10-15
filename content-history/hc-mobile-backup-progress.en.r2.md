---
{"articleId":"hc-mobile-backup-progress","locale":"en","revision":2,"title":"Monitor mobile cloud backup progress","summary":"Read Dosya's protected, pending, failed, queued, scanning, uploading, and paused states, then verify a recent cloud copy before removing the phone original.","category":"files","articleSlug":"mobile-backup-progress","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for the mobile coverage calculation, progress ring, engine states, live Activity rows, background jobs, failure counts, history, and workspace verification flow on 2026-10-14.","related":["hc-mobile-backup-setup","hc-mobile-background"],"keywords":["mobile backup progress","cloud photo backup status","photo upload progress","backup pending","backup paused","Dosya mobile backup"]}
---
A photo is protected only after its upload finishes and the cloud copy can be opened. The Dosya **Backup** tab separates library coverage from the current transfer: the ring shows how much of the selected scope is protected, the breakdown shows unresolved counts, and **Activity** shows what the current or previous run did.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-progress-map-2026-10-14.webp"><img src="/screenshots/mobile-backup-progress-map-2026-10-14.webp" alt="Four-step interface map for reading mobile backup coverage, transfer activity, failures, and cloud verification." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: read the coverage ring, inspect the count breakdown and Activity, then open a recent cloud copy. <a href="/screenshots/mobile-backup-progress-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the workspace shown at the top of the Backup tab.
- Review **What gets backed up** so you know which device folders, media types, dates, and sizes belong to the coverage total.
- Keep one recent, non-confidential photo available as a verification item.
- Connect to a network and power state allowed by **Backup settings**.

## Steps: read backup progress

1. Open **Backup**.
2. Read the centre of the coverage ring:
   - **Scanning…** means Dosya is discovering eligible library items.
   - **Backing up** means one or more uploads are active.
   - **Paused — waiting for Wi-Fi**, **waiting for charger**, or **offline** names a temporary hold.
   - **Cooling down…** resumes automatically after the device cools.
   - **Paused** without a temporary hold indicates a saved failure that needs attention and a retry.
   - **Protected** means automatic backup is enabled and the engine is idle.
3. Read **X of Y protected**. The total is the accessible library after Dosya filters are applied, not necessarily every photo on the phone.
4. Compare **Backed up**, **Pending**, and **Failed**. Tap the Failed area when it has failed or skipped-too-large items.
5. Scroll to **Activity**. During a run, it shows scanning, queued count, per-file upload percentages, and up to five current errors.
6. Review backup history for the time, workspace, uploaded count, items already backed up, and failures from earlier runs.
7. When the run becomes idle, open **Files** in the same workspace and open the recent test photo.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile page describing automatic full-resolution photo backup and progress." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the Backup tab for live transfer state and Files for final cloud-copy verification. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The protected count rises as uploads settle, the pending count falls, and the Activity history records the completed run in the intended workspace. The test photo opens from Dosya after a refresh.

## Limits and important details

- Items excluded by date, folder, media type, or size filters are outside the protected total.
- Failed items and items skipped by the size limit are settled separately, so **Pending** can reach zero while **Failed** or **too large** still needs review.
- A queued iPhone background job can continue after the JavaScript upload list is empty; the screen shows an **Uploading in the background** hint.
- Do not delete the phone original solely because a scan completed. Open the cloud copy first.

## Troubleshooting

**The total is smaller than the phone library.** Check limited photo access and every backup filter. The ring describes the selected scope.

**Progress is paused.** Read the exact hold or attention message. Restore Wi-Fi or power for a temporary hold; correct storage, membership, or upload permission for a fatal pause, then tap once to retry.

**A file remains failed.** Open the failed-items view, read its error, and retry after correcting the cause. Items stop retrying automatically after the attempt limit.

**The count changed after deleting phone media.** Coverage is recalculated from the current accessible library, while uploaded history can retain records for items already removed from the device.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Fix background backup](/troubleshooting/mobile-background-backup)
