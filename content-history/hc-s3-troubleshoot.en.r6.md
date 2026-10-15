---
{
  "articleId": "hc-s3-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot Dosya S3 authentication and access",
  "summary": "Use the S3 error code to repair credentials, SigV4 settings, workspace pinning, permissions, file limits, quota, or request throttling.",
  "category": "troubleshooting",
  "articleSlug": "s3",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/integrations/s3.tsx; apps/api/src/lib/s3/auth.ts; apps/api/src/lib/s3/router.ts; apps/api/src/lib/s3/operations/list-buckets.ts; apps/api/src/lib/s3/operations/list-objects.ts; apps/api/src/lib/s3/operations/put-object.ts; apps/api/src/lib/s3/operations/complete-multipart.ts; apps/api/src/lib/s3/operations/delete-object.ts; apps/api/src/lib/api-key-limits.ts; apps/api/src/lib/usage/enforce.ts. No production S3 request was made.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "Dosya S3 SignatureDoesNotMatch",
    "S3 InvalidAccessKeyId",
    "S3 AccessDenied",
    "S3 SlowDown"
  ]
}
---
Keep the complete S3 error code, message, HTTP status and request time before changing the client profile. Authentication is evaluated before protocol permission, workspace pin, membership, folder anchor, role and upload policy, so correcting one layer can legitimately reveal the next refusal.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-workflow-map-2026-10-14.webp" alt="S3 diagnostic sequence: validate the DOSYA access pair and SigV4 path-style profile, list the pinned workspace, then test one permitted object operation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Begin with a read-only bucket or prefix listing; attempt an upload or delete only after identity, workspace and visibility are correct. <a class="workflow-map-full" href="/screenshots/s3-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Copy the live values from **Integrations → S3** and the matching API-key row:

| Client field | Required value |
| --- | --- |
| Endpoint | `https://api.dosya.dev/s3` |
| Region | `us-east-1` |
| Signing | AWS Signature Version 4 |
| Addressing | Path style; `forcePathStyle: true` in the JavaScript AWS SDK |
| Access key | The generated ID beginning `DOSYA`, not the `dos_…` API key |
| Secret key | The 40-character S3 secret paired with that access ID |
| Bucket | Exact workspace ID, such as `ws_example`, not the workspace name |

Do not put the bucket into the hostname. A folder-restricted key keeps the workspace ID as its bucket and treats object keys as relative to the anchor. If the anchor is `Projects`, the object key `checks/a.txt` reaches `Projects/checks/a.txt`; adding `Projects/` again looks in the wrong nested path.

The S3 secret cannot be retrieved later. A row displaying **(secret key is not retrievable - revoke and recreate the key to rotate)** requires a new key and credential pair if the stored client secret is lost. Update dependent clients, confirm the replacement, then revoke the old key. Revocation is permanent but does not delete files.

## Match the exact response

| S3 result | Cause to check | Recovery |
| --- | --- | --- |
| `InvalidAccessKeyId` / **The access key ID does not exist** | Wrong access ID, revoked/expired key, or pasted `dos_…` key | Copy the `DOSYA…` access ID from the correct row. Create a replacement pair if that row is no longer active. |
| `SignatureDoesNotMatch` / **The request signature does not match** | Secret does not match the access ID, or the client signed a different endpoint/path/query | Re-enter the paired secret, endpoint, region and path-style option; discard the failed request and let the SDK sign a new one. |
| `AccessDenied` / **This API key is not permitted to use the S3 gateway** | The key's protocol restriction excludes S3 | Create or replace the key with **S3 gateway** selected under Protocols. |
| **This API key is pinned to a different workspace** | Bucket and key workspace pin disagree | Use the bucket ID shown for the pinned workspace, or issue a different narrowly pinned key. |
| **This role is not permitted to use the S3 gateway** | Member role lacks the S3 access gate | Ask a workspace owner or admin to grant the role's S3 permission. A broader key cannot override the role. |
| `NoSuchBucket`, missing object, or an unexpectedly empty listing | Wrong workspace ID, folder-relative path, membership confinement, hidden/locked state, or Trash | List the permitted bucket/root and build the path from returned names. Compare with Dosya Files under the key owner's account. |
| **Upload not allowed**, **Creating folders is not allowed**, or **Object is locked** | Scope/role denies the operation or destination is locked | Choose an allowed operation/destination; do not widen the key before confirming the user's role. |
| `EntityTooLarge` | Object exceeds a file-size policy or active key/role limit | Read the returned message, use an accepted file, or have an authorized administrator change the actual limit. |
| `QuotaExceeded` | Workspace does not have enough available storage | Free space or increase its storage allowance before starting another multipart upload. |
| 429 XML `SlowDown` | Explicit request/transfer/byte rule refused the operation | Honor `Retry-After` when present. Reduce parallel transfers for concurrency limits; byte allowances require their reset or an authorized limit change. |
| 429 JSON **Too many requests** | Front-door throttle reached 600 requests/minute per user or 1,200/minute per IP | Pause for `Retry-After`, lower polling/list frequency, and stagger clients sharing that identity or address. |

For a presigned request, `X-Amz-Expires` must be an integer from 1 through 604,800 seconds. **Request has expired** means its signed lifetime ended; generate a new URL instead of modifying the query, because changing a signed parameter invalidates the signature.

## Expected result

1. List the exact workspace bucket or its allowed prefix. A successful bucket discovery proves visibility, not upload or delete permission.
2. Download one known harmless object into a new local path and compare its size or SHA-256 with the source.
3. If the key and role allow upload, send uniquely named test bytes to an authorized disposable prefix. Wait for HTTP 200, then refresh **Files** and download the object for comparison.
4. Abort any failed multipart upload through the client. A local cancellation can leave unfinished parts.

Listing returns at most 1,000 entries per page, so a client must follow continuation tokens. Multipart part numbers range from 1 to 10,000 and a protocol part may be at most 5 GiB, but your effective object, storage, credential and role limits can be much smaller.

## Understand successful but unexpected changes

Uploading to an existing Dosya path creates a new file version. It is not an AWS version ID, and version history/retention rules still apply. Deleting an eligible object moves it to Trash, revokes its share links and can return 204 even when the object was already absent. Trash continues to occupy storage until purge; permanent purge cannot be reversed.

The gateway does not provide AWS IAM/ACL administration, lifecycle rules, replication, S3 versioning or Object Lock/legal hold. Configuration writes for unsupported features return `NotImplemented`. If a tool requires those guarantees, changing credentials will not make that workload compatible.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya New API key restriction form where S3 protocol, workspace pin, folder reach, expiry, and usage conditions are selected." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Check protocol and workspace restrictions on the key that owns the S3 pair; each restriction continues to apply after signature verification. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Escalate without exposing credentials

If a minimal listing still fails, provide the client/version, endpoint, region, addressing mode, bucket ID, method, object prefix, HTTP status, S3 code/message, approximate time and timezone, and whether the key is workspace/folder restricted. Redact the access ID if your policy requires it, and never send the secret key, `Authorization` header, presigned query or complete private object path.

## Related guides

- [Connect S3](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
