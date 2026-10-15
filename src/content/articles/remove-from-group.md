---
{
  "articleId": "hc-remove-from-group",
  "locale": "en",
  "revision": 6,
  "title": "Remove a file from a group",
  "summary": "Remove one pinned file from a personal group in Dosya Desktop, then confirm the source file stays in its folder and only the shortcut disappears.",
  "category": "files",
  "articleSlug": "remove-from-group",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against local source on 2026-10-14 in apps/desktop/src/renderer/pages/GroupsPage.tsx, apps/desktop/src/renderer/lib/groups-api.ts, apps/mobile/app/groups.tsx, apps/web/src/components/files-sidebar.tsx, apps/api/src/pages/api/groups/[id]/files/[fileId].ts, and its unit test. Production group data was not changed.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "remove from group",
    "favourites and groups",
    "Dosya help",
    "cloud storage"
  ]
}
---
A group stores personal pins to existing objects. Removing one file pin leaves the file, its folder, versions, comments, shares, and storage usage unchanged.

The reviewed **Remove from group** control is available on Dosya Desktop's **Groups** page. Browser and mobile group views do not currently show an item-removal button.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/remove-from-group-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remove-from-group-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" alt="Dosya Desktop group card with a pinned file row, Remove from group X, and the retained file at its normal location." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Remove the pin from its group card, then open Files to verify that the original object still exists. <a class="workflow-map-full" href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" data-light-href="/screenshots/remove-from-group-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/remove-from-group-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya Desktop and select the workspace containing the personal group.
- Choose **Groups**, locate the group card, and note its item count.
- Record the pinned file's normal folder and file size. The group can include same-named objects from different folders.
- Only the group creator can change its pins. Another user's group is deliberately reported as “Group not found,” even to a workspace administrator.

## Steps

1. Expand the intended group card if needed and find the file row, identified by filename and displayed size.
2. Select the X button on that row. Its tooltip is **Remove from group**.
3. The desktop app sends the removal immediately; there is no confirmation dialog.
4. Wait for the Groups query to refresh. Confirm that the row disappears and the card count falls by one.
5. Open **Files**, browse to the recorded folder, and open the source file.

The server returns success even if that file pin was already absent, making a retry safe. It emits a removal activity only when a stored pin actually matched. An unknown group or one owned by a different user produces “Group not found”; a network or API refusal appears in the desktop error toast.

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Personal group contents used to distinguish removing one file pin from deleting the group or source file." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The X beside a group item affects that membership only; the separate Delete group control removes every pin but still leaves source data intact. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The file vanishes from that one personal group and remains openable in its original folder. Other groups can still point to it, and other users' organization views do not change.

The removal has no automatic undo, but it is reversible: open the file's action menu, choose **Add to group**, and select the original group again.

## Troubleshooting

**There is no X beside the item.** Confirm you are using Dosya Desktop's Groups page. The browser sidebar can expand a group, but its item rows only open their targets.

**The wrong file was removed.** Nothing was deleted. Find the source in Files and add it back to the group.

**The row remains after an error.** The mutation did not receive success, so the list was not refreshed. Verify the signed-in account owns that group, restore connectivity, and retry.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
