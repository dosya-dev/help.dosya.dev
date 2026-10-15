---
{
  "articleId": "hc-workspace-create-custom-role",
  "locale": "en",
  "revision": 5,
  "title": "Create a custom workspace role",
  "summary": "Name the role, select the minimum permissions, and save, then Confirm that the role appears in the workspace role list.",
  "category": "workspaces",
  "articleSlug": "workspace-create-custom-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace create custom role",
    "Workspace custom roles",
    "Dosya help",
    "cloud storage"
  ]
}
---
Create a custom workspace role is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide covers how to create a custom workspace role and verify the resulting state.

Check the workspace, folder path and identity of the custom role editor. Test the custom role editor with disposable data and compare source and destination after refreshing.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" alt="Workflow for “Create a custom workspace role”: name the role, select the minimum permissions, and save; the role appears in the workspace role list." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Create a custom workspace role”: name the role, select the minimum permissions, and save; the role appears in the workspace role list. <a class="workflow-map-full" href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Roles in the current released client.
- Confirm the active account and workspace, then identify custom role editor.

## Steps: create a custom workspace role

1. Open Workspace settings > Roles and confirm the active account and workspace.
2. Locate custom role editor and verify its name or identifying details.
3. Name the role, select the minimum permissions, and save.
4. Confirm that the role appears in the workspace role list.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Reference for “Create a custom workspace role”: Dosya custom role editor showing workspace permissions before assignment." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a custom workspace role”: Dosya custom role editor showing workspace permissions before assignment. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Grant the smallest permission set and test it with a non-administrator account.

## Verify the result

Confirm that the role appears in the workspace role list.

## Expected result

The controlled workflow completes and the role appears in the workspace role list.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Roles, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
