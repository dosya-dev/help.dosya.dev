---
{
  "articleId": "hc-desktop-sync-local-permission",
  "locale": "en",
  "revision": 5,
  "title": "Fix a desktop sync local-permission error",
  "summary": "Distinguish a lost macOS folder grant from an unreadable file, restore the required access, and verify that the corrected desktop path can sync again.",
  "category": "desktop",
  "articleSlug": "desktop-sync-local-permission",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/bookmarks.ts, apps/desktop/src/main/sync/index.ts, and apps/desktop/src/renderer/pages/SyncPage.tsx; macOS permission recovery was not retested in production.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync local permission",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A macOS folder authorization problem has a different recovery path from a locked or unreadable file. Read the pair status and failed-item message before changing operating-system permissions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14.webp" alt="Four-step map for local access recovery: distinguish pair permission from failed files, reselect a lost grant, use pair-level Retry after repair, then verify." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Follow the exact status, repair every listed cause, then use pair-level Retry and verify the destination file. <a class="workflow-map-full" href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-local-permission-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

A sandboxed macOS installation can show **Needs permission** with **macOS needs permission to this folder again.** The action is **Reselect folder**. Ordinary access failures appear in **N files not synced**, where the row includes its local path, error, and retry state.

Close editors, media applications, backup tools, or security scanners that may be holding the item. Do not grant broad disk access until the specific path and operating-system refusal have been identified.

## Steps

1. Open **Sync** and determine whether the pair says **Needs permission** or a single file appears in the failed-file list.
2. For **Needs permission**, select **Reselect folder** and authorize the original folder, or its new location if it was moved or renamed.
3. For an unreadable sync item, close the process holding it and restore desktop read or write access for the signed-in operating-system user.
4. Reopen the pair and confirm the displayed local root is the intended path before allowing transfers to continue.
5. Read each row's **will retry** or **won't retry** state, repair every listed cause, then select the pair's single **Retry** control to reset and retry all listed errors.
6. Check that the pair leaves **Needs permission** or the failed row clears, then verify the file on the destination side.

Outside the macOS bookmark flow, a root that cannot be accessed can surface as **Sync folder not found: <path>**. Confirm that the drive is mounted and the folder exists before recreating a pair.

## Expected result

The desktop process can read or write the selected path again. The pair resumes with its original mapping, and the previously blocked item reaches the intended destination.

Transfer paths do not classify every access failure alike: large-file and live-watcher branches can mark messages containing `permission` or `EPERM` as permanent, while other paths use a narrower upload-error classifier. The row's **will retry** or **won't retry** label is authoritative; after repair, pair-level **Retry** resets even the listed permanent rows.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
