---
{
  "articleId": "hc-search-clear-stale-filters",
  "locale": "en",
  "revision": 5,
  "title": "Clear stale search filters",
  "summary": "Clear the real web search constraints: reset the results tab, remove any ext token, clear the query, and distinguish global Search from Files filters.",
  "category": "files",
  "articleSlug": "search-clear-stale-filters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/search.tsx, apps/web/src/components/layout/global-search.tsx, apps/api/src/lib/listing/file-search-core.ts, apps/web/src/pages/files.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search clear stale filters",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya has two different search surfaces. The header search and `/search` query the active workspace; the **Files** toolbar search can also sit inside a folder, sidebar filter, or group view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14.webp" alt="Search reset workflow: return results to All, clear and replace the query, reset any Files sidebar view, then rerun the search in the intended workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Search reset workflow: return results to All, clear and replace the query, reset any Files sidebar view, then rerun the search in the intended workspace. <a class="workflow-map-full" href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-clear-stale-filters-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The results page has only **All**, **Files**, **Folders**, **Shared**, and **File requests** tabs. File type can be encoded in the query as `ext:pdf`; there are no date or folder filter chips on that page. In Files, the breadcrumb, sidebar selection, group, and search box are separate constraints.

## Steps

1. On the results page, choose **All** so a category tab is not hiding a valid result type.
2. Remove a leading or trailing `ext:_type_` token when you no longer want that extension restriction.
3. Clear the query field completely, then enter the new name without quotation marks or old suffix text.
4. If you are using **Files** instead, clear its **Search files…** box and inspect the breadcrumb, group, and active sidebar row.
5. Choose **All** in the Files sidebar, or use **Show all files** when another content or status view remains active.
6. Run the cleared search in the intended workspace and verify the result counts before opening an item.

An `ext:` token is case-insensitive, accepts an optional dot, and must contain 1–16 letters or digits. Only leading and trailing tokens are parsed as filters. Switching a results tab changes what is shown locally; it does not issue a wider workspace query.

## Expected result

The next search reflects only the new query and the active workspace. Any remaining folder or type restriction is visible in the Files breadcrumb or sidebar rather than silently carried as an imaginary results-page filter.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
