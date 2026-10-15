---
{
  "articleId": "hc-workspace-change-role",
  "locale": "en",
  "revision": 6,
  "title": "Change a workspace member role",
  "summary": "Change another workspace member’s role, respect the permission ceiling, and verify when the new access and role-change notices take effect for them.",
  "category": "workspaces",
  "articleSlug": "workspace-change-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against the Team role selector, role-grant helper, member update API, notification catalog, and member role ceiling and notification tests. No production member or workspace was changed.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace change role",
    "change team permissions",
    "member access role",
    "team cloud storage"
  ]
}
---
Changing a role replaces the member’s workspace permission map. A promotion can expose more files or administration controls; a downgrade can immediately remove upload, sharing, download, page, or protocol access. Review the actual permissions in a custom role rather than relying on its name.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" alt="Member role change flow showing target selection, assignable-role check, saved access, and recipient notification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>A role manager chooses an eligible role for another member, then verifies the changed permissions from that person’s session. <a class="workflow-map-full" href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-change-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-change-role-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Who can change a role

The acting account needs **Manage roles** in the target workspace. The **Team** page itself also requires **Access Team** and **View team members**. The role selector appears only on another member’s non-owner row; your own row and the current owner remain labels.

Dosya applies a permission ceiling: every enabled permission in the target role must also be held by the person making the assignment. This rule covers built-in and custom roles. **Owner** never appears as an assignable choice because ownership moves through the separate transfer control.

Before a downgrade, confirm that a second trusted person will retain **Manage roles**. A user cannot change their own role, so someone who loses administrative access cannot restore it from that same account.

## Steps

1. Switch to the correct workspace and open **Team**.
2. Under **Members**, find the person by name and email. Do not use the row marked **you**.
3. Open the **Role for _member name_** selector in the **Role** column.
4. Choose the intended built-in or custom role. Roles that exceed your permissions are omitted or disabled.
5. Wait for the **Role updated** message, which names the member and their new role.
6. Have the member reload any open Dosya tabs, then test one action they should retain and one they should no longer have.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Workspace Team member table with a role selector beside a non-owner member and whole-workspace access status below it." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The role selector changes permissions without removing the membership or clearing an existing folder limit. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What changes for the member

The new role is saved immediately. The affected member receives an important in-app notification, email, and push notification when enabled. The notice names the old and new roles, the actor, what access is now available, and permissions that were lost. Workspace administrators receive a separate in-app record of the change.

Changing only `role_id` preserves the member’s **Limit to a folder** setting. Role permissions and folder confinement therefore apply together: selecting a broader role does not expand the person beyond their assigned folder.

Open clients can retain an old permission result briefly. The member notification explicitly asks them to reload; distributed permission caches can take roughly 60 seconds to converge. If a correct role still behaves like the previous one, wait a minute, reload, and repeat a single representative action.

## Resolve a refused change

- **You don't have permission to manage this member** means the actor lacks **Manage roles**.
- **You don't have permission to assign this role** means the selected role contains at least one permission the actor does not hold. Ask the owner to make the change or select a narrower role.
- **You cannot change your own role** protects against self-escalation and accidental self-lockout. Use another authorized account.
- **Ownership is transferred, not assigned. Use the transfer control.** Use workspace ownership transfer rather than this role list.
- **Cannot change the workspace owner's role. Transfer ownership first.** Complete the transfer, then change the former owner’s role if needed.
- **Invalid role** can indicate a deleted role or a custom role from another workspace. Reload **Team** and choose from the current list.

A role change is reversible by another member who still holds **Manage roles** and satisfies the permission ceiling. Access removed during the interval remains unavailable until a permitted role is assigned again.

## Expected result

The member row displays the selected role, permitted controls match its current permission map, its folder boundary remains as configured, and the member receives a notice describing the access change.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
