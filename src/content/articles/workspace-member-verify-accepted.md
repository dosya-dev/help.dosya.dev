---
{
  "articleId": "hc-workspace-member-verify-accepted",
  "locale": "en",
  "revision": 5,
  "title": "Verify a newly accepted workspace member",
  "summary": "Confirm an invitation became a live workspace membership, verify the assigned role and folder scope, and test access from the recipient’s own session.",
  "category": "workspaces",
  "articleSlug": "workspace-member-verify-accepted",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/invite/[token].ts, apps/api/src/pages/api/team.ts, apps/api/src/lib/notifications/catalog.ts, and packages/test-harness/tests/team.int.test.ts. No production account joined a workspace.",
  "related": [
    "hc-invite-team",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "workspace member verify accepted",
    "Workspace member lifecycle",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Acceptance succeeds only for the signed-in account whose email matches the invitation. The server creates the membership and marks the invite accepted together, then redirects to the dashboard.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14.webp" alt="Four-step accepted-member map showing pre-acceptance counts, pending-row removal, the complete member row, and allowed-versus-excluded access tests." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm acceptance in both Team and the recipient session; a vanished pending row alone does not prove effective permissions. <a class="workflow-map-full" href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-accepted-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Ask the recipient for the account email they used, without requesting credentials.
- Keep the expected workspace, role, and any intended folder boundary written down.
- The Team viewer needs **Access Team** and **View team members**.

## Steps

1. Open **Team** in the invited workspace and note the current **Members** and **Pending invites** counts.
2. Ask the recipient to open the invite while signed in with the exact invited email and select the acceptance control.
3. Reload Team and verify the email disappeared from **Pending invites**.
4. Find the person under **Members** and confirm their name, email, role, and **Whole workspace** or folder label.
5. Open the member profile and review **Joined** plus **Last active**; **No activity yet** is valid before their first recorded action.
6. In the recipient’s session, test one intended action and one excluded action after reloading the client.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Reference for “Verify a newly accepted workspace member”: Dosya workspace team view listing members, roles, and invitation states." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a newly accepted workspace member”: Dosya workspace team view listing members, roles, and invitation states. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What acceptance changes

A valid acceptance inserts one membership, marks the invitation accepted, records `member_joined`, and redirects to `/dashboard`. Owners and admins receive a join notice naming the person, workspace, role, and permission summary.

A domain policy or workspace member ceiling can refuse the join without consuming the invitation. If the person was already a member, Dosya marks the invite accepted and redirects without creating a duplicate membership.

## Expected result

Team shows one live member with the expected role and scope, the pending row is gone, and the recipient’s allowed and denied checks match that effective configuration.

## Troubleshooting

**This invite was sent to … You’re logged in as ….** Sign out and use the addressed account; the invite cannot be reassigned.

**This invite has expired, been revoked, or already been accepted.** Ask an inviter to review Team before issuing anything new.

**The row appears but access is stale.** Wait roughly 60 seconds, reload, and retest before changing the role.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
