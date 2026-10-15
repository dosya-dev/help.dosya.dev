---
{
  "articleId": "hc-api-list-files",
  "locale": "en",
  "revision": 4,
  "title": "List files with the REST API",
  "summary": "Send a workspace-scoped list request and inspect the response, then verify that the response contains only accessible items.",
  "category": "developers",
  "articleSlug": "api-list-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api list files",
    "REST API file workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to list files with the REST API in the intended account or workspace.

A list request returns only items allowed by the key’s workspace, folder and read scope. Pagination may require additional requests for a complete set.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-list-files-workflow-map-2026-10-14.webp" alt="Four-step interface map for list files with the rest api, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the REST API files endpoint in the current released Dosya client.
- Confirm the active account and workspace, then identify a read-scoped test key.

## Steps: list files with the REST API

1. Open the REST API files endpoint and confirm the active workspace.
2. Select a read-scoped test key and check its name or identifying details.
3. Send a workspace-scoped list request and inspect the response.
4. Verify that the response contains only accessible items.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Use a disposable key with the narrowest scope and a non-production workspace. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Compare the response with a known folder, inspect pagination fields and confirm an inaccessible path is not returned.

## Expected result

The workflow completes for the controlled test and the response contains only accessible items.

## Troubleshooting

**The expected control is missing.** Return to the REST API files endpoint, confirm the active workspace and check that your role permits the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
