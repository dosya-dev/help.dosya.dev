---
{
  "articleId": "hc-edit-text",
  "locale": "en",
  "revision": 6,
  "title": "Edit a text file in the browser",
  "summary": "Edit supported text files up to 2 MiB in the Dosya browser, save the full content as a new version, and recover from save failures safely online.",
  "category": "files",
  "articleSlug": "edit-text",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, apps/api/src/pages/api/upload/init.ts, and apps/api/src/lib/upload/init-gates.ts. Production behavior was not re-tested.",
  "related": ["hc-preview-files", "hc-version-history"],
  "keywords": ["edit text file", "browser editor", "save text", "cloud storage", "file management"]
}
---
The browser viewer can edit recognized text files no larger than 2 MiB. Saving uploads the complete editor contents as a new version of the same Dosya file; it does not autosave individual keystrokes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/edit-text-workflow-map-2026-10-14.webp" data-light-href="/screenshots/edit-text-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/edit-text-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/edit-text-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/edit-text-workflow-map-2026-10-14.webp" alt="Browser text-editing workflow from opening a supported file through saving and checking its new version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Make a controlled change in the full-screen editor, save the whole document, and confirm the resulting version before closing your task. <a class="workflow-map-full" href="/screenshots/edit-text-workflow-map-2026-10-14.webp" data-light-href="/screenshots/edit-text-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/edit-text-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Supported files and permissions

Recognition includes common plain text, source code, configuration, markup, data, subtitle, shell, and diff extensions. Extensionless names such as `README`, `LICENSE`, `Dockerfile`, `Makefile`, and familiar dotfiles are also eligible; recognized text MIME types provide another path. The editor supplies syntax modes for TypeScript and JavaScript, Python, JSON, Markdown, CSS, HTML, SQL, YAML, Rust, and Go, with plain text as the fallback.

The **Edit** control is offered when text detection succeeds, the stored size is 2 MiB or less, and the file is not fully locked. Completing **Save version** must still pass the upload gates: workspace membership, **upload files** permission, folder confinement, active destination, lock policy, file-size and extension policy, storage quota, and transfer concurrency. A view-only or otherwise restricted file can therefore reach the editor but fail when saving.

## Steps

1. Open the file from **Files** in a web browser. Confirm the header name before choosing **Edit**.
2. Wait for the full-screen CodeMirror editor to load the raw content. It uses line wrapping and a dark editor theme.
3. Make the required change. Use the editor's normal undo command if you need to reverse an unsaved keystroke.
4. Select **Save version**. The button changes to **Saving…** while Dosya creates an upload session and sends the complete text blob.
5. Wait for **Saved — File saved as new version.** The editor closes, the file list refreshes, and version history reloads.
6. Reopen the file, verify the edited passage, then use **Versions** if you must compare the prior content.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="File viewer reference showing where the header Edit control and inspector version check belong in the browser workflow." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The text editor opens above the file viewer; after saving, return to the viewer inspector to confirm the new version number. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Save behavior and recovery

Closing with the **Close** button does not upload the current buffer, and this editor does not show a dedicated unsaved-changes confirmation. Copy important unsaved text elsewhere before closing or refreshing. The save request does not include an expected-version guard, so coordinate with collaborators when two people might edit the same file at once; each successful upload can become another version.

**Editor unavailable — Could not open the text editor.** means the raw content or editor modules did not load. Keep the source tab open, check access and connectivity, then reopen the file. A failed initialization reports **Save failed** with the API message or **Could not start upload**. A byte-transfer failure reports the returned message or **Failed to save**. In either case, the editor stays open, so preserve the buffer and retry only after resolving the named permission, policy, quota, lock, or network problem. If a failed request abandons its upload session, its held transfer slot is reclaimed after 15 minutes.

The save is not in place at the storage-object level: it registers a new version of the same file. Previous versions remain according to workspace retention and version limits and may be restored while available. Restoring later is a separate mutation; closing without saving creates no version.

## Expected result

The edited content reopens under the same file identity, and version history shows a newly saved version. If saving was refused, the prior stored version remains current and the unsent editor buffer exists only in that browser tab.

## Related guides

- [Preview files](/files/preview-files)
- [Use version history](/files/version-history)
