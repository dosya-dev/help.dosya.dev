---
{
  "articleId": "hc-cli-json-output",
  "locale": "en",
  "revision": 3,
  "title": "Use JSON output from the Dosya CLI",
  "summary": "Enable JSON output and pipe it to a parser in a controlled test. Verify that the command returns machine-readable data and a useful exit status.",
  "category": "developers",
  "articleSlug": "cli-json-output",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli json output",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Use JSON output from the Dosya CLI** in Dosya. The main action is to enable JSON output and pipe it to a parser in a controlled test; the decisive check is whether the command returns machine-readable data and a useful exit status.

<figure class="help-screenshot"><a href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-json-output-help-workflow-2026-10-14.webp" alt="Four-step workflow map for use json output from the dosya cli, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for use json output from the dosya cli: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cli-json-output-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify read-only list or status command.

## Steps: use JSON output from the Dosya CLI

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate read-only list or status command and verify its name or identifying details.
3. Enable JSON output and pipe it to a parser in a controlled test.
4. Confirm that the command returns machine-readable data and a useful exit status.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for terminal-based file operations and automation." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test profile and avoid exposing credentials through command history or verbose logs. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The command returns machine-readable data and a useful exit status.

## Expected result

The controlled workflow completes and the command returns machine-readable data and a useful exit status.

## Troubleshooting

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
