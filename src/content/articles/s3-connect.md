---
{
  "articleId": "hc-s3-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect an S3-compatible client",
  "summary": "Set up path-style S3 access with a workspace bucket and generated S3 credentials; verify transfers and understand supported operations and limits.",
  "category": "integrations",
  "articleSlug": "s3-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against local repository implementation and tests. Local evidence: apps/web/src/pages/integrations/s3.tsx; apps/web/src/lib/integrations.ts; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/api/src/pages/api/me/api-keys/s3-credentials.ts; apps/api/src/pages/api/me/api-keys/s3-credentials.unit.test.ts; apps/api/src/lib/api-key-limits.ts; apps/api/src/lib/s3/auth.ts; apps/api/src/lib/s3/router.ts; apps/api/src/pages/s3/[...path].ts; apps/api/src/lib/s3/operations/list-buckets.ts; apps/api/src/lib/s3/operations/list-objects.ts; apps/api/src/lib/s3/operations/put-object.ts; apps/api/src/lib/s3/operations/get-object.ts; apps/api/src/lib/s3/operations/delete-object.ts; apps/api/src/lib/s3/operations/delete-objects.ts; apps/api/src/lib/s3/operations/upload-part.ts; apps/api/src/lib/s3/operations/create-multipart.ts; apps/api/src/lib/s3/operations/complete-multipart.ts; apps/api/src/lib/s3/operations/subresources.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; src/pages/developer/s3.astro. External commands are source-derived and checked on temporary local fixtures where reported; no production credentials or remote writes used. Existing captures retain their original verification scope. Visibility evidence: apps/api/src/lib/hidden/decide.ts; apps/api/src/lib/hidden/visibility.ts. Throttle-response evidence: apps/api/src/lib/rate-limit.ts; apps/api/src/lib/usage/enforce.ts.",
  "related": [
    "hc-api-key-protocols",
    "hc-api-key-folder"
  ],
  "keywords": [
    "connect S3 client to compatible storage",
    "S3 endpoint",
    "path style",
    "workspace bucket",
    "S3 credentials"
  ]
}
---
Connect your S3 client to `https://api.dosya.dev/s3` using **path-style addressing**, region `us-east-1` and the S3 credential pair attached to a Dosya API key. Your bucket is a workspace ID, not its display name. The gateway exposes ordinary workspace files; AWS bucket administration and immutability features are outside its supported boundary.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-connect-workflow-map-2026-10-14.webp" alt="Workflow for “Connect an S3-compatible client”: create an S3-enabled restricted key; download and compare the sample, then revoke the test key." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect an S3-compatible client”: create an S3-enabled restricted key; download and compare the sample, then revoke the test key. <a class="workflow-map-full" href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Select the intended workspace and open **Integrations → S3**. Its **Connection settings** show Endpoint, Region and Bucket for the current workspace. If the page says **Your role can’t use the S3 gateway**, ask its owner/admin for S3 access before configuring the client. Role permissions for listing, uploading, downloading and deletion still apply separately.

You can use S3 on the free plan, within its storage and download allowances. API-key creation has a three-key cap for effectively free users and a 20-key overall cap. An explicit key or role limit can narrow file size, daily download bytes, requests per minute or active transfers. The protocol is exempt from plan request-count and concurrency ceilings; that exemption does not remove explicit restrictions or egress limits.

## Steps: generate the right credential pair

1. Open **Profile → API keys → New API key**. Enter a label in **What is it for?**. For this list/upload/download test choose **Full access**; **Read only** permits browsing and downloading but rejects uploads, and **Upload only** cannot list or download objects.
2. Under **Restrictions and expiry**, choose **Only the ones I pick** for **Protocols**, select **S3 gateway**, and pin the intended **Workspace**. Choose a short expiry and review address, active-hour and usage controls appropriate to this client. **Choose folder…** can make a selected folder the client's root.
3. Select **Generate key**. Save the full `dos_…` API key if you also need that credential; it is shown at creation only. The S3 client needs a separate pair, not this value.
4. Expand the saved key's row. At **S3 credentials**, select **Enable**. In the **S3 credentials** dialog, copy **Access key ID**, **Secret access key**, **Endpoint** and **Region** before **Done**. The access ID starts with `DOSYA`; the generated secret has 40 characters. Store it in your client's protected credential facility.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Reference for “Connect an S3-compatible client”: New API key dialog with Protocols, Workspace and expiration controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect an S3-compatible client”: New API key dialog with Protocols, Workspace and expiration controls. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

The screenshot shows the API-key restriction form, not the later S3-secret dialog. S3 **Active · show** can display the access ID again but replaces the secret with **(secret key is not retrievable - revoke and recreate the key to rotate)**. Enabling the same key twice is refused with **S3 credentials already exist for this API key. Delete and recreate to regenerate.** A lost secret requires a new key/pair; update dependent clients and then revoke the old key. Revocation cannot be undone and refuses both that key and its S3 pair; it does not delete stored files.

## Steps: enter the connection settings

| Client field | Dosya value |
| --- | --- |
| S3-compatible endpoint / service URL | `https://api.dosya.dev/s3` |
| Region | `us-east-1` |
| Signature / authentication | AWS Signature Version 4 |
| Access key | The generated `DOSYA…` access key ID |
| Secret key | The accompanying S3 secret, never the `dos_…` API key |
| Addressing | Path style (`forcePathStyle: true` in AWS SDK for JavaScript) |
| Bucket | The exact workspace ID copied from Integrations → S3, such as `ws_example` |

Do not put the bucket in the hostname. An object with key `checks/sample.txt` lives at `/s3/ws_example/checks/sample.txt` and appears as `sample.txt` inside `checks` in Files. S3 does not add WebDAV's `All` collection: `All/sample.txt` would instead name an ordinary folder. Copy IDs exactly even if a workspace was renamed.

A folder-restricted key retains the workspace bucket ID but resolves every object key **relative to its anchor**. If its anchor is `Projects`, `checks/sample.txt` reaches `Projects/checks/sample.txt`; do not prepend `Projects` again. Workspace membership confinement intersects with key confinement. A key cannot reach a wider subtree than the member, another pinned workspace or a trashed anchor. Items hidden from the key owner or their role are excluded unless the role has **hide_files**, which permits viewing hidden items; the key does not independently bypass those visibility rules.

## Steps: prove a sample transfer

1. List the chosen bucket, preferably through its direct ID. Bucket discovery may be filtered to permitted workspaces; successful discovery alone proves no upload rights.
2. Choose a new sample name under an authorized disposable prefix, such as `checks/s3-first-sample.txt`. Upload harmless bytes and wait for the client's operation result. A nested new path can create missing folders if your role allows folder creation.
3. Refresh **Files** in Dosya, checking the actual workspace/anchor path, name and byte size. Download that exact key into a separate local file and compare the contents or a locally computed SHA-256.
4. Decide what happens to `checks/s3-first-sample.txt`: keep it for inspection or delete that exact object through the client. To retire this test connection, select **Revoke** on its dedicated row in **Profile → API keys**; deleting only the local profile leaves both the cloud sample and its key intact.

PutObject returns HTTP 200 with an ETag after committing; GET returns object bytes (or a range response), and listing is XML with up to 1,000 entries per page. Clients must follow continuation tokens. An ETag alone is not a universal file hash: multipart objects use multipart ETags. These operations do not create a public sharing URL; use Dosya sharing when a recipient needs access without your credentials.

## Supported operations and consequences

The router implements bucket/object listing, HEAD, upload/download, copy, delete, batch delete, directory markers and multipart initiate/upload-part/upload-part-copy/list/complete/abort. Batch delete accepts at most 1,000 keys and reports errors for individual keys. Multipart part numbers are 1–10,000 and each part has a 5 GiB maximum; your actual object/storage limits can be much smaller. A failed multipart transfer may leave an unfinished upload: use your client's abort operation rather than assuming a local cancel removed the parts.

Buckets correspond to existing workspaces. A CreateBucket request for an accessible existing workspace can return 200 as a compatibility check; it cannot create a workspace. Bucket deletion, AWS IAM/ACLs, lifecycle rules, configurable CORS, replication, AWS S3 versioning and Object Lock/retention/legal hold are not available through this gateway. Configuration writes return 501 **NotImplemented**; some reads return empty configuration or a named absence error. Do not select this endpoint for software that requires S3 immutability or legal-hold guarantees.

Uploading over a matching file path creates another **Dosya file version**, not an AWS version ID. The workspace's default history cap is 10 versions; a positive configured cap prunes excess history and free-owner aged versions have a seven-day retention pass. Keep originals for recovery. Deleting an eligible object returns 204 even if it was already absent; it moves the existing file to Trash and revokes its share links. Trash still occupies storage until purge and is subject to owner-effective retention (seven days on free, 30 otherwise). Purged bytes and revoked credentials cannot be recovered by reconnecting the client.

## Troubleshooting

| Result | Check or corrective action |
| --- | --- |
| `InvalidAccessKeyId` / `The access key ID does not exist` | Confirm the S3 access ID; expired, revoked and invalid keys are refused. |
| `SignatureDoesNotMatch` / `The request signature does not match` | Check the paired secret and exact signed endpoint/path; discard the old request and let the client sign again. |
| `AccessDenied` / `This API key is not permitted to use the S3 gateway` | Create a key whose selected protocols include S3. |
| `This API key is pinned to a different workspace` | Use the copied bucket ID matching the key pin. |
| `This role is not permitted to use the S3 gateway` | The workspace owner/admin must review the role's S3 access. |
| `Upload not allowed`, `Creating folders is not allowed`, or `Object is locked` | Match the requested operation to role permissions and destination state. |
| `EntityTooLarge` or `QuotaExceeded` | Inspect file-size, workspace storage and explicit key/role limits before retrying. |
| 429 XML `SlowDown` | Key/role usage enforcement refused the request or transfer. Read its specific Message, honor Retry-After when supplied, and reduce parallelism for a concurrency refusal; a byte allowance needs its reset or an authorized limit change. |
| 429 JSON `{"ok":false,"error":"Too many requests"}` | The independent front-door throttle was reached: 600 requests/minute per user or 1,200/minute per IP. Pause until Retry-After, reduce request frequency and stagger jobs sharing that user/IP. |

Authentication happens before protocol, key conditions, usage, workspace pin, member/anchor and role gates, so fixing one refusal may reveal another. Do not broaden a restricted key just to hide a different operation failure.

## Expected result

The client reaches the copied workspace bucket with SigV4 path-style requests. Your sample's destination is visible in Files and its separately downloaded bytes match the original; a saved connection label or successful login without that check is incomplete setup.

## Related guides

- [Run the AWS CLI sample with an isolated profile](/integrations/s3-aws-cli-connect)
- [Recover signature and request-time errors](/integrations/s3-fix-signature-time-error)
- [Set a key's protocol restrictions](/developers/api-key-protocols)
