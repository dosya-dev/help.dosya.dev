---
{
  "articleId": "hc-workspace-storage-allocation",
  "locale": "en",
  "revision": 5,
  "title": "Review workspace storage allocation",
  "summary": "Compare account allowance, workspace allocation, workspace cap and current usage before changing limits or moving large data.",
  "category": "workspaces",
  "articleSlug": "storage-allocation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-workspace-policies",
    "hc-storage-usage",
    "hc-plan-upgrade-storage"
  ],
  "keywords": [
    "workspace storage",
    "storage allocation",
    "workspace cap",
    "cloud storage"
  ]
}
---
A workspace can have an allocation or hard cap below the account total. The smallest applicable boundary controls new uploads.

Account allowance, workspace allocation, hard cap and member quota can each block an upload. Compare all applicable limits before changing one.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" alt="Workflow for “Review workspace storage allocation”: review Settings → Hard limits; adjust only the boundary you are authorized to manage." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Review workspace storage allocation”: review Settings → Hard limits; adjust only the boundary you are authorized to manage. <a class="workflow-map-full" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: review workspace storage allocation

1. Open Billing and record account total.
2. Open the workspace dashboard and record used and available storage.
3. Review Settings → Hard limits.
4. Compare allocation, cap and per-member limit.
5. Test with a small upload.
6. Adjust only the boundary you are authorized to manage.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Reference for “Review workspace storage allocation”: Dosya workspace security settings showing sharing and access controls for the active workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review workspace storage allocation”: Dosya workspace security settings showing sharing and access controls for the active workspace. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Workspace controls apply to the active workspace and combine with roles.

## Verify the result

Upload a small test file and confirm usage rises in the intended workspace. Change only the limit you are authorized to manage.

## Expected result

The review workspace storage allocation workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Understand storage usage](/uploading/storage-usage)
- [Add storage](/account/upgrade-storage)
