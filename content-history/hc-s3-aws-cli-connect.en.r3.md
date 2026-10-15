---
{
  "articleId": "hc-s3-aws-cli-connect",
  "locale": "en",
  "revision": 3,
  "title": "Connect the AWS CLI to Dosya S3",
  "summary": "Set the Dosya endpoint, region, and restricted credential, then list the permitted location. Verify that the profile lists only its authorized workspace or prefix.",
  "category": "integrations",
  "articleSlug": "s3-aws-cli-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 aws cli connect",
    "S3-compatible client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Connect the AWS CLI to Dosya S3** in Dosya. The main action is to set the Dosya endpoint, region, and restricted credential, then list the permitted location; the decisive check is whether the profile lists only its authorized workspace or prefix.

<figure class="help-screenshot"><a href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" alt="Four-step workflow map for connect the aws cli to dosya s3, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for connect the aws cli to dosya s3: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify AWS CLI test profile.

## Steps: connect the AWS CLI to Dosya S3

1. Open an S3-compatible client connected to Dosya and confirm the active account and workspace.
2. Locate AWS CLI test profile and verify its name or identifying details.
3. Set the Dosya endpoint, region, and restricted credential, then list the permitted location.
4. Confirm that the profile lists only its authorized workspace or prefix.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Dosya S3-compatible access overview for object clients and scripts." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The profile lists only its authorized workspace or prefix.

## Expected result

The controlled workflow completes and the profile lists only its authorized workspace or prefix.

## Troubleshooting

**The expected control is missing.** Return to an S3-compatible client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
