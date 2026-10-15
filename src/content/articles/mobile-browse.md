---
{
  "articleId": "hc-mobile-browse",
  "locale": "en",
  "revision": 6,
  "title": "Browse backed-up files on mobile",
  "summary": "Switch to the right workspace, browse or search cloud folders, load more results, and open a backed-up item without confusing its phone original.",
  "category": "files",
  "articleSlug": "mobile-browse-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from local implementations in apps/mobile/src/files/FileBrowser.tsx, WorkspaceHeader.tsx, api.ts, hooks.ts and apps/mobile/app/search.tsx with their tests. Production content has not been checked because this revision is pending release.",
  "related": ["hc-search-files", "hc-preview-files", "hc-switch-workspaces", "hc-mobile-rename-file", "hc-mobile-move-file"],
  "keywords": ["browse mobile files", "mobile file preview", "backed up photos", "cloud storage", "file backup"]
}
---
Mobile Files lists the active workspace and applies your membership, folder confinement, visibility rules, current folder, and selected filter. A cloud file is independent from any original still stored in the phone's photo library.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" alt="Mobile cloud browsing flow from workspace selection through folder filters, search, pagination, and preview." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Confirm workspace scope before filtering, searching, or opening a file from the cloud listing. <a class="workflow-map-full" href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the **Files** tab. Use the workspace name at the top to switch if the expected backup belongs elsewhere.
2. At workspace root, browse into **Mobile Backup**, your device name, **Camera Roll**, then the capture year and two-digit month. The backup engine files media by the phone's local capture month.
3. Choose **All**, **Docs**, **Images**, **Videos**, or **Hidden**. Hidden results still depend on your viewer rules; a filter does not reveal items your account cannot see.
4. In **All**, choose **Newest**, **Oldest**, **Name A-Z**, **Name Z-A**, **Largest**, or **Smallest**. Switch between list and grid as needed. The media and document library filters keep their own presentation and do not expose every root-list sorting control.
5. In **Files**, pull down to refresh after an upload completes. Scrolling near the end loads the next API page automatically, so a visible first page is not necessarily the whole folder.
6. Tap a file to launch its supported viewer. The viewer's next/previous sequence contains the files currently loaded from this listing; load further pages before opening if you expect a later item in that sequence.
7. For an unknown location, press **Search** in the workspace header. Enter a name in **Search files and folders**, then choose **All**, **Files**, or **Folders** and sort by **Name (A–Z)**, **Name (Z–A)**, **Newest first**, or **Oldest first**.

Search and folder browsing stay in the active workspace. A folder-confined member starts at the permitted anchor and cannot use mobile navigation to escape it. Role permissions also govern available actions such as **New folder**, rename, move, and upload; opening a file does not imply permission to change it.

For Live Photos, grid presentation can collapse the still and motion component into one visual item. List view can show the paired file beneath it. That display difference does not create or remove stored objects.

When a listing request fails, Files shows **Couldn't load files.** and **Retry**. **This folder is empty.** means the current folder and filter returned no visible children. Search uses **No results** for a non-empty query that finds no matching visible file or folder. Recheck workspace, folder, spelling, filter, and role scope before assuming backup lost the item.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Download cards for the mobile clients that provide the Files tab, workspace header, search, and file viewers." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Install the matching native client to browse cloud objects and use its platform-specific viewers. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Refreshing the correct workspace and folder shows the backed-up cloud object under its capture-month path. Opening it uses the mobile viewer while leaving the phone-library original and the stored cloud bytes unchanged.

To verify a recent backup, compare its filename and destination with the Backup tab's status. Deleting an original from the phone does not remove the cloud copy; deleting or changing a cloud file is a separate action governed by workspace permissions.

## Related guides

- [Search files](/files/search-files)
- [Preview files](/files/preview-files)
- [Switch workspaces](/account/switch-workspaces)
- [Change a cloud filename from mobile](/files/mobile-rename-file)
- [Relocate a stored file on mobile](/files/mobile-move-file)
