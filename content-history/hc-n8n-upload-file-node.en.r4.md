---
{
  "articleId": "hc-n8n-upload-file-node",
  "locale": "en",
  "revision": 4,
  "title": "Upload a file from an n8n workflow",
  "summary": "Map the binary property, filename, and destination, execute the node once, and inspect the returned file identifier. Verify that one file appears in the intended Dosya folder.",
  "category": "integrations",
  "articleSlug": "n8n-upload-file-node",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n upload file node",
    "n8n workflow operation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Upload a file from an n8n workflow** in Dosya. The main action is to map the binary property, filename, and destination, execute the node once, and inspect the returned file identifier; the decisive check is whether one file appears in the intended Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/n8n-upload-file-node-help-workflow-2026-10-14.webp"><img src="/screenshots/n8n-upload-file-node-help-workflow-2026-10-14.webp" alt="Workflow for “Upload a file from an n8n workflow”: map the binary property, filename, and destination, execute the node once, and inspect the returned file identifier; one file appears in the intended Dosya folder." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Upload a file from an n8n workflow”: map the binary property, filename, and destination, execute the node once, and inspect the returned file identifier; one file appears in the intended Dosya folder. <a href="/screenshots/n8n-upload-file-node-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an n8n workflow with Dosya credentials in the current released client.
- Confirm the active account and workspace, then identify small binary item and disposable Dosya destination.

## Steps: upload a file from an n8n workflow

1. Open an n8n workflow with Dosya credentials and confirm the active account and workspace.
2. Locate small binary item and disposable Dosya destination and verify its name or identifying details.
3. Map the binary property, filename, and destination, execute the node once, and inspect the returned file identifier.
4. Confirm that one file appears in the intended Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Reference for “Upload a file from an n8n workflow”: Dosya n8n integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Upload a file from an n8n workflow”: Dosya n8n integration overview page. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted credential and disposable workflow data while validating every node.

## Verify the result

After completing the steps, check the expected result: One file appears in the intended Dosya folder.

## Expected result

The controlled workflow completes and one file appears in the intended Dosya folder.

## Troubleshooting

**The expected control is missing.** Return to an n8n workflow with Dosya credentials, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
