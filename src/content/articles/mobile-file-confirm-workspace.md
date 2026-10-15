---
{
  "articleId": "hc-mobile-file-confirm-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Confirm the active workspace on mobile",
  "summary": "Confirm the active mobile workspace, role, folder scope, storage, and backup destination before opening, sharing, moving, or uploading files.",
  "category": "files",
  "articleSlug": "mobile-file-confirm-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/files/WorkspaceHeader.tsx, apps/mobile/src/files/WorkspaceSwitcher.tsx, apps/mobile/src/files/WorkspaceGate.tsx, apps/mobile/src/files/workspaceStore.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile file confirm workspace",
    "Mobile file handling details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The workspace switcher is the name-and-role control at the top of **Files**, **Backup**, and **Settings**. It determines which workspace most mobile listings and actions use.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14.webp" alt="Workspace confirmation workflow showing the header trigger, workspace picker details, selected checkmark, two-second switch screen, and verification in Files." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workspace confirmation workflow: open the header switcher, compare role, folder scope, storage and backup badges, select the workspace, wait for the switch, and verify Files. <a class="workflow-map-full" href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-confirm-workspace-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The active selection is stored on the device and restored after a relaunch. If the saved workspace no longer exists, Dosya selects the first available workspace after the store finishes loading.

## Steps

1. Read the workspace name in the top header before opening a file or destructive action.
2. Read the second line for your role; a folder-confined member also sees the allowed folder name there.
3. Tap the workspace name to open **Your workspaces**.
4. Compare each workspace’s name, free storage, backup shield, and **Backing up…** marker where present.
5. Select the intended workspace and wait for the two-second switch screen while its queries refresh.
6. Return to **Files** and verify the expected root folders or empty state before uploading, moving, sharing, or deleting.

### What the indicators mean

A checkmark marks the workspace currently shown. A shield marks a workspace configured as a backup destination; it does not mean every current file operation targets that workspace. **Backing up…** marks the workspace used by the live backup run.

The role line can say Owner, Admin, or another configured role. When access is confined to one root folder, Dosya appends that folder name. Missing files outside that scope are expected and cannot be reached by changing folders inside the app.

### Actions that can carry their own context

A file opened from search or a deep link can belong to a different workspace than the one currently visible. The download manager records the file’s own workspace ID when available so an in-progress transfer keeps the correct label after a switch. For new browsing, search, uploads, Contacts backup, map pins, and duplicate review, treat the header workspace as authoritative.

Creating a workspace from this picker switches to it immediately. The quick-create path does not offer a storage-region picker; the server chooses the nearest region.

## Expected result

The header shows the intended workspace and role, its file list matches that context after the switch screen clears, and subsequent workspace-scoped actions use that selection unless a file-specific route already carries its own workspace ID.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download a file on mobile](/files/mobile-download-file)
