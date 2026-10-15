---
{
  "articleId": "hc-mobile-vault-save-device",
  "locale": "en",
  "revision": 5,
  "title": "Save a Vault file to the mobile device",
  "summary": "Export a decrypted Vault file to a trusted mobile destination, understand platform and size rules, and remove plaintext copies when finished.",
  "category": "files",
  "articleSlug": "mobile-vault-save-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/app/(tabs)/vault/file.tsx, apps/mobile/app/(tabs)/vault/space/[id]/[folderId].tsx, apps/mobile/src/vault/store.ts, apps/mobile/src/vault/cache.ts, and apps/mobile/src/files/saveToDevice.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-vault-setup", "hc-vault-members"],
  "keywords": ["mobile vault save device", "Vault in the mobile app", "Dosya help", "cloud storage"]
}
---
**Save to device** crosses the Vault privacy boundary: Dosya decrypts the selected file into its session cache, then exports plaintext to a location controlled by the phone or another app. Locking Vault cannot erase that exported copy.

<figure class="help-screenshot"><a href="/screenshots/mobile-vault-save-device-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-vault-save-device-help-workflow-2026-10-14.webp" alt="Vault mobile export path from an encrypted Space file to a trusted device destination." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Review the destination before allowing decrypted Vault bytes to leave Dosya’s private cache. <a href="/screenshots/mobile-vault-save-device-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Unlock Vault and open the file in its Space. Any current Space member who can decrypt the file can use the mobile export control; the ordinary workspace role table is not consulted for this action.
- Verify that policy permits an unencrypted device copy. Photos, Files, Downloads, third-party providers, and device backups can retain it independently.
- Reserve enough free space for the decrypted Vault cache file and the final exported file.
- Know the size path: Android directly writes a non-media file only when its reported size is no more than 64 MiB. Larger documents use the streaming share sheet.

## Steps

1. In a Space folder, open the file and wait for its encrypted chunks to download and decrypt successfully.
2. Tap **Save to device** in the bottom action bar. For a non-previewable document, the stage also offers **Save** after the local file is ready.
3. Complete the native **destination flow**:
   - An image or video requests permission and saves to Photos or Gallery.
   - An Android document of 64 MiB or less asks you to select a writable folder.
   - An iOS document opens the system share sheet, where **Save to Files** is available.
   - An Android document over 64 MiB opens the streaming share sheet; choose its final location there.
4. Confirm the toast: **Saved to your gallery**, **Saved to your phone**, **Choose where to save it**, or **Too large to save directly - choose where to put it**.
5. Open and validate the exported file, then delete it from the external destination when its plaintext is no longer required.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Vault overview with the Lock action used after exporting and checking a decrypted mobile copy." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Lock Vault after the export to wipe Dosya’s session cache; separately remove any copy saved outside the app. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The chosen destination receives a standalone plaintext file. The encrypted Vault entry stays in its Space, consumes the same storage, and remains available to other members. No later lock, membership revocation, or Vault deletion can retract an already exported device copy.

## Troubleshooting

**You see “Couldn't download filename.”** Export cannot begin until the local decrypt completes. Restore the connection and available storage, then reopen the file. The client retries chunk network and 5xx failures three times with 500 ms, 1.5-second, and 4-second delays.

**The picker closes without a saved file.** Cancelling is treated as a choice and shows no error on this screen. Start **Save to device** again and finish the operating-system prompt.

**Photo-library access is blocked.** The save helper creates the message **dosya needs permission to add photos to your gallery.** This Vault screen treats that `SaveCancelled` result like a dismissed picker and returns without a toast. If nothing is saved and no error appears, grant Dosya add-to-library access in system settings, then run **Save to device** again.

**The share sheet appears instead of an Android folder picker.** The item is a non-media file reported above 64 MiB, so Dosya avoids loading a roughly one-third-larger base64 representation into JavaScript memory.

**Locking did not remove the exported copy.** This is expected. Lock erases `/vault` under Dosya’s app cache and aborts current Vault transfers; it has no authority over Photos, Files, Downloads, SD cards, or another provider.

## Related guides

- [Set up Vault](/files/vault-setup)
- [Manage Vault members](/files/vault-member-access)
