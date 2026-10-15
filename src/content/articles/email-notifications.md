---
{
  "articleId": "hc-email-notifications",
  "locale": "en",
  "revision": 6,
  "title": "Manage email notifications",
  "summary": "Set the Email channel and event groups, learn which notices remain mandatory, and diagnose delivery without exposing file details or secrets.",
  "category": "account",
  "articleSlug": "email-notifications",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 using apps/web/src/pages/profile/notifications.tsx, apps/api/src/lib/notifications/groups.ts, apps/api/src/lib/notifications/logic.ts, apps/api/src/lib/notifications/notify.ts, and apps/api/src/lib/email/notification-template.ts. No live email was generated, no account setting was edited, and production services were not contacted.",
  "related": [
    "hc-notification-preferences",
    "hc-profile-settings"
  ],
  "keywords": [
    "email notifications",
    "notification email",
    "missing alert",
    "cloud storage"
  ]
}
---
Dosya notification email uses the signed-in account address. Delivery is decided by the event’s supported channels, its event-group preference, and the **Email** master switch. Email is best effort, so the in-app inbox remains the authoritative place to inspect current account activity and access.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/email-notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/email-notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/email-notifications-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/email-notifications-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/email-notifications-workflow-map-2026-10-14.webp" alt="Email alert setup from the account address through channel and event eligibility to inbox verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Check the account address first, then align the Email channel and the event group before testing delivery. <a class="workflow-map-full" href="/screenshots/email-notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/email-notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/email-notifications-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What email can send

For a new account with no stored overrides, email delivery defaults on for **Security and sign-in**, **Account**, **Team and permissions**, **Billing and storage**, **File requests**, **Sync and backup**, **Support and legal**, and **System**. It defaults off for **File activity**, **Share links**, **Comments**, **Imports and transfers**, **Integrations and API**, and **Product updates**. The event catalog is still a ceiling: enabling a group cannot add email to an event that has no email version.

The settings page saves one switch at a time. There is no send-test button. Explicitly changing a group stores an account override, while the **Email** row remains a separate master gate.

Some security, account, billing, legal, and service messages are mandatory. Mandatory mail ignores both the group preference and the Email master switch. Its footer says it was sent regardless of notification settings and omits the unsubscribe link. Ordinary notification messages include a settings link back to Dosya when an unsubscribe destination is available.

## Steps

1. Open **Profile** and verify the account email shown there. If it is wrong, correct the account identity before testing alerts.
2. Visit **Profile > Notifications** and turn on **Email** under **Delivery channels**.
3. Enable the group for the event you need. Read any always-on note beside that group.
4. Trigger a low-risk supported event once. Avoid putting confidential filenames or personal information in a test comment or request.
5. Check the primary inbox, spam or junk, rules, quarantines, and any forwarding destination for the account address.
6. Match the subject and action to the event in Dosya. Open the web app directly when the message concerns permissions, billing, or a shared file.
7. Reload notification settings to make sure the channel and group values persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile identity details for confirming the destination address of Dosya account email." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The profile address identifies the mailbox used for catalog-driven account notifications. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## When mail does not arrive

If the Email switch immediately reverts, Dosya shows **Couldn’t save** and “Your channel preference could not be saved.” Retry after restoring connectivity. If the setting persists but mail is absent, verify that the specific event supports email, its group is enabled, and mailbox filtering did not divert it. A successful in-app entry does not prove the independent email transport succeeded.

Do not forward a sensitive notification as a substitute for sharing through Dosya. The current file, role, link, or billing state can change after a message is sent.

## Expected result

The selected Email and event-group controls survive a reload, and a supported controlled event arrives at the account mailbox with content and an action matching the corresponding Dosya activity. Mandatory notices remain deliverable even when optional email is muted.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Open the Dosya notification inbox](/account/notifications-open-inbox)
- [Update profile settings](/account/profile-settings)
