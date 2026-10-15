---
{
  "articleId": "hc-mobile-archive-save-entry",
  "locale": "en",
  "revision": 5,
  "title": "Save one archive entry on mobile",
  "summary": "Save one supported archive entry into Dosya mobile, choose an allowed destination, understand the 4 GiB ceiling, collisions, permissions, and quota.",
  "category": "files",
  "articleSlug": "mobile-archive-save-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/file/[id]/archive.tsx, apps/mobile/app/pick-archive-destination.tsx, apps/mobile/src/archive/archiveSave.ts, and apps/api/src/pages/api/files/[id]/archive/save.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-review-duplicates"
  ],
  "keywords": [
    "mobile archive save entry",
    "Mobile file tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya mobile can save one entry from a stored ZIP, ISO, or IMG as a new cloud file. The archive remains unchanged, and the extracted file consumes storage in the destination workspace.

<figure class="help-screenshot"><a href="/screenshots/mobile-archive-save-entry-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-archive-save-entry-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing an archive entry, Save selection, destination choice, result verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The visible workflow opens an archive in mobile, selects one entry, chooses a destination, saves it, and reopens the result. <a href="/screenshots/mobile-archive-save-entry-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Eligibility and access**

The entry must use STORE or DEFLATE compression and must not be encrypted. Its uncompressed size cannot exceed 4 GiB. You need upload permission for the destination, and the archive’s source bytes must be available through the preview gate; a blocked or view-only source can prevent extraction even though the endpoint does not separately require download permission.

## Steps

1. Open the archive in Dosya mobile and browse to the file entry. Password-protected rows say **This entry is password-protected and cannot be opened.** Unsupported compression says **This entry uses a compression method this app cannot open.**
2. Open the row action labelled **Save _filename_ to dosya**. The destination screen is titled **Save to…** and identifies **Saving _filename_ from archive**.
3. Choose a folder you may upload to. A fully locked destination, assigned-root boundary, missing upload capability, file-size policy, or insufficient storage can refuse the save.
4. Select **Save here** and wait for the success message **Saved _name_ to dosya**. A name collision receives a safe numeric suffix instead of overwriting the existing file.
5. Open the new file from the destination and verify its name and byte size against the archive entry.


**Failures and recovery**

The API can return **This entry is larger than 4 GiB. Download the archive to extract it.**, **No such entry in this archive.**, **This entry's data does not match its declared size; the archive is malformed.**, or **Could not write the extracted file to storage**. Correct the reported destination, access, quota, or archive problem and retry.

Saving a folder is a different multi-entry operation, capped at 500 eligible files; cancellation or a later failure can leave earlier files saved. A single-entry failure should not create a usable destination record. Deleting the extracted file later does not remove its source entry from the archive.

## Expected result

One eligible entry is streamed into the selected folder as a separate Dosya file, receives a collision-safe name when necessary, and leaves the source archive untouched.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Review duplicates](/files/review-duplicates)
