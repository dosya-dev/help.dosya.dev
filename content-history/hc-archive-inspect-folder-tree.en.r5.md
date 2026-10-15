---
{
  "articleId": "hc-archive-inspect-folder-tree",
  "locale": "en",
  "revision": 5,
  "title": "Inspect an archive folder tree",
  "summary": "Expand an archive hierarchy safely, interpret implied folders and cleaned paths, and use filtering and listing limits before opening any nested member.",
  "category": "files",
  "articleSlug": "archive-inspect-folder-tree",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/web/src/lib/archive-tree.ts, apps/api/src/lib/zip/central-directory.ts, and apps/api/src/lib/container/iso/directory.ts. Production archive indexing was not re-tested.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive inspect folder tree",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The archive viewer builds a safe hierarchy from directory records and initially leaves folders collapsed. It can show explicit folders and inferred parents created from nested member paths.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14.webp" alt="Archive tree inspection workflow: open the container, expand one folder level at a time, filter returned entries, and verify the cleaned full path before opening a member." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Archive tree inspection workflow: open the container, expand one folder level at a time, filter returned entries, and verify the cleaned full path before opening a member. <a class="workflow-map-full" href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-inspect-folder-tree-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- The browser viewer recognizes ZIP plus ISO 9660 content stored as `.iso` or `.img`; EPUB and CBZ use separate readers.
- Listing reads archive-directory ranges rather than extracting member bodies. Inspection itself is read-only.
- Confirm the selected file version. Index responses are privately cacheable for 3,600 seconds, and the version number is part of the request.

## Steps

1. Open the container from **Files** and wait until its entry count, archive size, and container kind appear above **Archive contents**.
2. Expand the first directory. Continue one level at a time, using Enter or Space when keyboard focus is on a folder row.
3. Compare every parent segment before selecting a leaf. The tree sorts directories before files and compares names naturally without case sensitivity, so a numeric sequence such as `2` and `10` stays readable.
4. Use **Filter entries** for a long hierarchy. Filtering opens parents needed to reveal matches, but it searches only the entries returned by the server.
5. Select the intended leaf and confirm its full position, size, and availability marker before previewing, downloading, or saving it.


### How paths are presented

Backslashes are normalized to `/`. Blank, `.` and `..` segments are discarded, and control and bidirectional formatting characters are removed from displayed names. An inferred folder may therefore appear even when the archive did not contain a separate directory record. Entry operations use the server-provided numeric index, so a displayed path is descriptive rather than a local extraction destination.

ZIP and ISO directory processing each stop at 20,000 entries and a 16 MiB directory-data budget. Decoded names share a 2 MiB budget, and ISO traversal permits at most 400 directory reads. **Showing the first X of Y entries** means the returned tree is incomplete. **This archive is too large to list** means you must download the original and use a trusted local archive tool.

## Expected result

The expanded rows identify the intended member through its complete cleaned hierarchy. Merely expanding, filtering, and selecting nodes creates no extracted files and makes no change to the source object.

## Related guides

- [Inspect an archive before extracting files](/files/archive-preview)
- [Review nested archive paths](/files/archive-review-nested-paths)
