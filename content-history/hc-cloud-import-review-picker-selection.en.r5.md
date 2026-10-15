---
{
  "articleId": "hc-cloud-import-review-picker-selection",
  "locale": "en",
  "revision": 5,
  "title": "Review a cloud-import picker selection",
  "summary": "Audit every selected import root before submission, account for paging and exports, and avoid assuming a checked folder shows all descendants.",
  "category": "integrations",
  "articleSlug": "cloud-import-review-picker-selection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/components/cloud-import/use-cloud-browser.ts, apps/api/src/pages/api/cloud/imports/index.ts, apps/api/src/lib/cloud-import/discover.ts. Production behavior for “Review a cloud-import picker selection” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-browse-provider"
  ],
  "keywords": [
    "cloud import review picker selection",
    "Cloud-import provider controls",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The picker retains checked roots while you navigate within one account, but it does not expand a checked folder into a visible preflight list. Recursive discovery happens only after import starts, so review folder contents manually when scope matters.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Review a cloud-import picker selection: Confirm the provider email and begin from the Home breadcrumb. Load every page, note unsupported and converted provider rows. Uncheck mistakes, watch the selected count update immediately. Import only when email roots and workspace-root destination agree." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Confirm the provider email and begin from the Home breadcrumb.” and ends with “Import only when email roots and workspace-root destination agree.” <a class="workflow-map-full" href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-review-picker-selection-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the provider email above the browser and start from the **Home** breadcrumb for a predictable review.
2. Visit each folder you may select, use **Load more** through every page, and note unsupported rows or provider-native export extensions.
3. Return through the cloud-import breadcrumb and check the intended folder root; that single check includes its descendant tree.
4. Uncheck each mistaken cloud-import file or folder, and watch the picker footer count change immediately.
5. Compare the count with your root-level checklist and require the footer to say **importing into workspace root**.
6. Choose **Import** only after the source email, selected roots, and destination label all agree; otherwise use **Cancel** and restart cleanly.

The service accepts at most 500 selected roots in one request and refuses zero roots with **Select at least one file or folder**. That limit is not a cap on descendants inside checked folders. Reopening the dialog or changing provider accounts clears both navigation and selection.

## Expected result

The submitted roots are exactly those on the checklist, provider-native conversions are anticipated, and recursive folders contain no surprise area you skipped during review. The start toast identifies the account used.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
