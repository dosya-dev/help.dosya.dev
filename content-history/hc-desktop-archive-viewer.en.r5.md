---
{
  "articleId": "hc-desktop-archive-viewer",
  "locale": "en",
  "revision": 5,
  "title": "Browse an archive in the desktop app",
  "summary": "Browse ZIP, ISO, and IMG contents without extracting the complete archive, preview supported entries, and save folders of up to 500 files into Dosya.",
  "category": "desktop",
  "articleSlug": "desktop-archive-viewer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/ArchiveViewer.tsx, apps/desktop/src/renderer/lib/archive-tree.ts, apps/desktop/src/renderer/lib/archive-save.ts, apps/api/src/lib/archive-entries.ts, apps/desktop/src/renderer/components/files/ArchiveViewer.test.tsx, apps/desktop/src/renderer/lib/archive-tree.test.ts and apps/desktop/src/renderer/lib/archive-save.test.ts. Verified supported containers and compression methods, the 2 MiB text ceiling, 200,000-character display cap, 500-file folder-save limit and error copy. Production behavior was not re-tested.",
  "related": [
    "hc-desktop-install",
    "hc-preview-files"
  ],
  "keywords": [
    "desktop archive viewer",
    "Desktop file viewer",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop archive viewer lists ZIP files and ISO/IMG disk images without first extracting the whole container to a local folder. Browsing is read-only; **Download this file**, **Save to dosya** and **Save all to dosya** have separate effects.

<figure class="help-screenshot"><a href="/screenshots/desktop-archive-viewer-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-archive-viewer-help-workflow-2026-10-14.webp" alt="Archive viewer tree for a ZIP or disk image with entry preview, download, and save-to-Dosya actions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Browse entries without full extraction, then deliberately choose a local download or a new cloud copy. <a href="/screenshots/desktop-archive-viewer-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open a `.zip`, `.iso` or `.img` file you can view. EPUB and CBZ files use the reader instead. ZIP entry preview supports stored method 0 and deflate method 8; encrypted entries remain listed but cannot be opened.

## Steps

1. Open the archive and review its entry count and archive size. Folders begin collapsed so very large trees do not expand at once.
2. Expand the required directory and select an entry. Images, video, audio, PDF and supported text can preview when the entry is readable.
3. For text, keep the uncompressed entry at or below **2 MiB**. The display truncates after **200,000 characters**, although the entry request processes the full selected entry.
4. Choose **Download this file** to write that entry through the operating system's save flow.
5. Choose **Save to dosya** for one entry, or **Save all to dosya** for a folder. Pick a destination in the active workspace. A folder save accepts at most **500 files**; created cloud copies consume storage and can later be deleted like normal files.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop library containing the source archive and any explicitly saved extracted copies." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Saved entries appear as independent cloud files only after an explicit Save to dosya action. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The completion notice reports saved, skipped and failed counts, plus cancellation when applicable. Listing or previewing alone creates no extracted cloud files.

## Expected result

The tree exposes safe indexed entries without unpacking the container as a whole. An explicit save creates new Dosya items at the chosen destination; a download creates local output only.

## Troubleshooting

For status 422, the viewer says **“This file isn't a valid zip”** or the corresponding disk-image message. Status 413 appears as **“This archive is too large to list”**; other index failures show **“This archive could not be opened”**. Use **Download the file** when the container is unsupported or damaged.

An oversized folder displays **“This folder has … files. Save smaller folders (up to 500), or download the archive.”** Encrypted entries and unsupported ZIP compression must be extracted with another archive tool.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
