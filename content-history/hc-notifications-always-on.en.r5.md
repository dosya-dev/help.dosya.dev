---
{
  "articleId": "hc-notifications-always-on",
  "locale": "en",
  "revision": 5,
  "title": "Understand always-on Dosya notifications",
  "summary": "Identify mandatory notification types, understand which group and channel switches they bypass, and verify why required email can still arrive.",
  "category": "account",
  "articleSlug": "notifications-always-on",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/api/src/lib/notifications/logic.ts, apps/api/src/lib/notifications/group-info.ts, apps/api/src/lib/notifications/catalog.ts, apps/api/src/lib/notifications/prefs.ts, apps/mobile/app/notification-settings.tsx, and notification logic tests. No production preference was changed.",
  "related": [
    "hc-notification-preferences",
    "hc-security-notifications"
  ],
  "keywords": [
    "notifications always on",
    "Notification delivery settings",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Some notification catalog entries are mandatory because Dosya must preserve evidence that critical account, security, billing, or moderation information was sent. The settings API identifies groups containing these entries.

<figure class="help-screenshot"><a href="/screenshots/notifications-always-on-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-always-on-help-workflow-2026-10-14.webp" alt="Notification settings workflow for recognizing fully or partly mandatory groups and their channel behavior." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Always-on notes identify messages that can bypass a group mute, including required email. <a href="/screenshots/notifications-always-on-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings → Notifications** on mobile or **Profile → Notifications** on web.
2. Read each group’s note. A group made entirely of mandatory entries shows **Always on** instead of a switch. A mixed group says **Some messages in this group are always sent and cannot be switched off.**
3. Adjust optional groups or channels separately. A mandatory entry bypasses its group switch.
4. Keep a valid email address on the account for required mail. Mandatory email ignores the Email channel switch; it covers cases such as password changes, payment failure, scheduled account deletion, or content removal.
5. For push and in-app delivery, channel switches still apply to mandatory entries. Turning those transports off can suppress their copy there, while required email remains deliverable.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya account profile reference for notification settings and required-message controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Always-on status comes from the server catalog for the signed-in account. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The “always on” rule attaches to notification types, not every message in a named group. Team, sharing, and integrations can contain mandatory items alongside optional ones, so a disabled group may still produce only its required entries. The server returns this profile dynamically; clients do not maintain their own hard-coded list.

## Expected result

Settings accurately distinguishes fully mandatory, partly mandatory, and optional groups. Optional traffic follows your group/channel choices, while required email may arrive regardless of the Email master switch.

## Troubleshooting

**A message arrived from a muted group.** Check its subject and the group note. It may be a mandatory type that intentionally skips the group gate.

**Mandatory push did not arrive.** Mandatory does not override Push being off, OS denial, or an unregistered device. Read the inbox/email and repair device registration separately.

**There is no switch beside a group.** **Always on** is the control state for an all-mandatory group; it is not a loading failure.

## Related guides

- [Configure optional topics around required notices](/account/notification-preferences)
- [Review security notifications](/account/security-notifications)
