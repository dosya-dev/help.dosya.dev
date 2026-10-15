---
{
  "articleId": "hc-cloud-import-compare-counts",
  "locale": "en",
  "revision": 5,
  "title": "Compare cloud-import item counts",
  "summary": "Reconcile a cloud import using its discovered total, completed, failed, and skipped counts, then verify delivered files in the workspace root.",
  "category": "integrations",
  "articleSlug": "cloud-import-compare-counts",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/components/cloud-import/import-progress-card.tsx, apps/web/src/stores/cloud-imports.ts, apps/web/src/lib/cloud-import-toasts.ts, apps/api/src/pages/api/cloud/imports/index.ts, and apps/api/src/lib/cloud-import/discover.ts. Production imports were not run.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import compare counts",
    "cloud storage migration totals",
    "failed imported files",
    "skipped cloud items"
  ]
}
---
The number beside **selected** is the count of checked roots in the provider picker, not the number of files that will arrive. A checked folder can contain many descendants. Dosya discovers that subtree first, then establishes the file total used by the transfer.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-compare-counts-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-compare-counts-help-workflow-2026-10-14.webp" alt="Cloud-import reconciliation flow separating selected roots, discovered files, completed files, failed files, and unsupported skipped entries." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Reconcile transfer totals after discovery; keep unsupported skipped entries separate from the supported-file total. <a href="/screenshots/cloud-import-compare-counts-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Know what each number means

- **N selected** counts the checked files and folders submitted from Google Drive, OneDrive, or Dropbox. A single selected folder is one root even when it contains thousands of files. The request accepts at most **500** selected roots.
- **Preparing import - N files found so far** is a growing discovery count. The progress bar is intentionally indeterminate at this stage because the final denominator is unknown.
- **Importing C of T files** means discovery has finished. `T` contains supported direct selections plus supported files discovered inside selected folders.
- **Completed** records files that were delivered. **Failed** records supported files that were not delivered. Ordinary transfer failures retire on the third strike; a policy refusal or locked-backup destination can fail immediately.
- **Skipped** is reported separately for unsupported provider entries found during traversal. Those entries are not included in `T`.

Therefore the supported-file equation is **completed + failed = total**. Do not add skipped items to `total`, and do not expect the provider picker's selected-root count to equal any of those values.

## Steps

1. Before selecting **Import**, record the footer's **N selected - importing into workspace root** value and note which checked entries are folders.
2. After **Import started**, watch the active card. During **Preparing import**, wait for discovery rather than comparing the changing value with the provider's folder count.
3. When the card changes to **Importing C of T files**, record `T`. The page refreshes active job data every **5 seconds**.
4. Keep the app open long enough to receive the terminal toast. **Import complete** reports the completed count and appends skipped and failed counts when either is nonzero.
5. Verify the arithmetic with the recorded `T`: `completed + failed` must equal `T`; log `skipped` on its own line.
6. Open **Files** at the active workspace root. Count representative delivered files inside each imported root folder, and compare names plus paths against the provider account.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Dosya Files view after a Google Drive import, used to compare delivered items with recorded cloud-import totals." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the destination tree to confirm the completion toast corresponds to actual delivered files, especially when failures or skips were reported. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## If the numbers appear inconsistent

Terminal jobs disappear from the active progress card. The current browser UI has no persistent result drawer for reopening prior counts, so capture the running total and completion toast during the operation. If the toast was missed, inspect the destination rather than inventing a total from **N selected**.

Native provider documents may display **will import as .pdf**, `.xlsx`, `.docx`, or `.pptx`; count the exported Dosya file, not both the source document and its converted output. A same-name destination collision is not overwritten silently: that item eventually contributes to **failed**. Unsupported entries marked **Cannot be imported** cannot be checked directly, while unsupported descendants discovered below a selected folder contribute to **skipped**.

Cancelling stops remaining work but does not roll back files already completed. Likewise, a failed job can leave successful earlier items in the destination. Check the cloud tree before retrying, because a new import is a new job rather than an atomic retry of the old result.

## Expected result

The recorded supported total equals completed plus failed, skipped entries are documented separately, and the delivered tree contains the files counted as complete. Any difference is traced to a named failed, skipped, exported, or already-delivered item instead of the original selected-root number.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
