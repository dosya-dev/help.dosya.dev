---
{
  "articleId": "hc-archive-preview-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot an archive that will not preview",
  "summary": "Diagnose invalid, oversized, unsupported, or changed archives by matching Dosya’s exact error state to format, listing, and entry-level limits.",
  "category": "files",
  "articleSlug": "archive-preview-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/api/src/lib/container/refusals.ts, apps/api/src/pages/api/files/[id]/archive/index.ts, and apps/api/src/pages/api/files/[id]/archive/entry.ts. Production errors were not reproduced.",
  "related": [
    "hc-archive-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "archive preview troubleshoot",
    "archive tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
An archive can fail while Dosya reads its directory, while it retrieves one indexed member, or while the browser decodes that member. The visible message tells you which layer to test.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" alt="Archive preview diagnosis workflow: record the exact error, separate listing from member failures, compare a small known-good ZIP, and choose the matching recovery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Archive preview diagnosis workflow: record the exact error, separate listing from member failures, compare a small known-good ZIP, and choose the matching recovery. <a class="workflow-map-full" href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Keep the original archive available. Repacking or uploading a replacement creates different bytes and may create a new Dosya version.
- Test in the same account, workspace, and folder path so ancestor lock and visibility rules remain comparable.
- Use a small known-good ZIP containing one Deflate image as the control file.

## Steps

1. Reopen the stored container and record the exact heading. **This file isn't a valid zip** or **This file isn't a valid disk image** means parsing returned 422.
2. If the heading is **This archive is too large to list**, download the whole file. A 413 response means its directory exceeded a 16 MiB budget or another listing ceiling; retrying the same bytes will not reduce it.
3. If you see **This archive could not be opened**, verify access to the archive and its ancestors, refresh the network session, and retry once. The fallback detail can say **Network error. Please try again.**
4. If the tree loads but one row does not, inspect its marker. Encrypted entries are refused with **This entry is password-protected**; methods other than Store and Deflate are unsupported in ZIP preview.
5. Open the same known-good image archive. If it renders, the original container or member is the cause. If it also fails, retry in another supported browser and check workspace access.


### Choose the recovery that matches the failure

For a valid but oversized directory, use **Download the file** and inspect it locally. For encryption or unsupported compression, extract with a trusted local application and upload only the reviewed result if a cloud copy is needed. For an entry too large for its inline renderer, use **Download this file** instead of modifying the archive.

Archive indexes may be privately cached for up to 3,600 seconds, but requests include the selected version. Close the viewer and reopen the intended version after replacing the file; do not assume a tree from one version describes another.

## Expected result

The failing archive is classified as access/network, malformed format, directory limit, entry encryption/compression, or renderer limitation. Diagnosis alone does not rewrite, delete, or extract the stored object.

## Related guides

- [Inspect an archive before extracting files](/files/archive-preview)
- [Preview files in Dosya](/files/preview-files)
