---
{
  "articleId": "hc-desktop-find-in-text",
  "locale": "en",
  "revision": 5,
  "title": "Find text in a desktop file preview",
  "summary": "Search a desktop plain-text preview case-insensitively, move through wrapping matches, and understand its 2 MiB and 300 KiB rendering limits.",
  "category": "desktop",
  "articleSlug": "desktop-find-in-text",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/FileViewer.tsx, apps/desktop/src/renderer/components/files/TextFindBar.tsx, apps/desktop/src/renderer/lib/use-in-file-find.ts and apps/desktop/src/renderer/lib/find-matches.ts. Verified case-insensitive non-overlapping matches, wrap navigation, exact labels, the 2 MiB preview limit, 300 KiB syntax threshold and 8,192-character binary sample. No dedicated desktop text-find test was found; production behavior was not re-tested.",
  "related": [
    "hc-desktop-install",
    "hc-preview-files"
  ],
  "keywords": [
    "desktop find in text",
    "Desktop file viewer",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Find searches only the rendered contents of the desktop plain-text viewer. It compares text without case sensitivity, highlights non-overlapping matches and never changes the cloud file.

<figure class="help-screenshot"><a href="/screenshots/desktop-find-in-text-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-find-in-text-help-workflow-2026-10-14.webp" alt="Text preview Find bar with query field, current match counter, previous and next controls." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Find highlights case-insensitive matches in rendered text and wraps previous or next navigation. <a href="/screenshots/desktop-find-in-text-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open a plain-text or code file at most **2 MiB**, such as TXT, JSON, XML, logs, YAML, TOML, INI, common source-code extensions, HTML or CSS. Syntax coloring is limited to files at most **300 KiB**; larger previewable files remain plain text and searchable. Markdown opens in its own rendered/source viewer, while CSV opens through Office Preview, so neither surface provides this in-file Find bar.

## Steps

1. With the preview open, choose **Edit > Find…**, or press **Ctrl+F** on Windows/Linux or **Command+F** on macOS.
2. Type into the field labeled **Find in file**. The counter changes to `current/total`; a query without a match reports **No results**.
3. Press **Enter** or select **Next** to advance. Use **Shift+Enter** or **Previous** to move backward. Navigation wraps after the final or first occurrence.
4. Press **Esc** to close Find and clear its highlights.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop file list used to open a supported text file within the 2 MiB preview ceiling." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Find is enabled only after this file opens successfully as a rendered text preview. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The match operation runs in the displayed document and does not send the query as a file edit. Leaving the viewer also removes the temporary ranges.

## Expected result

Every visible occurrence matching the entered letters is highlighted, and the active result advances in document order with wraparound.

## Troubleshooting

If **Find…** is unavailable, the current file may be in Markdown, Office Preview or another specialized viewer rather than the plain-text viewer. A text file above 2 MiB receives a download fallback instead of searchable content.

**“This file is not text-previewable.”** means binary data was detected in the first 8,192 characters. **“Failed to load file content.”** indicates the raw text request failed; confirm access and connectivity, then reopen the file.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
