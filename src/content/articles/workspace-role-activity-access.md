---
{
  "articleId": "hc-workspace-role-activity-access",
  "locale": "en",
  "revision": 5,
  "title": "Grant activity-log access in a custom role",
  "summary": "Grant full workspace activity access to a custom role, verify the Activity page and forensic fields, and preserve hidden-resource privacy boundaries.",
  "category": "workspaces",
  "articleSlug": "workspace-role-activity-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/role-create.tsx, apps/web/src/pages/activity.tsx, apps/api/src/pages/api/activity.ts, apps/api/src/pages/api/team.ts, and packages/test-harness/tests/activity.int.test.ts. No production role was edited.",
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
**View activity log** grants workspace-wide audit visibility. Without it, the full Activity endpoint returns 403 and the Team sidebar narrows to the current member’s own events.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" alt="Four-step activity-role map showing the route-gating permission, Role updated receipt, Action versus Member filter access, and hidden-name protection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>View activity log gates the route itself; Action works without roster access, while Member choices also require View team members. <a class="workflow-map-full" href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-role-activity-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The editor needs **Manage roles** and must hold **View activity log** before granting it.
- **View activity log** itself gates the Activity route; a folder-confined member still cannot open the workspace-wide page.
- Activity may contain IP, device, session, and operational metadata that should remain private.

## Steps

1. Open **Workspace settings → Roles & permissions** and select **Edit** for the intended custom role.
2. Under **Workspace general**, enable **View activity log** and review the role for unrelated sensitive grants.
3. Select **Save changes** and wait for **Role updated — The role and its permissions have been saved.**
4. Assign the role to a controlled member if necessary, wait about 60 seconds, and reload their session.
5. Open **Activity log** and apply an **Action** filter; use **Member** only when the role also has **View team members**.
6. Expand a known event and confirm permitted context appears while hidden or locked resource names remain withheld.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Reference for “Grant activity-log access in a custom role”: Dosya custom role editor showing workspace permissions before assignment." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Grant activity-log access in a custom role”: Dosya custom role editor showing workspace permissions before assignment. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access consequences

Role-definition changes affect every member holding that custom role. Permission changes generate notices describing gained and lost capabilities. The Activity page requests 30 records at a time and provides Category, Member, and Action filters.

The activity permission does not bypass file visibility, locks, or folder scope. It gives audit context, not authority to open or restore the target resource. **View team members** only populates the Member filter; the Action filter remains available without it.

## Expected result

The test member can load and filter the full Activity page, inspect permitted details, and still cannot obtain names or content excluded by other access controls.

## Troubleshooting

**You don’t have permission to view workspace activity.** The new role has not propagated, the switch was not saved, or the wrong workspace is active.

**The Activity page remains unavailable.** Confirm **View activity log** is saved; remove folder confinement only if the member truly needs workspace-wide audit scope.

**The Member filter has no choices.** Add **View team members** only when the investigator needs the workspace roster; use Category and Action without that permission.

**A field is missing.** Not every event records every forensic value, and server-side privacy shaping may deliberately remove it.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
