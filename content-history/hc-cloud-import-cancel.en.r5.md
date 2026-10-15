---
{
  "articleId": "hc-cloud-import-cancel",
  "locale": "en",
  "revision": 5,
  "title": "Cancel a cloud import",
  "summary": "Stop an active cloud import, distinguish cancellation from completion races, and understand which copied files and skipped work remain afterward.",
  "category": "integrations",
  "articleSlug": "cloud-import-cancel",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/import-progress-card.tsx, apps/web/src/lib/cloud-import-toasts.ts, apps/api/src/pages/api/cloud/imports/[id]/cancel.ts, apps/api/src/lib/cloud-import/durable-object.ts. Production behavior for “Cancel a cloud import” was not exercised; this revision is awaiting publication.",
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
An import can be cancelled only while its progress card is **Preparing import** or **Importing**. Cancellation stops later discovery or transfer work, but it does not roll back files and folders that already reached the destination.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-cancel-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Cancel a cloud import: Find the active import by provider and source account email. Read Preparing import or Importing counts before canceling. Choose Cancel once, wait for the request to resolve. Open workspace root, keep files that completed before cancellation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Find the active import by provider and source account email.” and ends with “Open workspace root, keep files that completed before cancellation.” <a class="workflow-map-full" href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-cancel-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Files** or the matching provider page and locate the active card by provider and source account email.
2. Read its state and counts first; note that **Preparing import** has an unknown total, while **Importing X of Y files** has finished discovery.
3. Choose **Cancel** on that active card once and wait for the request to finish instead of repeatedly pressing it.
4. Watch for the **Import cancelled** toast with **From account@example.com**; a job that finished during the request may instead report its real terminal result.
5. After **Import cancelled**, open the destination workspace root; completed cloud-import files are deliberately retained.
6. Compare the retained result with the provider tree before starting another import, avoiding a second selection of files that already landed.

The server marks leftover pending and processing items as skipped and aborts unfinished multipart uploads. It leaves completed file rows and storage usage intact. A second cancel against a complete, failed, or already-cancelled job is refused as **Job is already …**; terminal status is never rewritten merely to satisfy a late click.

## Expected result

The active progress card disappears and a cancellation toast identifies the provider account. No new items continue transferring, while fully imported files remain available in Dosya and require an ordinary delete if you do not want them.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
