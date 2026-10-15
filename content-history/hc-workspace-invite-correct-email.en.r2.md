---
{"articleId":"hc-workspace-invite-correct-email","locale":"en","revision":2,"title":"Correct a workspace invitation sent to the wrong email","summary":"Revoke the incorrect pending invitation, verify its old link is unusable and create a new invitation with the intended address, role and folder access.","category":"workspaces","articleSlug":"workspace-invite-correct-email","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web Team page, pending-invite controls, invite revocation API, invitation creation flow and permission checks against local product source and relevant tests on 2026-10-14. The current UI does not edit a pending recipient address in place. Screenshots use isolated workspace data.","related":["hc-workspace-pending-invites","hc-workspace-invite-links","hc-workspace-member-folder-access"],"keywords":["wrong workspace invitation email","correct team invite address","revoke Dosya invitation","secure workspace invite","invite correct member"]}
---
A pending Dosya invitation cannot have its recipient address edited in place. If it was sent to the wrong email, revoke that invitation first, then create a replacement for the verified address. This prevents both addresses from holding valid access links.

## Before you start

- Confirm the active workspace at the top of the sidebar.
- Obtain the intended address through a trusted conversation with the recipient.
- Record the role and any folder boundary the person should receive.
- Treat copied invitation URLs as access credentials until they expire, are accepted or are revoked.

## Steps: revoke the incorrect invitation

1. Open **Team** in the intended workspace.
2. Under **Pending invites**, locate the incorrect email. Compare the inviter, role and expiry so you do not revoke a similarly named invitation.
3. Select **Revoke** on that row.
4. In **Revoke invite**, read the displayed address and confirm the action.
5. Wait for **Invite revoked** and confirm the row disappears from Pending invites.
6. If the old link was copied or sent elsewhere, open it in a private window. It must no longer allow the invitation to be accepted.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Dosya Team page Pending invites list with recipient email, role and invite controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Match the incorrect address and role in <strong>Pending invites</strong> before revoking it. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Create the corrected invitation

1. Select **Invite to workspace**.
2. Enter the verified email address exactly.
3. Choose the intended role and any folder boundary.
4. Send the invitation and confirm that one new row appears for the correct address.
5. Ask the recipient to confirm the workspace name and role before accepting.

<figure class="help-screenshot"><a href="/screenshots/workspace-invite-2026-10-10.webp"><img src="/screenshots/workspace-invite-2026-10-10.webp" alt="Dosya Invite to workspace dialog with email and role controls." width="454" height="508" loading="lazy" decoding="async" /></a><figcaption>Recheck the replacement email and role before sending the new invitation. <a href="/screenshots/workspace-invite-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The incorrect invitation is revoked and its old URL cannot be accepted. Pending invites contains one replacement for the intended address with the correct role and access boundary.

## Limits and important details

- Revoking an invitation does not remove an account that already accepted it. Review **Members** separately.
- A custom role can invite or revoke only when it has the `invite_members` permission.
- If the incorrect address belongs to an existing Dosya user, that user can receive an in-product revocation notice.
- Invitation expiry does not correct the address; revoke promptly when the wrong person could access the mailbox.

## Troubleshooting

**The incorrect address is already a member.** Review the member row, folder access and activity, then follow the member-removal workflow if access was unintended.

**Revoke is unavailable or rejected.** Confirm the workspace and your invitation permission. Ask an owner or authorized admin to revoke it.

**The corrected invite also looks wrong.** Revoke it before acceptance and verify the address outside Dosya.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Create and control invitation links](/workspaces/invite-links)
- [Set member folder access](/workspaces/folder-access)
