---
{
  "articleId": "hc-mobile-notifications-inbox",
  "locale": "en",
  "revision": 5,
  "title": "Open the mobile notification inbox",
  "summary": "Read and manage the account-wide mobile notification inbox, including 30-item pages, unread state, dismissal, routing, and offline recovery.",
  "category": "account",
  "articleSlug": "mobile-notifications-inbox",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/app/notifications.tsx, apps/mobile/src/notifications/api.ts, apps/mobile/src/notifications/inbox.ts, apps/mobile/src/notifications/NotificationBell.tsx, apps/api/src/pages/api/notifications/index.ts, and notification query tests. Production inbox data was not read.",
  "related": [
    "hc-mobile-permissions",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "mobile notifications inbox",
    "Mobile activity and notifications",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The mobile inbox combines personal notifications and active account broadcasts, newest first. It is account-wide; changing the active workspace does not filter the rows.

<figure class="help-screenshot"><a href="/screenshots/mobile-notifications-inbox-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-notifications-inbox-help-workflow-2026-10-14.webp" alt="Mobile inbox workflow for unread badges, Today and Earlier sections, 30-item paging, reading, and dismissal." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The inbox merges current account notifications in newest-first order. <a href="/screenshots/mobile-notifications-inbox-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Tap the bell beside workspace search. Its unread badge shows an exact count through 99 and **99+** above that; the summary refreshes when the app regains focus and is considered fresh for **30 seconds**.
2. On **Notifications**, read rows under **Today** and **Earlier**, grouped using the device’s local midnight. Relative time appears as just now, minutes, hours, or days.
3. Tap a row to mark it read and open a supported destination. The colored dot is the unread indicator.
4. Use a row’s close button to dismiss it. Dismissal hides the notice for this account; it does not change the resource named in the message.
5. If any unread rows remain, choose **Mark all read** in the header. This changes read state but leaves rows in the inbox.
6. Scroll toward the end to load older pages automatically. Mobile asks for **30 items** at a time; the server caps a request at **50** and uses the prior page’s creation time as the cursor.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for the account-wide notification inbox." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a current client to receive paging, read-state, and routing behavior described here. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The API merges personal rows and broadcasts before applying the page limit. Expired personal notices, dismissed rows, disabled broadcasts, and content suppressed by **In-app** do not appear. Pages are deduplicated by notification ID and sorted again on the phone.

## Expected result

The list shows the current account’s permitted, non-dismissed messages in descending time order. With no returned rows, the mobile screen says **You're all caught up.**

## Troubleshooting

**Mark all read comes back unread.** The phone applies the change optimistically. A failed server write restores/refetches state and shows **Could not mark all read**; reconnect and retry once.

**A dismissed item returns.** Dismiss is also optimistic. If its request fails, the local overlay is cleared and the server list is fetched again.

**The bell has no badge during an error.** Summary failures keep the bell usable and preserve no invented count. Open the inbox after connectivity returns.

## Related guides

- [Review notification authorization on this phone](/account/mobile-permissions)
- [Diagnose an incomplete mobile inbox](/troubleshooting/notifications)
