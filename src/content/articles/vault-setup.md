---
{"articleId":"hc-vault-setup","locale":"en","revision":1,"title":"Set up and unlock Dosya Vault","summary":"Create your encrypted Vault identity, save the one-time recovery key, enter the Vault, and lock or unlock it safely on later visits.","category":"files","articleSlug":"vault-setup","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed first-time Vault identity setup, the one-time recovery-key dialog, passphrase unlock and manual lock behavior against the local current web app on 2026-10-12. The shown recovery key is fictional and isolated.","related":["hc-vault-overview","hc-vault-files","hc-vault-recovery","hc-two-factor"],"keywords":["set up vault","vault passphrase","recovery key","unlock vault","lock vault","encrypted identity"]}
---
Vault setup creates the encrypted identity used to open your Vault Spaces. It requires a dedicated passphrase and produces a recovery key that appears once during setup.

## Before you start

- Use a trusted device and private browser session.
- Prepare a password manager or secure offline location for the recovery key.
- Choose a unique Vault passphrase you can retain. Your account password cannot replace it.
- Finish setup without screen sharing or recording the recovery-key screen.

## Steps: create the Vault identity

1. Sign in to Dosya and open **Vault**.
2. Select **Set up encryption**.
3. Enter a strong Vault passphrase, then enter it again exactly.
4. Read the recovery warning and complete setup.
5. When **Save your recovery key** appears, copy the entire key to your password manager or secure offline record.
6. Check that the saved copy is complete before selecting **I've saved it**. The setup flow does not show the key again.

<figure class="help-screenshot"><a href="/screenshots/vault-setup-passphrase-2026-10-12.webp"><img src="/screenshots/vault-setup-passphrase-2026-10-12.webp" alt="First-time Dosya Vault setup with fields for a new Vault passphrase and matching confirmation plus a recovery warning." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Create a dedicated Vault passphrase. Dosya cannot reset it or recover encrypted files if the recovery key is also lost. <a href="/screenshots/vault-setup-passphrase-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-key-2026-10-12.webp"><img src="/screenshots/vault-recovery-key-2026-10-12.webp" alt="Dosya Save your recovery key dialog displaying a fictional key, storage guidance and the acknowledgement button shown once after setup." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Save the recovery key before closing this one-time dialog. The key visible in this screenshot is fictional and cannot unlock any Vault. Never publish or send your real key. <a href="/screenshots/vault-recovery-key-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: unlock and lock Vault later

1. Open **Vault** while signed in.
2. Enter the Vault passphrase and select **Unlock**.
3. Work in the required Space.
4. When finished, select the lock control. This clears the active Vault session from memory.
5. Enter the passphrase again the next time you need access.

## Expected result

After setup or unlock, Vault shows **My Spaces** and any **Shared with me** Spaces available to your account. Locking returns you to the unlock screen without deleting encrypted data.

## Limits and precautions

- The recovery key is shown once. Dosya does not provide a later “show key” screen.
- Losing both the Vault passphrase and recovery key makes the existing encrypted files unreadable.
- Browser password autofill may not distinguish your account password from the Vault passphrase. Check the value before submitting.
- The active keys are held for the unlocked browser session. Lock Vault before another person uses the device.

## Troubleshooting

**The two passphrase fields do not match.** Re-enter both values carefully. Check keyboard layout, capitalization and password-manager suggestions.

**The saved recovery key looks incomplete.** Do not close the one-time dialog. Copy it again and verify the beginning and end in the secure destination.

**The passphrase does not unlock Vault.** Confirm you are using the Vault passphrase, not the Dosya sign-in password. If it is lost, switch to recovery-key unlock.

**Vault locks after a reload or new session.** Unlock it again. Keys are not kept as a reusable secret in ordinary browser storage.

## Related guides

- [Understand Dosya Vault](/files/vault-overview)
- [Upload and download encrypted Vault files](/files/vault-files)
- [Recover access to Dosya Vault](/files/vault-recovery)
- [Set up two-factor authentication](/account/two-factor)
