---
{
  "articleId": "hc-n8n-test-dosya-credential",
  "locale": "en",
  "revision": 4,
  "title": "Test an n8n Dosya credential",
  "summary": "Run the credential test or one read-only node, verify the account scope, and keep the secret out of execution data. Verify that n8n authenticates to the intended Dosya account with the expected permissions.",
  "category": "integrations",
  "articleSlug": "n8n-test-dosya-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n test dosya credential",
    "n8n workflow operation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Test an n8n Dosya credential** in Dosya. The main action is to run the credential test or one read-only node, verify the account scope, and keep the secret out of execution data; the decisive check is whether n8n authenticates to the intended Dosya account with the expected permissions.

<figure class="help-screenshot"><a href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp"><img src="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" alt="Workflow for “Test an n8n Dosya credential”: run the credential test or one read-only node, verify the account scope, and keep the secret out of execution data; n8n authenticates to the intended Dosya account with the expected permissions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Test an n8n Dosya credential”: run the credential test or one read-only node, verify the account scope, and keep the secret out of execution data; n8n authenticates to the intended Dosya account with the expected permissions. <a href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an n8n workflow with Dosya credentials in the current released client.
- Confirm the active account and workspace, then identify restricted Dosya credential in n8n.

## Steps: test an n8n Dosya credential

1. Open an n8n workflow with Dosya credentials and confirm the active account and workspace.
2. Locate restricted Dosya credential in n8n and verify its name or identifying details.
3. Run the credential test or one read-only node, verify the account scope, and keep the secret out of execution data.
4. Confirm that n8n authenticates to the intended Dosya account with the expected permissions.

<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Reference for “Test an n8n Dosya credential”: Dosya n8n integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Test an n8n Dosya credential”: Dosya n8n integration overview page. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Use a restricted credential and disposable workflow data while validating every node.

## Verify the result

After completing the steps, check the expected result: N8n authenticates to the intended Dosya account with the expected permissions.

## Expected result

The controlled workflow completes and n8n authenticates to the intended Dosya account with the expected permissions.

## Troubleshooting

**The expected control is missing.** Return to an n8n workflow with Dosya credentials, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
