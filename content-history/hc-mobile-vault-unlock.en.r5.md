---
{
  "articleId": "hc-mobile-vault-unlock",
  "locale": "en",
  "revision": 5,
  "title": "Unlock Vault on mobile",
  "summary": "Unlock Vault on your phone with its passphrase or recovery key, understand the five-minute background lock, and resolve exact unlock errors.",
  "category": "files",
  "articleSlug": "mobile-vault-unlock",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/src/vault/ui/UnlockCard.tsx, apps/mobile/src/vault/store.ts, apps/mobile/src/vault/engine.ts, apps/mobile/src/vault/backend.ts, and apps/api/src/pages/api/e2ee/oprf-evaluate.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-vault-setup", "hc-vault-members"],
  "keywords": ["mobile vault unlock", "Vault in the mobile app", "Dosya help", "cloud storage"]
}
---
Vault unlocks locally on each phone. Your passphrase is hardened and used to unwrap your encrypted identity; Dosya does not receive the passphrase or hold a replacement for it. You must be signed in to the account that owns the Vault identity, but the mobile client applies no separate plan or workspace-role check to the unlock control.

<figure class="help-screenshot"><a href="/screenshots/mobile-vault-unlock-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-vault-unlock-help-workflow-2026-10-14.webp" alt="Mobile Vault unlock card showing the Passphrase field, Unlock button, and Use recovery key control." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The Vault gate accepts one secret at a time and clears that field after every attempt. <a href="/screenshots/mobile-vault-unlock-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Update to a released Dosya mobile build with the native Vault runtime; Expo Go does not provide the required native crypto module.
- Confirm the signed-in Dosya account. Vault identities and Space memberships belong to the account, not merely to the selected storage workspace.
- Have either the exact passphrase or the 64-character lowercase hexadecimal recovery key created during Vault setup. Spaces, line breaks, and hyphens in a pasted recovery key are ignored.
- Stay online for unlock. Passphrase unlock needs the stored key bundle, public OPRF key, and an authenticated OPRF evaluation; recovery-key unlock fetches the stored key bundle but skips the OPRF round trip.

## Steps

1. Open the **Vault** tab. Wait while the app checks whether the current account has a Vault identity.
2. On **Unlock your Vault**, enter the value in **Passphrase**, then tap **Unlock**. The button remains unavailable while the field is empty or an attempt is running.
3. If the passphrase is unavailable, tap **Use recovery key**, paste the saved key into **Recovery key**, and choose **Unlock with recovery key**. Tap **Use your passphrase** to switch back.
4. After a successful unlock, confirm that **My Spaces** appears. Spaces shared by other people are listed separately under **Shared with me**.
5. For a deliberate lock, use the **Lock** row on the Vault screen. The app also locks Vault after five minutes in the background; returning then requires another local unlock.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Unlocked Dosya Vault overview with My Spaces, Shared with me, New Space, and Lock controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>An unlocked session reveals the Space lists and the explicit Lock action. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The phone holds the decrypted identity only for the active Vault session and can open Spaces assigned to that account. Unlocking does not export any plaintext file or change a workspace, member, plan, or cloud object.

## Troubleshooting

**You see “Couldn't check encryption status.”** The identity lookup failed. Check the connection and tap **Retry**; do not start setup, because an unavailable identity check is not proof that the account has no Vault.

**You see “Couldn't unlock. Check your passphrase and try again.”** Re-enter the original passphrase. The field was cleared immediately after the previous tap. Passphrase evaluation is limited to 10 attempts per user per hour in each current API isolate; this is not a globally shared counter. Mobile replaces every unlock failure, including HTTP 429, with the same generic sentence and does not expose `Retry-After` or reset time. Stop repeated attempts and try later rather than waiting for an in-app countdown.

**You see “That recovery key didn't unlock your Vault.”** Verify that the key belongs to this account and that every hexadecimal character was copied. Formatting spaces and hyphens are harmless; missing or changed characters are not recoverable.

**The app locks while you are reading or downloading.** Five minutes in the background ends the Vault session, aborts active Vault downloads, clears transfer rows, and wipes the decrypted Vault cache. Unlock again and reopen the file; the encrypted cloud copy remains intact.

## Related guides

- [Set up Vault](/files/vault-setup)
- [Manage Vault members](/files/vault-member-access)
