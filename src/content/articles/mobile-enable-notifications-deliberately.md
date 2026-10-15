---
{
  "articleId": "hc-mobile-enable-notifications-deliberately",
  "locale": "en",
  "revision": 5,
  "title": "Enable mobile notifications deliberately",
  "summary": "Enable mobile push for the intended account and physical device, align Dosya and OS settings, and test delivery without changing unrelated channels.",
  "category": "account",
  "articleSlug": "mobile-enable-notifications-deliberately",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 using apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/push.ts, apps/mobile/src/notifications/remote.ts, apps/mobile/app/_layout.tsx, and push tests. No OS prompt or production push was triggered.",
  "related": [
    "hc-mobile-install",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile enable notifications deliberately",
    "Mobile setup and permission details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Mobile notifications require two independent choices: the Dosya **Push notifications** channel for the account and notification permission from iOS or Android for this installed app.

<figure class="help-screenshot"><a href="/screenshots/mobile-enable-notifications-deliberately-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-enable-notifications-deliberately-help-workflow-2026-10-14.webp" alt="Mobile notification setup from account channel through operating-system permission and a controlled delivery test." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Push succeeds only when the account preference, device registration, and OS alert policy agree. <a href="/screenshots/mobile-enable-notifications-deliberately-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Settings**, verify the account email, then choose **Notifications** under **Preferences**.
2. Wait for **Notification settings** to load. Under **Delivery**, note the current warning: **With In-app off, no notifications are delivered at all - email and push included.** The server actually evaluates Email and Push independently; this switch hides inbox rows and disables only the in-app leg.
3. Turn on **Push notifications**. Dosya saves the account channel first, then requests OS permission and registers this physical device’s Expo token to the current account.
4. On the system prompt, allow notifications. Configure banner, sound, lock-screen, or focus behavior in the OS settings; Dosya cannot override those choices.
5. Leave only the event groups you want under **What you hear about**. Use a harmless event from another test member when available, then watch the bell and the device alert.

The setting is not plan- or workspace-role-gated. It is account-wide, while a notification’s linked file or team page still enforces workspace membership. Simulators cannot receive push and return **Push needs a physical device.** A build without its EAS project identity returns **Push isn't configured for this build (no EAS project id).**

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for device-level push permission and registration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A supported physical installation is required for remote mobile push. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

When Dosya is foregrounded, server push asks the OS to show a banner and notification-list entry with sound, without setting an app badge. Android uses the **Notifications** channel at high importance. System focus modes, per-app sound settings, battery controls, or a denied OS permission can still suppress presentation.

## Expected result

The Push switch remains enabled after reloading settings, the physical device is registered to the current account, and an eligible event can appear as both an inbox row and an OS notification.

## Troubleshooting

**The app says “Enable notifications for dosya.dev in Settings.”** The account preference may already have saved, but OS permission was denied. Open device Settings, allow Dosya notifications, return to the app, and toggle **Push notifications** off and on to register again.

**No prompt appears.** The prompt is per installation. If the OS no longer permits asking, change permission in device Settings. Automatic sign-in registration uses a prompt-once rule and will not repeatedly interrupt you.

**Another account receives this phone’s push.** Signing in re-points an existing token to the current account; explicit sign-out unregisters best-effort before clearing tokens. Sign out, reconnect, and verify the account card if routing seems stale.

## Related guides

- [Choose the supported app distribution](/account/mobile-install)
- [Control the phone notification permission](/account/mobile-permissions)
