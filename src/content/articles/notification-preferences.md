---
{
  "articleId": "hc-notification-preferences",
  "locale": "en",
  "revision": 6,
  "title": "Set notification preferences",
  "summary": "Control account-wide notification groups and delivery channels, understand always-on notices, and confirm that each switch saves across your account.",
  "category": "account",
  "articleSlug": "notification-preferences",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/profile/notifications.tsx, apps/api/src/pages/api/me/notifications.ts, apps/api/src/lib/notifications/group-info.ts, apps/api/src/lib/notifications/groups.ts, apps/api/src/lib/notifications/logic.ts, and apps/api/src/lib/notifications/query.ts. Review used local repository evidence; no production preference was changed and no notification was sent.",
  "related": [
    "hc-email-notifications",
    "hc-contact-support"
  ],
  "keywords": [
    "notification settings",
    "alerts",
    "account notifications",
    "cloud storage"
  ]
}
---
Notification settings belong to your Dosya account and cover events from all of its workspaces. They do not require a paid plan or a workspace role. Three channel switches set the broad delivery boundary; fourteen event groups decide which supported events may pass through it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" alt="Account notification workflow showing channel controls, event-group switches, and a saved test event." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the channel row for a delivery method, then narrow the account’s alerts with the event groups below it. <a class="workflow-map-full" href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you change anything

Open `/profile/notifications` while signed in to the account you intend to update. Wait for the group list to load before using a switch. The page has no **Save** button: every switch writes its own account preference immediately.

The **Delivery channels** controls have these effects:

- **In-app** controls whether eligible personal and broadcast entries appear in the bell and notification inbox.
- **Email** is the account-wide email master switch. A mandatory email can still be sent because the delivery service treats those notices as always required.
- **Browser push** gates delivery to registered web browsers. Turning it off does not delete the browser’s existing push subscription.

An event must also be allowed by its catalog entry and event group. **Always on** means the whole group cannot be disabled. The note “Some messages in this group are always sent and cannot be switched off.” means ordinary events obey the switch while mandatory entries bypass the group choice. Channel rules still apply to mandatory in-app and push messages; mandatory email is the documented exception.

## Steps

1. Go to **Profile > Notifications** and check the account identity in the profile area.
2. Under **Delivery channels**, leave each method on only if you want eligible events delivered there.
3. Review the event groups. Switch off a group when you do not want its optional events.
4. If **File activity** is enabled, set its nested **Uploads to your workspace** and **Daily activity summary** options separately; they ship off until you opt in.
5. After each click, pause for the request to finish. A successful write leaves the switch where you placed it.
6. Reload the page and confirm the chosen states return from the server.
7. Create one harmless event covered by an enabled group, such as a test comment on a non-sensitive file, and check only the channels that event supports.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity panel used to verify which account owns the notification choices." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in identity before editing preferences that follow the account across its workspaces. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If a switch moves back

The interface updates optimistically. When the server refuses a group write, the switch returns to its previous value and shows **Couldn’t save** with either the server error or “Your notification preference could not be saved.” A failed channel change uses the same title with “Your channel preference could not be saved.” Restore connectivity, retry that single switch, and reload to confirm the server value.

Changing these settings neither deletes inbox history nor revokes browser permission. Every choice is reversible from the same page.

## Expected result

Reloading **Profile > Notifications** shows the saved channel and group states. A controlled eligible event reaches only its permitted, enabled methods, while the page continues to identify any mandatory messages that cannot be muted at group level.

## Related guides

- [Manage email notifications](/account/email-notifications)
- [Enable browser push notifications](/account/notifications-enable-browser-push)
- [Contact support](/troubleshooting/contact-support)
