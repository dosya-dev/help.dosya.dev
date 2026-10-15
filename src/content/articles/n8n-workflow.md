---
{
  "articleId": "hc-n8n-workflow",
  "locale": "en",
  "revision": 6,
  "title": "Build a safe n8n file workflow",
  "summary": "Map one Dosya operation with real node labels, test its returned file data, and account for upload versions, retry timing, and duplicate share links.",
  "category": "integrations",
  "articleSlug": "n8n-workflow",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/nodes/Dosya/Dosya.node.ts; apps/n8n/nodes/Dosya/actions.ts; apps/n8n/nodes/Dosya/methods.ts; apps/n8n/nodes/Dosya/transport.ts; apps/n8n/test/actions.test.mts; apps/n8n/test/transport.test.mts; apps/n8n/examples/01-archive-gmail-attachments.json; apps/n8n/examples/02-store-and-share-pdf.json; apps/n8n/examples/03-create-client-folder.json; and apps/n8n/README.md. Node behavior and mocked HTTP tests were checked locally; no workflow was activated and no production file or share link was created.",
  "related": [
    "hc-n8n-connect",
    "hc-webhook-events",
    "hc-upload-files"
  ],
  "keywords": [
    "n8n workflow",
    "file automation",
    "n8n upload",
    "file upload"
  ]
}
---
Build a Dosya workflow around one explicit operation and inspect a manual execution before activation. The community node has actions but no Dosya trigger, so the workflow begins with an n8n trigger or upstream application.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-workflow-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-workflow-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-workflow-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-workflow-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-workflow-workflow-map-2026-10-14.webp" alt="Safe n8n file-automation map from trigger output and Dosya target selection through a manual run, output inspection and activation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use one disposable input to prove the binary-field mapping, destination and side effect before allowing the trigger to run unattended. <a class="workflow-map-full" href="/screenshots/n8n-workflow-workflow-map-2026-10-14.webp" data-light-href="/screenshots/n8n-workflow-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/n8n-workflow-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Choose the operation deliberately

| Resource and operation | Input and effect |
| --- | --- |
| **File → Upload** | Reads an incoming binary field, defaults to `data`, and stores it in the selected **Workspace** and **Folder**. A same-name file in that folder receives a new version. |
| **File → Download** | Uses a selected or mapped file ID and writes the bytes to **Output Data Field Name** for later nodes. |
| **File → Get Many** | Lists a folder or **Workspace Root**. **Return All** pages through results; otherwise **Limit** defaults to `50`. |
| **Folder → Create** | Creates the named folder under **Parent Folder**, or returns the existing one. Optional slash replacement keeps names such as `A/B` in one folder. |
| **Share Link → Create** | Creates a new public file or folder link, optionally with expiry, an access code of at least **8 characters**, and **View Only**. Each successful call makes another link. |

Use **From List** while configuring a fixed destination. Use **By ID** or an expression when an earlier node supplies an ID; the identifier is more stable than a display name.

## Steps

1. Create an n8n workflow and add a manual or application-specific trigger. Fetch one disposable item so its JSON and binary fields are visible.
2. Add **dosya.dev**, choose the intended **Resource** and **Operation**, then select the dedicated **dosya.dev API** credential.
3. Choose **Workspace** and the destination **Folder**. An empty folder value or **Workspace Root** targets the top level. For download and share actions, a mapped target ID is sufficient; **Workspace** is used only to browse their pickers.
4. For **Upload**, inspect the previous node's **Binary** tab and enter its field name in **Input Data Field Name**. Common values are `data` and Gmail attachment names such as `attachment_0`. Leave **File Name** blank to keep the incoming name, or map an intentional replacement.
5. Execute only the Dosya node. Inspect its output before connecting downstream steps. Upload returns `id`, `name`, `size`, `mime_type`, `version`, `is_new_version`, `workspace_id`, `folder_id`, `created_at`, `hash_verified`, `deduplicated` and `upload_method`.
6. Add branching or an error workflow for refused operations. Keep credentials and file content out of error messages; retain the HTTP status, Dosya sentence and n8n execution ID.
7. Test the same input a second time only after reviewing the side effect rules below. Confirm the result in the intended Dosya folder, then activate the workflow.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup screen contrasted with the Resource and Operation controls used inside an n8n Dosya node." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>This screenshot belongs to Zapier. Build the n8n workflow in its editor with a **dosya.dev** node and verify the node output in the execution record. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The manual execution changes only the selected destination and returns identifiers that downstream steps can map. For an upload, `hash_verified: true` confirms that Dosya matched the supplied SHA-256; `is_new_version: true` identifies a same-name version, and `deduplicated: true` identifies replay of an idempotent request within that execution.

Folder creation returns `created: false` when an existing same-name folder was reused. Share creation returns its `url`, `target_type`, `target_id`, `expires_at`, `view_only`, `access_code_required`, `access_mode` and `created_at`. Send the returned link only after checking its target and restrictions.

## Timing, retries and repeat effects

- Files up to **50 MiB** (**52,428,800 bytes**) use one upload request with a checksum and a **10-minute** upload timeout. Larger files use **10 MiB** (**10,485,760-byte**) parts and are finalized after every part succeeds.
- Normal requests use a **60-second** timeout. For `429`, the node honors `Retry-After` up to **30 seconds** and stops after **3 total attempts**.
- Credentialed reads, including the request for a short-lived signed download URL, folder creation, and upload parts may retry a dropped connection or `502`, `503` or `504`. The separate byte fetch from that signed URL has a **10-minute** timeout and no internal retry; rerun the node after checking the failure. Folder creation is repeat-safe because the server reuses an existing name.
- A one-request upload carries an idempotency key derived from execution, node, destination, file name and content. n8n's **Retry On Fail** within that execution can receive the completed upload instead of writing it twice.
- **Create Share Link** is not retried after an ambiguous network failure. Check Dosya before rerunning, because another attempt can produce a second active link.
- Rerunning the entire workflow creates a new execution. A repeated same-name upload becomes another version, and a repeated share step creates another URL.

Activation makes future trigger events external side effects. Uploading or creating a folder can alter shared workspace state; a share URL can be opened by its recipients until it expires or is revoked. Deactivating the workflow stops new n8n runs but does not remove stored files, versions, folders or links already created.

## Common failures

- **No workspace selected**, **No file selected** or **No folder selected** means the required locator resolved to an empty value. Check the expression using the failed item.
- **The folder name is empty** means the name or its expression contained no usable segment.
- **The access code is shorter than 8 characters** is validated before the share request; lengthen the recipient code.
- A `401` becomes **dosya.dev did not accept the API key**. Replace an expired, revoked or mistyped credential.
- A `403` may name the key scope, member permission, workspace pin or unsupported folder anchor. Follow the specific server sentence instead of broadening every restriction.
- A `404` can mean the ID is wrong, the item was deleted or trashed, or the key cannot see it.
- A `413` means the file exceeds a plan, workspace or API-key per-file ceiling. Storage-cap errors direct either the owner to billing or the workspace admin to its configured limit.

## Related guides

- [Connect n8n](/integrations/n8n-connect)
- [Choose webhook events](/developers/webhook-events)
- [Upload files](/uploading/files-and-folders)
