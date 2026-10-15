---
{
  "articleId": "hc-s3-aws-cli-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect the AWS CLI to Dosya S3",
  "summary": "Set the Dosya endpoint, region, and restricted credential, then list the permitted location. Verify that the profile lists only its authorized workspace or prefix.",
  "category": "integrations",
  "articleSlug": "s3-aws-cli-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" alt="Workflow for “Connect the AWS CLI to Dosya S3”: set the Dosya endpoint, region, and restricted credential, then list the permitted location; the profile lists only its authorized workspace or prefix." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Connect the AWS CLI to Dosya S3”: set the Dosya endpoint, region, and restricted credential, then list the permitted location; the profile lists only its authorized workspace or prefix. <a href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya and locate the AWS CLI test profile.
- Confirm the active account and workspace, then identify AWS CLI test profile.

## Steps: connect the AWS CLI to Dosya S3

1. Confirm the account and workspace in an S3-compatible client connected to Dosya when reviewing the AWS CLI test profile.
2. Locate AWS CLI test profile and verify its name or identifying details.
3. Set the Dosya endpoint, region, and restricted credential, then list the permitted location.
4. Confirm that the profile lists only its authorized workspace or prefix.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Connect the AWS CLI to Dosya S3”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect the AWS CLI to Dosya S3”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode.

## Verify the result

After completing the steps, check the expected result: The profile lists only its authorized workspace or prefix.

## Expected result

The controlled workflow completes and the profile lists only its authorized workspace or prefix.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the AWS CLI test profile, check the active workspace, your role and the client version.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
