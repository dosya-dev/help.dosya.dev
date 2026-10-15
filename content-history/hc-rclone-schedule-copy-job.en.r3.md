---
{
  "articleId": "hc-rclone-schedule-copy-job",
  "locale": "en",
  "revision": 3,
  "title": "Schedule an rclone copy job",
  "summary": "Use absolute executable and config paths, set a controlled working directory, capture exit status, and run the schedule once. Verify that the scheduled job produces the same verified result as the manual test.",
  "category": "integrations",
  "articleSlug": "rclone-schedule-copy-job",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Schedule an rclone copy job** in Dosya. The main action is to use absolute executable and config paths, set a controlled working directory, capture exit status, and run the schedule once; the decisive check is whether the scheduled job produces the same verified result as the manual test.

<figure class="help-screenshot"><a href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp"><img src="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp" alt="Four-step workflow map for schedule an rclone copy job, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for schedule an rclone copy job: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/rclone-schedule-copy-job-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal with an rclone remote for Dosya in the current released client.
- Confirm the active account and workspace, then identify tested copy command and protected runtime environment.

## Steps: schedule an rclone copy job

1. Open a terminal with an rclone remote for Dosya and confirm the active account and workspace.
2. Locate tested copy command and protected runtime environment and verify its name or identifying details.
3. Use absolute executable and config paths, set a controlled working directory, capture exit status, and run the schedule once.
4. Confirm that the scheduled job produces the same verified result as the manual test.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya rclone integration overview for scripted file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a dedicated restricted remote, a dry run, and durable logs for scheduled jobs. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The scheduled job produces the same verified result as the manual test.

## Expected result

The controlled workflow completes and the scheduled job produces the same verified result as the manual test.

## Troubleshooting

**The expected control is missing.** Return to a terminal with an rclone remote for Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
