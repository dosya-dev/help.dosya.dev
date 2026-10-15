---
{
  "articleId": "hc-mobile-activity-filter",
  "locale": "en",
  "revision": 5,
  "title": "Filter workspace activity on mobile",
  "summary": "Filter mobile workspace activity by category, member, and action, understand its 50-member cap, and recover safely when filters return no events.",
  "category": "account",
  "articleSlug": "mobile-activity-filter",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/activity.tsx, apps/mobile/src/activity/ActivityFilterSheet.tsx, apps/mobile/src/activity/api.ts, apps/api/src/pages/api/activity.ts, and activity permission tests. Production activity data was not queried and no production action was performed.",
  "related": [
    "hc-mobile-permissions",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "mobile activity filter",
    "Mobile activity and notifications",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The mobile **Activity** screen filters the active workspace’s audit trail. Filtering is read-only: it changes which rows are requested and never edits files, members, or recorded events.

<figure class="help-screenshot"><a href="/screenshots/mobile-activity-filter-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-activity-filter-help-workflow-2026-10-14.webp" alt="Mobile activity filter showing category, member, and action choices before applying the feed query." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The filter sheet keeps changes as a draft until Show activity applies them. <a href="/screenshots/mobile-activity-filter-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

A member needs the workspace permission `view_activity`. Folder-confined memberships are refused because the feed covers the whole workspace. The **Member** list also requires `view_team_members`; without it, activity may load while that filter section says **No members to filter by.**

## Steps

1. In the mobile app, use the workspace name at the top to select the workspace you want to inspect. A switch displays **Switching workspace…** for two seconds while new workspace queries refresh.
2. Open **Settings**, then choose **Activity** under **Workspace**.
3. Select **Filter**. The sheet is titled **Filter activity** and contains **Category**, **Member**, and **Action** sections.
4. Pick one or more values. Actions offered in the last section follow the selected categories; removing a category also drops any action that is no longer visible.
5. Choose **Show activity**. Draft changes are not sent until this button is used. Tapping the backdrop closes the sheet and discards that draft.
6. Read the count above the list. A filtered result is labelled, for example, **12 activities (filtered)**. The filter button also shows the number of active selections.

The client sends category and action lists to the API and caps the member selection at **50 user IDs**. Results restart at page 1 whenever a filter changes; the API returns **30 rows per page** by default.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference used to identify the supported app before opening Activity filters." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the current mobile build so its Activity filter matches the server catalog. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Only events matching every applied filter appear. If none match, the screen says **Nothing matches these filters.** Use **Clear filters** there, or reopen the sheet and choose **Clear all**, to restore the unfiltered feed.

## Troubleshooting

**The Activity page returns a permission error.** The server message is **You don't have permission to view the activity log**. Ask a workspace owner to grant `view_activity`; changing a local filter cannot bypass it.

**The Member section is empty.** Activity and roster access are separate. A role with `view_activity` but without `view_team_members` receives no member choices, although category and action filters still work.

**Older rows fail to load.** Existing rows stay on screen with **Could not load more. Try again.** Choose **Retry** after connectivity returns. **Load older** appears while another page exists.

## Related guides

- [Review phone permissions for activity access](/account/mobile-permissions)
- [Diagnose alerts after filtering activity](/troubleshooting/notifications)
