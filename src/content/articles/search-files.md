---
{
  "articleId": "hc-search-files",
  "locale": "en",
  "revision": 3,
  "title": "Searching for files in the correct workspace",
  "summary": "Use the Files-page search to match file and folder names in the active workspace and current view, then clear or adjust filters when an item is missing.",
  "category": "files",
  "articleSlug": "search-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified the current English Files page and current web/API source on 2026-10-14. The isolated local screenshot uses controlled current-API fixtures and confirms a page-level search for roadmap in the Acme Studio workspace. Source and tests confirmed the debounced name query, active workspace/folder/filter/group scope, first-page reset, case-normalized matching, literal percent and underscore handling, and hidden, lock and role visibility gates. File-content indexing and cross-workspace results were not observed and are not claimed. Added a task-specific interface map derived from the verified controls. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-organize-files",
    "hc-move-rename",
    "hc-navigate-web-app",
    "hc-contact-support"
  ],
  "keywords": [
    "search files",
    "find file",
    "file name",
    "folder search",
    "workspace search",
    "search scope",
    "missing search result",
    "filters"
  ]
}
---
Open **Files** in the workspace that should contain the item, then use the smaller **Search files...** field in the Files toolbar. It matches file and folder names in the current Files view. It does not search file contents or combine every workspace into one result list.

The larger field in the application header can search broader app destinations such as settings, integrations and help. Use the Files-toolbar field when you want to narrow the file list shown on the page.

<figure class="help-screenshot"><a href="/screenshots/file-search-scope-map-2026-10-14.webp"><img src="/screenshots/file-search-scope-map-2026-10-14.webp" alt="Four-step map showing workspace, Files view, filename query, and result verification for file search." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: choose the workspace and Files view before entering a name query. <a href="/screenshots/file-search-scope-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Confirm the workspace name in the upper-left switcher.
- Check the current folder breadcrumb and sidebar selection. A folder, type filter or group changes the view that the Files search narrows.
- Start with a distinctive part of the filename, not a guessed full path.
- Remember that another member can have access to an item you cannot see. Search results follow your role, hidden-item and folder-lock rules.
- If the item may have been deleted, search the appropriate **Deleted** view only when your role can access it.

## Steps: search the current Files view

1. Open **Files**.
2. Select the correct workspace.
3. If you want to search the workspace root, choose the home icon and **All**. If you want only one folder, type or group, open that view first.
4. Enter part of the file or folder name in **Search files...**. Dosya waits briefly while you type, then starts from the first page of matching results.
5. Review the remaining rows and compare the name, type, size, date and origin columns when available.
6. Open the result to verify it is the intended item.
7. Clear the search field to restore the current folder or filtered view.

<figure class="help-screenshot">
  <a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya Files page in the Acme Studio workspace with roadmap entered in Search files and Q4 product roadmap.pdf as the only matching row." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>The Files-toolbar search narrows the active view by name. The workspace remains Acme Studio, and the matching roadmap PDF is the only row shown. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: widen a search that finds nothing

1. Clear the search field.
2. Choose the home icon to return to the current workspace root.
3. Choose **All** if **Documents**, **Videos**, **Images**, **Shared**, **Hidden**, **Deleted** or a group is selected.
4. Search a shorter, distinctive part of the name. Matching is case-normalized, so capitalization should not be the deciding factor.
5. Check likely folders by browsing into them and repeating the search when the item is not at the root.
6. Switch workspaces only when the item belongs to another workspace, then repeat the search there.
7. If another member can see the item but you cannot, ask a workspace owner to review your role, folder confinement, hidden-item rules and folder lock.

## Expected result

The Files list updates to show files and folders whose names match the query inside the active view. Clearing the query restores that view without changing the selected workspace.

A result opens the existing item. Search does not create a copy, move the item or change its permissions.

## Search limits and visibility

- Search uses the active workspace. It does not return results from another workspace until you switch to it.
- A current folder limits the listing to that folder. Return home or browse to another folder when the item lives elsewhere.
- Type filters, groups, Deleted and Hidden views keep their own scope while a name query is present.
- The query matches stored file and folder names. This guide does not claim full-text search inside PDFs, documents, archives, images or media metadata.
- Hidden or inaccessible items remain subject to their visibility rules. Search is not a way around a role, folder confinement or lock.
- Literal `%` and `_` characters are treated as filename characters rather than search wildcards.
- Search resets the listing to page one when the query changes, preventing an old page number from hiding the first matches.

## Troubleshooting

**No files match your search.** Clear the field, choose home and **All**, then search a shorter part of the name. Check whether you were inside a folder, group or type filter.

**A file appears in one workspace but not another.** Workspace contents are separate. Switch to the workspace that owns the file; switching context does not move it.

**A colleague finds the file but you cannot.** Compare the exact workspace and folder first. Then ask an owner to review access, hidden-item policy, folder lock and any confined-folder role.

**The search finds the filename but not words inside the document.** The Files search documented here matches names. Open a supported preview and use its in-file controls, or download and search with an appropriate local application.

**The result list looks too narrow.** Clear the active Documents, Videos, Images, Shared, Hidden, Deleted or group view before searching again.

**A renamed file no longer matches the old query.** Search the new stored name. Rename changes what the name search indexes and displays.

## Frequently asked questions

### Can I search files in another workspace?

Yes, after switching to that workspace. The Files page searches one active workspace context at a time.

### Does Files search inside documents?

The workflow documented here matches file and folder names. It does not claim full-text indexing of document contents.

### Why is a file missing even though I know its name?

The usual causes are the wrong workspace, a different folder, an active filter or group, Deleted/Hidden state, or access restrictions. Widen the view in that order before escalating.

## Related guides

- [Organizing files with folders, favourites and groups](/files/organize-files)
- [Moving and renaming files or folders](/files/move-and-rename)
- [Web app navigation](/account/navigate-web-app)
- [Contacting support with useful information](/troubleshooting/contact-support)
