---
{
  "articleId": "hc-workspace-storage-read-allocation",
  "locale": "en",
  "revision": 5,
  "title": "Read workspace storage allocation",
  "summary": "Interpret used, total and free workspace storage, distinguish a hard cap from account headroom, and avoid treating allocation as reserved space.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-read-allocation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/api/src/lib/quota.ts, pages/api/workspaces/index.ts, workspaces/[id]/index.ts, workspaces/[id]/upload-limits.ts, apps/web/src/components/layout/dashboard-sidebar.tsx, and storage-view tests. No production request was made.",
  "related": [
    "hc-workspace-storage-allocation",
    "hc-storage-usage"
  ],
  "keywords": [
    "workspace storage read allocation",
    "Workspace storage controls",
    "workspace storage quota",
    "team cloud storage"
  ]
}
---
The workspace switcher summarizes the storage that can actually fit in each workspace. Read **used**, **total** and **free** together because a workspace cap and the owner's account pool are enforced at the same time.

A cap does not reserve bytes. **Free** is the smaller of the workspace's remaining cap and the owner's account-wide remaining entitlement, so sibling workspaces can reduce it even when this workspace has not changed.

<figure class="help-screenshot"><a href="/screenshots/workspace-storage-read-allocation-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-storage-read-allocation-help-workflow-2026-10-14.webp" alt="Workspace storage reading sequence that separates used bytes, displayed total, effective free space and the owner's shared account headroom." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Use the switcher's **free of total** line as the uploadable view, then inspect Hard limits to learn whether that total came from a workspace cap. <a href="/screenshots/workspace-storage-read-allocation-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## How the values are calculated

| Field | Calculation |
| --- | --- |
| **used** | Non-negative bytes charged to this workspace. Content in Trash continues to count until it is permanently emptied. |
| **total** | The explicit workspace cap in bytes when set; otherwise the workspace owner's effective account entitlement. |
| **free** | `max(0, min(total − workspace used, account limit − usage across all owned workspaces))`. |
| **cap** | **Total workspace storage cap** × 1,073,741,824 bytes, or absent when the workspace is uncapped. |
| **account used** | Sum of storage-used counters across every workspace owned by the same account. |

The UI formats binary units: 1 MB is 1,048,576 bytes, 1 GB is 1,073,741,824 bytes and 1 TB is 1,099,511,627,776 bytes. Values at least 1 GB are rounded for display, so use exact byte sizes when testing a tight boundary.

## Steps

1. Open the workspace switcher and locate the intended workspace by name and icon.
2. Record its **… free of …** line. The first value is effective free space; the second is the workspace total described above.
3. Switch to that workspace and open **Settings → Hard limits** if your role has **Access Settings**.
4. Read **Total workspace storage cap**. A blank field means the workspace total follows the owner's entitlement; it does not mean zero bytes.
5. Compare **workspace cap headroom** with the owner's account-wide remaining limit. The smaller amount explains the switcher's effective free-space value.
6. Check **Storage per member** when one uploader is blocked despite workspace-level free space. That separate rule measures the member's existing bytes plus the incoming file.
7. For automation or a custom client, read the workspace upload-limits response. Treat `storage_remaining_bytes` as a hint because its quota cache can be up to 60 seconds old; the upload server makes the final measured-byte decision.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Dosya storage breakdown distinguishing workspace usage from the owner's account-wide remaining storage entitlement." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Account headroom is shared by all owned workspaces, while a workspace cap applies only to the selected workspace's writes. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Examples

An account has 100 GB total and 80 GB used across owned workspaces. Workspace A has a 50 GB cap and 20 GB used. Its cap leaves 30 GB, but the account leaves 20 GB, so Workspace A shows 20 GB free.

An account has 500 GB total and 100 GB used. Workspace B has a 25 GB cap and 24 GB used. Account headroom is 400 GB, but the workspace has only 1 GB left, so its displayed free value is 1 GB.

Removing a 5 GB file to Trash does not immediately change the used counter. Permanently emptying that Trash content releases storage; moving it into another workspace owned by the same account can change the two workspace counters but does not reduce account-wide usage.

## Resolve unexpected readings

**The workspace appears empty but has little free space.** Another workspace owned by the same account is consuming the shared entitlement. Open the account Workspace dashboard to find the owned usage.

**The total equals a smaller round number than the plan.** An explicit **Total workspace storage cap** is active. Only someone with **Access Settings** and **Change total storage cap** can alter it.

**The uploader reached a limit while free space remains.** Inspect **Storage per member**, **Max upload file size**, extension rules and credential-specific limits; the storage figure covers only account and workspace total capacity.

**The value has not caught up with a recent transfer.** Refresh after the operation settles. Preflight remaining bytes may lag by as much as its 60-second cache, while the completion gate measures real bytes before committing them.

## Expected result

The recorded free value matches the smaller applicable headroom and never becomes negative. You can explain whether an upload is constrained by the workspace cap, the owner's shared pool or a separate per-member/file rule before changing settings.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
