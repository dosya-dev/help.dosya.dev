---
{
  "articleId": "hc-api-upload-size-validation",
  "locale": "en",
  "revision": 5,
  "title": "Validate file size during an API upload",
  "summary": "Apply declared and measured upload-size gates, add SHA-256 integrity, and read the final measured byte size from Dosya’s stored-file receipt.",
  "category": "developers",
  "articleSlug": "api-upload-size-validation",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/upload/file.ts, apps/api/src/pages/api/upload/init.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/lib/upload/body-pipeline.ts, apps/api/src/lib/upload/measured-body.ts, apps/api/src/lib/upload/extension-policy.ts, apps/api/src/lib/usage/enforce.ts, and apps/api/src/middleware.ts. Production uploads were not created.",
  "related": [
    "hc-api-upload-file",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api upload size validation",
    "REST API upload sessions",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya checks the declared size before accepting bytes and measures the body while reading it. One-shot uploads require a decimal `Content-Length`; files above 50 MiB must use the upload-session flow.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-upload-size-validation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" alt="Four workflow panels show measuring the source, selecting one-shot or resumable transfer, checking SHA-256, and verifying the stored size receipt." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers measuring the source, selecting one-shot or resumable transfer, checking SHA-256, and verifying the stored size receipt. <a class="workflow-map-full" href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-upload-size-validation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Check the API key’s `max_file_size_bytes`, the workspace storage quota, and the workspace `max_file_size_gb` setting. REST uploads do not apply a role-level file-size cap.
- The key must reach the selected workspace, and the member role must allow `upload_files` plus `access_upload` for this REST upload surface.
- Compute a lowercase 64-character SHA-256 digest when end-to-end byte identity matters.
- Treat `Content-Length` as a gate, not proof of the stored size; the final receipt reflects bytes actually received.

## Steps

1. Measure the source before transfer. Use one-shot upload at or below 50 MiB; initialize a resumable upload above that boundary.
2. For one-shot transfer, send a digits-only `Content-Length`. Missing or malformed length returns 411; an amount over 50 MiB returns 413 with `Files over 50 MB use /api/upload/init and the resumable upload`.
3. Add `X-Dosya-Sha256: digest` when available. A mismatch returns 400 with `hash_mismatch` and expected and received values.
4. Send the body while retaining the status and JSON error. A measured body that crosses the allowed buffer can return 413 with `upload_declared_size_mismatch`.
5. Handle policy refusals literally: `This API key does not permit files larger than N bytes (max_file_size_bytes)`, `File exceeds the X GB size limit for this workspace`, or the storage-quota response.
6. On success, read the receipt’s actual stored size and file ID, then fetch metadata. Do not reject a successful upload merely because fewer bytes arrived than declared; decide against the measured result and digest.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for validate file size during an api upload." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Validate file size during an API upload”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

An allowed body produces a file receipt whose measured size matches metadata, and an optional SHA-256 confirms the bytes. Oversized, disallowed, or corrupt input fails before it becomes a trusted result.

## Troubleshooting

**The server returns 411.** Supply the actual decimal byte length; chunked one-shot transfer does not replace that requirement.

**The file is over 50 MiB.** Use `/api/upload/init`, 10 MiB parts, and the completion route.

**Declared and stored sizes differ.** Treat the receipt as authoritative, compare the digest, and investigate the producer before continuing.

## Related guides

- [Upload through the API](/developers/api-upload-file)
- [REST API quickstart](/developers/rest-api-quickstart)
