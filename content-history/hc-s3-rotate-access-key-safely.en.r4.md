---
{
  "articleId": "hc-s3-rotate-access-key-safely",
  "locale": "en",
  "revision": 4,
  "title": "Rotate an S3 access key without interruption",
  "summary": "Create a replacement with matching minimum scope, test it, update the client secret store, and revoke the old key. Verify that new requests succeed and the retired key no longer authenticates.",
  "category": "integrations",
  "articleSlug": "s3-rotate-access-key-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "s3 rotate access key safely",
    "S3-compatible connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Rotate an S3 access key without interruption** in Dosya. The main action is to create a replacement with matching minimum scope, test it, update the client secret store, and revoke the old key; the decisive check is whether new requests succeed and the retired key no longer authenticates.

<figure class="help-screenshot"><a href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp" alt="Workflow for “Rotate an S3 access key without interruption”: create a replacement with matching minimum scope, test it, update the client secret store, and revoke the old key; new requests succeed and the retired key no longer authenticates." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Rotate an S3 access key without interruption”: create a replacement with matching minimum scope, test it, update the client secret store, and revoke the old key; new requests succeed and the retired key no longer authenticates. <a href="/screenshots/s3-rotate-access-key-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya and locate the working integration using a restricted key.
- Confirm the active account and workspace, then identify working integration using a restricted key.

## Steps: rotate an S3 access key without interruption

1. Confirm the account and workspace in an S3-compatible client connected to Dosya when reviewing the working integration using a restricted key.
2. Locate working integration using a restricted key and verify its name or identifying details.
3. Create a replacement with matching minimum scope, test it, update the client secret store, and revoke the old key.
4. Confirm that new requests succeed and the retired key no longer authenticates.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Rotate an S3 access key without interruption”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate an S3 access key without interruption”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Validate with a restricted key and disposable prefix before transferring important objects.

## Verify the result

After completing the steps, check the expected result: New requests succeed and the retired key no longer authenticates.

## Expected result

The controlled workflow completes and new requests succeed and the retired key no longer authenticates.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the working integration using a restricted key, check the active workspace, your role and the client version.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
