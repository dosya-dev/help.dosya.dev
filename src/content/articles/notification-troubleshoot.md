---
{
  "articleId": "hc-notification-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot missing Dosya notifications",
  "summary": "Trace a missing Dosya alert through event eligibility, group and channel settings, browser permission, email delivery, and the in-app inbox.",
  "category": "troubleshooting",
  "articleSlug": "notifications",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/profile/notifications.tsx; apps/web/src/lib/web-push.ts; apps/web/src/pages/notifications.tsx; apps/api/src/pages/api/me/notifications.ts; apps/api/src/pages/api/notifications/index.ts; apps/api/src/lib/notifications/groups.ts; apps/api/src/lib/notifications/group-info.ts; apps/api/src/lib/notifications/logic.ts; apps/api/src/lib/notifications/query.ts. No live email or push delivery was performed. Local repository evidence only; no production request was made.",
  "related": [
    "hc-notification-preferences",
    "hc-email-notifications",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "Dosya notification missing",
    "browser push not working",
    "email alert not received",
    "notification inbox empty"
  ]
}
---
A notification can disappear at four different points: Dosya may not create that event for your account, its group may be muted, its delivery channel may be off, or the browser/email provider may block the final message. Diagnose one expected event and one channel at a time so changing a second setting does not hide the original cause.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notifications-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/notifications-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/notifications-workflow-map-2026-10-14.webp" alt="Diagnostic path for one missing Dosya alert: confirm the event, inspect its group and channel, check the inbox, then test browser or email delivery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Follow the missing alert from its event rule to the chosen delivery channel; a message absent from the inbox has a different cause from one present there but missing in email or push. <a class="workflow-map-full" href="/screenshots/notifications-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notifications-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notifications-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Write down the event, affected workspace, approximate time and intended channel. Check that you are signed in to the account that should receive it. Workspace notifications follow the event's recipient rules; observing an action does not necessarily make every member a recipient.

Open **Notifications** from the app and look around the event time. The first page contains up to 30 items; **Load more** appends older pages, with a server maximum of 50 items per request. If the item is in this inbox, Dosya created it and the remaining problem is specific to email or push. If it is absent, continue with the group and in-app settings before changing browser permissions.

## Check the saved Dosya controls

1. Open **Profile → Notifications**.
2. Under **Delivery channels**, confirm the required master switch: **In-app**, **Email**, or **Browser push**.
3. Find the event's group, such as **Security and sign-in**, **File activity**, **Sync and backup**, or **Integrations and API**. Turn on only the group you are testing.
4. If the group contains a child switch, inspect it separately. **Uploads to your workspace** and **Daily activity summary** are off by default even when **File activity** is enabled.
5. Leave the page, reopen **Profile → Notifications**, and verify the switch retained its value.

The page saves each switch immediately. A rejected write returns the control to its prior value and shows **Couldn't save** with either **Your notification preference could not be saved.** or **Your channel preference could not be saved.** Restore connectivity, change only that switch again, then reopen the page. Repeated clicking does not make an unsaved preference persistent.

Some groups show **Always on** or the note **Some messages in this group are always sent and cannot be switched off.** Mandatory messages bypass the group preference. Mandatory email also bypasses the Email channel switch, while mandatory in-app and push messages still respect their channel switches. Do not use a security message as a harmless delivery test.

## When browser push is missing

Browser push requires all of these conditions: the event permits push, its effective preference is on, **Browser push** is enabled, the browser granted notification permission, and the current browser has a registered push subscription.

Select **Enable browser notifications**. The expected success is **Browser notifications enabled**. Use the displayed result to choose the next action:

- **Permission denied — Allow notifications in your browser settings** means the site-level browser permission is blocked. Allow notifications for the Dosya app origin in browser settings, reload Dosya, and select the button again.
- **Not supported — This browser can't receive web push** means this browser context lacks the service-worker or PushManager support Dosya needs. Test a supported, non-private browser profile.
- A successful registration applies to that browser profile. Another browser or device needs its own permission and subscription.

An operating-system focus mode or notification policy can still hide a push banner after the browser accepts it. Check the browser's notification permission first, then the operating-system notification list and focus settings.

## When email is missing

Confirm the account email under **Profile → Identity** and make sure it is the address you are checking. Search all mail, spam, quarantine and organization filtering for the event time and Dosya sender. Mail forwarding and corporate gateways can delay or reject a message after Dosya hands it off.

If the same event appears in the in-app inbox but no email arrives, do not repeatedly recreate the underlying action. Preserve the inbox time and title. For optional mail, recheck the group plus **Email** channel. For an always-on email, preference changes are not the explanation; investigate the destination address and mail filtering.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya Profile Identity page used to confirm which account email should receive notification mail." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in identity before searching another mailbox or changing account-level notification controls. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Use a safe event of the same type when one is naturally available. Record its time, then confirm it appears only in the channels currently enabled for that event. Reopen the preferences page after the test so a temporary visual switch is not mistaken for a server-confirmed setting.

If the alert remains absent, open a private support ticket with the event name, workspace, account email, local time and timezone, expected channel, browser/app version and whether the item appears in the in-app inbox. Exclude passwords, two-factor codes, API keys, private links and confidential file content.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Manage email notifications](/account/email-notifications)
- [Manage mobile permissions](/account/mobile-permissions)
