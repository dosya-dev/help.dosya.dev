---
{
  "articleId": "hc-desktop-inspect-issue-details",
  "locale": "en",
  "revision": 5,
  "title": "Inspect a desktop sync issue safely",
  "summary": "Read desktop sync pair errors, macOS permission loss, conflict notices, and per-file failure records without exposing contents or credentials.",
  "category": "desktop",
  "articleSlug": "desktop-inspect-issue-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/status-assembly.ts, apps/desktop/src/main/sync/status-assembly.test.ts, and apps/desktop/src/renderer/lib/report-problem-store.ts. No production sync pair was retried or cleared.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop inspect issue details",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Desktop sync has two evidence locations. **Issues** shows pair-level errors, permission loss, notices, and unresolved conflicts; **Overview** expands the per-file error ledger from the `N files not synced` badge.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" alt="Four panels show reading an Issues pair card, reselecting a macOS folder, expanding files not synced, and retrying only after the named cause is fixed." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the exact error surface and retry label; pair cards, permission recovery, and the file ledger have different controls. <a class="workflow-map-full" href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-inspect-issue-details-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Select the workspace that owns the sync pair, then open **Sync**.
- Avoid copying file contents or credentials. Paths and filenames can themselves be private, so share only what support needs.

## Steps

1. Open **Issues** and locate the affected remote folder. A pair error card shows the folder name, exact error message, local path, **Retry**, and **Report**; there is no separate details drawer.
2. For `macOS needs permission to this folder again.`, choose **Reselect folder**. This Mac App Store state needs a renewed sandbox grant and deliberately does not offer **Retry**.
3. Read nonfatal notices before acting. A conflict-copy notice offers **Show both versions**; degraded watching, skipped files, or held deletions describe conditions that an ordinary retry cannot repair.
4. Return to **Overview** when the row shows `N files not synced`, then expand that badge. The true count remains visible even when the client lists only the 200 most recent attempts.
5. For each listed file, record its path, message, timestamp tooltip, and **will retry** or **won’t retry** label. These labels distinguish transient attempts from entries the engine stopped retrying automatically.
6. After fixing the named cause, use **Retry** to reset every failed file in the pair, including permanent and undisplayed entries. **Clear** only dismisses the ledger; later scans can try those files again.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Desktop Sync activity and status area used alongside Issues to correlate a visible error with its occurrence time." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Correlate the selected pair’s exact error with nearby sync activity while keeping private file data out of the report. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The evidence identifies whether the fault belongs to the whole pair, a lost macOS grant, a conflict/notice, or individual files. **Report** opens the problem form with the pair’s error message prefilled.

A successful retry leaves rows listed until their files sync. If the pair remains in **Error**, preserve the exact message and submit a report rather than guessing from generic permission or storage causes.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
