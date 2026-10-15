---
{
  "articleId": "hc-mobile-activity-open",
  "locale": "en",
  "revision": 5,
  "title": "Open workspace activity on mobile",
  "summary": "Open a permitted mobile workspace audit trail, inspect exact event details, page through its 30-row results, and understand privacy filtering.",
  "category": "account",
  "articleSlug": "mobile-activity-open",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 with apps/mobile/app/activity.tsx, apps/mobile/src/activity/ActivityEntry.tsx, apps/mobile/src/activity/api.ts, apps/api/src/pages/api/activity.ts, and apps/api/src/lib/paging.ts. No production workspace or audit record was accessed.",
  "related": [
    "hc-mobile-permissions",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "mobile activity open",
    "Mobile activity and notifications",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Use **Activity** to answer who performed a workspace action, what resource was involved, and when it happened. The feed is workspace-wide and requires `view_activity`; it is not a personal device log.

<figure class="help-screenshot"><a href="/screenshots/mobile-activity-open-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-activity-open-help-workflow-2026-10-14.webp" alt="Mobile Activity workflow showing workspace selection, event paging, and expanded audit details." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Open an event in place to inspect the fields the current role is permitted to receive. <a href="/screenshots/mobile-activity-open-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Check the workspace name in the mobile header. If it is wrong, open the workspace picker and choose the intended entry before continuing.
2. Open **Settings → Activity**. The header initially reads **Loading…**, then shows the total as **1 activity** or **N activities**.
3. Read a row for its actor, action phrase, resource, relative time, and any badges such as a non-success outcome, mobile/CLI source, rename pair, email, file count, or “on behalf of” identity.
4. Tap the row to expand it in place. Available detail labels are **When**, **Where**, **Device**, **Source**, **Outcome**, **Resource**, **Account**, and **Session**. **When** includes both an absolute local timestamp and a relative time.
5. Choose **Load older** to fetch the next page. Mobile requests **30 audit rows per page**; the server accepts 10–100 but this screen uses the default.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for the app that displays expandable workspace audit rows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The released mobile client exposes Activity from Settings for permitted members. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Owners and administrators can receive forensic details for other members. Other roles with activity access see their own full fields, but another member’s source IP, device/user agent, location, session, request ID, and unapproved metadata are removed by the API. Names of files or folders that the viewer cannot open are also stripped. These privacy gates run on the server, not just in the phone interface.

## Expected result

The newest permitted event appears first, and expanding a row reveals only the details this account may receive. An unused workspace shows **Nothing has happened here yet.**

## Troubleshooting

**You see “Not a member.”** The workspace may have been removed, your membership may have ended, or your account may be confined to one folder. Select another valid workspace or ask its owner to review membership.

**A resource name or forensic field is absent.** That can be intentional. Hidden, locked, or unreachable resources lose their names, and non-owner/non-admin viewers do not receive another member’s sensitive request context.

**Paging stopped with an error.** The list keeps the pages already loaded. Restore the connection and press **Retry** below **Could not load more. Try again.**

## Related guides

- [Check mobile access before reading audits](/account/mobile-permissions)
- [Investigate activity-related notification gaps](/troubleshooting/notifications)
