---
{
  "articleId": "hc-s3-connect",
  "locale": "en",
  "revision": 3,
  "title": "Connect an S3-compatible client",
  "summary": "Configure the current Dosya S3 endpoint, workspace addressing and restricted credential, then list and transfer one sample object.",
  "category": "integrations",
  "articleSlug": "s3-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current connect an s3-compatible client workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-api-key-protocols",
    "hc-api-key-folder"
  ],
  "keywords": [
    "S3 client",
    "S3 endpoint",
    "S3 compatible",
    "cloud storage"
  ]
}
---
Dosya provides an S3-compatible gateway for supported object operations; compatibility does not imply every AWS service feature.

S3-compatible clients need the current Dosya endpoint, workspace addressing and an S3-enabled credential. Generic cloud-provider defaults can produce signature or path errors.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect an s3-compatible client, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: connect an s3-compatible client

1. Open Integrations → S3.
2. Copy the current endpoint and workspace or bucket value.
3. Create an S3-enabled restricted key.
4. Configure a new profile in the client.
5. List the workspace and upload one sample.
6. Download and compare the sample, then revoke the test key.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

List the intended workspace, upload one harmless object, download it to a new path and compare its name and size before saving the profile for broader use.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The connect an s3-compatible client workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Limit protocol surfaces](/developers/api-key-protocols)
- [Restrict a key to a folder](/developers/api-key-folder-access)
