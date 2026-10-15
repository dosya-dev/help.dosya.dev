---
{
  "articleId": "hc-mobile-open-same-name-result",
  "locale": "en",
  "revision": 5,
  "title": "Open a same-named mobile search result safely",
  "summary": "Distinguish same-named mobile search results using workspace, size, date, preview, and details while accounting for the missing folder-path field.",
  "category": "files",
  "articleSlug": "mobile-open-same-name-result",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/search.tsx, apps/mobile/src/files/search-view.ts, apps/mobile/src/files/FileRow.tsx, apps/mobile/app/(tabs)/(files)/file/[id].tsx, apps/mobile/src/viewer/viewerModel.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile open same name result",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Mobile search is scoped to the active workspace. Its file rows show the filename, size, added date, and lock/share indicators, but they do not show the containing folder path.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14.webp" alt="Same-name search workflow showing active workspace confirmation, Files filtering and sorting, size and date comparison, preview inspection, and expanded file details." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Same-name search workflow: confirm the workspace, filter to **Files**, sort candidates, compare size and date, inspect previews and details, and verify before acting. <a class="workflow-map-full" href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-open-same-name-result-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The sort is applied on the returned search page inside the app. Available choices are **Name (A–Z)**, **Name (Z–A)**, **Newest first**, and **Oldest first**; folders remain before files on the **All** tab.

## Steps

1. Confirm the workspace in the header before opening **Search**.
2. Enter enough of the filename to narrow the result, then choose the **Files** tab.
3. Use **Newest first** or **Oldest first** when the added date is the clearest discriminator.
4. Compare each same-named row’s size, date, lock icon, and active-link icon.
5. Open one candidate, inspect its preview and expand **File details** for kind, timestamps, uploader, region, version, links, and extension when available.
6. Return to Search and repeat until the content matches; only then save, share, rename, move, or trash it.

### Information the mobile result does not provide

Search rows and expanded file details do not expose the parent folder path. **Stored in** is the storage-region city, not a directory. If folder placement is the decisive fact, browse from the known folder hierarchy or use another Dosya client that surfaces that context.

Opening a search result directly also lacks the folder viewer’s neighbor list, so swiping through nearby folder files is not a reliable comparison method here.

### Errors and stale clues

An active share-link icon does not identify content; it only says the file has one or more links. A version number appears only above version 1, and Modified appears only when different from Added. A preview failure offers **Try again**; it should not be treated as evidence that a same-named file is wrong.

## Expected result

The file you act on matches the intended content and available metadata within the confirmed workspace. When candidates remain indistinguishable because mobile omits folder paths, stop and verify from the folder hierarchy.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
