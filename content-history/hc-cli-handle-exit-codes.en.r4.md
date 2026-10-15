---
{
  "articleId": "hc-cli-handle-exit-codes",
  "locale": "en",
  "revision": 4,
  "title": "Handle Dosya CLI exit codes",
  "summary": "Capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis. Verify that the script stops or retries according to the actual command result.",
  "category": "developers",
  "articleSlug": "cli-handle-exit-codes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli handle exit codes",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Handle Dosya CLI exit codes** in Dosya. The main action is to capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis; the decisive check is whether the script stops or retries according to the actual command result.

<figure class="help-screenshot"><a href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp" alt="Workflow for “Handle Dosya CLI exit codes”: capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis; the script stops or retries according to the actual command result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Handle Dosya CLI exit codes”: capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis; the script stops or retries according to the actual command result. <a href="/screenshots/cli-handle-exit-codes-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify scripted CLI command with success and controlled failure cases.

## Steps: handle Dosya CLI exit codes

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate scripted CLI command with success and controlled failure cases and verify its name or identifying details.
3. Capture the exit code immediately, branch on success or failure, and preserve redacted standard error for diagnosis.
4. Confirm that the script stops or retries according to the actual command result.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Handle Dosya CLI exit codes”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle Dosya CLI exit codes”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use restricted profiles, structured output, and exit codes so scripts can fail safely.

## Verify the result

After completing the steps, check the expected result: The script stops or retries according to the actual command result.

## Expected result

The controlled workflow completes and the script stops or retries according to the actual command result.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
