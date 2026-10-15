---
{
  "articleId": "hc-cloud-import-progress",
  "locale": "en",
  "revision": 6,
  "title": "Monitor and verify a cloud import",
  "summary": "Read discovery, byte progress, speed, ETA, and terminal toasts accurately, then verify the destination because active cards do not become history.",
  "category": "integrations",
  "articleSlug": "import-progress",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/import-progress-card.tsx, apps/web/src/stores/cloud-imports.ts, apps/web/src/components/layout/cloud-import-indicator.tsx, apps/web/src/lib/cloud-import-toasts.ts, apps/web/src/lib/import-rate.ts. Production behavior for “Monitor and verify a cloud import” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-destination",
    "hc-cloud-import-troubleshoot",
    "hc-review-duplicates",
    "hc-storage-usage"
  ],
  "keywords": [
    "import progress",
    "cloud import job",
    "verify import",
    "failed import item",
    "import completed",
    "duplicate import",
    "file transfer"
  ]
}
---
Dosya polls cloud-import jobs every 5 seconds while at least one job is active. The main Files page shows all active providers; each provider setup page filters its card to that provider, and the sidebar ring follows imports across pages.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-light-href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/import-progress-workflow-map-2026-10-14.webp" alt="Four-step workflow map for Monitor and verify a cloud import: Identify the progress card by provider and source account email. During discovery, read Preparing import and files found so far. During transfer, follow file counts, bytes, speed and time remaining. Read the terminal toast, preserve complete failed and skipped counts." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Identify the progress card by provider and source account email.” and ends with “Read the terminal toast, preserve complete failed and skipped counts.” <a class="workflow-map-full" href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-light-href="/screenshots/import-progress-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/import-progress-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Locate the card by its provider label and **from account@example.com** source line before interpreting its counts.
2. During discovery, read **Preparing import — N files found so far** and the indeterminate bar; totals and percentages are not final yet.
3. During transfer, use **Importing X of Y files** plus bytes; speed and a remaining-time estimate need two valid samples and disappear on a stall.
4. Keep Dosya open for 5-second import progress polls; the Integrations sidebar combines percentages for sized active jobs.
5. Read the terminal toast: **Import complete** includes completed, skipped, and failed counts; **Import failed** carries the job error; cancellation names its account.
6. Open the workspace root immediately after the toast and verify representative folders and files because the active card disappears at terminal status.

The released web UI does not provide a persistent import-history screen or expose the API’s per-item problem list. Discovery bytes mean “found so far,” not a final denominator. Completion invalidates Files and Photos caches, but a source-versus-destination check is still required before deleting provider data.

## Expected result

You can distinguish discovery from transfer, avoid treating an early count as final, and retain the terminal toast counts long enough to record them. Destination samples open successfully and agree with the source tree.

## Related guides

- [Choose an import destination](/integrations/import-destination)
- [Troubleshoot cloud imports](/troubleshooting/cloud-imports)
- [Review exact duplicates](/files/review-duplicates)
- [Understand storage usage](/uploading/storage-usage)
