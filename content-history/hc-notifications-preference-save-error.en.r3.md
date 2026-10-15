---
{
  "articleId": "hc-notifications-preference-save-error",
  "locale": "en",
  "revision": 3,
  "title": "Fix a notification preference that will not save",
  "summary": "Restore connectivity, retry the single switch, and reopen Profile > Notifications. Verify that the server-confirmed value persists instead of only changing visually.",
  "category": "account",
  "articleSlug": "notifications-preference-save-error",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Fix a notification preference that will not save** in Dosya. The main action is to restore connectivity, retry the single switch, and reopen Profile > Notifications; the decisive check is whether the server-confirmed value persists instead of only changing visually.

<figure class="help-screenshot"><a href="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix a notification preference that will not save, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix a notification preference that will not save: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/notifications-preference-save-error-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Profile > Notifications in the current released client.
- Confirm the active account and workspace, then identify switch that returned a Couldn’t save message.

## Steps: fix a notification preference that will not save

1. Open Profile > Notifications and confirm the active account and workspace.
2. Locate switch that returned a Couldn’t save message and verify its name or identifying details.
3. Restore connectivity, retry the single switch, and reopen Profile > Notifications.
4. Confirm that the server-confirmed value persists instead of only changing visually.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile settings for account identity and notification delivery preferences." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Some security and service messages are always on even when optional groups are disabled. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The server-confirmed value persists instead of only changing visually.

## Expected result

The controlled workflow completes and the server-confirmed value persists instead of only changing visually.

## Troubleshooting

**The expected control is missing.** Return to Profile > Notifications, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Review security notifications](/account/security-notifications)
