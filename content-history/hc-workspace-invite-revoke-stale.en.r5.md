---
{
  "articleId": "hc-workspace-invite-revoke-stale",
  "locale": "en",
  "revision": 5,
  "title": "Revoke a stale workspace invitation",
  "summary": "Revoke a pending email invitation, confirm its bearer URL returns a revoked response, and understand which notifications and memberships remain unchanged.",
  "category": "workspaces",
  "articleSlug": "workspace-invite-revoke-stale",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/invites/[id]/revoke.ts, apps/api/src/pages/api/invite/[token].ts, and packages/test-harness/tests/team.int.test.ts. No production invitation was revoked.",
  "related": [
    "hc-workspace-pending-invites",
    "hc-workspace-invite-links"
  ],
  "keywords": [
    "workspace invite revoke stale",
    "Workspace invitation security",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Revocation marks a pending email invitation unusable immediately. It does not remove an accepted member; use the member-removal workflow when the person already joined.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14.webp" alt="Four-step stale-invite revocation map showing row identity, confirmation dialog, Invite revoked receipt, and the old URL’s revoked response." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Revoke the exact pending invitation and confirm its former URL returns This invite has been revoked. <a class="workflow-map-full" href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-revoke-stale-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The acting role needs **Invite members** in the invitation’s workspace.
- Save the old URL only when a controlled post-revocation test is necessary. Treat it as a credential until the action succeeds.
- Confirm the intended person has not already accepted.

## Steps

1. Open **Team** in the workspace named on the invitation.
2. Under **Pending invites**, match the recipient email, role, inviter, and remaining expiry.
3. Select **Revoke** on that row and reread the address in the **Revoke invite** dialog.
4. Confirm **Revoke** and wait for **Invite revoked — The invitation is no longer valid.**
5. Verify the row disappears from **Pending invites** after the page reloads its team data.
6. Open the saved URL in a private session and confirm it returns **This invite has been revoked** rather than a join screen.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Reference for “Revoke a stale workspace invitation”: Dosya pending invitations list with recipient, role, and invitation controls." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>Reference for “Revoke a stale workspace invitation”: Dosya pending invitations list with recipient, role, and invitation controls. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Effects and reversibility

The API stores a revocation timestamp and later invite lookups return HTTP 410. An existing Dosya account at the invited email receives an in-app revocation notice; an address without an account receives no additional email.

Revoking cannot restore the same invitation. A later invitation to the address receives a fresh identifier, token, role, and seven-day expiry. Accepted membership is unaffected.

## Expected result

The stale row is absent, its old URL is rejected as revoked, and no already accepted member loses workspace access as a side effect.

## Troubleshooting

**Already revoked.** Reload Team; another administrator completed the action.

**Invite not found.** The record was replaced, removed, or belongs to another workspace.

**The person still appears under Members.** The invite was accepted earlier; use the member removal control after reviewing their live shares and file requests.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Use invitation links](/workspaces/invite-links)
