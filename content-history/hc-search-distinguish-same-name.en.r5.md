---
{
  "articleId": "hc-search-distinguish-same-name",
  "locale": "en",
  "revision": 5,
  "title": "Distinguish files with the same name",
  "summary": "Distinguish same-named search hits with workspace, folder destination, size, uploader, date, and version details before changing the intended file.",
  "category": "files",
  "articleSlug": "search-distinguish-same-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/search.tsx, apps/web/src/components/layout/global-search.tsx, apps/web/src/components/file-viewer.tsx, apps/api/src/lib/listing/file-search-core.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search distinguish same name",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya permits the same filename in different folders. Search results do not show a complete path, so identification is a two-stage check: compare result metadata, then open the destination folder or viewer details.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" alt="Same-name search workflow: search the full name in the intended workspace, inspect each candidate folder, match folder and version facts, then use a file action only on the verified record." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Same-name search workflow: search the full name in the intended workspace, inspect each candidate folder, match folder and version facts, then use a file action only on the verified record. <a class="workflow-map-full" href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-distinguish-same-name-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The full results page shows file size, uploader, and created time. Selecting a file result navigates to its containing folder. The compact header search shows size and uploader and can return at most five file rows in its menu, so use the full results page when candidates exceed that preview.

## Steps

1. Before the same-name search, confirm the active workspace and enter the full filename, including its extension.
2. On the results page, compare size, uploader, and created time for every same-named file row.
3. Open one candidate to navigate to its containing folder, then read the folder **breadcrumb**.
4. Open the file viewer and inspect its current version, size, stored region, uploader, and timestamps where available.
5. Repeat with the remaining candidate until folder and version facts match the file you intend to use.
6. Use **Rename**, **Move**, **Share**, **Restore**, or **Delete** only after the viewer and breadcrumb identify the correct record.

Search matches names by substring, so exact-looking rows can include near matches. A search row has no stable owner or full-path label in every surface, and file identifiers are not normally printed in the list. Treat the destination folder and viewer details as the decisive context.

## Expected result

The chosen file is identified by its workspace, containing folder, metadata, and version rather than its duplicated name alone. Other same-named records remain unchanged.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
