---
{
  "articleId": "hc-notifications-enable-browser-push",
  "locale": "en",
  "revision": 5,
  "title": "Enable browser push notifications",
  "summary": "Grant browser permission, register a secure web-push subscription, align Dosya channel settings, and diagnose denied or unsupported states safely.",
  "category": "account",
  "articleSlug": "notifications-enable-browser-push",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 using apps/web/src/pages/profile/notifications.tsx, apps/web/src/lib/web-push.ts, apps/web/public/sw.js, apps/api/src/pages/api/notifications/push/subscribe.ts, apps/api/src/lib/notifications/push.ts, and apps/api/src/lib/notifications/logic.ts. Browser permission was not requested and no production push subscription or delivery was created.",
  "related": [
    "hc-notification-preferences",
    "hc-security-notifications"
  ],
  "keywords": [
    "notifications enable browser push",
    "Notification delivery settings",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Browser push needs two independent approvals: the browser must grant notification permission and Dosya must register that browser to the signed-in account. Delivery then requires the **Browser push** master switch, an eligible event group, and a catalog entry that supports push.

<figure class="help-screenshot"><a href="/screenshots/notifications-enable-browser-push-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-enable-browser-push-help-workflow-2026-10-14.webp" alt="Browser-push setup from feature support and permission through Dosya subscription registration and event delivery." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Permission alone is insufficient; registration and the Dosya delivery gates must also remain active. <a href="/screenshots/notifications-enable-browser-push-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements

Use the signed-in web app in a browser that exposes both a service worker and **PushManager**. Service workers require a secure context in normal browser operation. The account plan and workspace role do not affect registration.

If the browser has already blocked notifications for Dosya, its permission prompt may not reappear. Change the site permission in browser settings first, then return to the web app.

## Steps

1. Open **Profile > Notifications** in the browser and account that should receive alerts.
2. Under **Delivery channels**, turn on **Browser push**. This switch controls delivery but does not itself create a browser subscription.
3. Select **Enable browser notifications**.
4. In the browser prompt, choose **Allow**.
5. Wait for Dosya to obtain its application key, create a user-visible push subscription, and register the endpoint to your account.
6. Confirm the success toast **Browser notifications enabled**.
7. Keep the required event group enabled and trigger one harmless event whose catalog entry supports push.

Registration stores the endpoint, encryption keys, and up to the first 80 characters of the browser user-agent as the device name. Re-registering the same endpoint for the same account refreshes its keys and clears a prior revocation. An endpoint already owned by a different account is rejected rather than reassigned.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya account identity reference for ensuring a browser push endpoint is registered to the intended user." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Push endpoints are user-scoped, so sign out of an unintended account before granting permission. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permission and delivery failures

- **Permission denied** with “Allow notifications in your browser settings” means the permission result was not `granted`.
- **Not supported** with “This browser can’t receive web push” means service-worker or PushManager support is absent.
- A server without a configured public push key returns **Push not configured**. Registration can also fail for missing fields, an unsupported endpoint host, or an endpoint tied to another account.

Dosya submits web-push messages with a 60-second time-to-live. Delivery is best effort; closing the app is supported, but a push service or offline device can miss that short window. A 404 or 410 response from a push provider causes the stored subscription to be revoked automatically, after which enabling again creates or refreshes the live registration.

Selecting an operating-system notification closes it, focuses the first existing Dosya window and navigates to the event path, or opens a new window. When no path is supplied, it goes to `/notifications`.

Turning off **Browser push** stops eligible delivery without revoking browser permission or unsubscribing the endpoint. To remove site permission, use the browser’s settings; this action is reversible by granting it again.

## Expected result

The browser grants notification access, Dosya confirms registration, and a push-eligible controlled event produces an operating-system notification for this account. Selecting it opens the stored destination or the notification inbox fallback.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Choose which event groups notify you](/account/notifications-event-groups)
- [Review security notifications](/account/security-notifications)
