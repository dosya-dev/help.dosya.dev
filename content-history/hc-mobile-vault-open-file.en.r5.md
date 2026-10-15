---
{
  "articleId": "hc-mobile-vault-open-file",
  "locale": "en",
  "revision": 5,
  "title": "Open a Vault file on mobile",
  "summary": "Open and decrypt a Vault file on mobile, learn which formats preview in place, and recover safely from Space, network, or integrity failures.",
  "category": "files",
  "articleSlug": "mobile-vault-open-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/app/(tabs)/vault/file.tsx, apps/mobile/src/vault/store.ts, apps/mobile/src/vault/cache.ts, apps/mobile/src/vault/client.ts, packages/e2ee-client/src/file.ts, packages/e2ee-core/src/file.ts, apps/mobile/src/files/saveToDevice.ts, and apps/mobile/src/files/download.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-vault-setup", "hc-vault-members"],
  "keywords": ["mobile vault open file", "Vault in the mobile app", "Dosya help", "cloud storage"]
}
---
Opening a Vault file is a local decrypt operation. The phone obtains short-lived URLs for encrypted chunks, verifies each chunk against its SHA-256 identifier, authenticates it with XChaCha20-Poly1305, and writes plaintext into the app-private Vault cache.

<figure class="help-screenshot"><a href="/screenshots/mobile-vault-open-file-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-vault-open-file-help-workflow-2026-10-14.webp" alt="Mobile Vault file flow from an encrypted folder row through chunk download, local decryption, and preview." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The viewer does not hand ciphertext URLs to the operating system; Dosya decrypts the file before rendering it. <a href="/screenshots/mobile-vault-open-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Unlock **Vault**, open the correct Space, and navigate to the folder containing the file.
- The account must still be a member of that Space and possess a valid Space-key grant. Ordinary workspace roles do not separately control Vault reads.
- Keep enough free device storage for one decrypted copy. Vault downloads have no separate 1 GiB app-cache quota; available device storage and the file’s actual size are the practical limits.
- Expect images and videos to preview in place. Other file types show their name and known size with **Save** and **Share** actions after decryption.

## Steps

1. Tap the file row in the Space folder. The file screen first ensures that the requested Space is open.
2. Leave the screen active while the transfer bar reports the file’s downloaded bytes. Encrypted data is fetched in content-defined chunks with a maximum plaintext chunk size of 4 MiB.
3. Wait for the **preview**. Images open in the image stage and videos in the video stage; an unsupported type opens a document card instead of pretending it can be rendered.
4. Use **Save to device** only for a durable plaintext copy outside Vault. It sends images and videos to Photos or Gallery, sends Android non-media files of 64 MiB or less to a folder picker, and opens the system share sheet only for iOS non-media files or larger Android documents. The adjacent **Share** action always hands the decrypted cache file to another app through the operating-system share sheet.
5. Return with the top-left back control when finished. Use **Lock** from the Vault overview if you want to erase the session’s decrypted Vault cache immediately.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Vault overview showing the Lock control used to end the session after viewing an encrypted file." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Locking cancels active Vault downloads and removes the plaintext cache created for viewing. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected file opens from a locally decrypted cache path. The cloud object remains encrypted, and merely viewing it does not export, share, rename, edit, or delete it. A second open during the same unlocked session may reuse the cached file.

## Troubleshooting

**You see “Couldn't open the Space.”** The screen could not establish the requested Space before asking for bytes. Reopen the Space from **Vault** and confirm membership has not been revoked.

**You see “Couldn't download filename.”** The encrypted transfer, manifest decrypt, chunk verification, device write, or available storage failed. Network and 5xx chunk requests retry after 500 ms, 1.5 seconds, and 4 seconds; 4xx responses do not retry. Return to the folder and open the file again after fixing connectivity or storage.

**You see “Couldn't open this file.”** No usable local path was produced. Go back rather than waiting on the spinner, unlock again if necessary, and retry from the folder listing.

**Vault locked while the file was open.** After five minutes in the background, explicit locking, sign-out, or account switching, the app redirects to **Vault**, aborts in-flight downloads, and wipes cached plaintext. Unlocking and reopening downloads the encrypted chunks again.

**The file displays only a name and size.** That is the fallback for a format without an image or video stage. Choose **Save** to export it through the platform-specific destination above, or **Share** to hand it to a compatible app. Either action moves plaintext outside Vault.

## Related guides

- [Set up Vault](/files/vault-setup)
- [Manage Vault members](/files/vault-member-access)
