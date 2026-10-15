---
{
  "articleId": "hc-remote-download-errors",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a failed remote download",
  "summary": "Use the exact startup toast or failed-row reason to separate URL, size, quota, lock, source, HTTP, and network failures before creating a new job.",
  "category": "integrations",
  "articleSlug": "remote-download-errors",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Troubleshoot a failed remote download” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/pages/api/remote-downloads/index.ts`, `apps/api/src/lib/remote-download/types.ts`, `apps/api/src/lib/remote-download/durable-object.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download",
    "hc-storage-usage"
  ],
  "keywords": [
    "remote download errors",
    "Remote download operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Remote-download failures happen either before submission or after a job exists. Startup refusals stay in the **Could not start download** toast; transfer failures remain as a **Failed** row with a specific reason.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-errors-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-errors-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-errors-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-errors-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-errors-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Troubleshoot a failed remote download: Separate a startup toast from a job failure, a rejected create has no job row. Check size and validators for a resumable source, require ranges and a strong ETag. Repair the retryable origin or network cause, create a new job after the fix. Verify Done and the destination bytes, dismiss history only after the file check." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows troubleshoot a failed remote download from “Separate a startup toast from a job failure, a rejected create has no job row.” through “Check size and validators for a resumable source, require ranges and a strong ETag.” and “Repair the retryable origin or network cause, create a new job after the fix.”, ending with “Verify Done and the destination bytes, dismiss history only after the file check.”. <a class="workflow-map-full" href="/screenshots/remote-download-errors-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-errors-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-errors-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

| Released message | What it means |
| --- | --- |
| **Address not allowed** | The URL or a redirect violates the public HTTPS address rules. |
| **Not a direct file link** | The probe received HTML or XHTML. |
| **Unknown file size** | No positive safe total came from `Content-Range` or `Content-Length`. |
| **File too large** | The source exceeds 1 TB for resumable range mode or 10 GiB for stream mode. |
| **Not enough storage** | Submission or completion could not reserve destination quota. |
| **File changed on the source server** | Validator or byte count changed after the probe. |
| **Connection to the source failed** | Network retries were exhausted. |
| **Destination is a locked backup** | Final registration targeted a locked WordPress backup tree. |
| **Source returned HTTP N** | The origin returned that terminal status. |

## Before you start

Keep the failed row visible and record its filename, start time, byte progress, and exact reason. The table lists at most the newest 50 non-dismissed jobs.

## Steps

1. Decide whether the error appeared in the startup toast or in a created job row; this determines whether any transfer and daily-cap entry exists.
2. For URL errors, validate direct HTTPS access, public DNS, redirects, response content type, and a reliable positive size.
3. For **File too large**, use a range-capable source with a strong ETag for files up to 1 TB; otherwise the one-pass stream ceiling is 10 GiB.
4. For quota or lock failures, free capacity or select an unlocked folder before retrying, because the same failed job has no Retry action.
5. For network or HTTP failures, fix the origin first. Retryable `429` and `5xx` responses use 5, 10, 20, 40, and 80-second delays before the sixth failure becomes terminal.
6. Start one replacement job, watch its three-second page updates, and verify **Done** plus the destination file before dismissing the old row.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Troubleshoot a failed remote download”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot a failed remote download”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The corrected request either creates a new queued job or exposes the remaining limit with its exact message. Failed rows do not resume; the new submission is the recovery unit.

Dosya permits three active downloads per workspace and 20 created jobs in a rolling 24 hours. Dismissing a terminal row hides it but does not remove it from the daily count.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
