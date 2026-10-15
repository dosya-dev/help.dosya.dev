---
{
  "articleId": "hc-extension-verify-saved-item",
  "locale": "en",
  "revision": 5,
  "title": "Verify an extension save in Dosya",
  "summary": "Open the completed Recent saves row by its exact file ID, then verify the generated name, destination, file type and captured content in Dosya.",
  "category": "extension",
  "articleSlug": "extension-verify-saved-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/components/RecentSaves.tsx, apps/extension/src/lib/background/handlers.ts, apps/extension/src/lib/store/items.ts, apps/extension/src/lib/capture/selection.ts. Production behavior for “Verify an extension save in Dosya” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder"
  ],
  "keywords": [
    "extension verify saved item",
    "Browser extension capture details",
    "Dosya help",
    "browser file upload"
  ]
}
---
The completed **Recent saves** row is the strongest extension receipt because it opens the exact Dosya file ID returned by upload.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14.webp" alt="Four panels show finding the completed row, opening its exact file ID, comparing captured pixels, and sharing only after verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the completed Recent saves row to verify the exact stored object before copying a link or relying on it. <a class="workflow-map-full" href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-verify-saved-item-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the popup and find the target filename under **Recent saves**. A completed row carries a green check rather than a retry message.
2. Read its folder label and relative save time, then select the row body. Dosya opens `app.dosya.dev/files?view=<fileId>` for that exact result.
3. Confirm the destination and generated filename. Screenshots end in `.png`, selections end in `.txt`, and webpage images use their source or inferred type.
4. For a screenshot, compare the saved pixels with the visible viewport captured at that time; the PNG does not contain a separate source-URL record.
5. For a selection, verify `Title:`, `Source:`, the blank separator, and the chosen text. For an image, compare the actual stored dimensions and content.
6. Keep the file if all checks agree. Use **Copy link** only after verification because creating or copying a share link does not validate the stored bytes.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup whose Recent saves rows identify completed uploads and their destinations." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>A completed row opens the file by ID and avoids ambiguity from repeated or generated filenames. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The completed row opens one file whose name, type, folder, and contents match the capture method. The exact file-ID link serves as the upload receipt.

Only the ten newest rows appear in the popup. Local item records remain for 30 days, while blob data attached to failed rows is removed after seven days.

## Related guides

- [Save from a browser](/extension/save-from-browser)
- [Choose a save folder](/extension/extension-save-folder)
