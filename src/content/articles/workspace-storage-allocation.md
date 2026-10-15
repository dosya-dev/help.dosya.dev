---
{
  "articleId": "hc-workspace-storage-allocation",
  "locale": "en",
  "revision": 6,
  "title": "Review workspace storage allocation",
  "summary": "Compare account entitlement, owned-workspace usage and explicit workspace caps so you can identify the limit that will block the next upload.",
  "category": "workspaces",
  "articleSlug": "storage-allocation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/api/src/lib/quota.ts, plans.ts, pages/api/workspaces/[id]/index.ts and settings.ts, plus apps/web/src/pages/settings.tsx and create-workspace.tsx. No production action was performed.",
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
Dosya applies two storage ceilings to byte-adding operations: the workspace owner's account entitlement and the active workspace's optional **Total workspace storage cap**. An upload must fit under both.

An explicit workspace cap is an upload boundary, not reserved capacity. An uncapped sibling workspace can still consume the owner's shared account pool, and the sum of all explicit workspace caps cannot exceed that owner's effective entitlement.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" alt="Storage allocation check comparing account-wide entitlement and usage with one workspace's optional total-storage cap." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Identify whether the account pool or the workspace cap has less headroom before changing a limit or scheduling a large transfer. <a class="workflow-map-full" href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-light-href="/screenshots/storage-allocation-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/storage-allocation-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Values to compare

| Displayed value | Meaning |
| --- | --- |
| **Your storage** on the Workspace dashboard | Account-wide limit, used bytes across every workspace you own, and remaining entitlement. Shared workspaces do not consume your pool. |
| **Where your space comes from** | Current base plan plus eligible packages, custom storage, active license grants and referral storage. These rows sum to the enforced account limit. |
| Workspace **used** | Bytes currently charged to this workspace, including content that remains in Trash. |
| **Total workspace storage cap** | Optional hard ceiling for this workspace. Blank means no workspace-specific cap; the account limit still applies. |
| **GB left to allocate** | Whole-GB capacity that can still be assigned among explicit workspace caps. It is not the same as uploadable free space. |
| **Storage per member** | An additional ceiling on bytes attributed to one uploader, independent of the total workspace cap. |

The settings UI labels these values **GB**, while enforcement uses 1 GB = 1,073,741,824 bytes. Storage caps are stored as whole GB. New uploads are refused when their bytes would cross a ceiling; equality is allowed.

## Steps

1. Open the workspace switcher and choose **Workspace dashboard**.
2. Record **used**, **free of**, and the source rows under **Where your space comes from**. This view measures only workspaces you own; **Shared with you** uses each owner's storage.
3. Select the intended owned workspace, then open **Settings → Hard limits**.
4. Read **Total workspace storage cap**, **Storage per member**, and the **GB left to allocate** badge. Keep blank limits distinct from zero values.
5. Calculate workspace-cap headroom as `cap bytes − workspace used bytes`. Calculate account headroom as `account limit − usage across owned workspaces`.
6. Treat the smaller non-negative result as the capacity available to this workspace. A concurrent upload elsewhere can reduce account headroom before your next transfer begins.
7. If a cap must change, enter a whole number of GB and select its Save button. Built-in Owner and Admin roles have the required permission; a custom role needs **Access Settings** plus **Change total storage cap**.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Workspace Hard limits reference where total storage, per-member storage and remaining allocatable GB are reviewed." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The active workspace's hard-limit rows are separate from the owner-level entitlement shown on the Workspace dashboard. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What happens after a cap change

- Saving a tighter cap takes effect for new byte-adding operations after the settings cache is invalidated. Existing files are not deleted.
- If current usage is already above the new cap, Settings warns: **This workspace uses …, above its … GB limit. New uploads are blocked until usage drops below the limit - emptying the trash frees space toward that.**
- Lowering a cap can revoke an outstanding temporary storage allowance that no longer fits. That revocation is committed with the cap change.
- Clearing **Total workspace storage cap** removes only this workspace-specific boundary. It does not increase the owner's plan or bypass a per-member limit.
- Other workspace administrators receive a deduplicated settings-change notification; the action is also recorded in workspace activity.

## Resolve allocation errors

**All … GB of your plan is already allocated to workspace limits. Lower another workspace's limit or upgrade your plan.** The explicit caps already consume the whole entitlement. Reduce a cap in another owned workspace or add storage.

**You can allocate at most … GB more (… of … GB already allocated to workspace limits).** Enter that remaining amount or less. Editing an existing cap returns its current allocation to the available calculation before the replacement is checked.

**This workspace has a … GB storage limit and this doesn't fit. Empty the trash here or raise the limit in workspace settings.** Permanently empty enough Trash content, reduce the incoming transfer, or raise the cap.

**You've used … of … across all your workspaces.** The account entitlement binds first. Removing content from only the active workspace helps only after that content is permanently deleted; moving it to another owned workspace does not reduce account usage.

## Expected result

You can name the exact binding limit before the next upload: owner entitlement, total workspace cap, or per-member cap. A saved cap reappears after refresh, and a small controlled upload increases usage in the intended workspace without crossing either storage ceiling.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Understand storage usage](/uploading/storage-usage)
- [Add storage](/account/upgrade-storage)
