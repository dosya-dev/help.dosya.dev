---
{
  "articleId": "hc-preview-ebook",
  "locale": "en",
  "revision": 5,
  "title": "Preview an EPUB or ebook in Dosya",
  "summary": "Read supported ebooks in the web viewer, use contents, search, bookmarks, themes, and local progress, and recover when the book cannot open.",
  "category": "files",
  "articleSlug": "preview-ebook",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/book-viewer.tsx, apps/web/src/lib/reader/readingState.ts, apps/web/src/lib/helpers.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-preview-files",
    "hc-archive-preview"
  ],
  "keywords": [
    "preview ebook",
    "Document and data previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web reader opens EPUB, MOBI, AZW3, FB2, and CBZ files with the vendored book engine. It provides page navigation, contents, search, bookmarks, reading themes, and text-size controls.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/preview-ebook-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-ebook-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-ebook-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/preview-ebook-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/preview-ebook-help-workflow-2026-10-14.webp" alt="Ebook preview workflow: open a supported book, check its section and position percentage, add a local bookmark, and confirm the same browser resumes near the saved location." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Ebook preview workflow: open a supported book, check its section and position percentage, add a local bookmark, and confirm the same browser resumes near the saved location. <a class="workflow-map-full" href="/screenshots/preview-ebook-help-workflow-2026-10-14.webp" data-light-href="/screenshots/preview-ebook-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/preview-ebook-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The position line shows the current section and percentage. Position writes are debounced as pages change, and bookmarks and progress are stored in this browser for that file. They are not synced to another browser or to the mobile app.

## Steps

1. Open a supported ebook from the web Files viewer and wait for its first readable location.
2. Use **Contents**, **Previous page**, or **Next page** to move to a known section.
3. In the ebook preview, confirm the section title and percentage shown in the position line.
4. Use **Search in book**, a reading theme, or the smaller and larger text controls as needed.
5. Choose **Bookmark this page**, then verify its durable local marker in **Bookmarks**.
6. Close and reopen the same ebook in the same browser and confirm it resumes near the saved location.

The reader keeps at most 200 accumulated search hits for a search session. If the raw file request fails, the message includes **Could not download the book (_status_)**; a reader error can instead say **This book could not be opened.** Download the original to test it in another reader. Removing browser storage also removes this device’s saved progress and bookmarks.

## Expected result

The book renders with working navigation and a visible reading percentage, and the same browser resumes from its saved location. A download or parsing failure produces an error instead of presenting an empty reader.

## Related guides

- [Preview files](/files/preview-files)
- [Inspect an archive](/files/archive-preview)
