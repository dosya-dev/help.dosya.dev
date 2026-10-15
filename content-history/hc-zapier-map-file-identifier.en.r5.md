---
{
  "articleId": "hc-zapier-map-file-identifier",
  "locale": "en",
  "revision": 5,
  "title": "Map a Dosya file identifier in Zapier",
  "summary": "Map Dosya’s stable File ID in Zapier, distinguish root from an unknown folder, and keep actions pointed at the intended file across versions.",
  "category": "integrations",
  "articleSlug": "zapier-map-file-identifier",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/lib/file-row.js, apps/zapier/src/triggers/new-file.js, apps/zapier/src/searches/find-file.js, apps/zapier/src/lib/files.js. Production behavior for “Map a Dosya file identifier in Zapier” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-zapier-troubleshoot"
  ],
  "keywords": [
    "zapier map file identifier",
    "Zapier workflow reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya file names can repeat and can change. Zapier outputs the stable identifier as both `id` and `file_id`; either value identifies the same file record, while `name` is display data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14.webp" alt="Four panels show testing a unique file, mapping File ID or file_id, treating a null folder_id as root, and matching the downstream ID to the source." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show testing a unique file, mapping File ID or file_id, treating a null folder_id as root, and matching the downstream ID to the source. <a class="workflow-map-full" href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-map-file-identifier-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the source Dosya trigger or **Find a File** step, test with a uniquely named non-confidential file and inspect the returned fields.
2. Map **File ID** (`file_id`) into downstream Dosya actions that ask for a file. The top-level `id` is identical and exists so Zapier can deduplicate trigger deliveries.
3. Do not map **File name** as the identity. Two folders can contain the same name, and a later rename leaves the stable file ID unchanged.
4. Use `folder_id` only for routing. A `null` folder ID explicitly means workspace root; it does not mean the integration failed to inspect the folder.
5. When version matters, use `version` from a **New File** webhook or trigger sample. **Find a File** deliberately promises no version because its two search paths do not return a consistent version field.
6. Run one downstream test and compare the returned file ID with the source output. If using a saved sample, refresh it before publishing so the test record still exists and belongs to the chosen workspace.

A trigger’s `file` field is a lazy pointer. Zapier downloads the bytes only when a later step actually uses that field; mapping name or ID alone does not transfer the file or consume download egress.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Map a Dosya file identifier in Zapier”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Map a Dosya file identifier in Zapier”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The action receives the exact stable Dosya file ID and targets the intended record even when names repeat or the file gains versions. Folder routing treats `null` as root, and workflows do not invent a version when the search response lacks one.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
