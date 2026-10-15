---
{
  "articleId": "hc-notifications-recover-browser-permission",
  "locale": "en",
  "revision": 5,
  "title": "Recover browser push after denying permission",
  "summary": "Restore Dosya browser push after a denial by changing site permission, re-registering the browser, and checking both delivery switches safely.",
  "category": "account",
  "articleSlug": "notifications-recover-browser-permission",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/lib/web-push.ts, apps/web/src/pages/profile/notifications.tsx, and apps/api/src/pages/api/notifications/push/subscribe.ts. Production delivery was not exercised.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications recover browser permission",
    "Notification delivery diagnostics",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Browser push needs three things at once: browser support for service workers and PushManager, permission for the Dosya site, and Dosya's **Browser push** delivery channel. A previous denial blocks the permission request before Dosya can create a subscription.

<figure class="help-screenshot"><a href="/screenshots/notifications-recover-browser-permission-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-recover-browser-permission-help-workflow-2026-10-14.webp" alt="Browser-push recovery map from app.dosya.dev Notifications permission set to Allow through Browser notifications enabled." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The recovery sequence checks the per-site Notifications rule, Browser push channel, Enable browser notifications button, and enabled confirmation. <a href="/screenshots/notifications-recover-browser-permission-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the browser's site settings for app.dosya.dev, change **Notifications** from **Block** to **Allow**. Browser wording differs; use the per-site permission, not a system-wide setting for every website.
2. Reload Dosya. Open **Profile → Notifications** and leave **Browser push** switched on under **Delivery channels**.
3. Select **Enable browser notifications**. A successful registration shows **Browser notifications enabled**.
4. If Dosya shows **Permission denied — Allow notifications in your browser settings**, recheck the site rule and reload. **Not supported — This browser can't receive web push** means this browser lacks the required APIs; use email or in-app delivery instead.
5. Trigger a harmless event that the notification catalog sends by push, then keep the tab and the operating system's notification settings available while testing.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya Profile navigation with the Notifications destination used after changing the browser site permission." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Open Notifications from the signed-in Profile area, then register the browser again after reloading the site. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Changing the Dosya channel switch does not repair a browser denial. Conversely, allowing the site does not turn on a Dosya channel you switched off. Re-enabling creates or refreshes the browser subscription for the signed-in account; an endpoint already owned by another account is rejected.

## Expected result

The site permission reads **Allow**, **Browser push** remains on, and **Enable browser notifications** completes without an error. A later push-eligible event can reach that browser. Push is best effort, so confirm the same event in the Dosya notification inbox if the operating system suppresses its banner.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
