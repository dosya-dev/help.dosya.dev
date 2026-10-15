---
{
  "articleId": "hc-cli-upload-directory",
  "locale": "en",
  "revision": 4,
  "title": "Upload a directory with the Dosya CLI",
  "summary": "Run the recursive upload command and keep its transfer summary. Verify that the destination contains the expected directory structure.",
  "category": "developers",
  "articleSlug": "cli-upload-directory",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli upload directory",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Upload a directory with the Dosya CLI** in Dosya. The main action is to run the recursive upload command and keep its transfer summary; the decisive check is whether the destination contains the expected directory structure.

<figure class="help-screenshot"><a href="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp" alt="Workflow for “Upload a directory with the Dosya CLI”: run the recursive upload command and keep its transfer summary; the destination contains the expected directory structure." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload a directory with the Dosya CLI”: run the recursive upload command and keep its transfer summary; the destination contains the expected directory structure. <a href="/screenshots/cli-upload-directory-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify small local directory and remote destination.

## Steps: upload a directory with the Dosya CLI

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate small local directory and remote destination and verify its name or identifying details.
3. Run the recursive upload command and keep its transfer summary.
4. Confirm that the destination contains the expected directory structure.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Upload a directory with the Dosya CLI”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload a directory with the Dosya CLI”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a test profile and avoid exposing credentials through command history or verbose logs.

## Verify the result

After completing the steps, check the expected result: The destination contains the expected directory structure.

## Expected result

The controlled workflow completes and the destination contains the expected directory structure.

## Troubleshooting

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
