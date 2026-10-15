---
{
  "articleId": "hc-email-notifications",
  "locale": "en",
  "revision": 2,
  "title": "Manage email notifications",
  "summary": "Review the verified account email, enable supported email alerts, test delivery and keep sensitive file details out of forwarded messages.",
  "category": "account",
  "articleSlug": "email-notifications",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current manage email notifications workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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
Email delivery depends on the account address, preference, event and mail filtering. A notification is not a substitute for checking current access in Dosya.

Email alerts are delivered to the verified account address and can be affected by filtering or forwarding. Open Dosya directly before acting on sensitive events.

<figure class="help-screenshot"><a href="/screenshots/email-notifications-workflow-map-2026-10-14.webp"><img src="/screenshots/email-notifications-workflow-map-2026-10-14.webp" alt="Four-step interface map for manage email notifications, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/email-notifications-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: manage email notifications

1. Confirm the profile email is correct and verified.
2. Open notification preferences.
3. Enable the required email event.
4. Save and trigger one controlled event.
5. Check inbox and filtered folders.
6. Open Dosya directly to act on the event.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Generate one controlled notification, check inbox and filtered folders, and verify the message corresponds to the expected account event.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The manage email notifications workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Set notification preferences](/account/notification-preferences)
- [Update profile settings](/account/profile-settings)
