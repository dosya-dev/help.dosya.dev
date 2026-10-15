---
{
  "articleId": "hc-text-editor-unavailable",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a text file that will not open for editing",
  "summary": "Diagnose a missing Edit control or Editor unavailable toast using the 2 MiB limit, type detection, lock state, raw access, and upload rules.",
  "category": "files",
  "articleSlug": "text-editor-unavailable",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, and apps/api/src/pages/api/upload/init.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-edit-text",
    "hc-version-history"
  ],
  "keywords": [
    "text editor unavailable",
    "Browser text editing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Two failures look similar but have different causes: a missing **Edit** button means the file is ineligible, while **Editor unavailable** means an eligible editor failed while loading its raw content or modules.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/text-editor-unavailable-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/text-editor-unavailable-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for checking text eligibility, the 2 MiB threshold, file lock state, and the Editor unavailable loading error." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagnostic map separates pre-open eligibility from failures after Edit is selected. <a class="workflow-map-full" href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-unavailable-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm the file size in **Details**. Text preview and Edit use an exact ceiling of 2 × 1024 × 1024 bytes; a larger file must be downloaded and edited locally.
2. Check the filename extension or MIME type. Unsupported binary formats do not receive the text editor even if their name contains readable characters.
3. Check the file’s own lock mode. A `full_lock` file has no text **Edit** control even after a valid password unlock.
4. If **Edit** is present, select it once. A failed authenticated raw fetch or CodeMirror/language-module load produces **Editor unavailable — Could not open the text editor.** and closes the overlay.
5. Refresh the viewer and retry after restoring connectivity. If normal preview also fails, test **Download**; access, hidden-item, ancestor-lock, or file-not-found gates may be blocking the raw bytes.
6. If opening succeeds but saving fails, treat that separately. **Save failed** can reflect `upload_files`, storage, extension policy, concurrency, destination, or locked-backup rules.

**Full-lock rule.** Unlocking grants byte access without changing the stored `full_lock` mode, and the editor always excludes that mode. If authorized, remove or change the full lock before reopening the viewer; otherwise download the file and edit it locally.

**What the UI does not diagnose.** The Editor unavailable toast intentionally collapses fetch and initialization failures into one message. It does not claim the file is corrupt, and there is no cache-reset button in the editor.

## Expected result

You either open the file in CodeMirror or identify the exact eligibility gate: unsupported text classification, more than 2 MiB, an unchanged full file lock, byte-access failure, or a transient editor-load problem.

## Related guides

- [Edit readable text files](/files/edit-text)
- [Use version history after a save problem](/files/version-history)
