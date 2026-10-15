---
{
  "articleId": "hc-notifications-narrow-event-groups",
  "locale": "en",
  "revision": 5,
  "title": "Narrow optional notification event groups",
  "summary": "Narrow all 14 notification groups and two opt-in file alerts while preserving mandatory messages and understanding their per-channel delivery defaults.",
  "category": "account",
  "articleSlug": "notifications-narrow-event-groups",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 using apps/api/src/lib/notifications/groups.ts, apps/api/src/lib/notifications/group-info.ts, apps/api/src/lib/notifications/prefs.ts, apps/mobile/app/notification-settings.tsx, and group preference tests. Production preferences remained unchanged.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications narrow event groups",
    "Notification delivery diagnostics",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Dosya describes **14** event groups from the server so mobile, web, and desktop present the same choices: Security and sign-in, Account, Team and permissions, Billing and storage, File activity, Share links, File requests, Comments, Sync and backup, Imports and transfers, Integrations and API, Support and legal, Product updates, and System.

<figure class="help-screenshot"><a href="/screenshots/notifications-narrow-event-groups-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-narrow-event-groups-help-workflow-2026-10-14.webp" alt="Notification group workflow for 14 server-defined topics, mandatory exceptions, and two nested File activity opt-ins." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Parent groups mute their optional children while required catalog entries remain disclosed. <a href="/screenshots/notifications-narrow-event-groups-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open notification settings and scroll to **What you hear about**.
2. Turn off the broad group that produces unwanted optional traffic. A disabled group is the master mute for its nested optional switches.
3. In **File activity**, configure the narrower choices **Uploads to your workspace** and **Daily activity summary** if shown. Both are off by default and must be opted into separately.
4. Read any always-on note before assuming the group is silent. Mandatory entries bypass the group switch.
5. Reopen settings to confirm the server’s effective value, then test one event that belongs to the changed group.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile notification area where server-defined event groups and opt-in file alerts appear." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Read group descriptions and mandatory notes before muting optional topics. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Uploads to your workspace** batches one summary per folder per hour when other people add files. **Daily activity summary** counts yesterday’s renames and moves each morning. Turning File activity off suppresses these even if their sub-switch is on; turning the group back on does not automatically opt them in.

Stored group choices override per-channel defaults for ordinary types. Channel master switches still decide whether an allowed event uses in-app, email, or push. Mandatory email remains the stated exception.

## Expected result

Only optional events in the muted group stop. Other groups retain their values, nested file opt-ins keep honest states, and mandatory notices remain identified by their server-provided note.

## Troubleshooting

**A sub-switch is disabled.** Its parent group is off. Enable the group before changing the narrower option.

**Uploads still do not notify after enabling File activity.** Turn on **Uploads to your workspace** itself; the group’s on-state does not override that type’s off-by-default rule.

**A required notice still arrived.** That is expected for a mandatory catalog entry. Use the group note and delivery-channel guide to understand which transport can be disabled.

## Related guides

- [Tune individual notification topics](/account/notification-preferences)
- [Check muted group delivery](/troubleshooting/notifications)
