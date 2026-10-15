---
{
  "articleId": "hc-api-resume-upload-session",
  "locale": "en",
  "revision": 5,
  "title": "Resume an interrupted API upload",
  "summary": "Resume multipart API uploads from recorded part numbers, retry missing chunks safely, and complete only after every expected 10 MiB part has landed.",
  "category": "developers",
  "articleSlug": "api-resume-upload-session",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/upload/init.ts, apps/api/src/pages/api/upload/[sessionId]/status.ts, apps/api/src/pages/api/upload/[sessionId]/part/[partNumber].ts, apps/api/src/pages/api/upload/[sessionId]/complete.ts, apps/api/src/lib/upload/session-id.ts, apps/api/src/lib/upload/stale-multiparts.ts, apps/api/src/pages/api/billing/cron.ts, and apps/api/src/middleware.ts. Production was not exercised.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api resume upload session",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya selects multipart upload above 50 MiB. A client can request it for a smaller nonempty file with `force_multipart: true`. Multipart sessions use 10 MiB parts and resume by uploaded part number, not by a raw byte offset.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-resume-upload-session-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" alt="Four workflow panels show loading session status, uploading missing part numbers, accepting a repeated part safely, and completing after all expected parts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers loading session status, uploading missing part numbers, accepting a repeated part safely, and completing after all expected parts. <a class="workflow-map-full" href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-resume-upload-session-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Retain the `session_id`, source file, declared `file_size`, and any content hash until completion succeeds.
- Resume as the same Dosya user in the same workspace with the original session and unchanged file. The credential may be an authorized replacement API key; it does not have to be the key that initialized the session.
- An unstarted pending session becomes eligible for cleanup after 10 minutes, and multipart work can be retired after 24 hours without a landed part. The bucket’s seven-day multipart lifecycle is only a backstop, while complete or failed session rows can be pruned after seven days; status is the authority, not any promised expiry time.

## Steps

1. Call `GET /api/upload/session_id/status`. Read `status`, `size_bytes`, `part_size`, `total_parts`, `bytes_uploaded`, `uploaded_parts`, `has_multipart`, and `file_id` when completion has already produced one.
2. If status already represents completion and `file_id` is present, verify that file instead of uploading more. For an active session, compute the missing integers from 1 through `total_parts`.
3. Seek the local source to `(partNumber - 1) × part_size` and upload only each missing part to `PUT /api/upload/session_id/part/partNumber`. The final part may be shorter than 10 MiB.
4. Treat a successful repeated part response with `already_uploaded: true` as confirmation, not duplication. Re-read status after transport failures because the server may have stored the part before the connection broke.
5. Send `POST /api/upload/session_id/complete` only when status lists every expected part. If it says `Only N of M parts uploaded. Upload remaining parts before completing.`, return to the missing-part calculation.
6. Require the completion receipt’s file ID, then fetch its metadata and compare the final measured size or configured hash. Delete the local resume record only after that verification.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for resume an interrupted api upload." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Resume an interrupted API upload”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every expected part number appears in status, completion returns the stored file receipt, and a metadata read shows the finished object. Re-sending a recorded part does not add a second part.

## Troubleshooting

**Status is missing or expired.** Start a new session only after confirming the old session can no longer be resumed.

**The source file changed locally.** Abort the resume. Part numbers from one byte sequence cannot safely finish another.

**Completion reports missing parts.** Trust `uploaded_parts`, upload only absent numbers, and call complete again. Do not translate `bytes_uploaded` into a byte-offset resume.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
