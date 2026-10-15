---
{
  "articleId": "hc-notifications-review-by-day",
  "locale": "en",
  "revision": 5,
  "title": "Read notification groups by day",
  "summary": "Use Today, Earlier, relative times, unread dots, and Load more to review Dosya notifications in the order the account received them, page by page.",
  "category": "account",
  "articleSlug": "notifications-review-by-day",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/notifications.tsx, apps/web/src/lib/notifications.ts, and apps/api/src/pages/api/notifications/index.ts. Production inbox data was not inspected.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications review by day",
    "Notification inbox",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The notification inbox merges personal notices with active broadcasts and sorts the combined list newest first. The first request returns 30 items; the service accepts at most 50 per page, while the web client uses **Load more** to request the next 30.

<figure class="help-screenshot"><a href="/screenshots/notifications-review-by-day-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-review-by-day-help-workflow-2026-10-14.webp" alt="Notification-inbox map showing the bell menu, Today and Earlier groups, unread dot, Dismiss action, and Load more paging." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The inbox sequence distinguishes created-time groups from delivery time, then follows the 30-item Load more cursor to older notices. <a href="/screenshots/notifications-review-by-day-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the bell and choose the full **Notifications** view.
2. Read **Today** first. Its boundary is midnight in your browser's local time zone, so a notification can change groups when the device clock or time zone changes.
3. Use **Earlier** for every older item currently loaded. The interface does not create separate Yesterday or calendar-date groups.
4. Interpret the small time as elapsed time: **just now**, minutes such as 8m, hours such as 3h, or whole days such as 2d.
5. An unread item has a green dot. Opening an item with a destination marks it read and navigates to that path. **Dismiss** removes it from the visible inbox; dismissal is different from reading.
6. Select **Load more** until the button disappears when you need older history. Items that expired, were dismissed, or are hidden by an off **In-app** channel are not returned.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya account identity screen used to confirm which signed-in account owns the notification history being reviewed." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the active account in Profile before comparing its Today and Earlier notification groups. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The two day headings describe when the notification row was created, not when an email arrived or a push banner appeared. Delivery transports are independent and can complete at different times.

## Expected result

Loaded notices appear in descending creation order under **Today** or **Earlier**. The next page appends below the existing list without reshuffling the day rule, and **Load more** vanishes once the server returns no cursor. An empty eligible inbox displays **Nothing here yet.**

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
