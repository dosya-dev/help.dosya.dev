---
{
  "articleId": "hc-api-folder-operations",
  "locale": "en",
  "revision": 5,
  "title": "Create and move folders with the REST API",
  "summary": "Create a folder, move one test item into it and list the result, then verify that the API reports the intended parent relationship.",
  "category": "developers",
  "articleSlug": "api-folder-operations",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api folder operations",
    "REST API file workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to create and move folders with the REST API in the intended account or workspace.

Check credential scope and endpoint access for a scoped test workspace. Use a limited test credential for a scoped test workspace; redact secrets from commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" alt="Workflow for “Create and move folders with the REST API”: create a folder, move one test item into it and list the result; verify that the API reports the intended parent relationship." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Create and move folders with the REST API”: create a folder, move one test item into it and list the result; verify that the API reports the intended parent relationship. <a class="workflow-map-full" href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-folder-operations-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-folder-operations-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the REST API folder endpoints in the current released Dosya client.
- Confirm the active account and workspace, then identify a scoped test workspace.

## Steps: create and move folders with the REST API

1. Open the REST API folder endpoints and confirm the active workspace.
2. Select a scoped test workspace and check its name or identifying details.
3. Create a folder, move one test item into it and list the result.
4. Verify that the API reports the intended parent relationship.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Reference for “Create and move folders with the REST API”: Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create and move folders with the REST API”: Dosya API-key permission selector showing the access granted to an integration. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a disposable key with the narrowest scope and a non-production workspace.

## Verify the result

Verify that the API reports the intended parent relationship.

## Expected result

The workflow completes for the controlled test and the API reports the intended parent relationship.

## Troubleshooting

**The expected control is missing.** Return to the REST API folder endpoints, confirm the active workspace and check that your role permits the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
