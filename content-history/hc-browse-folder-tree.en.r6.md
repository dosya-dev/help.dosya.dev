---
{
  "articleId": "hc-browse-folder-tree",
  "locale": "en",
  "revision": 6,
  "title": "Browse a deep folder tree",
  "summary": "Navigate deep Files breadcrumbs and destination-picker trees, including lazy expansion, 250 ms search, 50-result cap, role scope, and confirmation.",
  "category": "files",
  "articleSlug": "browse-folder-tree",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/pages/files.tsx, apps/web/src/components/folder-picker-dialog.tsx, apps/web/src/components/folder-tree.tsx, and apps/web/src/lib/folders.ts. Production navigation was not re-tested.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "browse folder tree",
    "folder management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya exposes folders in two related interfaces: the main **Files** view opens one location at a time with breadcrumbs, while move and save dialogs show a lazily loaded destination tree.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/browse-folder-tree-workflow-map-2026-10-14.webp" data-light-href="/screenshots/browse-folder-tree-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/browse-folder-tree-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/browse-folder-tree-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/browse-folder-tree-workflow-map-2026-10-14.webp" alt="Folder navigation workflow: follow Files breadcrumbs, expand picker folders lazily, search after the 250 ms delay, select the exact destination, and confirm once." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Folder navigation workflow: follow Files breadcrumbs, expand picker folders lazily, search after the 250 ms delay, select the exact destination, and confirm once. <a class="workflow-map-full" href="/screenshots/browse-folder-tree-workflow-map-2026-10-14.webp" data-light-href="/screenshots/browse-folder-tree-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/browse-folder-tree-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Confirm the active workspace. **Root** means the highest location your current role can access; folder-confined members do not escape their assigned anchor.
- Locked, hidden, or otherwise inaccessible branches may be absent or refused.
- Opening and selecting folders is read-only until an action such as **Move here** or **Save here** is confirmed.

## Steps

1. In **Files**, open a folder row. The content pane changes to that folder, and the breadcrumb adds its name.
2. Continue through each segment. Use the breadcrumb to move back to a known ancestor and verify the visible pane belongs to the expected path.
3. When a move or save operation opens a picker, expand **Root** or a visible folder. Children load one level on demand rather than downloading the entire workspace tree.
4. For a long hierarchy, type into **Search folders...**. Search waits 250 ms after input and returns at most 50 server matches with ancestor context.
5. Select the exact destination row. If creation is allowed, use **New folder in “name”** or **New folder at root**; success reports **Folder created** and **“name” is ready to use.**
6. Press the operation's confirmation button only after checking the highlighted folder and breadcrumb. Closing the dialog before confirmation leaves files unchanged.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Move to folder dialog with Search folders, Root, Projects selected, two sibling folders, New folder in Projects, Cancel, and Move." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The shown picker highlights **Projects** beneath **Root**; nothing moves until the visible **Move** button is pressed. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

### Empty and error states

An unloaded empty branch says **No folders yet**. Search can say **No folders match “query”**. A failed creation reports **Folder creation failed**. If a role or lock changed while the picker was open, refresh the workspace and rebuild the path instead of assuming the stale row is writable.

Picker selection does not change the main Files location. Likewise, browsing the main pane does not commit a pending move or archive save.

## Expected result

The Files breadcrumb identifies the open content location, while any picker highlights the intended accessible destination. No object changes location until its separate confirmation succeeds.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files or folders](/files/move-and-rename)
