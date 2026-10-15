---
{
  "articleId": "hc-workspace-assign-custom-role",
  "locale": "en",
  "revision": 5,
  "title": "Assign a custom role to a workspace member",
  "summary": "Assign an existing custom role to another workspace member, respect the permission ceiling, and verify the resulting access after caches refresh.",
  "category": "workspaces",
  "articleSlug": "workspace-assign-custom-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/web/src/lib/role-grant.ts, apps/api/src/pages/api/team/members/[id].ts, and packages/test-harness/tests/roles-enforcement.int.test.ts. No production member was changed.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace assign custom role",
    "Workspace custom roles",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Assigning a custom role replaces the member’s permission map but preserves an existing folder boundary. The actor must hold **Manage roles** and every permission granted by the target role.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14.webp" alt="Four-step custom-role assignment map showing the eligible member, permission and condition review, Role updated receipt, and allowed-versus-withheld session test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Assign only a role within the editor’s grant ceiling, then test one allowed and one withheld operation from the member session. <a class="workflow-map-full" href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-assign-custom-role-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open **Team** in the intended workspace and identify the member by name and email.
- Inspect the custom role under **Existing roles** first; its name alone does not describe its permissions.
- Ensure another trusted person retains **Manage roles** if this assignment removes administrative access.

## Steps

1. Find the person under **Members** and confirm the row is neither the current owner nor the row marked **you**.
2. Review the role’s enabled permissions, access conditions, and usage limits in **View role permissions**.
3. Open **Role for _member name_** and choose the custom role; options granting more than you hold are unavailable.
4. Wait for **Role updated**, which states that the named member is now assigned to the selected role.
5. Ask the member to reload Dosya; distributed membership and permission caches can require roughly 60 seconds to converge.
6. In that member’s session, perform one permitted task and attempt one intentionally withheld task without using real customer data.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Reference for “Assign a custom role to a workspace member”: Dosya custom role editor showing workspace permissions before assignment." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Assign a custom role to a workspace member”: Dosya custom role editor showing workspace permissions before assignment. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Assignment effects

The role change cannot assign **Owner**, alter your own row, or demote the sitting owner. Ownership moves through its separate transfer control. A role-only update leaves **Limit to a folder** unchanged, so role permissions and the folder subtree apply together.

The affected member receives a role-change notice describing the old and new role and lost permissions. The operation is reversible by another manager who still satisfies the same grant ceiling.

## Expected result

The Team row shows the custom role, the member remains inside any prior folder limit, allowed controls work, and the deliberately withheld operation is absent or refused.

## Troubleshooting

**You don’t have permission to manage this member.** Your role lacks **Manage roles**.

**You don’t have permission to assign this role.** At least one enabled permission exceeds your own map; use a narrower role or ask the owner.

**The previous access still works.** Wait about one minute, reload the member session, and repeat the controlled check.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
