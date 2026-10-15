---
{
  "articleId": "hc-cloud-import-destination",
  "locale": "en",
  "revision": 5,
  "title": "Choose a cloud-import destination",
  "summary": "Confirm where provider imports land in the current release, select the active workspace first, and verify the root destination before transfer.",
  "category": "integrations",
  "articleSlug": "import-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/google.tsx, apps/web/src/pages/integrations/onedrive.tsx, apps/web/src/pages/integrations/dropbox.tsx, apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/api/src/pages/api/cloud/imports/index.ts. Production behavior for “Choose a cloud-import destination” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress",
    "hc-import-google-drive",
    "hc-organize-files"
  ],
  "keywords": [
    "import destination",
    "cloud import folder",
    "select import files",
    "Google Drive destination",
    "OneDrive destination",
    "Dropbox destination",
    "cloud storage integration",
    "Dosya help"
  ]
}
---
The released Google Drive, OneDrive, and Dropbox setup pages currently pass `destFolderId=null`; their picker therefore imports into the active workspace root. The footer is the authoritative destination label and says **importing into workspace root**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/import-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/import-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/import-destination-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/import-destination-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/import-destination-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Choose a cloud-import destination: Switch to the receiving Dosya workspace before opening cloud import. Confirm membership and upload permission for that workspace. Require the picker footer to say importing into workspace root. After completion, locate the imported root item in the active workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Switch to the receiving Dosya workspace before opening cloud import.” and ends with “After completion, locate the imported root item in the active workspace.” <a class="workflow-map-full" href="/screenshots/import-destination-help-workflow-2026-10-14.webp" data-light-href="/screenshots/import-destination-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/import-destination-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Switch Dosya to the workspace that should receive the files before opening the provider integration page.
2. Confirm your role can upload there; the API refuses a non-member with **Not a member of this workspace** and a restricted role with **No upload permission**.
3. Choose the account’s **Import** action, select one reviewed file or folder, and read the footer before submission.
4. Require the footer to show the intended count followed by **importing into workspace root**; stop if you expected a nested folder picker.
5. Choose **Import** and wait for **Import started**, which fixes the workspace and null root destination on the job.
6. After completion, open the active workspace root and locate the imported top-level file or selected folder.

The dialog component can accept a folder ID, and the API validates that such a destination is live, but no released provider page currently supplies one. Do not promise a nested target based on test-only component support. Selecting a remote folder creates or reuses that folder at the workspace root and maps its descendants below it.

## Expected result

The import appears in the active workspace root. A selected remote file lands directly there; a selected remote folder appears as a top-level folder whose subtree is discovered in the background.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor cloud-import progress](/integrations/import-progress)
- [Import from Google Drive](/integrations/google-drive)
- [Organize files after import](/files/organize-files)
