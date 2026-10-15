---
{
  "articleId": "hc-api-move-file",
  "locale": "en",
  "revision": 5,
  "title": "Move a file through the REST API safely",
  "summary": "Move a file atomically with the REST API, handle scope, lock, and name conflicts, then verify its stable ID and parent with route-specific reads.",
  "category": "developers",
  "articleSlug": "api-move-file",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/move.ts, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/files/index.ts, apps/api/src/lib/repo/resolve.ts, apps/api/src/lib/db.ts, and apps/api/src/middleware.ts. Production was not changed or exercised.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api move file",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
`PUT /api/files/:id/move` changes a file’s parent without changing its ID or versions. Send `folder_id` as a destination folder ID, or `null` for the workspace root. Add `name` only when the same atomic request should also rename the file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-move-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-move-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-move-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-move-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-move-file-help-workflow-2026-10-14.webp" alt="Four workflow panels show recording the file and destination IDs, building the move body, interpreting the 200 or refusal, and verifying the returned parent." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers recording the file and destination IDs, building the move body, interpreting the 200 or refusal, and verifying the same file ID under its returned parent. <a class="workflow-map-full" href="/screenshots/api-move-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-move-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-move-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a full-access REST API key; read-only and upload-only keys cannot move files.
- Your workspace role must include `upload_files`. A request that also supplies `name` requires `rename_files`.
- Record the file ID, its current folder, and the destination folder. Pick a disposable file when testing automation.
- The destination must belong to the same workspace and must be visible to the caller.

## Steps

1. Read the file and destination first. Record the file ID, current parent, and exact destination ID before sending the mutation.
2. Prepare JSON with the destination: `{"folder_id":"folder_destination"}`. Use `{"folder_id":null}` for root, or add `"name":"renamed.pdf"` for a combined move and rename.
3. Send `PUT /api/files/file_id/move` with `Authorization: Bearer $DOSYA_API_KEY` and `Content-Type: application/json`. Do not retry blindly after a lost response.
4. Require HTTP 200 and read `{ "ok": true, "name": "…" }`. A 400 can mean the file is already in that folder, 403 covers permission or lock refusal, 404 hides an unavailable resource, and 409 reports a same-folder name conflict.
5. Send `GET /api/files/file_id` and confirm the same ID reports the intended `folder_id` and optional new name. Carry `X-D1-Bookmark` when the mutation returned one, but treat it only as ordering for D1-backed reads; file content metadata can come from the workspace repository.
6. List both the former and destination parents if downstream work depends on membership. Continue only when the old parent omits the ID and the destination contains it.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for move a file through the rest api safely." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Move a file through the REST API safely”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The API returns 200 with `ok: true`; a route-specific metadata read shows the original file ID under the chosen parent. A combined rename exposes the supplied name in that verified result.

## Troubleshooting

**The request returns 409.** Choose a different `name`, or resolve the existing item in the destination before retrying.

**The request returns 403.** Check `upload_files`, add `rename_files` for a combined rename, and inspect lock state. Changing API-key scope does not bypass a workspace role or lock.

**The response was lost.** Read the file before sending another mutation. The move route has no idempotency key; a verified destination means the first request already committed.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
