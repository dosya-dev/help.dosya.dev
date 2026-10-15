---
{
  "articleId": "hc-desktop-sync-conflict-loop",
  "locale": "en",
  "revision": 5,
  "title": "Stop a repeated desktop sync conflict loop",
  "summary": "Stop recurring desktop sync conflicts by pausing edits, comparing conflict copies, choosing an authoritative result, and verifying stable convergence.",
  "category": "desktop",
  "articleSlug": "desktop-sync-conflict-loop",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/sync/deletion-guard.ts, apps/desktop/src/main/sync/conflict-name.ts, apps/desktop/src/main/sync/conflict-name.test.ts, and apps/desktop/src/main/sync/upload-metadata.ts. Production files were not resolved or deleted.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync conflict loop",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A conflict can recur when another editor or device keeps changing the same path. First stop new writes, then decide between the original remote version and the timestamped local conflict copy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14.webp" alt="Four panels show pausing competing writers, comparing both versions, accepting Keep remote trash-first and permanent-unlink behavior, and resuming without another conflict." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Stop every writer before choosing content, and treat Keep remote as potentially irreversible when operating-system trash refuses. <a class="workflow-map-full" href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-conflict-loop-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Identify every device or editor changing the path and save any unsaved work.
- A resolution can upload over the remote version, remove a local file, or create another copy. **Keep remote** tries operating-system trash first, then permanently unlinks the local file if trash refuses.

## Steps

1. Open **Sync > Overview**, find the affected pair, and choose its **Pause** action. Stop editing the same path on other devices before resolving anything.
2. Open **Issues**. Under the default **Keep both copies** strategy, Dosya often resolves automatically and shows a conflict-copy notice with **Show both versions**.
3. Select **Show both versions** and compare the original path with `name (conflict copy YYYY-MM-DD HH-MM-SS from Device).ext`. Numbered suffixes prevent same-second copies from overwriting each other.
4. For an unresolved card, use **Keep local** only when local bytes should replace the remote version. This explicit choice uploads without the stale version guard that originally caused the conflict.
5. Choose **Keep remote** only when the cloud copy is authoritative. Dosya tries to move the tracked local file to OS trash, permanently unlinks it if trash refuses, drops its local index row, and triggers an immediate poll. Choose **Keep both** to rename and upload the local variant.
6. Delete an unwanted duplicate only after the desired content exists safely, then resume the pair with one writer. Confirm no new conflict-copy notice or unresolved card returns on the next cycle.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-issues-verified-2026-10-11.webp" alt="Desktop Sync Issues view where conflict-copy notices and unresolved conflict cards expose their available actions." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use Issues to distinguish an automatically retained pair of files from a conflict still awaiting a choice. <a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The path converges to the chosen content, or both named versions remain intentionally side by side. A successful **Keep remote** can leave the discarded local version in OS trash or remove it permanently when trash is unavailable; a failed resolution re-adds its conflict card.

If copies keep appearing, pause again and find the remaining writer. Repeated conflict copies are evidence of continuing divergence, not a signal to keep deleting whichever file appears newest.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
