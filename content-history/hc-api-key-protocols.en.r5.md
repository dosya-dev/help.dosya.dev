---
{
  "articleId": "hc-api-key-protocols",
  "locale": "en",
  "revision": 5,
  "title": "Limit an API key to selected protocol surfaces",
  "summary": "Allow a credential to work only with the REST API, WebDAV, S3, SFTP or another selected surface, then verify cross-protocol rejection.",
  "category": "developers",
  "articleSlug": "api-key-protocols",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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
Protocol restrictions stop one secret from being reused at every supported gateway. Select only the surface used by the client.

A protocol restriction limits where the credential can authenticate in addition to its operation and folder scope. Store the one-time secret outside source control.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" alt="Workflow for “Limit an API key to selected protocol surfaces”: enable only the client surface required; try the same key on an unselected surface and confirm rejection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Limit an API key to selected protocol surfaces”: enable only the client surface required; try the same key on an unselected surface and confirm rejection. <a class="workflow-map-full" href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-protocols-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-protocols-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a disposable workspace and non-confidential test file.
- Choose the smallest permissions and surfaces the task requires.
- Prepare a password manager or secret store; never place a real key in a screenshot, URL or repository.
- Plan to revoke the test key after verification.

## Steps: limit an api key to selected protocol surfaces

1. Open the key creation flow and configure permission and location.
2. Under protocol restrictions, choose selected protocols.
3. Enable only the client surface required.
4. Create and store the secret.
5. Authenticate through the allowed surface.
6. Try the same key on an unselected surface and confirm rejection.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restrictions panel with selectable protocol surfaces and location controls." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>A selected-surface key reduces the impact of accidental reuse. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Complete one allowed request, then use the same key on an unselected protocol and confirm it is rejected without changing stored data.

## Expected result

The test key performs its allowed operation, rejects an operation outside its boundary, and can be identified and revoked without changing the account password.

## Limits and important details

- Compatibility clients may require a particular surface even when they use familiar credentials.
- Selecting a protocol does not grant write permission by itself.
- Create separate keys for unrelated clients so each can be revoked independently.

## Troubleshooting

**The request returns unauthorized.** Check the complete secret, API endpoint and whether the key was revoked.

**The request returns forbidden.** Compare the operation with the key permission, protocol surface, workspace and folder anchor.

**A secret was exposed.** Revoke it immediately, create a replacement with least privilege and remove the exposed value from logs and history.

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Connect with WebDAV](/integrations/webdav)
- [Use rclone](/integrations/rclone)
