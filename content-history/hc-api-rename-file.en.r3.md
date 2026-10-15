---
{
  "articleId": "hc-api-rename-file",
  "locale": "en",
  "revision": 3,
  "title": "Rename a file through the REST API",
  "summary": "Send the rename request once, fetch metadata, and confirm the extension and parent are unchanged. Verify that the same file ID reports the new name.",
  "category": "developers",
  "articleSlug": "api-rename-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api rename file",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Rename a file through the REST API** in Dosya. The main action is to send the rename request once, fetch metadata, and confirm the extension and parent are unchanged; the decisive check is whether the same file ID reports the new name.

<figure class="help-screenshot"><a href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp"><img src="/screenshots/api-rename-file-help-workflow-2026-10-14.webp" alt="Four-step workflow map for rename a file through the rest api, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for rename a file through the rest api: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-rename-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable folder in the current released client.
- Confirm the active account and workspace, then identify disposable file ID and portable new name.

## Steps: rename a file through the REST API

1. Open the Dosya REST API and a disposable folder and confirm the active account and workspace.
2. Locate disposable file ID and portable new name and verify its name or identifying details.
3. Send the rename request once, fetch metadata, and confirm the extension and parent are unchanged.
4. Confirm that the same file ID reports the new name.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for controlled file and folder changes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable data and a narrowly scoped key before automating mutations. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The same file ID reports the new name.

## Expected result

The controlled workflow completes and the same file ID reports the new name.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable folder, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
