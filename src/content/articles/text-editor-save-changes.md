---
{
  "articleId": "hc-text-editor-save-changes",
  "locale": "en",
  "revision": 5,
  "title": "Save changes to a text file",
  "summary": "Save browser text edits as a new version, interpret Saving and failure messages, and confirm the latest content after the editor closes safely.",
  "category": "files",
  "articleSlug": "text-editor-save-changes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, and apps/api/src/pages/api/upload/init.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-edit-text",
    "hc-version-history"
  ],
  "keywords": [
    "text editor save changes",
    "Browser text editing",
    "Dosya help",
    "cloud storage"
  ]
}
---
The text editor never mutates the existing version in place. **Save version** uploads the complete edited document against the same file ID and then closes the editor after success.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/text-editor-save-changes-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/text-editor-save-changes-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for reviewing a text edit, choosing Save version, waiting through Saving, and reopening the newest version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow highlights the exact save labels and the new-version result. <a class="workflow-map-full" href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-save-changes-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Required access.** You need workspace membership, Files access, `upload_files`, a writable destination, and enough plan/workspace storage. Upload extension policy, per-file size, member allowance, concurrency, hidden scope, and locked-backup rules still apply to this save.

## Steps

1. Open a supported file with **Edit** and make the smallest intended change. The editor wraps long lines but does not imply they were reformatted.
2. Re-read the surrounding lines. Dosya sends the whole editor document, not a patch, so unintended deletions elsewhere would be included.
3. Choose **Save version** once. The button becomes disabled and reads **Saving…** while the upload-init request and file PUT run.
4. Keep the tab open until the operation finishes. Closing or navigating away before success can discard the unsaved browser state.
5. On success, expect **Saved — File saved as new version.** The editor closes, the viewer refreshes, and the Versions count increases.
6. Reopen the file and check both the changed text and the newest Versions row. If the toast says **Save failed**, keep a local copy of the draft before retrying.

**Failure wording.** Initialization may surface a server message or `Could not start upload`. The byte upload can report `Failed to save`. Other request failures appear under **Save failed** with the API error. A failed attempt does not display the success toast and keeps the editor open where the component can recover.

## Expected result

The edited text appears in the latest file preview, a new version row preserves the prior bytes, and the file keeps its original ID and name. A failed save leaves no claimed success and provides a message to investigate.

## Related guides

- [Learn which text files can be edited](/files/edit-text)
- [Open and inspect version history](/files/version-history)
