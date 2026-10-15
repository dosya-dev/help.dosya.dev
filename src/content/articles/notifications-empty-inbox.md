---
{
  "articleId": "hc-notifications-empty-inbox",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot an empty notification inbox",
  "summary": "Explain an empty notification inbox by checking account scope, in-app delivery, dismissal, expiry, pagination, and connectivity before retesting.",
  "category": "account",
  "articleSlug": "notifications-empty-inbox",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/app/notifications.tsx, apps/api/src/pages/api/notifications/index.ts, apps/api/src/lib/notifications/query.ts, apps/mobile/src/notifications/inbox.ts, and inbox/query tests. No production notification record was inspected or dismissed.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications empty inbox",
    "Notification inbox",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
An empty inbox can mean there are no visible messages, every row was dismissed, the **In-app** channel is off, or the current account has no eligible notification. It does not prove that all workspaces are quiet.

<figure class="help-screenshot"><a href="/screenshots/notifications-empty-inbox-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-empty-inbox-help-workflow-2026-10-14.webp" alt="Empty inbox diagnosis covering signed-in account, In-app channel, group choices, dismissal, expiry, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>An empty result is explained by visibility and delivery state rather than workspace selection alone. <a href="/screenshots/notifications-empty-inbox-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the email on the mobile Settings card or web profile. Notification history is account-wide and never transfers between accounts.
2. On mobile, tap the bell; **You're all caught up.** appears when the merged list returns no rows. The web full page uses **Nothing here yet.**
3. Open notification settings and check **In-app**. When disabled, personal and broadcast inbox queries exclude rows. The stored record and separately enabled Email or Push delivery can still exist.
4. Review event groups. Muted broadcasts are omitted, and optional personal events may never have been written.
5. Restore connectivity and reopen the inbox. Mobile requests 30 newest rows and loads older pages near the list end; web can use **Load more**.
6. Trigger one harmless eligible event from a second account or member, then refresh/focus the client.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity reference for confirming which account owns an empty inbox." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The account email is the first check when expected notifications are absent. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The server excludes personal notices whose expiry time has passed and any row with a dismissal timestamp. Active broadcasts are also filtered by the account’s group opt-out and dismissal state. Marking a row read does not remove it; using the close/dismiss control does.

## Expected result

The inbox either receives the controlled event or the checks isolate account, channel, group, expiry, dismissal, or connectivity as the reason it remains empty.

## Troubleshooting

**The bell count is zero but rows exist.** Read rows remain visible without contributing to the unread summary. **Mark all read** changes count, not retention.

**A workspace switch did nothing.** The inbox is scoped to the user, not the active workspace. Resource navigation may still require switching context after opening a notice.

**A test event appears by email only.** Mandatory mail can bypass the Email preference, while In-app or Push remains disabled. Use an optional event when testing ordinary channel behavior.

## Related guides

- [Restore inbox-producing preferences](/account/notification-preferences)
- [Trace why the notification list is blank](/troubleshooting/notifications)
