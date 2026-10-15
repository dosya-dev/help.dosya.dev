---
{
  "articleId": "hc-cloud-import-retry-failed-items",
  "locale": "en",
  "revision": 5,
  "title": "Retry only failed cloud-import items",
  "summary": "Recover failed cloud-import files with a missing-only second import, since the released web app has no per-item retry button or problem list.",
  "category": "integrations",
  "articleSlug": "cloud-import-retry-failed-items",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/cloud-import/transfer.ts, apps/api/src/pages/api/cloud/imports/[id]/index.ts, apps/web/src/lib/cloud-import-toasts.ts, apps/web/src/components/cloud-import/provider-picker-dialog.tsx. Production behavior for “Retry only failed cloud-import items” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import retry failed items",
    "Cloud-import result verification",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
There is no released **Retry failed items** action. The server retries ordinary item errors internally up to three attempts, retires deterministic policy refusals immediately, and reports terminal counts through the completion toast.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Retry only failed cloud-import items: Record the prior failed and skipped counts before the toast disappears. Fix storage policy name-conflict or provider-access causes first. Select only the failed or absent sources, never the original folder. Verify recovered files, confirm completed originals were not reselected." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Record the prior failed and skipped counts before the toast disappears.” and ends with “Verify recovered files, confirm completed originals were not reselected.” <a class="workflow-map-full" href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record the **Import complete** toast’s failed and skipped counts before it fades; a job-level failure instead shows **Import failed** and its error text.
2. Correct the likely cause first: free storage, allow the final extension, raise the workspace file-size limit, resolve a same-name conflict, or reconnect provider access.
3. Compare the provider selection with the Dosya workspace root and make a list containing only files that are absent or known to have failed.
4. Open the same cloud-provider account and select each failed or missing source directly instead of reselecting the original folder.
5. Start this new import and monitor its own card; it is a separate job, not a continuation of the previous receipt.
6. After the retry import’s toast, open every recovered file and confirm completed originals were not reselected into name collisions.

The API can return up to 50 failed or skipped problem rows for a job, but the current web client does not render that endpoint. Provider 429 responses and workspace migrations use job-level backoff without consuming an item attempt. Other transient failures consume one attempt and become permanent on the third strike.

## Expected result

A new, narrowly selected job imports the formerly missing files after their cause is fixed. Previously completed items remain single copies because the retry selection excluded them.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
