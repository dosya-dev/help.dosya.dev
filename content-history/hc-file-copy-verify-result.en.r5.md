---
{
  "articleId": "hc-file-copy-verify-result",
  "locale": "en",
  "revision": 5,
  "title": "Verify a copied file independently",
  "summary": "Verify a copied file by destination, preview, size, identity, and Live Photo pair status; confirm the original source remains and storage increased.",
  "category": "files",
  "articleSlug": "file-copy-verify-result",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/copy.ts, and apps/api/src/lib/repo/file-copy.ts on 2026-10-14. Production storage was not changed.",
  "related": [
    "hc-move-rename",
    "hc-copy-file"
  ],
  "keywords": [
    "file copy verify result",
    "File move and copy safeguards",
    "Dosya help",
    "cloud storage"
  ]
}
---
A successful copy should match the source’s content while remaining a separate file record. Verify both facts before deleting, renaming, sharing, or editing either item.

<figure class="help-screenshot"><a href="/screenshots/file-copy-verify-result-help-workflow-2026-10-14.webp"><img src="/screenshots/file-copy-verify-result-help-workflow-2026-10-14.webp" alt="Four-step map for opening the copy destination, comparing name, size, preview, and file ID, and confirming matching content with separate identity." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the content and identity checks required after copying a file. <a href="/screenshots/file-copy-verify-result-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What copying creates.** The server writes a new storage object and file ID, reserves the source byte size, and sets new created and updated times. It preserves useful source timestamps, content hash, and hash status, but records the current actor and client as uploader and origin. Comments, share links, and the source file’s identity do not become the new item.

## Steps

1. After web **Copy**, remain in the current folder and locate `Copy of {filename}`. Other API clients can copy to a different folder under the original or an explicit name.
2. Open source and copy separately. Compare preview content, type, and exact displayed byte size. For a checksum-sensitive workflow, use the preserved content hash or download and hash both objects.
3. Compare file identifiers in the URL or API response. They must differ; seeing the same ID twice means you navigated back to the source rather than the copy.
4. Confirm the original still appears in its folder and that the workspace storage allocation increased by the copied object’s full size.
5. For a Live Photo, verify both the still and paired video. **Copied — The photo was copied, but its video could not be.** means the operation only partially reproduced the pair.

**If the new item is absent.** Refresh before retrying. The web page reports **Copy failed — The file could not be copied** for detailed server failures such as a name conflict, locked source, insufficient `upload_files`, target invisibility, confinement, quota shortage, missing source object, or a storage-copy error. Check for an already-created result so a delayed response does not lead to an unnecessary second copy.

**Independence after verification.** Renaming, moving, or trashing the copy does not rename, move, or trash the source. A separately shared source does not automatically grant access to the new file. Treat the copy’s new origin and uploader as the creation event, not as immutable provenance for the original bytes.

## Expected result

Source and copy preview as matching content, report equal size, and have different IDs. The source remains intact, the copy can be managed independently, and quota reflects the extra object.

## Related guides

- [Review the difference between moving and copying](/files/move-and-rename)
- [Follow the full file-copy procedure](/files/copy-file)
