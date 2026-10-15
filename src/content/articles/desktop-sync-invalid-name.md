---
{
  "articleId": "hc-desktop-sync-invalid-name",
  "locale": "en",
  "revision": 5,
  "title": "Fix a desktop sync invalid-name error",
  "summary": "Use the exact desktop sync error to decide whether a name needs changing, retry that item, and confirm the corrected path reaches the cloud.",
  "category": "desktop",
  "articleSlug": "desktop-sync-invalid-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/main/sync/index.ts, apps/desktop/src/renderer/pages/SyncPage.tsx, apps/api/src/pages/api/upload/init.ts, apps/api/src/pages/api/sync/commit.ts, apps/api/src/lib/entity-name.ts, and apps/api/src/lib/validation-policy.generated.ts; production invalid-name handling was not rerun.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-conflicts"
  ],
  "keywords": [
    "desktop sync invalid name",
    "Desktop sync failure details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
An unusual name is not automatically invalid. Use the exact message in **Issues** before renaming anything, because the upload service sanitizes some characters and different operating systems impose different local rules.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" alt="Four-step map for an invalid-name issue: locate the failed item, shorten a name over 255 characters, use pair-level Retry, then verify the cloud result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Correct the recorded name error, prepare every listed failure, then use the pair-level Retry control and verify this path. <a class="workflow-map-full" href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-invalid-name-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Sync** and expand the **N files not synced** pill. The expanded list is titled **N files could not be synced** and shows the path, the server or operating-system error, and either **will retry** or **won’t retry**. Keep a copy before renaming a path used by another application.

Dosya’s direct upload endpoint trims whitespace, replaces `/` and `\` with `_`, strips control characters, and changes a whole `.` or `..` name to `_`. It rejects a blank result and a name over 255 characters with **Name too long (max 255)**. Characters such as `<`, `>`, double quotes, and apostrophes are not universally rejected by that server policy.

## Steps

1. Expand the pair's failed-file list and locate the item that did not sync; **Retry** acts on every listed error for that pair.
2. Copy the complete path and exact error text before choosing whether a rename is needed.
3. If the message is **Name too long (max 255)**, shorten the final name to 255 characters or fewer while retaining any useful extension.
4. For a local filesystem refusal, remove only the character or path form named by that operating-system error and keep the corrected name unique in its folder.
5. Return to the pair and select its single **Retry** control only after every listed error is ready to run again; avoid **Clear** because it only dismisses the recorded issues.
6. Confirm the row disappears after transfer and check the corrected cloud path, file size, and readable contents.

A failed item is normally retried up to five times before the ledger marks it **won’t retry**. Renaming many files based on a generic portability list can create needless changes or collisions, so fix one representative path first.

## Expected result

The corrected item uploads under the intended unique name and no longer appears in the failed-file list. The local original remains available under its new name, and unrelated files are unchanged.

If a renamed item still fails, record the new exact error. A separator may have been sanitized already, while a permission, collision, path-length, or locked-file failure needs a different remedy.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
