---
{
  "articleId": "hc-workspace-member-verify-removal",
  "locale": "en",
  "revision": 5,
  "title": "Verify access removal for a former member",
  "summary": "Verify a former member lost workspace access, review the live links that remain, and understand the irreversible membership and request cleanup effects.",
  "category": "workspaces",
  "articleSlug": "workspace-member-verify-removal",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/members/[id].ts, apps/api/src/lib/upload-request/departure.ts, and packages/test-harness/tests/team.int.test.ts. No production member was removed.",
  "related": [
    "hc-invite-team",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "workspace member verify removal",
    "Workspace member lifecycle",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Removing a member deletes the membership and invalidates its cache, but share links they created remain live. Favourites, groups, and open file requests enter separate best-effort cleanup passes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14.webp" alt="Four-step removal map showing the non-owner target, residual link and request review, Member removed receipt, and denied session plus cleanup verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Removal ends membership immediately; verify best-effort file-request cleanup and revoke surviving share or request URLs separately. <a class="workflow-map-full" href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-verify-removal-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The actor needs **Manage roles** to remove someone else. A member can remove themselves.
- The current owner cannot be removed until ownership is transferred.
- Record critical share links and file requests first; the membership deletion is not an undoable toggle.

## Steps

1. Open **Team**, match the target by name and email, and verify the row is not the workspace owner.
2. Review that member’s live share links and open file requests before choosing the removal control.
3. Select the destructive remove button and reread the name in the **Remove member** dialog.
4. Confirm **Remove** and wait for **Member removed — They no longer have access to this workspace.**
5. Reload Team and verify the person is absent from **Members** while relevant administrators receive the removal activity or notice.
6. From the former member’s session, confirm the workspace is unavailable; then verify the creator’s file requests are revoked and manually close any residual request or share URL.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Reference for “Verify access removal for a former member”: Dosya workspace team view listing members, roles, and invitation states." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify access removal for a former member”: Dosya workspace team view listing members, roles, and invitation states. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permanent and surviving effects

The membership row is deleted immediately and cannot be restored; returning requires a new invitation or link acceptance. Favourites, folder groups, and creator-owned file requests are swept after deletion. Those cleanup errors are swallowed because access removal is already final, so an administrator must verify that no request remains open.

Existing files stay in the workspace. Share links created by the person remain live and the administrator notice includes their count, so removal alone is not a link-revocation strategy.

## Expected result

The former person is absent from Team and cannot reopen the workspace. Every remaining file request is checked and revoked, while intentionally retained share links are documented.

## Troubleshooting

**Cannot remove the workspace owner. Transfer ownership first.** Complete the ownership transfer before retrying.

**You don’t have permission to remove members.** Ask someone holding **Manage roles**.

**A public URL still opens.** Membership removal deliberately preserves share links; revoke the specific link from Shared if continued access is unwanted.

**A former member’s file request still accepts uploads.** The post-removal request sweep is best-effort. Open **File requests**, identify records created by that account, and revoke each residual URL.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
