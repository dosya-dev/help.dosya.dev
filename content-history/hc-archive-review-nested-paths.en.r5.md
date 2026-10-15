---
{
  "articleId": "hc-archive-review-nested-paths",
  "locale": "en",
  "revision": 5,
  "title": "Review unsafe or nested archive paths",
  "summary": "Review cleaned archive paths, inferred folders, duplicate names, and unsafe nested members before previewing or copying any entry out of the container.",
  "category": "files",
  "articleSlug": "archive-review-nested-paths",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/lib/archive-tree.ts, apps/web/src/components/archive-viewer/archive-viewer.tsx, apps/api/src/pages/api/files/[id]/archive/entry.ts, and apps/api/src/pages/api/files/[id]/archive/save.ts, and apps/web/src/lib/archive-save.ts. Production extraction was not tested.",
  "related": [
    "hc-archive-preview",
    "hc-archive-save-entry"
  ],
  "keywords": [
    "archive review nested paths",
    "Archive inspection and extraction details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Archive names can contain deep hierarchies, duplicate base names, backslashes, control codes, or traversal-looking segments. Dosya cleans the displayed tree and addresses actions by directory index.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" alt="Nested archive review workflow: compare the complete cleaned hierarchy, select by the server index, preview safe content, and isolate any downloaded bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Nested archive review workflow: compare the complete cleaned hierarchy, select by the server index, preview safe content, and isolate any downloaded bytes. <a class="workflow-map-full" href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" data-light-href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/archive-review-nested-paths-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Obtain the expected package layout from the sender when possible.
- Use an isolated local folder for downloads of untrusted content. Do not open unknown executables merely because the archive viewer listed them.
- Remember that **Save to dosya** creates a new cloud object; **Download** creates a local copy.

## Steps

1. Open the archive and expand folders slowly. Compare the full hierarchy, not only the final filename.
2. Look for unexpected siblings, repeated names, embedded archives, executable extensions, or a large difference between compressed and uncompressed sizes.
3. Understand the normalized view: `\` becomes `/`; blank, `.` and `..` segments disappear; control and bidirectional formatting characters are stripped. Missing parent records can become inferred folders.
4. Select only the row whose cleaned path and size match the expected member. Dosya sends its numeric directory index to the entry endpoint instead of sending a client-controlled extraction path.
5. Preview supported content first. If a fallback offers **Download this file**, save it into the isolated folder and scan or inspect it with a suitable local tool before moving it elsewhere.


### What Dosya's path handling does and does not do

The numeric index prevents a crafted name such as `../../report.pdf` from choosing a server-side member or destination by pathname. When saving to Dosya, the chosen destination folder is supplied separately and the server validates the resulting filename. These controls stop path traversal through the viewer; they do not establish that the bytes are harmless.

Folder extraction preserves the reviewed hierarchy for eligible files, skips encrypted and unsupported ZIP methods, and never silently rolls back files already saved before cancellation or a later failure. A whole-folder save is capped at 500 eligible files. For unknown packages, prefer one reviewed entry at a time.

## Expected result

You can state which cleaned tree row corresponds to the intended member and why it is acceptable to preview, download, or save. Inspection leaves both the source archive and trusted local files unchanged.

## Related guides

- [Inspect an archive folder tree](/files/archive-inspect-folder-tree)
- [Save an archive entry to Dosya](/files/archive-save-entry)
