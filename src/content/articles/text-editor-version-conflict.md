---
{
  "articleId": "hc-text-editor-version-conflict",
  "locale": "en",
  "revision": 5,
  "title": "Recover from a text edit conflict",
  "summary": "Protect browser text edits when another version may have landed: preserve the draft, reopen the newest content, merge deliberately, and save once.",
  "category": "files",
  "articleSlug": "text-editor-version-conflict",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, and apps/api/src/pages/api/upload/init.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-edit-text",
    "hc-version-history"
  ],
  "keywords": [
    "text editor version conflict",
    "Browser text editing",
    "Dosya help",
    "cloud storage"
  ]
}
---
The current web text editor does not send `expected_version` when it starts a save. Therefore it has no dedicated “version conflict” dialog and cannot prove that nobody uploaded another version after you opened the editor.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for copying an unsaved draft, closing without saving, reopening the latest version, and merging before Save version." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The recovery map reflects the current editor’s lack of an automatic concurrent-edit conflict dialog. <a class="workflow-map-full" href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-version-conflict-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Stop editing as soon as you learn a colleague or another client saved the same file. Do not press **Save version** yet.
2. Copy the full draft to a local editor or secure temporary file. The Dosya overlay keeps its document only in browser memory.
3. Close the editor, reopen the file, and inspect **Versions**. The top row marked **Latest** is the current content; selecting older rows changes the preview but not the file.
4. Open **Edit** again from the refreshed latest preview. Compare the saved draft with this newest document and reapply only the intended changes.
5. Choose **Save version** once and wait for **Saved — File saved as new version.** If any save fails, preserve the merged draft before another reload.
6. Reopen **Versions** and inspect the new **Latest** row, confirming it contains the accepted changes and your merged edits.

**Why this manual path matters.** The upload API supports an `expected_version` field and can reject stale clients with `409 version_conflict`, but `apps/web/src/components/text-editor.tsx` currently sends only workspace ID, file ID, filename, size, and MIME type. A browser save can therefore append over a newer current version without an automatic warning.

**Recovery after an accidental save.** Previous bytes remain in append-only version history. Preview the preceding revision, compare it with the new latest row, and either merge forward or use Restore, which creates another new version rather than deleting history.

## Expected result

The final latest version contains the consciously merged document, both prior revisions remain visible, and you did not depend on a conflict warning that the current web editor does not provide.

## Related guides

- [Edit text with the current browser controls](/files/edit-text)
- [Use append-only file version history](/files/version-history)
