---
{"articleId":"hc-vault-recovery","locale":"en","revision":1,"title":"Recover access to Dosya Vault","summary":"Unlock Vault with the recovery key when the passphrase is unavailable, and understand the permanent consequences of destroying a Vault identity.","category":"files","articleSlug":"vault-recovery","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed recovery-key unlock and the destructive Vault reset path against the local current web app and encryption store on 2026-10-12. The illustrated key is fictional and isolated.","related":["hc-vault-setup","hc-vault-overview","hc-vault-files","hc-password-reset"],"keywords":["vault recovery","recovery key","forgot vault passphrase","destroy vault","reset encrypted identity","unrecoverable files"]}
---
Use the recovery key when you cannot enter the Vault passphrase. It restores access to the encrypted identity; destroying the Vault is a separate last-resort action that makes every file encrypted under the old identity unreadable.

## Before you start

- Look for the recovery key in the password manager or offline record chosen during setup.
- Work privately. Do not paste the key into chat, email, support tickets or a screen recording.
- Keep any still-unlocked Vault session open on another trusted device until recovery succeeds.
- Treat **Destroy vault and start over** as permanent data loss, not a normal password reset.

## Steps: unlock with the recovery key

1. Sign in to Dosya and open **Vault**.
2. On the unlock screen, select **Use recovery key**.
3. Paste or type the complete recovery key. The field accepts the key with spaces or dashes removed or included.
4. Select **Unlock**.
5. Open the required Spaces and confirm that important files can be downloaded and opened.
6. Follow the available security controls to establish access you can retain. Keep the recovery key secured until you have verified the new access path.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault unlock screen in recovery-key mode with a recovery key field, Unlock action and destructive reset option below." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Select **Use recovery key** when the Vault passphrase is unavailable. The destructive reset option below is only for cases where the encrypted data can be abandoned. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-key-2026-10-12.webp"><img src="/screenshots/vault-recovery-key-2026-10-12.webp" alt="One-time Dosya Vault recovery-key dialog showing a fictional example key and guidance to save it in a password manager or offline." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The recovery key originates in the one-time setup dialog. The key visible here is fictional and cannot unlock any Vault. Never share your real key. <a href="/screenshots/vault-recovery-key-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A valid recovery key unlocks the existing Vault identity and its encrypted Spaces in the browser. Confirm recovery by opening or downloading a known file, rather than relying only on the unlocked screen.

## Steps: start over only when the encrypted data can be lost

1. Exhaust searches for the Vault passphrase, recovery key and any trusted device with an active unlocked session.
2. Read the destructive warning in full.
3. If every old Vault file can be abandoned, select **Destroy vault and start over**.
4. Confirm with the requested account password and two-factor authentication when enabled.
5. Create a new encrypted identity and save its new recovery key.

## Limits and irreversible consequences

- Dosya cannot reset the Vault passphrase or generate the old recovery key.
- If both are lost, the old encrypted files cannot be recovered by Dosya support.
- Destroying the Vault identity does not decrypt or migrate old files. It makes all files encrypted for that identity permanently unreadable.
- Your account password and account password-reset email do not decrypt Vault data.
- Removing spaces or dashes can help normalize a copied key, but missing or changed key characters cannot be reconstructed.

## Troubleshooting

**The recovery key is rejected.** Copy it again from the original secure record. Remove surrounding whitespace, check the first and last characters, and avoid using a key from a different account or identity.

**You still have an unlocked session elsewhere.** Keep it open. Download essential files from that trusted session before changing or destroying anything.

**Two-factor authentication blocks the destructive reset.** Recover account-level two-factor access first. This does not recover the Vault passphrase, but it may be required to authorize identity destruction.

**Both passphrase and recovery key are gone.** Search backups and password-manager history before using the destructive option. Support cannot bypass the encryption or restore the old files afterward.

## Related guides

- [Set up and unlock Dosya Vault](/files/vault-setup)
- [Understand Dosya Vault](/files/vault-overview)
- [Upload and download encrypted Vault files](/files/vault-files)
- [Reset your Dosya account password](/account/reset-password)
