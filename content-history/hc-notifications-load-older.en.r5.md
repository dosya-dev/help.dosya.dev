---
{
  "articleId": "hc-notifications-load-older",
  "locale": "en",
  "revision": 5,
  "title": "Load older Dosya notifications",
  "summary": "Append the next 30-item cursor page, understand when Load more disappears, and recover when older account notifications do not appear in the inbox.",
  "category": "account",
  "articleSlug": "notifications-load-older",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/web/src/pages/notifications.tsx, apps/web/src/api/notifications.ts, apps/web/src/lib/notifications.ts, apps/api/src/pages/api/notifications/index.ts, and apps/api/src/lib/notifications/query.ts. The pagination review made no production API call and did not mark or dismiss a user notification.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications load older",
    "Notification inbox",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The full notification page fetches 30 items at a time. **Load more** requests entries created strictly before the final timestamp in the current page, merges personal and broadcast notices by newest first, and appends the returned page to what is already visible.

<figure class="help-screenshot"><a href="/screenshots/notifications-load-older-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-load-older-help-workflow-2026-10-14.webp" alt="Pagination sequence from the last visible notification through Loading to an appended older page." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The older-page request keeps the current list in place while it follows the server cursor. <a href="/screenshots/notifications-load-older-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you begin

Open `/notifications` for the correct signed-in account. The list spans that account’s eligible notices across workspaces; changing the active workspace does not create a separate history. No plan or workspace permission controls this account page.

The server omits dismissed items, expired personal notices, and entries hidden by the **In-app** channel preference. Broadcasts also respect the relevant muted event group. Those filters can make the available history shorter than expected.

## Steps

1. Select the bell labelled **Notifications**, then choose **See all**.
2. Wait for the initial page to finish. The newest eligible items appear first under **Today** and **Earlier**, based on the browser’s local midnight.
3. Scroll below the current list and select **Load more**.
4. While the request runs, confirm the button reads **Loading…** and is disabled.
5. Wait for older entries to append beneath the existing items.
6. Repeat until the control disappears. The page removes it after the server returns no next cursor.

The web client does not expose a page-size selector. Although the API accepts a limit of up to 50, this screen always requests its default batch of 30. Loading another page is read-only: it does not mark those items read or dismiss them.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Signed-in Dosya identity used to confirm which account owns the older inbox history." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Notification history follows the authenticated user, so verify the account when expected entries belong elsewhere. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If the next page is missing

When **Load more** is absent, the current result has no next cursor. If you expected an older item, first check whether it was dismissed, expired, blocked by **In-app**, or muted by its group. If the button changes back after a connection failure but nothing appends, restore the network and select it again; the current page remains visible. Reloading starts again from the newest 30 entries.

The cursor comparison is timestamp-based and asks for records strictly older than the last returned item. If pagination repeatedly skips or repeats an identifiable notice, record its displayed time and title before contacting support.

## Expected result

Each successful selection adds an older chronological page below the current notifications without changing their read state. After the oldest eligible result, **Load more** is no longer shown.

## Related guides

- [Open the Dosya notification inbox](/account/notifications-open-inbox)
- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
