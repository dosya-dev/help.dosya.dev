---
{
  "articleId": "hc-s3-upload-object",
  "locale": "en",
  "revision": 4,
  "title": "Upload an object with an S3 client",
  "summary": "Copy the file through the Dosya endpoint and record the returned status. Verify that the object appears once with the expected size.",
  "category": "integrations",
  "articleSlug": "s3-upload-object",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 upload object",
    "S3-compatible client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Upload an object with an S3 client** in Dosya. The main action is to copy the file through the Dosya endpoint and record the returned status; the decisive check is whether the object appears once with the expected size.

<figure class="help-screenshot"><a href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" alt="Workflow for “Upload an object with an S3 client”: copy the file through the Dosya endpoint and record the returned status; the object appears once with the expected size." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload an object with an S3 client”: copy the file through the Dosya endpoint and record the returned status; the object appears once with the expected size. <a href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya and locate the small test file and permitted prefix.
- Confirm the active account and workspace, then identify small test file and permitted prefix.

## Steps: upload an object with an S3 client

1. Confirm the account and workspace in an S3-compatible client connected to Dosya when reviewing the small test file and permitted prefix.
2. Locate small test file and permitted prefix and verify its name or identifying details.
3. Copy the file through the Dosya endpoint and record the returned status.
4. Confirm that the object appears once with the expected size.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Upload an object with an S3 client”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload an object with an S3 client”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode.

## Verify the result

After completing the steps, check the expected result: The object appears once with the expected size.

## Expected result

The controlled workflow completes and the object appears once with the expected size.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the small test file and permitted prefix, check the active workspace, your role and the client version.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
