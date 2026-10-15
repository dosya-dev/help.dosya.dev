---
{
  "articleId": "hc-notifications-fix-reverting-preferences",
  "locale": "en",
  "revision": 5,
  "title": "Fix notification preferences that revert",
  "summary": "Fix a notification switch that reverts by checking optimistic saves, session and network errors, device registration, and the server-confirmed value.",
  "category": "account",
  "articleSlug": "notifications-fix-reverting-preferences",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 with apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/api.ts, apps/web/src/pages/profile/notifications.tsx, apps/api/src/pages/api/me/notifications.ts, and preference endpoint tests. No production switch was toggled.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications fix reverting preferences",
    "Notification delivery diagnostics",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Notification switches move immediately, then Dosya saves one key to the server. If that request fails, the client restores the prior value rather than pretending the change persisted.

<figure class="help-screenshot"><a href="/screenshots/notifications-fix-reverting-preferences-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-fix-reverting-preferences-help-workflow-2026-10-14.webp" alt="Notification preference recovery from an optimistic switch through failed save rollback and a fresh server read." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Reload after one edit to distinguish a saved preference from a temporary visual state. <a href="/screenshots/notifications-fix-reverting-preferences-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Verify the account email and open notification settings with a stable connection.
2. Change only one group or channel. Mobile uses an optimistic overlay; web also moves the switch before the PUT response.
3. Watch for **Couldn't save. Try again.** on mobile, or web’s **Couldn't save** toast with the server error.
4. If no error appears, leave and reopen settings to force a fresh GET from `/api/me/notifications`.
5. For Push, also check device permission. The server channel is saved before mobile registration. An OS denial returns normally, shows the settings toast, and refreshes the query; it does not roll back the saved account value or explicitly remove the optimistic overlay.
6. Retry after restoring the authenticated session or network. Avoid rapidly toggling several values while diagnosing one failed write.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile reference for reopening notification preferences after a failed optimistic save." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A fresh account settings read reveals the server-held switch state. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The endpoint accepts partial maps and stores only recognized channels, 14 group keys, or supported `type:` opt-ins. An API key cannot change these account settings; the route requires session authentication. Clients intentionally send one changed key per request to avoid overwriting edits from another open session.

## Expected result

Reopening the screen shows the intended server-confirmed value. For Push, the OS permission and device registration also agree with the account channel.

## Troubleshooting

**The value returns immediately.** The save call failed and the optimistic UI rolled back. Reauthenticate if needed, reconnect, and repeat the single edit.

**Push says enabled after permission denial.** Open device settings, allow notifications, then toggle Push off/on. The channel save and native registration are separate operations.

**Another device changed the setting.** Refresh both sessions. Partial writes prevent a stale screen from intentionally sending its whole old map, but the latest successful write to the same key wins.

## Related guides

- [Review the preference model after rollback](/account/notification-preferences)
- [Test delivery after a saved setting](/troubleshooting/notifications)
