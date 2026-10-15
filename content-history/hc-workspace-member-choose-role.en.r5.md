---
{
  "articleId": "hc-workspace-member-choose-role",
  "locale": "en",
  "revision": 5,
  "title": "Choose a workspace role before inviting someone",
  "summary": "Choose a built-in or custom role before inviting someone, apply the inviter permission ceiling, and test the smallest access set the job requires.",
  "category": "workspaces",
  "articleSlug": "workspace-member-choose-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/web/src/pages/role-create.tsx, apps/api/src/pages/api/team/invite.ts, apps/api/src/pages/api/invite/[token].ts, and apps/api/src/lib/role-rank.ts. No production invitation was created.",
  "related": [
    "hc-invite-team",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "workspace member choose role",
    "Workspace member lifecycle",
    "Dosya help",
    "team cloud storage"
  ]
}
---
The role stored on an invitation becomes the new member’s permission map at acceptance. Select by concrete capabilities because a custom role name carries no security meaning by itself.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14.webp" alt="Four-step role-choice map showing job requirements, permission and restriction review, exact email invite, and authoritative Pending invites plus Team checks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use Pending invites and Team to verify a custom role because the public acceptance page may display Member while applying the stored custom role. <a class="workflow-map-full" href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-choose-role-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Your account needs **Invite members** and may offer only roles whose enabled permissions are contained in your own.
- **Owner** cannot be assigned by invitation; ownership uses the transfer workflow.
- A direct email invite is valid for seven days and is bound to its recipient address.

## Steps

1. List the pages, file actions, team duties, and protocol access the person actually needs.
2. Open **View role permissions** for each candidate and inspect all 36 switches plus any IP, active-hours, or usage restrictions.
3. Prefer the narrowest role that enables the required work; remember that page access and action permissions are separate.
4. Open **Team → Invite to workspace → Email invite** and add the exact recipient address.
5. Choose the reviewed value under **Role**, then select **Send invite**.
6. Confirm **Invites sent**, inspect the exact role on the new **Pending invites** row, and verify the accepted member’s role in **Team**.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Reference for “Choose a workspace role before inviting someone”: Dosya workspace team view listing members, roles, and invitation states." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Choose a workspace role before inviting someone”: Dosya workspace team view listing members, roles, and invitation states. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Role boundaries

Built-in **Viewer** is read-oriented, **Member** handles ordinary file work, and **Admin** manages members and workspace content; verify actual permissions instead of relying on these summaries. Custom roles can combine any registry entries, subject to the creator’s grant ceiling.

The recipient cannot change the offered role while accepting. The invite landing GET labels every custom role **Member**, even though acceptance POST applies the stored custom role ID. Treat **Pending invites** before acceptance and the **Team** member row afterward as the authoritative role checks. If the pending row is wrong, revoke it and issue a new invite; resending retains the original role.

## Expected result

The pending and accepted Team rows display the intended role, its permissions fit the inviter’s ceiling, and the member can work without unrelated administrative access.

## Troubleshooting

**You don’t have permission to invite this role.** Select a role fully contained in your permission map or ask a broader administrator.

**Invalid role.** Reload Team; the custom role may have been deleted or belong to another workspace.

**An invite is already pending for this email.** Review and either resend or revoke that row rather than creating a duplicate.

**The acceptance page says Member for a custom role.** This is a display limitation in the public invite GET. Complete acceptance only after checking **Pending invites**, then confirm the stored role in **Team**.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
