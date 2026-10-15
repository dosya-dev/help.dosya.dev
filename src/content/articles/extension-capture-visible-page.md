---
{
  "articleId": "hc-extension-capture-visible-page",
  "locale": "en",
  "revision": 5,
  "title": "Capture the visible page with the extension",
  "summary": "Capture the visible browser viewport, identify the resumable-upload refusal above 50 MiB, and safely verify the completed PNG from Recent saves.",
  "category": "extension",
  "articleSlug": "extension-capture-visible-page",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/components/Actions.tsx, apps/extension/src/lib/background/handlers.ts, apps/extension/src/lib/capture/screenshot.ts, apps/extension/src/lib/capture/filename.ts, apps/extension/src/lib/config.ts, apps/extension/src/entrypoints/background.ts, apps/api/src/pages/api/upload/file.ts. Production behavior for “Capture the visible page with the extension” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder"
  ],
  "keywords": [
    "extension capture visible page",
    "Browser extension capture details",
    "Dosya help",
    "browser file upload"
  ]
}
---
A visible-page capture records exactly the browser viewport at the moment you select **Save visible screenshot**. The extension queues the PNG immediately, so arrange the page before starting the save.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14.webp" alt="Four panels show preparing the exact viewport, confirming Saving to, choosing Save visible screenshot, and reading the resumable-upload refusal above 50 MiB." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Prepare the viewport and destination, capture once, then distinguish an oversized one-shot refusal from a completed PNG. <a class="workflow-map-full" href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-capture-visible-page-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Close menus, cookie notices, account details, or private overlays that must not appear in the image, then scroll the page to the exact viewport you want to preserve.
2. Open **Save to dosya** and read the account email plus the **Saving to** workspace and folder. Change **Choose a folder** before capture if either destination is wrong.
3. Select **Save visible screenshot**. The popup displays **Cmd Shift S** on macOS and **Ctrl Shift S** elsewhere, but that shortcut saves selected text first; use the button when a page selection is active.
4. Let the queued row finish instead of capturing the same viewport again. The one-shot upload route refuses a PNG above 50 MiB with **Files over 50 MB use /api/upload/init and the resumable upload**; a restricted browser page reports **This page cannot be captured**.
5. Find the generated PNG under **Recent saves**. Its name follows `<page title> YYYY-MM-DD HH.MM.png`; unsafe filename characters become hyphens and an unusable title becomes `untitled`.
6. Open the completed row and compare the stored PNG with the viewport you prepared. Browser notifications may also say **Saved to dosya**, but Safari verification happens in the popup.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup showing the Saving to destination and visible screenshot action." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>The popup queues the current viewport directly; it does not display a separate screenshot preview. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A completed PNG opens from **Recent saves** in the destination selected before capture. It contains the visible viewport only, uses the generated timestamped filename, and has one queue receipt.

If the row says **Waiting for network**, leave the capture queued. Use **Retry now** on that row after a terminal failure rather than creating another capture.

## Related guides

- [Save from a browser](/extension/save-from-browser)
- [Choose a save folder](/extension/extension-save-folder)
