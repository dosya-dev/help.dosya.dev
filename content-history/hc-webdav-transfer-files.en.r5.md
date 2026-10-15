---
{
  "articleId": "hc-webdav-transfer-files",
  "locale": "en",
  "revision": 5,
  "title": "Upload and download files over WebDAV",
  "summary": "Upload and download files through Dosya WebDAV, verify sizes or checksums, and understand scopes, multipart handling, versions, and transfer errors.",
  "category": "integrations",
  "articleSlug": "webdav-transfer-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webdav/methods/put.ts, apps/api/src/lib/webdav/methods/get.ts, apps/api/src/lib/webdav/utils.ts, apps/api/src/lib/usage/enforce.ts, apps/api/src/lib/versioned-write.ts, and apps/api/src/pages/webdav/[...path].ts. No production file transfer was run.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-cyberduck"
  ],
  "keywords": [
    "webdav transfer files",
    "WebDAV mounted-drive operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
WebDAV PUT uploads to the real tree under **All** or an anchored root, while GET downloads from real paths and the flat smart views. **Read only** can download but cannot upload; **Upload only** can upload but cannot download; a client that must verify in both directions needs **Full access** plus the matching workspace permissions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-transfer-files-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" alt="Four-step workflow for choosing a writable real-tree folder, completing one PUT, comparing its name size and checksum, and downloading known bytes to a new local name." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for choosing a writable real-tree folder, completing one PUT, comparing its name size and checksum, and downloading known bytes to a new local name. <a class="workflow-map-full" href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-transfer-files-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Dosya requires `Content-Length` on uploads, streams files above 50 MiB as 10 MiB multipart parts, and checks the actual byte count before commit. Workspace extension/size policy, storage quota, key or role file-size limits, and concurrency limits can reject the transfer before or during byte movement.

## Steps

1. Mount the labelled workspace endpoint with the key-owner email and API key, then open **All** or the anchored root. Choose a writable destination and a uniquely named local sample.
2. Confirm the key and role can upload, and check remaining storage plus any maximum file size. Upload the sample and wait for the client to receive the final PUT response.
3. Refresh the destination and compare name and size in Dosya Files. If the client sends `OC-Checksum` with SHA-256/MD5 or `Content-MD5`, Dosya rejects a mismatch with **Checksum mismatch: the bytes received do not match the digest the client declared**.
4. Choose a known remote file that the role may download, save it under a new local name, and wait for completion. Dosya supports one byte range at a time and returns 206 for a valid ranged download.
5. Compare the downloaded size and calculate a local checksum against the trusted source or uploaded sample. Do not assume the displayed modification date alone proves identical content.
6. Reconnect or relist once to verify persistence. Remove disposable files only after the two-way check, because a permitted WebDAV delete moves cloud content to Trash and revokes its share links.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview whose Browse card explicitly lists Open, edit, save files for mounted-drive transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV overview whose Browse card explicitly lists Open, edit, save files for mounted-drive transfers. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A PUT without length returns 411; invalid length returns 400; policy or scope refusal returns 403; a too-large file returns 413; quota exhaustion returns 507; protected content returns 423; and usage/concurrency refusal returns 429 with `Retry-After`. An upload body shorter or longer than declared is rejected rather than recorded at the wrong size.

Uploading to an existing name creates the next version and changes the current bytes after ETag preconditions pass. `If-Match` and `If-None-Match` can return 412 when another client changed or created the target. Verify state before replaying an ambiguous write.

## Expected result

The uploaded file appears in the intended Dosya folder with the declared size, the downloaded copy contains the expected bytes, and any checksum comparison passes. Scope, policy, lock, quota, precondition, and usage failures remain distinguishable by their exact status and message.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Connect Dosya to Cyberduck](/integrations/webdav-cyberduck)
