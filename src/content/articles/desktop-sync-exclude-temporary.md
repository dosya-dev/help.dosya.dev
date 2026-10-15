---
{
  "articleId": "hc-desktop-sync-exclude-temporary",
  "locale": "en",
  "revision": 5,
  "title": "Exclude temporary files from desktop sync",
  "summary": "Exclude cache, build, log, and temporary paths while creating a desktop sync pair, including immutable skips and existing-pair recreation limits.",
  "category": "desktop",
  "articleSlug": "desktop-sync-exclude-temporary",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally using apps/desktop/src/renderer/pages/SyncPage.tsx, apps/desktop/src/main/sync/ignore-rules.ts, apps/desktop/src/main/sync/ignore-rules.test.ts, apps/desktop/src/main/sync/ipc-handlers.ts, and apps/desktop/src/main/sync/index.ts. No production pair configuration changed.",
  "related": [
    "hc-desktop-sync-modes",
    "hc-desktop-sync-folder"
  ],
  "keywords": [
    "desktop sync exclude temporary",
    "Desktop sync planning",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The released desktop UI configures exclusions only while creating a sync pair. Existing pairs have no exclusion editor, so changing their patterns requires removing and recreating the pair.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" alt="Four panels show opening Advanced setup, reviewing shipped exclusions, adding one supported narrow pattern, and removing and recreating an existing pair." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Define exact temporary-file rules before Start syncing; changing an existing pair deletes its saved configuration and index state. <a class="workflow-map-full" href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-sync-exclude-temporary-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Name the exact cache, build, log, or temporary entry to exclude and confirm it does not contain source material that belongs in the cloud.
- Removing an existing pair deletes its local sync index and conflict state, although it does not delete the local folder or cloud files.

## Steps

1. Choose **Sync > Add sync folder**, select the cloud and local locations, choose a sync mode, and continue to **Advanced**.
2. Review **Excluded files & folders** before adding anything. The visible defaults already cover entries such as `node_modules`, `.git`, `.env`, `*.log`, `*.part`, and anchored system paths.
3. Enter the narrowest supported pattern and choose **Add**. Use an exact name, a suffix such as `*.log`, a prefix ending in `*`, or an absolute anchored path such as `/bin`; do not assume arbitrary glob behavior.
4. Remove any default that should sync, or choose **Reset to defaults** to restore the shipped list. `/proc`, `/sys`, `/dev`, and `/run` remain skipped regardless of the visible choices.
5. Choose **Start syncing**. Internal `.dosya-sync-` files, Office/LibreOffice lock files, editor backups ending in `~`, and AppleDouble metadata remain technical skips outside the editable list.
6. For an existing pair, use its menu **Remove**, then recreate it with the corrected Advanced list. The removal immediately deletes pair configuration/index state, so expect a fresh scan after recreation.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-modes-2026-10-10.webp"><img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="Desktop sync mode page used before Advanced exclusions determine which temporary entries enter the new pair." width="512" height="676" loading="lazy" decoding="async" /></a><figcaption>Choose the transfer behavior first, then finish the new pair with its exact exclusion list. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The new pair stores the selected exclusion patterns and omits matching entries during scanning and watching. The interface shows **Sync folder added** after successful creation.

There is no Save action or released pattern editor for an existing pair. Removing a pair leaves local and cloud files intact, but its prior local index, queued state, and conflicts cannot be recovered from that pair record.

## Related guides

- [Choose a sync mode](/desktop/sync-modes)
- [Set up a sync folder](/desktop/sync-folder)
