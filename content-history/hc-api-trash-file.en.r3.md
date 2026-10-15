---
{
  "articleId": "hc-api-trash-file",
  "locale": "en",
  "revision": 3,
  "title": "Move a file to Deleted items through the API",
  "summary": "Send the documented delete or trash operation, then confirm it leaves the active folder and appears in Deleted items when supported. Verify that the item enters the recoverable deleted state.",
  "category": "developers",
  "articleSlug": "api-trash-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api trash file",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Move a file to Deleted items through the API** in Dosya. The main action is to send the documented delete or trash operation, then confirm it leaves the active folder and appears in Deleted items when supported; the decisive check is whether the item enters the recoverable deleted state.

<figure class="help-screenshot"><a href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp"><img src="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" alt="Four-step workflow map for move a file to deleted items through the api, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for move a file to deleted items through the api: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable folder in the current released client.
- Confirm the active account and workspace, then identify disposable file and its recorded original location.

## Steps: move a file to Deleted items through the API

1. Open the Dosya REST API and a disposable folder and confirm the active account and workspace.
2. Locate disposable file and its recorded original location and verify its name or identifying details.
3. Send the documented delete or trash operation, then confirm it leaves the active folder and appears in Deleted items when supported.
4. Confirm that the item enters the recoverable deleted state.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for controlled file and folder changes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable data and a narrowly scoped key before automating mutations. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The item enters the recoverable deleted state.

## Expected result

The controlled workflow completes and the item enters the recoverable deleted state.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable folder, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
