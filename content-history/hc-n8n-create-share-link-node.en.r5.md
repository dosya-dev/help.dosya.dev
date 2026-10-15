---
{
  "articleId": "hc-n8n-create-share-link-node",
  "locale": "en",
  "revision": 5,
  "title": "Create a Dosya sharing link in n8n",
  "summary": "Configure the Dosya Share Link Create operation for a file or folder, apply expiry and access options, then verify the returned public-link fields.",
  "category": "integrations",
  "articleSlug": "n8n-create-share-link-node",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/nodes/Dosya/Dosya.node.ts, apps/n8n/nodes/Dosya/actions.ts, apps/n8n/nodes/Dosya/transport.ts, apps/n8n/test/actions.test.mts, and apps/api/src/lib/share/create.ts. No production link or n8n execution was created.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n create share link node",
    "n8n workflow operation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Use the **dosya.dev** community node with **Resource: Share Link** and **Operation: Create**. Every successful execution creates a new public link, so test with one controlled item and inspect the returned record before enabling retries.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14.webp" alt="Four-step workflow for adding Share Link Create, mapping a stable item ID, setting expiry and View Only, and testing the returned URL signed out." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for adding Share Link Create, mapping a stable item ID, setting expiry and View Only, and testing the returned URL signed out. <a class="workflow-map-full" href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-create-share-link-node-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Add a **dosya.dev** node for **Share Link → Create**, then select a tested **dosya.dev API** credential.
2. Under **Share**, choose **File** or **Folder**. Map a `file_…` or `fld_…` ID from an earlier node; **Workspace** is optional when the ID is entered directly and only scopes list pickers.
3. Open **Options**. Set **Access Code** to at least 8 characters when needed; this recipient code is not the Dosya account password.
4. Set **Expires In Days**. `0` omits the value and uses the workspace default; the Free plan caps links at 7 days. Enable **View Only** to request preview without downloading.
5. Execute the node once and inspect `id`, `url`, `target_type`, `target_id`, `expires_at`, `view_only`, `access_code_required`, `access_mode`, and `created_at`.
6. Open `url` in a signed-out browser, enter the code when configured, and verify the expected file or folder before passing the URL to another node.

A workspace role must permit share-link creation and the key needs Full access. Folder-anchored keys are refused by REST and work only over WebDAV or S3. Free accounts can hold five active share links; revoke or let one expire before another when the API returns `share_free_link_limit`.


<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Reference for “Create a Dosya sharing link in n8n”: Dosya n8n integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Create a Dosya sharing link in n8n”: Dosya n8n integration overview page. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The node returns one server-created link record for the intended target, with effective expiry and access fields. The public test reaches only that file or folder and the workflow exposes no API key or access code in ordinary output.

**The access code is shorter than 8 characters** is validated before any request. **No folder selected** means the Folder target resolved to root/empty. After **Could not reach dosya.dev**, inspect existing links first because an ambiguous response may have arrived after creation.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
