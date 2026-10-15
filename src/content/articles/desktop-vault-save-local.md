---
{
  "articleId": "hc-desktop-vault-save-local",
  "locale": "en",
  "revision": 5,
  "title": "Save a Vault file locally from desktop",
  "summary": "Unlock Vault, download and decrypt one file to a trusted local destination, then protect the plaintext copy that remains outside Vault on disk.",
  "category": "desktop",
  "articleSlug": "desktop-vault-save-local",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/renderer/components/vault/VaultBrowser.tsx, apps/desktop/src/renderer/components/vault/UnlockGate.tsx, apps/desktop/src/renderer/lib/vault/store.ts, and apps/desktop/src/main/vault-save.ts; no production Vault file was decrypted.",
  "related": [
    "hc-vault-overview",
    "hc-vault-recovery"
  ],
  "keywords": [
    "desktop vault save local",
    "Vault in the desktop app",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Saving from Vault decrypts the selected object on the device and writes a plaintext local copy. That result is no longer protected by Vault encryption, so choose its destination and retention deliberately.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14.webp" alt="Four-step map for saving a Vault file: unlock Vault, choose Download, approve Save decrypted file, then verify and protect the plaintext result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Download and decrypt one Vault item while keeping the resulting unencrypted local copy under the user’s control. <a class="workflow-map-full" href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-vault-save-local-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Vault** and use **Unlock Vault** with the passphrase or **Unlock with recovery key**. Verify the target item’s name and size before starting. The desktop saver allows up to four simultaneous or pending destinations; another attempt can return **Too many downloads in progress**.

## Steps

1. Unlock Vault and select the known encrypted item in the active Vault workspace.
2. Use the item’s **Download** control; this opens the operating-system dialog titled **Save decrypted file**.
3. Choose a trusted destination, review the sanitized output name, and confirm the save; cancelling here prevents decryption from starting.
4. Wait while the Vault content is decrypted in 4 MiB plaintext chunks and streamed to the desktop destination.
5. Confirm the **Saved** toast and its **Saved to {path}** receipt, then open the file and compare its expected contents.
6. Move, encrypt, or delete the plaintext copy according to local policy when it is no longer needed.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Reference for “Save a Vault file locally from desktop”: Dosya Vault overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Save a Vault file locally from desktop”: Dosya Vault overview page. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A newly created output receives owner-only mode `0600` where the platform supports it. Overwriting an existing file retains that file’s prior permissions. Write or decryption failure shows **Download failed**, aborts the sink, and removes the partial plaintext output.

The save operation does not delete or alter the encrypted Vault item. There is no overall file-size ceiling in this flow, although each IPC chunk is guarded at 64 MiB.

## Expected result

The selected item remains encrypted in Vault and a readable plaintext copy exists at the approved local path. The Saved receipt identifies exactly where that copy was written.

Treat the local result as ordinary sensitive data. Vault recovery keys and encryption no longer protect it after successful decryption.

## Related guides

- [Understand Vault](/files/vault-overview)
- [Recover Vault](/files/vault-recovery)
