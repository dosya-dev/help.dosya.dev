---
{
  "articleId": "hc-activity-open-log",
  "locale": "en",
  "revision": 5,
  "title": "Open the workspace activity log",
  "summary": "Open the browser activity log, confirm access and event ordering, then read the count, paging controls, row details, and privacy limits safely.",
  "category": "workspaces",
  "articleSlug": "activity-open-log",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed on 2026-10-14 against local browser navigation, activity rendering, API response shaping, paging, permission gates, and visibility tests in apps/web/src/pages/dashboard.tsx, apps/web/src/components/layout/global-search.tsx, apps/web/src/pages/activity.tsx, apps/api/src/pages/api/activity.ts, apps/api/src/lib/paging.ts, and apps/api/src/pages/api/activity.*.unit.test.ts. No production verification was performed.",
  "related": [
    "hc-workspace-activity",
    "hc-workspace-roles",
    "hc-activity-filter-category",
    "hc-activity-filter-member"
  ],
  "keywords": [
    "open workspace audit log",
    "Dosya activity history",
    "workspace event timeline",
    "audit log permissions"
  ]
}
---
The browser **Activity log** is the workspace-wide audit feed. It answers who performed a supported operation, what action was recorded, which accessible resource it concerned, and when it happened. Opening or filtering this page does not alter the underlying event or resource.

<figure class="help-screenshot"><a href="/screenshots/activity-open-log-help-workflow-2026-10-14.webp"><img src="/screenshots/activity-open-log-help-workflow-2026-10-14.webp" alt="Four-stage map for reaching the Dosya browser Activity log, confirming the event total, and reading the newest permitted records." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Entry path from the active workspace to a verified newest-first activity feed with its total and page position. <a href="/screenshots/activity-open-log-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and platform rules

- The selected workspace role must grant **View activity log**. Built-in owners and admins have this permission; a custom role depends on its configured keys.
- A folder-restricted membership cannot use the full log because the endpoint has no safe way to reduce a workspace-wide audit trail to one subtree.
- Activity is not checked against a subscription plan. Membership, folder scope, and role permissions decide availability.
- The browser page uses 30 events per page. The desktop Activity screen uses 50 per page and has a different, unfiltered interface; mobile has its own Activity screen and filter sheet.
- A separate **View team members** permission controls whether the browser receives the current roster for the Member filter. It does not control the event feed itself.

## Steps

1. Sign in to the browser app and select the workspace whose history you need.
2. On **Dashboard**, locate the **Activity** card and select **All**. If that card is outside the current view, focus **Search files, settings, integrations, help**, type `Activity`, and choose the matching **Activity** result.
3. Confirm the page heading is **Activity log**. Beneath it, Dosya shows `N activity` for one event or `N activities` for any other total.
4. Wait until **Loading...** changes to an activity total. The first row is the newest timestamp because the service orders events by descending recorded time.
5. Use the arrow controls when the header count exceeds 30. The centre label reads **Page X of Y**; the previous arrow is disabled on page 1 and the next arrow is disabled on the final page.
6. Select an activity row to expand **When** and the other available details. Pressing Enter or Space while that row has keyboard focus performs the same toggle.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Dosya browser Activity log showing its event count, three filter menus, audit rows, and previous or next page controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The loaded workspace audit page identifies the actor, action, resource when visible, relative time, state badges, and pagination. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What a row can show

The collapsed line contains the actor name, a human-readable action phrase, an accessible resource name, and relative time. Depending on the event, badges can add **failure** or **denied**, an on-behalf-of identity, a non-web source, old and new names, an email, a multi-file count, or a `via` value.

Expanded details can display:

- **When**, with local date/time and the relative age;
- **Where**, with source IP and approximate city or country when recorded;
- **Device**, reduced from the user agent to browser and operating system;
- **Source**, **Outcome** and an available reason;
- **Resource**, optionally linked to a page the viewer may open; and
- **Session**, when the event includes a session identifier.

Privacy shaping happens before the response reaches the page. Owners and admins can receive forensic fields for every visible row. A non-privileged custom or built-in role can receive those fields for its own actions, but another member's IP, device, location, session, and request identifier are removed. Names for files or folders the viewer cannot open are also stripped while the event itself remains.

The current browser panel does not render a **Request ID** field, even when that identifier is available to an authorized client. Preserve the fields you can see if you need to report an event.

New events do not stream into a list that is already open. Reload the browser page, change a filter, or move between pages to request the feed again before deciding that a recent operation was not recorded.

## Expected result

The current workspace's permitted audit events appear newest first, the total corresponds to all matching rows, and the page position describes the 30-row slice being displayed. Expanding an event adds only the details allowed for the signed-in member and resource.

## Recover from an unavailable log

**The route shows You do not have access to this page.** The client already resolved the permission map and found no **View activity log** grant. Ask a workspace owner or admin to update the role.

**The error card says Could not load the activity log.** Read the detail below it, correct the connection or access issue, and choose **Try again**. An API refusal can include **You don't have permission to view the activity log** or **Not a member**.

**The successful page says No activity found.** The workspace has no matching events. If any filters are active, it also says **Try adjusting your filters**; select **Clear filters** before treating the log as empty.

**A resource name or forensic field is absent.** That can be the intended access boundary rather than missing audit data. Use the action and timestamp you can see, and ask an authorized owner or admin to investigate restricted context.

## Related guides

- [Read expanded activity evidence](/workspaces/activity)
- [Check the View activity log permission](/workspaces/roles)
- [Select activity categories](/workspaces/activity-filter-category)
- [Trace actions to workspace members](/workspaces/activity-filter-member)
