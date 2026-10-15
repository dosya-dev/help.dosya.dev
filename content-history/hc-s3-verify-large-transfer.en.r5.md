---
{
  "articleId": "hc-s3-verify-large-transfer",
  "locale": "en",
  "revision": 5,
  "title": "Verify a large S3 transfer safely",
  "summary": "Use multipart upload for a large object, respect part and credential limits, complete or abort the upload, then verify stored size and ETag.",
  "category": "integrations",
  "articleSlug": "s3-verify-large-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Verify a large S3 transfer safely” against the released implementation on 2026-10-14: `apps/api/src/lib/s3/operations/create-multipart.ts`, `apps/api/src/lib/s3/operations/upload-part.ts`, `apps/api/src/lib/s3/operations/complete-multipart.ts`, `packages/prod-smoke/src/rclone-config.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
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
Large S3 objects should use multipart upload. Dosya’s tested rclone configuration switches at `64Mi`; the gateway accepts part numbers 1 through 10,000 and limits each part to 5 GiB.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Verify a large S3 transfer safely: Set multipart cutoff to 64Mi in the rclone profile, force the tested multipart path. Keep part numbers within 1–10,000, keep each part at or below 5 GiB. Complete only after every part ETag exists, otherwise abort the upload. HEAD the completed object and compare length, require source byte count and ETag." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows verify a large s3 transfer safely from “Set multipart cutoff to 64Mi in the rclone profile, force the tested multipart path.” through “Keep part numbers within 1–10,000, keep each part at or below 5 GiB.” and “Complete only after every part ETag exists, otherwise abort the upload.”, ending with “HEAD the completed object and compare length, require source byte count and ETag.”. <a class="workflow-map-full" href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-verify-large-transfer-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Record source byte size, destination bucket and key, and the client’s multipart settings. Keep enough storage available until completion. Credential and role file-size limits are evaluated when the gateway can see the complete multipart total.

Parts up to 50 MB are buffered and retried at the storage write; larger parts stream directly and cannot replay their consumed body inside the same request. The client must retry a failed part number. An unfinished multipart upload should be explicitly aborted so stored parts and its concurrency slot are released.

## Steps

1. Set the client’s multipart threshold below its single-request transport ceiling; for rclone use the released `upload_cutoff = 64Mi` value.
2. Start the upload to the exact workspace bucket and anchored-relative key, then record the returned upload ID without exposing credentials.
3. Monitor successful part responses and their ETags; keep part numbers within 1–10,000 and each declared size at or below 5 GiB.
4. On a failed part, retry that same number; if the transfer is abandoned, send AbortMultipartUpload rather than leaving it incomplete.
5. Complete the upload and require a successful CompleteMultipartUpload response; completion rechecks scope, role, quota, backup lock, and total-size limits.
6. Use `HEAD` to compare the stored `Content-Length` with the source bytes, record the multipart ETag, and download or sample-check content when stronger verification is required.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Reference for “Verify a large S3 transfer safely”: Dosya S3-compatible access overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a large S3 transfer safely”: Dosya S3-compatible access overview page. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One complete Dosya file appears at the requested key with the source byte count. The multipart ETag is an assembly receipt in the expected multi-part form, not a whole-file MD5 checksum.

If completion returns **QuotaExceeded**, **EntityTooLarge**, a lock refusal, or **NoSuchUpload**, do not assume the file landed. Resolve the gate, abort any still-live upload, and begin a clean multipart session. The current multipart completion path enforces credential and role file-size limits and quota; it does not apply the workspace `max_file_size_gb` setting.

## Related guides

- [Connect with S3-compatible tools](/integrations/s3-connect)
- [Troubleshoot S3 access](/troubleshooting/s3)
