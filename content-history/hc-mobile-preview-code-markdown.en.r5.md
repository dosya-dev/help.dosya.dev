---
{
  "articleId": "hc-mobile-preview-code-markdown",
  "locale": "en",
  "revision": 5,
  "title": "Preview source code or Markdown on mobile",
  "summary": "Preview code or Markdown on mobile within the 200 KiB text cap, use wrap, copy, and share tools, and understand the supported Markdown subset.",
  "category": "files",
  "articleSlug": "mobile-preview-code-markdown",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/viewer/useFilePreview.ts, apps/mobile/src/viewer/viewerModel.ts, apps/mobile/src/viewer/stages/TextStage.tsx, apps/mobile/src/viewer/codeHighlight.ts, apps/mobile/src/viewer/stages/MarkdownStage.tsx, apps/mobile/src/viewer/markdown.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile preview code markdown",
    "Mobile document previews",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya previews text-family files inline only when the declared size is at most 200 × 1024 bytes. Larger files show the too-large state and offer **Save to phone** when downloads are allowed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14.webp" alt="Code and Markdown preview workflow showing file classification, the 200 KiB cap, syntax or rendered Markdown stage, wrap and scroll controls, and Save fallback." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Code and Markdown preview workflow: open a supported text file, confirm its stage and line count, use wrap or scroll, inspect rendering limits, and save when necessary. <a class="workflow-map-full" href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-preview-code-markdown-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Source files use a monospaced line-numbered stage with lightweight syntax coloring. Markdown uses a formatted document stage rather than showing raw source.

## Steps

1. Open the file and confirm its extension, size, lock badge, and line count.
2. For code, inspect the language-colored lines and use **Wrap long lines** or horizontal scrolling.
3. Use the code toolbar’s **Copy** or **Share** only after confirming the entire body loaded.
4. For Markdown, compare headings, emphasis, lists, quotes, links, rules, inline code, and fenced code with the source’s intent.
5. Treat unsupported Markdown constructs as plain paragraph text rather than assuming a full CommonMark rendering.
6. If the file exceeds 200 KiB or the preview fails, save it when allowed and open it in a dedicated editor.

### Code classification

Dosya recognizes common markup, JavaScript/TypeScript, CSS, Java/Kotlin/Swift/C-family, Go/Rust, JSON, SQL, YAML/TOML/INI, shell, Python/Ruby/Lua, and many plain-text extensions. Highlighting is line-at-a-time and does not retain parser state, so multiline strings or comments can color imperfectly. It is a reading aid, not a compiler.

### Markdown coverage

The renderer supports level 1–3 visual headings, paragraphs, bold, italic, inline code, safe external links, fenced code, block quotes, ordered and unordered lists, and horizontal rules. Higher heading levels are displayed using the level-3 style. Tables, images, and nested structures are not parsed as rich blocks and degrade to readable text.

Only safe external URLs open in the system browser. A view-only file can be read but not saved; restricted bytes are kept out of the persistent disk cache.

## Expected result

A supported file at or below 200 KiB opens as readable highlighted code or formatted Markdown with the app theme. Long or unsupported content remains accessible through scrolling, plain-text fallback, or an allowed external save.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download on mobile](/files/mobile-download-file)
