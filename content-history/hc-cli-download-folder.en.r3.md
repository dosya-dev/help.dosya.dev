---
{
  "articleId": "hc-cli-download-folder",
  "locale": "en",
  "revision": 3,
  "title": "Download a folder with the Dosya CLI",
  "summary": "Run the recursive download and compare file names and sizes. Verify that the local tree matches the remote selection.",
  "category": "developers",
  "articleSlug": "cli-download-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli download folder",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Download a folder with the Dosya CLI** in Dosya. The main action is to run the recursive download and compare file names and sizes; the decisive check is whether the local tree matches the remote selection.

<figure class="help-screenshot"><a href="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow map for download a folder with the dosya cli, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for download a folder with the dosya cli: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cli-download-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify small remote folder and empty local destination.

## Steps: download a folder with the Dosya CLI

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate small remote folder and empty local destination and verify its name or identifying details.
3. Run the recursive download and compare file names and sizes.
4. Confirm that the local tree matches the remote selection.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for terminal-based file operations and automation." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a test profile and avoid exposing credentials through command history or verbose logs. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The local tree matches the remote selection.

## Expected result

The controlled workflow completes and the local tree matches the remote selection.

## Troubleshooting

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
