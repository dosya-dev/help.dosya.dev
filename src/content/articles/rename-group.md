---
{
  "articleId": "hc-rename-group",
  "locale": "en",
  "revision": 6,
  "title": "Rename an organization group",
  "summary": "Rename a personal group in Dosya Desktop, keep its pinned files and folders, and resolve empty, overlong, missing-access, or save failures safely.",
  "category": "files",
  "articleSlug": "rename-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified on 2026-10-14 against apps/desktop/src/renderer/pages/GroupsPage.tsx, apps/desktop/src/renderer/lib/groups-api.ts, apps/mobile/app/groups.tsx, apps/mobile/src/groups/api.ts, apps/web/src/components/files-sidebar.tsx, apps/api/src/pages/api/groups/[id].ts, and apps/api/src/pages/api/groups/[id].unit.test.ts. The rename was not performed against production.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "rename group",
    "favourites and groups",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Groups are personal shortcuts: only their creator sees them, even when several people belong to the same workspace. Renaming one changes its label and leaves every pinned file and folder in place.

The current rename control is in **Dosya Desktop**. The browser sidebar and mobile **My groups** screen can create, open, or delete groups, but they do not currently expose Rename.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rename-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rename-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rename-group-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rename-group-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rename-group-workflow-map-2026-10-14.webp" alt="Dosya Desktop group rename path from the Groups page to the inline name field and save checkmark." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Rename the personal shortcut in place, then compare its item count before and after saving. <a class="workflow-map-full" href="/screenshots/rename-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rename-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rename-group-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya Desktop, select the correct workspace, and choose **Groups** in the sidebar.
- Record the group's current item count. A group may contain files and folders from different locations in that workspace.
- Your account must still belong to the workspace, have access to the Files page, and own the group. Workspace owner or admin status does not make another person's group editable.

## Steps

1. Find the group card and select its pencil button, whose tooltip is **Rename**.
2. Replace the text in the inline name field. Leading and trailing spaces are removed when the name is sent.
3. Keep the trimmed name between 1 and 100 characters. The checkmark is disabled for a blank value or more than 100 characters.
4. Select the checkmark to save. Pressing Enter also submits a nonblank value; Escape or the X button cancels the edit.
5. Wait for the Groups list to refresh, then reopen or inspect the renamed card.

The server answers an empty value with “Group name is required” and a 101-character value with “Group name too long.” A missing, deleted, or someone else's group is reported as “Group not found”; a former member receives “Access denied.” The desktop error toast shows the server message and keeps the edit available for correction.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Groups area used to identify a personal group and compare its pinned item count around a rename." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The coloured dot and item count identify the same personal group after its label changes. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The card displays the new trimmed name, while its colour, item count, file pins, folder pins, and the underlying stored content remain unchanged. Renaming neither moves data nor changes anybody's file access.

There is no separate undo history for a group name. If the wrong label was saved, select **Rename** again and restore the previous text.

## Troubleshooting

**Rename is absent.** Use Dosya Desktop. Browser and mobile group views do not offer that control in the reviewed release.

**The group disappeared.** Confirm the active workspace and signed-in account. Because groups are per-user, switching accounts shows a different collection.

**Saving failed but the old name remains.** Correct the length or retry after connectivity returns. The API updates the name only after a successful request, so a refused save does not partially rename the group.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
