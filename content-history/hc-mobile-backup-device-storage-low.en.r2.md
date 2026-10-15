---
{"articleId":"hc-mobile-backup-device-storage-low","locale":"en","revision":2,"title":"Free device storage when mobile backup pauses","summary":"Fix a Dosya mobile backup paused by low phone storage, safely remove originals already confirmed in cloud storage, and retry the pending upload queue.","category":"files","articleSlug":"mobile-backup-device-storage-low","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for the mobile backup staging, pause, Free up space, and retry implementation on 2026-10-14. The guide distinguishes device storage from workspace cloud-storage quota.","related":["hc-mobile-backup-retry-failed","hc-mobile-backup-settings"],"keywords":["mobile backup device storage low","free phone storage for backup","cloud storage backup","photo backup paused","Dosya mobile backup"]}
---
Dosya may pause mobile backup with **Not enough free space on this device to stage the next photos**. This message refers to storage on the phone, not the storage allowance in your Dosya workspace. On iPhone, locked-screen uploads use a temporary staging area before the app hands files to the operating system. Dosya removes each staged copy after the upload is acknowledged, but the next batch still needs enough local space to start.

<figure class="help-screenshot"><a href="/screenshots/mobile-backup-device-storage-map-2026-10-14.webp"><img src="/screenshots/mobile-backup-device-storage-map-2026-10-14.webp" alt="Four-step interface map for freeing device storage and retrying mobile backup." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: identify the device-storage pause, open Free up space, review confirmed originals, and retry backup. <a href="/screenshots/mobile-backup-device-storage-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

1. Open Dosya and select the **Backup** tab.
2. Read the item under **Things need attention**. A device-space problem says there is not enough free space **on this device**. A workspace quota problem mentions the workspace storage limit instead.
3. Check the storage bar on the Backup page. If the workspace has available cloud storage, clear space on the phone before changing the workspace plan.
4. Leave the pending items in place. Dosya keeps them eligible for a later run; you do not need to select the photos again.

## Steps: safely free device storage

1. Open **Settings** in the mobile app, then choose **Backup settings**.
2. Under **Storage on this device**, tap **Free up space**.
3. Wait while Dosya checks the current workspace. The app rechecks every candidate against the server instead of relying only on its local backup history.
4. Review **Ready to remove**, the estimated number of photos and videos, and the amount of space that can be reclaimed.
5. Check **Kept on this device**. These items could not be confirmed in the workspace and will not be removed.
6. Tap **Remove originals**, then approve the operating-system confirmation.

Removed originals stay in Dosya cloud storage. The current mobile app does not provide a one-tap way to put those originals back into the phone's photo library, so download any item you need locally before removing it.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability page describing automatic full-resolution photo backup." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Mobile backup copies full-resolution originals to your workspace. The Free up space check only offers originals the workspace currently confirms. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

You can also free space through the phone's storage settings. Avoid clearing Dosya app data or uninstalling the app while uploads are pending because that can remove local transfer state.

## Retry the backup

Return to **Backup** and tap the backup button. A manual retry clears the saved automatic-backup pause and scans the pending queue again. Keep Dosya open until you see scanning or upload progress. On iPhone, leave Dosya in the app switcher if **Upload while locked** is enabled.

The recovery is complete when the low-storage attention item disappears, the pending count falls, and the latest activity shows uploaded items. If the warning returns immediately, free more device space and retry with the phone connected to power.

## Troubleshooting

**The message is about workspace storage.**

Device cleanup will not fix a full workspace. Switch to the intended workspace, review its storage bar, remove permanently deleted files if appropriate, or increase its storage allowance. Then return to Backup and tap the backup button to retry.

## Expected result

The device-storage warning clears, the pending count starts falling, and the latest Backup activity records uploaded items in the intended workspace.

## Limits and important details

Free up space only offers media the selected workspace currently confirms. It does not restore removed originals to the phone, and it cannot solve a full Dosya workspace.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Choose mobile backup settings](/files/mobile-backup-settings)
