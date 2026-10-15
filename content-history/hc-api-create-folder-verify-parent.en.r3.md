---
{
  "articleId": "hc-api-create-folder-verify-parent",
  "locale": "en",
  "revision": 3,
  "title": "Create an API folder and verify its parent",
  "summary": "Send one create request, record the returned ID, and list the parent to verify the new child. Verify that one folder exists under the intended parent.",
  "category": "developers",
  "articleSlug": "api-create-folder-verify-parent",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api create folder verify parent",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Create an API folder and verify its parent** in Dosya. The main action is to send one create request, record the returned ID, and list the parent to verify the new child; the decisive check is whether one folder exists under the intended parent.

<figure class="help-screenshot"><a href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp"><img src="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp" alt="Four-step workflow map for create an api folder and verify its parent, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for create an api folder and verify its parent: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-create-folder-verify-parent-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya REST API and a disposable folder in the current released client.
- Confirm the active account and workspace, then identify parent folder ID and unique test folder name.

## Steps: create an API folder and verify its parent

1. Open the Dosya REST API and a disposable folder and confirm the active account and workspace.
2. Locate parent folder ID and unique test folder name and verify its name or identifying details.
3. Send one create request, record the returned ID, and list the parent to verify the new child.
4. Confirm that one folder exists under the intended parent.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for controlled file and folder changes." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable data and a narrowly scoped key before automating mutations. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: One folder exists under the intended parent.

## Expected result

The controlled workflow completes and one folder exists under the intended parent.

## Troubleshooting

**The expected control is missing.** Return to the Dosya REST API and a disposable folder, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
