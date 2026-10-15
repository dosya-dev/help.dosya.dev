---
{
  "articleId": "hc-extension-edit-save-name",
  "locale": "en",
  "revision": 5,
  "title": "Rename an item saved from the browser",
  "summary": "Save with the extension-generated filename, open the completed item in Dosya, and use Rename while preserving the file extension after upload.",
  "category": "extension",
  "articleSlug": "extension-edit-save-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/lib/capture/filename.ts, apps/extension/src/entrypoints/popup/components/RecentSaves.tsx, apps/web/src/pages/files.tsx, apps/api/src/pages/api/files/[id]/rename.ts. Production behavior for “Rename an item saved from the browser” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder"
  ],
  "keywords": [
    "extension edit save name",
    "Browser extension capture details",
    "Dosya help",
    "browser file upload"
  ]
}
---
The extension does not provide a filename field before upload. Save the item with its generated name, open the completed receipt in Dosya, and rename it there.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-edit-save-name-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-edit-save-name-help-workflow-2026-10-14.webp" alt="Four panels show accepting the generated filename, opening the completed file ID, choosing Rename in Dosya, and checking the renamed file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The extension generates the original name; rename the completed file in Dosya and verify its extension, content, and destination. <a class="workflow-map-full" href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-edit-save-name-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Choose the extension destination and save the screenshot, selection, or webpage image once; do not look for a pre-save title field because none exists.
2. Note the generated name in **Recent saves**. Screenshots include page title and local date-time, selections use the page title with `.txt`, and images prefer the source filename.
3. Wait for the row to show its completed check, then select the row body to open the exact file in Dosya at its file ID.
4. Open the file action menu and choose **Rename**. This action requires the workspace permission `rename_files`.
5. Enter the useful new name while retaining the intended extension, then submit the **Rename** dialog. The web app reports **Renamed** or **Rename failed**.
6. Reopen the file and verify the new name, extension, preview, and destination without creating another browser capture.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup without a filename field; it shows destination and capture actions." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>The popup generates names automatically, so the Rename action is performed after upload in Dosya. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The original extension upload remains one file, and Dosya displays the user-supplied name after a successful **Rename**. Its content and destination do not change.

If **Rename** is absent or the API returns a permission error, ask a workspace administrator for a role with `rename_files` or keep the generated name.

## Related guides

- [Save from a browser](/extension/save-from-browser)
- [Choose a save folder](/extension/extension-save-folder)
