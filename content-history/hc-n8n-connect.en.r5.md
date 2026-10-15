---
{
  "articleId": "hc-n8n-connect",
  "locale": "en",
  "revision": 5,
  "title": "Connect Dosya to n8n",
  "summary": "Install or select the current Dosya n8n node, configure a dedicated credential, and run a harmless connection test.",
  "category": "integrations",
  "articleSlug": "n8n-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-api-key-scopes",
    "hc-zapier-connect"
  ],
  "keywords": [
    "n8n Dosya",
    "n8n credential",
    "n8n node",
    "file upload"
  ]
}
---
Use a dedicated restricted credential for n8n so the automation can be rotated without affecting other clients.

Use a dedicated key whose scope matches the intended n8n actions. A successful credential test does not grant access outside the key’s workspace and folder boundary.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" alt="Workflow for “Connect Dosya to n8n”: create a dedicated least-privilege key; list a test workspace item before building the workflow." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect Dosya to n8n”: create a dedicated least-privilege key; list a test workspace item before building the workflow. <a class="workflow-map-full" href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect dosya to n8n

1. Open Integrations → n8n and read the current setup.
2. Install or select the supported Dosya node.
3. Create a dedicated least-privilege key.
4. Enter the endpoint and secret in n8n credentials.
5. Run the credential test.
6. List a test workspace item before building the workflow.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Reference for “Connect Dosya to n8n”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Connect Dosya to n8n”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Connect Dosya to n8n”, copy connection values from the current integration page and keep secrets private.

## Verify the result

List one harmless item through the Dosya node and confirm its workspace and folder before building a workflow that uploads or moves files.

## Expected result

The connect dosya to n8n workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Choose API-key permission](/developers/api-key-scopes)
- [Connect Zapier](/integrations/zapier)
