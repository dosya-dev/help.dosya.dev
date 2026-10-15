---
{
  "articleId": "hc-vault-clear-device-cache",
  "locale": "en",
  "revision": 5,
  "title": "Clear a stale Vault device cache safely",
  "summary": "Clear only local Vault state safely: finish transfers, use Lock, understand persisted Space hints, and avoid the irreversible destroy-vault control.",
  "category": "files",
  "articleSlug": "vault-clear-device-cache",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/stores/e2ee.ts, apps/web/src/components/e2ee/unlock-gate.tsx, apps/web/src/components/e2ee/encrypted-browser.tsx, apps/api/src/pages/api/e2ee/user-keys.ts, and packages/e2ee-client/src/file.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-vault-recovery",
    "hc-vault-unlock-troubleshooting"
  ],
  "keywords": [
    "vault clear device cache",
    "Vault recovery and diagnostics",
    "Dosya help",
    "cloud storage"
  ]
}
---
Vault secrets live only in memory. The persisted browser store keeps nonsecret Space hints—IDs, names, ownership anchors, workspace grouping, and shared status—but no passphrase, recovery key, private key, session, or file bytes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for finishing Vault transfers, choosing Lock, clearing Dosya site data, and downloading a known file from the expected Space." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The cache procedure uses existing browser and Vault controls without inventing an in-app reset button. <a class="workflow-map-full" href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-clear-device-cache-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Wait until the Vault no longer shows its busy skeleton and any upload has produced **Uploaded** or **Upload failed**. There is no persistent transfer queue to resume after clearing browser state.
2. Choose **Lock** in the Vault header. This immediately drops the in-memory session, open Space, decrypted entries, member list, and current error.
3. Reload the Vault and unlock again. Use this supported reset first; it preserves the locally remembered nonsecret Space list while fetching encrypted state with a new session.
4. If stale Space labels remain, sign out and clear site data for Dosya in the browser settings. This removes the `dosya_e2ee` localStorage record and other site state, so expect to sign in again.
5. Return to **Vault** and unlock again, using the passphrase or **Use recovery key**. Allow Dosya to list the Spaces available to the server identity.
6. Open the expected Space and folder, then download a small known file. A successful decrypt proves the cloud data and current identity still agree.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault unlock screen in recovery-key mode with Recovery key, Unlock, Use passphrase, and Destroy vault and start over controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>After clearing local state, use passphrase or the saved recovery key to rebuild the in-memory session. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Avoid the wrong control.** **Destroy vault and start over** is not cache cleanup. It permanently deletes the caller’s Vault identity, grants, and Space membership after account-password confirmation. Other members keep their identities and access to shared Space data. Authenticator-app 2FA also requires a current code; an account using email-code 2FA must switch to an authenticator app before destruction is available.

## Expected result

A fresh in-memory session loads encrypted Space metadata and files without deleting server content. Only nonsecret browser hints are lost if site data is cleared; the Vault identity remains intact.

## Related guides

- [Recover Vault access with saved credentials](/files/vault-recovery)
- [Troubleshoot Vault unlock errors](/troubleshooting/vault-unlock)
