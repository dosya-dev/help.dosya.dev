---
{"articleId":"hc-workspace-storage-allocation","locale":"en","revision":1,"title":"Review workspace storage allocation","summary":"Compare account allowance, workspace allocation, workspace cap and current usage before changing limits or moving large data.","category":"workspaces","articleSlug":"storage-allocation","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current review workspace storage allocation workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-policies","hc-storage-usage","hc-plan-upgrade-storage"],"keywords":["workspace storage","storage allocation","workspace cap"]}
---
A workspace can have an allocation or hard cap below the account total. The smallest applicable boundary controls new uploads.

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

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Understand storage usage](/uploading/storage-usage)
- [Add storage](/account/upgrade-storage)
