---
{
  "articleId": "hc-duplicates-run-scan",
  "locale": "en",
  "revision": 5,
  "title": "Run an exact duplicate scan",
  "summary": "Understand when Dosya's exact-file scan can run, its D1-only storage limitation, 256 MiB ceiling, progress, visibility, and empty-result meaning.",
  "category": "files",
  "articleSlug": "duplicates-run-scan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/duplicates.tsx, apps/web/src/lib/duplicates.ts, apps/api/src/pages/api/duplicates.ts, apps/api/src/pages/api/internal/duplicate-hash-scan.ts, apps/api/src/lib/duplicates/plan.ts, apps/api/src/lib/duplicates/group.ts, apps/api/src/pages/api/workspaces/[id]/settings.ts, apps/cron/src/index.ts and apps/cron/wrangler.jsonc. Verified opt-in state, D1-only scanner limitation for data_home=do, automatic two-minute schedule, 15-second page polling, 100-candidate and 384 MiB run bounds, 256 MiB per-file ceiling, three attempts, access and visibility scope, group cap and exact empty/error labels. Local source and tests only; production scheduling and object reads were not exercised.",
  "related": [
    "hc-review-duplicates",
    "hc-restore-deleted"
  ],
  "keywords": [
    "duplicates run scan",
    "Duplicate file cleanup",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya finds exact duplicates in a background job. Opening **Duplicates** does not start an on-demand scan, and the current web page has no **Run scan** button. The workspace setting must be enabled through the workspace-settings API by a session whose role has **Access settings** and **Change duplicate scanning**, or by an operator. Current shipped clients do not expose that switch.

<figure class="help-screenshot"><a href="/screenshots/duplicates-run-scan-help-workflow-2026-10-14.webp"><img src="/screenshots/duplicates-run-scan-help-workflow-2026-10-14.webp" alt="Four-stage duplicate scan map showing workspace opt-in, scheduled hashing, a scanning counter, and exact-content groups in Dosya." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Dosya queues eligible files after duplicate scanning is enabled, hashes exact-content candidates in scheduled batches, and refreshes the Duplicates page while work remains. <a href="/screenshots/duplicates-run-scan-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm with the workspace administrator that duplicate scanning is enabled, then open **Duplicates** in the intended workspace. Your role needs **Access files**; otherwise the API returns `You don't have access to the files page`. The current page does not surface its `scan_enabled: false` response and can show **No duplicates found** when scanning is off, so an empty screen alone cannot verify opt-in.
2. Ask an operator or support to confirm the workspace's content placement. The scheduled scanner still reads file rows directly from D1. When `data_home` is `do`, enabling the setting re-arms the object-side queue but the D1-only scanner does not consume it, so automatic hashing is currently unavailable for those files.
3. Look for the progress chip, such as **24 files still being scanned**. While the reported pending count is above zero, the web page requests fresh results every 15 seconds. You may leave the page: the scanner runs independently on its schedule when the workspace uses D1 storage.
4. Allow a working scheduled queue to drain. The production cron is configured every two minutes and asks for at most 100 candidates per run. A run reads at most 384 MiB of eligible content, so a large backlog can need several cycles.
5. Review groups as they appear. Dosya first compares file sizes and reads the complete bytes only for files with a same-size peer. Matching content hashes form an exact group; filenames, extensions and folders can differ.
6. Use each row's folder control to inspect its containing location. Files in a group are ordered by creation time, newest first, and the first copy carries the **newest** label.
7. Read the page total before cleanup. The response can contain at most the 100 groups with the largest reclaimable total. If more exist, the page says **Showing the 100 largest groups of _N_. Clean these up and the rest move up.** The headline totals still cover all groups.

<figure class="help-screenshot"><a href="/screenshots/duplicate-groups-2026-10-12.webp"><img src="/screenshots/duplicate-groups-2026-10-12.webp" alt="Dosya Duplicates page with exact-copy groups, newest markers, folder locations, per-group sizes, and reclaimable-byte totals." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Each result groups byte-for-byte matches and keeps folder location and creation order visible so you can choose a keeper deliberately. <a href="/screenshots/duplicate-groups-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Files larger than 268,435,456 bytes (256 MiB) are marked too large and are not hashed by this scanner version. A hash failure is tried no more than three times. Therefore **No duplicates found** means no exact groups are currently known among eligible, visible files; it is not proof that oversized or repeatedly failed files differ.

For a `data_home = do` workspace, a pending counter that does not fall is consistent with the known scanner limitation. Existing hashes can still produce groups, but waiting through more cron cycles will not hash the object's queued rows; contact support while the product lacks a repository-aware scanner.

The result also follows the viewer's boundaries. A folder-confined member sees only that subtree. Files hidden from the viewer are removed before grouping, so a hidden copy neither appears nor leaves a misleading one-file group. Members with **Hide files** can see hidden content according to the product's privileged visibility rule.

If loading fails, the page shows **Duplicates could not be loaded** with **Retry**. **Scanning your files** means eligible work remains. Once the pending value reaches zero, the settled empty state reads **No duplicates found** and **Every file in this workspace is unique. New uploads are checked automatically.**

## Expected result

In a D1-backed workspace with scanning enabled, eligible files are processed automatically, the pending counter falls over successive scheduled runs, and exact-content groups become available without changing file content. A `data_home = do` workspace will not reach that result through the current scanner. Hashing is read-only; deletion happens only if you separately choose copies and confirm moving them to trash.

## Related guides

- [Review exact duplicates](/files/review-duplicates)
- [Restore deleted files](/files/restore-deleted)
