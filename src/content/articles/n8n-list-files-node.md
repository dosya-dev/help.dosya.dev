---
{
  "articleId": "hc-n8n-list-files-node",
  "locale": "en",
  "revision": 5,
  "title": "List Dosya files in n8n",
  "summary": "List files from one Dosya workspace or folder with exact sort, limit and subfolder options, then verify IDs and pagination-derived output fields.",
  "category": "integrations",
  "articleSlug": "n8n-list-files-node",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/nodes/Dosya/Dosya.node.ts, apps/n8n/nodes/Dosya/actions.ts, apps/n8n/nodes/Dosya/methods.ts, and apps/n8n/test/actions.test.mts. No production file listing was fetched.",
  "related": [
    "hc-n8n-connect",
    "hc-n8n-workflow"
  ],
  "keywords": [
    "n8n list files node",
    "n8n workflow operation details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The Dosya node’s **File → Get Many** operation lists one workspace root or one folder. It returns a flat stream of file items; optional subfolders are returned as folder records without recursively listing their contents.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-list-files-node-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" alt="Four-step workflow for choosing File Get Many, bounding returned items, deciding whether subfolders belong, and checking representative output fields." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for choosing File Get Many, bounding returned items, deciding whether subfolders belong, and checking representative output fields. <a class="workflow-map-full" href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-list-files-node-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Add **dosya.dev**, choose **Resource: File** and **Operation: Get Many**, then select the intended **Workspace**.
2. Choose **Folder** or leave **Workspace Root**. The folder picker displays full paths such as `Clients / Acme / Final` to distinguish duplicate leaf names.
3. Leave **Return All** off for a bounded test and set **Limit** to at least 1; the default is 50. The node fetches API pages up to 500 entries while stopping at your limit.
4. Under **Options**, choose **Sort By**: **Newest First**, **Oldest First**, **Name**, **Largest First**, or **Smallest First**.
5. Enable **Include Subfolders in Output** only when downstream logic expects records with `type: folder`. Child contents are not traversed by that option.
6. Execute once and compare representative `id`, `name`, `size`, `mime_type`, `extension`, `version`, `workspace_id`, `folder_id`, `created_at`, and `updated_at` values with Dosya.

When **Return All** is enabled, the node follows file pagination until the API reports the last page. Subfolders are taken from the first response only because the API repeats the complete subfolder list on every file page.


<figure class="help-screenshot"><a href="/screenshots/n8n-integration-overview-2026-10-13.webp"><img src="/screenshots/n8n-integration-overview-2026-10-13.webp" alt="Reference for “List Dosya files in n8n”: Dosya n8n integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “List Dosya files in n8n”: Dosya n8n integration overview page. <a href="/screenshots/n8n-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The output contains files from exactly the chosen workspace root or folder in the selected order, stops at the requested limit unless Return All is enabled, and includes only immediate subfolder records when requested.

An empty output is valid when the selected scope has no visible files. A missing workspace is rejected before the request; access failures require checking the credential’s workspace pin, Full/Read scope and the key owner’s file-view permission.

## Related guides

- [Connect Dosya to n8n](/integrations/n8n-connect)
- [Build an n8n workflow](/integrations/n8n-workflow)
