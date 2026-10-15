---
{
  "articleId": "hc-text-editor-find-in-file",
  "locale": "en",
  "revision": 5,
  "title": "Find text inside a Dosya text file",
  "summary": "Find a term inside the CodeMirror text editor, move among matches without invoking Files shortcuts, and leave the document unchanged until saved.",
  "category": "files",
  "articleSlug": "text-editor-find-in-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, and apps/api/src/pages/api/upload/init.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-edit-text",
    "hc-version-history"
  ],
  "keywords": [
    "text editor find in file",
    "Browser text editing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya’s browser text editor uses CodeMirror `basicSetup`, which includes its search panel. Searching changes the selection and viewport only; it does not create a version.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for opening a supported text file, starting editor search, moving among matches, and closing search without saving." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow distinguishes in-editor search from the Files page search box. <a class="workflow-map-full" href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-find-in-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before searching.** The editor’s **Edit** button appears only for a recognized text name or MIME type, a file no larger than 2 MiB, and a file that is not in `full_lock` mode.

## Steps

1. Open the text file in Files and choose **Edit** in the viewer header. Wait until the filename bar and editable document appear.
2. Click inside the document, then press Ctrl+F on Windows/Linux or Command+F on macOS. Keeping focus in the editor prevents the Files page from treating shortcuts as list actions.
3. Enter a distinctive word or phrase in the CodeMirror search panel. Use exact punctuation or case options only when the panel exposes and you need them.
4. Move to the next or previous match with the panel controls or its displayed shortcuts. Watch the active selection in the document rather than relying on the browser page-search counter.
5. If there are no matches, shorten the term and check whitespace, punctuation, or the version currently open. Selecting an older Versions row changes the previewed source before Edit is opened.
6. Close the search panel when finished. Choose the editor’s close button if you only inspected text; choose **Save version** only when you intentionally changed content.

**Do not confuse the two searches.** **Search files…** filters filenames and metadata in the Files list. Ctrl/Command+F after the editor has focus searches the loaded document. The browser’s own page find may appear if focus is outside CodeMirror.

## Expected result

The editor moves between occurrences of the search term while the file remains unchanged. No new version is created unless you alter the document and explicitly choose **Save version**.

## Related guides

- [Edit supported text in the browser](/files/edit-text)
- [Review versions before changing content](/files/version-history)
