---
{
  "articleId": "hc-api-key-read-only",
  "locale": "en",
  "revision": 5,
  "title": "Create a read-only Dosya API key",
  "summary": "Create a Read only key for listing and downloads, apply compatible reach controls, and prove that an attempted folder creation is refused by scope.",
  "category": "developers",
  "articleSlug": "api-key-read-only",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/lib/api-keys.ts, apps/api/src/lib/access/rest-scope.ts, apps/api/src/lib/access/rest-scope.unit.test.ts, apps/api/src/middleware.ts, apps/api/src/pages/api/folders/index.ts, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/lib/kv-cache.ts, and apps/api/src/lib/kv-defer.ts. Production status: live Read only scope checks have not yet been repeated for this text.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key read only",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
A **Read only** credential can list and download but cannot open upload transactions or change stored data. Use it for reporting, backup reads, or inventory jobs.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-read-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-read-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-read-only-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-read-only-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-read-only-help-workflow-2026-10-14.webp" alt="Four panels show choosing Read only, limiting the REST key to one workspace, succeeding on GET files, and receiving the scope 403 from POST folders." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing Read only, limiting the REST key to one workspace, succeeding on GET files, and receiving the scope 403 from POST folders. <a class="workflow-map-full" href="/screenshots/api-key-read-only-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-read-only-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-read-only-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Configure compatible reach

The permission card says **List and download. Cannot upload, move or delete anything.** For a REST client, select **REST API** and optionally pin one workspace. Do not choose a folder anchor for REST because anchored credentials work only through WebDAV or S3.

The current role still needs `access_files`, and hidden or locked resources remain subject to their normal gates.

## Steps

1. Open **Profile → API keys**, select **New API key**, and give the reporting or download client a distinct name.
2. Choose **Read only** under **What can it do?**, then open **Restrictions and expiry**.
3. Permit **REST API**, pin the intended workspace when possible, and set origin, usage, or expiry controls appropriate to the job.
4. Press **Generate key**, copy the secret once, and store it in the client's credential mechanism.
5. Prove the allowed side with `GET /api/files?workspace_id=wks_…` and confirm the response contains the expected listing.
6. Prove the denied side with a disposable `POST /api/folders`; require a scope 403 and confirm no folder was created.

## Scope boundary

REST treats GET, HEAD, and OPTIONS as read capability. Documented bulk-download POST routes are classified as reads because they return existing bytes. Upload endpoints and `POST /api/folders` require write capability; rename, move, share, and delete operations generally require Full access.

The denied folder request reads `This credential's scope is 'read' and cannot perform POST /api/folders`. A different 403 can still come from surface, pin, role, or lock rules and should be diagnosed separately.

Revocation irreversibly deletes the key row and schedules REST/S3 cache invalidation. Cached authentication can remain valid for up to five minutes, so stop the client and verify that the retired secret is refused before considering access closed. Keep a production read credential only after the intended list/download action and its mutation refusal both pass.

## Expected result

The credential returns permitted metadata or downloads, while the harmless create test is rejected before data changes and the workspace boundary remains intact.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create a read-only Dosya API key”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a read-only Dosya API key”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
