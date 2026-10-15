---
{
  "articleId": "hc-desktop-sync-reconnect",
  "locale": "en",
  "revision": 6,
  "title": "Reconnect sync after sleep or network change",
  "summary": "Recover desktop sync after Wi-Fi, sleep, proxy, or session interruptions; understand automatic retry timing and verify resumed files at both ends.",
  "category": "desktop",
  "articleSlug": "desktop-sync-reconnect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed reconnect state through `apps/desktop/src/main/sync/network-errors.ts`, `remote-client.ts`, `index.ts`, `remote-poller.ts`, and Sync Overview controls on 2026-10-14. Production recovery was not run.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop sync reconnect",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya parks an affected pairing as **Offline** when it cannot reach the service and resumes after connectivity returns. The exact message is **Cannot connect to dosya.dev right now. Sync resumes automatically when the connection is back.** Keep the app running while you restore the network.

<figure class="help-screenshot">
  <a class="workflow-map-link" href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp">
    <picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" alt="Reconnect workflow map for restoring connectivity, waiting for the automatic probe, and checking resumed sync activity." width="1200" height="675" loading="lazy" decoding="async" /></picture>
  </a>
  <figcaption>Restore the underlying connection first, then let the parked pairing probe and resume before forcing another cycle. <a class="workflow-map-full" href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-reconnect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Confirm that the affected local folder or external drive is still mounted. A network recovery cannot repair a missing local path.
- Note the row's status and full error tooltip before restarting anything. **Offline**, **Waiting**, **Needs permission**, **Needs attention**, and **Error** require different responses.
- Keep partial local files and Dosya temporary data in place during recovery. Removing them can discard resumable download state.
- Workspace and file permissions still apply after reconnecting; an authenticated member with insufficient access will not be fixed by Wi-Fi recovery.

## Steps

1. Open **Sync → Overview** and identify the pairing by cloud folder and local path. If status loading itself fails, the page says **Couldn't read sync status** and **The app couldn't reach its sync engine - try restarting dosya.** Select **Try again** before restarting.
2. Restore Wi-Fi, Ethernet, VPN or proxy access. Open a normal Dosya workspace view to confirm the service is reachable, but do not create a replacement pairing.
3. Leave the desktop process open. Network requests use retry delays of roughly **1, 3 and 8 seconds** for retryable failures. A parked Offline pair is probed on the engine's **30-second** recovery cycle.
4. A browser `online` event or computer wake requests a recovery pass immediately and clears the cached proxy decision. Otherwise, a changed proxy route can remain cached for up to **60 seconds** before being recalculated.
5. Watch Activity for **Connection restored - resuming sync**. Depending on mode, recovery restarts its watcher and poller and can run a new scan. A stalled active cycle becomes eligible for a **Still working:** entry only after inactivity exceeds 30 seconds; because the check runs on the next 30-second recovery tick, the entry normally appears about 30–60 seconds after the last progress.
6. Select the row's **Sync now** only after the connection is healthy when you want a fresh pass. If a configured pairing lost its runtime, that control also attempts to start it again.
7. Verify one affected file at the destination. Resumable downloads use a `.dosya-sync-tmp` file and validators; multipart uploads can continue missing parts. The final filename should appear only after a completed download is promoted.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Dosya desktop Sync Activity with recent folder operations used to confirm recovery after a connection interruption." width="1100" height="800" loading="lazy" decoding="async" /></a>
  <figcaption>Match the restored-connection and subsequent transfer entries to the affected folder, then inspect its destination copy. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The Offline warning clears after a successful server probe, the pairing returns to work, and pending eligible changes continue according to its mode. Files that completed before the interruption remain complete; resumed work should not require rebuilding the pairing.

Sleep and wake use a transient pause, so a matching wake resumes without persisting a manual global pause. A deliberate **Pause sync** or **Pause all** is different and must be resumed by the user. Timed snoozes retain their 30-minute, 1-hour, 4-hour or 8-hour deadline across an app restart.

## Troubleshooting

**The message is Session expired. Please log in again.** Sign in again. A refreshed session triggers an immediate recovery check; the background loop also probes session-expired pairs every 30 seconds. Reconnecting the network alone does not renew authentication.

**The row says Waiting.** Respect the displayed rate-limit wait. The engine schedules recovery using the server retry interval plus a one-second buffer; repeatedly selecting Sync now does not shorten it.

**macOS says it needs permission again.** Select **Reselect folder** and choose the same local folder. This is a sandbox bookmark problem, not a network failure.

**Connectivity changed without going offline.** A VPN or corporate proxy switch may not emit the app's online event. Wait out the 60-second proxy cache or restart Dosya if the route remains stale.

**Errors remain after recovery.** Expand **N files not synced**, fix each cause, then select that list's **Retry**. Connectivity can resume transport while a lock, storage limit or filesystem permission continues to block a file.

## Related guides

- [Diagnose desktop sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
