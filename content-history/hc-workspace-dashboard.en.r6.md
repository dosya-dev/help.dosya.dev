---
{
  "articleId": "hc-workspace-dashboard",
  "locale": "en",
  "revision": 6,
  "title": "Read the workspace dashboard",
  "summary": "Read total storage, entitlement sources, owned-workspace usage and shared memberships from the account-level Workspace dashboard accurately.",
  "category": "workspaces",
  "articleSlug": "workspace-dashboard",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed apps/web/src/pages/workspace-dashboard.tsx, components/layout/dashboard-sidebar.tsx, lib/workspace-dashboard.ts, apps/api/src/pages/api/workspace-dashboard.ts and lib/workspace-dashboard.ts with their snapshot/unit tests. No deployment or production data access was used.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace dashboard",
    "workspace dashboard and members",
    "cloud storage workspace usage",
    "cloud storage"
  ]
}
---
The account-level **Workspace dashboard** answers two different questions: how much storage you own across your workspaces, and which workspaces other owners have shared with you. It does not show recent activity or a member count.

Only signed-in access is required for this page. Workspace-specific permissions still apply after you open a row; a shared workspace can show **Owner**, **Admin**, **Member**, **Viewer** or **Custom role**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-dashboard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-dashboard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-dashboard-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-dashboard-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-dashboard-workflow-map-2026-10-14.webp" alt="Account Workspace dashboard review covering total storage, entitlement sources, owned workspace rows and workspaces shared by other owners." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read **Your storage** and its source breakdown together, then separate owned usage from the membership-only rows under **Shared with you**. <a class="workflow-map-full" href="/screenshots/workspace-dashboard-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-dashboard-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-dashboard-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Dashboard sections

| Section | What it reports |
| --- | --- |
| **Your storage** | Bytes used by every workspace you own, free bytes and the effective account limit. Free space never displays below zero. |
| Stacked usage bar | Each owned workspace's share of the used portion. The percentage printed on an owned row is that workspace's usage divided by the total entitlement, rounded to a whole percent. |
| **Workspaces you own** | Workspace name, icon, used bytes and its percentage of your account limit. Choosing a row activates that workspace and opens its main Dashboard. |
| **Where your space comes from** | Base plan and eligible add-on, custom package, active license and referral rows. Their byte values add up to **Your storage** total. |
| **Shared with you** | Workspaces owned by somebody else, with owner name and your role. Their file bytes are charged to that owner and are intentionally absent from your total. |

The response is private and may be cached for up to 60 seconds. A just-finished upload, deletion, plan reconciliation or license change can therefore need a refresh after that interval before the dashboard reflects it.

## Steps

1. Open the workspace switcher in the sidebar and select **Workspace dashboard**.
2. In **Your storage**, record the formatted `used`, `free of`, total, and the percentage below the bar.
3. Add the rows under **Where your space comes from**. The sum should equal the displayed total; a zero-byte optional source is omitted.
4. Inspect **Workspaces you own**. Hovering or reading the colored segments identifies how owned-workspace bytes contribute to the filled bar.
5. Review **Shared with you** separately. Its subtitle states **These use the owner's storage, not yours.** The owner name and role explain why a visible workspace contributes no bytes to your pool.
6. Select an owned or shared row only after checking its name and icon. The click changes the active workspace and navigates to its Dashboard.
7. Use **Get more storage** when the owner-level total is the binding limit; it opens Billing. Use that workspace's **Settings → Hard limits** when an explicit workspace cap is blocking writes instead.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Team overview for an active workspace, used after the account dashboard to verify the selected workspace and member roles." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The dashboard lists membership and owner context; open Team in the selected workspace when individual member details are required. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Resolve mismatched figures

**A shared workspace is missing from usage.** This is expected: the owner's pool pays for it. Look under **Shared with you**, where the owner and your role are shown.

**An owned row percentage seems smaller than its share of used bytes.** The printed row percentage uses the entire entitlement as its denominator, while each colored segment fills a share of the already-used portion of the bar.

**A source row disappeared after a lapse.** A free or lapsed account drops paid add-on/custom rows from its effective source breakdown. Active redeemed license bytes and eligible referral storage are resolved separately.

**The figures did not change immediately.** Wait for the private 60-second cache window to pass and reload once. If the number remains stale, open the workspace itself and compare its storage view before retrying any transfer.

**Failed to load workspace dashboard.** Confirm the session is still valid, retry the page, and avoid using a partial or blank view for capacity decisions.

## Expected result

The entitlement-source rows reconcile to the total limit, owned workspace bytes reconcile to the used value, and shared memberships remain outside the caller's storage calculation. Opening a row activates the workspace whose name and owner you checked.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
