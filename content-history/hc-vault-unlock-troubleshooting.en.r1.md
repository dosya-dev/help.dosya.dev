---
{"articleId":"hc-vault-unlock-troubleshooting","locale":"en","revision":1,"title":"Troubleshoot a Vault that will not unlock","summary":"Diagnose encryption-status, passphrase and recovery-key failures without exposing secrets or destroying an encrypted Vault by mistake.","category":"troubleshooting","articleSlug":"vault-unlock","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed Vault identity-status retry, generic passphrase failure, recovery-key failure and destructive reset safeguards against the local current web app and store on 2026-10-12. The screenshot contains no real secret.","related":["hc-vault-recovery","hc-vault-setup","hc-vault-overview","hc-two-factor-recovery"],"keywords":["vault will not unlock","incorrect vault passphrase","recovery key rejected","encryption status error","vault troubleshooting","destroy vault warning"]}
---
A Vault unlock failure usually belongs to one of three stages: Dosya cannot check whether the encrypted identity exists, the Vault passphrase is rejected, or the recovery key is rejected. Identify the stage before changing anything.

## Before you start

- Keep any trusted device with an already-unlocked Vault session open.
- Do not send a passphrase or recovery key to support or paste it into any page other than the Vault unlock form.
- Check keyboard layout, Caps Lock and password-manager selection.
- Treat **Destroy vault and start over** as permanent data loss.
- If service status or connectivity is uncertain, resolve that before testing secrets repeatedly.

## Steps: identify and fix the failure

1. Open **Vault** and read the card title and error exactly.
2. If it says **Couldn't check encryption status**, select **Retry** after checking the connection. Do not create a new identity; the app has not established whether the existing one is present.
3. If it says **Unlock Vault**, enter the dedicated Vault passphrase. Your Dosya account password is a different credential.
4. If the passphrase is rejected, type it manually once after confirming keyboard layout and autofill. The app intentionally gives a generic failure instead of revealing details about the encrypted identity.
5. If the passphrase is unavailable, select **Use recovery key** and paste the complete key saved during setup. Spaces and dashes are ignored.
6. After recovery-key unlock, open or download a known file to confirm that the correct encrypted identity opened.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault recovery-key unlock mode with its key field, Unlock action and the destructive start-over option shown separately below." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the recovery-key mode only with the key saved during setup. The start-over action is destructive and does not recover encrypted files. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A successful passphrase or recovery-key attempt opens the existing encrypted Spaces. A successful encryption-status retry shows the correct setup or unlock screen without overwriting an existing identity.

## Limits and irreversible actions

- Dosya cannot reset the Vault passphrase or reconstruct a missing recovery key.
- The account password-reset flow does not decrypt Vault data.
- If the current build reports that recovery-key unlock is unavailable, update to the current version and retry; do not destroy the Vault to bypass a client-version problem.
- Destroying the Vault identity makes every file encrypted under it permanently unreadable to you and everyone with whom a Space was shared.
- Destructive reset requires the account password and, when enabled, a two-factor code. These checks authorize destruction; they do not decrypt old data.

## Troubleshooting specific messages

**Couldn't check encryption status.** This is an identity-status or connection check, not evidence that no identity exists. Select **Retry** after connectivity recovers.

**Incorrect passphrase or no identity found.** Confirm the dedicated Vault passphrase, keyboard layout and account. If it remains unavailable, use the recovery key.

**That recovery key did not unlock your Vault.** Copy it again from the original secure record, remove surrounding whitespace and check its beginning and end. Make sure it belongs to this account's Vault identity.

**Recovery key unlock is not available in this version yet.** Update or reload the current client and retry later. Preserve encrypted data; do not use destructive reset simply because this client path is unavailable.

**You still have another unlocked device.** Keep it online and download essential files before taking any destructive action.

**Both credentials are lost.** Search password-manager history, offline records and trusted devices. If none remains, support cannot bypass the encryption. Start over only when every old encrypted file can be abandoned.

## Related guides

- [Recover access to Dosya Vault](/files/vault-recovery)
- [Set up and unlock Dosya Vault](/files/vault-setup)
- [Understand Dosya Vault](/files/vault-overview)
- [Recover account-level two-factor access](/account/two-factor-recovery)
