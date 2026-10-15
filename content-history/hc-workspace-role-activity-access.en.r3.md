---
{
  "articleId": "hc-workspace-role-activity-access",
  "locale": "en",
  "revision": 3,
  "title": "Grant activity-log access in a custom role",
  "summary": "Enable it only for members who need audit visibility and save. Verify that assigned members can open Activity while others remain denied.",
  "category": "workspaces",
  "articleSlug": "workspace-role-activity-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace role activity access",
    "Workspace custom roles",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Grant activity-log access in a custom role** in Dosya. The main action is to enable it only for members who need audit visibility and save; the decisive check is whether assigned members can open Activity while others remain denied.

<figure class="help-screenshot"><a href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" alt="Four-step workflow map for grant activity-log access in a custom role, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for grant activity-log access in a custom role: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Roles in the current released client.
- Confirm the active account and workspace, then identify view activity permission.

## Steps: grant activity-log access in a custom role

1. Open Workspace settings > Roles and confirm the active account and workspace.
2. Locate view activity permission and verify its name or identifying details.
3. Enable it only for members who need audit visibility and save.
4. Confirm that assigned members can open Activity while others remain denied.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Dosya custom role editor showing workspace permissions before assignment." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Grant the smallest permission set and test it with a non-administrator account. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Assigned members can open Activity while others remain denied.

## Expected result

The controlled workflow completes and assigned members can open Activity while others remain denied.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Roles, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
