---
{
  "articleId": "hc-create-folder",
  "locale": "en",
  "revision": 6,
  "title": "Create a folder in the right workspace",
  "summary": "Create one folder or a nested path in the correct Dosya workspace, using exact name limits while avoiding locked, hidden, or confined locations.",
  "category": "files",
  "articleSlug": "create-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against apps/web/src/pages/files.tsx, apps/mobile/src/files/mutations.ts, apps/desktop/src/renderer/pages/FileBrowserPage.tsx, apps/api/src/pages/api/folders/index.ts, and packages/shared/src/validation/policy.ts. Production behavior was not tested during this documentation update.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "create folder",
    "folder management",
    "Dosya help",
    "cloud storage"
  ]
}
---
**Create new folder** can create one folder or several nested levels in one request. The active workspace and current folder determine where the first missing segment is inserted.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/create-folder-workflow-map-2026-10-14.webp" alt="Dosya Create new folder dialog showing a nested Projects Q2 Designs path under the current breadcrumb." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The create field treats slash-separated text as a path and inserts only the segments that do not already exist. <a class="workflow-map-full" href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/create-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/create-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Select the intended workspace and open the parent folder. A folder-confined member who creates at root is redirected to the membership anchor.
- Your role needs `create_folders`; otherwise **New folder** is hidden on web and mobile or the API returns **You don’t have permission to create folders**.
- The full typed path is limited to 500 characters. Each retained segment is limited to 100 characters and cannot be `.`, `..`, or contain control characters; empty pieces between separators are ignored.
- Both `/` and `\` separate levels. For example, `Projects/Q2/Designs` creates up to three nested folders.

## Steps

1. In **Files**, verify the workspace switcher and breadcrumb, then choose **New folder**.
2. In **Create new folder**, type a single name or a nested path. Web shows the placeholder **e.g. Brand Assets or Projects/Q2/Designs**.
3. Press **Create** or Enter. Dosya walks from the current parent, reuses live segments already present, and creates each missing segment.
4. Wait for **Folder created**. In a group view, the new root-level folder is also enrolled in that group when the follow-up succeeds.
5. Open the returned leaf and check its breadcrumb. For a nested path, verify each intermediate level once.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya folder hierarchy used to confirm the parent and nested levels after folder creation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The breadcrumb and tree confirm where the first path segment began and which leaf was returned. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The final folder opens under the requested parent. Existing segments and their contents remain unchanged; new segments start empty. A repeated request for the same complete path can succeed with `created_count: 0` and returns the existing leaf rather than producing a duplicate.

## Troubleshooting

- **“Path too long (max 500 chars).”** Shorten the full nested path, including separators.
- **“Folder name ‘…’ is too long (max 100 chars)” or “Folder name ‘…’ contains invalid characters.”** Fix the named segment and submit again.
- **“Parent folder not found.”** The displayed parent was deleted or became unavailable. Return to a live breadcrumb and reopen the dialog.
- **A lock prompt or `folder_locked` refusal appears.** Unlock the parent chain. New content cannot be created inside a full-lock folder without a valid unlock state.
- **The folder exists but is missing from a group.** Creation succeeded even if the separate group-enrolment request failed. Find the folder at the workspace root, then add it to the group again.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
