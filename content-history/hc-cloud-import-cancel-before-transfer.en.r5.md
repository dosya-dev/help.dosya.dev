---
{
  "articleId": "hc-cloud-import-cancel-before-transfer",
  "locale": "en",
  "revision": 5,
  "title": "Cancel a cloud import before it transfers",
  "summary": "Exit the provider picker before a job exists, understand what Cancel clears, and verify that no cloud discovery or file transfer has started.",
  "category": "integrations",
  "articleSlug": "cloud-import-cancel-before-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/components/cloud-import/use-cloud-browser.ts, apps/web/src/stores/cloud-imports.ts, apps/api/src/pages/api/cloud/imports/index.ts. Production behavior for “Cancel a cloud import before it transfers” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-browse-provider"
  ],
  "keywords": [
    "cloud import cancel before transfer",
    "Cloud-import provider controls",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Use this procedure while you are still inside the **Import from …** picker. At this stage the checked rows live only in browser state; Dosya does not create a cloud-import job until you choose **Import** and receive **Import started**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Cancel a cloud import before it transfers: Confirm no Import started toast exists, keep the create request unsent. Choose Cancel in the picker, do not press Import while it closes. Reopen the provider picker, verify Home and 0 selected. If Import started appeared, use active-job cancellation instead." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Confirm no Import started toast exists, keep the create request unsent.” and ends with “If Import started appeared, use active-job cancellation instead.” <a class="workflow-map-full" href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Before acting, check the footer; when **Import** is enabled and no start toast exists, the create request has not been submitted.
2. In the cloud-import picker, record any remote names you may want later because closing it discards the breadcrumb and checked rows.
3. Choose the footer’s **Cancel** button or close the dialog, and do not press **Import** while it is closing.
4. Reopen **Import files** from the same provider page and confirm the breadcrumb begins at **Home** with `0 selected`.
5. Check the provider page and the Integrations sidebar; neither should show a discovering or running cloud-import indicator from this abandoned selection.
6. If an **Import started** toast appeared before cancellation, treat it as a created job and follow the active-job cancellation guide instead.

Closing the picker makes no API call to `/api/cloud/imports`, so it creates no folders, files, job receipt, or storage charge. The reset is irreversible only for the unsent selection state: you must browse and check the remote items again. The footer **Cancel** is distinct from the progress card’s **Cancel**, which stops a server-side job.

## Expected result

Reopening the picker shows **Home**, no checked boxes, and `0 selected`; no new progress card or cloud-import completion toast appears. Provider account access remains connected because cancelling the draft does not disconnect OAuth.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
