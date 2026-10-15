---
{
  "articleId": "hc-webhook-payload-versioning",
  "locale": "en",
  "revision": 5,
  "title": "Handle webhook payload versions",
  "summary": "Validate the current unversioned webhook envelope by event type, distinguish file version from schema version, and tolerate additive fields safely.",
  "category": "developers",
  "articleSlug": "webhook-payload-versioning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/emit.ts, apps/api/src/lib/webhooks/events.ts, apps/api/src/lib/webhooks/is-new-version-contract.unit.test.ts, apps/api/src/lib/webhooks/share-accessed-timestamp-contract.unit.test.ts, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/folders/[id]/index.ts, apps/api/src/lib/s3/operations/delete-object.ts. Production behavior for “Handle webhook payload versions” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook payload versioning",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The current Dosya webhook envelope has no schema-version field. Its stable outer shape is `id`, `type`, `created`, `workspace_id`, and `data`; `data.version` on an upload is the file version, not a payload schema version.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" alt="Four panels show validating the current unversioned envelope, branching on the event type, distinguishing file version from schema version, and accepting additive fields." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show validating the current unversioned envelope, branching on the event type, distinguishing file version from schema version, and accepting additive fields. <a class="workflow-map-full" href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-payload-versioning-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Verify the signature over the raw request body, parse JSON, and require top-level string `id`, supported `type`, numeric `created`, string `workspace_id`, and object `data`.
2. Accept only the current event types `file.uploaded`, `file.deleted`, and `share.accessed`. Route malformed or unsupported input to a durable quarantine rather than guessing at a schema. Attach the event ID only when the top-level `id` passed validation; otherwise record a receiver-generated trace ID.
3. For `file.uploaded`, validate `file_id`, `name`, byte `size`, nullable `folder_id`, integer `version`, and boolean `is_new_version`. Use that version only for ordering revisions of the named file.
4. For `file.deleted`, validate `file_id`, `name`, and boolean `permanent`. A move to trash sends `false`, while a permanent file or folder purge sends `true` for each erased file.
5. For `share.accessed`, require `share_id`, sensitive `token`, `accessed_at`, and an `access_type` of `view`, `download`, or `download_all`. A bundle `view` can have both `file_id` and `folder_id` set to `null`; validate the identifiers allowed by that access type instead of requiring one globally. Do not write the token to diagnostics.
6. Ignore additional fields your consumer does not need, then test with one extra property and one missing required property. The additive sample should process, while malformed input should be quarantined visibly without a partial side effect.

Because there is no schema version to route today, code that requires `payload.version` will reject every valid Dosya event. Branch by `type` and keep event-specific validation isolated so a future contract can be added deliberately.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Handle webhook payload versions”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle webhook payload versions”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Current payloads pass type-specific validation, additive properties do not break processing, and `data.version` remains a file revision number. Malformed events fail visibly without leaking the share token or applying partial work.

**Every payload reports an unknown version.** Remove the top-level schema-version requirement; no such field is emitted in the current implementation.

**A new field causes rejection.** Change strict object equality to required-field validation while retaining type checks for the fields your consumer uses.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
