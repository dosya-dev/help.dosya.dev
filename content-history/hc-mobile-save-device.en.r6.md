---
{
  "articleId": "hc-mobile-save-device",
  "locale": "en",
  "revision": 6,
  "title": "Save a Dosya file to the device",
  "summary": "Save a Dosya cloud file into Photos, Files, Downloads, an Android folder, or another provider while preserving the original cloud file and version.",
  "category": "files",
  "articleSlug": "mobile-save-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/src/files/saveToDevice.ts, apps/mobile/src/files/download.ts, apps/mobile/src/files/cachePolicy.ts, apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/files/lock.ts, and apps/api/src/lib/files/download-grant-core.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-mobile-browse", "hc-mobile-permissions"],
  "keywords": ["mobile save device", "mobile file actions", "Dosya help", "cloud storage", "file backup"]
}
---
Saving creates a plaintext device copy of a Dosya cloud file. The mobile app chooses the destination flow from the file type, operating system, and size; there is no single cross-platform Downloads folder.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-save-device-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-save-device-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" alt="Platform decision map for saving a Dosya file to Gallery, an Android folder, or the iOS share sheet." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The save destination changes for media, Android documents, iOS documents, and Android files above 64 MiB. <a class="workflow-map-full" href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-save-device-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the file and workspace in the mobile viewer. The viewer enables saving from lock state, not from a cached role decision: **View only** disables it, while a full-lock file requires a current unlock token.
- After a press, the server still requires file access, membership and confinement, then the role's `download_files` grant. A role refusal appears as **You don't have download permission** even though the control was available.
- Check free storage for both the app’s temporary or retained cache and the exported copy.
- Treat the destination as outside Dosya’s protection. Other apps, device backups, gallery sync, or a selected cloud provider may gain access according to that destination’s settings.

## Steps

1. Open the file, then tap **Download** in the action row. For file types whose main viewer action is saving, the filled action starts the same workflow.
2. Wait until the action changes from **Preparing** and **Downloading** to **Saving**.
3. Finish the operating-system step shown during **Saving**:
   - For an image or video, approve photo-library access. Dosya writes the item to the phone’s Photos or Gallery library.
   - For another file on Android at 64 MiB or less, select a folder in the system picker. Dosya creates a file with the original name and MIME type there.
   - For a non-media file on iOS, choose **Save to Files** or another target in the share sheet.
   - For an Android non-media file larger than 64 MiB, select a streaming destination in the share sheet. Direct Android folder writes use base64 in memory and are intentionally avoided above that threshold.
4. Read **Saved to your gallery**, **Saved to your phone**, or the destination prompt, then open the external copy from the chosen app or folder.
5. If the content is sensitive, remove the device copy from that destination when it is no longer needed; deleting the cloud item later does not recall exported copies.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="iPhone and Android Dosya client cards representing the two native save destination flows." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the destination named by the platform prompt rather than expecting identical controls on iOS and Android. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

**Saved to your gallery** means a photo or video entered the media library. **Saved to your phone** confirms an Android folder write. **Choose where to save it** and **Too large to save directly - choose where to put it** mean the system sheet still needs your destination choice. The Dosya cloud original is unchanged in every case.

## Troubleshooting

**The save control is unavailable.** The file is **View only**, or a **Full lock** has not been unlocked in the current viewer. Role permission does not control whether this button is drawn. If a press instead returns **You don't have download permission**, ask a workspace owner or role manager to grant `download_files`; device permissions cannot change that server decision.

**The gallery permission prompt was denied.** Dosya reports “dosya needs permission to add photos to your gallery.” Allow add-to-library access in the phone’s settings, reopen the file, and retry.

**Android says “No folder chosen.”** The directory picker was dismissed or access was not granted. Start the save again and select a writable folder such as Downloads, an SD card, or a supported provider.

**You see “Sharing is not available on this device.”** The iOS non-media flow or large Android-file fallback cannot open a system share target. Update the OS/client or save from another supported device.

**The exported file does not update later.** It is an independent snapshot. Saving a newer Dosya version creates another device copy; the existing external file is not synchronized.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Mobile permissions](/account/mobile-permissions)
