---
{
  "articleId": "hc-extension-save-selection",
  "locale": "en",
  "revision": 6,
  "title": "Save selected text from a webpage",
  "summary": "Save selected webpage text as a generated text file with title and source context, then verify the one-million-character-limited result in Dosya.",
  "category": "extension",
  "articleSlug": "extension-save-selection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/components/Actions.tsx, apps/extension/src/lib/background/menus.ts, apps/extension/src/lib/capture/selection.ts, apps/extension/src/lib/capture/filename.ts, apps/extension/src/lib/config.ts, apps/extension/src/lib/background/handlers.ts. Production behavior for “Save selected text from a webpage” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-connect",
    "hc-extension-save"
  ],
  "keywords": [
    "extension save selection",
    "browser extension workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Selection capture stores plain text plus its page title and source URL. It does not preserve HTML, images, colors, or the page’s visual formatting.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-selection-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-save-selection-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" alt="Four panels show highlighting webpage text, choosing Save selection, waiting for the generated text file, and verifying its Title, Source, and content." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Save a bounded plain-text selection with page context, then inspect the generated text file in Dosya. <a class="workflow-map-full" href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-selection-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-selection-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Highlight the exact non-sensitive webpage text to preserve. A whitespace-only selection cannot be saved.
2. Open **Save to dosya**, confirm **Saving to**, and choose **Save selection**; its helper reads **Select text on the page first**.
3. Alternatively, right-click the highlighted text and choose **Save selection to dosya**. The global shortcut also saves the selection when it is nonempty.
4. If the extension responds **Select some text first**, select visible text again on a supported page and retry once.
5. Wait for the generated `<page title>.txt` row to complete. Selection content is truncated at 1,000,000 characters.
6. Open the file and verify the exact format: `Title: <document title>`, `Source: <page URL>`, one blank line, then the captured text.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup showing Save selection and the selected destination." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Save selection creates a contextual text file without a separate formatting or preview stage. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya contains one `.txt` file in the chosen destination with the page title, page URL, and selected text. Its content remains plain text and respects the one-million-character cap.

If the global shortcut finds no selection, it captures a visible screenshot instead. Use the named **Save selection** action when the intended output must be unambiguous.

## Related guides

- [Connect the extension](/extension/install-and-connect)
- [Save from the browser](/extension/save-from-browser)
