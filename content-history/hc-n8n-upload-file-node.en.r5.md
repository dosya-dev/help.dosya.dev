---
{
  "articleId": "hc-n8n-upload-file-node",
  "locale": "en",
  "revision": 5,
  "title": "Upload a file from an n8n workflow",
  "summary": "Configure File → Upload with binary input, a Full access key and your workspace. Verify returned file metadata, multipart transfers, retries and versions.",
  "category": "integrations",
  "articleSlug": "n8n-upload-file-node",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production account or native client installation performed. Product claims checked against apps/n8n/package.json; apps/n8n/credentials/DosyaApi.credentials.ts; apps/n8n/nodes/Dosya/Dosya.node.ts; apps/n8n/nodes/Dosya/actions.ts; apps/n8n/nodes/Dosya/transport.ts; apps/n8n/nodes/Dosya/methods.ts; apps/api/src/lib/upload/open.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/access/rest-scope.ts; apps/n8n/test/actions.test.mts; apps/n8n/test/transport.test.mts; apps/n8n/test/package.test.mts. External client procedure checked against https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httpRequest/; https://docs.n8n.io/integrations/community-nodes/installation/gui-install/; https://docs.n8n.io/code/expressions/. Light/dark process diagrams depict documented controls and outcomes, not captured UI.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n upload file to cloud storage",
    "Input Data Field Name",
    "n8n binary data",
    "n8n multipart upload",
    "No workspace selected"
  ]
}
---
The **dosya.dev** n8n node uploads a binary file from an earlier workflow step into a selected Dosya workspace. Choose **Resource → File** and **Operation → Upload**. A URL in a JSON field is not the binary input this operation expects.

## Set up the node and credential

On a self-hosted n8n instance, an Owner/Admin can open **Settings → Community Nodes → Install**, enter **n8n-nodes-dosya**, review the community-code acknowledgement and select **Install**. Your instance must permit community packages. The current package is **0.1.1**, with Node.js **20.15 or newer** required. If the node is missing, check package installation and your n8n administrator's policy rather than searching for a destination field in another node.

Create a credential of type **dosya.dev API**. Its only secret field is **API Key**. In Dosya **Profile → API keys**, create a key with **Full access** scope, **API** enabled and no folder anchor; you can pin it to the one workspace used by the workflow. Supply the complete secret, not its displayed prefix. The credential test rejects a Read only key with **This key is read-only. Uploads, folders and share links need a key with Full access scope.** Upload only keys cannot pass the account/listing operations used by this node.

The key owner's workspace role must permit uploads, and the chosen destination must fall inside any member folder restriction. Full access is a credential scope, not an administrator role. Key expiry, allowed addresses/hours, storage quota, file-type policy and explicit size/transfer limits still apply. The node cannot bypass them.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-upload-file-node-process-2026-10-14.webp" data-light-href="/screenshots/n8n-upload-file-node-process-2026-10-14.webp" data-dark-href="/screenshots/n8n-upload-file-node-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-upload-file-node-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-upload-file-node-process-2026-10-14.webp" alt="n8n binary upload process: HTTP Request returns data, Dosya File Upload targets a folder, and output includes id, size and version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The binary property name comes from the previous node’s Binary tab; it is separate from the uploaded File Name. <a class="workflow-map-full" href="/screenshots/n8n-upload-file-node-process-2026-10-14.webp" data-light-href="/screenshots/n8n-upload-file-node-process-2026-10-14.webp" data-dark-href="/screenshots/n8n-upload-file-node-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: build a small-file workflow

1. Add a manual trigger and an **HTTP Request** node. Use **GET** for a direct HTTPS URL to a small sample file you control. In **Options → Response**, set **Response Format → File** and **Put Output in Field → data**. Execute that node and open its output **Binary** tab. Verify that `data` holds the expected bytes, filename and type. Keep secrets out of the sample URL.
2. Connect a **dosya.dev** node and select the saved **dosya.dev API** credential. Set **Resource → File** and **Operation → Upload**.
3. Set **Workspace** using **From List** or **By ID** (`ws_…`). Set **Folder** to the destination; leave it empty or select **Workspace Root** for the top level. Folder IDs start with `fld_`. A confined member should select a folder they may write instead of assuming the workspace root is accessible.
4. Set **Input Data Field Name** to `data`. If your upstream node uses `attachment_0` or another name, enter that exact Binary-tab property instead. This is the field name, not the filename or a JSON expression returning a URL.
5. Set **File Name** to a unique test name with its extension, for example `n8n-proof-20261014.txt`. Leaving it empty keeps the incoming filename; without one it falls back to `file`. If your override lacks an extension, the binary's extension is appended when available.
6. Execute the Dosya node once. Compare the returned `id`, `name`, `size`, `workspace_id` and `folder_id` with the intended target before activating scheduled or event-based runs.

For varying filenames, switch **File Name** to an expression such as `{{ $json.outputName }}` when the incoming JSON actually contains `outputName`. Workspace/folder locators support **By ID** values mapped from earlier steps. Node parameters are resolved per incoming item; an empty expression does not select a destination. Resource and Operation are fixed options rather than data expressions.

## Verify the result

Open Dosya **Files** in the selected workspace and folder. Confirm the unique test filename, size and contents. The upload output is JSON metadata, not the uploaded bytes or a public share URL. It includes `id`, `name`, `size`, `mime_type`, `version`, `is_new_version`, `workspace_id`, `folder_id`, `created_at`, `hash_verified`, `deduplicated` and `upload_method`. A root upload has `folder_id: null`.

A new name creates a file; an existing visible filename in the same folder creates another version of that file. `is_new_version` reflects whether the returned version exceeds 1. Choosing a different test name prevents the setup check from replacing an existing file's current contents. Uploading does not create a share link for recipients; use a deliberate **Share Link → Create** step only when you intend to share it.

## Size, timing and repeat runs

Files up to **52,428,800 bytes (50 MiB)** use a single request. Larger binaries use a multipart session and sequential parts sized by Dosya's response. Stored n8n binaries are read as a stream for multipart; inline base64 data is already in memory. This removes the one-request ceiling, but plan, workspace/key limits and the n8n host's capacity still bound the upload.

Upload/part/completion requests allow **10 minutes** per request; ordinary API requests use **60 seconds**. Safe transient requests are attempted at most **3 times**. Rate-limit waits longer than **30 seconds** are reported for the workflow to handle rather than blocking the node indefinitely. Use a Wait node or a deliberate retry policy for longer delays.

The single-request upload derives an idempotency key from execution, node, item, target, filename and content. A retry of that same upload can return the saved result with `deduplicated: true`. A new workflow execution has a different key; the same filename can therefore create a new version. Multipart parts may retry safely, but an ambiguous init or completion is not automatically resent. On failure the node tries to abort the open multipart session. Inspect Dosya before rerunning a timed-out execution; do not assume a timeout means no file was saved.

## Fix the failing field or response

| Failure | Action |
| --- | --- |
| **No workspace selected** | Choose Workspace or fix the mapped ID. **Workspace IDs start with ws_** identifies invalid manual IDs. |
| Missing binary input | Run the upstream file-producing step and inspect Binary. Copy its property name into Input Data Field Name; JSON-only items cannot upload. |
| **dosya.dev did not accept the API key** | Replace a mistyped, expired or revoked key in the credential. |
| 403 mentioning **anchored at a folder** | Use an API-enabled key without a folder anchor; those anchors work over WebDAV/S3, not this REST node. |
| Other 403 or invisible destination | Check the key's workspace pin, member role and folder access. An expired permission is not fixed by changing File Name. |
| 413 | Check the actual plan, workspace or key file-size restriction. Multipart does not override that restriction. |
| Storage-limit refusal | Free appropriate storage or ask the workspace admin to raise their limit; a workspace cap is not necessarily a plan upgrade issue. |
| **dosya.dev did not open a multi-part upload** | Retry after checking service status. If persistent, retain execution details for support. |
| 429 | Follow the displayed delay, reduce workflow concurrency or insert a Wait between batches. |

## Expected result

Each successful input item produces file metadata for the correct destination and can be checked against its original binary. Disconnecting the n8n credential or revoking its key stops future API use; files already uploaded remain in Dosya, including versions created by earlier executions.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
