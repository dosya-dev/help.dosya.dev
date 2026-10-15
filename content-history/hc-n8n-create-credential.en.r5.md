---
{
  "articleId": "hc-n8n-create-credential",
  "locale": "en",
  "revision": 5,
  "title": "Create a Dosya credential in n8n",
  "summary": "Create a dedicated Full-access REST key, save its one-time secret in n8n, and resolve exact credential-test failures without exposing your password.",
  "category": "integrations",
  "articleSlug": "n8n-create-credential",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/credentials/DosyaApi.credentials.ts; apps/n8n/nodes/Dosya/transport.ts; apps/n8n/test/package.test.mts; apps/n8n/test/transport.test.mts; apps/n8n/README.md; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/api/src/pages/api/me/api-keys/index.ts; apps/api/src/pages/api/me/api-keys/[id].ts; apps/api/src/pages/api/me/api-keys/index.refusal.unit.test.ts; apps/api/src/lib/api-key-limits.ts; and apps/api/src/lib/kv-cache.ts. Mocked package tests, credential contracts, and revocation-cache behavior were checked; no key was created and the production API was not called.",
  "related": [
    "hc-zapier-connect",
    "hc-n8n-connect"
  ],
  "keywords": [
    "n8n create credential",
    "Zapier and n8n automation",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The Dosya community node has one required credential field: **API Key**. It stores a Dosya `dos_…` token as a password value, sends it as `Authorization: Bearer` only to `https://api.dosya.dev`, and tests it with `GET /api/me`.

<figure class="help-screenshot"><a href="/screenshots/n8n-create-credential-help-workflow-2026-10-14.webp"><img src="/screenshots/n8n-create-credential-help-workflow-2026-10-14.webp" alt="Credential workflow from generating a dedicated Dosya REST key to saving and testing it as a dosya.dev API credential in n8n." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Create the key in Dosya, capture its one-time value, and paste it into the sole secret field of the n8n credential. <a href="/screenshots/n8n-create-credential-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you create the credential

- Install or select the `n8n-nodes-dosya` community node first. The repository package version is **0.1.1**, built and tested with n8n **2.42** (`n8n-workflow` 2.42.4) and Node.js **22**.
- Use a separate key named for n8n so rotation does not interrupt another tool. The free plan permits **3** API keys per user; all accounts have a hard ceiling of **20**, and expired keys still count until revoked.
- Prepare n8n's encrypted credential store before generating the token. Dosya displays the full API key only once.
- The current node requires **Full access** for its full operation set. A read-only key can authenticate but fails the credential rule, while upload-only cannot pass the account test or perform read operations.

## Steps

1. In Dosya, open the account menu, select **Profile**, choose **API keys**, and select **New API key**.
2. Enter an identifying value in **What is it for?**, such as `n8n production uploads`. The maximum key-name length is **64 characters**.
3. Under **What can it do?**, choose **Full access**. Under **Restrictions and expiry**, set **Protocols** to **Only the ones I pick** and check **REST API**.
4. Optionally select one **Workspace** to pin the credential. Leave the folder anchor empty: folder-anchored keys are accepted only by WebDAV and S3, so the n8n REST node will refuse them.
5. Set an expiry and any IP, active-hours or usage controls the n8n host can satisfy. A workspace pin narrows the key; it does not give the owner permission beyond their role in that workspace.
6. Select **Generate key**, copy the complete token from the **is ready** dialog, and store it privately before selecting **Done**.
7. In n8n, create a credential of type **dosya.dev API**. Paste the token into **API Key**. Never enter your Dosya account password in this field.
8. Save the credential and run n8n's credential test. The test calls `https://api.dosya.dev/api/me` immediately and sends the node version in its `User-Agent`.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Dosya Zapier overview shown to distinguish Zapier setup from the dosya.dev API credential required by the n8n community node." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>This Zapier screen does not create an n8n secret. For n8n, generate the REST key in Profile and save it in a **dosya.dev API** credential. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

n8n reports a successful credential check, and the saved credential is available to Dosya nodes. The test proves the key is accepted and has Full access; it does not prove that every selected workspace, folder, plan limit or member role permits a later action.

In Dosya, the key row shows its name, **Full access**, **REST API**, reach, expiry and last-use information. n8n stores the secret; Dosya retains only a partial identifier and cannot display the full token again.

## Exact failures and recovery

| Result | What to change |
| --- | --- |
| **This key is read-only. Uploads, folders and share links need a key with Full access scope.** | Create a Full-access replacement; changing n8n cannot widen the existing key. |
| **dosya.dev did not accept the API key** | Check for a truncated, revoked or expired token. Generate a replacement if the one-time value was lost. |
| **This API key is anchored at a folder and can only be used over WebDAV or the S3 gateway** | Recreate it without a folder anchor. A workspace pin is compatible with this node. |
| **The free plan allows 3 API keys. Delete one or upgrade for more.** | Revoke an unused or expired key before generating another. |
| **Maximum of 20 API keys reached** | Remove an obsolete credential from the account-level list. |
| **Name must be 64 characters or less** | Shorten **What is it for?** and submit again. |

Revoking the key is irreversible. A successful API-key lookup may remain cached for up to **5 minutes**, including a **30-second** in-isolate memory layer, so create and validate the replacement first, update affected workflows, revoke the old row, and retest after five minutes. If a token appears in logs, screenshots or workflow data, rotate it rather than relying on deletion of the exposed copy.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Connect n8n](/integrations/n8n-connect)
