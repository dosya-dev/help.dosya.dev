---
{
  "articleId": "hc-api-upload-file",
  "locale": "en",
  "revision": 4,
  "title": "Upload a file with the REST API",
  "summary": "Create the upload, transfer bytes and complete it, then verify that the returned file appears in the target folder.",
  "category": "developers",
  "articleSlug": "api-upload-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api upload file",
    "REST API file workflows",
    "Dosya help",
    "file transfer"
  ]
}
---
Use this workflow to upload a file with the REST API in the intended account or workspace.

The main checks are the credential scope, endpoint and requested operation. Use a narrowly scoped test credential and keep secrets out of commands, logs and screenshots.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" alt="Four-step interface map for upload a file with the rest api, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the REST API upload workflow in the current released Dosya client.
- Confirm the active account and workspace, then identify an upload-scoped key and small test file.

## Steps: upload a file with the REST API

1. Open the REST API upload workflow and confirm the active workspace.
2. Select an upload-scoped key and small test file and check its name or identifying details.
3. Create the upload, transfer bytes and complete it.
4. Verify that the returned file appears in the target folder.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Use a disposable key with the narrowest scope and a non-production workspace. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the returned file appears in the target folder.

## Expected result

The workflow completes for the controlled test and the returned file appears in the target folder.

## Troubleshooting

**The expected control is missing.** Return to the REST API upload workflow, confirm the active workspace and check that your role permits the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
