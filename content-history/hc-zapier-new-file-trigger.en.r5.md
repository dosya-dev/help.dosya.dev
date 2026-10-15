---
{
  "articleId": "hc-zapier-new-file-trigger",
  "locale": "en",
  "revision": 5,
  "title": "Use the Dosya new-file trigger in Zapier",
  "summary": "Configure Zapier’s Dosya New File trigger with the required key and workspace, test one current sample, and exclude ordinary version uploads.",
  "category": "integrations",
  "articleSlug": "zapier-new-file-trigger",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/authentication.js, apps/zapier/src/triggers/new-file.js, apps/zapier/src/lib/hooks.js, apps/zapier/src/lib/file-row.js, apps/zapier/test/acceptance.dedupe.test.js. Production behavior for “Use the Dosya new-file trigger in Zapier” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-n8n-connect"
  ],
  "keywords": [
    "zapier new file trigger",
    "Zapier and n8n automation",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**New File** subscribes one Zap webhook to the `file.uploaded` event for a required workspace. It returns only brand-new file records; an upload that creates a new version of an existing file is deliberately ignored.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14.webp" alt="Four panels show connecting a full unanchored key, creating the workspace webhook, uploading a genuinely new file, and verifying the trigger fields before publishing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show connecting a full unanchored key, creating the workspace webhook, uploading a genuinely new file, and verifying the trigger fields before publishing. <a class="workflow-map-full" href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-new-file-trigger-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Create a Dosya API key at `https://app.dosya.dev/profile/api` with **full** scope. Do not folder-anchor it; REST rejects anchored keys. Pin the key to one workspace when narrower access is required.
2. In Zapier add the Dosya **New File** trigger and connect that key. The connection test calls the current user endpoint and rejects any scope other than `full` before the Zap is enabled.
3. Choose **Workspace**. Subscription creates one webhook endpoint for this Zap and event, labeled `Zapier (Zap <id>)` when Zapier supplies the ID.
4. Upload one new, non-confidential file to the chosen workspace. Do not overwrite an existing file for this test, because deliveries with `is_new_version: true` return no trigger item.
5. Use Zapier’s trigger test to load a sample. Sampling lists the workspace root, then at most 12 folders until it finds about 25 recent rows; a very large workspace is intentionally not exhaustively scanned.
6. Confirm **File ID**, **File name**, **Size in bytes**, **Folder ID**, and **Version**, then publish the Zap. Switch it off cleanly so Zapier can delete the stored webhook endpoint.

If unsubscription reports **Cannot unsubscribe: no dosya webhook endpoint id was stored for this Zap**, the app refuses to pretend cleanup succeeded. Resolve the stale connection so an endpoint is not leaked against webhook limits.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Use the Dosya new-file trigger in Zapier”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Use the Dosya new-file trigger in Zapier”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One newly created file in the selected workspace produces one trigger item whose `id` and `file_id` are the stable file ID. New versions are ignored, and repeated delivery of the same event uses the same `id` so Zapier can deduplicate it.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Connect n8n](/integrations/n8n-connect)
