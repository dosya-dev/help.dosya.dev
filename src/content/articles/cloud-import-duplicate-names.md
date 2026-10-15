---
{
  "articleId": "hc-cloud-import-duplicate-names",
  "locale": "en",
  "revision": 5,
  "title": "Handle duplicate names during a cloud import",
  "summary": "Predict folder merges and file-name conflicts during cloud import, run a controlled sample, and avoid deleting either source before careful review.",
  "category": "integrations",
  "articleSlug": "cloud-import-duplicate-names",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/cloud-import/discover-d1.ts, apps/api/src/lib/cloud-import/transfer.ts, apps/web/src/lib/cloud-import-toasts.ts, apps/api/src/lib/cloud-import/transfer.repo.unit.test.ts. Production behavior for “Handle duplicate names during a cloud import” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import duplicate names",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Cloud imports do not apply a universal “keep both” rename rule. A live destination folder with the same name is reused, while a file name already occupied in that destination causes the incoming item to fail instead of replacing or renaming the existing file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Handle duplicate names during a cloud import: Choose a provider folder containing a name already used in Dosya. Record both files before import, compare size or content. Read the terminal failed count for the duplicate name. Open the existing Dosya file, prove the import left it unchanged." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose a provider folder containing a name already used in Dosya.” and ends with “Open the existing Dosya file, prove the import left it unchanged.” <a class="workflow-map-full" href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-duplicate-names-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the provider, choose a small folder containing a filename that also exists in the Dosya workspace root or matching destination folder.
2. Record both versions’ size or content before import, since matching names alone cannot tell you which file is already in Dosya.
3. Select the duplicate file-name test folder, confirm the import root label, and start the job.
4. Watch the import completion toast; a duplicate file name increases its failed count even when other items complete.
5. Open the reused Dosya folder and compare the existing same-named file to your pre-import record; it must remain unchanged.
6. Rename one side deliberately before a second missing-only import if both files need to coexist in the same Dosya folder.

Folder discovery searches for a live same-named folder under the same parent and maps the remote subtree into it. File insertion uses the destination’s unique name rule; a conflicting row produces an item failure after storage reservation is released. No automatic `(2)` suffix is created by the cloud-import engine.

## Expected result

Existing content remains intact, non-conflicting children import into the created or reused folder, and the duplicate file is counted as failed. After a deliberate rename, a new import can create a separate row without overwriting either version.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
