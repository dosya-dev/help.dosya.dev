---
{
  "articleId": "hc-notifications-verify-email-delivery",
  "locale": "en",
  "revision": 5,
  "title": "Verify email notification delivery",
  "summary": "Check Dosya's Email channel, event rules, inbox placement, and mandatory notices to distinguish an opt-out from a delivery failure or provider delay.",
  "category": "account",
  "articleSlug": "notifications-verify-email-delivery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/notifications.tsx, apps/api/src/lib/notifications/notify.ts, and apps/api/src/lib/email/notification-template.ts. No production email was sent.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications verify email delivery",
    "Notification delivery diagnostics",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya has no **Send test email** control. It sends email only when the event's catalog entry includes email and the account permits that channel. Some security and account notices are mandatory: they are emailed even when the **Email** channel or their group is off, and their footer says the notice cannot be unsubscribed from.

<figure class="help-screenshot"><a href="/screenshots/notifications-verify-email-delivery-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-verify-email-delivery-help-workflow-2026-10-14.webp" alt="Email-delivery check from the Email channel and event-group switches through the Dosya inbox and recipient mail search." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The mail check pairs Delivery channels and group eligibility with a safe event, its in-app row, and the current account inbox. <a href="/screenshots/notifications-verify-email-delivery-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Notifications → Delivery channels** and verify that **Email** is on for ordinary mail.
2. Find the event's group below the channel switches. Turn that group on; a nested option is effective only while its parent group is enabled. Groups marked **Always on** cannot be disabled, and a note identifies groups containing some mandatory events.
3. Generate one safe event whose documented channels include email. Do not use a browser-push-only or in-app-only event as an email test.
4. Check the inbox for the address shown in **Profile → Identity**, then inspect spam, junk, promotions, quarantine, and organization mail rules. Catalog mail uses the event-specific subject and a Dosya notification layout.
5. Compare the Dosya in-app notice with the email. Each transport is attempted independently: an inbox row can exist even if the email provider rejects or delays the message.
6. If a mandatory security notice is absent from email but present in Dosya, record the event time, account address, and notification title before contacting support.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya Identity page showing the account email address that should receive an enabled notification message." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use the email shown under Identity when searching inbox, spam, quarantine, and organization mail rules for the event subject. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Switches save immediately. A failed save restores the previous position and shows **Couldn't save** with either the server error or **Your channel preference could not be saved.**

## Expected result

A mail-enabled event reaches the current account email when its ordinary channel and group gates are on. Mandatory security/account mail can arrive regardless of those preferences and has no unsubscribe link. Dosya does not expose a delivery receipt to the recipient, so the inbox comparison and mail-provider search are the practical checks.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
