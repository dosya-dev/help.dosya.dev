---
{
  "articleId": "hc-cli-use-secret-without-printing",
  "locale": "en",
  "revision": 4,
  "title": "Pass a CLI credential without printing it",
  "summary": "Load it through the documented protected input or environment mechanism, disable shell tracing, and avoid command-line history. Verify that the CLI authenticates while logs and process arguments remain free of the secret.",
  "category": "developers",
  "articleSlug": "cli-use-secret-without-printing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli use secret without printing",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Pass a CLI credential without printing it** in Dosya. The main action is to load it through the documented protected input or environment mechanism, disable shell tracing, and avoid command-line history; the decisive check is whether the CLI authenticates while logs and process arguments remain free of the secret.

<figure class="help-screenshot"><a href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp" alt="Workflow for “Pass a CLI credential without printing it”: load it through the documented protected input or environment mechanism, disable shell tracing, and avoid command-line history; the CLI authenticates while logs and process arguments remain free of the secret." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Pass a CLI credential without printing it”: load it through the documented protected input or environment mechanism, disable shell tracing, and avoid command-line history; the CLI authenticates while logs and process arguments remain free of the secret. <a href="/screenshots/cli-use-secret-without-printing-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify restricted automation credential in a secret store.

## Steps: pass a CLI credential without printing it

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate restricted automation credential in a secret store and verify its name or identifying details.
3. Load it through the documented protected input or environment mechanism, disable shell tracing, and avoid command-line history.
4. Confirm that the CLI authenticates while logs and process arguments remain free of the secret.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Reference for “Pass a CLI credential without printing it”: Dosya CLI overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Pass a CLI credential without printing it”: Dosya CLI overview page. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use restricted profiles, structured output, and exit codes so scripts can fail safely.

## Verify the result

After completing the steps, check the expected result: The CLI authenticates while logs and process arguments remain free of the secret.

## Expected result

The controlled workflow completes and the CLI authenticates while logs and process arguments remain free of the secret.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
