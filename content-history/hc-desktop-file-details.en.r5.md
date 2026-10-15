---
{
  "articleId": "hc-desktop-file-details",
  "locale": "en",
  "revision": 5,
  "title": "Open file details in the desktop app",
  "summary": "Open desktop file metadata, distinguish the compact info dialog from the action panel, and understand locks, versions, shares, and identifiers.",
  "category": "desktop",
  "articleSlug": "desktop-file-details",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified labels and gated actions in `apps/desktop/src/renderer/components/files/FileInfoDialog.tsx`, `FileDetailPanel.tsx`, `FileBrowserPage.tsx`, and `main/menu-template.ts` on 2026-10-14. Production was not opened.",
  "related": [
    "hc-desktop-install",
    "hc-preview-files"
  ],
  "keywords": [
    "desktop file details",
    "Desktop file viewer",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
Dosya has two information surfaces. **View → Show File Details** opens the right-side **File details** panel for exactly one selected file; it rejects folders. A file or folder's context-menu **Get info** command opens the compact, read-only metadata dialog.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-file-details-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-file-details-help-workflow-2026-10-14.webp" alt="Desktop file-details workflow showing one file selection, metadata review, and the difference between viewing details and changing the file." width="1200" height="675" loading="lazy" decoding="async" /></a>
  <figcaption>Select exactly one file, open its information surface, and match its name and ID before using any action. <a href="/screenshots/desktop-file-details-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Open **Files** in the correct workspace and locate the intended file.
- Select exactly one file before using the application menu. **Show File Details** is enabled on the Files route when the combined selection count is one, but its handler opens the panel only when that selection is a file and no folder is selected.
- Opening **Get info** does not change, download or delete the item. Actions inside the side panel can change cloud state, so verify the filename first.
- Members need access to the file listing. Delete, share, restore and comment actions remain subject to role, ownership, folder scope and lock rules.

## Steps

1. Select exactly one file in **Files**, then choose **View → Show File Details** or press **Command-I** on macOS / **Ctrl-I** on Windows or Linux. This opens the right-side **File details** panel; selecting a folder does not open it.
2. Use the panel's **Details** tab to inspect its preview, version history, **Properties**, active **Share links**, and the available **View file**, **Download**, **Share**, **Copy file**, and **Delete file** actions. The **Comments** tab shows the file discussion.
3. For compact metadata, right-click a file or folder and choose **Get info**. Match the name and header type before reading the rows.
4. A file dialog can show **Kind**, **Size**, **Where** when supplied, **Created**, **Modified**, **Versions**, **Uploaded by**, **Region**, **Sharing**, **Status**, and **ID**. A folder dialog instead reports its item count, aggregate size and folder metadata. Size includes a readable value and the exact byte count.
5. Read **Status** carefully. An unrestricted visible item shows **Normal**. Other badges can show **Locked**, **Lock**, or **Hidden**. Select the ID row, whose tooltip is **Copy ID**, when support or an API workflow needs the stable identifier. Choose **Close** when finished; **Get info** has no save operation.
6. For a `full_lock` file, enter its password in **Enter password** and select **Unlock**. Until the server returns an unlock token, the panel hides versions and share links and displays **This file is locked**. An invalid attempt can show the server error or **Incorrect password**; a connectivity failure says **Can't reach the server. Check your connection and try again.**

<figure class="help-screenshot">
  <a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop application shell used to reach Files and open metadata for a single selected item." width="1200" height="630" loading="lazy" decoding="async" /></a>
  <figcaption>Use the active workspace in the desktop shell, then inspect one file at a time so the dialog and side panel refer to the intended object. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The selected filename and identifier agree across the Files row and the surface you opened. **Get info** reports stored metadata for a file or folder without modifying it. **Show File Details** exposes only the information and operations available for its one selected file; a fully locked file remains gated until the correct password is accepted.

Version restore, share revocation and deletion are separate mutations. A successful restore shows **Restored** and **Restored to vN.** Revoking can fail with **Revoke failed** / **The share link could not be revoked.** Deleting enters the normal trash workflow rather than occurring merely because the details panel was opened.

## Troubleshooting

**Show File Details is disabled.** Return to Files and select exactly one item. The command is disabled elsewhere and with zero or multiple selections.

**A folder is selected but no side panel opens.** The menu command's selection-count gate includes folders, but the handler rejects every folder selection. Right-click the folder and choose **Get info** for its compact metadata dialog.

**Where is absent.** The row is conditional; use the Files breadcrumb or folder path to establish location. Its absence does not mean the file is at the workspace root.

**Versions or share links do not appear.** A single-version file does not show version history. Revoked links are filtered out. A fully locked file loads neither list until it is unlocked.

**Metadata looks stale.** Close the panel or dialog, refresh the file listing, and reopen the same ID. Use the ID rather than a repeated filename to distinguish same-named copies.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
