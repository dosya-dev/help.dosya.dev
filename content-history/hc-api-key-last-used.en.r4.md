---
{
  "articleId": "hc-api-key-last-used",
  "locale": "en",
  "revision": 4,
  "title": "Review when a Dosya API key was last used",
  "summary": "Compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration. Verify that unused or unexpected credentials are identified for rotation or revocation.",
  "category": "developers",
  "articleSlug": "api-key-last-used",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key last used",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Review when a Dosya API key was last used** in Dosya. The main action is to compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration; the decisive check is whether unused or unexpected credentials are identified for rotation or revocation.

<figure class="help-screenshot"><a href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp"><img src="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp" alt="Workflow for “Review when a Dosya API key was last used”: compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration; unused or unexpected credentials are identified for rotation or revocation." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Review when a Dosya API key was last used”: compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration; unused or unexpected credentials are identified for rotation or revocation. <a href="/screenshots/api-key-last-used-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Profile > Integrations > API keys in the current released client.
- Confirm the active account and workspace, then identify existing key row in API key settings.

## Steps: review when a Dosya API key was last used

1. Open Profile > Integrations > API keys and confirm the active account and workspace.
2. Locate existing key row in API key settings and verify its name or identifying details.
3. Compare its name, creation time, last-used time, expiry, scope, and restrictions with the owning integration.
4. Confirm that unused or unexpected credentials are identified for rotation or revocation.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Review when a Dosya API key was last used”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review when a Dosya API key was last used”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Create a separate narrowly scoped key for each integration and never paste it into screenshots.

## Verify the result

After completing the steps, check the expected result: Unused or unexpected credentials are identified for rotation or revocation.

## Expected result

The controlled workflow completes and unused or unexpected credentials are identified for rotation or revocation.

## Troubleshooting

**The expected control is missing.** Return to Profile > Integrations > API keys, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
