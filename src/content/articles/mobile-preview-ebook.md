---
{
  "articleId": "hc-mobile-preview-ebook",
  "locale": "en",
  "revision": 5,
  "title": "Read an ebook in the Dosya mobile app",
  "summary": "Read supported ebooks on mobile, resume saved progress, use contents, search, themes, bookmarks, and recover from download or renderer failures.",
  "category": "files",
  "articleSlug": "mobile-preview-ebook",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/files/format.ts, apps/mobile/app/file/[id]/read.tsx, apps/mobile/src/reader/BookReader.tsx, apps/mobile/src/reader/ReaderMenu.tsx, apps/mobile/src/reader/TocSheet.tsx, apps/mobile/src/reader/SearchSheet.tsx, apps/mobile/src/reader/ThemesSheet.tsx, apps/mobile/src/reader/readerPrefs.ts, apps/mobile/src/reader/reader-page/main.js, apps/mobile/src/reader/bookCache.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile preview ebook",
    "Mobile document previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s mobile reader supports EPUB, MOBI, AZW, AZW3, CBZ, and FB2. CBR is not supported because its RAR container cannot be opened by the bundled reader.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14.webp" alt="Mobile ebook workflow showing a book cover and Read or Continue reading, download preparation, page navigation, reader menu tools, and saved progress verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile ebook workflow: open a supported book, choose **Read** or **Continue reading**, wait for preparation, navigate pages, use reader tools, and verify progress. <a class="workflow-map-full" href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-ebook-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The file viewer shows a generated cover and **Read**. After saved progress exists, it shows the rounded percentage and changes the button to **Continue reading**.

## Steps

1. Open a supported ebook and confirm its filename, format, size, and lock badge.
2. Tap **Read** or **Continue reading** and wait while the file downloads and the reader prepares it.
3. With controls hidden, tap the left or right outer quarter of the middle page area to turn pages; tap the center to show controls.
4. Open the reader menu for **Contents**, **Search**, **Themes & Settings**, Share, and Bookmark.
5. Use Contents or a search result to jump, then read far enough for a new location and percentage to save.
6. Close and reopen the book to confirm it resumes at the stored position and shows the expected bookmark or progress.

### Reader capabilities

Search is available for book formats and begins after at least two typed characters; PDF and plain-text reader modes do not expose it. Contents includes the book table of contents and saved bookmarks. Themes and font size persist across books. The smaller and larger **A** controls move in 10-point steps from 70% through 200%; the buttons stop at those limits. One whole-book search returns at most 100 matching locations, so refine the query when the wanted passage is not in the capped result list.

External links are handed to the system browser only when their URL is considered safe. Share sends the cached local file through the system sheet.

### Download, cache, and errors

Unrestricted books use the shared bounded byte cache and can reopen without downloading the same version again. A view-only book is still readable, but its temporary local path is released when the reader closes. A fully locked book without an unlock token returns to the file detail screen.

A network download error shows its message and **Retry**. If the WebView renderer dies or the book parser rejects the file, the overlay says **This book didn’t open** and offers **Try again**, **Close book**, and **File details**.

## Expected result

The supported book opens at its saved location, page navigation and reader tools respond, bookmarks and progress survive closing, and restricted files follow their lock and temporary-cache rules.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download on mobile](/files/mobile-download-file)
