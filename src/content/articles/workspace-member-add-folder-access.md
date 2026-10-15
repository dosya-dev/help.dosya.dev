---
{
  "articleId": "hc-workspace-member-add-folder-access",
  "locale": "en",
  "revision": 5,
  "title": "Add folder access for a workspace member",
  "summary": "Limit another workspace member to one live folder, understand the cross-surface scope, and verify the boundary after distributed caches refresh.",
  "category": "workspaces",
  "articleSlug": "workspace-member-add-folder-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/members/[id].ts, packages/test-harness/tests/member-anchor.int.test.ts, and packages/test-harness/tests/roles-enforcement.int.test.ts. No production membership was modified.",
  "related": [
    "hc-invite-team",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "workspace member add folder access",
    "Workspace member lifecycle",
    "Dosya help",
    "team cloud storage"
  ]
}
---
**Limit to a folder** confines a member to that folder and its descendants across the web app, desktop sync, WebDAV, and S3. Their role permissions still decide which actions work inside the subtree.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14.webp" alt="Four-step folder-access map showing the eligible member, live folder anchor, Folder access updated receipt, and inside-versus-outside subtree tests." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Anchor the non-owner member to one live folder, allow cache convergence, and test both sides on every client surface they use. <a class="workflow-map-full" href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-member-add-folder-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The administrator needs **Access Team**, **View team members**, and **Manage roles**.
- The target cannot be the workspace owner or the acting account.
- Choose an existing, untrashed folder in the same workspace; moving or deleting it later can change what the member can reach.

## Steps

1. Open **Team**, find the member by email, and confirm their current role and **Whole workspace** status.
2. Select the folder button whose tooltip is **Set folder access** on that member’s row.
3. In **Folder access**, select **Choose folder…**, navigate the current workspace, and choose the intended live folder.
4. Read **What this changes for them**, then select **Save** and wait for **Folder access updated**.
5. Ask the member to reload; distributed membership caches can take roughly 60 seconds to stop serving the old anchor.
6. From the member session, open one item inside the subtree and attempt one known item outside it across every surface they use.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Reference for “Add folder access for a workspace member”: Dosya workspace team view listing members, roles, and invitation states." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Add folder access for a workspace member”: Dosya workspace team view listing members, roles, and invitation states. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Scope and recovery

The server rejects a missing or foreign folder with **Folder not found in this workspace**. It also refuses **The workspace owner cannot be confined to a folder** and **You cannot limit your own folder access**.

A confined member sees scoped dashboard, search, share, file, WebDAV, S3, and desktop-sync results. Workspace settings, Team, and the full Activity log are unavailable. Selecting **Clear** and saving restores whole-workspace scope; the member cannot clear their own restriction from inside it.

## Expected result

The Team row names the selected folder, content inside it follows the member’s role permissions, and known resources outside the subtree are absent or refused on each used surface.

## Troubleshooting

**Update failed.** Reload Team and confirm the folder still exists and is not in Trash.

**The member still sees an outside item.** Wait about one minute, reload or reconnect that client, and repeat the exact check.

**The member lost more access than expected.** Verify both the folder anchor and role; confinement never grants missing file, page, or protocol permissions.

## Related guides

- [Invite a team member](/workspaces/invite-team)
- [Remove a member](/workspaces/member-removal)
