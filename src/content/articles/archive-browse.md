---
{
  "articleId": "hc-archive-browse",
  "locale": "en",
  "revision": 6,
  "title": "Browse folders inside an archive",
  "summary": "Browse folders and filter entries inside ZIP, ISO, and IMG files without extraction; understand listing caps and truncated archive results in Dosya.",
  "category": "files",
  "articleSlug": "archive-browse",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/desktop/src/renderer/components/files/ArchiveViewer.tsx, apps/web/src/lib/archive-tree.ts, apps/api/src/lib/zip/central-directory.ts, and apps/api/src/lib/container/iso/directory.ts. Production behavior was not re-tested.",
  "related": ["hc-archive-preview", "hc-preview-files"],
  "keywords": ["archive browse", "archive tools", "Dosya help", "cloud storage", "file management"]
}
---
The archive tree lets you inspect nested paths without creating Dosya folders or copying entry bytes. Browser and desktop use a collapsible tree; mobile uses one directory level at a time.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-browse-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-browse-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-browse-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-browse-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-browse-workflow-map-2026-10-14.webp" alt="Archive browsing workflow with collapsed directories, a name filter, nested results, and a truncated-list notice." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Expand only the folders you need, then use the filter to expose matching descendants without extracting the archive. <a class="workflow-map-full" href="/screenshots/archive-browse-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-browse-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-browse-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## How the tree works

The service reads ZIP central-directory records or ISO 9660 directory records and returns display-safe entries. It addresses a member by its directory index, not by a caller-supplied extraction path. The interface then builds folders from those cleaned names. Browsing changes only local interface state; it does not expand the container in storage.

Each directory begins closed and shows its descendant file count. Files show their uncompressed size when they are openable. Password-protected members carry a lock, while unsupported compression displays a separate unavailable marker. These disabled rows remain focusable so keyboard and screen-reader users can hear the refusal reason.

## Steps

1. Open the archive and wait for **Archive contents** to replace the loading rows.
2. Select a folder row, or press Enter or Space while it has keyboard focus, to expand it. Repeat for deeper directories.
3. Select the same row again to collapse that branch. Closing a folder does not lose or modify any archive data.
4. To find a name, enter a case-insensitive fragment in **Filter entries**. Matching files remain visible and their ancestor folders open automatically for the search.
5. Clear the field to return to your explicit open-folder state. The filter does not search file contents.
6. If the bottom of the tree says **Showing the first X of Y entries**, treat the result as incomplete. Use the returned portion to inspect known names, or download the entire archive for a complete local listing.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Image file example illustrating the content reached after following a nested archive path in the entry tree." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>After following a nested path, select a leaf file and compare its visible content with the file name shown in that branch. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Limits and unusual archives

A response contains no more than 20,000 entries. ZIP and ISO directory processing is capped at 16 MiB, all decoded names together at 2 MiB, and ISO traversal at 400 directory reads. A name-budget or entry-count overflow can return a truncated listing. A larger directory structure can instead return 413 and instruct you to download the archive.

An empty result displays **There is nothing inside this archive.** This can describe a genuinely empty container or one whose unusable display names were removed while the safe tree was built. It does not create an empty Dosya folder.

If a familiar path is absent, first clear **Filter entries**, reopen its parents, and check the truncation notice. Next verify that you opened the intended file version. Download the original for local inspection when the server's directory limits intentionally prevent a complete list.

## Expected result

The viewer reveals the returned hierarchy and makes the desired safe entry reachable. No entry bytes move until you preview, download, or save a file, and browsing itself leaves cloud storage unchanged.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
