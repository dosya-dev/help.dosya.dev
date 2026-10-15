---
{
  "articleId": "hc-api-get-file-metadata",
  "locale": "en",
  "revision": 5,
  "title": "Fetch file metadata by API identifier",
  "summary": "Fetch one file record by identifier, interpret every returned metadata field and null value, and separate missing, hidden, locked, and denied responses.",
  "category": "developers",
  "articleSlug": "api-get-file-metadata",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/lib/repo/types.ts, apps/api/src/pages/api/files/[id]/index.content-hash.unit.test.ts, and apps/api/src/pages/api/files/[id]/index.folder-lock.unit.test.ts. Production status: the updated field list has not yet been revalidated against a live response.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api get file metadata",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The single-file endpoint returns identity, storage, location, version, visibility, and collaboration counts in one record. Null fields are valid data, not necessarily a failed lookup.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-get-file-metadata-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" alt="Four panels show obtaining a trusted file id, calling the metadata endpoint, matching identity and byte fields, and handling null, locked, hidden, or denied outcomes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show obtaining a trusted file id, calling the metadata endpoint, matching identity and byte fields, and handling null, locked, hidden, or denied outcomes. <a class="workflow-map-full" href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-get-file-metadata-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access requirements

Call `GET https://api.dosya.dev/api/files/:id` with a **Read only** or **Full access** key permitted on **REST API**. The key may be workspace-pinned, but a folder anchor makes REST unavailable. The current member role must include `access_files`.

## Steps

1. Obtain a known `file_…` id from a trusted list, upload response, or webhook and keep its expected workspace alongside it.
2. Send `GET /api/files/:id` with the bearer header and require JSON rather than following a UI-formatted value.
3. Match `file.id`, `workspace_id`, `folder_id`, and `name` to the record the integration selected.
4. Compare `size_bytes`, `mime_type`, `extension`, `region`, `current_version`, `etag`, and `content_hash` with the operation being verified.
5. Interpret `created_at` and `updated_at` as Unix seconds, and allow nullable values such as `uploader_name` or `content_hash`.
6. Record the metadata needed by the application, omit visibility or identity details from public logs, and handle 403/404 by their exact body.

## Returned file fields

A successful body is `{ok:true,file:{…}}`. The file object includes `id`, `name`, `size_bytes`, `mime_type`, `extension`, `region`, `uploaded_by`, `uploader_name`, `created_at`, `updated_at`, `deleted_at`, `lock_mode`, `is_hidden`, `hidden_mode`, `current_version`, `workspace_id`, `folder_id`, `content_hash`, `etag`, `share_count`, and `comment_count`.

`content_hash:null` is expected for work that has not yet received a verified or lazy-computed hash. A missing uploader row can make `uploader_name` null while `uploaded_by` remains present.

## Expected result

HTTP 200 returns the same file id and workspace expected by the caller, with byte size and version metadata suitable for an integrity or synchronization decision.

## Troubleshooting

`Missing file ID` is a 400 route-input error. `File not found` may indicate absence or a privacy-preserving hidden/confinement decision. A 403 can name membership, files-page permission, member-folder confinement, full-folder lock, key scope, surface, or workspace pin. Do not convert these distinct conditions into a generic retry loop.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Fetch file metadata by API identifier”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fetch file metadata by API identifier”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
