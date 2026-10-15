---
{
  "articleId": "hc-vault-wrong-workspace",
  "locale": "en",
  "revision": 3,
  "title": "Show Vault Spaces for the correct workspace",
  "summary": "Switch the mobile Vault to the workspace attached to an expected encrypted Space, distinguish My Spaces from Shared with me, and refresh the account-scoped list safely.",
  "category": "files",
  "articleSlug": "vault-wrong-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against current local product source for the mobile workspace header, Vault Space discovery, active-workspace filtering, shared-Space listing, account-scoped persistence, and unlock behavior on 2026-10-14. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-vault-recovery",
    "hc-vault-unlock-troubleshooting"
  ],
  "keywords": [
    "Vault wrong workspace",
    "encrypted cloud storage workspace",
    "Vault Space missing",
    "switch Vault workspace",
    "Dosya Vault"
  ]
}
---
The mobile Vault uses the workspace shown in its header to filter **My Spaces**. A Space attached to another workspace does not appear in that section until you switch workspace context. Spaces shared by someone else appear separately under **Shared with me**.

<figure class="help-screenshot"><a href="/screenshots/vault-workspace-scope-map-2026-10-14.webp"><img src="/screenshots/vault-workspace-scope-map-2026-10-14.webp" alt="Workflow for “Show Vault Spaces for the correct workspace”: tap the workspace header to open Your workspaces; open the Space and verify one expected folder or harmless file." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: read the Vault workspace header, switch context, check My Spaces, then check Shared with me. <a href="/screenshots/vault-workspace-scope-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm which Dosya account owns or receives the expected Space.
- Identify the regular Dosya workspace associated with that Space.
- Keep the Vault passphrase and offline recovery key private. A workspace switch does not require either value again while Vault remains unlocked.
- Do not create a replacement Space merely because the expected one is missing from the current workspace view.

## Steps: switch Vault workspace scope

1. Open the **Vault** tab and unlock it normally.
2. Read the workspace name in the header above the Vault content.
3. Tap the workspace header to open **Your workspaces**.
4. Choose the workspace associated with the missing Space. Wait for the workspace-switch transition to finish.
5. Return to **My Spaces** and look for the expected name.
6. If it was created or renamed on another device, allow the discovered placeholder name a moment to update from the encrypted Space metadata.
7. Check **Shared with me** when another person shared the Space. Shared Spaces are listed separately from the active-workspace **My Spaces** filter.
8. Open the Space and verify one expected folder or harmless file.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault recovery screen for unlocking encrypted Spaces with an offline recovery key." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Recovery unlock restores access to the Vault identity. It does not select a workspace or move a Space between workspaces. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

**My Spaces** shows the Spaces attached to the selected workspace, and opening the expected Space displays its own decrypted contents. A shared Space remains under **Shared with me** regardless of which workspace is active.

## Limits and important details

- The known Space list is stored per signed-in account on the phone. Switching to another Dosya account changes the available Vault identity and list.
- Legacy Spaces without a stored global-workspace association can appear across workspace contexts.
- Creating **New Space** attaches it to the workspace active at creation time. Verify the header before creating one.
- Workspace switching changes the list filter; it does not decrypt, copy, rename, or move encrypted files.

## Troubleshooting

**The correct workspace shows no Spaces.** Confirm the Dosya account, unlock Vault, and allow the initial discovery request to finish. Use **Retry** if the identity check or Space check reports an error.

**A Space has a placeholder name.** Leave the unlocked list open briefly. Dosya resolves names from encrypted Space metadata in the background.

**The Space is shared, not owned.** Look under **Shared with me**. It is intentionally separated from **My Spaces**.

**Vault asks for recovery information.** Complete the normal unlock or recovery flow first. Support cannot reconstruct a lost passphrase or recovery key.

## Related guides

- [Recover Vault](/files/vault-recovery)
- [Troubleshoot Vault unlock](/troubleshooting/vault-unlock)
