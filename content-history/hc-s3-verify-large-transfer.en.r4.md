---
{
  "articleId": "hc-s3-verify-large-transfer",
  "locale": "en",
  "revision": 4,
  "title": "Verify a large S3 transfer safely",
  "summary": "Record source size, upload with the client supported transfer mode, wait for completion, and compare returned and downloaded details. Verify that the complete object is stored once with the expected byte size.",
  "category": "integrations",
  "articleSlug": "s3-verify-large-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "s3 verify large transfer",
    "S3-compatible connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Verify a large S3 transfer safely** in Dosya. The main action is to record source size, upload with the client supported transfer mode, wait for completion, and compare returned and downloaded details; the decisive check is whether the complete object is stored once with the expected byte size.

<figure class="help-screenshot"><a href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" alt="Workflow for “Verify a large S3 transfer safely”: record source size, upload with the client supported transfer mode, wait for completion, and compare returned and downloaded details; the complete object is stored once with the expected byte size." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify a large S3 transfer safely”: record source size, upload with the client supported transfer mode, wait for completion, and compare returned and downloaded details; the complete object is stored once with the expected byte size. <a href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya and locate the disposable large object and supported client.
- Confirm the active account and workspace, then identify disposable large object and supported client.

## Steps: verify a large S3 transfer safely

1. Confirm the account and workspace in an S3-compatible client connected to Dosya when reviewing the disposable large object and supported client.
2. Locate disposable large object and supported client and verify its name or identifying details.
3. Record source size, upload with the client supported transfer mode, wait for completion, and compare returned and downloaded details.
4. Confirm that the complete object is stored once with the expected byte size.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Verify a large S3 transfer safely”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a large S3 transfer safely”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Validate with a restricted key and disposable prefix before transferring important objects.

## Verify the result

After completing the steps, check the expected result: The complete object is stored once with the expected byte size.

## Expected result

The controlled workflow completes and the complete object is stored once with the expected byte size.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the disposable large object and supported client, check the active workspace, your role and the client version.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
