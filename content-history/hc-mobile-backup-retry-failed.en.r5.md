---
{
  "articleId": "hc-mobile-backup-retry-failed",
  "locale": "en",
  "revision": 5,
  "title": "Retry failed mobile backup items",
  "summary": "Reset every mobile backup error row in one batch, distinguish five-attempt foreground and background states, and handle size skips and fatal pauses.",
  "category": "files",
  "articleSlug": "mobile-backup-retry-failed",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/backup-failed.tsx, apps/mobile/app/(tabs)/backup.tsx, apps/mobile/src/backup/ledger.ts, apps/mobile/src/backup/orchestrator.ts, apps/mobile/src/backup/transport/backgroundTransport.ts, apps/mobile/src/backup/ui/ActivityFeed.tsx, and apps/mobile/src/backup/ui/CoverageRing.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-mobile-background"
  ],
  "keywords": [
    "mobile backup retry failed",
    "Mobile backup status and widgets",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s **Failed items** screen lists every ledger row whose current status is `error`; it does not wait for the row to reach five attempts. Retry behavior differs between foreground processing, background staging, and native background transfer.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14.webp" alt="Mobile backup failure workflow: open Failed items, review all error rows, fix their shared cause, use the single batch Retry all action, clear a separate Paused state, and verify current results." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile backup failure workflow: open **Failed items**, review all error rows, fix their shared cause, use the single batch **Retry all** action, clear a separate **Paused** state, and verify current results. <a class="workflow-map-full" href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-retry-failed-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**What the screen contains**

Open the Backup failure count to reach **Failed items**. It loads all `error` rows for the active workspace, whether the row failed once or has exhausted its five-attempt allowance. The list holds at most 200 recent error rows and says **Showing the 200 most recent of _N_.** when more exist; the button count and reset still use the true ledger total.

## Steps

1. Read the displayed filenames and exact errors, then fix the shared cause: restore photo access, make the original readable, unlock or permit the destination, reconnect, or resolve workspace storage and membership.
2. Select **Report these failures** when the visible errors cannot be explained. The report includes the total number of `error` rows, including rows beyond the 200 displayed.
3. Choose **Retry 1 item** or **Retry all _N_**. There is no item-details screen or per-row retry control. The batch action changes every `error` row in the active workspace to `pending`, sets its attempts to zero, clears its stored error, and starts a backup run.
4. Watch for **Retrying 1 item** or **Retrying _N_ items**. If the reset or run call throws, Dosya reports **Retry failed: _reason_**.
5. Check cloud **Files** and reopen **Failed items**. A successful row disappears from the error list; a current failure can return with a new error and attempt count.

### How the five-attempt limit differs by path

In foreground processing, an `error` row below five attempts can be tried on a later run; the scanner excludes it after attempt five. Native background transfer failures instead return the row to `pending` and add one attempt, so the planner can retry it while `attempts < 5`.

An unreadable native background staging result also stays `pending` while its attempt count increases. Once it reaches five, the planner excludes it, but it does not become an `error` row and therefore does not appear in **Failed items** or respond to **Retry all**. If the original is now readable but remains stuck in that state, report the case rather than expecting the failure screen to reset it.

An empty background-staged file or a direct-upload initialization refusal becomes `error` immediately. That row appears in **Failed items** and waits for the batch retry action even if it has used fewer than five attempts. A native staging budget or device-space stop does not charge an item attempt.

### Skipped files and fatal pauses

Rows under **Skipped by your size limit** are not part of retry. Use **Change the size limit**; retrying the same settings would skip them again. This list also loads at most 200 recent rows while retaining the true total.

A workspace-fatal error can record the affected item and set a separate **Paused** state before later items begin. Resolve the workspace condition, return to the main **Backup** screen, and tap the **Paused** backup control whose caption says **Tap to retry**. **Retry all** resets error rows but does not clear that workspace pause by itself.

When no error rows or size skips remain, the screen says **Nothing has failed. Every item in this workspace either finished or is still queued.** That message can include a pending background-staging row which has reached its attempt cap, because the screen checks only `error` and `skipped_large` rows.

## Expected result

The batch button resets every visible or undisplayed `error` row for the active workspace and starts a run after its cause is fixed. Size skips, a separate workspace pause, and capped background-staging rows that remain `pending` require their own recovery paths.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
