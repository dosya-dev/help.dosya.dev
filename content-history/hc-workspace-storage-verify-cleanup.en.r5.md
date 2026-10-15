---
{
  "articleId": "hc-workspace-storage-verify-cleanup",
  "locale": "en",
  "revision": 5,
  "title": "Verify storage after cleanup",
  "summary": "Confirm permanent deletion released workspace storage, distinguish Trash from purge, and reconcile bytes after versions and concurrent activity settle.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-verify-cleanup",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/api/src/lib/files/purge.ts, apps/api/src/pages/api/files/batch-delete.ts, apps/api/src/lib/files/prune-versions.ts, apps/web/src/pages/dashboard.tsx, and apps/api/src/lib/upload/measured-quota.ts. No production file was deleted.",
  "related": [
    "hc-workspace-storage-allocation",
    "hc-storage-usage"
  ],
  "keywords": [
    "workspace storage verify cleanup",
    "Workspace storage controls",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Moving a file to Trash does not reduce `storage_used_bytes`. Capacity returns only when the stored object and charged versions are permanently purged, an irreversible operation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14.webp" alt="Four-step cleanup map showing the usage baseline, unchanged storage after Trash, irreversible permanent deletion, and refreshed byte reconciliation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Record the baseline, purge only reviewed Trash entries, and reconcile the refreshed totals with purged bytes and concurrent changes. <a class="workflow-map-full" href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-verify-cleanup-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Select only disposable items and record their file plus version sizes before acting.
- Pause or account for uploads, copies, imports, and version creation during the measurement.
- Permanent deletion cannot restore the file, its versions, share context, comments, or related history.

## Steps

1. Open the destination workspace’s storage view and record its used bytes before cleanup.
2. Move the selected item to Trash and confirm the used value does not decrease at this stage.
3. Review the Trash selection again, including folders and every contained file or stored version.
4. Choose the permanent delete or empty-Trash action and confirm the irreversible prompt.
5. Wait for the purge and storage-counter update to complete, then refresh the workspace and account views.
6. Subtract the new value from the baseline and reconcile the result with purged bytes plus any concurrent storage changes.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Reference for “Verify storage after cleanup”: Dosya storage breakdown showing used and available workspace capacity." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify storage after cleanup”: Dosya storage breakdown showing used and available workspace capacity. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What frees capacity

Trash preserves content for recovery and therefore remains charged. The purge path removes stored objects, file rows and relevant versions, then decrements the workspace counter without allowing it below zero. Version-retention pruning can also release bytes independently.

A displayed total can be rounded, and cached preflight quota hints can lag by up to about 60 seconds. Use exact sizes and a quiet test window for a precise comparison.

## Expected result

The used counter remains unchanged after trashing, falls only after permanent purge, and the measured difference is explainable from deleted versions and any concurrent writes.

## Troubleshooting

**Usage did not change.** Confirm the item was permanently deleted rather than left in Trash, then refresh after the quota cache window.

**The reduction is smaller than the visible file size.** Check whether some versions or folder contents remain and whether new uploads occurred.

**The reduction is larger than expected.** Version pruning or another administrator’s cleanup may have happened concurrently; use activity timestamps and exact item records.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
