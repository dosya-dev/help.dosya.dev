---
{
  "articleId": "hc-share-delivery-audit",
  "locale": "en",
  "revision": 3,
  "title": "Audit a sensitive file delivery",
  "summary": "Review link configuration, recipient restrictions, access activity, download result and revocation state for one important delivery.",
  "category": "sharing",
  "articleSlug": "audit-delivery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current audit a sensitive file delivery workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-link-activity",
    "hc-named-recipients",
    "hc-revoke-link"
  ],
  "keywords": [
    "delivery audit",
    "sensitive share",
    "link access review",
    "file sharing"
  ]
}
---
A delivery audit joins configuration and observed activity. It cannot recall copies already downloaded.

A delivery review combines the link configuration, recorded activity and final revocation state. Analytics provide useful evidence but do not prove a person’s identity by themselves.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" alt="Four-step interface map for audit a sensitive file delivery, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audit-delivery-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audit-delivery-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: audit a sensitive file delivery

1. Identify the exact share URL or link row.
2. Review password, recipient, expiry and download settings.
3. Open link activity and analytics.
4. Compare expected recipient events with recorded activity.
5. Revoke when the delivery should end.
6. Record the nonsecret outcome in the appropriate private system.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya sharing activity overview with link status and recipient activity used to review a delivery." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review the exact delivery and its current status before changing access. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Match the exact link, expected recipient events and download policy. Revoke the link when delivery is complete and record only nonsecret evidence.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The audit a sensitive file delivery workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Read link activity](/sharing/link-activity)
- [Use named recipients](/sharing/named-recipients)
- [Revoke a link](/sharing/revoke-link)
