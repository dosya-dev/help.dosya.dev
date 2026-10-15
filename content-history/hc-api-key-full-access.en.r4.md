---
{
  "articleId": "hc-api-key-full-access",
  "locale": "en",
  "revision": 4,
  "title": "Create a full-access API key safely",
  "summary": "Choose Full only after reviewing every restriction and storing the secret securely. Verify that the key performs required changes only inside its configured scope.",
  "category": "developers",
  "articleSlug": "api-key-full-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key full access",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Create a full-access API key safely** in Dosya. The main action is to choose Full only after reviewing every restriction and storing the secret securely; the decisive check is whether the key performs required changes only inside its configured scope.

<figure class="help-screenshot"><a href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp"><img src="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp" alt="Workflow for “Create a full-access API key safely”: choose Full only after reviewing every restriction and storing the secret securely; the key performs required changes only inside its configured scope." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Create a full-access API key safely”: choose Full only after reviewing every restriction and storing the secret securely; the key performs required changes only inside its configured scope. <a href="/screenshots/api-key-full-access-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Profile > Integrations > API keys in the current released client.
- Confirm the active account and workspace, then identify permission selector for an integration that truly needs changes.

## Steps: create a full-access API key safely

1. Open Profile > Integrations > API keys and confirm the active account and workspace.
2. Locate permission selector for an integration that truly needs changes and verify its name or identifying details.
3. Choose Full only after reviewing every restriction and storing the secret securely.
4. Confirm that the key performs required changes only inside its configured scope.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Create a full-access API key safely”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a full-access API key safely”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Create a separate narrowly scoped key for each integration and never paste it into screenshots.

## Verify the result

After completing the steps, check the expected result: The key performs required changes only inside its configured scope.

## Expected result

The controlled workflow completes and the key performs required changes only inside its configured scope.

## Troubleshooting

**The expected control is missing.** Return to Profile > Integrations > API keys, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
