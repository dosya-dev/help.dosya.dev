---
{
  "articleId": "hc-api-key-upload-only",
  "locale": "en",
  "revision": 5,
  "title": "Create an upload-only Dosya API key",
  "summary": "Create an Upload only REST key, start and finish a file transfer without list access, and verify the result through the response or another trusted view.",
  "category": "developers",
  "articleSlug": "api-key-upload-only",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/lib/access/rest-scope.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/lib/upload/upload-page-gate.unit.test.ts, apps/api/src/pages/api/upload/init.ts, apps/api/src/pages/api/upload/[sessionId]/status.ts, apps/api/src/pages/api/upload/[sessionId]/complete.ts, apps/api/src/pages/api/folders/index.ts, and apps/web/src/lib/api-keys.ts. Production status: the Upload only transaction and denial checks have not yet been rerun live.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key upload only",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
An **Upload only** REST credential can create folders and run an upload transaction, including its status request. It cannot list the file afterward with that same key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-upload-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-upload-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-upload-only-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-upload-only-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-upload-only-help-workflow-2026-10-14.webp" alt="Four panels show creating an Upload only REST key, initializing a uniquely named transfer, saving its completion receipt, and confirming GET files is rejected." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show creating an Upload only REST key, initializing a uniquely named transfer, saving its completion receipt, and confirming GET files is rejected. <a class="workflow-map-full" href="/screenshots/api-key-upload-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-upload-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-upload-only-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Compatible configuration

The permission card reads **Add new files. Cannot read or delete what is already there.** Select the **REST API** surface and use a workspace pin when possible. A folder anchor blocks REST entirely, so choose the destination with `folder_id` in each upload-init body instead.

An ordinary REST upload requires both `upload_files` and `access_upload` in the workspace role. Only SFTP bypasses `access_upload` because `access_sftp` controls that gateway. Creating a destination folder additionally needs `create_folders`.

## Steps

1. Open **Profile → API keys**, press **New API key**, name the ingest job, and choose **Upload only**.
2. Under **Restrictions and expiry**, enable **REST API**, pin the destination workspace, and leave the folder anchor unset.
3. Generate the one-time secret, then start a small unique-named test with `POST /api/upload/init` and the intended `folder_id`.
4. Send the bytes through the returned single-PUT or multipart URLs and preserve the completion response's `file.id` and actual `size_bytes`.
5. Attempt `GET /api/files?workspace_id=wks_…` with the upload credential and require the scope refusal rather than a listing.
6. Verify the new file through its completion receipt, the Dosya UI, or a separate trusted read credential, then revoke the test key if it is disposable.

## Allowed and denied operations

The complete `/api/upload` prefix is write capability, even its GET status route, so the key that created a session can resume it. `POST /api/folders` is also write capability. Ordinary reads, moves, deletions, and management mutations are outside Upload only.

The denied listing reads `This credential's scope is 'upload' and cannot perform GET /api/files`. Surface, pin, role, size, quota, extension, lock, and concurrency rules can refuse an upload earlier with their own messages.

A same-name live file can become a new version during completion. Use a unique destination name for create-only ingest. Completion commits storage and file metadata; removing the result later requires the normal trash workflow.

## Expected result

The upload receipt identifies the stored file, the destination is verified through an independent view, and the same key receives a 403 when it attempts to enumerate workspace files.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create an upload-only Dosya API key”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create an upload-only Dosya API key”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
