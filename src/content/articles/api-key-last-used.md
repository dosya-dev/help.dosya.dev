---
{
  "articleId": "hc-api-key-last-used",
  "locale": "en",
  "revision": 5,
  "title": "Review when a Dosya API key was last used",
  "summary": "Use the API-key table’s Last used signal as a coarse activity clue, correlate it with the owning client, and revoke only after confirming it is unused.",
  "category": "developers",
  "articleSlug": "api-key-last-used",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/lib/api-keys.ts, apps/api/src/middleware.ts, apps/api/src/pages/webdav/[...path].ts, apps/api/src/pages/s3/[...path].ts, apps/api/src/lib/usage-throttle.ts, and apps/api/src/lib/usage-throttle.unit.test.ts. Production status: live Last used display timing has not yet been sampled for this revision.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key last used",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The **Last used** column is designed for credential hygiene. It is a delayed activity clue, not a request-by-request audit record and not proof that a client has been retired.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-last-used-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-last-used-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" alt="Four panels show finding the exact key row, expanding its configuration, correlating the coarse Last used value with client evidence, and revoking only after a quiet period." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show finding the exact key row, expanding its configuration, correlating the coarse Last used value with client evidence, and revoking only after a quiet period. <a class="workflow-map-full" href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-last-used-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the table shows

Open **Profile → API keys**. Each row displays Name, Permission, Protocols, Reach, and Last used. Expanding a row also shows Created, Expires, IP allowlist, active hours, and a masked key fingerprint.

`Never` means the server has no `last_used_at` value. The summary marks a key **unused for 90+ days** when its last recorded use is older than 90 days; a never-used credential is compared with `created_at` instead.

## Steps

1. Search by the key's name or masked prefix and expand the matching row rather than judging a similarly named credential.
2. Compare Permission, Protocols, Reach, Created, Expires, and guard details with the client inventory maintained by its owner.
3. Read **Last used** as an approximate timestamp and note whether the 90-day stale indicator is present.
4. Check the integration's own logs and Dosya API-key Analytics for expected recent calls without copying the secret into diagnostics.
5. Disable or replace the credential in its client first, then observe an appropriate quiet period for scheduled or infrequent jobs.
6. Select **Revoke** only after ownership is resolved, accept the irreversible warning, and monitor the client for an unexpected refusal.

## Why the value can lag

REST, SFTP, WebDAV, and S3 update `last_used_at` as best-effort background telemetry. SFTP reaches the REST middleware through its classified gateway request, so its accepted traffic touches the same key field. Writes are throttled to at most once per key per 15 minutes in each running isolate. A request can therefore succeed without moving the displayed value immediately, and separate isolates can write on their own windows.

Use Analytics or application evidence when an exact request history matters. The Last used field is appropriate for finding candidates, not for proving absence.

## Expected result

Each stale or unexpected key has an identified owner and client evidence. Revoked rows correspond only to integrations confirmed inactive or already migrated to a replacement credential.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Review when a Dosya API key was last used”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review when a Dosya API key was last used”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
