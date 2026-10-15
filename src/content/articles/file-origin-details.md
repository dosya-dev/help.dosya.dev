---
{
  "articleId": "hc-file-origin-details",
  "locale": "en",
  "revision": 6,
  "title": "Check where a file came from",
  "summary": "Read Origin, uploader, dates, region, import source, and account metadata correctly, including how copying changes the recorded creation event.",
  "category": "files",
  "articleSlug": "file-origin-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/file-detail-panel.tsx, apps/web/src/lib/helpers.ts, apps/web/src/lib/file-columns.tsx, and apps/api/src/pages/api/files/[id]/copy.ts on 2026-10-14. Production metadata was not queried.",
  "related": [
    "hc-preview-files",
    "hc-organize-files"
  ],
  "keywords": [
    "file origin details",
    "file details and copy",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Origin** identifies the client or protocol that created the current file record. It is useful operational metadata, but it is not a permanent chain of custody or the file’s previous folder.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-origin-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-origin-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-origin-details-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-origin-details-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-origin-details-workflow-map-2026-10-14.webp" alt="Light and dark four-step map for opening file Details, reviewing source, uploader, and created metadata, and checking that the origin matches the expected ingest path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The theme-aware map shows the metadata fields used to investigate how a file entered Dosya. <a class="workflow-map-full" href="/screenshots/file-origin-details-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-origin-details-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-origin-details-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Available labels.** The viewer’s **Details** tab always shows **Size**, **Type**, **Region**, **Uploaded by**, **Created**, and **Modified**. **Origin** appears only when the record has a stored value, and **Synced** appears only for a synced file. The Files details panel can additionally show import-specific **Source** and **Account**. **Get info** includes location and version details but does not present the general Origin field.

## Steps

1. Open the file preview and choose **Details**. Confirm the filename and file ID so you do not inspect a similarly named copy.
2. Read **Origin**, when present, with **Uploaded by**, **Created**, and **Modified**. Dosya maps stored values to **Web**, **Desktop**, **Mobile**, **CLI**, **WebDAV**, **S3**, **FTP**, or **Import**. Preview omits the row when no origin is stored; an unknown nonempty value displays `-`, as does a missing or unknown value in the Files table’s Origin column.
3. For an imported item, open the Files details panel and compare **Source** and **Account**. Those fields identify the import connection and are separate from the general origin label.
4. Compare **Region** and **Synced** only for the questions they answer. They do not reveal the former folder or the person who originally created the bytes outside Dosya.
5. If the item was copied, expect the copy to show the copying client as Origin and the current actor as uploader, even though source timestamps and content hash may have been preserved internally.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Campaign overview.png in the image viewer with Details for size, type, region, uploader, created, modified, and Origin: Web." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot displays the exact metadata panel used to interpret a file’s ingestion origin and current record details. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Do not infer unsupported provenance.** Origin does not name a share sender, prove ownership of the content, preserve every transfer hop, or record move history. Moving a file changes only its folder reference and keeps origin; copying creates a new record and therefore a new ingestion event.

**If the field is absent or a dash.** An absent Preview row means the record has no stored origin. A dash in the Files table can mean the value is missing or unknown to the current label map. Use import **Source** and **Account**, uploader, timestamps, audit evidence, or the originating client’s logs for a deeper investigation.

## Expected result

You can identify the supported client category that created this file record and distinguish it from uploader, import connection, storage region, sync state, and folder history.

## Related guides

- [Open Preview to inspect complete file details](/files/preview-files)
- [Organize a file without changing its origin record](/files/organize-files)
