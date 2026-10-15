---
{
  "articleId": "hc-archive-download-one-entry",
  "locale": "en",
  "revision": 6,
  "title": "Verify an entry downloaded from an archive",
  "summary": "Download one eligible archive member by its indexed row, check access and compression refusals, and verify a local copy without changing the archive.",
  "category": "files",
  "articleSlug": "archive-download-one-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/api/src/pages/api/files/[id]/archive/entry.ts, apps/api/src/lib/container/refusals.ts, and apps/web/src/lib/archive-tree.ts. Production download behavior was not re-tested.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive download one entry",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Downloading one member creates a local copy of that member; it does not extract every item or alter the ZIP, ISO, or IMG stored in Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-download-one-entry-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-download-one-entry-help-workflow-2026-10-14.webp" alt="Archive entry download workflow: open Archive contents, select the indexed file row, use Download, and verify the saved bytes while allowing for local filename sanitization." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Archive entry download workflow: open Archive contents, select the indexed file row, use Download, and verify the saved bytes while allowing for local filename sanitization. <a class="workflow-map-full" href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-download-one-entry-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- You must be able to view the archive through its folder path. A `view_only` file or locked or hidden ancestor can block the entry request.
- ZIP members using Store (method 0) or Deflate (method 8) are eligible. Password-protected members and unsupported compression methods cannot be downloaded through this viewer.
- Use the entry path and uncompressed size to distinguish duplicate base names in different folders.

## Steps

1. In **Files**, open the archive and wait for **Archive contents** to appear.
2. Expand the relevant folders or enter part of the name in **Filter entries**. Select the exact file row, not a folder row.
3. Check the displayed path, cleaned display name, and size. A blocked row explains **This entry is password-protected** or **Compressed with a method this viewer cannot open (method N)**.
4. In the entry stage, choose **Download**. For a format without an inline renderer, use **Download this file** on the fallback card.
5. Allow the browser to save the response. The download header uses the raw final path segment as its UTF-8 filename, so the browser or operating system may sanitize it differently from Dosya’s cleaned display name. Compare its byte size and contents with the selected member.


### If the download is refused

**That entry is a folder, not a file.** means the numeric row now addresses a directory. Reopen the archive and choose a file. A 409 response identifies an encrypted entry, while a 415 response names unsupported compression. A 413 listing refusal means the archive directory exceeded its processing budget; download the whole archive and inspect it locally instead.

Archive requests identify members by their numeric directory index rather than accepting a pathname from the URL. Display names also lose control characters, bidi controls, and `.` or `..` segments. The numeric index prevents a crafted path from selecting a different server-side member. Browser and operating-system filename rules control the local destination, so choose an isolated folder and continue to treat the bytes as untrusted.

## Expected result

The browser saves the chosen member using the response filename derived from the archive’s raw final path segment; local filename sanitization can change what appears on disk. No folder or file is added to Dosya, and the stored archive and its version remain unchanged; delete the local copy through your operating system if it is no longer needed.

## Related guides

- [Inspect an archive before extracting files](/files/archive-preview)
- [Save one archive entry to Dosya](/files/archive-save-entry)
