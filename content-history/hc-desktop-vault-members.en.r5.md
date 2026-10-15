---
{
  "articleId": "hc-desktop-vault-members",
  "locale": "en",
  "revision": 5,
  "title": "Review Vault members in the desktop app",
  "summary": "Review Vault membership, invite an existing Dosya user, revoke access with key rotation, and understand the permissions and limits involved.",
  "category": "desktop",
  "articleSlug": "desktop-vault-members",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/vault/VaultMembers.tsx, apps/desktop/src/renderer/lib/vault/engine.ts, packages/e2ee-client/src/workspace.ts and apps/api/src/pages/api/e2ee/role-gates.unit.test.ts. Production behavior was not tested and no production action was performed.",
  "related": [
    "hc-vault-overview",
    "hc-vault-recovery"
  ],
  "keywords": [
    "desktop vault members",
    "Vault in the desktop app",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The **Members** dialog lists the accounts whose encryption keys can open the selected Space. Sharing seals the Space key to an existing Dosya user’s public encryption key; Dosya stores that sealed grant without learning the Space key.

<figure class="help-screenshot"><a href="/screenshots/desktop-vault-members-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-vault-members-help-workflow-2026-10-14.webp" alt="Desktop Vault member workflow showing the member roster, email invitation field, and revoke confirmation." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Verify the selected Space name and member email before granting or revoking encrypted access. <a href="/screenshots/desktop-vault-members-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Unlock Vault and open the intended Space; the dialog title reads **Members: _Space name_**.
- The target must already have a Dosya account and an E2EE identity. If the key directory has no identity for that email, the app reports **That user hasn't set up encryption yet**.
- For a Space attached to a storage workspace, viewing requires **view_team_members**, inviting requires **invite_members**, and revoking another person requires **manage_roles**. Unscoped legacy Spaces use encrypted-Space membership because no workspace role exists to consult.
- Vault is not separately plan-gated. Workspace roles and current Space membership control these actions.

## Steps

1. Click **Members** in the open Space. Find your email; the roster marks it with **you** and does not show a revoke button for that row.
2. To invite someone, type their exact account email in the **teammate@example.com** field and choose **Invite**. Pressing Enter performs the same action.
3. Verify the person through another channel before sharing. The dialog warns: **Access is granted by trust-on-first-use. Verify a contact out of band; automatic key-transparency protection is coming.**
4. Confirm the new email appears in the roster. The recipient discovers the Space under **Shared with me** after their desktop app refreshes its membership list; no plaintext file is emailed.
5. To remove another member, select **Revoke access**, read **Revoke access?**, and choose **Revoke** only after confirming both email and Space name.

<figure class="help-screenshot"><a href="/screenshots/vault-overview-2026-10-13.webp"><img src="/screenshots/vault-overview-2026-10-13.webp" alt="Vault overview depicting encrypted Space keys sealed separately to each authorized member." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Each authorized member receives a sealed key grant rather than the Space’s plaintext encryption key. <a href="/screenshots/vault-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## What revocation changes

Revocation rotates the Space key and re-seals file and folder records for every remaining member. A large Space can therefore remain busy for a noticeable period; keep Dosya open until the roster refreshes. Future content is unreadable to the removed person, but anything they downloaded earlier remains in their possession and cannot be recalled.

The signed-in member cannot revoke their own access: the desktop UI omits **Revoke access** on that member’s row, and the encryption client rejects self-revocation before posting a rotation. Another current member can target the Space creator from the roster; the rotation endpoint rejects that request with **The creator of this workspace cannot be revoked**. Revocation is security-sensitive and is not undone automatically—access must be granted again with a new sealed key if removal was a mistake.

## Troubleshooting

- **You don’t have permission to view members of this workspace**: request **view_team_members** from a workspace administrator.
- **You don’t have permission to add members to this workspace**: an owner or role manager must grant **invite_members** or perform the invite.
- **You don’t have permission to remove members from this workspace**: the current role lacks **manage_roles**.
- **Revoke failed** leaves the existing membership in place. Retry after connectivity or permission is restored; do not assume key rotation completed.
- **No members yet** can mean the roster request returned no visible rows. Reopen the Space after confirming you still have membership before attempting a grant.

## Expected result

The roster reflects a completed grant or revocation. An invited user receives encrypted access through their own keys. A revoked account loses future Space access after successful key rotation, while previously exported copies remain outside Dosya’s control.

## Related guides

- [Understand Vault](/files/vault-overview)
- [Recover Vault](/files/vault-recovery)
