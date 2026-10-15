---
{
  "articleId": "hc-api-upload-idempotency",
  "locale": "en",
  "revision": 5,
  "title": "Use idempotency keys for API uploads",
  "summary": "Protect one-shot uploads with a UUID-v4 idempotency key, distinguish replay from in-flight work, and reject accidental reuse for different bytes.",
  "category": "developers",
  "articleSlug": "api-upload-idempotency",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/upload/file.ts, apps/api/src/lib/upload/idempotency.ts, and apps/api/src/lib/upload/idempotency.unit.test.ts. Production uploads were not created.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api upload idempotency",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya idempotency applies to the one-shot `PUT /api/upload/file` route. Send a UUID-v4 value in `X-Dosya-Idempotency-Key`; multipart session routes have their own part-number resume contract.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-upload-idempotency-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" alt="Four workflow panels show binding one UUID-v4 key, retaining the first 201 receipt, recognizing an identical replay, and stopping when a key was reused." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers binding one UUID-v4 key, retaining the first 201 receipt, recognizing an identical replay, and stopping when a key was reused. <a class="workflow-map-full" href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-upload-idempotency-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Generate one fresh UUID v4 for one logical upload and persist it with that job until the result is verified.
- Keep workspace, folder, raw filename, and `Content-Length` unchanged across retries; these values form the request fingerprint.
- The request body must be replayable before automatic retry is enabled.

## Steps

1. Create a UUID v4 such as `3fa85f64-5717-4562-b3fc-2c963f66afa6` and associate it with the local source path and intended destination.
2. Send `PUT /api/upload/file?file_name=report.pdf&folder_id=folder_id` with the exact `Content-Length`, bearer key, body, and `X-Dosya-Idempotency-Key`.
3. On HTTP 201, store the returned file receipt. The server retains a completed idempotency record for 86,400 seconds, so a matching retry can recover the response.
4. After an ambiguous transport failure, repeat the identical request with the identical key. HTTP 200 plus `X-Dosya-Idempotent-Replay: true` means Dosya returned the earlier result without a second file.
5. For HTTP 409 with `Retry-After: 5`, another matching request is still in progress. Wait and retry; abandoned in-progress ownership can be taken over after 600 seconds.
6. For 409 with code `idempotency_key_reused`, stop. The key was paired with a different workspace, folder, raw filename, or declared length; generate a new key only for a genuinely new upload.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for use idempotency keys for api uploads." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Use idempotency keys for API uploads”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The first accepted upload returns 201. An identical replay returns the same logical result with status 200 and the replay header, while a mismatched fingerprint is refused rather than creating uncertain data.

## Troubleshooting

**The body cannot be replayed.** Spool it to a temporary file before the first request or disable automatic retries.

**The response is 409 without the reuse code.** Honor `Retry-After: 5`; do not create a new key while the original operation may still finish.

**The file bytes changed but length did not.** Use `X-Dosya-Sha256` as an integrity check and a new idempotency key for the new logical upload.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
