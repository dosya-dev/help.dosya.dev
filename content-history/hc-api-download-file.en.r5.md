---
{
  "articleId": "hc-api-download-file",
  "locale": "en",
  "revision": 5,
  "title": "Download a file with the REST API",
  "summary": "Request the authorized download URL and fetch it promptly, then verify that downloaded bytes match the source file.",
  "category": "developers",
  "articleSlug": "api-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api download file",
    "REST API file workflows",
    "Dosya help",
    "file transfer"
  ]
}
---
Use this workflow to download a file with the REST API in the intended account or workspace.

Check credential scope and endpoint access for a read-scoped key and test file. Use a limited test credential for a read-scoped key and test file; redact secrets from commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-download-file-workflow-map-2026-10-14.webp" alt="Workflow for “Download a file with the REST API”: request the authorized download URL and fetch it promptly; verify that downloaded bytes match the source file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Download a file with the REST API”: request the authorized download URL and fetch it promptly; verify that downloaded bytes match the source file. <a class="workflow-map-full" href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the REST API download workflow in the current released Dosya client.
- Confirm the active account and workspace, then identify a read-scoped key and test file.

## Steps: download a file with the REST API

1. Open the REST API download workflow and confirm the active workspace.
2. Select a read-scoped key and test file and check its name or identifying details.
3. Request the authorized download URL and fetch it promptly.
4. Verify that downloaded bytes match the source file.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Reference for “Download a file with the REST API”: Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Reference for “Download a file with the REST API”: Dosya API-key permission selector showing the access granted to an integration. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a disposable key with the narrowest scope and a non-production workspace.

## Verify the result

Verify that downloaded bytes match the source file.

## Expected result

The workflow completes for the controlled test and downloaded bytes match the source file.

## Troubleshooting

**The expected control is missing.** Return to the REST API download workflow, confirm the active workspace and check that your role permits the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
