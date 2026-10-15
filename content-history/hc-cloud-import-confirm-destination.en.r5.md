---
{
  "articleId": "hc-cloud-import-confirm-destination",
  "locale": "en",
  "revision": 5,
  "title": "Choose a cloud-import destination deliberately",
  "summary": "Confirm the active workspace and the picker’s workspace-root destination before importing, then verify every selected root in Dosya Files safely.",
  "category": "integrations",
  "articleSlug": "cloud-import-confirm-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/google.tsx, apps/web/src/pages/integrations/onedrive.tsx, apps/web/src/pages/integrations/dropbox.tsx, apps/web/src/components/cloud-import/provider-picker-dialog.tsx, and apps/api/src/pages/api/cloud/imports/index.ts. Production destinations were not modified.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-browse-provider"
  ],
  "keywords": [
    "cloud import destination",
    "import to workspace root",
    "cloud storage migration folder",
    "Dosya active workspace"
  ]
}
---
The released Google Drive, OneDrive, and Dropbox integration pages import into the **root of the active Dosya workspace**. Their provider picker does not currently offer a Dosya destination-folder control. Its breadcrumbs navigate the provider account; they do not choose a Dosya folder.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-confirm-destination-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-confirm-destination-help-workflow-2026-10-14.webp" alt="Destination check showing an active Dosya workspace, provider selections, and the picker footer confirming import into workspace root." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Choose the destination by switching the active workspace before opening the provider picker, then read the root-destination footer. <a href="/screenshots/cloud-import-confirm-destination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

You must be a member of the destination and your role must allow file uploads. The start request returns **Not a member of this workspace** when membership is missing and **No upload permission** when the role cannot add files.

Clean up or rename any live destination folders that would unintentionally merge with selected provider roots. The importer reuses a same-name folder under the same parent. It does not create an isolated migration snapshot around every job.

## Steps

1. Use the Dosya workspace switcher to select the destination workspace before opening the integration.
2. Open **Integrations**, choose Google Drive, OneDrive, or Dropbox, and select **Import** for the intended connected account.
3. Browse the cloud-import provider hierarchy. If multiple accounts are connected, verify the email in the account selector before checking anything.
4. Select the required files and folder roots. A checked folder brings its whole subtree, even when it is not expanded in the dialog.
5. Read the footer before submission. It must say **N selected - importing into workspace root**. The `N` is the number of checked roots, not the eventual file count.
6. Select **Import**. The button changes to **Starting...** while the request is submitted, then Dosya shows **Import started** with **From account@example.com** when the account is known.
7. After **Import complete**, return to **Files** and inspect the workspace root. Direct selected files belong there; each checked folder maps to a named root, although an existing live folder with that same name can be reused.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Google Drive picker with checked source items and the footer that names the Dosya workspace-root destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The provider breadcrumb identifies source location; the picker footer is the control that states the current Dosya destination. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## If you need a subfolder destination

Do not infer a Dosya path from the provider breadcrumb. The integration page supplies `workspace root` as the destination, and there is no released subfolder selector in this flow. Import a controlled set into the correct workspace, verify completion, then move the delivered files and root folders in **Files** using your normal move permissions.

Starting the job records its workspace and destination. Switching the visible workspace afterward does not retarget the running import. Return to the originally selected workspace to monitor and verify it.

## Troubleshooting

- **Import failed to start** followed by **No upload permission** requires a role change; reconnecting the provider does not change Dosya permissions.
- **Destination folder not found** applies to callers that submit a folder ID through the import API. The current provider integration pages submit no folder ID and use root.
- **This account needs to be reconnected before you can import** means provider authorization is stale. Select **Reconnect**, complete the provider flow, and reopen the picker.
- A rate-limit banner says the provider is **retrying automatically in Ns**. Wait for that countdown rather than creating duplicate jobs.

Moving imported content afterward is a separate cloud mutation. Confirm the moved tree before deleting any duplicate source or destination material; an import itself reads the provider and does not remove provider data.

## Expected result

The chosen provider account imports into the root of the workspace that was active at submission. Dosya Files shows direct selections at root and each selected provider folder under its named local root, including deliberate reuse of an existing same-name root when applicable.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
