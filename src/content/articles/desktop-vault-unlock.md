---
{
  "articleId": "hc-desktop-vault-unlock",
  "locale": "en",
  "revision": 5,
  "title": "Unlock Vault in the desktop app",
  "summary": "Unlock Vault with a passphrase or 32-byte recovery key, understand local key handling, and avoid the irreversible destroy-and-reset path on desktop.",
  "category": "desktop",
  "articleSlug": "desktop-vault-unlock",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/vault/UnlockGate.tsx, apps/desktop/src/renderer/lib/vault/store.ts, packages/e2ee-client/src/session.ts and apps/api/src/pages/api/e2ee/oprf-evaluate.ts. Production behavior was not tested and no production action was performed.",
  "related": [
    "hc-vault-overview",
    "hc-vault-recovery"
  ],
  "keywords": [
    "desktop vault unlock",
    "Vault in the desktop app",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Unlocking reconstructs the encryption session on this computer. Dosya never receives the raw passphrase: the client blinds it for a verified OPRF exchange, applies Argon2id locally, and unwraps the private identity keys only in memory.

<figure class="help-screenshot"><a href="/screenshots/desktop-vault-unlock-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-vault-unlock-help-workflow-2026-10-14.webp" alt="Desktop Vault unlock workflow showing passphrase mode, recovery-key mode, and the unlocked encrypted Space browser." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use either the Vault passphrase or the one-time recovery key saved during setup. <a href="/screenshots/desktop-vault-unlock-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in to the correct Dosya account and keep an internet connection for the identity record and passphrase-hardening exchange.
- Use the Vault encryption passphrase, not necessarily the account password. The account password is requested only for **Destroy vault and start over**.
- If the passphrase is unavailable, locate the 32-byte recovery key shown once at setup as 64 hexadecimal characters. Spaces, dashes, and line breaks added when storing it are ignored.

## Steps

1. Open **Vault** in the desktop sidebar. Wait while the client checks whether this account already has an encrypted identity.
2. In **Unlock Vault**, enter **Your encryption passphrase**, then click **Unlock**. The control reads **Unlocking…** while local key derivation runs.
3. For recovery, select **Use recovery key**, paste the value into **Recovery key**, and click **Unlock**. Select **Use passphrase** to switch back.
4. When the Vault browser appears, confirm the header shows **End-to-end encrypted** and your Spaces begin loading.
5. Select **Lock** when leaving the computer. Locking removes the active session, open Space, folder entries, and member list from application memory.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Vault security overview showing encrypted identity material stored remotely and keys opened on the local device." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The service stores wrapped identity material; the unlocked private keys remain inside the desktop encryption engine. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Errors and retry timing

- **Couldn’t check encryption status** leaves the identity state unknown and offers **Retry**. Never choose setup as a workaround; replacing real identity keys would orphan existing encrypted data.
- A wrong passphrase produces **Incorrect passphrase or no identity found.** A wrong recovery value produces **That recovery key did not unlock your Vault.** These messages deliberately reveal no internal cryptographic detail.
- **Recovery key unlock is not available in this version yet. Please try again after the next update.** Update the desktop app before attempting recovery again.
- The authenticated OPRF endpoint applies an in-isolate sliding-window limit of 10 evaluations per account over 3,600 seconds; it is not a globally distributed counter. If a request returns **Too many requests**, stop guessing and follow its **Retry-After** or **X-RateLimit-Reset** timing, or use the saved recovery key.

## Last-resort reset

Use **Destroy vault and start over** only when both unlock methods are permanently lost. The dialog requires the Dosya **Account password** and the acknowledgement **I understand my encrypted files cannot be recovered after this**. An authenticator-app 2FA account also needs a **Two-factor code**; the field accepts up to 10 non-space characters even though its placeholder says **6-digit code**. Email-code 2FA cannot complete this one-request reauthentication and returns **Destroying a vault is not available on accounts using email codes for two-factor authentication. Switch to an authenticator app in your security settings, then try again.**

Clicking **Destroy my vault** deletes this account’s Vault identity, sealed grants, and membership rows. It deliberately leaves workspace heads, folder indexes, manifests, encrypted chunks, and the membership log intact so remaining members of a shared Space keep their data. The old ciphertext becomes permanently unreadable to this account; a fresh setup creates unrelated keys and cannot restore its former access.

## Expected result

A valid passphrase or recovery key changes the session to unlocked and exposes only Spaces whose keys the account can open. Failed attempts keep Vault locked. Destroying the identity is the sole irreversible path described here and must never be used as routine troubleshooting.

## Related guides

- [Understand Vault](/files/vault-overview)
- [Recover Vault](/files/vault-recovery)
