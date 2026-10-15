---
{
  "articleId": "hc-s3-upload-object",
  "locale": "en",
  "revision": 5,
  "title": "Upload an object with an S3 client",
  "summary": "Upload a small object through the Dosya S3 endpoint, interpret the returned ETag, and verify its key, byte size, and overwrite behavior safely.",
  "category": "integrations",
  "articleSlug": "s3-upload-object",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Upload an object with an S3 client” against the released implementation on 2026-10-14: `apps/api/src/lib/s3/operations/put-object.ts`, `apps/api/src/lib/s3/router.ts`, `apps/api/src/pages/s3/[...path].ts`, `apps/web/src/lib/integrations.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
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
A Dosya S3 `PutObject` writes to bucket `{workspace-id}` at the configured key. Missing prefix segments can become folders when the member role permits folder creation; uploading to an existing file key creates a new Dosya version.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-upload-object-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-upload-object-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Upload an object with an S3 client: Record the test file size and object key, choose an overwrite-safe destination. Upload once with secrets outside shell history, address the bucket by workspace ID. Require HTTP 200 from PutObject, retain the returned ETag as the receipt. Issue HEAD for the same key, compare the stored size and ETag." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows upload an object with an s3 client from “Record the test file size and object key, choose an overwrite-safe destination.” through “Upload once with secrets outside shell history, address the bucket by workspace ID.” and “Require HTTP 200 from PutObject, retain the returned ETag as the receipt.”, ending with “Issue HEAD for the same key, compare the stored size and ETag.”. <a class="workflow-map-full" href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-upload-object-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-upload-object-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use endpoint `https://api.dosya.dev/s3`, region `us-east-1`, path-style addressing, and an S3 credential with upload or full scope. The member role must allow S3 and uploads.

Start with a disposable object below 50 MB. Plain requests require a valid `Content-Length`; clients may instead use supported AWS chunked framing. Workspace extension policy, per-file limits, credential or role limits, quota, hidden paths, and folder locks all remain active.

## Steps

1. Create a small local test file and record its exact byte size and destination key, including case and every prefix segment.
2. Confirm the bucket is the workspace ID and the key sits inside any folder anchor assigned to the credential.
3. Upload once with the client’s `put`, `cp`, or `PutObject` command while keeping credentials outside command history.
4. Require an HTTP `200` response and save the returned `ETag`; a checksum header is echoed only after Dosya verifies it.
5. Issue `HEAD` or a permitted listing for the same key and compare the reported size and stored ETag with the upload result.
6. Open the destination in Dosya and confirm one file exists; if you intentionally upload the same key again, verify that its version number advances.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Upload an object with an S3 client”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload an object with an S3 client”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The object is stored once at the requested key with the expected bytes. New nested prefixes create folders only when allowed, and an overwrite preserves history as a new file version rather than creating a second same-name row.

Exact refusals identify the gate: **API key scope 'read' cannot upload files**, **Upload not allowed**, **Creating folders is not allowed**, **Destination folder is locked**, **Object is locked**, **QuotaExceeded**, or **EntityTooLarge**. Correct that gate before retrying.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
