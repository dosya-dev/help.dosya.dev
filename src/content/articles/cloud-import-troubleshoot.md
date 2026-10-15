---
{
  "articleId": "hc-cloud-import-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a cloud import",
  "summary": "Isolate a cloud import failure with one supported item, the exact destination and job receipt, then handle reconnect, quota or partial completion safely.",
  "category": "troubleshooting",
  "articleSlug": "cloud-imports",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/components/cloud-import/use-cloud-browser.ts, apps/web/src/components/cloud-import/import-progress-card.tsx, apps/web/src/stores/cloud-imports.ts, apps/web/src/lib/cloud-import-toasts.ts, apps/api/src/pages/api/cloud/imports/index.ts, apps/api/src/pages/api/cloud/imports/[id]/index.ts, apps/api/src/pages/api/cloud/imports/[id]/cancel.ts, apps/api/src/lib/cloud-import/transfer.ts, apps/api/src/lib/cloud-import/sweep.ts. Production behavior for “Troubleshoot a cloud import” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-destination",
    "hc-cloud-import-progress",
    "hc-storage-usage"
  ],
  "keywords": [
    "cloud import failed",
    "Google Drive import error",
    "OneDrive import error",
    "Dropbox import error",
    "partial import",
    "import troubleshooting",
    "cloud storage troubleshooting",
    "Dosya help"
  ]
}
---
Cloud imports expose provider browsing, destination authorization, discovery, and transfer as separate stages. Test one supported item to identify which stage failed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-imports-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-imports-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" alt="Four panels show confirming the provider account, checking the importing-into destination, following active job counts, and retrying only a narrow source selection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use one controlled import, its active counts, and the final toast to isolate account, destination, quota, or transfer failures. <a class="workflow-map-full" href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-imports-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open Google Drive, OneDrive, or Dropbox import and confirm the connected email. Use **Connect an account** for **No account connected yet.** or **Reconnect** only when the picker says the account needs reconnection.
2. At **Home**, select one ordinary supported file. Rows marked **Cannot be imported** are disabled; a provider-native document may instead say **will import as `.ext`**. If provider browsing is rate-limited, the picker displays its retry countdown and retries automatically.
3. Before **Import**, read the footer `<count> selected - importing into <destination>`. The destination is chosen outside the provider browser and requires workspace membership plus `upload_files`.
4. Start the test. Respect **Select at least one file or folder** and the maximum of 500 selected roots; preserve **Import failed to start** and its exact API message if no job is created.
5. Follow the active card, polled every five seconds, through **Preparing import** and **Importing X of Y files**. At a terminal state the card disappears: **Import complete** reports completed, skipped, and failed counts; **Import failed** shows the job error; **Import cancelled** identifies the provider or account source. A picker rate-limit countdown defaults to 30 seconds when the provider supplies no valid delay.
6. Verify completed Dosya files before removing provider originals. If the completion toast reports failed or skipped items, make a new narrow source selection from your own source inventory; the web UI does not expose their names from the job-detail response.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Google Drive picker with a controlled selection and the Dosya destination stated in the footer." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>The footer confirms both selection count and destination before the import job is created. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled file reaches the named destination, or the job exposes a specific reconnect, unsupported-type, membership, **No upload permission**, **Destination folder not found**, quota, or transfer result.

Imports stream in 10 MiB chunks, cap one buffered stream at 32 MiB, and allow three item attempts; a provider rate limit does not consume an attempt. Completed jobs can still report failed or skipped items.

Cancelling skips pending or processing work and aborts active multipart state, but already completed files remain. A terminal job refuses cancellation with **Job is already `<status>`**; cancellation does not roll back imported files.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Choose an import destination](/integrations/import-destination)
- [Monitor and verify an import](/integrations/import-progress)
- [Understand storage usage](/uploading/storage-usage)
