---
{
  "articleId": "hc-archive-review-nested-paths",
  "locale": "en",
  "revision": 4,
  "title": "Review unsafe or nested archive paths",
  "summary": "Avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location. Verify that unexpected archive content is handled without overwriting trusted local files.",
  "category": "files",
  "articleSlug": "archive-review-nested-paths",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive review nested paths",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Review unsafe or nested archive paths** in Dosya. The main action is to avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location; the decisive check is whether unexpected archive content is handled without overwriting trusted local files.

<figure class="help-screenshot"><a href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp"><img src="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" alt="Workflow for “Review unsafe or nested archive paths”: avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location; unexpected archive content is handled without overwriting trusted local files." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Review unsafe or nested archive paths”: avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location; unexpected archive content is handled without overwriting trusted local files. <a href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya archive viewer in the current released client.
- Confirm the active account and workspace, then identify archive containing deep paths, another archive, or unexpected names.

## Steps: review unsafe or nested archive paths

1. Open the Dosya archive viewer and confirm the active account and workspace.
2. Locate archive containing deep paths, another archive, or unexpected names and verify its name or identifying details.
3. Avoid opening unknown executables, inspect path normalization and source trust, and download only reviewed entries to an isolated location.
4. Confirm that unexpected archive content is handled without overwriting trusted local files.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Reference for “Review unsafe or nested archive paths”: Dosya file viewer used to inspect stored files when inline support varies." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review unsafe or nested archive paths”: Dosya file viewer used to inspect stored files when inline support varies. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Inspect archive entry names and paths before previewing, saving, or downloading content.

## Verify the result

After completing the steps, check the expected result: Unexpected archive content is handled without overwriting trusted local files.

## Expected result

The controlled workflow completes and unexpected archive content is handled without overwriting trusted local files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya archive viewer, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Preview an archive](/files/archive-preview)
- [Save an archive entry](/files/archive-save-entry)
