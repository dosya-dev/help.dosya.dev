---
{
  "articleId": "hc-notifications-open-inbox",
  "locale": "en",
  "revision": 5,
  "title": "Open the Dosya notification inbox",
  "summary": "Use the notification bell and full inbox, interpret unread and empty states, and avoid dismissing account activity you still need before it disappears.",
  "category": "account",
  "articleSlug": "notifications-open-inbox",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed and validated 2026-10-14 from apps/web/src/components/notifications/notification-bell.tsx, apps/web/src/components/notifications/notification-card.tsx, apps/web/src/stores/notifications.ts, apps/web/src/pages/notifications.tsx, and apps/api/src/lib/notifications/query.ts. Inspection was read-only and did not open, read, or dismiss anything in a production inbox.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications open inbox",
    "Notification inbox",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
The bell’s popover provides a recent account-level view; **See all** opens the complete paginated inbox. Both surfaces combine eligible activity across the signed-in account rather than filtering to the currently selected workspace.

<figure class="help-screenshot"><a href="/screenshots/notifications-open-inbox-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-open-inbox-help-workflow-2026-10-14.webp" alt="Path from the Notifications bell to the recent popover and the full newest-first inbox." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Start with the bell for recent activity, then use See all when you need the paginated account history. <a href="/screenshots/notifications-open-inbox-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the bell shows

The trigger is labelled **Notifications**. Its badge displays the unread total and caps the visible number at **99+**. Opening it loads recent entries grouped as **Today** and **Earlier** using the device’s local date boundary.

The popover contains **Mark all read**, **See all**, and **Settings**. **Mark all read** immediately clears the local badge and records all current account notifications as read, including older pages that are not loaded on screen; there is no control to restore unread status. **Settings** opens `/profile/notifications`.

Selecting a card with a destination marks that item read and navigates to its stored path. A card’s **Dismiss** button, or a dismiss action inside it, removes the entry from the inbox with no undo control. Review the title, body, actor, and destination before dismissing important security, billing, or sharing activity.

## Steps

1. Confirm the account from the avatar menu, then select the bell whose accessible label is **Notifications**.
2. Wait while the popover says **Loading…**. If no entries qualify, it changes to **You’re all caught up 🎉**.
3. Review unread dots, relative times such as **just now**, **5m**, **2h**, or **3d**, and the day grouping.
4. Choose **See all** to open `/notifications`.
5. Let the newest page load. A full-page empty result says **Nothing here yet.**
6. Select a notification only when you want to follow its destination and mark it read.
7. Use **Load more** below a non-empty page when older eligible entries remain.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Account profile reference for matching an inbox to the intended signed-in Dosya user." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The inbox is user-scoped, so an unexpected empty state can simply mean the wrong account is active. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If activity is absent

Check **Profile > Notifications** and make sure **In-app** is enabled. The inbox query hides dismissed records, expired personal entries, and broadcasts muted through their group preference. A transient summary or list failure keeps the previous client state, so reconnect and reopen the bell before changing settings.

Opening either inbox surface alone does not mark every entry read. Only card navigation, **Mark all read**, or an explicit action changes state.

## Expected result

The bell displays the current unread count and recent eligible activity; **See all** opens a newest-first account history with day labels and pagination. No read or dismissal state changes until you invoke the corresponding control.

## Related guides

- [Load older Dosya notifications](/account/notifications-load-older)
- [Choose which event groups notify you](/account/notifications-event-groups)
- [Troubleshoot notifications](/troubleshooting/notifications)
