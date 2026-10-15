---
{
  "articleId": "hc-s3-endpoint-region",
  "locale": "en",
  "revision": 6,
  "title": "Set the endpoint and region in an S3 client",
  "summary": "Configure an S3 client with Dosya’s exact endpoint, us-east-1 signer region, path-style addressing, workspace bucket, and one-time credentials.",
  "category": "integrations",
  "articleSlug": "s3-endpoint-region",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Set the endpoint and region in an S3 client” against the released implementation on 2026-10-14: `apps/web/src/components/api-keys/api-keys-section.tsx`, `apps/api/src/pages/api/me/api-keys/s3-credentials.ts`, `apps/web/src/lib/integrations.ts`, `packages/prod-smoke/src/lanes/s3.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "s3 endpoint region",
    "protocol client workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Create S3 credentials from an existing Dosya API key, then configure the exact gateway values returned by the released dialog. The S3 secret cannot be retrieved after that dialog closes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-endpoint-region-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-endpoint-region-workflow-map-2026-10-14.webp" alt="Four-step workflow map for Set the endpoint and region in an S3 client: Enable S3 in the API key settings, require the S3 gateway restriction. Copy the access ID and one-time secret, save both before closing the dialog. Configure endpoint /s3 and us-east-1, select path-style addressing. List a permitted key prefix, require both API scope and member role." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows set the endpoint and region in an s3 client from “Enable S3 in the API key settings, require the S3 gateway restriction.” through “Copy the access ID and one-time secret, save both before closing the dialog.” and “Configure endpoint /s3 and us-east-1, select path-style addressing.”, ending with “List a permitted key prefix, require both API scope and member role.”. <a class="workflow-map-full" href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-endpoint-region-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

In **Profile > API keys**, use a key whose protocols are unrestricted or explicitly include **S3 gateway**. A workspace-pinned key also requires current membership and a role permitted to use S3. Expired keys cannot be enabled.

Choose **Read only**, **Upload only**, or **Full access** for the task and narrow the workspace or folder when possible. A folder anchor becomes the S3 root visible to that credential.

## Steps

1. Expand the intended API-key row and choose **Enable** in its S3 section; if no key exists, create one and include **S3 gateway** under protocol restrictions.
2. In **S3 credentials**, copy **Access key ID** and **Secret access key** into a protected client profile before closing the dialog.
3. Set **Endpoint** to `https://api.dosya.dev/s3` and **Region** to `us-east-1`, exactly as displayed.
4. Enable path-style addressing and use the exact workspace ID as the bucket name.
5. Run a non-destructive bucket or prefix listing that the key’s scope and role allow; an upload-only key cannot list existing files.
6. Confirm the expected workspace appears and one known permitted key is returned, then remove credentials from terminal history or temporary files.

## Expected result

The client reaches Dosya through AWS Signature V4 at `/s3/{workspace-id}/…`. The access key remains visible in the API-key row, while reopening **S3 credentials** shows that the secret is not retrievable and rotation requires a new API key.

If **Enable** is absent, inspect the key’s protocol restriction and expiry. The server refuses S3 credential creation for keys that exclude S3, expired keys, lost workspace memberships, and roles without S3 access.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
