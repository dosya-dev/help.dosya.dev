---
{
  "articleId": "hc-extension-save-page-image",
  "locale": "en",
  "revision": 5,
  "title": "Save a specific webpage image to Dosya",
  "summary": "Choose the destination first, use Save image to dosya on the webpage, resolve an origin permission only if asked, and verify the completed image.",
  "category": "extension",
  "articleSlug": "extension-save-page-image",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/lib/background/menus.ts, apps/extension/src/lib/capture/capture.ts, apps/extension/src/entrypoints/page.content.ts, apps/extension/src/lib/capture/filename.ts, apps/extension/src/lib/config.ts, apps/extension/src/entrypoints/popup/components/PermissionBanner.tsx. Production behavior for “Save a specific webpage image to Dosya” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder"
  ],
  "keywords": [
    "extension save page image",
    "Browser extension capture details",
    "Dosya help",
    "browser file upload"
  ]
}
---
A webpage image is saved from its right-click menu, using the destination already stored in the popup. The extension does not show an image preview or destination chooser during that menu action.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-save-page-image-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-save-page-image-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-save-page-image-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-save-page-image-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-save-page-image-help-workflow-2026-10-14.webp" alt="Four panels show setting Saving to, choosing Save image to dosya, reviewing every host in the permission banner, and comparing the completed image." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose the destination before the context-menu action, review every blocked host shown together, and verify the resulting image. <a class="workflow-map-full" href="/screenshots/extension-save-page-image-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-save-page-image-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-save-page-image-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Save to dosya** and set the intended value under **Saving to** before returning to the webpage.
2. Right-click the exact image and choose **Save image to dosya**. The browser immediately asks the background process to fetch and queue that source.
3. If direct fetching is blocked, reopen the popup and inspect every comma-separated host in **A site blocked saving an image**. **Allow** requests all HTTP(S) origins currently named in that banner together, so dismiss it with **Not now** if any listed host is unexpected.
4. Let the existing row upload. An image above the 50 MiB queue limit stops with **Larger than 50 MB**; **Not now** leaves a blocked row failed.
5. Read the generated filename. Dosya prefers a usable final segment from the image URL, otherwise it combines the page title with an extension inferred from content type.
6. Open the completed **Recent saves** row and compare dimensions and visible image content with the source you selected.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup showing the destination selected before a webpage image context-menu save." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>The popup supplies the stored destination; the webpage context menu supplies the image source. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One image file opens from the completed row in the destination selected beforehand. Any optional permission covered only the reviewed host list from the banner rather than all sites at installation.

If the saved asset differs from the visual page element, the site may serve a responsive or protected source. Compare the actual completed file before deleting or recapturing anything.

## Related guides

- [Save from a browser](/extension/save-from-browser)
- [Choose a save folder](/extension/extension-save-folder)
