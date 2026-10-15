---
{
  "articleId": "hc-workspace-storage-change-allocation",
  "locale": "en",
  "revision": 5,
  "title": "Change a workspace storage allocation safely",
  "summary": "Change the whole-GB workspace storage cap within the owner’s entitlement, understand over-cap behavior, and verify the saved limit without deleting files.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-change-allocation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/settings.tsx, apps/api/src/pages/api/workspaces/[id]/settings.ts, apps/api/src/lib/workspace.ts, apps/api/src/lib/storage-allowance/revoke.ts, and packages/test-harness/tests/workspaces.int.test.ts. No production cap was changed.",
  "related": [
    "hc-workspace-storage-allocation",
    "hc-storage-usage"
  ],
  "keywords": [
    "workspace storage change allocation",
    "Workspace storage controls",
    "Dosya help",
    "team cloud storage"
  ]
}
---
**Total workspace storage cap** sets a hard ceiling for new byte-adding operations. Lowering it below current usage blocks further uploads but does not delete existing content.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14.webp" alt="Four-step workspace-cap map showing Hard limits, GB left to allocate, the Limit updated receipt, and one disposable upload at the new boundary." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Save a whole-GB cap or blank value within the shared owner pool, then confirm the stored setting and its upload effect. <a class="workflow-map-full" href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-change-allocation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The actor needs **Access Settings** plus **Change total workspace storage cap**.
- Review workspace usage, owner entitlement, and every explicit cap across the owner’s workspaces.
- Clearing the field removes only this workspace-specific cap; the account and per-member ceilings remain.

## Steps

1. Open **Workspace settings → Hard limits** and locate **Total workspace storage cap**.
2. Record current usage, the saved cap, and the **GB left to allocate** badge.
3. Choose a whole number of at least 1 GB, or leave the field empty to remove this boundary.
4. Select the row’s save control and wait for **Limit updated — Your hard limit has been saved.**
5. Reload Settings and confirm the stored value plus any warning that usage already exceeds it.
6. Use a small disposable upload to verify the new boundary without attempting to fill all remaining storage.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Reference for “Change a workspace storage allocation safely”: Dosya storage breakdown showing used and available workspace capacity." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reference for “Change a workspace storage allocation safely”: Dosya storage breakdown showing used and available workspace capacity. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Allocation rules and effects

The sum of explicit caps across the owner’s workspaces cannot exceed effective account entitlement. Editing a cap returns that workspace’s old allocation before checking the replacement. Values are rounded to whole GB and cannot exceed the plan-backed storage pool.

A tighter cap can revoke an outstanding temporary storage allowance that no longer fits. The change is reversible by an authorized administrator, but uploads refused while over cap do not resume automatically.

## Expected result

The saved whole-GB value reappears after reload, existing files remain untouched, and new byte-adding work is allowed or refused according to the tighter of workspace and account capacity.

## Troubleshooting

**All … GB of your plan is already allocated to workspace limits.** Lower another explicit cap or add entitlement.

**You can allocate at most … GB more.** Enter no more than the remaining amount shown.

**New uploads are blocked until usage drops below the limit.** Permanently empty enough Trash content or raise the cap; moving items to Trash is insufficient.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
