---
{
  "articleId": "hc-cloud-import-retry-failed-items",
  "locale": "en",
  "revision": 3,
  "title": "Retry only failed cloud-import items",
  "summary": "Inspect the failure reason, correct access or storage, and retry only the failed subset when supported. Verify that completed items stay single copies while failed items are retried.",
  "category": "integrations",
  "articleSlug": "cloud-import-retry-failed-items",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Retry only failed cloud-import items** in Dosya. The main action is to inspect the failure reason, correct access or storage, and retry only the failed subset when supported; the decisive check is whether completed items stay single copies while failed items are retried.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp" alt="Four-step workflow map for retry only failed cloud-import items, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for retry only failed cloud-import items: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cloud-import-retry-failed-items-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a completed or partially completed cloud import in the current released client.
- Confirm the active account and workspace, then identify import result with completed and failed entries.

## Steps: retry only failed cloud-import items

1. Open a completed or partially completed cloud import and confirm the active account and workspace.
2. Locate import result with completed and failed entries and verify its name or identifying details.
3. Inspect the failure reason, correct access or storage, and retry only the failed subset when supported.
4. Confirm that completed items stay single copies while failed items are retried.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Dosya cloud-import result showing completed items and their destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare the result with the provider source before disconnecting the account. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Completed items stay single copies while failed items are retried.

## Expected result

The controlled workflow completes and completed items stay single copies while failed items are retried.

## Troubleshooting

**The expected control is missing.** Return to a completed or partially completed cloud import, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
