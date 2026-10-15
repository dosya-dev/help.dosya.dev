---
{
  "articleId": "hc-api-complete-upload-session",
  "locale": "en",
  "revision": 5,
  "title": "Complete and verify an API upload",
  "summary": "Upload every multipart segment, complete the session once, recover a lost response through status, and confirm the returned file record safely.",
  "category": "developers",
  "articleSlug": "api-complete-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/upload/[sessionId]/complete.ts, apps/api/src/pages/api/upload/[sessionId]/status.ts, apps/api/src/pages/api/upload/[sessionId]/part/[partNumber].ts, apps/api/src/lib/upload/stale-multiparts.ts, and apps/api/src/pages/api/billing/cron.ts. Production status: the revised completion workflow has not yet been rechecked live.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api complete upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Multipart completion turns uploaded parts into a file record. It applies only when session creation returned a non-null `resumable` object; a small single-PUT upload finishes on its upload URL instead.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-complete-upload-session-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" alt="Four panels show checking uploaded part numbers, posting the multipart completion, recovering a lost receipt through status, and validating the returned file id and byte count." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show checking uploaded part numbers, posting the multipart completion, recovering a lost receipt through status, and validating the returned file id and byte count. <a class="workflow-map-full" href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-complete-upload-session-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before completion

Upload parts to `PUT /api/upload/:sessionId/part/:partNumber`. Part numbers start at 1 and cannot exceed `total_parts`. Build every nonfinal body at exactly the returned `part_size`; the final body must be nonempty and may be shorter. The current part size is 10 MiB, and no body may exceed that ceiling. Repeating a part number already accepted returns `already_uploaded:true` with the stored ETag instead of sending the bytes again.

`GET /api/upload/:sessionId/status` reports `status`, `size_bytes`, `part_size`, `total_parts`, `bytes_uploaded`, the numeric `uploaded_parts` array, and `has_multipart`. Its `file_id` stays null until completion succeeds.

## Steps

1. Fetch the session status and compare `uploaded_parts` with every number from 1 through `total_parts`.
2. Resend only missing parts, preserving the exact nonfinal `part_size` and accepting `already_uploaded:true` as success for a prior retry.
3. Call `POST /api/upload/:sessionId/complete` without a JSON body after every required part is present.
4. Save the HTTP 201 response's `file.id`, actual `size_bytes`, `version`, `etag`, name, extension, MIME type, region, and creation time.
5. If the completion response is lost, request the status endpoint before retrying; `status:"complete"` and its non-null `file_id` recover the outcome.
6. Fetch `GET /api/files/:fileId` with a read-capable credential or confirm the result in Dosya, then compare the destination, filename, and actual byte count.

## Completion responses

A successful multipart completion returns `content_hash:null` and `hash_verified:false`. That Boolean means the assembled parts were not checked against a client digest; it does not mean a checksum mismatch occurred.

Dosya refuses an unknown session with `Upload session not found`. It returns `No multipart upload in progress - upload at least one part first` when no storage multipart exists, and `Only X of Y parts uploaded. Upload remaining parts before completing.` for an incomplete set. A repeated completion returns 409 `Upload session is already complete`. A stale claim can answer `Upload session is no longer active - start the upload again`.

A pending, uploading, or failed multipart session becomes eligible for stale cleanup after 24 hours without activity; that is not a guaranteed sweep time. Later upload initialization can schedule cleanup, and the hourly billing job runs a bounded D1-home pass. Durable Object-home sessions depend on later member activity, while the storage lifecycle aborts unfinished multipart state seven days after initiation as a backstop.

For D1-home workspaces, the billing job removes completed and failed session rows after seven days, so status-based recovery of a lost completion response is bounded by that retention window. The cited cleanup path does not establish the same row-retention period for Durable Object-home sessions; recover a lost receipt promptly while the status route still resolves. Pending rows have a separate 600-second stale cutoff in cleanup paths, and an unrenewed credential transfer slot self-heals after 15 minutes. Completion releases that slot. The final storage and database write cannot be rolled back through the upload session; subsequent removal uses the normal file trash and purge workflow.

A live same-name file can be adopted as a new version. Use a unique destination name when the requirement is a separate file.

## Expected result

One HTTP 201 response identifies the completed file and reports the bytes counted from uploaded parts. A later status request returns `status:"complete"` and the same file identifier.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Complete and verify an API upload”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Complete and verify an API upload”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
