---
{
  "articleId": "hc-text-editor-open-file",
  "locale": "en",
  "revision": 5,
  "title": "Open a text file in the Dosya editor",
  "summary": "Open a supported text file of 2 MiB or less in Dosya’s CodeMirror editor, choose the intended preview version, and recognize unavailable states.",
  "category": "files",
  "articleSlug": "text-editor-open-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/components/text-editor.tsx, apps/web/src/lib/text-detect.ts, and apps/api/src/pages/api/upload/init.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-edit-text",
    "hc-version-history"
  ],
  "keywords": [
    "text editor open file",
    "Browser text editing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Text preview and text editing use the same readable-type detector, but **Edit** adds two gates: the file must be 2 MiB or smaller and cannot have a full file lock.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/text-editor-open-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-open-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-open-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/text-editor-open-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/text-editor-open-file-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for choosing the intended text preview version, confirming edit eligibility, selecting Edit, and checking that CodeMirror loaded those bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map shows the transition from the selected read-only preview version to the full-screen text editor. <a class="workflow-map-full" href="/screenshots/text-editor-open-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/text-editor-open-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/text-editor-open-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Recognized text.** Dosya accepts common plain text, Markdown, JSON, YAML, CSV/TSV, XML, HTML/CSS, JavaScript/TypeScript, Python, SQL, shell, configuration, subtitle, and source-code extensions. It also recognizes text MIME types and extensionless names such as `README`, `LICENSE`, `Dockerfile`, `Makefile`, and `.env`.

## Steps

1. In **Files**, select the filename to open its viewer. Choose **Latest** before editing current content, or deliberately select an older version when you intend to use its bytes as the editor starting point.
2. Check that the viewer renders text rather than an unsupported-file card. Text preview refuses content over 2 MiB and reports that the file is too large to preview.
3. Look for **Edit** in the viewer header. The control is absent for files over 2 MiB and for a file whose own lock mode is `full_lock`.
4. Choose **Edit**. Dosya fetches the raw bytes for the version currently selected in the preview, including a historical version, then initializes CodeMirror with line wrapping.
5. Confirm the full-screen editor header, including the same filename and **Save version**. Recognized languages load syntax support; other readable files use plain text.
6. If the editor closes, read the toast. **Editor unavailable** means loading failed; refresh the preview and retry once.

**Encoding note.** Preview recognizes UTF-16 little-endian and big-endian byte-order marks. The editor itself loads the response as text through the browser, so preserve a separate local copy before editing an encoding-sensitive file.

## Expected result

The CodeMirror editor opens with the bytes from the intended preview version and exposes **Save version**. If it cannot load, it closes without creating a version and reports the explicit Editor unavailable message.

## Related guides

- [Use Dosya’s text editing workflow](/files/edit-text)
- [Inspect the file’s version timeline](/files/version-history)
