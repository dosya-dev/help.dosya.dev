---
{
  "articleId": "hc-activity-filter-category",
  "locale": "en",
  "revision": 5,
  "title": "Filter activity by category",
  "summary": "Choose one or more activity categories, learn which events each group contains, and confirm the matching total returns to page one after changes.",
  "category": "workspaces",
  "articleSlug": "activity-filter-category",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed on 2026-10-14 against local browser activity UI, shared activity catalog, API filter and paging implementation, permission gates, and activity tests in apps/web/src/pages/activity.tsx, packages/shared/src/activity/catalog.ts, apps/api/src/pages/api/activity.ts, apps/api/src/lib/paging.ts, and apps/api/src/pages/api/activity.*.unit.test.ts. No production verification was performed.",
  "related": [
    "hc-workspace-activity",
    "hc-workspace-roles",
    "hc-activity-filter-action",
    "hc-activity-filter-member"
  ],
  "keywords": [
    "filter audit log by category",
    "workspace audit categories",
    "file activity events",
    "Dosya activity category"
  ]
}
---
Use **Category** when you know the part of the workspace involved but not the exact event name. The browser app can show several categories at once and combine that choice with **Member** or **Action**.

<figure class="help-screenshot"><a href="/screenshots/activity-filter-category-help-workflow-2026-10-14.webp"><img src="/screenshots/activity-filter-category-help-workflow-2026-10-14.webp" alt="Four-stage map for narrowing the Dosya activity log by category, checking the filtered total, and returning to the first results page." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Category workflow from opening All categories through checking the refreshed event list and page number. <a href="/screenshots/activity-filter-category-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the category choices include

The current **Category** menu contains six groups:

- **Files** covers uploads, downloads, versions, file deletion and recovery, rename, move, copy, lock, and visibility changes.
- **Folders** groups folder creation, rename, move, and deletion.
- **Sharing** includes file or folder shares, revoked links, and file-request creation, upload, or revocation.
- **Members** contains invitations, joins, removals, departures, revoked invitations, ownership transfers, role changes, and folder-access changes.
- **Workspace** matches workspace creation or updates, setting changes, and role updates or deletions.
- **Comments** limits the feed to added and deleted comments.

These groups cover the action IDs listed in Dosya's activity catalog. An event whose newer action ID has not been assigned to one of those groups may still appear in the unfiltered feed but will not be returned by a category selection.

You need **View activity log** for the page. A member restricted to one folder cannot open this workspace-wide log, even if their role otherwise grants that permission. The route does not inspect the subscription tier; access depends on membership scope and role permissions. Category filtering only reads audit records and cannot change, undo, or delete any workspace item.

## Steps

1. In the browser app, select the active workspace you want to investigate.
2. From **Dashboard**, find the **Activity** card and choose **All**. You can instead use the top search field, type `Activity`, and open the **Activity** result.
3. Confirm the heading says **Activity log** and note the total shown beneath it.
4. Open **Category**, whose unfiltered value is **All categories**.
5. Check one or more category names. Each check immediately requests a new result set; there is no separate Apply button.
6. Read the count again. Dosya adds **(filtered)** and resets the pagination control to **Page 1** whenever the category selection changes.
7. If needed, add **Member** or **Action** constraints. Multiple categories match any selected category, while a different filter menu must also match. For example, **Files** plus member Ada means file-category events attributed to Ada.

Changing the category selection clears every current **Action** choice because the available action list is rebuilt from the chosen groups. Select the categories first when you intend to use both menus.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Dosya browser Activity log with Category, Member, and Action menus above newest-first workspace events and page controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The browser log places All categories beside the other filters and shows the matching total above 30-row pages. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The header reports the number of events matching the complete filter combination, followed by **(filtered)**. Rows remain ordered from newest to oldest. A result set longer than 30 rows displays **Page 1 of N** with next and previous controls.

## If the result looks wrong

**A category produces no rows.** The page shows **No activity found** and **Try adjusting your filters**. Remove a Member or Action condition, or choose **Clear filters** to return all three menus to their `All` state.

**The action you need is absent after choosing a category.** Open Category and add the group that owns that action, or remove all category checks so **Action** offers every catalogued type.

**Activity is not available.** A resolved permission check shows **You do not have access to this page.** Ask an owner or admin to grant **View activity log**. Folder-confined access cannot be expanded from this screen.

**The request fails instead of returning zero events.** The error card says **Could not load the activity log** and includes **Try again**. Retry after checking the connection; a successful empty query uses the distinct **No activity found** state.

## Related guides

- [Read event fields and privacy boundaries](/workspaces/activity)
- [Understand role permissions](/workspaces/roles)
- [Narrow the log to exact actions](/workspaces/activity-filter-action)
- [Review events from selected members](/workspaces/activity-filter-member)
