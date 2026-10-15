---
{
  "articleId": "hc-api-stream-download",
  "locale": "en",
  "revision": 5,
  "title": "Stream an API download to disk",
  "summary": "Follow Dosya’s guarded download redirect without forwarding the API key, stream storage bytes to disk, and validate the saved file against metadata.",
  "category": "developers",
  "articleSlug": "api-stream-download",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/files/[id]/download.ts, apps/api/src/pages/api/files/[id]/download-url.ts, apps/api/src/pages/api/files/[id]/raw.ts, and apps/api/src/lib/download-ttl.ts. Production was not downloaded from.",
  "related": [
    "hc-api-list-files",
    "hc-api-errors-pagination"
  ],
  "keywords": [
    "api stream download",
    "REST API read workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
The standard download route authorizes the request, then returns HTTP 302 to a five-minute presigned storage URL. The raw route stays on Dosya and supports byte ranges. These are distinct contracts; a 302 response is not itself a file stream.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-stream-download-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-stream-download-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-stream-download-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-stream-download-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-stream-download-help-workflow-2026-10-14.webp" alt="Four workflow panels show recording file metadata, capturing the guarded 302 URL, streaming without the Dosya credential, and validating the byte count." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers recording file metadata, capturing the guarded 302 URL, streaming without the Dosya credential, and validating the byte count. <a class="workflow-map-full" href="/screenshots/api-stream-download-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-stream-download-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-stream-download-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- A read-scoped API key is sufficient, but the workspace role must expose the Files page and include `download_files`.
- Know the file ID. Add `version=N` for a previous version or `ut=token` only when your flow received an unlock token.
- Write to a temporary local path so an interrupted response never replaces a known-good file.

## Steps

1. Fetch metadata first and record the expected name and size. Refuse the job if the selected version or unlock context is not the one the caller intended.
2. Request `GET /api/files/file_id/download` without automatic redirect handling. Require 302 and read `Location`; the signed URL normally expires after 300 seconds.
3. Open `Location` as a separate request without `Authorization` or the Dosya API key. Stream response chunks into the temporary file instead of buffering the full object.
4. Alternatively, call `GET /api/files/file_id/download-url`; its JSON contains `url`, `size`, `name`, and `region`. A requested TTL defaults to 300 seconds and is capped at 3600.
5. For resumable byte transfer, use `GET /api/files/file_id/raw` with `Range: bytes=start-`. Expect 206 and `Accept-Ranges`; a range outside the object returns 416.
6. After the stream closes, compare bytes written with metadata or the download-url `size`. Rename the temporary file into place only after validation.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for stream an api download to disk." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Stream an API download to disk”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client stores the complete object without exposing its API credential to the storage host. A full download matches the expected byte count; a resumed raw request returns the correct remaining range.

## Troubleshooting

**The first response is 302.** That is the standard route’s success contract. Follow `Location` in a credential-free request.

**The signed URL expired.** Request a new URL after reauthorizing; do not edit its query string.

**The raw request returns 416.** Compare the local partial size with the current remote size. Restart when the partial file exceeds or belongs to another version.

## Related guides

- [List files with the API](/developers/api-list-files)
- [Handle API errors](/developers/api-errors-pagination)
