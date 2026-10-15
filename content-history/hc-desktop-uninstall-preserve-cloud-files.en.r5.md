---
{
  "articleId": "hc-desktop-uninstall-preserve-cloud-files",
  "locale": "en",
  "revision": 5,
  "title": "Uninstall the desktop app while preserving cloud files",
  "summary": "Verify cloud and local-only files, remove each sync pair, then uninstall with the correct Windows, macOS, or Linux data-retention expectation.",
  "category": "desktop",
  "articleSlug": "desktop-uninstall-preserve-cloud-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/electron-builder.yml, apps/desktop/src/main/sync/index.ts, and apps/desktop/src/renderer/pages/SyncPage.tsx; no production installation was uninstalled.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop uninstall preserve cloud files",
    "Desktop app lifecycle details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Uninstalling Dosya does not issue cloud deletion requests or erase synchronized folders. Protect any local-only work first, remove active sync pairs, and then apply the operating system’s uninstall behavior.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14.webp" alt="Four-step map for safe uninstall: inventory pairs and failures, verify cloud objects in the web app, remove pairs without deleting files, then recheck cloud paths." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Record every pair, verify the cloud independently, remove mappings without deleting files, then recheck the web app after uninstall. <a class="workflow-map-full" href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-uninstall-preserve-cloud-files-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

For each pair, inspect **Issues** and wait for important uploads to finish. Verify irreplaceable cloud copies through the web app, including path, size, and readable content. Copy every failed or local-only item to a location outside the sync root.

The Sync page states: **Removing a sync pair stops syncing but does not delete any files on either side.** This is the preferred way to prevent a retained configuration from resuming after reinstall.

## Steps

1. List each sync pair, its local root, cloud destination, mode, and any file shown under **N files not synced**.
2. Open the web app and verify the important cloud objects independently of the desktop client.
3. Back up local-only or failed items to a folder that is not managed by Dosya.
4. From each pair’s menu choose **Remove**, then confirm that local and cloud files still exist in their respective locations.
5. Uninstall Dosya using the operating system’s standard application removal flow.
6. Sign in through the web app again and verify the same cloud paths, then decide whether retained local folders should be reused after reinstall.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Reference for “Uninstall the desktop app while preserving cloud files”: Dosya desktop app overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Uninstall the desktop app while preserving cloud files”: Dosya desktop app overview page. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

On Windows, the NSIS uninstaller deletes `%APPDATA%/dosya`, including session, pair configuration, and local sync index, while leaving sync folders untouched. The macOS and Linux packages do not request equivalent automatic user-data deletion, so configuration may remain on disk.

## Expected result

Cloud files remain available because pair removal and uninstall do not delete them. Local sync folders also remain, while Windows clears Dosya application data and macOS or Linux may retain it.

If a cloud file is absent before uninstall, stop and recover it from the local copy or failed-item evidence. Removing the client cannot complete an upload that never reached the service.

## Related guides

- [Install and sign in to the desktop app](/desktop/install-and-sign-in)
- [Check for desktop updates](/desktop/desktop-check-updates)
