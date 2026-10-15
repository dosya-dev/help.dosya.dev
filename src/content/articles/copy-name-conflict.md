---
{
  "articleId": "hc-copy-name-conflict",
  "locale": "en",
  "revision": 6,
  "title": "Resolve a copied-file name conflict",
  "summary": "Resolve a copied-file name conflict without overwriting the destination, understand Copy of naming, and retry safely with a unique name or folder.",
  "category": "files",
  "articleSlug": "copy-name-conflict",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/api/src/pages/api/files/[id]/copy.ts, apps/api/src/lib/repo/file-copy.ts, and apps/web/src/pages/files.tsx on 2026-10-14. No production copy was attempted.",
  "related": [
    "hc-preview-files",
    "hc-organize-files"
  ],
  "keywords": [
    "copy name conflict",
    "file details and copy",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya never silently replaces an existing file during copy. The web Files page copies into the current folder immediately; it does not show a conflict-resolution dialog or ask for a destination.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/copy-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/copy-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/copy-name-conflict-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/copy-name-conflict-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/copy-name-conflict-workflow-map-2026-10-14.webp" alt="Light and dark four-step map for opening Files, copying an item, reviewing a name conflict, and verifying the destination was not overwritten." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The theme-aware map shows the conflict check and the requirement to keep both items under distinct names. <a class="workflow-map-full" href="/screenshots/copy-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/copy-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/copy-name-conflict-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**How the automatic name works.** A copy made into the source folder defaults to `Copy of {filename}`. A copy requested through another client or API into a different folder defaults to the original name. If that target name already exists, the API returns `A file with this name already exists in the target folder` with status 409.

## Steps

1. In **Files**, open the folder that contains the source. Check whether `Copy of {filename}` already exists before choosing **Copy** from the source’s context menu.
2. If no collision exists, choose **Copy**. A successful web operation reports **Copied — A copy has been added to this folder.**
3. If the web page reports **Copy failed — The file could not be copied**, refresh the folder and check for the automatic name. The web toast does not expose the API’s detailed conflict text.
4. To keep both files, rename or move the existing `Copy of …` item, then retry. A client that supports an explicit copy name or target folder can instead provide a unique destination name.
5. Verify the pre-existing destination item’s file ID and content remain unchanged. Open the new copy separately and confirm its new identity.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Image preview for Campaign overview.png with Details values for size, type, region, uploader, dates, and origin." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The reference viewer shows the metadata that can distinguish an existing destination file from a newly created copy. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Permissions and storage.** Copy requires `upload_files`, visibility of the source and destination, and enough workspace quota for the full file size. A file or enclosing folder lock can block the source, and a protected WordPress backup destination refuses new content. Folder confinement permits a copy only when both source and target are within the allowed boundary.

**Other copy failures.** The API can report `This file is locked and cannot be copied`, `This file is inside a locked folder. Unlock the folder to copy it.`, `You don't have permission to copy files`, `Target folder not found`, quota or credential-size errors, `Source file not found in storage`, or `Could not copy file in storage`. Correct the named condition rather than deleting the existing destination.

## Expected result

The original destination file is preserved byte-for-byte. A successful retry creates a separately identified copy under a unique name and consumes storage equal to the copied object.

## Related guides

- [Preview both files before resolving the collision](/files/preview-files)
- [Rename or move the existing destination item](/files/organize-files)
