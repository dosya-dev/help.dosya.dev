---
{
  "articleId": "hc-desktop-sync-offline",
  "locale": "en",
  "revision": 6,
  "title": "Understand Offline desktop sync status",
  "summary": "Understand the Offline state, its 30-second recovery probe, and the activity receipt that proves an existing sync pair resumed after reconnection.",
  "category": "desktop",
  "articleSlug": "desktop-sync-offline",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/network-errors.ts, apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/tray.ts, and apps/desktop/src/main/sync-status-summary.ts; no production outage was induced.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop sync offline",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Offline** means the desktop sync engine cannot currently reach Dosya. The pair is retained, local files remain in place, and the client checks for a usable session again instead of requiring a new configuration.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-offline-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-offline-workflow-map-2026-10-14.webp" alt="Four-step map for Offline desktop sync: confirm the status and activity message, restore connectivity, wait for a recovery probe, then verify resumed work." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Reconnect the existing sync pair and use its activity and file result to confirm automatic recovery without recreating it. <a class="workflow-map-full" href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-offline-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Sync** and identify the affected pair by its workspace, cloud folder, and local root. Its message can read **Cannot connect to dosya.dev right now. Sync resumes automatically when the connection is back.** The tray summary shows **Offline** when all pairs are disconnected or **N offline** when only some are affected.

## Steps

1. Record the pair name, current **Offline** status, and its latest entry under **Activity**.
2. Confirm that the device has internet access and that a firewall, VPN, captive portal, or proxy is not blocking Dosya.
3. Restore desktop connectivity without removing the sync pair, changing its folders, or duplicating the same local work.
4. Bring Dosya online or wake the device to request an immediate sync check; otherwise allow up to 30 seconds for the periodic recovery probe.
5. Wait while the successful workspace-region probe returns desktop sync to its normal scan and polling cycle.
6. Verify a known pending sync change reaches the other side and the pair's current status has recovered; the earlier connection-loss entry remains in **Activity** as history.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Reference for “Understand Offline desktop sync status”: Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Understand Offline desktop sync status”: Verified Dosya desktop Sync Activity view showing transfer and connection state. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

The activity receipt for this transition is **Lost the connection to dosya.dev - sync will resume by itself when it is back**. Recovery can pass through an idle or syncing state before **Synced**, so the label need not change directly from Offline to Synced.

## Expected result

The existing pair reconnects and resumes its queued or newly detected work. No folder mapping is recreated, and a known pending change provides the final receipt.

A user-paused, rate-limited, permission-blocked, or confirmation-required pair keeps that condition instead of being replaced by Offline. Resolve the displayed state if connectivity is already healthy.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
