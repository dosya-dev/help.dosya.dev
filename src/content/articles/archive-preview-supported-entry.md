---
{
  "articleId": "hc-archive-preview-supported-entry",
  "locale": "en",
  "revision": 5,
  "title": "Preview a supported archive entry",
  "summary": "Preview an eligible archive member by checking its path, compression, size, and renderer limits while leaving the original cloud archive untouched.",
  "category": "files",
  "articleSlug": "archive-preview-supported-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/web/src/lib/archive-tree.ts, apps/api/src/pages/api/files/[id]/archive/entry.ts, and apps/api/src/lib/container/refusals.ts. Production preview behavior was not re-tested.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive preview supported entry",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya previews selected members directly from a ZIP or supported disk image. Previewing reads one member and does not extract the archive into cloud storage.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14.webp" alt="Archive member preview workflow: select an eligible Store or Deflate file row, verify its path and size, open the matching renderer, and leave the source container unchanged." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Archive member preview workflow: select an eligible Store or Deflate file row, verify its path and size, open the matching renderer, and leave the source container unchanged. <a class="workflow-map-full" href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-supported-entry-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Choose an unencrypted file. ZIP entries must use Store (0) or Deflate (8); other compression methods remain visible but unavailable.
- The entry request inherits the archive's view gate, including ancestor locks and hidden paths.
- Supported stages include image, PDF, video, audio, and recognized text. Availability also depends on browser decoding for media.

## Steps

1. Open the archive in **Files**, then expand **Archive contents** to the correct folder.
2. Select the leaf row whose path and uncompressed size match the item you intend to inspect.
3. Check that the row does not show a lock or unsupported-compression marker. If it does, use a trusted local tool after downloading the whole container.
4. Wait for the right-hand stage. An image, PDF, audio, or video response opens its corresponding viewer; a recognized text filename opens the text stage.
5. Compare the preview with the selected row before taking any **Download** or **Save to dosya** action.


### Preview limits and recovery

Text is fetched inline only up to 2 MiB. Even within that limit, the renderer shows at most 200,000 characters and says **Showing the first 200,000 characters. Download the file to see the rest.** Text recognition uses the filename or extension because the archive preview supplies no MIME value.

A larger eligible entry displays **Too large to preview inline (size)** with **Download this file**. An unsupported content type also gets the download card. **This entry could not be opened.** indicates that the selected member fetch failed; reopen the container to refresh its index and confirm that you did not switch file versions.

Password protection produces a 409 refusal. Unsupported compression produces a 415 response that names the method. A malformed or changed container can produce 422 even when its outer file still exists.

## Expected result

The stage renders the member selected by numeric index and identifies it with its cleaned name and size. The archive remains byte-for-byte unchanged, and no standalone Dosya file exists unless you later choose **Save to dosya**.

## Related guides

- [Inspect an archive before extracting files](/files/archive-preview)
- [Save an entry from an archive](/files/archive-save-entry)
