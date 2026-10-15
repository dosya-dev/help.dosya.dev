---
{
  "articleId": "hc-api-rename-file",
  "locale": "en",
  "revision": 5,
  "title": "Rename a file through the REST API",
  "summary": "Rename a file by ID with exact filename validation, preserve its parent and identity, and resolve lock, permission, or same-folder conflicts safely.",
  "category": "developers",
  "articleSlug": "api-rename-file",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/rename.ts, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/lib/repo/resolve.ts, apps/api/src/lib/db.ts, apps/api/src/middleware.ts, and apps/api/src/lib/validation-policy.generated.ts. Production was not changed.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api rename file",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
`PUT /api/files/:id/rename` changes the stored name while keeping the file ID, parent, and version history. The extension is part of `name`; changing it can change how clients classify or preview the file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-rename-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-rename-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" alt="Four workflow panels show reading the current file, building the validated name body, interpreting the rename receipt, and re-reading the same ID and parent." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers reading the current file, building the validated name body, interpreting the rename receipt, and re-reading the same ID and parent. <a class="workflow-map-full" href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-rename-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a full-access API key and a workspace role with `rename_files`.
- Read the current file so you know its ID, parent, lock state, and existing name.
- Choose a name of 1–255 characters after trimming. It cannot contain `/`, `\`, C0 control characters, or consist entirely of `.` or `..`.

## Steps

1. Fetch `GET /api/files/file_id` and preserve its parent ID. If an extension matters, include the desired extension explicitly in the new name.
2. Build the exact JSON body, for example `{"name":"Q4 forecast.pdf"}`. Quotes and angle brackets are accepted; clients must still escape JSON correctly.
3. Send `PUT /api/files/file_id/rename` with bearer authorization and `Content-Type: application/json`. Keep this call separate from unrelated batch work.
4. Require HTTP 200 and `{ "ok": true, "name": "Q4 forecast.pdf" }`. Treat 400 as invalid input, 403 as scope, role, or lock refusal, 404 as unavailable, and 409 as a sibling name collision.
5. Read the same file ID again and confirm `name` changed while the parent ID did not. Carry a returned `X-D1-Bookmark` for D1-backed checks, without treating it as an ordering guarantee for workspace-object content.
6. Open or download the renamed file when the extension changed. That check catches automation that accidentally changed the suffix even though the bytes remained intact.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for rename a file through the rest api." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Rename a file through the REST API”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The success receipt echoes the normalized name. A fresh metadata read shows the same file ID and parent with the new name; its versions remain attached to that ID.

## Troubleshooting

**The server returns 400.** Trim the value and check length, slash, backslash, control-character, `.` and `..` rules.

**The server returns 409.** A sibling already uses the requested name. Choose another name or resolve that sibling before a new request.

**The server returns 403.** Confirm full key scope, `rename_files`, and that the file is not locked against the caller.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
