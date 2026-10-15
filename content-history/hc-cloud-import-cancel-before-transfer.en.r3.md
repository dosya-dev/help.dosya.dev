---
{
  "articleId": "hc-cloud-import-cancel-before-transfer",
  "locale": "en",
  "revision": 3,
  "title": "Cancel a cloud import before it transfers",
  "summary": "Choose Cancel or leave the flow before final confirmation, then verify no active job was created. Verify that the unwanted selection does not begin importing.",
  "category": "integrations",
  "articleSlug": "cloud-import-cancel-before-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Cancel a cloud import before it transfers** in Dosya. The main action is to choose Cancel or leave the flow before final confirmation, then verify no active job was created; the decisive check is whether the unwanted selection does not begin importing.

<figure class="help-screenshot"><a href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow map for cancel a cloud import before it transfers, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for cancel a cloud import before it transfers: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cloud-import-cancel-before-transfer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Cloud import in the current released client.
- Confirm the active account and workspace, then identify review screen for an import that should not proceed.

## Steps: cancel a cloud import before it transfers

1. Open Integrations > Cloud import and confirm the active account and workspace.
2. Locate review screen for an import that should not proceed and verify its name or identifying details.
3. Choose Cancel or leave the flow before final confirmation, then verify no active job was created.
4. Confirm that the unwanted selection does not begin importing.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Cloud provider picker with reviewed files and folders selected for import." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a disposable provider folder first and grant only the access requested by the picker. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The unwanted selection does not begin importing.

## Expected result

The controlled workflow completes and the unwanted selection does not begin importing.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Cloud import, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
