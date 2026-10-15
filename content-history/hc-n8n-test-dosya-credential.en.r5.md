---
{
  "articleId": "hc-n8n-test-dosya-credential",
  "locale": "en",
  "revision": 5,
  "title": "Test an n8n Dosya credential",
  "summary": "Create and test a full-access, unanchored Dosya API credential in n8n, distinguish scope failures, and confirm the key owner and workspace reach.",
  "category": "integrations",
  "articleSlug": "n8n-test-dosya-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/credentials/DosyaApi.credentials.ts, apps/n8n/nodes/Dosya/transport.ts, apps/n8n/test/package.test.mts, apps/n8n/test/transport.test.mts, and apps/web/src/components/api-keys/create-key-dialog.tsx. Production behavior for “Test an n8n Dosya credential” was not exercised; this revision is awaiting publication.",
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
The n8n credential stores one secret field named **API Key** and sends it as a Bearer token to `https://api.dosya.dev`. Its test calls `GET /api/me`; a successful HTTP response can still fail the rule when the key is read-only.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" alt="Four-step workflow for creating an n8n API key, copying its one-time secret, testing dosya.dev API credentials, and checking the Workspace list." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for creating an n8n API key, copying its one-time secret, testing dosya.dev API credentials, and checking the Workspace list. <a class="workflow-map-full" href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-test-dosya-credential-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Dosya, open **Profile → API keys** and choose **New API key**. Give the key a label that names this n8n instance.
2. Choose **Full access**, enable REST/API use, and leave the folder anchor empty. Pin one workspace when the workflow should not reach the key owner’s other memberships.
3. Generate the key and copy the complete secret once. Do not enter your Dosya password in n8n.
4. In n8n Credentials, create **dosya.dev API**, paste the secret into **API Key**, and run **Test connection**.
5. Treat **This key is read-only. Uploads, folders and share links need a key with Full access scope.** as a failed credential for this package even though `/api/me` was readable.
6. Add a Dosya node, select the credential, and open a Workspace list. Confirm the expected workspace appears before saving the production workflow.

An Upload-only key cannot pass the authenticated `/api/me` test. A folder-anchored key is unsuitable for this REST node and returns a 403 explanation directing you to create an unanchored key. Revocation or expiry invalidates later requests even if n8n still stores the credential.


<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Reference for “Test an n8n Dosya credential”: Dosya n8n integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Test an n8n Dosya credential”: Dosya n8n integration overview page. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

n8n accepts the credential, the Dosya node can load the intended workspace, and write operations remain bounded by the key’s workspace pin plus the member’s permissions. The secret stays masked in the credential UI.

**dosya.dev did not accept the API key** means the value is mistyped, expired or revoked. A scope sentence requires a newly generated Full access key; changing only the n8n credential name does not change authority.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
