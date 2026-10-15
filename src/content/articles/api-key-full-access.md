---
{
  "articleId": "hc-api-key-full-access",
  "locale": "en",
  "revision": 5,
  "title": "Create a full-access API key safely",
  "summary": "Create a Full access key with explicit reach, protocol, origin, usage, and expiry guards, then prove its required mutation and configured boundary.",
  "category": "developers",
  "articleSlug": "api-key-full-access",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/components/api-keys/create-key-dialog.tsx, apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/lib/api-keys.ts, apps/api/src/pages/api/me/api-keys/s3-credentials.ts, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/lib/access/rest-scope.ts, apps/api/src/lib/kv-cache.ts, apps/api/src/lib/kv-defer.ts, and apps/api/src/middleware.ts. Production status: the revised Full access workflow is awaiting a live verification run.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key full access",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
**Full access** permits every operation class the credential can otherwise reach. It still inherits the account member's role and every configured guard.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-full-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-full-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" alt="Four panels show selecting Full access, avoiding IP restrictions for SFTP while enabling separate S3 credentials, testing required operations, and proving a configured boundary." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show selecting Full access, avoiding IP restrictions for SFTP while enabling separate S3 credentials, testing required operations, and proving a configured boundary. <a class="workflow-map-full" href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-full-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Decide whether Full access is required

The UI describes this permission as **Everything your account can do: read, upload, move, delete.** Choose it for a client that must perform management mutations such as rename, move, share creation, or deletion. A read/reporting client or ingest-only job should use a narrower permission.

## Steps

1. Go to **Profile → API keys**, press **New API key**, and enter a purpose-specific name in **What is it for?**.
2. Under **What can it do?**, select **Full access** and read the **most permissive** badge before continuing.
3. Open **Restrictions and expiry**, choose only the protocol doors the client uses, and pin one workspace when whole-account reach is unnecessary.
4. Configure allowed IP ranges, active hours, usage ceilings, and a 30- or 90-day expiry when those controls fit the client; do not add an IP range to a key that must use SFTP.
5. Press **Generate key** and store the one-time `dos_…` value. For S3, expand the row, choose **Enable** under **S3 credentials**, and save the separate Access key ID, one-time secret, endpoint, and region before testing.
6. Cross one harmless configured boundary, such as an excluded protocol or different workspace, and require refusal before allowing production data.

## Effective permission

Full access does not override the current member role, workspace policy, a workspace or folder pin, hidden and locked data, protocol selection, IP or time conditions, usage limits, plan ceilings, or backup locks. Each applicable rule narrows the request.

Folder anchoring is valid only for WebDAV and S3. For REST management, use a workspace pin without a folder anchor. An IP-restricted key cannot use SFTP because the proxy cannot verify the person's source address. Keys cannot be edited after creation; **Duplicate settings** creates a new secret when restrictions need to change.

The `dos_…` value appears only in the **is ready** dialog, and an S3 secret appears only when its credentials are enabled. Revocation irreversibly deletes the key row and schedules invalidation of REST and S3 cache entries. A cached authentication result can survive for up to five minutes, so stop the client and verify that every retired credential is rejected before treating the cutoff as complete.

## Expected result

The credential completes the specific management mutation and read its client requires, while the deliberately excluded workspace, protocol, origin, or time window remains inaccessible.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create a full-access API key safely”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a full-access API key safely”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
