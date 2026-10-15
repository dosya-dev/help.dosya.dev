---
{
  "articleId": "hc-activity-inspect-event-details",
  "locale": "en",
  "revision": 5,
  "title": "Inspect activity event details",
  "summary": "Expand one workspace activity row to read its timestamp, source, outcome, resource, device, and available identifiers without exposing hidden names.",
  "category": "workspaces",
  "articleSlug": "activity-inspect-event-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/activity.tsx, apps/api/src/pages/api/activity.ts, and packages/test-harness/tests/activity.int.test.ts. Production behavior was not changed.",
  "related": [
    "hc-workspace-activity",
    "hc-workspace-roles"
  ],
  "keywords": [
    "activity inspect event details",
    "Workspace activity log",
    "Dosya help",
    "team cloud storage"
  ]
}
---
An expanded activity row provides investigation context while the API withholds fields and resource names the viewer is not allowed to receive.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14.webp" alt="Four-step activity inspection map showing filter permissions, expanded timing, returned forensic fields, and comparison with the current resource state." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Filter the event list, expand the selected row, record only fields Dosya returns, and compare the current resource without rewriting the historical outcome. <a class="workflow-map-full" href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/activity-inspect-event-details-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Select the correct workspace and open **Activity log**.
- Your role needs **View activity log**; a folder-confined membership cannot open the workspace-wide page.
- Keep the approximate time, actor, action, or resource name available. The page loads 30 rows per page.

## Steps

1. Use **Category**, **Member**, and **Action** to narrow the event list; changing a filter returns the view to page 1.
2. Select the row that matches the actor, relative time, action phrase, and visible resource name.
3. Expand the row and read **When**, which shows the local absolute timestamp and its relative age.
4. Record **Where**, **Device**, **Source**, and **Outcome** only when those fields appear; missing context is not reconstructed by the client.
5. Copy the **Resource** or **Session** value that is actually displayed, keeping IP and session values private.
6. Open the linked resource when available and compare its present state with the recorded outcome before drawing a conclusion.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Reference for “Inspect activity event details”: Dosya workspace Activity log with category, member, and action filters." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Inspect activity event details”: Dosya workspace Activity log with category, member, and action filters. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the expanded row can show

**Where** combines the recorded source IP with approximate city and country data when available. **Device** is parsed from the user-agent string. **Outcome** may include a reason, while failure and denial also receive a visible badge. Not every event carries every field.

For another member’s event, the server removes sensitive forensic fields unless the viewer has the required activity access. Hidden or locked resources can lose their names while the event itself remains. An audit row records a request outcome; it is not a file snapshot, packet trace, or recovery tool.

## Expected result

The selected event is identified by its actor, action, absolute time, and any permitted context. Restricted names or forensic values remain absent, and the current resource is checked independently.

## Troubleshooting

**Could not load the activity log.** Confirm **View activity log**, remove any folder confinement through an authorized administrator, and use **Try again**.

**No activity found.** Select **Clear filters**, then page backward through older results.

**A resource name is blank.** A live or trashed target may be hidden or behind a locked folder. Purged file and folder events retain their recorded names; unresolved link or group targets are stripped defensively.

## Related guides

- [Read workspace activity](/workspaces/activity)
- [Understand workspace roles](/workspaces/roles)
