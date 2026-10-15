---
{
  "articleId": "hc-s3-path-style-troubleshoot",
  "locale": "en",
  "revision": 4,
  "title": "Troubleshoot S3 endpoint and path-style errors",
  "summary": "Verify endpoint, region, HTTPS, path-style access when required, and key surfaces. Verify that the client reaches the Dosya endpoint instead of a default public S3 host.",
  "category": "integrations",
  "articleSlug": "s3-path-style-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 path style troubleshoot",
    "S3-compatible client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Troubleshoot S3 endpoint and path-style errors** in Dosya. The main action is to verify endpoint, region, HTTPS, path-style access when required, and key surfaces; the decisive check is whether the client reaches the Dosya endpoint instead of a default public S3 host.

<figure class="help-screenshot"><a href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" alt="Workflow for “Troubleshoot S3 endpoint and path-style errors”: verify endpoint, region, HTTPS, path-style access when required, and key surfaces; the client reaches the Dosya endpoint instead of a default public S3 host." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Troubleshoot S3 endpoint and path-style errors”: verify endpoint, region, HTTPS, path-style access when required, and key surfaces; the client reaches the Dosya endpoint instead of a default public S3 host. <a href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya and locate the client that cannot list through the configured endpoint.
- Confirm the active account and workspace, then identify client that cannot list through the configured endpoint.

## Steps: troubleshoot S3 endpoint and path-style errors

1. Confirm the account and workspace in an S3-compatible client connected to Dosya when reviewing the client that cannot list through the configured endpoint.
2. Locate client that cannot list through the configured endpoint and verify its name or identifying details.
3. Verify endpoint, region, HTTPS, path-style access when required, and key surfaces.
4. Confirm that the client reaches the Dosya endpoint instead of a default public S3 host.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Troubleshoot S3 endpoint and path-style errors”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot S3 endpoint and path-style errors”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode.

## Verify the result

After completing the steps, check the expected result: The client reaches the Dosya endpoint instead of a default public S3 host.

## Expected result

The controlled workflow completes and the client reaches the Dosya endpoint instead of a default public S3 host.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the client that cannot list through the configured endpoint, check the active workspace, your role and the client version.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
