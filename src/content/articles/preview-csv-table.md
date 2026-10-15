---
{
  "articleId": "hc-preview-csv-table",
  "locale": "en",
  "revision": 5,
  "title": "Preview a CSV file as a table",
  "summary": "Preview comma-, semicolon-, or tab-delimited data as a table, understand the 2 MB fetch and 300-row limits, and download the complete original file.",
  "category": "files",
  "articleSlug": "preview-csv-table",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/file-viewer.tsx, apps/web/src/lib/csv-table.ts, apps/web/src/lib/helpers.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-archive-preview"
  ],
  "keywords": [
    "preview csv table",
    "Document and data previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web viewer recognises `.csv` and `.tsv` files before the generic text path and renders a table when it can identify comma-, semicolon-, or tab-delimited rows. The first parsed row is used as the header.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-csv-table-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-csv-table-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-csv-table-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-csv-table-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-csv-table-help-workflow-2026-10-14.webp" alt="CSV preview workflow: open a CSV or TSV, inspect early and late parsed rows, download when the 2 MB or row limit intervenes, and confirm totals in a spreadsheet tool." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>CSV preview workflow: open a CSV or TSV, inspect early and late parsed rows, download when the 2 MB or row limit intervenes, and confirm totals in a spreadsheet tool. <a class="workflow-map-full" href="/screenshots/preview-csv-table-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-csv-table-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-csv-table-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Text preview fetches stop at 2 MB. A parsed table displays at most 300 data rows; additional rows are reported as **+ _N_ more rows - download the file for all of it**. Cells stay on one line and may be visually shortened in narrow columns without changing the downloaded bytes.

## Steps

1. Open the `.csv` or `.tsv` file in the web Files viewer.
2. Wait for the table and compare its bold header row with the first row in the source format.
3. In the CSV preview, check a few early and late rows, especially quoted commas or semicolons, tabs, line breaks, and empty cells.
4. Read the row count above the table and the additional-row notice below it when more than 300 data rows exist.
5. Choose **Download** when the file exceeds 2 MB, parsing falls back to text, or the preview reports undisplayed rows.
6. Use **Download** to open the CSV in a spreadsheet tool and confirm the total rows and columns before using it for analysis.

The parser supports quoted fields and comma-, semicolon-, or tab-separated input. It sniffs the first line, preferring tab on a tie and then semicolon before comma. A degenerate document that cannot form a useful table falls back to plain text. Preview truncation changes only what is rendered; it never rewrites or discards rows in cloud storage.

## Expected result

A suitable CSV or TSV shows a header and up to 300 data rows in table form. When the preview cannot represent the whole file, the interface states that more rows exist and the downloaded original remains complete.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
