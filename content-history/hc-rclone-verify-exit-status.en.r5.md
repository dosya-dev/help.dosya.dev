---
{
  "articleId": "hc-rclone-verify-exit-status",
  "locale": "en",
  "revision": 5,
  "title": "Verify an rclone automation exit status",
  "summary": "Capture rclone’s immediate process status, preserve its final errors and compare destination bytes before automation records a transfer as successful.",
  "category": "integrations",
  "articleSlug": "rclone-verify-exit-status",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/help/src/content/articles/rclone-copy.md, apps/help/src/content/articles/rclone-download.md, apps/api/src/lib/webdav/methods/get.ts, and apps/api/src/lib/webdav/methods/put.ts. Exit handling was documented without a production transfer.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone verify exit status",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Capture rclone’s status immediately after the command, before another shell command overwrites it. Exit `0` means that run reports no remaining errors; it can also mean nothing needed transferring and is not content proof.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" alt="Four-step workflow for running a logged copy, capturing immediate status, running a separate byte comparison, and requiring both statuses to pass." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for running a logged copy, capturing immediate status, running a separate byte comparison, and requiring both statuses to pass. <a class="workflow-map-full" href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-verify-exit-status-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Run the scheduled or manual copy with a durable log and statistics, keeping source and destination explicit.
2. In POSIX shells assign `status=$?` on the next line; in PowerShell assign `$status = $LASTEXITCODE` before listing or checking anything else.
3. Preserve the final transfer summary and every preceding error. A multi-file failure can leave earlier files successfully stored.
4. If `status` is nonzero, mark the job failed and inspect the destination before retrying. Do not erase the log or replay the whole batch automatically.
5. When the copy status is zero, run a separate read-only comparison such as `rclone check SOURCE DESTINATION --download`; capture that command’s status independently.
6. Report success only when both statuses are zero and representative destination bytes match. Store the run time, paths, rclone version and counts with the receipt.

For Dosya WebDAV, a successful same-name PUT creates a new file version. A later error does not roll that version back. Likewise, a `copy` leaves destination-only files in place; their presence is not evidence that this run processed the source.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Verify an rclone automation exit status”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify an rclone automation exit status”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Automation records success only after the transfer process and independent comparison both exit cleanly, with logs that identify the exact run. Any nonzero status retains its evidence and blocks downstream success actions.

A shell pipeline can hide rclone’s code behind another process unless its status is captured correctly. Test the wrapper with an intentional missing source before trusting alerts, then remove that test path.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
