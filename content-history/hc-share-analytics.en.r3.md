---
{
  "articleId": "hc-share-analytics",
  "locale": "en",
  "revision": 3,
  "title": "Read sharing-link analytics",
  "summary": "Open analytics for the exact link, interpret views and downloads in context, and avoid treating access telemetry as proof of identity.",
  "category": "sharing",
  "articleSlug": "analytics",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current read sharing-link analytics workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-link-activity",
    "hc-share-delivery-audit",
    "hc-revoke-link"
  ],
  "keywords": [
    "share analytics",
    "link views",
    "download analytics",
    "file sharing"
  ]
}
---
Sharing analytics describe recorded activity for a delivery. They support review but do not prove who physically used a device or forwarded link.

Views and downloads describe link activity, not verified human identity unless the link used a supported recipient-verification control. Interpret counts with the link policy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/analytics-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/analytics-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/analytics-workflow-map-2026-10-14.webp" alt="Four-step interface map for read sharing-link analytics, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-light-href="/screenshots/analytics-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/analytics-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: read sharing-link analytics

1. Open Shared and choose the exact link.
2. Open its analytics or activity view.
3. Confirm date range and current status.
4. Compare views, downloads and recipient information available.
5. Review unusual activity with expiry and access settings.
6. Revoke or replace the link when risk warrants it.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya sharing activity overview with link status and recipient activity used to review a delivery." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Review the exact delivery and its current status before changing access. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Match the analytics date range and link status, review expected events and revoke the link if activity or continued access is no longer acceptable.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The read sharing-link analytics workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
- [Audit a delivery](/sharing/audit-delivery)
- [Revoke a link](/sharing/revoke-link)
