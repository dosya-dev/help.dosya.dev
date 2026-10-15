---
{
  "articleId": "hc-automation-rotate-api-key",
  "locale": "en",
  "revision": 4,
  "title": "Rotate an automation API key",
  "summary": "Create a replacement with matching narrow scope, update and test the automation, then revoke the old key. Verify that new runs succeed and the retired key no longer works.",
  "category": "integrations",
  "articleSlug": "automation-rotate-api-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-zapier-connect",
    "hc-n8n-connect"
  ],
  "keywords": [
    "automation rotate api key",
    "Zapier and n8n automation",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Rotate an automation API key** in Dosya. The main action is to create a replacement with matching narrow scope, update and test the automation, then revoke the old key; the decisive check is whether new runs succeed and the retired key no longer works.

<figure class="help-screenshot"><a href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp"><img src="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" alt="Workflow for “Rotate an automation API key”: create a replacement with matching narrow scope, update and test the automation, then revoke the old key; new runs succeed and the retired key no longer works." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Rotate an automation API key”: create a replacement with matching narrow scope, update and test the automation, then revoke the old key; new runs succeed and the retired key no longer works. <a href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Zapier or n8n with Dosya in the current released client.
- Confirm the active account and workspace, then identify Zapier or n8n connection using an old key.

## Steps: rotate an automation API key

1. Open Zapier or n8n with Dosya and confirm the active account and workspace.
2. Locate Zapier or n8n connection using an old key and verify its name or identifying details.
3. Create a replacement with matching narrow scope, update and test the automation, then revoke the old key.
4. Confirm that new runs succeed and the retired key no longer works.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Rotate an automation API key”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Rotate an automation API key”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Build with a restricted test key and non-confidential files before enabling production runs.

## Verify the result

After completing the steps, check the expected result: New runs succeed and the retired key no longer works.

## Expected result

The controlled workflow completes and new runs succeed and the retired key no longer works.

## Troubleshooting

**The expected control is missing.** Return to Zapier or n8n with Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Connect n8n](/integrations/n8n-connect)
