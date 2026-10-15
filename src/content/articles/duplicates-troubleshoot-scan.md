---
{
  "articleId": "hc-duplicates-troubleshoot-scan",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot duplicate scan results",
  "summary": "Diagnose missing or stalled duplicate results using scan status, exact-match rules, file-size limits, retry counts, and current workspace visibility scope.",
  "category": "files",
  "articleSlug": "duplicates-troubleshoot-scan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/api/src/pages/api/duplicates.ts, apps/api/src/pages/api/internal/duplicate-hash-scan.ts, apps/api/src/lib/duplicates/plan.ts, apps/web/src/pages/duplicates.tsx, apps/cron/src/index.ts, and apps/cron/wrangler.jsonc on 2026-10-14. Production queues were not inspected.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates troubleshoot scan",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Duplicate results appear only after eligible files receive content hashes. The page can therefore be empty while a scan is still working, or remain empty because the suspected files are not byte-for-byte identical.

<figure class="help-screenshot"><a href="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp" alt="Four-step troubleshooting map for opening Duplicates, waiting for scan progress, checking suspected files for exact equality, and refreshing results." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map separates scan delay from a valid result where similar-looking files are not exact duplicates. <a href="/screenshots/duplicates-troubleshoot-scan-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Recognize the page state.** While candidates remain, Dosya shows **Scanning your files** and says results appear as the scan progresses. The web page polls every 15 seconds. A request failure shows **Duplicates could not be loaded** with **Retry**. Do not treat **No duplicates found** as proof by itself: duplicate scanning is opt-in for each workspace, and the current page renders the same empty message when the API reports `scan_enabled: false`.

## Steps

1. Verify the active workspace and your scope. You need membership plus `access_files`; confinement limits results to your subtree and hidden files are filtered out.
2. Confirm that duplicate scanning is enabled for the workspace. It starts disabled until someone with `change_duplicate_scan` permission enables it. If the page offers no setting, ask a workspace owner or support to inspect the `/api/duplicates?workspace_id=...` response: `scan_enabled: false` means no duplicate verdict exists yet.
3. If **Scanning your files** appears, leave the page open for at least one 15-second poll, then refresh. The scheduled worker is configured to run every two minutes, so newly queued files may not start instantly.
4. Compare the suspected files outside visual preview. A group requires equal byte size and equal content hash; similar images, exports, or documents with metadata differences are not exact matches.
5. Check size. One scan run accepts up to 100 candidates and a total byte budget of 384 MiB. A single file above 256 MiB is marked too large for this scanner. Failed candidates stop retrying after three attempts.
6. If more than 100 groups exist, the page displays only the largest 100 while its totals cover all groups. Cleaning visible groups causes lower-ranked groups to move into view.
7. Use **Retry** only for a page-load failure. Repeated browser retries do not override file caps or reset exhausted hash attempts.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Duplicates page with two exact-match groups and the total 55 MB reclaimable summary." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the populated state that appears after hashes produce groups; it is distinct from scanning and empty states. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Current storage limitation.** The scheduled scanner reads its supported D1-backed file rows. Workspaces whose file records or object queues live only in the Durable Object storage path are not consumed by that worker, so an empty result there may reflect the current implementation rather than unique content.

**Escalation details.** Record the workspace ID, affected file IDs, byte sizes, upload times, whether **Scanning your files** persists, and the exact load error. Do not repeatedly re-upload large files merely to trigger hashing; that consumes more storage without changing the scanner’s per-file ceiling.

## Expected result

Eligible byte-identical files eventually appear together, or the investigation identifies disabled scanning, scope, visibility, size, retry exhaustion, unsupported storage routing, or genuine byte differences as the reason they do not.

## Related guides

- [Interpret exact-duplicate results after scanning](/files/review-duplicates)
- [Recover files after duplicate troubleshooting](/files/restore-deleted)
