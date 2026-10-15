---
{
  "articleId": "hc-extension-confirm-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Confirm the extension account and workspace",
  "summary": "Check the signed-in email and Saving to destination before capture, then confirm which workspace and folder the queued browser item will use.",
  "category": "extension",
  "articleSlug": "extension-confirm-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/components/Header.tsx, apps/extension/src/entrypoints/popup/components/DestinationRow.tsx, apps/extension/src/entrypoints/popup/components/FolderPicker.tsx, apps/extension/src/entrypoints/popup/state.ts, apps/extension/src/lib/store/prefs.ts, apps/extension/src/lib/background/handlers.ts, apps/extension/src/lib/api/routes.ts. Production behavior for “Confirm the extension account and workspace” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder"
  ],
  "keywords": [
    "extension confirm workspace",
    "Browser extension capture details",
    "Dosya help",
    "browser file upload"
  ]
}
---
The extension shows identity and destination in two places: the header account button contains the signed-in email, while **Saving to** identifies the workspace and folder used by the next capture.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14.webp" alt="Four panels show reading the Account email, inspecting Saving to, choosing the intended destination, and verifying the completed test row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match the browser profile to the Account email and prove the queued capture used the reviewed workspace and folder. <a class="workflow-map-full" href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-confirm-workspace-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Save to dosya** in the browser profile that should own the capture and read the email exposed by the **Account** button.
2. Read the value under **Saving to**. It appears as `<workspace> / <folder>`; when no destination is stored, the button reads **Choose a folder**.
3. Select the destination row. In **Choose a folder**, switch workspaces if the selector appears, search the folder list, and choose the intended folder.
4. If the account has no saved choice, check the automatically selected root carefully. The extension chooses the first eligible non-encrypted workspace; Vault workspaces are not offered.
5. Capture one non-sensitive test item. Changing **Saving to** afterward affects later captures and does not move the already queued test.
6. Open its completed **Recent saves** row and confirm the folder label matches the workspace and folder chosen in step 3.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup with the signed-in account area, Saving to row, and capture actions." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>The email identifies the Dosya account; the combined Saving to label identifies the destination. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The popup displays the intended email and `<workspace> / <folder>`, and the completed test opens in that destination. The choice persists after closing and reopening the popup.

Only five recent destinations are retained. When there is one eligible workspace, the folder picker does not need to display a workspace selector.

## Related guides

- [Save from a browser](/extension/save-from-browser)
- [Choose a save folder](/extension/extension-save-folder)
