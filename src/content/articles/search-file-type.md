---
{
  "articleId": "hc-search-file-type",
  "locale": "en",
  "revision": 6,
  "title": "Filter search results by file type",
  "summary": "Use Photos, Videos or Documents to search supported file extensions across accessible Dosya folders, then load and verify every match on web.",
  "category": "files",
  "articleSlug": "search-file-type",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/web/src/components/files-sidebar.tsx, apps/web/src/lib/library-request.ts, apps/web/src/components/library/library-view.tsx, and apps/api/src/lib/library/kinds.ts; production library results were not requested.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "search file type",
    "search, sort and views",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The **Images**, **Videos**, and **Documents** sidebar choices open web library views across every accessible folder in the workspace. They do not narrow only the folder in the breadcrumb, inspect file contents, or infer a type from MIME data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-file-type-workflow-map-2026-10-14.webp" alt="File-type library workflow showing Images, Videos, and Documents choices, name search, date sorting, and 60-item loading." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose one extension-backed library, search names within that kind, and continue loading until the total confirms every accessible match is present. <a class="workflow-map-full" href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Supported extensions

- **Images** includes .png, .jpg, .jpeg, .gif, .svg, .webp, .bmp, .heic, .heif, .avif, .tif, and .tiff.
- **Videos** includes .mp4, .mov, .avi, .mkv, .webm, .m4v, .3gp, .mpg, .mpeg, and .wmv.
- **Documents** includes .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .csv, .txt, .md, .rtf, .odt, .ods, .odp, and .epub.

A file whose extension is outside these lists does not enter any of the three libraries.

## Steps

1. In web **Files**, choose **Images**, **Videos**, or **Documents** from the sidebar. Your role must allow file-page access; folder-confined members receive results only from their assigned subtree.
2. Use the matching field: **Search photos...**, **Search videos...**, or **Search documents...**. Search compares the filename as a case-insensitive substring after a 300-millisecond delay; % and _ are treated as literal characters.
3. Choose a date order. Photos offer **Date taken · newest**, **Date taken · oldest**, and **Date uploaded · newest**. Videos and documents use **Date created** for the first two labels.
4. Review the month groups and the total. The first request loads at most 60 items.
5. If more matches exist, select **Load N more**. The control loads no more than 60 additional items, and completion is shown as **That's all N photos.**, **That's all N videos.**, or **That's all N documents.**

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya result-list reference for checking filenames and counts after entering an extension-backed Photos, Videos, or Documents library." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Verify filenames and the loaded-versus-total count before opening an item from the selected type library. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every returned row has an extension from the selected kind and lies within the member's accessible scope. Deleted files are excluded. Members without the hide-files permission do not receive hidden files or descendants of hidden folders; members who can manage hidden items may see them. A file's own lock can remain visible as a restricted item. Descendants of a fully locked folder stay outside the library until that member has an unexpired folder-unlock token. The query is filename-only; matching text inside a document does not make that document appear.

Choosing **All** leaves the library and returns to the folder that was in the URL. The selected type and query are read-only and never convert, move, or retag files.

## Troubleshooting

- **The library reports no matches.** Try a shorter filename substring or clear the field.
- **A familiar format is absent.** Compare its final extension with the lists above; unsupported extensions are intentionally outside these libraries.
- **Only part of the total is visible.** Continue with **Load N more** until the final count message appears.
- **The page says Could not load your photos, Could not load your videos, or Could not load your documents.** Read the displayed error and press **Try again**.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
