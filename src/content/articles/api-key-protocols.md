---
{
  "articleId": "hc-api-key-protocols",
  "locale": "en",
  "revision": 6,
  "title": "Limit an API key to selected protocol surfaces",
  "summary": "Limit one API key to selected REST, WebDAV, SFTP, or S3 surfaces, test an allowed and refused door, and avoid combinations the server cannot enforce.",
  "category": "developers",
  "articleSlug": "api-key-protocols",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/lib/api-keys.ts, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/web/src/components/api-keys/api-keys-section.tsx, apps/api/src/pages/api/me/api-keys/s3-credentials.ts, apps/api/src/pages/webdav/[...path].ts, apps/api/src/pages/s3/[...path].ts, apps/api/src/lib/access/gate.ts, apps/api/src/lib/access/credential.ts, apps/api/src/middleware.ts, apps/ftp-server/src/access.ts, and apps/ftp-server/src/sftp.ts. Production status: the protocol compatibility matrix awaits confirmation on the live service.",
  "related": [
    "hc-api-key",
    "hc-webdav-connect",
    "hc-rclone-copy"
  ],
  "keywords": [
    "protocol-restricted key",
    "WebDAV key",
    "S3 key",
    "SFTP key",
    "REST API key",
    "cloud storage"
  ]
}
---
Protocol controls decide which network doors accept a secret. They operate alongside permission, workspace reach, role checks, origin conditions, and usage limits.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" alt="Four panels show selecting required protocol doors, preparing separate S3 credentials and role access, testing an allowed door, and checking the unchecked door’s JSON, DAV, S3, or client refusal." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show selecting required protocol doors, preparing separate S3 credentials and role access, testing an allowed door, and checking the unchecked door’s JSON, DAV, S3, or client refusal. <a class="workflow-map-full" href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Available surfaces

Inside **Restrictions and expiry** → **Where can it reach?**, choose **All protocols** or **Only the ones I pick**. The selectable surfaces are **WebDAV**, **SFTP**, **S3 gateway**, and **REST API**.

When selecting individual protocols, tick at least one. The create model sends no restriction for an empty selected set, which the server stores as unrestricted access to all surfaces.

## Steps

1. Determine the actual door used by the client rather than inferring it from the tool's product name.
2. Open **New API key**, choose the smallest operation permission, and expand **Restrictions and expiry**.
3. Select **Only the ones I pick** and tick each required surface, leaving unrelated doors unchecked.
4. Review workspace reach and do not mix a folder anchor with REST or SFTP; an anchored credential is usable only through WebDAV and S3 even if other boxes were selected.
5. Generate and store the key. For S3, separately choose **Enable** under **S3 credentials** and copy its one-time Access key ID and secret with the endpoint and region.
6. Complete a harmless request through one checked door, then test an unchecked door and require that protocol's refusal rather than a successful operation.

## Compatibility rules

Selecting a surface does not grant read or write capability. A **Read only** key cannot mutate through an enabled protocol, and **Upload only** does not gain listing rights. The current role also needs `access_webdav`, `access_sftp`, or `access_s3` for those gateways; REST routes apply their own role permissions.

Folder anchors are enforced only at WebDAV and S3; adding REST or SFTP does not make that combination usable. S3 never authenticates with the displayed `dos_…` value: it needs the separately enabled Access key ID and Secret access key. A key with **Allowed IP ranges** cannot use SFTP because the SFTP server connects on the user's behalf. Its refusal explains that the source address cannot be verified and directs the operator to another protocol or removal of the IP restriction.

Refusal bodies follow each door. REST returns JSON such as `This API key is not permitted to use the api surface`; WebDAV returns a DAV XML error carrying its text message; S3 returns XML `AccessDenied`; and SFTP exposes an authentication or operation failure through the client rather than REST JSON.

Changing protocol access requires a replacement key because saved credentials are immutable. Validate the new door before irrevocably revoking the old row.

## Expected result

Authentication succeeds through every selected surface needed by the client, an excluded door returns its protocol-specific 403 response or client failure, and no selection widens the credential's operation permission.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restrictions panel with selectable protocol surfaces and location controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>A selected-surface key reduces the impact of accidental reuse. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Connect with WebDAV](/integrations/webdav)
- [Use rclone](/integrations/rclone)
