---
{
  "articleId": "hc-notifications-delivery-channels",
  "locale": "en",
  "revision": 5,
  "title": "Choose notification delivery channels",
  "summary": "Configure in-app, email, and push delivery separately, understand their account and device scope, and avoid disabling every notification path.",
  "category": "account",
  "articleSlug": "notifications-delivery-channels",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 using apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/groups.ts, apps/mobile/src/notifications/push.ts, apps/web/src/pages/profile/notifications.tsx, apps/api/src/pages/api/me/notifications.ts, and delivery-gate tests. Production delivery was not exercised.",
  "related": [
    "hc-notification-preferences",
    "hc-security-notifications"
  ],
  "keywords": [
    "notifications delivery channels",
    "Notification delivery settings",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya exposes three account delivery channels: **In-app**, **Email**, and **Push notifications** on mobile (**Browser push** on web). Each transport has a separate master switch.

<figure class="help-screenshot"><a href="/screenshots/notifications-delivery-channels-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-delivery-channels-help-workflow-2026-10-14.webp" alt="Notification delivery map for In-app, Email, mobile Push, browser push, and their separate permission layers." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Configure account transports first, then satisfy the device or browser permission for push. <a href="/screenshots/notifications-delivery-channels-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open notification settings and wait for current server values to load.
2. Use **In-app** to control inbox visibility. The mobile screen currently warns **With In-app off, no notifications are delivered at all - email and push included.** Source behavior is narrower: Email and Push are planned independently and can still deliver when their own switches and group allow them.
3. Set **Email** for mail sent to the account address. Mandatory email can still bypass this switch.
4. Set **Push notifications** on mobile. The account value applies across delivery logic, while enabling it also registers this device after OS permission. On web, use **Browser push** and **Enable browser notifications** for that browser subscription.
5. Reload the page/screen and confirm the switches retain their server values before testing an event.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile reference for In-app, Email, and Push channel preferences." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Delivery masters are account settings even when push permission belongs to one device or browser. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Channel rows default to enabled when the user has never stored a choice. Event groups then supply per-channel defaults: every group defaults on in-app, while only selected groups default to email or push. A saved group choice overrides its defaults, except mandatory entries and the two explicit file opt-ins.

Push settings do not replace OS/browser permission. Disabling mobile Push unregisters this device best-effort; another registered device may still receive account push while the channel remains enabled again.

## Expected result

New optional notifications use only the enabled transport combination permitted by their event group. The inbox, mail, and device/browser alert can therefore differ without representing duplicate or lost cloud files.

## Troubleshooting

**The inbox stopped but email or push continued.** That matches server behavior even though the mobile warning says otherwise. Re-enable In-app to make eligible rows visible again.

**Browser permission was denied.** Web reports **Permission denied** and **Allow notifications in your browser settings**. Unsupported browsers show **Not supported** and **This browser can't receive web push**.

**Mobile push is enabled but silent.** Review OS permission and registration on a physical device. The saved account channel alone does not create a platform token.

## Related guides

- [Choose account delivery transports](/account/notification-preferences)
- [Review security notifications](/account/security-notifications)
