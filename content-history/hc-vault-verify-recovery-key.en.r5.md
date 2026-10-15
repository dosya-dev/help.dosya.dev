---
{
  "articleId": "hc-vault-verify-recovery-key",
  "locale": "en",
  "revision": 5,
  "title": "Verify a Vault recovery key",
  "summary": "Test a Vault recovery key through the real mobile unlock path, identify the exact failure message, and preserve the only offline recovery copy.",
  "category": "files",
  "articleSlug": "vault-verify-recovery-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/src/vault/ui/RecoveryKeyCard.tsx, apps/mobile/src/vault/ui/UnlockCard.tsx, apps/mobile/src/vault/store.ts, apps/mobile/src/vault/engine.ts, packages/e2ee-client/src/session.ts, and packages/e2ee-core/src/keys.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-vault-recovery", "hc-vault-unlock-troubleshooting"],
  "keywords": ["vault verify recovery key", "Vault recovery and diagnostics", "Dosya help", "cloud storage"]
}
---
Dosya has no separate recovery-key checker. The supported verification is a real unlock of the existing Vault identity with the saved key. Success proves that the key can unwrap the same encrypted identity used by your Spaces; it does not rotate the key or validate a printed copy you did not enter.

<figure class="help-screenshot"><a href="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp"><img src="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp" alt="Recovery-key verification flow using Use recovery key and Unlock with recovery key on mobile." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verify against the existing account identity while retaining the original offline recovery record. <a href="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Keep the authoritative offline recovery key in place. Make a temporary working copy for entry; do not move or destroy the only copy during this check.
- Confirm the signed-in account is the one that created the recovery key. A correct key for another Dosya account will fail authentication.
- The generated recovery secret is 32 random bytes displayed as 64 lowercase hexadecimal characters. The mobile parser accepts spaces, line breaks, and hyphens around that value.
- Connect to the network so the app can fetch your account’s encrypted key bundle. Recovery unlock does not send the recovery key to Dosya and does not call the passphrase OPRF endpoint.

## Steps

1. If Vault is open, tap **Lock**. This clears the active session and decrypted Vault cache without changing cloud data or the stored recovery wrapper.
2. On **Unlock your Vault**, tap **Use recovery key**.
3. Paste the working copy into **Recovery key**. Visually compare its first and last groups with the offline original.
4. Tap **Unlock with recovery key**. The field clears as soon as it is submitted, whether the attempt succeeds or fails.
5. Confirm that the expected **My Spaces** and **Shared with me** entries appear. Open one known Space and folder to prove the recovered identity can use its existing grants.
6. Lock Vault again, remove the temporary clipboard or note copy, and retain the protected offline original.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault recovery unlock screen with the Recovery key field and recovery submit action." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A successful recovery unlock restores the same identity in memory for this session. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Vault unlocks and the known Space contents decrypt under the existing identity. Verification does not change the passphrase, recovery wrapper, public keys, membership, files, or plan. The recovery key remains the only fallback if the passphrase is later lost.

## Troubleshooting

**You see “That recovery key didn't unlock your Vault.”** Check the account and all 64 hexadecimal characters. Spaces and hyphens are removed automatically, but a missing nibble, non-hex character, wrong account key, or altered stored wrapper cannot authenticate.

**You see “Couldn't check encryption status.”** The account key-bundle lookup failed before verification. Restore connectivity and tap **Retry**; do not choose setup while identity status is unknown.

**Unlock succeeds but a Space is missing.** The recovery key restores the account identity, not revoked membership. Refresh the Space list and ask a current member to inspect access if the Space was shared.

**You dismissed “Save your recovery key” during setup without preserving it.** The setup card shows that generated value once and then the mobile store forgets it. Dosya cannot reveal or reconstruct it later. Keep the passphrase safe; if both secrets are lost, the encrypted identity and its data are unrecoverable.

**You expected recovery to set a new passphrase.** The current mobile flow only unlocks a session with the recovery-derived key. It does not rewrap the identity or replace the old passphrase.

## Related guides

- [Recover Vault](/files/vault-recovery)
- [Troubleshoot Vault unlock](/troubleshooting/vault-unlock)
