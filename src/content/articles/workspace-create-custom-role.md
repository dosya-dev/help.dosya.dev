---
{
  "articleId": "hc-workspace-create-custom-role",
  "locale": "en",
  "revision": 6,
  "title": "Create a custom workspace role",
  "summary": "Create a custom workspace role with precise permissions, access conditions, and usage limits, then confirm the role is available for assignment.",
  "category": "workspaces",
  "articleSlug": "workspace-create-custom-role",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against the custom-role editor, permission registry, roles create/update APIs, grant ceiling logic, input validators, and roles integration tests. No production role was created.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace create custom role",
    "custom role permissions",
    "workspace access conditions",
    "cloud storage roles"
  ]
}
---
A custom role combines workspace permissions with optional network, schedule, and usage restrictions. Create one when the built-in Owner, Admin, Member, and Viewer sets are broader or narrower than the job requires.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" alt="Custom workspace role creation from role name through permission, access-condition, usage-limit, and assignment readiness checks." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Define the smallest useful permission set, add any operating boundaries, and save the role before assigning it to a person. <a class="workflow-map-full" href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-create-custom-role-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements and limits

The creator must belong to the workspace and hold **Manage roles**. They can enable only permissions they already hold. Rows outside that ceiling are disabled with **You don't hold this permission, so you can't grant it.** The server names any disallowed keys if a stale or crafted request bypasses the interface.

Choose a role name between 1 and 50 characters. A new role starts with every permission disabled and is created as a workspace-specific custom role. Saving it does not assign the role to any current or invited member.

The editor groups 36 controls under **Files**, **Folders**, **Sharing**, **Team**, **Workspace identity**, **Workspace limits**, **Workspace general**, **File management**, **Page access**, and **Protocol access**. A capability and the page that exposes it can be separate; for example, **Create share links** and **Access Shared** solve different parts of the workflow.

## Steps

1. Open **Team** and select **Create custom role** in the **Role guide**, or open **Workspace settings** and the roles section.
2. In **Role identity**, enter a specific **Role name**, such as `External reviewer`.
3. Under **Permissions**, enable only the actions and pages required for the job. Pay particular attention to destructive controls such as **Delete any file**, **Manage roles**, **Lock files & folders**, and **Hide files & folders**.
4. If network boundaries are needed, add comma-separated CIDR values to **Allowed IP ranges**. REST and sync requests evaluate their request address, while WebDAV and S3 enforce the same condition at their gateways. SFTP refuses access for a role with an IP allowlist because its gateway cannot verify the member's original address.
5. Optionally enable **Restrict to active hours**, then choose a time zone, weekdays, and a from/to window.
6. Under **Usage limits**, leave a field blank for unlimited or set positive values for **Requests per minute**, **Egress per day (GB)**, **Max file size (MB)**, and **Max concurrent transfers**.
7. Select **Create role** and wait for **Role created — Your new role is ready to assign.**
8. In **Existing roles**, confirm the new row is marked **custom** and its enabled-permission count matches your review.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Custom role editor displaying role identity, categorized permission switches, optional access conditions, and usage limit fields." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The editor saves permissions and restrictions together; blank usage fields mean that metric has no role-level limit. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## How restrictions combine

Role conditions apply to every member assigned that role. Individual API-key restrictions intersect with role restrictions; neither layer can widen the other. The four usage limits cover every protocol. An IP allowlist binds REST, sync, WebDAV, and S3 access, and makes SFTP unavailable for that role because SFTP cannot verify the original client address.

Creating the definition does not notify anyone because nobody holds it yet. When an administrator later edits an assigned custom role’s permission switches, all holders receive an in-app notification describing what was gained and lost. Changes to conditions or usage limits do not currently produce that permission-change notice.

## Fix a creation error

- **Role name is required** means the trimmed name is empty.
- **Role name too long (max 50)** requires a shorter label.
- **You don't have permission to manage roles** means your role lacks **Manage roles**.
- **You can't grant permissions you don't hold yourself: ...** lists capabilities above your ceiling. Clear those switches or ask the owner to create the role.
- **Can't reach the server. Check your connection and try again.** Nothing was confirmed; reconnect and submit once more.

A custom role can later be deleted only after all assigned members move elsewhere and every pending invitation or active invite link using it is revoked. Deletion permanently removes the definition, so reassignment should precede cleanup.

## Expected result

The custom role appears in **Existing roles**, reports the intended permission count, retains any access conditions and numeric limits, and is available in eligible member and invitation role selectors.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
