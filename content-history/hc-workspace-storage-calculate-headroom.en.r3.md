---
{
  "articleId": "hc-workspace-storage-calculate-headroom",
  "locale": "en",
  "revision": 3,
  "title": "Compare used and available workspace storage",
  "summary": "Subtract current usage from the effective allocation and compare the result with the planned bytes. Verify that the transfer has sufficient headroom or must be reduced.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-calculate-headroom",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-workspace-storage-allocation",
    "hc-storage-usage"
  ],
  "keywords": [
    "workspace storage calculate headroom",
    "Workspace storage controls",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Compare used and available workspace storage** in Dosya. The main action is to subtract current usage from the effective allocation and compare the result with the planned bytes; the decisive check is whether the transfer has sufficient headroom or must be reduced.

<figure class="help-screenshot"><a href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" alt="Four-step workflow map for compare used and available workspace storage, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for compare used and available workspace storage: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the workspace storage and usage view in the current released client.
- Confirm the active account and workspace, then identify storage breakdown and a planned transfer size.

## Steps: compare used and available workspace storage

1. Open the workspace storage and usage view and confirm the active account and workspace.
2. Locate storage breakdown and a planned transfer size and verify its name or identifying details.
3. Subtract current usage from the effective allocation and compare the result with the planned bytes.
4. Confirm that the transfer has sufficient headroom or must be reduced.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown showing used and available workspace capacity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Allow storage accounting to update after transfers or permanent deletion before comparing totals. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The transfer has sufficient headroom or must be reduced.

## Expected result

The controlled workflow completes and the transfer has sufficient headroom or must be reduced.

## Troubleshooting

**The expected control is missing.** Return to the workspace storage and usage view, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
