---
{"articleId":"hc-mobile-backup-limited-photo-access","locale":"en","revision":2,"title":"Expand limited photo access for mobile backup","summary":"Allow Dosya to back up more iPhone photos by changing limited library access, then rescan the selected cloud-backup scope and verify one newly permitted item.","category":"files","articleSlug":"mobile-backup-limited-photo-access","status":"published","lastReviewed":"2026-10-14","verification":"Verified against current local product source for photo permission detection, the Limited photo access attention item, device-settings routing, library recounting, and backup scanning on 2026-10-14.","related":["hc-mobile-backup-retry-failed","hc-mobile-background"],"keywords":["limited photo access backup","iPhone photo backup permission","cloud photo backup","allow all photos Dosya","mobile backup missing photos"]}
---
When iPhone photo access is limited, Dosya can scan and back up only the photos and videos the operating system exposes to the app. The Backup page shows **Limited photo access** with the explanation **Only selected photos back up**. Expanding permission does not upload anything by itself; it lets the next scan see more eligible media.

<figure class="help-screenshot"><a href="/screenshots/mobile-limited-photo-access-map-2026-10-14.webp"><img src="/screenshots/mobile-limited-photo-access-map-2026-10-14.webp" alt="Four-step interface map for expanding limited photo access and rescanning mobile backup." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: open the permission warning, change the phone setting, return to Dosya, and run a verified rescan. <a href="/screenshots/mobile-limited-photo-access-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the active Dosya workspace in the header of the **Backup** tab.
- Choose one non-confidential photo that is currently outside the allowed selection.
- Review **What gets backed up**. Device-folder, media-type, date, and file-size filters still apply after you expand permission.
- Keep the phone online and use a workspace with enough cloud storage for the test item.

## Steps: expand photo access

1. Open Dosya and select **Backup**.
2. Tap the **Limited photo access** item under the attention list. Dosya opens the operating-system settings for the app.
3. Open the Photos permission. Choose full photo-library access if you want the selected Dosya backup filters to control the scope, or update the limited selection to add only the intended photos.
4. Return to Dosya and reopen **Backup**. The page checks photo access again whenever it receives focus.
5. Review the coverage total. It can increase because the app can now count newly available items.
6. Tap the backup button to scan again.
7. Watch the selected test photo enter the pending or uploading state, then wait for it to appear under **Backed up**.
8. Open **Files** in the active workspace and verify the cloud copy.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability page describing full-resolution automatic photo backup." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Photo permission controls what the mobile app can see; Dosya's own filters decide which visible items belong to the backup scope. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The limited-access warning disappears after full access is granted, or the newly selected items become visible while limited access remains. The coverage total reflects the accessible, filtered library, and the test photo becomes available in the intended Dosya workspace.

## Limits and important details

- Granting full access does not override **Device folders**, **Photos**, **Videos**, **Start from**, or **Skip large files** settings.
- Previously uploaded cloud copies remain in Dosya when phone permission changes.
- Removing photo access prevents new scans but does not delete files already stored in the workspace.
- A larger permission scope can increase the pending count substantially on the next scan.

## Troubleshooting

**The warning remains after changing the setting.** Leave the Backup tab, reopen it, and confirm the operating system saved the permission for Dosya. Restart the app if the OS settings screen did not return cleanly.

**A newly allowed photo is still missing.** Check Dosya's device-folder, media-type, date, and size filters. The photo must pass both the phone permission and the backup filters.

**The item appears but does not upload.** Read the Backup status for Wi-Fi, charging, storage, membership, or upload-permission pauses, then retry once.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
