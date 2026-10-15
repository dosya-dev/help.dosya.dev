---
{
  "articleId": "hc-cloud-import-disconnect-after-verify",
  "locale": "en",
  "revision": 4,
  "title": "Disconnect a cloud account after verification",
  "summary": "Verify results, record any failed items, disconnect the provider, and confirm existing Dosya files remain. Verify that future provider access is removed while imported copies stay in Dosya.",
  "category": "integrations",
  "articleSlug": "cloud-import-disconnect-after-verify",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import disconnect after verify",
    "Cloud-import result verification",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Disconnect a cloud account after verification** in Dosya. The main action is to verify results, record any failed items, disconnect the provider, and confirm existing Dosya files remain; the decisive check is whether future provider access is removed while imported copies stay in Dosya.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" alt="Workflow for “Disconnect a cloud account after verification”: verify results, record any failed items, disconnect the provider, and confirm existing Dosya files remain; future provider access is removed while imported copies stay in Dosya." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Disconnect a cloud account after verification”: verify results, record any failed items, disconnect the provider, and confirm existing Dosya files remain; future provider access is removed while imported copies stay in Dosya. <a href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a completed or partially completed cloud import in the current released client.
- Confirm the active account and workspace, then identify connected provider account whose imports are complete.

## Steps: disconnect a cloud account after verification

1. Open a completed or partially completed cloud import and confirm the active account and workspace.
2. Locate connected provider account whose imports are complete and verify its name or identifying details.
3. Verify results, record any failed items, disconnect the provider, and confirm existing Dosya files remain.
4. Confirm that future provider access is removed while imported copies stay in Dosya.

<figure class="help-screenshot"><a href="/screenshots/import-google-import-result-2026-10-11.webp"><img src="/screenshots/import-google-import-result-2026-10-11.webp" alt="Reference for “Disconnect a cloud account after verification”: Dosya cloud-import result showing completed items and their destination." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Disconnect a cloud account after verification”: Dosya cloud-import result showing completed items and their destination. <a href="/screenshots/import-google-import-result-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Compare the result with the provider source before disconnecting the account.

## Verify the result

After completing the steps, check the expected result: Future provider access is removed while imported copies stay in Dosya.

## Expected result

The controlled workflow completes and future provider access is removed while imported copies stay in Dosya.

## Troubleshooting

**The expected control is missing.** Return to a completed or partially completed cloud import, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
