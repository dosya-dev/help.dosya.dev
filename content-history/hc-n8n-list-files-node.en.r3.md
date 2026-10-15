---
{
  "articleId": "hc-n8n-list-files-node",
  "locale": "en",
  "revision": 3,
  "title": "List Dosya files in n8n",
  "summary": "Configure the folder or workspace input, execute the list operation, and compare representative IDs with Dosya. Verify that the node returns files only from the intended scope.",
  "category": "integrations",
  "articleSlug": "n8n-list-files-node",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n list files node",
    "n8n workflow operation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **List Dosya files in n8n** in Dosya. The main action is to configure the folder or workspace input, execute the list operation, and compare representative IDs with Dosya; the decisive check is whether the node returns files only from the intended scope.

<figure class="help-screenshot"><a href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp"><img src="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" alt="Four-step workflow map for list dosya files in n8n, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for list dosya files in n8n: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an n8n workflow with Dosya credentials in the current released client.
- Confirm the active account and workspace, then identify known test folder and read-scoped credential.

## Steps: list Dosya files in n8n

1. Open an n8n workflow with Dosya credentials and confirm the active account and workspace.
2. Locate known test folder and read-scoped credential and verify its name or identifying details.
3. Configure the folder or workspace input, execute the list operation, and compare representative IDs with Dosya.
4. Confirm that the node returns files only from the intended scope.

<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Dosya integration overview for connecting and running n8n workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted credential and disposable workflow data while validating every node. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The node returns files only from the intended scope.

## Expected result

The controlled workflow completes and the node returns files only from the intended scope.

## Troubleshooting

**The expected control is missing.** Return to an n8n workflow with Dosya credentials, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
