---
{
  "articleId": "hc-mobile-notification-action",
  "locale": "en",
  "revision": 5,
  "title": "Open an item from a mobile notification",
  "summary": "Use a supported action on a mobile notification, understand which web destinations have mobile routes, and recover when an action is unavailable.",
  "category": "account",
  "articleSlug": "mobile-notification-action",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from local source on 2026-10-14 in apps/mobile/app/notifications.tsx, apps/mobile/src/notifications/actionPath.ts, apps/mobile/src/notifications/inbox.ts, apps/mobile/src/notifications/remote.ts, and action-path tests. No production notification action was run.",
  "related": [
    "hc-mobile-permissions",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "mobile notification action",
    "Mobile activity and notifications",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
A mobile notification may contain up to two catalog-defined actions. Dosya only displays an action when its handler and destination have a safe mobile implementation.

<figure class="help-screenshot"><a href="/screenshots/mobile-notification-action-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-notification-action-help-workflow-2026-10-14.webp" alt="Mobile notification action workflow showing supported navigation, read state, dismissal, and inbox fallback." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Only actions with an implemented mobile route are presented to the user. <a href="/screenshots/mobile-notification-action-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the bell in the workspace header and locate the notification. The inbox belongs to the signed-in account, even though the header also shows an active workspace.
2. Read the title, body, actor, and relative time before using an action. Actions currently support navigation or dismissal; they do not directly mutate files, extend links, or revoke sessions.
3. Choose the visible action label. A navigation action marks the notification read and opens its mapped mobile destination. A dismiss action removes the row from this account’s inbox.
4. Confirm the destination and workspace membership before changing the linked resource.

Mobile supports exact destinations for a single `/files/:id` item, Files, Shares, Teams, Workspaces, Profile, Notifications, and the Vault root. It does not open arbitrary web-only pages, HTTPS destinations, nested Vault spaces, or unmatched routes. Unsupported navigation actions are hidden rather than opening a blank screen.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for inbox actions implemented by the native client." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Unsupported web actions stay absent from the mobile notification row. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Tapping the notification row itself also marks it read. If its link has no mobile mapping, the row stays on the inbox instead of navigating. A tapped OS push with an unsupported or missing mobile target falls back to **Notifications**, so the message is still readable.

## Expected result

A supported action opens the corresponding mobile screen once, and the unread dot clears. A dismissal removes only the notification record from view; it does not undo the event or delete its file, link, request, or membership.

## Troubleshooting

**An action button is missing.** The server route may have no mobile equivalent. Open the web app for web-only billing, maintenance, or detailed settings destinations.

**The resource cannot be opened.** Notifications can outlive access. The file may be trashed, the share revoked, or workspace membership changed. Recheck the account and resource permissions rather than repeatedly pressing the row.

**A push opened only the inbox.** That is the designed fallback for unsupported `link_path` values. Read the notice, then use the relevant web or desktop surface if the mobile route is absent.

## Related guides

- [Check access behind mobile notification actions](/account/mobile-permissions)
- [Repair a notification action or alert](/troubleshooting/notifications)
