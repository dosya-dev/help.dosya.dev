---
{
  "articleId": "hc-mobile-vault-browse-space",
  "locale": "en",
  "revision": 5,
  "title": "Browse a Vault Space on mobile",
  "summary": "Find your own and shared Vault Spaces on mobile, open encrypted folders safely, and recover when a Space name, grant, or folder listing cannot load.",
  "category": "files",
  "articleSlug": "mobile-vault-browse-space",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/mobile/app/(tabs)/vault/index.tsx, apps/mobile/app/(tabs)/vault/space/[id]/[folderId].tsx, apps/mobile/src/vault/store.ts, apps/mobile/src/vault/engine.ts, and apps/api/src/pages/api/e2ee/my-workspaces.ts. Production behavior was not tested during this documentation update.",
  "related": ["hc-vault-setup", "hc-vault-members"],
  "keywords": ["mobile vault browse space", "Vault in the mobile app", "Dosya help", "cloud storage"]
}
---
A Vault Space is an end-to-end encrypted file tree. Discovery returns the caller's Space IDs plus plaintext `globalWorkspaceId` and `createdByMe` display metadata. Folder names, file names, sizes, manifests, and file contents remain encrypted records that mobile opens on the phone.

<figure class="help-screenshot"><a href="/screenshots/mobile-vault-browse-space-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-vault-browse-space-help-workflow-2026-10-14.webp" alt="Vault mobile screen separating My Spaces from Shared with me before a Space is opened." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Choose the Space from the section that describes how your account received it. <a href="/screenshots/mobile-vault-browse-space-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in, select the intended Dosya workspace in the header, and unlock **Vault** on this phone.
- You can browse a Space only while your account is a current member and has a valid sealed Space-key grant. Vault membership is separate from the role shown for ordinary workspace files.
- **My Spaces** uses the discovery response's plaintext `createdByMe` and `globalWorkspaceId` fields to show your Spaces for the selected storage workspace, plus legacy or temporarily unscoped Spaces. **Shared with me** contains discovered entries whose scope creator is another account.
- The storage workspace and its plan determine where Space bytes are charged. Browsing existing encrypted entries does not consume more storage.

## Steps

1. Open **Vault** and wait for Space discovery to finish. A newly discovered label may first appear as **Space** or **Shared Space** followed by six characters of its ID while the phone resolves its encrypted name.
2. Under **My Spaces** or **Shared with me**, tap the required Space. The app opens its key grant before navigating to the root folder.
3. At the root, confirm the header shows the Space name. Folders are sorted before files; names within each kind use case-insensitive alphabetical order.
4. Tap the named **folder row** to move into it. Returning to a parent clears the previous folder’s rows before loading the correct listing, so stale entries cannot be opened with the wrong folder ID.
5. Use the row’s more control when you need **Save to device** for a file or **Delete** for an entry. The **+** control offers **Upload photos or videos**, **Upload a file**, and **New folder**.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Dosya Vault overview used to enter an encrypted Space and browse its root folder." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The overview is the safe return point when a Space switch or listing refresh fails. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected folder displays its decrypted entries without exposing names or file contents to the Dosya service. Opening folders is read-only. Saving creates an external plaintext copy, while **Delete** is a separate confirmed and irreversible Vault operation.

## Troubleshooting

**You see “Couldn't check for Spaces.”** Space discovery failed. Keep Vault unlocked, restore the connection, and revisit the Vault tab to run discovery again.

**You see “Couldn't open the Space.”** The grant may be missing, stale, revoked, or unreadable on this identity. Return to **Vault**, refresh the account session, and ask a current Space member to confirm your membership if the Space was shared.

**You see “Couldn't load this folder.”** The Space opened but its encrypted folder index did not. Retry on a stable connection. Do not create a replacement folder with the same name as a recovery step; that would be a different encrypted folder.

**The Space is absent from My Spaces.** Check the active storage workspace. Shared Spaces remain under **Shared with me**; an own Space scoped to another workspace is intentionally filtered from the current **My Spaces** list.

**The lock card replaces the folder list.** The five-minute background timeout, an explicit **Lock**, sign-out, or an account switch ended the session. Unlock in place; the screen reopens the Space and reloads the current folder.

## Related guides

- [Set up Vault](/files/vault-setup)
- [Manage Vault members](/files/vault-member-access)
