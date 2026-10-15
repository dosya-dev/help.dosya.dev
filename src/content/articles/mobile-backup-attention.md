---
{
  "articleId": "hc-mobile-backup-attention",
  "locale": "en",
  "revision": 6,
  "title": "Review mobile backup items needing attention",
  "summary": "Interpret each mobile backup warning, open the correct recovery control, and restart capped failures without overlooking size-limit skips or holds.",
  "category": "files",
  "articleSlug": "mobile-backup-attention",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/backup/ui/attention.ts, coverageScope.ts, ledger.ts, orchestrator.ts and apps/mobile/app/(tabs)/backup.tsx, backup-failed.tsx, including focused tests. This rewrite is not yet live in production.",
  "related": ["hc-mobile-backup-setup", "hc-mobile-backup-settings"],
  "keywords": ["mobile backup attention", "backup failed items", "photo backup warning", "cloud storage", "file backup"]
}
---
The Backup tab separates setup and policy warnings from individual transfer failures. Use the wording on the row to choose the recovery path; not every row is an error or supports a tap.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-backup-attention-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" alt="Mobile backup recovery map routing setup, photo access, folder coverage, network, paused, failed, and size-limit states." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the displayed warning to its settings, permission, network, or failed-item recovery action. <a class="workflow-map-full" href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-backup-attention-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the **Backup** tab and confirm the workspace in the header. The heading becomes **N things before the first backup** during initial setup or **N things need attention** later when at least two rows exist.
2. Resolve **setup and access** rows first:
   - **Finish setting up backup** returns to onboarding.
   - **Allow photo access** requests library permission.
   - **Limited photo access** opens device Settings so you can widen the operating-system selection.
   - **No folders selected** opens **Device folders**; turn on at least one source.
   - **Choose what to back up** asks you to review broad, every-folder coverage.
3. Use an exclusion warning to open **Device folders** or **Backup settings**, depending on whether its cause is an album, media type, date floor, or size cap.
4. Read connection rows as state, not failed assets. **You're offline** says **Backup resumes when a connection returns.** **Waiting for Wi-Fi** links to settings because automatic work pauses on cellular. **Wi-Fi is off** warns that a manual backup now uses mobile data.
5. For **Auto-backup paused**, fix the displayed storage, membership, or permission cause, wait until the active run drains, then tap the row to retry. It is intentionally non-actionable while the engine still treats the main button as Stop.
6. Tap the **Failed** coverage figure to open **Failed items**. An item appears after its first recorded error. With fewer than 5 attempts it remains eligible for a later automatic scan; the fifth failure retires it until **Retry all N** resets its attempts.
7. Read each filename, byte size, and last error. The screen loads at most the 200 most recent rows but retains the true total and says **Showing the 200 most recent of N.** when more exist.
8. Choose **Retry 1 item** or **Retry all N**. The reset sets every error row in that workspace back to zero attempts and starts a run; **Retrying N items** confirms the action. **Retry failed: <message>** means the restart itself failed.
9. Treat **Skipped by your size limit** separately. Press **Change the size limit** to change future size decisions. The retry button does not reset size-capped rows.

Unreadable originals can also appear in the Backup dashboard. On iPhone, the text identifies an iCloud download or access problem; Android identifies file access. These retry on a later run. An Android asset that still reports zero bytes after a 1.5-second restat consumes an attempt and eventually reaches Failed instead of uploading an empty cloud copy.

Pressing Stop cancels queued work and clears originals waiting for delete-after-backup. A native upload already mid-transfer may still finish server-side; the next run rechecks server fingerprints before deciding whether bytes need to be sent again.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya iPhone and Android app choices for opening the mobile Backup dashboard and its failed-item list." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Open recovery controls in the native app that owns the affected photo-library and background permissions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A corrected policy or permission row disappears when its condition is re-evaluated. A reset transfer leaves **Failed items** after a successful upload; if it returns, its newest error remains visible for diagnosis or **Report these failures**.

The empty failed-items message is **Nothing has failed. Every item in this workspace either finished or is still queued.** It does not count assets deliberately excluded by current filters; the size-limited section is tracked separately.

In the current local implementation, raising the cap does not requeue rows already recorded as `skipped_large`; they remain visible as history. To copy one of those originals immediately, upload it through Files after confirming the workspace's upload limit and your role permission.

## Related guides

- [Complete first-run photo protection](/files/mobile-photo-backup)
- [Edit phone backup conditions](/files/mobile-backup-settings)
