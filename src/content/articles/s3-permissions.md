---
{
  "articleId": "hc-s3-permissions",
  "locale": "en",
  "revision": 6,
  "title": "Restrict S3 credentials and verify access",
  "summary": "Limit an S3 credential by permission, protocol, workspace, folder, address, hours and usage, then prove allowed and denied object operations.",
  "category": "developers",
  "articleSlug": "s3-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified API-key controls, S3 credential creation, role gates, anchors, scope errors, endpoint settings and request limits in apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/web/src/lib/api-keys.ts; apps/web/src/pages/integrations/s3.tsx; apps/web/src/lib/integrations.ts; apps/api/src/pages/api/me/api-keys/s3-credentials.ts; apps/api/src/pages/s3/[...path].ts; apps/api/src/lib/s3/auth.ts; apps/api/src/lib/s3/operations/list-objects.ts; apps/api/src/lib/s3/operations/get-object.ts; apps/api/src/lib/s3/operations/put-object.ts; apps/api/src/lib/s3/operations/delete-object.ts; and apps/api/src/lib/s3/operations/scope.upload-cannot-read.unit.test.ts. Local repository evidence only; no production request was made.",
  "related": [
    "hc-s3-connect",
    "hc-api-key-scopes",
    "hc-api-key-folder"
  ],
  "keywords": [
    "S3 permissions",
    "S3 AccessDenied",
    "folder scoped S3 key",
    "S3 read only key",
    "least privilege S3 credentials"
  ]
}
---
An S3 request must pass every boundary attached to the credential and workspace. The API-key permission limits the operation, **Protocols** must permit the S3 gateway, the workspace and folder settings restrict location, and the caller's current workspace role can narrow access further. A successful credential creation does not override a later role or membership change.

## Steps

Dosya offers three API-key permissions for S3:

| Permission | Intended S3 use | Operations that are deliberately refused |
| --- | --- | --- |
| **Read only** | List buckets and objects, inspect metadata, and download objects. | Uploads return `API key scope 'read' cannot upload files`; delete and copy also require Full access. |
| **Upload only** | Add new objects without exposing stored content. | Listing returns `API key scope 'upload' cannot list files`; reads return `API key scope 'upload' cannot download files`. |
| **Full access** | Read, upload, copy, move through supported client operations, and delete when the role also permits it. | Role permissions, locks, anchors, usage limits, and workspace policy still apply. |

Deleting an S3 object moves the Dosya file to Trash and returns 204; it does not immediately release storage. The key must have **Full access**, and the role needs `delete_own_files` or `delete_any_file` for the object. Treat `aws s3 rm` as a destructive action even though recovery may remain available in Trash.

## Create a narrowly scoped key

1. Sign in at [Profile → API keys](https://app.dosya.dev/profile/api) and select **New API key**.
2. Enter a client-specific label under **What is it for?** and choose **Read only**, **Upload only**, or **Full access** under **What can it do?**
3. Expand **Restrictions and expiry**, then open **Where can it reach?**
4. Under **Protocols**, choose **Only the ones I pick** and check **S3 gateway**. Leaving S3 unchecked makes credential activation show **Not allowed** and the gateway return `This API key is not permitted to use the S3 gateway`.
5. Select the exact **Workspace**. Choose **Folder** when the client should see only that folder and its descendants; for an anchored key, the chosen folder becomes the S3 root.
6. Add **Allowed IP ranges**, **Only during a weekly window**, or limits under **How much can it use?** when the client has stable requirements. Blank usage fields mean no explicit key limit, while plan and role ceilings can still apply.
7. Choose an expiry, review the sentence describing the key, and select **Generate key**. Save the one-time `dos_` value.
8. Expand the new key. Beside **S3 credentials**, select **Enable** and save both `access_key_id` and `secret_access_key` from the reveal. The secret cannot be retrieved later.

S3 credentials inherit the key's scope, reach, source conditions, expiry, and usage limits. If credentials already exist, activation returns `S3 credentials already exist for this API key. Delete and recreate to regenerate.` API keys cannot be edited after creation; use **Duplicate settings**, create the corrected replacement, test it, and then revoke the old key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" alt="Least-privilege S3 workflow from API-key permission and folder reach to an allowed object test and a denied boundary test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Prove one required S3 operation and one harmless request outside the key's declared boundary before moving production data. <a class="workflow-map-full" href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/s3-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/s3-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya New API key restrictions with Protocols, Workspace, folder reach and expiry controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Select the S3 gateway explicitly, then pin the credential to the smallest workspace or folder the client needs. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Configure the client

Use the endpoint `https://api.dosya.dev/s3`, region `us-east-1`, and the workspace ID as the bucket name. A display name is not a bucket identifier.

```bash
export AWS_ACCESS_KEY_ID='REPLACE_WITH_DOSYA_ACCESS_KEY_ID'
read -r -s -p 'S3 secret: ' AWS_SECRET_ACCESS_KEY
printf '\n'
export AWS_SECRET_ACCESS_KEY

DOSYA_WORKSPACE_ID='REPLACE_WITH_WORKSPACE_ID'
aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
  s3 ls "s3://$DOSYA_WORKSPACE_ID/"
```

For a folder-anchored key, paths begin at the selected folder. Do not prepend the folder's path from the web app, because that would look for a same-named child under the anchor.

## Test both sides of the boundary

Use a non-confidential file and commands appropriate to the selected scope:

```bash
printf 'S3 permission check\n' > s3-permission-check.txt

# Upload test: suitable for Upload only or Full access.
aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
  s3 cp s3-permission-check.txt "s3://$DOSYA_WORKSPACE_ID/tests/s3-permission-check.txt"

# Read test: suitable for Read only or Full access.
aws --endpoint-url https://api.dosya.dev/s3 --region us-east-1 \
  s3 cp "s3://$DOSYA_WORKSPACE_ID/tests/s3-permission-check.txt" ./received.txt
```

Then issue a harmless request that should fail: list with an upload-only key, upload with a read-only key, use another workspace ID with a pinned key, or request a sibling path outside the folder anchor. Expect an S3 XML error with HTTP 403 and `AccessDenied`. A different-workspace attempt returns `This API key is pinned to a different workspace`.

The workspace role must include **Use the S3 gateway**. Object listing also needs file-page access, downloading needs `download_files`, uploading needs `upload_files`, and automatically creating missing path folders needs `create_folders`. Relevant refusals include `This role is not permitted to use the S3 gateway`, `This role cannot list files`, `Download not allowed`, `Upload not allowed`, and `Creating folders is not allowed`.

Requests are additionally limited to 600 per minute per user and 1,200 per minute per IP before any narrower key or role request limit. A usage refusal returns `SlowDown` with HTTP 429 and `Retry-After`; reduce concurrency and wait instead of replacing a valid credential.

## Expiry, anchors, and revocation

An expired API key cannot authenticate or mint S3 credentials. If the selected anchor folder is trashed or removed, requests fail with `This API key's anchor folder is no longer available`. A member later confined to another folder cannot use a credential anchor outside that permitted subtree.

Revoking the API key stops its bearer token and attached S3 access key from authenticating. Revocation cannot be undone, so update the S3 client with a tested replacement before removing a credential used by a backup or automation. The files already uploaded remain in Dosya; revocation does not delete or recall them.

## Expected result

The required operation succeeds inside the chosen bucket and folder, while the planned outside or wrong-scope request returns `AccessDenied`. The key row identifies its permission, S3 protocol, reach, expiry, and last use, allowing the credential to be audited and revoked independently.

## Related guides

- [Connect an S3-compatible client](/integrations/s3-connect)
- [Choose read, upload, or full permission](/developers/api-key-scopes)
- [Anchor a key to one folder](/developers/api-key-folder-access)
