---
{
  "articleId": "hc-cli-verify-scheduled-job",
  "locale": "en",
  "revision": 4,
  "title": "Verify a scheduled CLI job",
  "summary": "Set explicit paths and profile, capture output and exit status, run once with disposable data, and verify the Dosya result. Verify that the unattended environment performs the intended action and records a trustworthy result.",
  "category": "developers",
  "articleSlug": "cli-verify-scheduled-job",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli verify scheduled job",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Verify a scheduled CLI job** in Dosya. The main action is to set explicit paths and profile, capture output and exit status, run once with disposable data, and verify the Dosya result; the decisive check is whether the unattended environment performs the intended action and records a trustworthy result.

<figure class="help-screenshot"><a href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp" alt="Workflow for “Verify a scheduled CLI job”: set explicit paths and profile, capture output and exit status, run once with disposable data, and verify the Dosya result; the unattended environment performs the intended action and records a trustworthy result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify a scheduled CLI job”: set explicit paths and profile, capture output and exit status, run once with disposable data, and verify the Dosya result; the unattended environment performs the intended action and records a trustworthy result. <a href="/screenshots/cli-verify-scheduled-job-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify tested CLI command running in cron or CI.

## Steps: verify a scheduled CLI job

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate tested CLI command running in cron or CI and verify its name or identifying details.
3. Set explicit paths and profile, capture output and exit status, run once with disposable data, and verify the Dosya result.
4. Confirm that the unattended environment performs the intended action and records a trustworthy result.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Verify a scheduled CLI job”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a scheduled CLI job”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use restricted profiles, structured output, and exit codes so scripts can fail safely.

## Verify the result

After completing the steps, check the expected result: The unattended environment performs the intended action and records a trustworthy result.

## Expected result

The controlled workflow completes and the unattended environment performs the intended action and records a trustworthy result.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
