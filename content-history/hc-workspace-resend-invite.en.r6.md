---
{
  "articleId": "hc-workspace-resend-invite",
  "locale": "en",
  "revision": 6,
  "title": "Resend a workspace invitation",
  "summary": "Resend an active workspace invitation, understand the five-minute cooldown, and confirm what the recipient receives without extending its expiry.",
  "category": "workspaces",
  "articleSlug": "workspace-resend-invite",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx; the Team, resend, and invite acceptance APIs; apps/api/src/lib/workspace.ts; and resend cooldown tests. Confirmed locally without a production request or real recipient email.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace resend invite",
    "resend team invitation",
    "invite expiry",
    "cloud storage team"
  ]
}
---
Resend an invitation when the address and role are still correct but the recipient cannot find the first email. Dosya reuses the same email-bound invite and preserves its original expiration date, so resending is different from revoking and creating a replacement.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-resend-invite-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-resend-invite-workflow-map-2026-10-14.webp" alt="Workspace invitation resend path from the Team page to the unchanged recipient, role, link, and expiry." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The Resend action mails the existing invitation again while leaving its recipient, assigned role, acceptance link, and deadline unchanged. <a class="workflow-map-full" href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-resend-invite-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before resending

Open the intended workspace and select **Team**. Loading this page requires both **Access Team** and **View team members**. Resending requires **Invite members**; a custom role can perform the action when that permission is enabled.

The **Pending invites** row shows the recipient email, who invited them, an expiry countdown, and the assigned role. It does not show a last-sent timestamp. Only active invitations appear here: an accepted, revoked, or expired record is removed from this list.

Check the email and role before sending. The recipient must sign in with the same email address to accept. If the address or role is wrong, choose **Revoke** and issue a new invitation instead, because **Resend** cannot edit either value.

## Steps

1. On **Team**, find the address under **Pending invites**.
2. Read the role badge and the **expires in** countdown on that row.
3. Select **Resend** once. While the request runs, the button is disabled and displays a spinner.
4. Look for the **Invite resent** toast stating that the invitation email was sent to the address again.
5. Have the recipient open the newest Dosya invitation email and select **Accept invitation** before the displayed deadline.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Team page pending invitation row with recipient address, inviter, expiry countdown, role, Copy link, Resend, and Revoke controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review the pending row before selecting Resend; Copy link is available when you need to deliver the same acceptance URL manually. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the recipient gets

Dosya sends another invitation email containing the workspace name, assigned role, accept and decline links, and the existing expiry date. If the address already belongs to a Dosya account, that account also received the original invitation as an in-app notification with an **Accept invitation** action and a push notification when enabled.

The resend does not reset the seven-day lifetime created with the first invitation. It also leaves the token and role intact. Consecutive sends of the same invite have a five-minute cooldown measured from the original send or latest successful resend.

Resending does not reserve a member place. A free-plan workspace can admit at most five non-owner members, and Dosya enforces that ceiling again when the recipient accepts. If the workspace fills first, acceptance returns **Free plan workspaces can have at most 5 members. Upgrade to add more.**

## If Resend fails

- **This invite was just re-sent. Try again in N minutes.** Wait for the five-minute window to end; repeated clicks do not shorten it.
- **This invite has expired. Send a new one.** Open **Invite to workspace**, use **Email invite**, and create a replacement. The expired link cannot be revived.
- **This invite was already accepted** or **This invite was revoked** means the stored invitation is no longer resendable. Refresh **Team** to load current membership and pending rows.
- **You don't have permission to resend invites** means your role lacks **Invite members**. A role manager must add that capability or perform the resend.
- **Email is not configured on this server** or **The email could not be sent. Try again later.** No successful resend was recorded. Retry later, or use **Copy link** to deliver the active URL through another channel.

Revoking is immediate and cannot be undone. The revoked link stops accepting users, and an invitee with an existing Dosya account receives an in-app withdrawal notice. A new invitation is required after that action.

## Expected result

The sender sees **Invite resent**, the recipient receives a fresh email for the same pending invitation, and the row keeps its original role and expiry countdown. The resend is also recorded as invitation activity.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
