---
{
  "articleId": "hc-desktop-verify-recovery-restart",
  "locale": "en",
  "revision": 5,
  "title": "Verify desktop recovery after a restart",
  "summary": "After restarting Dosya, let its persisted queue resume, inspect Activity and Issues, then verify one cloud result or capture the repeated error.",
  "category": "desktop",
  "articleSlug": "desktop-verify-recovery-restart",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/sync/index-db.ts, apps/desktop/src/main/sync/ops-queue.test.ts, apps/desktop/src/main/sync/restart-policy.ts, apps/desktop/src/main/sync/remote-client.ts, and apps/desktop/src/renderer/pages/SyncPage.tsx; production recovery was not forced.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop verify recovery restart",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya stores unfinished sync operations in SQLite. After a restart, operations that were marked running return to pending and can resume; wait for that queue before manually retrying a file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14.webp" alt="Four-step map for restart recovery: record pending work, restart Dosya, let persisted operations resume, then verify one result or capture its repeated error." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use Activity, Issues, and a concrete cloud receipt to distinguish successful restart recovery from a stable repeatable failure. <a class="workflow-map-full" href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-verify-recovery-restart-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Record the affected pair, path, status, timestamp, and nonsecret error. Avoid editing the same local file during restart, because a manual duplicate change can obscure whether the persisted operation recovered.

## Steps

1. In **Sync**, capture the current **Activity** entry and any row under **N files not synced** before closing Dosya.
2. Restart the application once, reopen Sync, and look for **Resuming N operations...** before taking another action.
3. Allow the desktop sync queue and multipart status checks to run; do not create a duplicate upload for the same path.
4. If rows remain, read every **will retry** or **won't retry** state, fix their causes, then use the pair's single **Retry** control to retry all listed errors.
5. Use **Sync now** when the pair needs a fresh scan rather than a retry of one recorded failure.
6. Verify the cloud path, version, and file size, or capture the identical repeated error with its new timestamp.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Reference for “Verify desktop recovery after a restart”: Verified Dosya desktop sync activity showing transfer states." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify desktop recovery after a restart”: Verified Dosya desktop sync activity showing transfer states. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

Completed operation records are retained for seven days; failed and pending work is not removed by that completed-record sweep. Multipart uploads can query remote status and continue missing parts instead of blindly starting the entire file again.

If the renderer cannot reach the engine, it shows **Couldn't read sync status** and **The app couldn't reach its sync engine - try restarting dosya.**, with **Try again**. The engine restarts immediately after its first crash, waits one second after a second crash within 60 seconds, and parks after a third; 60 healthy seconds reset that ladder.

## Expected result

The persisted operation finishes and the cloud receipt matches the intended file, or the same specific error returns with enough evidence for diagnosis. A missing issue without a matching cloud result is not proof of success.

If the engine has parked after repeated crashes, restart the application and preserve the captured evidence for a problem report rather than cycling Retry continuously.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
