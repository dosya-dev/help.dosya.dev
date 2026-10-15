---
{
  "articleId": "hc-cli-review-config",
  "locale": "en",
  "revision": 4,
  "title": "Review Dosya CLI configuration",
  "summary": "Show the current endpoint, workspace, and credential source without printing the secret. Verify that the CLI context matches the intended environment.",
  "category": "developers",
  "articleSlug": "cli-review-config",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-install",
    "hc-cli-transfer"
  ],
  "keywords": [
    "cli review config",
    "Advanced Dosya CLI workflows",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Review Dosya CLI configuration** in Dosya. The main action is to show the current endpoint, workspace, and credential source without printing the secret; the decisive check is whether the CLI context matches the intended environment.

<figure class="help-screenshot"><a href="/screenshots/cli-review-config-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-review-config-help-workflow-2026-10-14.webp" alt="Workflow for “Review Dosya CLI configuration”: show the current endpoint, workspace, and credential source without printing the secret; the CLI context matches the intended environment." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Review Dosya CLI configuration”: show the current endpoint, workspace, and credential source without printing the secret; the CLI context matches the intended environment. <a href="/screenshots/cli-review-config-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify active CLI profile and configuration.

## Steps: review Dosya CLI configuration

1. Open the Dosya CLI and confirm the active account and workspace.
2. Locate active CLI profile and configuration and verify its name or identifying details.
3. Show the current endpoint, workspace, and credential source without printing the secret.
4. Confirm that the CLI context matches the intended environment.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Review Dosya CLI configuration”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review Dosya CLI configuration”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a test profile and avoid exposing credentials through command history or verbose logs.

## Verify the result

After completing the steps, check the expected result: The CLI context matches the intended environment.

## Expected result

The controlled workflow completes and the CLI context matches the intended environment.

## Troubleshooting

**The expected control is missing.** Return to the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Transfer with the CLI](/developers/cli-transfer)
