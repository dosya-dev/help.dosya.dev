---
{"articleId":"hc-mobile-backup-background-refresh","locale":"en","revision":2,"title":"Restore background mobile backup","summary":"Restore automatic cloud backup when Dosya stops making progress in the background by checking backup settings, network rules, power conditions, and iPhone locked-screen uploads.","category":"files","articleSlug":"mobile-backup-background-refresh","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for automatic-backup policy, background-task registration, iOS locked-screen transport, Backup status messages, and alert behavior on 2026-10-14.","related":["hc-mobile-backup-retry-failed","hc-mobile-background"],"keywords":["mobile backup background refresh","automatic cloud backup","background photo upload","iPhone backup while locked","Android background backup"]}
---
Automatic mobile backup runs when Dosya is signed in, **Automatic backup** is enabled, and the device meets the network and power rules you selected. The operating system chooses when to give background work time, so background progress may arrive in batches rather than starting immediately after every photo.

<figure class="help-screenshot"><a href="/screenshots/mobile-background-backup-map-2026-10-14.webp"><img src="/screenshots/mobile-background-backup-map-2026-10-14.webp" alt="Interface map of automatic backup, network, power, and iPhone locked-screen settings." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: automatic backup depends on the selected network and power rules; iPhone adds Upload while locked. <a href="/screenshots/mobile-background-backup-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

1. Open Dosya and select **Backup**.
2. Read the status around the progress ring and any item under **Things need attention**.
3. If you see **Waiting for Wi-Fi**, connect to Wi-Fi or open **Settings → Backup settings** and turn off **Wi-Fi only**.
4. If the status is waiting for a charger, connect power or turn off **Only while charging**.
5. If **Auto-backup paused** appears, tap that row or the backup button. A manual run clears the saved pause and tries the queue again.
6. Confirm **What gets backed up** includes at least one device folder and the photo or video types you expect.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile page describing automatic photo backup and mobile availability." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya mobile backup is designed to continue after setup, while the Backup page remains the source of truth for pauses and progress. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: restore background backup

Open **Settings → Backup settings** and confirm:

- **Automatic backup** is on.
- **Wi-Fi only** matches the network you are currently using.
- **Only while charging** matches the phone's power state.
- On iPhone, **Upload while locked** is on if you want the native background transfer service to carry staged uploads while the phone is locked.

On iPhone, keep Dosya in the app switcher and plug the phone in for a large first backup. When native background jobs are active, the Backup page shows **Uploading in the background**. Force-quitting the app can stop the app from receiving normal background opportunities.

On either platform, check the operating-system settings for Dosya if background activity has been restricted. Allow background activity and data access, and remove battery restrictions that explicitly suspend Dosya. The names of these controls vary by phone manufacturer and OS version.

## Run a controlled test

1. Add one new, non-confidential photo to an included folder.
2. Open Dosya, return to **Backup**, and tap the backup button once.
3. Wait until the item enters scanning or uploading, then leave Dosya without force-closing it.
4. Reopen the app and check the coverage count and latest activity.

The test succeeds when the new item is marked uploaded and remains available in the active Dosya workspace. If the test works only while the app is visible, recheck OS background permissions and the iPhone **Upload while locked** toggle.

## Troubleshooting

Low battery can prevent an automatic run from starting. A loss of network, workspace storage limit, revoked workspace membership, or missing upload permission can also pause the engine. Dosya displays fatal pauses on the Backup page and can send a **Backup paused** notification. Open the notification, correct the named cause, and use one manual retry.

## Expected result

A new test item uploads after the app leaves the foreground, and the Backup page no longer shows a policy or fatal pause.

## Limits and important details

The operating system controls exact background timing. Dosya can prepare and register background work, but it cannot promise an immediate run after every new photo.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
