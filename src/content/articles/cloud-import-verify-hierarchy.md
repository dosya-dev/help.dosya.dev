---
{
  "articleId": "hc-cloud-import-verify-hierarchy",
  "locale": "en",
  "revision": 5,
  "title": "Verify imported folder hierarchy",
  "summary": "Confirm that imported roots and nested folders retain their provider hierarchy, while accounting for renamed, merged, exported, skipped, or failed items.",
  "category": "integrations",
  "articleSlug": "cloud-import-verify-hierarchy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/api/src/pages/api/cloud/imports/index.ts, apps/api/src/lib/cloud-import/discover.ts, apps/api/src/lib/cloud-import/discover-d1.ts, apps/api/src/lib/cloud-import/transfer.ts, and apps/web/src/components/file-detail-panel.tsx. No production provider account was used.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import verify hierarchy",
    "preserve cloud folder structure",
    "Google Drive folder import",
    "cloud storage migration"
  ]
}
---
Selecting a provider folder imports that folder as a real root under the Dosya destination and walks its descendants. You do not need to expand every provider level before checking the folder. A separately selected file lands directly in the destination instead.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-verify-hierarchy-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-verify-hierarchy-help-workflow-2026-10-14.webp" alt="Hierarchy verification comparing two selected provider roots and their nested folders with the resulting Dosya Files tree." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Trace each selected root through at least one deep branch and distinguish preserved nesting from intentional name or format changes. <a href="/screenshots/cloud-import-verify-hierarchy-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Record a small source manifest with each selected root name, one representative nested path, and one leaf filename. Include two roots that contain the same child-folder name when possible; this proves those branches remain separated by their parents.

Wait for **Import complete** or note any **failed** and **skipped** totals. Cancelling or closing after partial progress does not remove already delivered files, so a partially completed job cannot prove the full hierarchy.

## Steps

1. Open **Files** in the workspace that was active when the import began. Current provider integration dialogs submit to that workspace's root.
2. Find every checked provider folder at the top level in Dosya. A live same-name folder can be reused, so confirm the imported branch by its descendants. A direct checked file should be beside those roots at workspace root.
3. Open each imported root and follow the representative path from your manifest, level by level. Compare the parent at every step rather than searching only for the leaf filename.
4. For two roots containing a child such as `2026`, confirm each child remains under its own imported parent. The importer maps folders by provider identity and local parent, so sibling trees should not collapse into one cross-root folder.
5. Open a delivered file's detail panel when attribution is uncertain. **Source** and **Account** identify the provider and connected account used for the import.
6. Compare cloud-import missing items with the completion toast's **failed** and **skipped** counts before starting another job.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Imported Google Drive folders displayed in Dosya Files for checking parent-child paths and representative leaf files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The Dosya destination should contain each selected folder root followed by its discovered descendant path. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected differences

Dosya sanitizes imported folder names before creating them. Forward and back slashes become hyphens; leading dots, hyphens, and whitespace are trimmed; an empty result becomes `Untitled`; and folder names are limited to **255 characters**. Compare the resulting name using those rules rather than treating every normalized name as data loss.

If a live folder with the same name already exists under the same parent, the importer reuses it. The new content can therefore merge into a pre-existing destination folder. This is not a fresh snapshot directory, so inspect existing content before importing into a populated workspace.

Provider-native documents are exported to the format shown beside the picker entry, such as PDF or Microsoft Office formats. Unsupported descendants are skipped. When a file with the same name already occupies the destination folder, the importer does not overwrite it; after its attempts fail, it appears in the failed count.

## Troubleshooting

- A root is absent but some children are at the workspace root: confirm whether you checked individual files instead of the folder itself.
- A branch stops early: review the terminal skipped/failed figures, then check whether the provider item was unsupported or a destination filename already existed.
- Content appears inside an older same-name folder: the find-or-create behavior intentionally reuses a live matching folder at that parent.
- A source folder changed after selection: the job walks provider state while running; use the recorded manifest and run a new controlled import for later provider changes.

## Expected result

Each selected folder maps to its named Dosya root, which may be a reused live folder; supported descendants retain their parent-child relationships, and every exception is explained by sanitation, reuse, conversion, skipping, or failure.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
