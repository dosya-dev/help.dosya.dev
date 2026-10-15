---
{
  "articleId": "hc-api-key-expiry-rotation",
  "locale": "en",
  "revision": 3,
  "title": "Rotate an expiring API key",
  "summary": "Create a narrowly scoped replacement, deploy and verify it, then revoke the old key. Verify that the integration continues with the new key and the old credential fails.",
  "category": "developers",
  "articleSlug": "api-key-expiry-rotation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api key expiry rotation",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Rotate an expiring API key** in Dosya. The main action is to create a narrowly scoped replacement, deploy and verify it, then revoke the old key; the decisive check is whether the integration continues with the new key and the old credential fails.

<figure class="help-screenshot"><a href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp"><img src="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp" alt="Four-step workflow map for rotate an expiring api key, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for rotate an expiring api key: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/api-key-expiry-rotation-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya developer and integration settings in the current released client.
- Confirm the active account and workspace, then identify existing integration key and its replacement settings.

## Steps: rotate an expiring API key

1. Open Dosya developer and integration settings and confirm the active account and workspace.
2. Locate existing integration key and its replacement settings and verify its name or identifying details.
3. Create a narrowly scoped replacement, deploy and verify it, then revoke the old key.
4. Confirm that the integration continues with the new key and the old credential fails.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer API overview for credentials, usage, and webhook operations." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use non-production credentials and log request identifiers without logging secrets. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The integration continues with the new key and the old credential fails.

## Expected result

The controlled workflow completes and the integration continues with the new key and the old credential fails.

## Troubleshooting

**The expected control is missing.** Return to Dosya developer and integration settings, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
