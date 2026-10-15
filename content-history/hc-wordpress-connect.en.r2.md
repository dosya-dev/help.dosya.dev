---
{
  "articleId": "hc-wordpress-connect",
  "locale": "en",
  "revision": 2,
  "title": "Connect a WordPress site",
  "summary": "Authorize the supported WordPress connection, verify the site identity and begin a controlled backup without sharing administrator credentials.",
  "category": "integrations",
  "articleSlug": "wordpress-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect a wordpress site workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cloud-import-connect",
    "hc-contact-support"
  ],
  "keywords": [
    "WordPress backup",
    "connect WordPress",
    "WordPress integration",
    "file upload"
  ]
}
---
Connect WordPress through the supported site flow and verify the exact site before enabling backup activity.

Use the supported authorization flow instead of sharing a WordPress administrator password. Confirm the site identity and destination before the first backup.

<figure class="help-screenshot"><a href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp"><img src="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect a wordpress site, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect a wordpress site

1. Open Integrations → WordPress.
2. Start Connect site and follow the supported authorization.
3. Verify the site URL and displayed status.
4. Review backup choices and destination.
5. Run one controlled initial backup.
6. Confirm the resulting files before scheduling more work.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run one controlled backup and open representative output files in the intended Dosya workspace before enabling a recurring schedule.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The connect a wordpress site workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Contact support](/troubleshooting/contact-support)
