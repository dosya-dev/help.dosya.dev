---
{
  "articleId": "hc-mobile-push-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Fix mobile push notifications that do not arrive",
  "summary": "Diagnose mobile push using the Dosya channel, OS permission, physical-device registration, current account, and supported notification route.",
  "category": "account",
  "articleSlug": "mobile-push-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/app/notification-settings.tsx, apps/mobile/src/notifications/push.ts, apps/mobile/src/notifications/remote.ts, apps/mobile/app/_layout.tsx, apps/mobile/app.config.ts, apps/api/src/lib/notifications/push.ts, apps/api/src/lib/notifications/notify.ts, and push tests. No physical device registration or production delivery occurred.",
  "related": [
    "hc-mobile-permissions",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "mobile push troubleshoot",
    "Mobile activity and notifications",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Push delivery crosses several independent gates: an eligible event, account preferences, server subscription lookup, a valid Expo token, Expo transport, and the operating system’s presentation rules.

<figure class="help-screenshot"><a href="/screenshots/mobile-push-troubleshoot-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-push-troubleshoot-help-workflow-2026-10-14.webp" alt="Mobile push diagnostic path through In-app delivery, Push preference, OS permission, token registration, and route handling." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Separate inbox creation from device presentation to locate the failed push layer. <a href="/screenshots/mobile-push-troubleshoot-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the account email in **Settings**, then open **Notifications**. Push registration belongs to that account and this installation.
2. Check **In-app** separately. Turning it off hides rows from the inbox, although the delivery planner can still send an enabled Email or Push leg; the current mobile warning overstates this relationship.
3. Turn **Push notifications** off, wait for the switch request, then turn it on. Enabling saves the channel and explicitly asks the OS for permission before registering the Expo token.
4. If prompted, allow notifications. If no prompt can be shown, open iOS/Android settings for dosya.dev and enable alerts there.
5. Test on a physical phone with a harmless event whose group is enabled. Simulators return **Push needs a physical device.**
6. Open the inbox even if no banner appears. A row proves the notification was created, but mobile push can still fail during subscription lookup, token validation, Expo delivery, or OS presentation.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile availability reference for physical-device push troubleshooting." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Store and direct builds require working platform push configuration to register. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

At sign-in, Dosya runs a prompt-once registration. After the device-wide prompt has been attempted, later launches register silently only when permission already exists. A release missing EAS configuration reports **Push isn't configured for this build (no EAS project id).** On Android, the app creates a high-importance channel named **Notifications**; users can still mute that channel in system settings.

Foreground pushes request banner, notification-list entry, and sound, but do not set a badge. Cold-start taps are parked until the session is restored. A web-only route opens the inbox instead of a nonexistent mobile screen.

## Expected result

The eligible event appears in the account inbox and, when OS policy permits, as a device notification. Selecting it routes to a supported mobile resource or to the inbox fallback.

## Troubleshooting

**The Push switch is on but permission is denied.** Settings are saved before device registration. Change OS permission, then toggle Push off/on again so the token is registered.

**Push stopped after an account change.** Sign-out unregisters best-effort while credentials still exist, and sign-in reassigns the token. Verify the new account and repeat registration if the device was offline during either step.

**The inbox has the event but no device receives it.** The server reads live iOS and Android subscription rows, ignores tokens outside Expo’s accepted shape, and sends the remaining messages through Expo. Retry registration first; support can then distinguish a missing subscription lookup from an Expo transport failure.

**Only some topics arrive.** Review **What you hear about**. A muted group blocks optional events; mandatory email has separate behavior and does not prove push should arrive.

## Related guides

- [Audit push permission at the OS layer](/account/mobile-permissions)
- [Run the wider notification checklist](/troubleshooting/notifications)
