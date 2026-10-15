---
{"articleId":"hc-vault-overview","locale":"en","revision":1,"title":"Understand Dosya Vault","summary":"Learn what Vault protects, how browser-side encryption and Spaces work, and when ordinary files or password-protected share links are more suitable.","category":"files","articleSlug":"vault-overview","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the Vault setup, unlock, Space, upload, download and lock states against the local current web app and encryption store on 2026-10-12. Screenshots use isolated representative data.","related":["hc-vault-setup","hc-vault-files","hc-vault-recovery","hc-password-link"],"keywords":["vault","end-to-end encryption","encrypted files","encrypted space","client-side encryption","vault lock"]}
---
Dosya Vault is a separate area for end-to-end encrypted files. Your browser encrypts a file before it leaves the device, and Dosya stores ciphertext. You unlock the Vault locally with your Vault passphrase or recovery key.

## Before you start

- Decide whether the file needs Vault protection or the collaboration features of ordinary storage.
- Use a current browser on a device you trust.
- Plan where to store the recovery key before setup. Dosya shows it once.
- Remember that your Dosya account password and Vault passphrase protect different things.

## Steps: choose the right storage method

1. Use **ordinary files** when you need the normal file browser and standard sharing workflows.
2. Use a **password-protected share link** when a recipient needs a link protected by a password. This does not turn the stored file into a Vault file.
3. Use **Vault** when you need browser-side encryption and can manage a separate passphrase plus recovery key.
4. Inside Vault, choose or create a **Space**. **My Spaces** are yours; **Shared with me** contains encrypted Spaces to which another member granted access.
5. Lock Vault when you finish, especially on a shared device. Locking clears the active in-memory Vault session.

<figure class="help-screenshot"><a href="/screenshots/vault-setup-passphrase-2026-10-12.webp"><img src="/screenshots/vault-setup-passphrase-2026-10-12.webp" alt="Dosya Vault setup screen asking for a separate encryption passphrase and confirmation before creating the encrypted identity." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Vault setup begins with a separate passphrase. Losing both the passphrase and recovery key makes the encrypted files unrecoverable. <a href="/screenshots/vault-setup-passphrase-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

<figure class="help-screenshot"><a href="/screenshots/vault-encrypted-files-2026-10-12.webp"><img src="/screenshots/vault-encrypted-files-2026-10-12.webp" alt="Unlocked Dosya Vault showing private and shared encrypted Spaces, an end-to-end encrypted badge, upload control and encrypted files." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>An unlocked Vault organizes encrypted files into Spaces. The screenshot contains isolated representative file and Space names. <a href="/screenshots/vault-encrypted-files-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

When Vault is unlocked, you can see the Spaces available to you and work with their encrypted files. Upload encryption and download decryption happen in the browser. When you lock Vault or end the session, you must unlock it again to read those files.

## Limits and security boundaries

- Dosya cannot reset a forgotten Vault passphrase or reconstruct a lost recovery key.
- Folders are not supported in Vault yet. Dropping a folder uploads supported loose files at the Space root rather than recreating its folder tree.
- Ordinary share links and their passwords are separate from Vault access and do not decrypt Vault files.
- Anyone with your recovery key can use it to unlock your Vault identity. Store it like a high-value secret.
- End-to-end encryption protects file contents in the Vault flow. It does not remove the need to secure the device, browser session and account.

## Troubleshooting

**Vault asks for a different password.** Enter the Vault passphrase created during setup, rather than your normal account password.

**A folder did not appear after dropping it.** Vault does not preserve folder structures yet. Upload individual files and organize them by Space.

**A teammate cannot open an ordinary share link to a Vault file.** Vault uses encrypted Space membership. Add the intended member through the Vault access flow rather than sending a standard file link.

**The files disappeared after locking.** Unlock Vault again. Locking removes the local session; it does not delete the encrypted Space or its files.

## Related guides

- [Set up and unlock Dosya Vault](/files/vault-setup)
- [Upload and download encrypted Vault files](/files/vault-files)
- [Recover access to Dosya Vault](/files/vault-recovery)
- [Protect a sharing link with a password](/sharing/password-link)
