---
{
  "articleId": "hc-batch-add-group",
  "locale": "en",
  "revision": 6,
  "title": "Add several files to a group",
  "summary": "Add several files to one Dosya group through repeated single-item actions, with exact duplicate, access, confinement, and no-batch limits explained.",
  "category": "files",
  "articleSlug": "batch-add-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/pages/files.tsx, apps/mobile/src/groups/AddToGroupSheet.tsx, apps/api/src/pages/api/groups/[id].ts, and apps/api/src/pages/api/groups/index.ts. Production group updates were not re-tested.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "batch add group",
    "batch file actions",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya currently has no bulk **Add to group** command. The web and mobile flows submit one `file_id` or one `folder_id` per request, so several files must be assigned individually.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/batch-add-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-add-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-add-group-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/batch-add-group-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/batch-add-group-workflow-map-2026-10-14.webp" alt="Group assignment workflow: open one item’s Add to group dialog, choose the group, wait for success, repeat per item, and verify each membership in the sidebar." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Group assignment workflow: open one item’s Add to group dialog, choose the group, wait for success, repeat per item, and verify each membership in the sidebar. <a class="workflow-map-full" href="/screenshots/batch-add-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/batch-add-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/batch-add-group-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Create the destination group in the same workspace. Group names can contain at most 100 characters.
- You must belong to the workspace, see the target, and own the user-scoped group. Folder-confined membership limits targets to the assigned subtree.
- Adding an item is organizational metadata; it does not move, copy, rename, share, or delete that cloud object.

## Steps

1. In web **Files**, open the first item's context menu and choose **Add to group**. Do not select several rows expecting a batch group action.
2. In the **Add to group** dialog, check the line **Select a group for name**, then choose the intended group.
3. Wait for **Added to group** and the detail **The file was added to group-name.**
4. Repeat those actions for every additional reviewed file. Keep a checklist because each request succeeds or fails independently.
5. Open the group from the sidebar and compare its members with the checklist. Refresh before retrying an uncertain result.
6. On mobile, open the one item's sheet, use **Add name to group**, and choose an existing group or **New group…**; the target is still singular.

<figure class="help-screenshot"><a href="/screenshots/organize-files-overview-2026-10-12.webp"><img src="/screenshots/organize-files-overview-2026-10-12.webp" alt="Dosya Files list for Acme Studio showing the Groups sidebar and the Q4 Launch group with two members." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The visible **Q4 Launch** group and its two sidebar items are the place to verify each repeated single-item assignment. <a href="/screenshots/organize-files-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

### Errors and partial results

If no group exists, web says **No groups** and **No groups yet. Create one in the sidebar.** A list failure uses **Something went wrong** and **Could not load your groups.** Assignment failure says **The file could not be added to the group.** The API returns `File already in this group` with 409 for a duplicate, although web can surface a generic toast.

Because every file is a separate request, an interruption can leave a partially completed set. Existing successes remain; verify the group and resume only with missing items. Removing a membership later changes the group list, not the stored file.

## Expected result

The chosen group contains each file added through its own successful request, without duplicate memberships. All source items remain in their original folders with unchanged bytes and permissions.

## Related guides

- [Organize files](/files/organize-files)
- [Select multiple files](/files/select-multiple-files)
