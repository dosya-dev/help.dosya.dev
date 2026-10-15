---
{
  "articleId": "hc-rclone-retry-timeout",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot rclone retries and timeouts",
  "summary": "Classify rclone WebDAV authentication, lock, rate and timeout failures, apply bounded retries, and verify before repeating a possibly partial run.",
  "category": "integrations",
  "articleSlug": "rclone-retry-timeout",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/pages/webdav/[...path].ts, apps/api/src/lib/webdav/auth.ts, apps/api/src/lib/webdav/methods/put.ts, apps/api/src/lib/webdav/methods/backup-lock.unit.test.ts, and apps/help/src/content/articles/rclone-copy.md. Only local failure contracts were reviewed; no production retry or transfer was exercised.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-download"
  ],
  "keywords": [
    "rclone retry timeout",
    "Advanced rclone workflows",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
First separate permanent WebDAV refusals from transient failures. Authentication, scope, permissions, path and locks require correction; `429` and selected service failures can justify a delayed, bounded retry.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14.webp" alt="Four-step workflow for recording the verbose failure, repairing permanent refusals, honoring Retry-After, and checking destination before replay." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for recording the verbose failure, repairing permanent refusals, honoring Retry-After, and checking destination before replay. <a class="workflow-map-full" href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-retry-timeout-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Re-run the failing command once with `-vv --log-file /protected/path/rclone.log`, then record the first HTTP status and message without exposing credentials.
2. Stop retrying `401 Unauthorized`, `403`, `404 Resource not found`, or `423 Locked`. Repair the key/email, protocol or role permission, path, or Dosya lock first.
3. For `429`, honor `Retry-After` and ensure another scheduler instance is not running. Reduce `--transfers` and `--checkers` when parallel requests caused the limit.
4. For transport timeouts or transient server errors, choose finite controls such as `--retries 3 --low-level-retries 3 --timeout 1m`; retain the log and final exit status.
5. Before replaying a write, list the destination. WebDAV replacement can already have created a new file version even when the client lost the response.
6. Retry the smallest failed subset, then compare names, sizes and representative bytes. Do not mark the job complete from a later successful item alone.

Dosya returns `503` with `Retry-After: 5` when a WebDAV mutation loses the repository busy-retry budget. A `429` can represent request, transfer or egress policy. Increasing the client timeout cannot fix an expired key, locked item or exhausted daily allowance.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Troubleshoot rclone retries and timeouts”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Troubleshoot rclone retries and timeouts”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A corrected run uses a finite retry budget, respects server timing, avoids a tight parallel loop and ends with verified destination content. Permanent refusals remain stopped until their underlying gate changes.

A nonzero run can leave earlier files or versions committed because a multi-file operation is not transactional. Preserve logs and inspect the destination before another attempt, especially after a timeout on a PUT.

## Related guides

- [Copy with rclone](/integrations/rclone)
- [Download with rclone](/integrations/rclone-download)
