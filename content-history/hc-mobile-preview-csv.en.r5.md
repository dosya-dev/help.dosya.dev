---
{
  "articleId": "hc-mobile-preview-csv",
  "locale": "en",
  "revision": 5,
  "title": "View CSV data on mobile",
  "summary": "Read CSV or TSV data on mobile within the 200 KiB preview cap, understand delimiter detection and the 300-row render limit, and verify full data safely.",
  "category": "files",
  "articleSlug": "mobile-preview-csv",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/useFilePreview.ts, apps/mobile/src/viewer/viewerModel.ts, apps/mobile/src/viewer/stages/CsvStage.tsx, apps/mobile/src/viewer/csvTable.ts, apps/mobile/src/viewer/stages/TextStage.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile preview csv",
    "Mobile document previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
CSV and TSV files use the inline table only when their declared size is at most 200 × 1024 bytes and the body contains at least two rows and two columns.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-preview-csv-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-preview-csv-help-workflow-2026-10-14.webp" alt="CSV preview workflow showing size eligibility, delimiter detection, row and column count, two-direction table scrolling, the 300-row cap, and external verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>CSV preview workflow: confirm the file is eligible, read the row-and-column count, scroll both axes, inspect truncation or fallback messages, and verify externally. <a class="workflow-map-full" href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-csv-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Dosya detects comma, semicolon, or tab from the first line outside quoted text. It supports quoted fields, doubled-quote escapes, delimiters inside quotes, and newlines inside quoted fields.

## Steps

1. Open the CSV or TSV and confirm the filename, size, lock badge, and table header.
2. Read the header summary **_N_ rows × _M_ cols**; the row count excludes the header.
3. Scroll horizontally for later columns and vertically through the rendered data rows.
4. Compare the header and several distinctive values with the source that produced the file.
5. If **+ _N_ more rows - save the file for all of it** appears, treat the inline view as a sample.
6. Save the file when allowed and open it in a spreadsheet app before making decisions that require every row or an unclipped long cell.

### Rendering limits

The table renders at most 300 data rows after the header. It still reports the full parsed row count and tells you how many rows were omitted. Column widths are estimated from the header and first 20 rendered rows, clamped between 72 and 208 pixels; each cell displays one line.

A file with no detectable delimiter, only one record, or only one column falls back to the line-numbered text stage. An Excel byte-order mark at the start is removed before parsing.

Files above 200 KiB are not read into JavaScript. When download is permitted, the primary action becomes **Save to phone**. A view-only oversized CSV cannot be exported and must be obtained from the owner under different access.

## Expected result

Eligible structured data appears as a two-direction table with an honest row and column count. Degenerate data falls back to text, and rows beyond 300 or long clipped cells are clearly treated as requiring the original file.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download on mobile](/files/mobile-download-file)
