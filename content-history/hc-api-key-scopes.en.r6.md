---
{
  "articleId": "hc-api-key-scopes",
  "locale": "en",
  "revision": 6,
  "title": "Choose read, upload or full API-key permission",
  "summary": "Choose Read only, Upload only, or Full access from the operation the client needs, then prove both an allowed request and a denied boundary.",
  "category": "developers",
  "articleSlug": "api-key-scopes",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/lib/api-keys.ts, apps/api/src/lib/access/rest-scope.ts, apps/api/src/lib/access/rest-scope.unit.test.ts, and apps/api/src/middleware.ts. Production status: the revised permission examples remain unverified on the live service.",
  "related": [
    "hc-api-key",
    "hc-api-key-folder",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "API key scope",
    "read key",
    "upload key",
    "full access",
    "least privilege",
    "cloud storage"
  ]
}
---
Dosya permissions are separate operation classes rather than a ladder. **Upload only** does not include reads, and enabled protocols never add missing capabilities.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-scopes-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-scopes-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-scopes-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-scopes-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-scopes-workflow-map-2026-10-14.webp" alt="Four panels compare Read only, Upload only, and Full access, map the client methods to one class, test an allowed request, and verify an operation outside the scope is refused." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels compare Read only, Upload only, and Full access, map the client methods to one class, test an allowed request, and verify an operation outside the scope is refused. <a class="workflow-map-full" href="/screenshots/api-key-scopes-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-key-scopes-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-key-scopes-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permission model

**Read only** lists and downloads. **Upload only** owns upload transactions and can create destination folders, but cannot list or delete existing data. **Full access** covers read, upload, move, delete, and other management mutations, still bounded by the member role and restrictions.

For REST, GET, HEAD, and OPTIONS normally require read. Every `/api/upload/*` route and `POST /api/folders` require write. Unclassified mutations fail closed as Full access operations.

## Steps

1. Write down the exact endpoints and methods the client will call, including verification or cleanup requests.
2. Choose **Read only** when all required work is listing or downloading, or **Upload only** when the job only ingests and can verify elsewhere.
3. Select **Full access** only when the workflow must rename, move, share, delete, or combine reads with restricted writes.
4. Add protocol, workspace, origin, usage, and expiry guards without assuming they replace the operation permission.
5. Generate the key and run one intended request whose status and output prove the chosen capability works.
6. Run one harmless request outside that class and require `This credential's scope is '<scope>' and cannot perform METHOD /path`.

## Important upload detail

The Upload only card says **Add new files. Cannot read or delete what is already there.** At the upload endpoint, a live same-name target can be adopted as a new version. Use a unique filename when the integration must never alter an existing file's version history.

A key's effective access is the intersection of permission, selected surface, workspace or folder reach, current role, IP and time conditions, usage limits, plan rules, and content locks. Full access does not bypass any of those controls.

Keys cannot be edited after creation. To narrow or widen a production credential, duplicate its available settings, generate a new secret, migrate the client, and revoke the former key after validation.

## Expected result

The selected key performs the one required operation class, the deliberate boundary request receives the exact scope refusal, and no restriction is mistaken for an additional grant.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission step with read, upload and full access choices for a least-privilege credential." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Choose the narrowest permission and validate both sides of its boundary. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Restrict a key to a folder](/developers/api-key-folder-access)
- [Limit protocol surfaces](/developers/api-key-protocols)
