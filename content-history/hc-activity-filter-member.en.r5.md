---
{
  "articleId": "hc-activity-filter-member",
  "locale": "en",
  "revision": 5,
  "title": "Filter activity by workspace member",
  "summary": "Choose current workspace members, combine the selection with other filters, and verify the log shows only events attributed to those people.",
  "category": "workspaces",
  "articleSlug": "activity-filter-member",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed on 2026-10-14 from local browser activity controls, API member-filter and roster gates, response privacy shaping, paging code, and focused tests in apps/web/src/pages/activity.tsx, apps/api/src/pages/api/activity.ts, apps/api/src/pages/api/activity.roster-gate.unit.test.ts, apps/api/src/pages/api/activity.gate.unit.test.ts, and apps/api/src/pages/api/activity.confined.unit.test.ts. No production verification was performed.",
  "related": [
    "hc-workspace-activity",
    "hc-workspace-roles",
    "hc-activity-open-log",
    "hc-activity-filter-action"
  ],
  "keywords": [
    "filter audit log by member",
    "workspace member activity",
    "audit actor filter",
    "who changed workspace file"
  ]
}
---
The **Member** filter narrows the audit feed by recorded actor. Use it to review one person's workspace operations or compare a controlled set of current members without changing their roles, files, or sessions.

<figure class="help-screenshot"><a href="/screenshots/activity-filter-member-help-workflow-2026-10-14.webp"><img src="/screenshots/activity-filter-member-help-workflow-2026-10-14.webp" alt="Four-stage map for selecting workspace members in Dosya Activity, checking the filtered total, and confirming row attribution." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Member-filter path from the current roster choices to a first page containing only the selected actors' matching records. <a href="/screenshots/activity-filter-member-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permissions and member availability

Opening the dedicated audit page requires **View activity log**. Populating its Member menu additionally requires **View team members**, because that menu contains the workspace roster, including names and email addresses. A role with the first permission but not the second can still read permitted activity rows, while the Member menu opens with **No options**.

Neither the roster selector nor the log applies a subscription-tier test. The two permission keys and the absence of a folder restriction determine whether this workflow is available.

The choices are current members sorted by name. Dosya displays a member's name, falling back to their email when the name is empty. Someone who left or was removed may still have historical events, but they are no longer in the selectable roster; investigate those rows through time, category, and action instead.

A request accepts at most 50 selected member IDs. If a large workspace needs more than 50 actors checked, divide the review into smaller groups so every intended person reaches the server.

## Steps

1. Choose the relevant workspace in the browser app.
2. Open **Activity log** by selecting **All** on Dashboard's Activity card, or search the top bar for `Activity` and open that page result.
3. Select **Member**. With no constraint, the trigger reads **All members**.
4. Check the person or people whose actions you are tracing. The dropdown remains available for multiple selections and shows one name or `N selected` in its trigger.
5. Let the page refresh; selecting or removing any member returns the feed to **Page 1** without an Apply step.
6. Under **Activity log**, verify each visible row names one of the chosen actors. If Category or Action is also active, confirm the row satisfies those conditions too.
7. Read the updated total beneath **Activity log**. The **(filtered)** marker means at least one of the three menus is constraining the results.

Within Member, the checked people are alternatives: an event by any one of them qualifies. Across menus the logic is cumulative, so two members plus **Sharing** shows sharing-category events by either selected actor. Each browser page contains up to 30 matching rows.

<figure class="help-screenshot"><a href="/screenshots/workspace-activity-log-2026-10-12.webp"><img src="/screenshots/workspace-activity-log-2026-10-12.webp" alt="Workspace Activity log in the Dosya browser with the Member selector between Category and Action and actor names on event rows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The Member menu uses current roster identities, while the resulting audit rows retain their newest-first order and access-aware details. <a href="/screenshots/workspace-activity-log-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The count covers every audit event attributed to one of the selected current members that also meets the active Category and Action constraints. The visible slice begins on page 1, and the rows keep descending timestamp order.

Filtering by a person does not expand what you may learn about that person. Owners and admins can see available forensic fields. Other roles with log access receive another member's event with source IP, device, location, session, and request identifier removed; inaccessible file or folder names are withheld as well.

## Resolve missing members or events

**Member opens with No options.** Confirm the role has **View team members** as well as **View activity log**. This state can be correct even while activity rows load normally.

**A former member is absent.** The selector is built from present workspace memberships. Clear Member, then narrow with Action or Category and identify the historical actor in the returned rows.

**The list shows No activity found.** Choose **Clear filters**, reselect a smaller actor set, and add other conditions one at a time. The empty message is a successful query, unlike a failed request.

**Could not load the activity log appears.** Select **Try again** after checking connectivity. A folder-confined account receives **Not a member** for this workspace-wide endpoint and needs an unrestricted membership to use the page.

## Related guides

- [Understand visible audit metadata](/workspaces/activity)
- [Configure workspace role access](/workspaces/roles)
- [Reach the complete workspace log](/workspaces/activity-open-log)
- [Limit results to exact operations](/workspaces/activity-filter-action)
