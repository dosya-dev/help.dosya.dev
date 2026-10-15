---
{
  "articleId": "hc-cloud-import-browse-provider",
  "locale": "en",
  "revision": 5,
  "title": "Browse a connected cloud account before importing",
  "summary": "Navigate a connected provider safely, interpret picker labels and paging, and keep an exact selection while moving between remote folders before import.",
  "category": "integrations",
  "articleSlug": "cloud-import-browse-provider",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/components/cloud-import/use-cloud-browser.ts, apps/api/src/pages/api/cloud/browse.ts, apps/api/src/lib/cloud-import/types.ts. Production behavior for “Browse a connected cloud account before importing” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import browse provider",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The provider picker is a read-only browser for Google Drive, OneDrive, or Dropbox. Opening a folder changes what you can inspect; checking a folder selects its entire subtree for import without requiring you to open every child.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Browse a connected cloud account before importing: Open Import files for the intended provider, confirm the picker title. Match the provider account email, reset to Home after any account switch. Select only importable rows, note every provider-document conversion label. Reconcile the selected count, confirm the destination is workspace root." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Import files for the intended provider, confirm the picker title.” and ends with “Reconcile the selected count, confirm the destination is workspace root.” <a class="workflow-map-full" href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-browse-provider-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the provider integration page, choose **Import files**, and verify the dialog title says **Import from Google Drive**, **OneDrive**, or **Dropbox** as intended.
2. If an account selector appears, match its email before browsing; changing accounts resets the breadcrumb to **Home** and clears the old selection.
3. Choose a folder name to enter it, then use the breadcrumb back to **Home** without losing selections in that account.
4. Check only wanted rows; leave **Cannot be imported** entries disabled and note the exact extension on any provider document marked **will import as …**.
5. Choose **Load more** whenever it appears because the current list is only one provider page; an empty completed page instead says **This folder is empty.**
6. Compare the footer’s selected count with your checklist, confirm it says **importing into workspace root**, and leave the dialog open until the review is complete.

A provider 429 keeps the current view and displays that it is “retrying automatically in Ns”; wait for that timer rather than reconnecting. **Could not list that folder** has a manual **Retry** control. **This account needs to be reconnected before you can import** means the saved provider token was rejected and requires the separate **Reconnect** flow.

## Expected result

The breadcrumb identifies the inspected remote path, every checked row belongs to the chosen provider email, all result pages have been loaded, and the footer count equals the roots you intend to import. Selecting one folder counts as one root even though discovery later expands its descendants.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
