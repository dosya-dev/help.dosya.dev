---
{
  "articleId": "hc-desktop-sync-review-first-plan",
  "locale": "en",
  "revision": 5,
  "title": "Review a desktop first-sync plan",
  "summary": "Review folders, mode, conflicts, exclusions, and the large-folder estimate before starting; Dosya has no dry-run list of planned operations.",
  "category": "desktop",
  "articleSlug": "desktop-sync-review-first-plan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/folder-estimate.ts, and apps/desktop/src/main/sync/planner.ts; the released production wizard was not rerun.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync review first plan",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya has no dry-run screen listing every planned upload, download, conflict, or deletion. The safe review happens in the **Add sync folder** wizard, followed by a small controlled first transfer.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14.webp" alt="Four-step map for first-sync review: confirm both folder paths, restate the mode’s deletion behavior, review exclusions, then inspect the first Activity operations." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm paths, deletion behavior, and exclusions before Start syncing begins work, then inspect the first Activity operations. <a class="workflow-map-full" href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-review-first-plan-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Back up valuable local data and use a cloud destination whose contents you understand. Prepare a small test folder when a full pair could cause costly transfers or deletions.

The size estimate is advisory. Dosya warns when it sees at least 50,000 files or the scan is truncated, then requires **Sync it anyway**. Estimation stops after 200,000 entries or five seconds, ignores symlinks, and does not count unreadable directories, so the displayed total may be incomplete.

## Steps

1. In **Add sync folder**, confirm the exact **Cloud folder** and **Local folder**, including whether the cloud choice is **Root (entire workspace)**.
2. Select a named mode and restate its deletion behavior before proceeding: Full Sync, Push to Cloud, Protect & Upload, Pull from Cloud, or Save to Device.
3. If using **Full Sync**, choose **Keep both copies** for independent same-path files or **Last write wins** only when timestamps are trusted.
4. Review **Excluded files & folders** and add patterns for generated data, secrets, caches, or other paths that must stay out.
5. Read the file-and-byte estimate; for a large or truncated scan, validate the local tree before enabling **Sync it anyway**.
6. Select **Start syncing** only for the controlled scope, then use **Activity** and **Issues** to inspect the actual first operations.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Reference for “Review a desktop first-sync plan”: Dosya desktop sync mode selection for a local folder and workspace destination." width="512" height="676" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review a desktop first-sync plan”: Dosya desktop sync mode selection for a local folder and workspace destination. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

The button creates the pair and starts work immediately. There is no intervening list to approve, so a disposable sample is the only reliable way to observe the chosen mode before applying it to valuable content.

## Expected result

The initial sample follows the chosen direction, deletion rule, conflict policy, and exclusions. Activity provides the post-start receipt, while Issues identifies work that needs intervention.

If the estimate seems implausibly small, check inaccessible directories and symlinks instead of treating it as an inventory. Cancel the wizard and narrow the selected root before any transfer begins.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
