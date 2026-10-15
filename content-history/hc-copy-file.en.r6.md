---
{
  "articleId": "hc-copy-file",
  "locale": "en",
  "revision": 6,
  "title": "Copy a file to another folder",
  "summary": "Copy a Dosya file into another folder, account for full duplicate storage, and resolve name, permission, lock, quota, or Live Photo failures.",
  "category": "files",
  "articleSlug": "copy-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/mobile/app/pick-destination.tsx, apps/mobile/src/files/mutations.ts, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/files/[id]/copy.ts, and its conflict, quota, target, and metadata tests. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-preview-files",
    "hc-organize-files"
  ],
  "keywords": [
    "copy file",
    "file details and copy",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Copy creates a new file ID and a second stored object in the same workspace. The source remains unchanged, while workspace usage grows by the source file’s full byte size.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/copy-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/copy-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/copy-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/copy-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/copy-file-workflow-map-2026-10-14.webp" alt="Dosya copy flow showing source file, destination choice, storage reservation, and two independent file rows." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>A successful copy reserves another file’s worth of storage before adding the independent destination row. <a class="workflow-map-full" href="/screenshots/copy-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/copy-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/copy-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Copy requires `upload_files`, membership in the source workspace, and access to both source and destination within any folder confinement.
- A file with its own lock cannot be copied, and an ancestor full lock can refuse the source. Copying out of a locked WordPress backup is allowed, but copying into a protected backup is not.
- Check quota and any credential-specific maximum file size. Copy is treated like creating a new file and can be refused before bytes move.
- Choose a destination without the resolved copy name. Dosya never overwrites an existing file.

## Steps

1. Choose the platform path:
   - On mobile, open the file actions, select **Make a copy**, browse **Copy to…**, and tap **Copy here**.
   - On desktop, select **Copy to...**, choose a folder in **Copy “filename”**, then press **Copy here**.
   - On web, **Copy** immediately adds a copy to the folder currently open. To place it elsewhere, copy first and use **Move to...** on the new row.
2. For a different destination, confirm the chosen folder is live and belongs to the same workspace.
3. Submit the copy once and wait for **Copied**, **Copied successfully**, or **A copy has been added to this folder**.
4. Open the destination and compare filename, size, and content with the source.
5. Confirm the source still exists. The two rows can now be renamed, moved, shared, versioned, or deleted independently.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview used to compare source details with the newly copied destination item." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Match the content and byte size, then use the separate IDs and locations to distinguish source from copy. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Another file row and object exist in the destination. A copy to another folder keeps the source name; an in-place copy without an explicit name becomes **Copy of filename**. Content hash and source timestamps are preserved, but shares and later changes do not link the two files.

## Troubleshooting

- **“You don’t have permission to copy files.”** The role lacks `upload_files`.
- **“A file with this name already exists in the target folder.”** Rename or move the existing item, or select another destination. Repeating an in-place copy can collide with the existing **Copy of …** row.
- **“Target folder not found.”** Refresh the picker; the folder may be trashed, hidden, stale, or outside this workspace.
- **Storage or maximum-file-size refusal.** Free storage, raise the workspace allocation if permitted, or use a credential whose single-file cap accepts the source size.
- **A Live Photo warning says only the photo copied.** Web and desktop issue a second request for the paired video. The still is already copied when that request fails; delete the incomplete copy or copy the video separately before retrying.
- **“Source file not found in storage.”** The metadata exists but its stored object could not be read. Retrying will not repair missing source bytes; restore a healthy version or contact support.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
