---
{
  "articleId": "hc-cloud-import-review-duplicates",
  "locale": "en",
  "revision": 5,
  "title": "Review duplicate names after a cloud import",
  "summary": "Audit same-name outcomes after import, distinguish merged folders from failed files, and retain both sources until content identity is proven.",
  "category": "integrations",
  "articleSlug": "cloud-import-review-duplicates",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/cloud-import/discover-d1.ts, apps/api/src/lib/cloud-import/transfer.ts, apps/api/src/lib/cloud-import/types.ts, apps/web/src/lib/cloud-import-toasts.ts. Production behavior for “Review duplicate names after a cloud import” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import review duplicates",
    "Cloud-import result verification",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Review duplicates with the engine’s actual two rules in mind: same-named live folders under one parent are merged, while a same-named file in one destination folder blocks the imported file. The completion toast exposes counts, not the conflicting filenames.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Review duplicate names after a cloud import: Save the terminal failed count before leaving the import result. Compare the provider children with the merged Dosya folder. Inspect every same-named destination file for size date and content. Rename deliberately, import only the missing source and verify it." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Save the terminal failed count before leaving the import result.” and ends with “Rename deliberately, import only the missing source and verify it.” <a class="workflow-map-full" href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-review-duplicates-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Save the terminal toast counts, especially any failed value, before navigating away from the import result.
2. Open the imported top-level folder and identify places where a remote folder name matched a folder that already existed in Dosya.
3. Compare the provider child list with the merged Dosya folder, checking names and opening content rather than relying only on item totals.
4. For every expected file that is absent, look for a same-named Dosya row in that exact folder and inspect its size, date, and contents.
5. Keep both the provider source and existing Dosya file until you decide whether to rename the source, rename the destination, or retain only one.
6. After making a unique name, import only the missing source and verify the second row opens before deleting anything elsewhere.

A file collision is an item failure, not an overwrite receipt, and no conflict copy is synthesized. Reused folders keep their existing identity and dates; only newly created imported folders receive provider source dates when the provider supplies them. Dropbox exposes no folder timestamps.

## Expected result

Each expected source file is either present as a verified Dosya copy or accounted for by a same-name failure. No existing file was replaced, and any merged folder’s combined children have been consciously reviewed.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
