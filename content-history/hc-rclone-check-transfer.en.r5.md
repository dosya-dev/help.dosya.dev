---
{
  "articleId": "hc-rclone-check-transfer",
  "locale": "en",
  "revision": 5,
  "title": "Verify an rclone transfer with checksums",
  "summary": "Compare a completed rclone WebDAV transfer by downloaded bytes, record missing or differing paths, and treat a clean command exit as one check.",
  "category": "integrations",
  "articleSlug": "rclone-check-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/help/src/content/articles/rclone-download.md, apps/api/src/lib/webdav/methods/get.ts, apps/api/src/lib/webdav/xml.ts, and apps/api/src/lib/webdav/methods/get.content-headers.unit.test.ts. Commands were not run against production storage.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone check transfer",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A successful copy summary is not a byte comparison. For the released Dosya WebDAV workflow, use a separate local destination and `rclone check --download` so the generic `other` backend reads content instead of assuming a compatible remote hash.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-check-transfer-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow for preserving both paths, running a downloaded-byte comparison, capturing mismatch status, and verifying one downloaded file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for preserving both paths, running a downloaded-byte comparison, capturing mismatch status, and verifying one downloaded file. <a class="workflow-map-full" href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-check-transfer-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Save the exact source and destination used by the completed transfer, including whether an ordinary remote needs the `All/` prefix or an anchored remote exposes its folder directly.
2. List both trees recursively and preserve the output before checking: `rclone lsf ./sample-source --recursive` and `rclone lsf dosya-webdav:All/rclone-checks --recursive`.
3. Run a read-only comparison: `rclone check ./sample-source dosya-webdav:All/rclone-checks --download`.
4. Add `--one-way` only when destination-only files are expected and should not count as errors. Do not use it to hide source files missing at the destination.
5. Read every missing, differing and unreadable path, then capture the immediate process status with `echo $?` or PowerShell’s `$LASTEXITCODE`.
6. Verify one downloaded file before removing its local source. The `--download` check rereads remote bytes and consumes allowance.

Dosya WebDAV can expose dates, ETags and a stored SHA-256 property, but the generic `other` backend does not guarantee a full compatible hash comparison. The explicit download comparison does not modify either tree.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Verify an rclone transfer with checksums”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify an rclone transfer with checksums”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The check exits cleanly only when every required source path has matching destination bytes. Expected destination-only items are ignored only when `--one-way` was deliberately selected, and all mismatches remain recorded for repair.

HTTP `401`, `403`, `404`, `423` and `429` failures are verification failures, not content matches. Resolve credential, permission, path, lock or Retry-After conditions before rerunning the check.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
