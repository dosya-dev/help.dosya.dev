---
{
  "articleId": "hc-n8n-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect Dosya to n8n",
  "summary": "Install the current Dosya community node, attach a dedicated REST credential, and verify workspace access before activating file automation.",
  "category": "integrations",
  "articleSlug": "n8n-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/package.json; apps/n8n/README.md; apps/n8n/credentials/DosyaApi.credentials.ts; apps/n8n/nodes/Dosya/Dosya.node.ts; apps/n8n/nodes/Dosya/methods.ts; apps/n8n/nodes/Dosya/transport.ts; apps/n8n/test/package.test.mts; apps/n8n/test/actions.test.mts; apps/n8n/test/transport.test.mts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/lib/plans.ts; apps/api/src/lib/kv-cache.ts; apps/api/src/pages/api/me/api-keys/index.ts; and apps/api/src/pages/api/me/api-keys/[id].ts. Package contracts, mocked requests, and API-key cache invalidation were reviewed locally; public registry availability, a production n8n instance and the live Dosya API were not queried.",
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
The `n8n-nodes-dosya` community package connects n8n to Dosya through the REST API. It can upload, download and list files, create or reuse folders, and create file or folder share links.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" alt="n8n connection map covering community-node installation, Dosya REST-key creation, credential validation and a limited workspace test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Install the package in n8n, save a dedicated Dosya credential, and verify the exact workspace boundary with a harmless operation. <a class="workflow-map-full" href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements and boundaries

- The repository package is `n8n-nodes-dosya` version **0.1.1**. Its compatibility target is n8n **2.42** with Node.js **22**; community-node installation availability still depends on your n8n deployment policy.
- The node uses a Dosya API key, never your Dosya password. For all five current operations, use **Full access**, include the **REST API** protocol, and leave **Folder access** unset. A workspace pin is supported.
- The key owner's workspace membership and role still apply. Full-access scope cannot overcome an action the member is not permitted to perform.
- Current operations are **File: Upload**, **File: Download**, **File: Get Many**, **Folder: Create**, and **Share Link: Create**. This release has no Dosya trigger, deletion, move, rename, sync or file-request operation.
- Plan and workspace limits are enforced by Dosya. The Free-plan source defaults provide **5 GB** storage and **100 GB** daily egress, allow at most **5 active share links**, and cap share expiry at **7 days**. Workspace and per-file ceilings may be stricter.

## Steps

1. In a self-hosted n8n instance that permits community packages, open **Settings → Community Nodes → Install**.
2. Enter `n8n-nodes-dosya` and confirm installation. After installation, the node picker should contain **dosya.dev** and the credential picker should contain **dosya.dev API**.
3. In Dosya, open **Profile → API keys → New API key**. Name the key for this n8n instance, choose **Full access**, restrict **Protocols** to **REST API**, and optionally pin one workspace.
4. Generate the key and copy the one-time secret. Do not add a folder anchor: the API rejects folder-anchored keys outside WebDAV and S3.
5. In n8n, create a **dosya.dev API** credential and put the token in **API Key**. Saving tests it against `GET https://api.dosya.dev/api/me`.
6. Create a temporary workflow and add a **dosya.dev** node. Choose the saved credential, **File** as **Resource**, and **Get Many** as **Operation**.
7. Under **Workspace**, use **From List** and select the intended name. Choose **Workspace Root** under **Folder**, leave **Return All** off, and set a small **Limit** such as `1`.
8. Execute the node. Compare the returned `workspace_id`, `folder_id`, `id`, `name` and `type` with the harmless item you expected before adding any write operation.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup page contrasted with the separate n8n community-node installation and credential flow." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Zapier uses this Dosya integration page; n8n is installed from Community Nodes and authenticates with the **dosya.dev API** credential described above. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The credential test passes and the trial **Get Many** execution returns no more than the chosen limit from the selected root. The node receives only resources the key owner can reach within its workspace pin and role.

Resource locators support **From List** and **By ID**. Workspace IDs begin `ws_`, folder IDs `fld_`, and file IDs `file_`. Folder choices show paths such as `Clients / Acme / Final`; a file search with no text lists the newest root files, while typed text searches the whole selected workspace in pages of **50**.

## Diagnose a failed connection

- **dosya.dev did not accept the API key** means the token may be incomplete, expired or revoked. Replace the saved n8n credential with a valid one-time secret.
- **This key is read-only. Uploads, folders and share links need a key with Full access scope.** is raised by the credential test for a read-only key even though `GET /api/me` authenticated.
- A `403` mentioning the **api surface** means the key excludes REST. Generate a key that includes **REST API**.
- A `403` stating the key is **anchored at a folder** requires a replacement without a folder anchor; selecting that folder in the node is the supported way to target it.
- **No workspace selected** is an n8n validation error. Choose one from the list or enter its `ws_…` identifier.
- A missing workspace can mean the key is pinned elsewhere or the owner lacks membership. Credential success alone does not promise access to every workspace.
- The client retries a `429` at most **3 attempts** when `Retry-After` is **30 seconds or less**. A longer delay is reported to the execution instead of making the job wait silently.

Removing the n8n package does not revoke its Dosya key. Revocation is permanent, but an already cached successful validation can remain accepted for up to **5 minutes**. Inventory affected workflows before rotation, then retest after that window.

## Related guides

- [Choose API-key permission](/developers/api-key-scopes)
- [Connect Zapier](/integrations/zapier)
