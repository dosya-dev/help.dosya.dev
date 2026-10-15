---
{
  "articleId": "hc-trash-retention",
  "locale": "en",
  "revision": 6,
  "title": "Understand automatic trash retention",
  "summary": "Know when Free and paid cloud trash becomes eligible for daily permanent purge, how plan changes affect timing, storage, and when recovery ends.",
  "category": "files",
  "articleSlug": "trash-retention",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/api/src/pages/api/internal/files/purge-trash.ts, apps/api/src/pages/api/internal/files/purge-trash.unit.test.ts, apps/api/src/lib/plans.ts, apps/api/src/lib/files/purge.ts, apps/cron/src/index.ts, apps/cron/wrangler.jsonc, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/index.ts and apps/api/src/pages/api/folders/[id]/index.ts. Verified effective-owner-plan windows of 7/30 days, daily bounded sweep, restore-race check, leaf-first empty-folder removal, quota behavior, manual irreversible purge and restore limits. Local source/tests only; production cron execution was not observed.",
  "related": [
    "hc-restore-deleted",
    "hc-permanent-delete"
  ],
  "keywords": [
    "trash retention",
    "trash and restore",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya automatically purges aged trash according to the workspace owner's effective plan: seven days for Free and 30 days for paid plans. The age starts from each item's `deleted_at` time. Purge permanently removes recoverability; it is not an archive tier.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/trash-retention-workflow-map-2026-10-14.webp" alt="Trash retention timeline showing seven-day Free eligibility, 30-day paid eligibility, daily purge processing, and the end of restoration." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the owner's effective plan and the recorded deletion time to estimate eligibility, then restore before the applicable daily sweep can permanently remove the item. <a class="workflow-map-full" href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/trash-retention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/trash-retention-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Files → Deleted** in the correct workspace. The sidebar entry requires **Delete own files** or **Delete any file**.
2. Use list view and find the **Deleted** date. Under **Columns**, enable **Exact dates** if a relative value does not give enough precision.
3. Determine the workspace owner's effective plan, including subscription status and grace. A currently effective paid entitlement uses 30 days; an owner evaluated as Free uses seven days.
4. Count from the recorded deletion time. The server selects rows older than the applicable cutoff, so the item becomes eligible after the full seven- or 30-day interval rather than at the beginning of that calendar day.
5. Restore anything needed before eligibility. Select **Restore** on a file or a trash-root folder. Restore retains storage usage because trash never stopped counting those bytes.
6. If immediate space recovery is required and the data is disposable, choose **Delete permanently**, read the confirmation and proceed only with an independent copy. Manual purge can end recovery earlier than the automatic window.

<figure class="help-screenshot"><a href="/screenshots/deleted-items-2026-10-12.webp"><img src="/screenshots/deleted-items-2026-10-12.webp" alt="Dosya Deleted view used to inspect a trashed item's deletion time before its plan-based purge window." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The deletion timestamp is the retention clock; file modification, upload and last-viewed times do not set the purge deadline. <a href="/screenshots/deleted-items-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The production scheduler invokes trash cleanup daily. Eligibility does not promise deletion at an exact minute: the job processes bounded batches, retries failed work on later runs and can leave a backlog. Treat the plan duration as the latest safe restore window, not as a guaranteed grace period beyond it.

Plan evaluation happens during the sweep. A cancellation that is still inside its recognized grace period remains effectively paid. Once the owner is effectively Free, trash already older than seven days can qualify on the next run even if it was originally deleted during a paid subscription. Upgrading can make the 30-day window apply to rows not yet purged, but it cannot recover objects already removed.

Files are rechecked immediately before purge. If a restore wins that race and the row is no longer trashed, the cleanup skips it. Permanent purge removes file data, retained versions and associated metadata through the shared purge path, decrements workspace storage, and cannot recreate share links that soft deletion revoked.

Folders are removed only after their contents are gone. The automatic job deletes eligible empty leaves first, so a deep trashed tree can disappear over consecutive daily runs. A folder used as a member's assigned root is deliberately retained instead of silently changing that member's scope. Folder-scoped API keys are removed when their eligible folder is finally purged.

The current Deleted page's banner says trashed items continue using storage. If the workspace is full, waiting for retention leaves quota occupied until the purge actually succeeds; permanent deletion is the user-controlled way to reclaim it sooner.

## Expected result

Free-owner trash becomes eligible after seven days and paid-owner trash after 30 days, then a daily bounded job removes due content permanently. Before that purge, permitted members can restore items without adding a second quota charge.

## Related guides

- [Restore deleted items](/files/restore-deleted)
- [Permanently delete files](/files/permanently-delete-files)
