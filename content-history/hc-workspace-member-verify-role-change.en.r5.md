---
{
  "articleId": "hc-workspace-member-verify-role-change",
  "locale": "en",
  "revision": 5,
  "title": "Review access after changing a member role",
  "summary": "Review a member’s effective access after a role change, account for the permission cache window, and confirm both retained and removed capabilities.",
  "category": "workspaces",
  "articleSlug": "workspace-member-verify-role-change",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/members/[id].ts, apps/api/src/lib/team/role-copy.ts, and packages/test-harness/tests/roles-enforcement.int.test.ts. Production roles were not changed.",
  "related": [
    "hc-invite-team",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "workspace member verify role change",
    "Workspace member lifecycle",
    "Dosya help",
    "team cloud storage"
  ]
}
---
A successful role change updates the membership immediately, preserves its folder anchor, and sends the affected person a notice describing the previous role, new role, and lost permissions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14.webp" alt="Four-step role-change map showing the saved badge, preserved folder boundary, one-minute cache refresh, and one newly withheld action." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm the role-only change preserves scope, wait for convergence, and record an exact refusal for the permission that was removed. <a class="workflow-map-full" href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-role-change-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Obtain the expected old role, new role, and list of gained or lost permissions.
- Use a controlled member session; do not infer access solely from navigation visibility.
- Allow roughly 60 seconds for distributed permission and membership caches.

## Steps

1. Open **Team** and confirm the member row displays the intended new role.
2. Check the line beneath the role for **Whole workspace** or the existing folder name; a role-only update must not clear it.
3. Ask the member to open the role-change notification and compare its old role, new role, and lost-access summary with the planned change.
4. Wait up to one minute, then reload all open Dosya tabs or reconnect the protocol client being tested.
5. Perform one action newly allowed or deliberately retained, using a disposable file or link where an operation has side effects.
6. Attempt one permission that should now be withheld and record the absent control or exact refusal rather than retrying destructively.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Reference for “Review access after changing a member role”: Dosya workspace team view listing members, roles, and invitation states." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review access after changing a member role”: Dosya workspace team view listing members, roles, and invitation states. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Interpreting the outcome

Role names do not prove a capability. The API reads the actual permission map, while IP ranges, active hours, usage limits, and folder confinement can apply additional restrictions. Page permissions also gate entry separately from action permissions.

Another authorized manager can reverse the role later, but actions completed while a broader role was active are not automatically undone.

## Expected result

The Team row, notification, and member-session checks agree: intended work succeeds, removed work is unavailable, and the previous folder boundary remains effective.

## Troubleshooting

**A permitted action is still refused.** Check the page gate, folder anchor, role conditions, and usage limits before editing permissions again.

**A removed action still succeeds.** Wait for cache convergence, reload or reconnect, and verify the request uses the intended workspace.

**The member cannot restore access.** Self-role changes are prohibited; a different manager must assign another eligible role.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
