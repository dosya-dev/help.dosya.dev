---
{
  "articleId": "hc-workspace-invite-links",
  "locale": "en",
  "revision": 1,
  "title": "Using workspace invitation links safely",
  "summary": "Create a reusable workspace invite link with the right role, expiry and use limit, then monitor or revoke it from Team.",
  "category": "workspaces",
  "articleSlug": "invite-links",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Reviewed the current Team invite-link creation and management surfaces against the local current web app and API on 2026-10-12. Screenshots use isolated representative workspace data. Link acceptance, email-domain enforcement and production delivery were verified from current source and automated tests, not a production invitation.",
  "related": ["hc-invite-team", "hc-workspace-roles", "hc-workspace-member-removal"],
  "keywords": ["workspace invite link", "team invitation", "max uses", "expiry", "revoke invite", "join workspace"]
}
---
Use a workspace invitation link when several people should join with the same role and you do not need to bind each invitation to one email address. Anyone who has the URL can attempt to use it, so set a short expiry and a realistic use limit before sharing it.

For one named person, an email invitation is usually easier to control. See [Inviting people to a workspace](/workspaces/invite-team) for the email-bound workflow.

## Before you start

- Select the intended workspace and open **Team**. Confirm the workspace name below the page title.
- You need **Invite members** permission. If **Invite to workspace** is missing, ask an owner or a member whose role carries that permission.
- Decide which role every person using the link should receive. **Owner** is never available because ownership uses a separate transfer action.
- Decide how many successful joins you expect and how long the link should remain useful.
- Treat the URL like an access credential. Send it through a private channel and avoid placing it in tickets, public documents or screenshots.

## Steps: create an invitation link

1. In the web app, select **Team** in the workspace navigation.
2. Select **Invite to workspace** near the upper-right corner.
3. Select the **Invite link** tab.
4. Under **Role for new members**, choose the built-in or custom role that new members should receive. The selector only shows roles you are allowed to grant.
5. Under **Max uses**, choose the smallest number that covers the planned recipients. **Unlimited** removes this safeguard.
6. Under **Expires**, choose how long the URL should work. The initial selection is seven days. **Never** creates a link without a time limit.
7. Select **Create invite link**.
8. Copy the generated URL from **Share this link** and send it only to the intended people.

<figure class="help-screenshot">
  <a href="/screenshots/workspace-invite-link-controls-2026-10-12.webp">
    <img src="/screenshots/workspace-invite-link-controls-2026-10-12.webp" alt="Dosya Invite to workspace dialog open on Invite link with role, maximum uses and expiry controls visible." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>Choose the role first, then set a maximum use count and expiry before selecting Create invite link. <a href="/screenshots/workspace-invite-link-controls-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: monitor or revoke a link

1. Return to **Team** and scroll to **Invite links**.
2. Check the role, the number of uses and the expiry shown under the URL.
3. Use the copy control when you need to send the existing URL again. Creating another link gives you a separate URL with separate limits.
4. Select **Revoke** when the link was sent to the wrong place, enough people have joined, or the role is no longer appropriate.
5. Review **Members** after each expected recipient joins. The member row shows the role they received.

<figure class="help-screenshot">
  <a href="/screenshots/workspace-team-overview-2026-10-12.webp">
    <img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Dosya Team page showing members, a pending email invitation and an active invitation link with role, use count, expiry, copy and revoke controls." width="1440" height="1000" loading="lazy" decoding="async" />
  </a>
  <figcaption>The Invite links row shows who can join, how many times the link has been used and when it expires. Revoke it when no more joins should be allowed. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The new URL appears under **Invite links** with its role, use count and expiry. An eligible person who opens it, signs in and accepts becomes a workspace member with the selected role. The use count increases after a successful join.

Revoking the link stops future joins through that URL. It does not remove people who already joined.

## Limits and security behavior

- The link is not tied to a recipient's email address and can be forwarded.
- The current web form offers preset use counts and expiry periods. The API rejects non-positive, fractional or excessively large limits.
- Workspace membership caps and allowed email-domain policies still apply when someone joins.
- A creator cannot use their own link to create a second membership.
- A person who is already a workspace member does not gain another seat through the same link.
- You cannot create an invitation for a role that grants permissions you do not hold.
- Revocation affects the link, not existing members. Change a member's role or remove the member separately.

## Troubleshooting

**Invite to workspace is missing.** Your role does not currently carry **Invite members**, or Team access is unavailable. Ask the workspace owner to review your role.

**The role I need is not listed.** You cannot grant **Owner** or a role with permissions beyond your own. An owner can create or review a suitable custom role.

**A recipient sees that the link is expired, revoked or fully used.** Review the row under **Invite links**. Create a new link with deliberate limits if the person should still join; do not increase access by choosing a stronger role as a workaround.

**A recipient is eligible but still cannot join.** Check the workspace member limit, the allowed email-domain policy and whether the person is already a member. Ask them to copy the exact error message without sharing the live invitation URL.

**The link was posted publicly.** Revoke it immediately. Review **Members** and the workspace activity log for unexpected joins, then remove or adjust any account that should not have access.

## Frequently asked questions

### Can I edit an invitation link after creating it?

No edit control is shown. Revoke the old link and create a new one with the required role and limits.

### Does changing the role later change people who already joined?

No. The link's role applies when a person joins. Change an existing member's role from their row on **Team**.

### Should I choose Never and Unlimited for a standing team link?

Only when you have an intentional process for protecting and reviewing that URL. A short expiry and bounded use count reduce the impact of accidental forwarding.

## Related guides

- [Inviting people to a workspace](/workspaces/invite-team)
- [Choosing built-in and custom workspace roles](/workspaces/roles)
- [Removing a member, leaving or deleting a workspace](/workspaces/member-removal)
