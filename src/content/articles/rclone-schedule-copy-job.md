---
{
  "articleId": "hc-rclone-schedule-copy-job",
  "locale": "en",
  "revision": 5,
  "title": "Schedule an rclone copy job",
  "summary": "Schedule a tested rclone copy with absolute paths, a protected config, durable logs and explicit exit capture, then verify the first unattended run.",
  "category": "integrations",
  "articleSlug": "rclone-schedule-copy-job",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/help/src/content/articles/rclone-copy.md, apps/help/src/content/articles/rclone-copy-vs-sync.md, apps/web/src/pages/integrations/webdav.tsx, and apps/api/src/lib/webdav/auth.ts. Production behavior for “Schedule an rclone copy job” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-rclone-copy",
    "hc-rclone-sync-dry-run"
  ],
  "keywords": [
    "rclone schedule copy job",
    "rclone automation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Schedule only an already verified `rclone copy` command. `copy` is additive for destination-only paths, but it can still replace a same-named Dosya file with a new version, so isolate the destination and retain logs.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" alt="Four-step workflow for verifying a manual copy, using absolute protected paths, creating a non-overlapping schedule, and checking its first run." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for verifying a manual copy, using absolute protected paths, creating a non-overlapping schedule, and checking its first run. <a class="workflow-map-full" href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" data-light-href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Run the exact command manually with `--dry-run`, then without it on one harmless file. Verify the destination before introducing a scheduler.
2. Find absolute paths for the rclone executable, source, config file and log directory. A scheduler can have a different PATH, home and working directory from your terminal.
3. Put the tested command in a protected script with absolute paths for rclone, source, remote, config and log file.
4. Prevent overlap with the previous run using the platform’s lock or single-instance facility. Keep the API key in the restricted config rather than the crontab or command history.
5. Add the POSIX cron entry or Windows Task Scheduler action under the intended service account, with the script’s absolute path and a deliberate working directory.
6. Trigger the schedule once now. Capture its exit status, read the fresh log, list the Dosya destination and compare one downloaded sample before waiting for the normal interval.

A POSIX script can run `/usr/local/bin/rclone copy /srv/export dosya-webdav:All/nightly --config /etc/rclone/dosya.conf --log-file /var/log/rclone/nightly.log --log-level INFO`.

A folder- or workspace-limited key reduces the scheduler’s reach but cannot exceed the member’s permissions. Revoking that key stops future runs; it does not delete files already copied. Replacing a same-name file appends version history and uses storage.


<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Reference for “Schedule an rclone copy job”: Dosya rclone overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Schedule an rclone copy job”: Dosya rclone overview page. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The scheduler’s first unattended execution uses the intended config and paths, produces a durable log and verified destination, and records failure whenever the transfer or its verification command fails.

`Unknown remote`, `config file not found` and local source errors usually reveal a different service-account environment. Fix that environment instead of copying the secret into a globally readable location.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
