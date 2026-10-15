---
{
  "articleId": "hc-cloud-import-cancel",
  "locale": "en",
  "revision": 4,
  "title": "Cancel a cloud import",
  "summary": "Open its progress view, choose Cancel when available, and confirm. Verify that new transfer work stops and completed files remain reviewable.",
  "category": "integrations",
  "articleSlug": "cloud-import-cancel",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import cancel",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Cancel a cloud import** in Dosya. The main action is to open its progress view, choose Cancel when available, and confirm; the decisive check is whether new transfer work stops and completed files remain reviewable.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" alt="Workflow for “Cancel a cloud import”: open its progress view, choose Cancel when available, and confirm; new transfer work stops and completed files remain reviewable." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Cancel a cloud import”: open its progress view, choose Cancel when available, and confirm; new transfer work stops and completed files remain reviewable. <a href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a connected Google Drive, OneDrive, or Dropbox import in the current released client.
- Confirm the active account and workspace, then identify import job that no longer should continue.

## Steps: cancel a cloud import

1. Open a connected Google Drive, OneDrive, or Dropbox import and confirm the active account and workspace.
2. Locate import job that no longer should continue and verify its name or identifying details.
3. Open its progress view, choose Cancel when available, and confirm.
4. Confirm that new transfer work stops and completed files remain reviewable.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Reference for “Cancel a cloud import”: Dosya cloud provider picker with files selected for import." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Cancel a cloud import”: Dosya cloud provider picker with files selected for import. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Provider access is read for the selected import; verify the Dosya destination before starting.

## Verify the result

After completing the steps, check the expected result: New transfer work stops and completed files remain reviewable.

## Expected result

The controlled workflow completes and new transfer work stops and completed files remain reviewable.

## Troubleshooting

**The expected control is missing.** Return to a connected Google Drive, OneDrive, or Dropbox import, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
