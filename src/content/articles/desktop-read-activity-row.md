---
{
  "articleId": "hc-desktop-read-activity-row",
  "locale": "en",
  "revision": 5,
  "title": "Read a desktop sync activity row",
  "summary": "Interpret desktop Sync Activity timestamps, pair names, raw messages, live elapsed state, and the separate structured transfer progress view.",
  "category": "desktop",
  "articleSlug": "desktop-read-activity-row",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/index.ts, and apps/desktop/src/main/sync/types.ts. Production sync logs and customer workspace data were not read.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop read activity row",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A row in **Sync > Activity** is a timestamped engine message, not a structured transfer receipt. File direction, byte progress, percentage, and ETA appear separately on **Overview** while a transfer is active.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14.webp" alt="Four panels show the Activity empty state, the local log timestamp, the remote-folder or pair-ID column, and the richer live transfer fields in Overview." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read Activity for log time and pair identity; use Overview when the question needs direction, bytes, speed, or ETA. <a class="workflow-map-full" href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-read-activity-row-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Open **Sync** and identify the pair or remote folder involved.
- Remember that Activity receives the global recent log list; changing workspaces does not prove every visible line belongs to the selected workspace.

## Steps

1. Select **Activity**. When no entries exist, the page says **No sync activity yet** and **Activity will appear here when syncing starts**.
2. Read the first column as local time with hours, minutes, and seconds. It marks when the engine appended the message, not a server-side completion receipt.
3. Read the second column as the remote folder name. If the current pair list cannot resolve the log’s pair ID, Dosya shows the first eight ID characters instead.
4. Read the remaining text as the raw engine message. Interpret exactly what it says; the row has no separate direction, progress, or final-state fields.
5. Use the live header above the log for currently syncing pairs. It shows the remote folder, `statusText` or **Syncing…**, and an elapsed clock that updates every second.
6. Switch to **Overview** for active upload/download icons, filenames, bytes transferred, file counts, percentage, speed context, and ETA. At most five active transfer rows appear before a `+N more transferring...` line.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Desktop Sync Activity interface with timestamp, folder identifier, and message columns." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Each visible log line consists of time, pair label, and engine message; transfer metrics live elsewhere. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The correct interpretation ties a time and raw message to a pair without inventing structured fields. The engine retains up to 200 log entries, while each status response exposes the latest 50.

If progress appears stalled, compare the live header and Overview status before reporting it. Activity can stay quiet during a long phase even while the one-second elapsed clock confirms the pair remains active.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
