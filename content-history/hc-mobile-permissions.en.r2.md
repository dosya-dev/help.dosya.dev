---
{
  "articleId": "hc-mobile-permissions",
  "locale": "en",
  "revision": 2,
  "title": "Manage mobile photo and notification permissions",
  "summary": "Review operating-system permissions for photos, notifications and background activity, then confirm Dosya can perform only the intended mobile tasks.",
  "category": "account",
  "articleSlug": "mobile-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current manage mobile photo and notification permissions workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-setup",
    "hc-profile-settings"
  ],
  "keywords": [
    "mobile permissions",
    "photo access",
    "notification permission",
    "cloud storage"
  ]
}
---
The operating system controls whether Dosya can read selected photos, notify you and continue eligible background work.

Photo, notification and background permissions are controlled by the operating system. Grant only the access needed for the Dosya feature you intend to use.

<figure class="help-screenshot"><a href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp"><img src="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp" alt="Four-step interface map for manage mobile photo and notification permissions, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/mobile-permissions-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: manage mobile photo and notification permissions

1. Open device Settings for Dosya.
2. Review Photos access and choose the scope needed for backup.
3. Review Notifications and enable only useful alerts.
4. Review background or battery settings supported by the device.
5. Return to Dosya and retry one test.
6. Recheck permission after an OS privacy change.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Return to Dosya and repeat one harmless action. Confirm the prior permission message clears and the app can access only the selected scope.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The manage mobile photo and notification permissions workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Set up mobile backup](/files/mobile-photo-backup)
- [Set notification preferences](/account/notification-preferences)
