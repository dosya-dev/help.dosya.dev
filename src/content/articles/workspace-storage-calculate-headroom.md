---
{
  "articleId": "hc-workspace-storage-calculate-headroom",
  "locale": "en",
  "revision": 5,
  "title": "Compare used and available workspace storage",
  "summary": "Calculate usable workspace headroom from the optional workspace cap and owner account pool, then compare the smaller result with the planned transfer.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-calculate-headroom",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/dashboard.tsx, apps/web/src/components/layout/profile-menu.tsx, apps/api/src/lib/quota.ts, apps/api/src/lib/kv-cache.ts, and apps/api/src/lib/upload/measured-quota.ts. Production storage was not changed.",
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
Usable headroom is constrained by both the active workspace and its owner’s account. An explicit workspace cap is a ceiling, not reserved capacity, so sibling workspaces can consume the shared account pool.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" alt="Four-step headroom map showing account-menu totals, workspace usage and cap, owner-wide subtraction, and the smaller result with allowance margin." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Dashboard storage is workspace-scoped; account totals live in the account menu, and temporary allowances can make visible headroom overstate the upload gate. <a class="workflow-map-full" href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-calculate-headroom-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the workspace is owned by the account whose entitlement you are reading; shared workspaces consume their owner’s pool.
- Record the planned transfer’s exact bytes, including every file that will be added.
- Content in Trash still counts until permanent deletion completes.

## Steps

1. Open the account menu and record the owner-wide used and total storage; the Dashboard figures describe only the active workspace.
2. Switch to the destination workspace and open **Workspace settings → Hard limits**.
3. Record current workspace usage and **Total workspace storage cap**; a blank cap means no workspace-specific ceiling.
4. Compute displayed account headroom as `owner entitlement − usage across owned workspaces`.
5. When a workspace cap exists, compute displayed cap headroom as `cap bytes − workspace used bytes`; convert each GB using 1,073,741,824 bytes.
6. Use the smaller non-negative remainder and compare it with the planned transfer, leaving room for concurrent uploads.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Reference for “Compare used and available workspace storage”: Dosya storage breakdown showing used and available workspace capacity." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reference for “Compare used and available workspace storage”: Dosya storage breakdown showing used and available workspace capacity. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Other limits to check

Equality with a ceiling is allowed, but a concurrent commit can consume space before yours completes. **Storage per member** can bind even when workspace headroom remains, and maximum file size, extension rules, role limits, and credential limits are separate.

Displayed values are rounded and omit temporary storage allowances already reserved by in-progress writes. The upload gate subtracts both the workspace allowance and the sum of owner-wide allowances, so displayed headroom can exceed commit-time capacity. The server makes an atomic measured-byte decision at commit; this calculation is planning evidence rather than a reservation.

## Expected result

You can identify the likely account or workspace ceiling and estimate whether planned bytes fit, while reserving margin for hidden allowances, concurrent writes, and other policies.

## Troubleshooting

**Free space is lower than the cap calculation.** Another owned workspace is consuming the shared account entitlement.

**The uploader is refused despite total headroom.** Review **Storage per member**, file-size policy, role limits, and the exact quota error.

**The values changed during the calculation.** Refresh both views and recompute; capacity is not reserved by reading it.

**The gate refuses fewer bytes than the interface showed free.** An in-progress operation may hold a workspace or owner allowance that the visible used totals do not include. Wait for it to settle, then retry the calculation.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
