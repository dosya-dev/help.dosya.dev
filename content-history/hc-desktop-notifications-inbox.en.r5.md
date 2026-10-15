---
{
  "articleId": "hc-desktop-notifications-inbox",
  "locale": "en",
  "revision": 5,
  "title": "Review desktop notifications",
  "summary": "Use the desktop notification bell and full inbox, mark or dismiss items, load older pages, and understand which actions have desktop routes.",
  "category": "desktop",
  "articleSlug": "desktop-notifications-inbox",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/notifications/NotificationBell.tsx, apps/desktop/src/renderer/pages/NotificationsPage.tsx, apps/desktop/src/renderer/lib/notifications-api.ts and apps/api/src/pages/api/notifications/index.ts. Production behavior was not tested and no notification state was changed.",
  "related": [
    "hc-desktop-system-tray",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop notifications inbox",
    "Desktop navigation and notifications",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Desktop notifications belong to the signed-in Dosya account. The title-bar bell gives a ten-item preview, while **View all** opens the paginated inbox for older personal and broadcast messages.

<figure class="help-screenshot"><a href="/screenshots/desktop-notifications-inbox-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-notifications-inbox-help-workflow-2026-10-14.webp" alt="Desktop notification workflow showing the unread badge, ten-item bell preview, View all link, and full inbox actions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the bell for recent activity, then open the full inbox when the item is older than the preview. <a href="/screenshots/desktop-notifications-inbox-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in to the account that should own the notification. Inbox access is account-scoped and is not limited by plan or workspace role.
- Confirm the desktop app is online. The unread summary refreshes every 60 seconds; opening the bell fetches a fresh preview.
- Treat a notification action as a real product action. Read the title, body, actor, age, and destination before choosing an action label.

## Steps

1. Select the title-bar **Notifications** bell. Its accessible label includes the exact unread count; the visible badge shows **99+** once the count exceeds 99.
2. In **Notifications**, inspect the newest ten items grouped by day. An unread item has a dot and a heavier title. The line below may show relative time and the actor’s name.
3. Click a row to mark it read. If its stored web path has a desktop equivalent, Dosya also opens that destination; otherwise the item remains readable without navigating to a broken route.
4. Use **Mark all read** to clear the unread state for every active personal and broadcast notification on the account.
5. Select the **Dismiss _title_** control to hide one item. Action labels supplied inside a notification may also dismiss it or navigate to a supported desktop route.
6. Choose **View all** for the full **Notifications** page. It requests 30 items per page and shows **Load older** while a cursor remains; the server accepts at most 50 per request.
7. Choose **Settings** from the preview to open the desktop profile settings when you need to change notification preferences.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop app overview locating the notification bell in the platform-specific title bar." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The bell sits in the title bar and opens toward the visible side of the window on each desktop platform. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Read, dismiss, and navigation behavior

Read and dismiss operations update the server and invalidate the unread summary. The full inbox applies the change immediately in the interface; if the request fails, it discards the optimistic state and refetches the authoritative list.

Dismissing is different from reading. A read item stays in history, while a dismissed item is excluded from subsequent inbox queries. The desktop interface has no undo button for dismissal, so verify the title before selecting the X control.

Notification paths are authored as web routes and mapped to known desktop destinations. Unsupported navigation actions are intentionally hidden. A message can therefore be valid even when clicking its row does not leave the inbox.

## Troubleshooting

- **Loading…** that never resolves usually indicates an expired session or network failure. Reconnect, sign in again if required, and reopen the bell.
- **You’re all caught up.** means the current query has no visible items; it can also appear after dismissing the last item.
- When a badge remains stale after marking read, wait for the mutation and summary refresh, or close and reopen the bell.
- If **Load older** fails, keep the current page and retry later. Loaded notifications are deduplicated by ID, so retrying does not create duplicate rows.
- A notification that belongs to another account will not appear after an account switch; return to the account that received it.

## Expected result

The bell and full inbox show only the authenticated account’s visible notifications. Read state persists, dismissal removes an item from future lists, older pages load in chronological groups, and only actions with valid desktop destinations navigate.

## Related guides

- [Use the desktop system tray](/desktop/desktop-system-tray)
- [Check desktop updates](/desktop/desktop-check-updates)
