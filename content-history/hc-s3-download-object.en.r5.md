---
{
  "articleId": "hc-s3-download-object",
  "locale": "en",
  "revision": 5,
  "title": "Download an object with an S3 client",
  "summary": "Download one Dosya object through the S3 gateway with AWS CLI, using the documented endpoint, region, workspace bucket, and read permissions.",
  "category": "integrations",
  "articleSlug": "s3-download-object",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/s3.tsx, apps/web/src/lib/integrations.ts, apps/api/src/pages/s3/[...path].ts, apps/api/src/lib/s3/auth.ts, apps/api/src/lib/s3/operations/get-object.ts, apps/api/src/lib/s3/operations/head-object.ts, and S3 path/anchor tests. No production object was downloaded.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 download object",
    "AWS CLI cloud storage download",
    "Dosya S3 endpoint",
    "S3 read-only credentials"
  ]
}
---
Dosya exposes each workspace through an S3-compatible bucket. The endpoint is `https://api.dosya.dev/s3`, the signing region is `us-east-1`, and the bucket name is the workspace ID shown on **Integrations → S3**.

<figure class="help-screenshot"><a href="/screenshots/s3-download-object-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-download-object-help-workflow-2026-10-14.webp" alt="AWS CLI object-download flow using the Dosya S3 endpoint, us-east-1 region, workspace-ID bucket, object key, and local output path." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Resolve the workspace bucket and relative object key, inspect its length, then copy bytes to a deliberate local path. <a href="/screenshots/s3-download-object-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Prepare credentials and permissions

Your workspace role must allow the **S3 gateway**, file access, and downloads. If S3 itself is denied, the setup page says **Your role can’t use the S3 gateway**. An owner or admin must change that role.

In **Profile → API keys**, create a **Read only** key and restrict its protocols to **S3 gateway** when the credential is solely for downloads. Attach S3 credentials to that API key. Dosya displays the secret access key once, so copy it into a secure credential store at creation time.

A workspace pin can limit the credential to the expected bucket. A folder anchor is also supported: that folder becomes `/` for the S3 view, so object keys are relative to the anchor and paths above or beside it are unreachable.

Configure AWS CLI with the displayed S3 access key and secret:

```sh
aws configure set aws_access_key_id DOSYA_your_access_key
aws configure set aws_secret_access_key your_secret_key
```

Avoid saving these commands in shared transcripts. Use an isolated AWS profile if the machine already has unrelated credentials.

## Steps

1. Copy the workspace ID from **Integrations → S3** and identify the exact object key by listing a narrow prefix:

   ```sh
   aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
     s3api list-objects-v2 --bucket WORKSPACE_ID --prefix 'path/to/'
   ```

2. Inspect the S3 object's `ContentLength` without downloading content:

   ```sh
   aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
     s3api head-object --bucket WORKSPACE_ID --key 'path/to/object.bin'
   ```

3. Choose a new local filename or back up the current path. `aws s3 cp` can replace the local destination named in the command.
4. Download the object:

   ```sh
   aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
     s3 cp 's3://WORKSPACE_ID/path/to/object.bin' './object.bin'
   ```

5. Compare the local byte count with `ContentLength` from `head-object`. If the original source has a separately trusted checksum, calculate the same algorithm locally and compare it; do not assume every S3 ETag is a portable content hash.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Dosya S3 integration page showing credential creation, gateway endpoint, us-east-1 region, and active workspace bucket ID." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The S3 integration supplies the three connection constants required by AWS CLI: endpoint, signing region, and workspace-ID bucket. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Troubleshooting

- `AccessDenied: API key scope 'upload' cannot download files` means the key is upload-only; issue a read-only or full-access key instead.
- `AccessDenied: Access denied` means the role lacks general file access. `AccessDenied: Download not allowed` identifies the separate download permission.
- `NoSuchBucket` usually means the workspace ID is wrong, the key is pinned elsewhere, or the user no longer belongs to that workspace.
- `NoSuchKey` means the relative path does not resolve to a visible live file. Hidden content also resolves as absent, and a folder-anchored key must omit every path segment above its anchor.
- `AccessDenied: Object is locked` means the file or one of its ancestors has a full lock. Personal unlock state in the web app does not turn an S3 request into an allowed download.
- `SignatureDoesNotMatch` requires checking the access-key pair, endpoint, and `us-east-1` signing region. Regenerating only the secret is not possible because it is shown once; attach a new S3 credential pair when lost.
- An unsatisfiable byte range returns HTTP `416` with `Content-Range: bytes */SIZE`; retry without a stale range after checking the current object size.

The download is read-only for Dosya: it does not remove, move, or alter the cloud object. Replacing an existing local output path is a local effect and cannot be recovered from Dosya unless another local copy exists.

## Expected result

AWS CLI exits successfully, the local file size equals the S3 `ContentLength`, and an independently known checksum matches when available. The source object remains in the same Dosya workspace path with no cloud-side mutation.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
