---
{
  "articleId": "hc-s3-path-style-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot S3 endpoint and path-style errors",
  "summary": "Keep the workspace ID in the request path under the /s3 endpoint, correct virtual-host defaults, and retest with an allowed S3 credential safely.",
  "category": "integrations",
  "articleSlug": "s3-path-style-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Troubleshoot S3 endpoint and path-style errors” against the released implementation on 2026-10-14: `apps/web/src/lib/integrations.ts`, `apps/api/src/pages/s3/[...path].ts`, `packages/prod-smoke/src/rclone-config.ts`, `packages/prod-smoke/src/lanes/s3.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
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
Dosya is mounted at `https://api.dosya.dev/s3`, so clients must keep the workspace bucket in the URL path. Virtual-host style changes the host and omits the bucket segment expected by the gateway route.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Troubleshoot S3 endpoint and path-style errors: Inspect the request path for /s3 and workspace ID, preserve both path segments. Replace an AWS or bare API endpoint, use https://api.dosya.dev/s3. Turn on path-style addressing in the client, keep the bucket inside the request path. Retry a shallow list request, capture the exact S3 status and error code." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows troubleshoot s3 endpoint and path-style errors from “Inspect the request path for /s3 and workspace ID, preserve both path segments.” through “Replace an AWS or bare API endpoint, use https://api.dosya.dev/s3.” and “Turn on path-style addressing in the client, keep the bucket inside the request path.”, ending with “Retry a shallow list request, capture the exact S3 status and error code.”. <a class="workflow-map-full" href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-path-style-troubleshoot-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Keep the S3 secret out of screenshots and logs. Confirm the parent API key includes the S3 surface and is not expired before changing network settings.

For rclone’s S3 backend, the released working shape uses `provider = Other`, `endpoint = https://api.dosya.dev/s3`, `force_path_style = true`, and `region = us-east-1`. The tested large-upload cutoff is `64Mi`.

## Steps

1. Inspect the failed request URL and verify it should be `/s3/{workspace-id}/{object-key}` on host `api.dosya.dev`.
2. Replace any AWS default endpoint or bare `https://api.dosya.dev` value with `https://api.dosya.dev/s3`.
3. Turn on the client’s path-style option, named `forcePathStyle`, `s3ForcePathStyle`, or `force_path_style` depending on the tool.
4. Set the region to `us-east-1` and the bucket to the literal Dosya workspace ID.
5. Retry a `HEAD` bucket or shallow list; if rclone alone returns **SignatureDoesNotMatch**, set `sign_accept_encoding = false` so an upstream header rewrite is not signed.
6. Confirm the successful request reaches the intended bucket, then run one scoped object operation and inspect its exact key.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Troubleshoot S3 endpoint and path-style errors”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot S3 endpoint and path-style errors”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client sends and signs the gateway’s real path, Dosya parses the workspace as the bucket, and the request reaches S3 routing instead of an unrelated API route or virtual host.

If authentication still fails, distinguish **InvalidAccessKeyId** from **SignatureDoesNotMatch**. The first requires a current access ID; the second requires checking secret, base path, signed headers, clock, and client canonicalization.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
