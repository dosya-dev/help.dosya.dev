---
{
  "articleId": "hc-search-partial-file-name",
  "locale": "en",
  "revision": 5,
  "title": "Find a file from a partial name",
  "summary": "Search by a stable filename fragment, understand case-insensitive substring matching and two-character header behavior, then verify candidates by metadata.",
  "category": "files",
  "articleSlug": "search-partial-file-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/layout/global-search.tsx, apps/web/src/pages/search.tsx, apps/api/src/lib/listing/file-search-core.ts, apps/web/src/lib/search/match.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-search-files",
    "hc-search-file-type"
  ],
  "keywords": [
    "search partial file name",
    "Advanced file search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use the part of the filename least likely to change: a project code, uncommon noun, or date segment. Dosya matches that text anywhere in a name without requiring wildcard characters.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-partial-file-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-partial-file-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-partial-file-name-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-partial-file-name-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-partial-file-name-help-workflow-2026-10-14.webp" alt="Partial-name search workflow: choose a distinctive filename fragment, enter at least two characters, narrow to Files, compare candidate metadata, and verify the containing folder." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Partial-name search workflow: choose a distinctive filename fragment, enter at least two characters, narrow to Files, compare candidate metadata, and verify the containing folder. <a class="workflow-map-full" href="/screenshots/search-partial-file-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/search-partial-file-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/search-partial-file-name-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Header file search waits until the trimmed query contains at least two characters, then waits 250 ms before requesting results. Matching is case-insensitive SQL substring search. A percent or underscore is escaped as text rather than acting as your wildcard.

## Steps

1. Before a partial-name search, confirm the active workspace and choose a distinctive fragment of at least two characters.
2. Enter the partial filename fragment without temporary conflict suffixes you are unsure about.
3. Choose the **Files** results group or open the full results page when the compact menu is too short.
4. Add a leading or trailing `ext:_type_` token only when the extension is known.
5. Compare name, size, uploader, and created time across the partial file search candidates.
6. Open the containing folder and viewer details before changing or sharing the selected file.

A one-character header query does not call the file endpoint, although static navigation suggestions may still appear. The compact menu limits file rows to five and folder rows to three. Use the full results page when those caps hide possible candidates.

## Expected result

The partial query produces a small, relevant candidate set, and the intended file is confirmed by its folder and metadata rather than by the filename fragment alone.

## Related guides

- [Search files](/files/search-files)
- [Filter search by file type](/files/search-file-type)
