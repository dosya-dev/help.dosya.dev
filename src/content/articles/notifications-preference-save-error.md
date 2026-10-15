---
{
  "articleId": "hc-notifications-preference-save-error",
  "locale": "en",
  "revision": 5,
  "title": "Fix a notification preference that will not save",
  "summary": "Recover from “Couldn’t save” by retrying one notification setting, verifying the signed-in session, and confirming the value after a fresh server read.",
  "category": "account",
  "articleSlug": "notifications-preference-save-error",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/api.ts, apps/api/src/pages/api/me/notifications.ts, apps/api/src/lib/notifications/groups.ts, and preference failure tests. No production account setting was written.",
  "related": [
    "hc-notification-preferences",
    "hc-security-notifications"
  ],
  "keywords": [
    "notifications preference save error",
    "Notification delivery settings",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
A notification preference is saved only after the authenticated PUT succeeds. The exact mobile fallback error is **Couldn't save. Try again.**; the web toast title is **Couldn't save**.

<figure class="help-screenshot"><a href="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp" alt="Notification save-error workflow checking initial load, authenticated partial update, rollback, fresh read, and push registration." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The server-confirmed setting is the value that remains after reopening the page. <a href="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the signed-in account and reopen notification settings. If the page says **Couldn't load notification settings.**, select **Retry** before attempting edits.
2. Change one switch. Do not use an API key: `/api/me/notifications` requires a session because it changes account behavior rather than file access.
3. If the value rolls back, restore connectivity and verify the session has not expired. Then retry that same switch once.
4. Leave and reopen the screen. GET returns the effective server state for all 14 groups, nested opt-ins, and three channels.
5. For a Push failure, separately verify OS permission and physical-device support. A native registration error can occur after the account channel was already saved.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile notification settings used to verify a server-confirmed preference after retry." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reopen the signed-in account setting after resolving the failed save. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The endpoint ignores unknown keys. It batches valid preference/channel rows and records a profile update audit event. Missing stored rows use documented defaults; therefore a reloaded value may be a default rather than a database row, but it is still the behavior delivery uses.

## Expected result

The edited switch survives a fresh settings load and controls later eligible notifications. No file, share, workspace role, or existing inbox row changes during the preference write.

## Troubleshooting

**The screen never leaves its load error.** Reauthenticate or check API connectivity, then press **Retry**. Editing is unavailable until the server list arrives.

**The message contains a specific server error.** Resolve that condition first; mobile displays an `Error.message` instead of replacing it with the generic fallback.

**Only Push still fails.** A saved account setting is insufficient without a platform token. Repair OS permission and toggle Push again on a physical, configured build.

## Related guides

- [Edit notification preferences from scratch](/account/notification-preferences)
- [Review security notifications](/account/security-notifications)
