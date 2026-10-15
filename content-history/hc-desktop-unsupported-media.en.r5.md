---
{
  "articleId": "hc-desktop-unsupported-media",
  "locale": "en",
  "revision": 5,
  "title": "Handle unsupported media in the desktop app",
  "summary": "When desktop preview cannot render a media file, use Download, open the saved copy in a compatible app, and confirm the cloud object stays unchanged.",
  "category": "desktop",
  "articleSlug": "desktop-unsupported-media",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally source-reviewed on 2026-10-15 against apps/desktop/src/renderer/components/files/FileViewer.tsx, apps/desktop/src/renderer/components/files/OfficePreview.tsx, and apps/desktop/src/renderer/components/files/audio/AudioPlayer.tsx; production media downloads were not repeated.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop unsupported media",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
An inline preview can fail even when the stored file is intact. Download the object through Dosya, then open that saved copy in an application that supports its codec or format.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" alt="Four-step map for unsupported desktop media: read the viewer message, choose Download, save the file, then open and verify it externally." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Treat an unsupported preview as a rendering limitation and use the downloaded file as the verification copy. <a class="workflow-map-full" href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Confirm the selected file’s name, extension, size, and workspace. Your role must include `download_files`; without that permission, the recovery action is unavailable even though you can see file metadata.

The viewer can show **This file type cannot be previewed. Download it instead.** Office conversion, video decoding, and audio decoding also have their own fallback messages. Text files larger than 2 MiB are not previewed inline, and syntax highlighting is limited to 300 KiB.

## Steps

1. Open the media file in the desktop viewer and record the exact preview or decode message instead of assuming the stored bytes are corrupt.
2. Compare the unsupported media extension and size with the source or expected Dosya upload receipt.
3. Select **Download** in the desktop viewer and choose a trusted local destination in the save dialog.
4. Wait for the **Downloaded** toast, note the displayed path, and use **Show in Folder** if needed.
5. Open the saved copy with a compatible local application and test the media, document, or text content.
6. Return to Dosya and confirm the original cloud path and metadata remain unchanged after the download.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Reference for “Handle unsupported media in the desktop app”: Dosya desktop app overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle unsupported media in the desktop app”: Dosya desktop app overview page. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A successful download is non-destructive: it creates a local copy and does not change the cloud object. The desktop app does not expose an **Open with** action for this fallback; opening externally happens after saving.

## Expected result

The saved local copy opens in a compatible application and matches the expected file. The cloud item remains at its original path because downloading does not move, rename, or delete it.

If the toast says **Download failed**, verify `download_files`, available disk space, and connectivity. A file that also fails in an independent application may need a fresh upload from a known-good source.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
