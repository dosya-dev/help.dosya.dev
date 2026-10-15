---
{
  "articleId": "hc-activity-filter-action",
  "locale": "en",
  "revision": 5,
  "title": "Filter activity by action",
  "summary": "Pick exact workspace event types, combine them with other activity filters, and verify that only matching actions remain while paging restarts.",
  "category": "workspaces",
  "articleSlug": "activity-filter-action",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed on 2026-10-14 using local browser filter components, the generated action vocabulary, API query construction, paging policy, and permission/response tests in apps/web/src/pages/activity.tsx, apps/web/src/lib/activity-catalog.generated.ts, apps/api/src/pages/api/activity.ts, apps/api/src/lib/paging.ts, and apps/web/src/pages/activity.test.tsx. No production verification was performed.",
  "related": [
    "hc-workspace-activity",
    "hc-workspace-roles",
    "hc-activity-filter-category",
    "hc-activity-open-log"
  ],
  "keywords": [
    "filter audit log by action",
    "workspace event type",
    "file download audit event",
    "Dosya action history"
  ]
}
---
Use **Action** to isolate exact operations such as a download, permanent deletion, revoked invitation, or changed workspace setting. The choice is read-only and cannot reverse the operation recorded by a row.

<figure class="help-screenshot"><a href="/screenshots/activity-filter-action-help-workflow-2026-10-14.webp"><img src="/screenshots/activity-filter-action-help-workflow-2026-10-14.webp" alt="Four-stage Dosya workflow for choosing exact action types, returning to page one, and checking that each remaining event matches." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Action-filter sequence showing how a precise event type narrows the audit feed without modifying its records. <a href="/screenshots/activity-filter-action-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Available action labels

With **Category** left at **All categories**, the browser offers these filterable actions:

- Files: **File uploaded**, **Version uploaded**, **File downloaded**, **File deleted**, **Permanently deleted**, **File restored**, **File renamed**, **File moved**, **File copied**, **File locked**, and **File hidden**.
- Folders: **Folder created**, **Folder renamed**, **Folder moved**, and **Folder deleted**.
- Sharing: **File shared (link)**, **File shared (email)**, **Folder shared**, **Link revoked**, **File request created**, **Request upload**, and **Request revoked**.
- Members: **Member invited**, **Member joined**, **Member removed**, **Member left**, **Invite revoked**, **Ownership transferred**, **Member role changed**, and **Folder access changed**.
- Workspace: **Workspace created**, **Workspace updated**, **Settings changed**, **Role updated**, and **Role deleted**.
- Comments: **Comment added** and **Comment deleted**.

The activity feed can display additional event codes that are readable in a row but are not in this filter list. For example, the shared label catalog includes sync, group, profile, plan, coupon, and favourite events. Those rows remain visible under **All actions** but cannot be targeted by this menu until their codes become filter options.

The web route requires **View activity log** and refuses members confined to a single folder. Action filtering has no separate paid-plan requirement. Desktop currently presents its activity feed in 50-row pages without Category, Member, or Action menus, so perform this procedure in the browser app.

## Steps

1. Set the intended workspace, then open the top search field and enter `Activity`.
2. Choose the **Activity** page result and verify that **Activity log** appears.
3. If the action menu is unexpectedly short, inspect **Category** first. Selected categories deliberately restrict which action names are offered.
4. Open **Action**. Its initial label is **All actions**.
5. In **Action**, check each operation you want to include. The menu stays open so several actions can be selected in one pass.
6. Close the menu and review the total marked **(filtered)**. A change to Action immediately reloads the feed and places you on **Page 1**.
7. Optionally choose **Category** or **Member** as additional boundaries. Selected actions are alternatives to one another; those other menus are simultaneous requirements.

If you alter **Category** after step 5, Dosya removes the Action checks. This prevents an action hidden by the new category set from continuing as an invisible constraint.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Browser Activity log where the Action menu sits beside Category and Member above a newest-first list of workspace audit rows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The exact-action control uses checkboxes, reports a selected label or count, and refreshes the 30-item page automatically. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every displayed row has one of the checked action types and also satisfies any active Category or Member condition. One choice replaces **All actions** with that label; multiple choices display the number selected. More than 30 matches create numbered pages, and the result count covers all pages rather than only the visible rows.

## Troubleshooting the selection

**Only some action labels appear.** Remove the checks under **Category**, then reopen Action. With no category selected, the menu restores every currently catalogued action type.

**A known event does not appear.** Choose **Clear filters**, confirm the event exists in the full newest-first feed, and then select its exact action label. Similar operations have separate values, such as **File deleted** and **Permanently deleted**.

**The page reports No activity found.** At least one cross-menu condition has no common event. Relax Member or Category before concluding that the audit record is missing.

**The screen displays Could not load the activity log.** Use **Try again**. If the detail says **You don't have permission to view the activity log**, an owner or admin must change the role; retrying does not grant access.

## Related guides

- [Interpret workspace audit entries](/workspaces/activity)
- [Review custom and built-in roles](/workspaces/roles)
- [Group events by product category](/workspaces/activity-filter-category)
- [Open and page through activity](/workspaces/activity-open-log)
