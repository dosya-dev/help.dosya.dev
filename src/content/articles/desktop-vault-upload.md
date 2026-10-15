---
{
  "articleId": "hc-desktop-vault-upload",
  "locale": "en",
  "revision": 5,
  "title": "Upload an encrypted Vault file on desktop",
  "summary": "Upload files to an unlocked Vault Space, understand local encryption and storage limits, and recover cleanly from folder or quota failures on desktop.",
  "category": "desktop",
  "articleSlug": "desktop-vault-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/vault/VaultBrowser.tsx, apps/desktop/src/renderer/lib/vault/store.ts, packages/e2ee-core/src/chunker.ts and apps/api/src/pages/api/e2ee/chunk-upload-url.ts. Production behavior was not tested and no production action was performed.",
  "related": [
    "hc-vault-overview",
    "hc-vault-recovery"
  ],
  "keywords": [
    "desktop vault upload",
    "Vault in the desktop app",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Vault encrypts each selected file on the computer before ciphertext is uploaded. The current desktop uploader reads one whole file into memory, then divides it into content-defined chunks with a 256 KiB target minimum, about 1 MiB average, and 4 MiB plaintext hard maximum; the final chunk can be smaller than 256 KiB.

<figure class="help-screenshot"><a href="/screenshots/desktop-vault-upload-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-vault-upload-help-workflow-2026-10-14.webp" alt="Desktop Vault upload workflow from selecting an unlocked Space through the Uploaded confirmation." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Select files inside the intended Space and wait for the named upload confirmation. <a href="/screenshots/desktop-vault-upload-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Unlock **Vault**, open a Space, and navigate to the destination folder shown in the breadcrumb.
- Check free storage for the storage workspace attached to that Space. Vault bytes count against the owner’s active plan and any whole-GB workspace storage cap; the quota refusal directs you to empty trash or increase available capacity.
- Choose files that fit available device memory. Because the desktop renderer buffers each file before encryption, very large files can fail locally even when the cloud quota has room.
- You must still be a member of the encrypted Space. Upload is not restricted by a separate Vault plan, but the destination workspace must exist and have quota available.

## Steps

1. In **Vault**, select the correct Space and open the destination folder.
2. Click **Upload**, select one or more files, and confirm the operating-system picker. The grid shows a busy state while files are handled sequentially.
3. Alternatively, drag loose files onto the dashed Vault area. When a dropped selection contains a directory, the app shows **Folders are not supported in the Vault yet**. Only loose top-level files are uploaded; nested folder contents are not imported.
4. Keep the app open until the toast says **Uploaded** and names the file or number of files.
5. Verify each new encrypted file card appears in the same folder. The card’s extension label is derived from its name; it is not a decrypted preview.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Vault encryption overview showing plaintext remaining on the device while encrypted chunks enter cloud storage." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The upload path sends encrypted chunks and encrypted metadata rather than the original file contents. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Storage, encryption, and recovery

Each encrypted chunk may contain at most 4,194,304 plaintext bytes; authenticated encryption adds 16 bytes to that chunk on the wire. An encrypted file manifest records the chunk sequence and integrity root, while a separately signed root manifest binds the folder-index Merkle root. The chunk ceiling is not a 4 MiB file-size limit.

If an older Space has no live storage-workspace association, the first upload may receive HTTP 412. The desktop app then attaches the Space to the active storage workspace and retries once. This association determines which workspace pays for the bytes, so confirm the active workspace before the upload.

## Troubleshooting

- **Upload failed** followed by a quota message: empty that workspace’s trash, raise its admin storage cap, or move to a plan with enough account-wide storage.
- **This Space is not attached to a storage workspace yet - attach it to one of your workspaces before adding files** means no valid workspace can be charged. Select a valid active workspace and retry.
- **Could not upload file.** Retry one small file to separate a memory or connectivity problem from a specific file. Successful earlier files in a multi-file selection remain uploaded; the operation is not an all-or-nothing batch.
- Do not assume dropping a folder preserved its tree. Create the needed folder structure through a supported client first, or upload its files to the current Vault folder.

## Expected result

Dosya displays **Uploaded**, refreshes the selected folder, and shows every successfully committed item. File contents were encrypted locally; storage receives ciphertext chunks, an encrypted file manifest, and encrypted folder-index data. A separately signed root manifest binds the folder-index Merkle root. A failed later file does not roll back files already completed.

## Related guides

- [Understand Vault](/files/vault-overview)
- [Recover Vault](/files/vault-recovery)
