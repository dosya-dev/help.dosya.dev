---
{
  "articleId": "hc-workspace-storage-allocation",
  "locale": "en",
  "revision": 3,
  "title": "Review workspace storage allocation",
  "summary": "Compare account allowance, workspace allocation, workspace cap and current usage before changing limits or moving large data.",
  "category": "workspaces",
  "articleSlug": "storage-allocation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review workspace storage allocation workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-workspace-policies",
    "hc-storage-usage",
    "hc-plan-upgrade-storage"
  ],
  "keywords": [
    "workspace storage",
    "storage allocation",
    "workspace cap",
    "cloud storage"
  ]
}
---
A workspace can have an allocation or hard cap below the account total. The smallest applicable boundary controls new uploads.

Account allowance, workspace allocation, hard cap and member quota can each block an upload. Compare all applicable limits before changing one.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" alt="Four-step interface map for review workspace storage allocation, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review workspace storage allocation

1. Open Billing and record account total.
2. Open the workspace dashboard and record used and available storage.
3. Review Settings → Hard limits.
4. Compare allocation, cap and per-member limit.
5. Test with a small upload.
6. Adjust only the boundary you are authorized to manage.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace security settings showing sharing and access controls for the active workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Workspace controls apply to the active workspace and combine with roles. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Upload a small test file and confirm usage rises in the intended workspace. Change only the limit you are authorized to manage.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The review workspace storage allocation workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Set workspace policies](/workspaces/policies)
- [Understand storage usage](/uploading/storage-usage)
- [Add storage](/account/upgrade-storage)
