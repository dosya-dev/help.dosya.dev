---
{
  "articleId": "hc-notifications-event-groups",
  "locale": "en",
  "revision": 5,
  "title": "Choose which event groups notify you",
  "summary": "Configure all 14 notification groups, two high-volume opt-ins, per-channel defaults, and mandatory events from one account settings page clearly.",
  "category": "account",
  "articleSlug": "notifications-event-groups",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against apps/api/src/lib/notifications/groups.ts, apps/api/src/lib/notifications/group-info.ts, apps/api/src/lib/notifications/prefs.ts, apps/api/src/lib/notifications/logic.ts, apps/api/src/pages/api/me/notifications.ts, and apps/web/src/pages/profile/notifications.tsx. No production event was triggered and no user preference was written.",
  "related": [
    "hc-notification-preferences",
    "hc-security-notifications"
  ],
  "keywords": [
    "notifications event groups",
    "Notification delivery settings",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya organizes roughly 100 granular notification types into 14 switches so related account events share one preference. The page renders the server’s current labels and effective values, and each click saves only the key you changed.

<figure class="help-screenshot"><a href="/screenshots/notifications-event-groups-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-event-groups-help-workflow-2026-10-14.webp" alt="Event-group selection showing a master category, its mandatory note, and nested file-activity opt-ins." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Group switches control related events, while the two high-volume File activity options require their own consent. <a href="/screenshots/notifications-event-groups-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## The 14 groups

- **Security and sign-in**: sign-ins, failed attempts, passwords, email, and two-factor changes.
- **Account**: account or workspace deletion, ownership transfers, and workspace settings.
- **Team and permissions**: invitations, membership, roles, and permission changes.
- **Billing and storage**: payments, plans, renewals, and storage limits.
- **File activity**: uploads, deletion, versions, and locks on files you own.
- **Share links**: views, downloads, and link expiry.
- **File requests**: received uploads and approaching deadlines.
- **Comments**: new comments and replies on your files.
- **Sync and backup**: failures, stopped devices, conflicts, and phone backup.
- **Imports and transfers**: cloud imports, remote downloads, and connection problems.
- **Integrations and API**: API keys, S3 credentials, and webhook health.
- **Support and legal**: ticket replies, copyright, and moderation actions.
- **Product updates**: features, improvements, and tips.
- **System**: scheduled maintenance and service incidents.

All groups default to in-app eligibility. Email initially applies to security, account, team, billing, requests, sync, support, and system. Push initially applies to security, billing, sync, support, and system. The event’s catalog may allow fewer channels, and the three **Delivery channels** master switches can suppress a method globally.

## High-volume options

Two **File activity** types remain off until selected individually:

- **Uploads to your workspace** sends at most one folder summary per hour when other people add files.
- **Daily activity summary** sends one morning message counting the previous day’s renames and moves.

Their sub-switches are disabled while **File activity** is off. Re-enabling the group does not silently enable either nested option.

## Steps

1. Open **Profile > Notifications** and wait until the server-provided groups appear.
2. Read the description and any italic always-on note for the category you intend to change.
3. Toggle that group. The interface updates immediately while a one-key request saves the value.
4. For **File activity**, enable the group before choosing either nested opt-in.
5. Reload the route and confirm the effective values returned by the account API.
6. Generate a harmless event in the selected category and verify only an allowed, enabled channel receives it.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile context for checking the owner of event-group choices before changing category switches." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>These controls are user preferences, independent of workspace plan and member role. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Mandatory and failed saves

**Always on** replaces a switch when every catalog entry in that group is mandatory. When only some are mandatory, the optional entries follow your choice but the page warns that some messages cannot be switched off. Mandatory email is sent even if its group or Email channel is disabled; mandatory push and in-app delivery still respect their channel master switch.

On a rejected write, Dosya restores the prior toggle and displays **Couldn’t save**. Retry only the affected row after connectivity returns. No category change deletes existing inbox records, and every stored preference can be reversed later.

## Expected result

The selected group and nested-option values persist after refresh. New optional activity follows the group, per-type, catalog, and channel gates, while mandatory behavior remains accurately labelled beside the affected category.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Manage email notifications](/account/email-notifications)
- [Review security notifications](/account/security-notifications)
