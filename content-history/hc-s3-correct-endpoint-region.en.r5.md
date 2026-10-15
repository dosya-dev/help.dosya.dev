---
{
  "articleId": "hc-s3-correct-endpoint-region",
  "locale": "en",
  "revision": 5,
  "title": "Correct an S3 endpoint or region mismatch",
  "summary": "Correct the Dosya S3 base path, path-style mode, workspace bucket, and signing inputs; use us-east-1 as the published, tested client default.",
  "category": "integrations",
  "articleSlug": "s3-correct-endpoint-region",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Correct an S3 endpoint or region mismatch” against the released implementation on 2026-10-14: `apps/web/src/lib/integrations.ts`, `apps/api/src/pages/s3/[...path].ts`, `apps/api/src/lib/s3/auth.ts`, `packages/prod-smoke/src/lanes/s3.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "s3 correct endpoint region",
    "S3-compatible connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya’s S3 gateway lives below the API host. The released client setup uses endpoint `https://api.dosya.dev/s3`, published region value `us-east-1`, path-style addressing, and a bucket name equal to the workspace ID such as `wks_…`. The region fills a required client field; the gateway does not enforce one fixed signing region.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Correct an S3 endpoint or region mismatch: Set the endpoint to https://api.dosya.dev/s3, preserve the /s3 base path. Use published value us-east-1, another consistently signed region is accepted. Enable path-style bucket addressing, send /s3/{workspace-id}/{key}. List one permitted prefix after correction, verify returned object keys." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows correct an s3 endpoint or region mismatch from “Set the endpoint to https://api.dosya.dev/s3, preserve the /s3 base path.” through “Use published value us-east-1, another consistently signed region is accepted.” and “Enable path-style bucket addressing, send /s3/{workspace-id}/{key}.”, ending with “List one permitted prefix after correction, verify returned object keys.”. <a class="workflow-map-full" href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-correct-endpoint-region-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use an S3 credential whose parent API key allows the **S3 gateway**. The user must still belong to the bucket workspace, and their role needs S3 access; listing objects additionally needs file access.

The signer region is protocol configuration, not the physical storage location of uploaded bytes. Dosya stores new objects in the workspace’s configured region. Its client instructions and compatibility response publish `us-east-1`, while signature verification derives the signing key from the region and service written in each request’s credential scope.

## Steps

1. Open the client profile without exposing its secret, and compare the endpoint character for character with `https://api.dosya.dev/s3`.
2. Use `us-east-1` for the published and production-tested client setup. Another region is not a mismatch by itself when the client uses that same value consistently in its credential scope and signing key.
3. Enable path-style addressing so the request shape is `/s3/{workspace-id}/{key}` rather than a workspace subdomain.
4. Set the bucket to the exact workspace ID returned by Dosya, not its display name, slug, or a folder name.
5. Retest with a narrow root listing or `HEAD` request. For **SignatureDoesNotMatch**, inspect the secret, canonical path, query, signed headers, body hash, date, region, and service together; changing only the region does not repair a different signing fault.
6. If the request succeeds, list one permitted test prefix and verify the returned key names before restoring the client’s normal workload.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Correct an S3 endpoint or region mismatch”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Correct an S3 endpoint or region mismatch”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client signs the actual `/s3` request path and reaches the intended workspace bucket. A valid list returns only workspaces and objects permitted by the API key, membership role, and optional folder anchor.

**InvalidAccessKeyId** points to an unknown or revoked S3 access ID. **SignatureDoesNotMatch** means the client and gateway calculated different canonical requests or signing keys; it does not prove that a non-`us-east-1` region caused the failure. **NoSuchBucket** means the workspace ID is wrong or unavailable to this user.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
