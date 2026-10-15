---
{
  "articleId": "hc-rclone-limit-transfer-concurrency",
  "locale": "en",
  "revision": 5,
  "title": "Limit rclone transfer concurrency",
  "summary": "Reduce parallel rclone files and download streams, run a controlled WebDAV copy, and use Retry-After evidence to choose a stable concurrency.",
  "category": "integrations",
  "articleSlug": "rclone-limit-transfer-concurrency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/help/src/content/articles/rclone-copy.md, apps/help/src/content/articles/rclone-download.md, apps/api/src/pages/webdav/[...path].usage-placement.unit.test.ts, and apps/api/src/lib/webdav/methods/get.ts. No load test reached production.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone limit transfer concurrency",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Rclone normally moves four files in parallel. Large remote-to-local files can additionally open four range streams above the 256 MiB cutoff, so `--transfers 1` alone does not guarantee one active Dosya download.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14.webp" alt="Four-step workflow for checking direction with dry-run, limiting transfers and checkers, disabling multithread streams, and preserving Retry-After." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for checking direction with dry-run, limiting transfers and checkers, disabling multithread streams, and preserving Retry-After. <a class="workflow-map-full" href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-limit-transfer-concurrency-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Start with one non-confidential folder and record the current command, rclone version, direction and any API-key or role transfer limit.
2. Preview the same paths with `--dry-run`; concurrency changes do not repair a reversed source and destination.
3. For uploads or ordinary copies, begin with `--transfers 1 --checkers 2`. Increase one value at a time only after a clean measured run.
4. For Dosya-to-local downloads, add `--multi-thread-streams 0` when one file must use one range stream: `rclone copy dosya-webdav:All/sample ./sample-download --transfers 1 --multi-thread-streams 0 --progress`.
5. Watch for HTTP `429` and preserve its `Retry-After` value. Lowering concurrency does not bypass daily egress, storage, request-rate or per-file-size limits.
6. Capture elapsed time, final errors and exit status. Keep the smallest settings that meet the job’s deadline without repeated throttling.

Each streaming WebDAV GET, including a range request, acquires its own usage slot. Protocol traffic avoids plan-imposed call/concurrency ceilings, while explicit key and role limits still apply. Uploads remain subject to storage and file-policy gates.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Limit rclone transfer concurrency”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Limit rclone transfer concurrency”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled transfer completes with no unexplained `429`, timeout or slot refusal, and the recorded flags bound both parallel files and, for downloads, streams inside a large file.

If the server supplies a retry delay, wait for it rather than starting overlapping runs. A clean low-concurrency sample followed by failures at a higher value is evidence to return to the last stable setting, not to add unbounded retries.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
