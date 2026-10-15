---
{
  "articleId": "hc-mobile-return-preview-folder",
  "locale": "en",
  "revision": 5,
  "title": "Return from a mobile preview to the same folder",
  "summary": "Return from a mobile preview with native Back, verify the current folder title or Search screen, and recover safely when no folder route is in history.",
  "category": "files",
  "articleSlug": "mobile-return-preview-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/ViewerChrome.tsx, apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/files/FileBrowser.tsx, apps/mobile/app/search.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile return preview folder",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile viewer’s top-left **Back** control calls navigation history. It returns to the folder only when that folder opened the file; a file opened from **Search** returns to Search instead.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" alt="Mobile preview return workflow for noting the folder title or Search screen, opening a file, using native Back, and checking the restored route and workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow uses the current folder title and native Back history because the mobile Files list does not render a breadcrumb trail. <a class="workflow-map-full" href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The viewer chrome can fade while media is immersive. Tap the preview once to reveal the controls, then use the chevron labelled **Back**. Swiping between files changes the active preview but does not create a new navigation entry for every file.

## Steps

1. Before opening the file, note the active workspace name and the current folder title, or confirm that **Search** is the visible screen.
2. Open the file from that list and, if needed, swipe to the neighbouring file you want to inspect.
3. Tap the preview once when the top controls are hidden, then press the top-left **Back** chevron.
4. Confirm that a folder-origin preview returns to that folder and a search-origin preview returns to the Search results.
5. After returning from the preview, check the workspace name before making a file change; Back does not deliberately switch workspaces.
6. If the destination is wrong, reopen **Files**, select the intended workspace, and enter the folder again by following its folders from the current Files root.

Android’s system Back action follows the same router history. The viewer does not promise a particular scroll offset after the underlying list has refetched, and a deep link may have no folder page behind it. The mobile FileBrowser receives breadcrumb data internally for other features but does not display a breadcrumb trail, so use the visible folder title plus the native Back stack to orient yourself.

## Expected result

Back closes the viewer and reveals the route that launched it. The visible folder title or Search heading confirms the destination; a deep link follows its actual native history rather than inventing a folder route.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
