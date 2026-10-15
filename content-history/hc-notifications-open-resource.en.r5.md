---
{
  "articleId": "hc-notifications-open-resource",
  "locale": "en",
  "revision": 5,
  "title": "Open the resource linked from a notification",
  "summary": "Follow supported notification destinations on mobile, understand mark-read behavior and hidden actions, and recover from removed or inaccessible resources.",
  "category": "account",
  "articleSlug": "notifications-open-resource",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 with apps/mobile/app/notifications.tsx, apps/mobile/src/notifications/actionPath.ts, apps/mobile/src/notifications/remote.ts, apps/api/src/lib/notifications/logic.ts, and notification action tests. No production link or resource was followed.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications open resource",
    "Notification inbox",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
A notification link is a pointer, not an access grant. Mobile validates its route mapping and the destination checks current account/workspace authorization again.

<figure class="help-screenshot"><a href="/screenshots/notifications-open-resource-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-open-resource-help-workflow-2026-10-14.webp" alt="Mobile notification link handling from read state through safe route mapping, authorization, and unsupported-destination fallback." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Opening a notice never grants access that the resource API would otherwise refuse. <a href="/screenshots/notifications-open-resource-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Notifications** and read the actor, body, and timestamp for the relevant row.
2. Tap the row. Dosya immediately marks unread state locally and sends the read update in the background.
3. For supported routes, verify the destination: a file, Files root, Shares, Teams, Workspaces, Profile, Notifications, or Vault root.
4. If the row contains an explicit action, use it only after reading the label. Up to two catalog actions may be present; unsupported navigate targets are omitted on mobile.
5. Return to the inbox and confirm the unread dot is gone. Use the close icon only if you also want to dismiss the notice.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya account area used to enter the notification inbox and follow a supported resource route." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The inbox keeps a readable message when mobile cannot implement its destination. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Internal destinations must begin with one `/`; protocol-relative `//` links are rejected. The server catalog may permit HTTPS for web/system messages, but mobile has no external-route mapping and falls back to the inbox for a tapped push. A row whose route cannot be mapped is still marked read but stays in place.

Read and dismiss requests are optimistic. If a request fails, the phone drops its local overlay and refetches server state. Neither operation changes the underlying file, share link, request, bill, or membership.

## Expected result

A valid supported link opens the current authorized resource and clears unread state. Unsupported or stale destinations fail closed without navigating to an untrusted scheme.

## Troubleshooting

**Nothing happens after tapping the row.** The link likely lacks a mobile equivalent. Use web/desktop for that notice, or open the related area manually.

**The file screen denies access.** The event can remain after a file is deleted or permissions change. Confirm workspace membership and current resource status.

**The unread dot returns.** The background read request failed. Restore connectivity and tap the row again; server state is authoritative.

## Related guides

- [Control resource-notification topics](/account/notification-preferences)
- [Recover a notification destination](/troubleshooting/notifications)
