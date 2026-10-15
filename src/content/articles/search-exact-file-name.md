---
{
  "articleId": "hc-search-exact-file-name",
  "locale": "en",
  "revision": 5,
  "title": "Search for an exact file name",
  "summary": "Find a file by its full name and extension, understand substring rather than quoted exact matching, then verify metadata and folder before opening it.",
  "category": "files",
  "articleSlug": "search-exact-file-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/layout/global-search.tsx, apps/web/src/pages/search.tsx, apps/api/src/lib/listing/file-search-core.ts, apps/web/src/components/file-viewer.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search exact file name",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya search uses case-insensitive substring matching. Typing the complete filename and extension narrows the pattern, but quotation marks do not switch the service into an exact-match mode.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-exact-file-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-exact-file-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-exact-file-name-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-exact-file-name-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-exact-file-name-help-workflow-2026-10-14.webp" alt="Exact-name search workflow: enter the complete filename and extension, review the Files count and matching rows, open the containing folder, and verify file details." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Exact-name search workflow: enter the complete filename and extension, review the Files count and matching rows, open the containing folder, and verify file details. <a class="workflow-map-full" href="/screenshots/search-exact-file-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-exact-file-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-exact-file-name-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The header search starts file requests after at least two trimmed characters and a 250 ms debounce, then shows up to five file hits and three folders. The full results page requests up to 50 rows per result type and separates them with tabs and counts.

## Steps

1. Open search in the workspace that owns the file and type its complete name, including extension.
2. Wait for the 250 ms header search delay or open the full results page for its complete category counts.
3. Choose **Files** and compare every returned name character-for-character; ignore near matches produced by substring search.
4. Use size, uploader, and created time to distinguish rows that share the exact same name.
5. Open the candidate’s folder and then its **Details** tab to verify folder context and current version.
6. If nothing matches, remove only uncertain characters or search a distinctive stem; do not add quotes expecting exact-search syntax.

You can add a leading or trailing token such as `ext:pdf` to restrict file extension. `ext:pdf` alone lists that type. Access rules still remove hidden, locked-descendant, or out-of-scope items, so a missing result can reflect permissions rather than spelling.

## Expected result

The intended record is identified by full-name comparison plus folder and metadata checks. Near matches and inaccessible files are not mistaken for an exact-name success.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
