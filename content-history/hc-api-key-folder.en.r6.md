---
{
  "articleId": "hc-api-key-folder",
  "locale": "en",
  "revision": 6,
  "title": "Restrict an API key to a workspace folder",
  "summary": "Anchor a credential to one folder for WebDAV or S3, verify the mounted subtree, and understand what trashing or permanently deleting the anchor does.",
  "category": "developers",
  "articleSlug": "api-key-folder-access",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/webdav/[...path].ts, apps/api/src/pages/webdav/[...path].anchor-homes.unit.test.ts, apps/api/src/pages/s3/[...path].ts, apps/api/src/pages/s3/[...path].unit.test.ts, apps/api/src/pages/api/me/api-keys/s3-credentials.ts, apps/api/src/lib/access/gate.ts, apps/api/src/middleware.ts, apps/api/src/lib/access/folder-scoped-keys.ts, apps/ftp-server/src/sftp.ts, and apps/web/src/components/api-keys/api-keys-section.tsx. Production status: live anchor behavior remains to be rechecked after publication.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes",
    "hc-workspace-folder-access"
  ],
  "keywords": [
    "folder-scoped API key",
    "workspace key",
    "folder anchor",
    "restricted credential",
    "cloud storage"
  ]
}
---
A folder anchor makes the selected subtree the credential's visible root. This restriction is implemented at the WebDAV and S3 gateways, not at REST or SFTP.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" alt="Four panels show choosing a folder anchor, preparing WebDAV or one-time S3 credentials, checking the protocol role gate, and refusing a sibling path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing a folder anchor, preparing WebDAV or one-time S3 credentials, checking the protocol role gate, and refusing a sibling path. <a class="workflow-map-full" href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-folder-access-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Supported combination

Open **Profile → API keys**, choose **New API key**, then expand **Restrictions and expiry**. Under **Where can it reach?**, select one workspace and use **Choose folder…**. The picker title is **Limit key to a folder** and its confirmation is **Select folder**.

Select **WebDAV** or **S3 gateway** under Protocols. The workspace role must include `access_webdav` for WebDAV or `access_s3` for S3. Ordinary REST answers JSON with `This API key is anchored at a folder and can only be used over WebDAV or the S3 gateway`; an SFTP client instead reports its gateway authentication or request failure.

## Steps

1. Create a disposable workspace tree containing one file inside the intended anchor and another file in a sibling folder.
2. In the key dialog, choose the needed operation permission, pin the workspace, select the anchor through **Choose folder…**, and allow WebDAV or S3.
3. Generate the `dos_…` secret for WebDAV. For S3, expand the saved key, choose **Enable** under **S3 credentials**, and copy the one-time **Access key ID**, **Secret access key**, **Endpoint**, and **Region**.
4. Confirm the member role has the matching protocol permission, then mount WebDAV or address the S3 workspace and require its root to begin at the selected folder.
5. Read or write the permitted test item inside that subtree according to the chosen key permission.
6. Request the sibling path and require denial, then revoke the disposable key after recording the verified boundary.

## Anchor lifecycle

Scope, protocol, the current member role, locks, and other key conditions continue to apply. WebDAV returns text such as `This API key is not permitted to use WebDAV` or `This role is not permitted to use WebDAV`. S3 returns an XML `AccessDenied` response with the equivalent gateway or role message. A human member's own folder confinement can narrow the credential further; an incompatible pair returns `This API key is anchored outside your permitted folder`.

Trashing the anchor makes WebDAV and S3 answer `This API key's anchor folder is no longer available`. Restoring that live folder can make its id usable again. Permanently purging the anchor or a containing subtree deletes every key anchored there and clears its REST/S3 authentication caches; that key removal is irreversible.

Moving or renaming a live anchor keeps the stored folder id, so clients see the same subtree at its new place or label rather than receiving a newly scoped credential.

## Expected result

The protocol root exposes the selected folder and descendants, sibling data is unreachable, and a trashed or permanently purged anchor fails closed instead of widening access.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restriction controls for workspace, folder and protocol boundaries." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Combine the folder anchor with an appropriate operation permission. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Choose key permission](/developers/api-key-scopes)
- [Restrict a member to a folder](/workspaces/folder-access)
