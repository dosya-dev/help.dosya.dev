---
{
  "articleId": "hc-cloud-import-test-folder",
  "locale": "en",
  "revision": 5,
  "title": "Import one provider folder as a test",
  "summary": "Run a low-risk provider-folder import that exercises recursive discovery, conversion, permissions, and destination rules before a larger move.",
  "category": "integrations",
  "articleSlug": "cloud-import-test-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/api/src/lib/cloud-import/discover.ts, apps/api/src/lib/cloud-import/discover-d1.ts, apps/api/src/lib/cloud-import/transfer.ts. Production behavior for “Import one provider folder as a test” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-browse-provider"
  ],
  "keywords": [
    "cloud import test folder",
    "Cloud-import provider controls",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A useful test folder contains a few small ordinary files, one nested folder, and—if relevant—one provider-native document. Because released provider imports target the active workspace root, give the test root a unique name.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Import one provider folder as a test: Choose a small non-confidential provider folder with a known count. Switch to the target workspace, confirm upload permission. Select the folder root, require 1 selected and workspace root. Traverse the Dosya copy, open representative files before scaling up." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose a small non-confidential provider folder with a known count.” and ends with “Traverse the Dosya copy, open representative files before scaling up.” <a class="workflow-map-full" href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-test-folder-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Create or choose a non-confidential provider folder with a unique name and known child count; keep its total small enough to inspect manually.
2. Switch Dosya to the intended workspace and verify your role has the `upload_files` permission required by cloud-import jobs.
3. Open the matching provider account, inspect the test folder, and note every conversion label or **Cannot be imported** row.
4. Return to its parent, select the test folder itself, confirm `1 selected — importing into workspace root`, and choose **Import**.
5. Observe discovery until it changes from **Preparing import** to transfer, then retain the terminal toast’s completed, skipped, and failed totals.
6. Open the new root folder in Dosya, traverse the nested branch, and download or preview each representative file before scaling up.

Recursive discovery preserves the remote hierarchy by creating or reusing same-named folders. Unsupported provider objects are skipped; exported native documents gain the displayed Office or PDF extension. Workspace extension, per-file size, and available-storage policies still apply to every discovered file.

## Expected result

The uniquely named test root appears in the active workspace root, its nested hierarchy is intact, and every supported sample opens. Any skip or failure is explained before a larger import begins.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
