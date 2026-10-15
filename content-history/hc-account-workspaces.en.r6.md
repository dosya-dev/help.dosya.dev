---
{
  "articleId": "hc-account-workspaces",
  "locale": "en",
  "revision": 6,
  "title": "Review all workspaces on your account",
  "summary": "Read the My workspaces list, identify each membership and role, and use the workspace switcher when you need to inspect its files or settings.",
  "category": "account",
  "articleSlug": "manage-workspaces",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/profile/workspaces.tsx, apps/web/src/lib/workspace-dashboard.ts, apps/api/src/pages/api/workspaces/index.ts, and apps/api/src/lib/workspace/member-workspaces.ts. The review remained local and made no production, database, or provider request.",
  "related": [
    "hc-switch-workspaces",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "account workspaces",
    "workspace membership",
    "workspace role",
    "cloud storage workspaces"
  ]
}
---
The **My workspaces** profile page is an account-wide membership list. It shows every non-deleting workspace the signed-in user can reach, including workspaces owned by somebody else. It does not change the active workspace or open a workspace row.

Each entry contains the workspace name, icon, the relative date you joined, and a role badge. Built-in badges are **Owner**, **Admin**, **Member**, and **Viewer**. A workspace-defined role appears here as **Custom role** because this list does not receive the custom role's name.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" alt="Account workspace review showing membership names and role badges before switching to a workspace for inspection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Review the membership row first, then use the workspace switcher when you need to inspect that workspace's files or settings. <a class="workflow-map-full" href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile** and select **My workspaces**. On a phone-width web view, open **Profile** first and choose the **My workspaces** row.
2. Match the workspace name and icon with the membership you expect. The list is ordered by workspace creation time, so it is not a recent-workspaces list.
3. Read the role badge. **Owner** controls ownership; **Admin**, **Member**, and **Viewer** have different permissions; **Custom role** means the precise name must be checked inside that workspace's team settings.
4. Note the **Joined** time if you are investigating a membership you do not recognize.
5. To inspect content, use the main workspace switcher and select the same workspace. Confirm the workspace name again before changing files, members, storage rules, or sharing settings.
6. To leave or delete a workspace, use its supported membership or workspace action. The profile list itself is read-only.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile area used to reach the account-level My workspaces membership list." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The profile navigation leads to <strong>My workspaces</strong>, where account memberships are listed without changing the current workspace. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the list includes

The server excludes a workspace whose content state is already **deleting**. Ordinary browser and mobile sessions receive every membership for the current user. A workspace-pinned API key receives only its pinned workspace, but API-key access is not the normal profile workflow.

Membership in other people's workspaces does not count against the Free plan's creation limit. The Free plan limit applies to workspaces the account owns: it can own at most **3**. This page can therefore show more than three memberships.

## Troubleshooting

If the page says **No workspaces**, refresh after confirming the email shown in the profile header. If a workspace is missing, it may have been removed from your memberships or entered deletion. If a badge says **Custom role**, open that workspace's team page to see the role name and its permissions.

For an unfamiliar membership, avoid changing content until the owner and invitation are identified. Use the join date and workspace name when reporting the issue.

## Expected result

You can account for every listed workspace, understand the displayed role, and switch into the intended workspace only when further inspection is needed.

## Related guides

- [Switch workspaces](/account/switch-workspaces)
- [Leave or delete a workspace](/workspaces/member-removal)
