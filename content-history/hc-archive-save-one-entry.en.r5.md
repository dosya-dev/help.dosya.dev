---
{
  "articleId": "hc-archive-save-one-entry",
  "locale": "en",
  "revision": 5,
  "title": "Save one archive entry to Dosya",
  "summary": "Save one eligible archive member as an independent Dosya file, with destination, quota, 4 GiB, permission, and partial-effect checks explained.",
  "category": "files",
  "articleSlug": "archive-save-one-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/api/src/pages/api/files/[id]/archive/save.ts, apps/api/src/lib/container/refusals.ts, and apps/web/src/components/folder-picker-dialog.tsx, and apps/api/src/lib/ingest/register.ts. Production saving was not re-tested.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive save one entry",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Save to dosya** copies one archive member into a new standalone cloud file. It leaves the source container intact and consumes storage quota for the new object.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-save-one-entry-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-save-one-entry-help-workflow-2026-10-14.webp" alt="Archive save workflow: select one eligible member, choose a destination, confirm Save here, and verify the independent file and any collision suffix." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Archive save workflow: select one eligible member, choose a destination, confirm Save here, and verify the independent file and any collision suffix. <a class="workflow-map-full" href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-save-one-entry-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- You need view access to the source archive and upload permission in the destination folder.
- The entry must be a file, not a directory; encrypted ZIP members and compression methods other than Store or Deflate are refused.
- One saved member cannot exceed 4 GiB. The workspace also needs enough remaining quota and must accept the filename and file-size policy.

## Steps

1. Open the archive in **Files** and select the exact eligible row under **Archive contents**.
2. Review its cleaned name, full folder position, and uncompressed size. Preview it first when a renderer is available.
3. Choose **Save to dosya**. In **Save to folder**, navigate to the intended accessible destination.
4. Select the folder and press **Save here**. The selection alone does not start the copy.
5. Wait for the creation response, then open the destination in **Files** and compare the returned filename, byte size, and preview with the source member. A collision becomes `name (2).ext`, then `name (3).ext`, rather than a new version of the existing file.


### Refusals and recovery

**This entry is password-protected.** is a 409 refusal. Unsupported compression returns 415, and a malformed archive can return 422. A member larger than 4 GiB returns 413. Destination failures can also come from upload permission, a locked or hidden path, filename rules, file-size limits, or insufficient workspace quota.

If the request fails before registration, no new file should appear. Registration preserves the selected destination folder but resolves an active-name collision with a numeric suffix before the extension; after 50 collisions it uses a short file-ID marker. If the response is uncertain after an interrupted connection, refresh the chosen destination and search for the intended name before retrying; repeating a completed request can create another independent file. Deleting a successfully saved copy later is a separate trash action.

Unlike **Save all to dosya**, a one-entry operation has no 500-file folder cap because it processes one numeric index. The saved copy no longer depends on the archive for ordinary access.

## Expected result

The selected destination contains one independent file whose content and size match the member; its name may carry a collision suffix. The original ZIP, ISO, or IMG stays in place and is not shortened, renamed, or marked as extracted.

## Related guides

- [Save files from an archive](/files/archive-save-entry)
- [Inspect an archive before extracting files](/files/archive-preview)
