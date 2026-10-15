---
{
  "articleId": "hc-folder-name-conflict",
  "locale": "en",
  "revision": 6,
  "title": "Resolve a folder name conflict",
  "summary": "Resolve folder-name conflicts during create, rename, move, or restore by choosing a unique name and understanding Dosya’s automatic restore suffixes.",
  "category": "files",
  "articleSlug": "folder-name-conflict",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/api/src/pages/api/folders/index.ts, apps/api/src/pages/api/folders/[id]/rename.ts, apps/api/src/pages/api/folders/[id]/move.ts, apps/api/src/pages/api/folders/[id]/index.ts, apps/api/migrations/0068_folders_unique_root.sql, apps/api/src/lib/repo/repo-d1/folders.ts, apps/api/src/lib/workspace-do/schema/002_tree.ts, apps/api/src/lib/workspace-do/repo/folders.ts, apps/api/src/lib/folder-trash.ts, and their conflict tests. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "folder name conflict",
    "folder management",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya allows one live folder with a given name under the same parent. Creation, rename, move, and restore resolve collisions differently, so the right fix depends on which action produced the message.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" alt="Decision map for folder conflicts during create, rename, move, and Deleted-item restore." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Creation reuses an existing path, rename and move refuse a collision, and restore chooses a numbered available name. <a class="workflow-map-full" href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Compare the entire breadcrumb. Identical names are allowed under different parents.
- Folder names are trimmed, limited to 100 characters, and cannot be `.`, `..`, contain `/` or `\`, or include control characters.
- A create field accepts a path up to 500 characters. Slashes and backslashes split that path into folder segments rather than becoming part of a folder name.
- Server-side sibling matching uses SQLite’s case-sensitive `BINARY` comparison. `Foo` and `foo` are distinct folder names, so include capitalization when checking which sibling caused a conflict.

## Steps

1. Identify the action and use its rule:
   - **Create new folder:** entering an existing path succeeds and returns the existing leaf. `created_count` can be zero; no duplicate is made.
   - **Rename:** Dosya refuses the change with **A folder with this name already exists in this folder**.
   - **Move to folder:** Dosya leaves the source untouched and returns **A folder with this name already exists in the target folder**.
   - **Restore:** Dosya restores automatically as the original name, then `name (2)`, `name (3)`, through `name (99)`; a pathological larger collision set receives a timestamp suffix.
2. For a rename or move refusal, open the target parent and decide which folder should keep the desired name.
3. Rename one folder to a meaningful unique value. Avoid temporary slash-separated text because rename accepts only one segment.
4. Retry the original move or rename, then refresh the parent.
5. After restore, read the actual name in the **Restored** toast and use that name when locating the recovered tree.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker with folder names visible before resolving a target-parent collision." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Inspect the destination itself before changing names; a similarly named folder elsewhere does not create this conflict. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The parent contains one live row for each name. A refused rename or move changes nothing. Reusing a create path preserves the existing folder and contents. Restore keeps the recovered subtree intact while assigning only its root a free sibling name.

## Troubleshooting

- **Creation says a folder exists after a concurrent request.** A rare race can return **A folder named “…” already exists here**. Refresh; if the intended path exists, open it instead of creating again.
- **The name is rejected before conflict checking.** Follow **Name is required**, **Name too long (max 100)**, **Name contains invalid characters**, or the create-path equivalents naming the offending segment.
- **A move still fails after renaming the target.** Confirm the source is not being moved into itself or a descendant, and that the picker has refreshed its folder tree.
- **Restore used the workspace root.** The original parent is still deleted or no longer exists. Restore or recreate that parent, then move the recovered folder there.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
