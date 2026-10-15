---
{
  "articleId": "hc-desktop-vault-spaces",
  "locale": "en",
  "revision": 5,
  "title": "Browse Vault Spaces on desktop",
  "summary": "Find the Vault Spaces attached to the active workspace, distinguish your Spaces from shared ones, and safely open encrypted folder trees on desktop.",
  "category": "desktop",
  "articleSlug": "desktop-vault-spaces",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/vault/VaultBrowser.tsx, VaultSpaces.tsx, apps/desktop/src/renderer/lib/vault/store.ts and apps/api/src/pages/api/e2ee/my-workspaces.ts. Production behavior was not tested and no production action was performed.",
  "related": [
    "hc-vault-overview",
    "hc-vault-recovery"
  ],
  "keywords": [
    "desktop vault spaces",
    "Vault in the desktop app",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Vault Spaces are end-to-end encrypted containers inside the desktop app. The Space list is scoped to your signed-in account: **My Spaces** shows Spaces you created for the active storage workspace, while **Shared with me** shows encrypted Spaces another Dosya user granted to you.

<figure class="help-screenshot"><a href="/screenshots/desktop-vault-spaces-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-vault-spaces-help-workflow-2026-10-14.webp" alt="Desktop Vault workflow showing My Spaces, Shared with me, a selected Space, and its encrypted folder breadcrumb." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Choose the correct Vault Space before following its encrypted folder breadcrumb. <a href="/screenshots/desktop-vault-spaces-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in to the Dosya desktop app and select the storage workspace whose own Spaces you need. Vault is available to signed-in accounts without a separate plan switch.
- Unlock **Vault** with your encryption passphrase or recovery key. The Space browser is hidden while Vault is locked.
- Allow the first refresh to finish. A newly shared item may initially read **Shared Space** while the client decrypts its real name in the background.

## Steps

1. Select **Vault** in the desktop sidebar. The unlocked header must show **End-to-end encrypted** and a **Lock** button.
2. In **My Spaces**, choose the Space tied to the active storage workspace. Legacy Spaces without a stored workspace association also appear here.
3. Use **Shared with me** for a Space granted by another member. Those Spaces remain visible when you switch the active storage workspace because the grant belongs to your account.
4. Open a folder card labelled **Encrypted folder**. Use the breadcrumb at the top of the browser to return to the Space root or an earlier folder.
5. Confirm the file and folder names match the intended Space before uploading, downloading, or opening **Members**.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Dosya Vault overview illustrating client-side encryption and encrypted storage on the service." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Vault encrypts file contents on the device before Dosya stores them. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## How Space selection behaves

Opening a Space verifies its signed membership history, decrypts its index locally, and then loads the root folder. The server returns only Space IDs that the signed-in account currently belongs to. A Space created on this device is kept as a locally trusted founder record; a discovered or shared Space is opened with trust-on-first-use checks.

The Space menu collapses automatically when the viewport is 1,000 pixels wide or narrower. At wider sizes, use the **Collapse** or **Expand** control; that preference is stored only on this computer.

## If a Space is missing or will not open

- **Could not check for shared Spaces.** Confirm the desktop session is online, then lock and unlock Vault to request the account’s membership list again.
- **Could not open Space.** Do not recreate the Space. Retry after checking connectivity and membership; creating another Space produces a different encrypted container.
- A former member no longer receives a Space in discovery after revocation. Ask a member with the required workspace permission to grant access again.
- When switching accounts, the client clears the previous account’s Space names, active Space, members, and one-time recovery key from memory before loading the next account.

## Expected result

The chosen Space opens at its encrypted root, its real name replaces any temporary placeholder, and the browser lists only entries decrypted for that Space. Merely browsing does not upload, delete, rename, or change membership.

## Related guides

- [Understand Vault](/files/vault-overview)
- [Recover Vault](/files/vault-recovery)
