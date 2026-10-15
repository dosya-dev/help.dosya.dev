---
{
  "articleId": "hc-zapier-refresh-trigger-sample",
  "locale": "en",
  "revision": 5,
  "title": "Refresh a Dosya trigger sample in Zapier",
  "summary": "Create a current Dosya file sample for Zapier, understand the bounded workspace scan, and remap fields without changing the live trigger scope.",
  "category": "integrations",
  "articleSlug": "zapier-refresh-trigger-sample",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/triggers/new-file.js, apps/zapier/src/lib/file-row.js, apps/zapier/src/lib/samples.js, apps/zapier/test/triggers.new-file.test.js. Production behavior for “Refresh a Dosya trigger sample in Zapier” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-zapier-troubleshoot"
  ],
  "keywords": [
    "zapier refresh trigger sample",
    "Zapier workflow reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Testing **New File** loads recent file rows; it does not wait for a webhook delivery or scan an unlimited workspace. The loader checks root first, then a bounded set of folders, and returns the same field shape as live events.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14.webp" alt="Four panels show preserving the trigger workspace, creating a unique root sample, selecting the refreshed file, and checking its File ID in a mapped action." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show preserving the trigger workspace, creating a unique root sample, selecting the refreshed file, and checking its File ID in a mapped action. <a class="workflow-map-full" href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-refresh-trigger-sample-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the Zap uses Dosya **New File** and the intended **Workspace**. Refreshing a sample does not change that saved workspace or recreate the live webhook by itself.
2. Create a small, uniquely named file in the workspace root when possible. Root is checked first and is the most reliable location for a sample in a workspace with many folders.
3. If the file must be in a folder, place it within a folder likely to appear early in the workspace tree. Sampling probes at most 12 folders and stops after collecting about 25 rows.
4. Run Zapier’s trigger test again. The loader requests up to 100 newest files per probed location, then maps the real `current_version` rather than defaulting every sample to version 1.
5. Choose the newly named sample and remap downstream fields if their schema was stale. Check `file_id`, `folder_id`, and `version`; a root file correctly has `folder_id: null`.
6. Publish only after one downstream test uses the refreshed File ID. Delete the test file later only if no published step still depends on it as fixed input.

If the new file is absent, the bounded loader may simply not have reached its folder. Move a disposable sample to workspace root rather than repeatedly creating files throughout the workspace.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Refresh a Dosya trigger sample in Zapier”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Refresh a Dosya trigger sample in Zapier”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The editor shows a current, identifiable Dosya sample with the same keys a live event supplies. The sample’s folder and version are accurate, and the live trigger remains scoped to the previously selected workspace.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
