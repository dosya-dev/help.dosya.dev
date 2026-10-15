---
{
  "articleId": "hc-notification-preferences",
  "locale": "en",
  "revision": 3,
  "title": "Set notification preferences",
  "summary": "Choose which account and workspace events should notify you, save the preference, and verify one controlled event.",
  "category": "account",
  "articleSlug": "notification-preferences",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current set notification preferences workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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
Notification preferences control which supported events reach configured channels; device permission can still block delivery.

Notification preferences determine which supported events reach each channel. Keep alerts that prompt action and disable noise only after confirming the event is covered elsewhere.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" alt="Four-step interface map for set notification preferences, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-light-href="/screenshots/notification-preferences-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/notification-preferences-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: set notification preferences

1. Open Profile → Notifications.
2. Review each available event and channel.
3. Enable only alerts that need action.
4. Save the preference.
5. Trigger one harmless test event.
6. Confirm delivery and return to adjust noisy choices.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Trigger one harmless event after saving. Confirm the correct account receives it through the selected channel, then reload the preferences to verify the choice persisted.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The set notification preferences workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Manage email notifications](/account/email-notifications)
- [Contact support](/troubleshooting/contact-support)
