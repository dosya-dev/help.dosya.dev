---
{
  "articleId": "hc-api-create-upload-session",
  "locale": "en",
  "revision": 5,
  "title": "Create a REST API upload session",
  "summary": "Start a REST API upload with the correct destination, size, scope, and multipart settings, then inspect the returned session before sending bytes.",
  "category": "developers",
  "articleSlug": "api-create-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/upload/init.ts, apps/api/src/lib/upload/body-pipeline.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/lib/upload/upload-page-gate.unit.test.ts, and src/pages/developer/api.astro. Production status: the new session instructions remain pending live verification.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api create upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Create an upload session only after the destination and credential boundaries are known. The REST base is `https://api.dosya.dev/api`, and requests authenticate with `Authorization: Bearer dos_…`.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-create-upload-session-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-create-upload-session-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" alt="Four panels show choosing a workspace and folder, posting upload-init fields, checking the 201 session, and branching to single PUT or 10 MiB multipart transfer." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing a workspace and folder, posting upload-init fields, checking the 201 session, and branching to single PUT or 10 MiB multipart transfer. <a class="workflow-map-full" href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-create-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-create-upload-session-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements

Use an **Upload only** or **Full access** key that permits the **REST API** surface. A workspace pin is compatible with REST; a folder anchor is not. Folder-anchored keys are rejected before the upload route runs.

An ordinary REST upload requires both `upload_files` and `access_upload` in the current workspace role. Only the SFTP gateway bypasses the upload-page gate because its separate `access_sftp` permission governs that surface. Dosya can answer `You don't have upload permission in this workspace` or `You don't have access to the upload page` when either REST role gate fails.

## Steps

1. Choose the destination workspace and, when the file belongs below a folder, record that folder's `fld_…` identifier.
2. Send `POST /api/upload/init` with JSON containing `workspace_id`, `file_name`, and the byte value `file_size`; add `folder_id` only for a non-root destination.
3. Add `mime_type` when known. It defaults to `application/octet-stream`; `file_id` and `expected_version` are for deliberate version replacement, while `force_multipart` must be a Boolean.
4. Check the 201 response for the same workspace, sanitized filename, declared size, MIME type, extension, region, and a new `session_id`.
5. Read `resumable`: `null` means send one PUT to `upload_url`; an object means use its `part_upload_url`, `complete_url`, and `status_url` values.
6. Store the session details beside the local transfer state, then begin sending bytes only after the returned destination and transfer mode match the intended upload.

## Request rules and limits

A filename is sanitized before validation and may contain at most 255 characters. Supply an accurate numeric `file_size`; omission is treated as zero, and a negative value is refused. `expected_version`, when present, must be a non-negative integer. `force_multipart:true` requires a file larger than zero bytes.

Files above 50 MiB use multipart automatically. A smaller file can opt in with `force_multipart:true`. Multipart sessions use 10 MiB parts and report `total_parts`; smaller ordinary sessions return `resumable:null`.

Initialization also checks storage quota, the credential's maximum file size, workspace extension and size policies, per-member storage, the destination folder, locks, and concurrency. There is no separate `Idempotency-Key` header for this endpoint.

## Expected result

The API returns HTTP 201 with `ok:true`, a unique `session_id`, `upload_url`, normalized file details, and either a multipart instruction object or `resumable:null`. No file is complete merely because the session exists.

## Troubleshooting

`workspace_id is required`, `file_name is required`, and `file_size must not be negative` identify malformed input. `force_multipart must be a boolean` and `force_multipart requires a file_size greater than 0` explain multipart setup errors. A 403 mentioning a folder anchor means the key must be recreated without that REST-incompatible restriction.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create a REST API upload session”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a REST API upload session”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
