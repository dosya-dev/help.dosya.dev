---
{
  "articleId": "hc-version-restore-test",
  "locale": "en",
  "revision": 5,
  "title": "Restore an earlier version with a safety check",
  "summary": "Restore older bytes as a new append-only version, check permissions and locks, verify the new Latest row, and keep the complete history recoverable.",
  "category": "files",
  "articleSlug": "version-restore-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/versions.ts, and apps/api/src/pages/api/files/[id]/versions/restore.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-version-history",
    "hc-file-details"
  ],
  "keywords": [
    "version restore test",
    "Version history operations",
    "Dosya help",
    "cloud storage"
  ]
}
---
Restore does not rewind or erase history. Dosya verifies the old object still exists, then creates a new version that points to those bytes and marks that new row as Latest.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/version-restore-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-restore-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-restore-test-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/version-restore-test-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/version-restore-test-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for previewing an older row, choosing Restore, waiting for the toast, and verifying a new Latest version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map depicts append-only restoration rather than destructive rollback. <a class="workflow-map-full" href="/screenshots/version-restore-test-workflow-map-2026-10-14.webp" data-light-href="/screenshots/version-restore-test-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/version-restore-test-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Versions** and preview the candidate revision. Record its number, size, time, and content before making it current.
2. Preserve any work that exists only in the present Latest version. It remains in history, but active viewers will switch after restore.
3. Check eligibility: you need `upload_files`; the file cannot have any own lock mode, be hidden from you, sit outside your folder scope, or belong to a locked WordPress backup.
4. Choose **Restore** on the older row. The button is disabled while that request runs, and the UI reports **Restored — Restored to vN.** when successful.
5. Wait for the Versions list to reload. The restored bytes appear in a newly numbered top row marked **Latest**; the source row and former latest row remain below it.
6. Reopen or refresh the preview and test the file. Compare its size and content with the source revision, then keep or restore forward again if the validation fails.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="Versions inspector with Restore controls on v2 and v1 beneath a v3 Latest row." width="400" height="560" loading="lazy" decoding="async" /></a><figcaption>An older row’s Restore control creates another top version; it does not relabel that old row as Latest in place. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Exact failures.** The API can return `Cannot restore versions on a locked file`, `You don't have permission to modify files`, `Version not found`, or `Version data no longer exists in storage`. A restore also changes current size and modification metadata and emits a version-restored activity/notification.

## Expected result

A new highest version number becomes Latest and serves the chosen older bytes. Every prior row remains available, making the restore reversible through another append-only restore.

## Related guides

- [Understand the Versions inspector](/files/version-history)
- [Check file details after restoration](/files/file-details)
