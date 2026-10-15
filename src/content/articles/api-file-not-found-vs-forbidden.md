---
{
  "articleId": "hc-api-file-not-found-vs-forbidden",
  "locale": "en",
  "revision": 5,
  "title": "Distinguish unavailable and unauthorized API files",
  "summary": "Interpret file 404 and 403 responses without probing unrelated identifiers, leaking a hidden resource, or mistaking a permissions failure for deletion.",
  "category": "developers",
  "articleSlug": "api-file-not-found-vs-forbidden",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/lib/access/files-page.ts, apps/api/src/pages/api/files/[id]/member-anchor.homes.unit.test.ts, and apps/api/src/pages/api/files/[id]/index.folder-lock.unit.test.ts. Production status: live 403 and 404 response sampling has not yet followed this rewrite.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api file not found vs forbidden",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
A file request can return 404 to avoid disclosing a resource, so status alone cannot prove whether a record was deleted. Diagnose only identifiers your integration already received legitimately.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14.webp" alt="Four panels show starting from a trusted file id, checking key and workspace context, preserving the exact 403 or 404 body, and resolving it without identifier probing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show starting from a trusted file id, checking key and workspace context, preserving the exact 403 or 404 body, and resolving it without identifier probing. <a class="workflow-map-full" href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-file-not-found-vs-forbidden-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What each response can mean

For `GET /api/files/:id`, 404 `File not found` covers an unknown or unresolvable id, a file hidden from this requester, and a WordPress-site key aimed outside its site folder. That shared answer prevents existence disclosure.

A resolved file can return 403 `Access denied` when its workspace membership is missing. Other 403 bodies identify a narrower cause: `You don't have access to the files page`, `This file is outside the folder you're confined to`, a structured `folder_locked` result, workspace-pin mismatch, or API-key scope and surface rejection.

## Steps

1. Start with a file id previously returned to the same integration and note the expected workspace, folder, and key identity.
2. Confirm that the credential is complete, unexpired, allowed on the REST API surface, and not anchored to a folder.
3. Compare its workspace pin with the known file workspace and check that the current member still belongs there.
4. Request `GET /api/files/:id`, retaining the exact status and redacted error body rather than collapsing both into “missing.”
5. For 403, resolve the named scope, surface, pin, role, confinement, or lock rule; for 404, check trusted application state and the Dosya UI instead of probing adjacent ids.
6. Retry the known id only after correcting the relevant condition, then treat a continuing privacy-preserving 404 as unavailable to that caller.

## Safe client behavior

Do not enumerate guessed `file_…` values to distinguish the cases. A hidden file deliberately behaves as absent. A folder-anchored ordinary API key is refused on all REST file requests before this handler, even when its anchor contains the file; use WebDAV or S3 for that credential design.

The structured locked response is HTTP 403 with `error:"folder_locked"`, its `folder_id`, and `lock_mode:"full_lock"`. It gives a caller with legitimate access enough information to follow the unlock flow while a hidden file remains a 404.

## Expected result

The client preserves privacy by treating 404 as unavailable, surfaces precise 403 causes to an authorized operator, and never uses unrelated identifiers to infer whether private data exists.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Distinguish unavailable and unauthorized API files”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Distinguish unavailable and unauthorized API files”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
