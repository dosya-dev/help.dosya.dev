---
{
  "articleId": "hc-workspace-role-file-access",
  "locale": "en",
  "revision": 4,
  "title": "Grant file access in a custom role",
  "summary": "Enable only the browse, upload, edit, or delete capabilities required. Verify that a test member can perform only the selected file actions.",
  "category": "workspaces",
  "articleSlug": "workspace-role-file-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace role file access",
    "Workspace custom roles",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Grant file access in a custom role** in Dosya. The main action is to enable only the browse, upload, edit, or delete capabilities required; the decisive check is whether a test member can perform only the selected file actions.

<figure class="help-screenshot"><a href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" alt="Workflow for “Grant file access in a custom role”: enable only the browse, upload, edit, or delete capabilities required; a test member can perform only the selected file actions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Grant file access in a custom role”: enable only the browse, upload, edit, or delete capabilities required; a test member can perform only the selected file actions. <a href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Roles in the current released client.
- Confirm the active account and workspace, then identify file-access permissions in the role editor.

## Steps: grant file access in a custom role

1. Open Workspace settings > Roles and confirm the active account and workspace.
2. Locate file-access permissions in the role editor and verify its name or identifying details.
3. Enable only the browse, upload, edit, or delete capabilities required.
4. Confirm that a test member can perform only the selected file actions.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Reference for “Grant file access in a custom role”: Dosya custom role editor showing workspace permissions before assignment." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Grant file access in a custom role”: Dosya custom role editor showing workspace permissions before assignment. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Grant the smallest permission set and test it with a non-administrator account.

## Verify the result

After completing the steps, check the expected result: A test member can perform only the selected file actions.

## Expected result

The controlled workflow completes and a test member can perform only the selected file actions.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Roles, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
