---
{
  "articleId": "hc-workspace-invite-link-policy-test",
  "locale": "en",
  "revision": 5,
  "title": "Test a workspace invitation link policy",
  "summary": "Test an invite link in a private session, confirm its assigned role, expiry and use ceiling, then revoke the disposable link after validation.",
  "category": "workspaces",
  "articleSlug": "workspace-invite-link-policy-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/invite-link.ts, apps/api/src/pages/api/join/[token].ts, and packages/test-harness/tests/team.int.test.ts. Production invitation links were not used.",
  "related": [
    "hc-workspace-pending-invites",
    "hc-workspace-invite-links"
  ],
  "keywords": [
    "workspace invite link policy test",
    "Workspace invitation security",
    "Dosya help",
    "team cloud storage"
  ]
}
---
An invite link is a bearer credential: an eligible nonmember other than its creator can join with the stored role until expiry, use, revocation, or workspace member limits stop acceptance. Current members receive `already_member`, and a former creator cannot redeem their own URL.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14.webp" alt="Four-step invite-link policy map showing stored role and limits, active-link review, an eligible nonmember test, and final member removal plus link revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Test with a nonmember who did not create the link; current members and the creator cannot prove acceptance behavior. <a class="workflow-map-full" href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-link-policy-test-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The tester needs **Invite members** and may create links only for roles within their own permission ceiling.
- Choose a disposable account that is not already a workspace member and did not create the link.
- The web choices are Unlimited, 1, 5, 10, 25, or 100 uses and Never, 1, 7, 30, or 90 days.

## Steps

1. Open **Team → Invite to workspace → Invite link** in the correct workspace.
2. Choose **Role for new members**, **Max uses**, and **Expires**, then select **Create link**.
3. Under **Invite links**, verify the displayed role, use count, and expiry before copying the URL.
4. Open the URL in a private browser session, sign in as the disposable account, and confirm the workspace and role shown before joining.
5. Accept once, return to **Team**, and verify the new member row plus the incremented use count.
6. Remove the disposable member if appropriate, then select **Revoke** on the tested invite link; the same URL must not be reused.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Reference for “Test a workspace invitation link policy”: Dosya pending invitations list with recipient, role, and invitation controls." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>Reference for “Test a workspace invitation link policy”: Dosya pending invitations list with recipient, role, and invitation controls. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Limits and security behavior

The API accepts a whole-number `max_uses` from 1 through 10,000 or null for unlimited, and `expires_in_days` from 1 through 3,650 or null for no expiry. The interface intentionally offers a smaller preset list. The assigned role cannot be Owner and cannot grant permissions the creator lacks.

Removing a joined tester does not automatically revoke the link. Revocation is irreversible for that URL, creates an activity event, and does not remove people who already joined.

## Expected result

The private session shows the intended workspace and role, one successful acceptance increments usage, and the revoked disposable URL no longer admits another account.

## Troubleshooting

**You don’t have invite permission.** The current role lacks **Invite members**.

**You don’t have permission to invite this role.** Choose a role whose permission set is contained in your own.

**The link refuses acceptance.** It may be expired, revoked, at its use ceiling, or blocked by the workspace member limit; inspect the active link row before creating another.

**The signed-in account cannot be used for the test.** A current member receives `already_member`; a former creator receives **You created this invite link. Ask another member to invite you.** Use a separate nonmember account.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Use invitation links](/workspaces/invite-links)
