---
{
  "articleId": "hc-mobile-search-correct-scope",
  "locale": "en",
  "revision": 5,
  "title": "Search from the correct mobile scope",
  "summary": "Search the active mobile workspace, separate files from folders, apply one of four client-side sort orders, and avoid assuming a folder-only scope.",
  "category": "files",
  "articleSlug": "mobile-search-correct-scope",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/search.tsx, apps/mobile/src/files/search-view.ts, apps/mobile/src/files/api.ts, apps/api/src/lib/listing/file-search-core.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile search correct scope",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Mobile **Search** queries the active workspace. It is not limited to the folder that was open before Search, so choosing the correct workspace is the scope-setting step.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14.webp" alt="Mobile search scope workflow: confirm the workspace, enter the file or folder name, narrow with All Files or Folders, and open the result only after checking its row details." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile search scope workflow: confirm the workspace, enter the file or folder name, narrow with All Files or Folders, and open the result only after checking its row details. <a class="workflow-map-full" href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-search-correct-scope-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The screen offers **All**, **Files**, and **Folders**. Its sort sheet contains **Name (A–Z)**, **Name (Z–A)**, **Newest first**, and **Oldest first**; sorting is applied on the returned page, with folders kept above files. The API matches names by substring and enforces membership, file access, hidden-item, locked-ancestor, and confined-folder rules.

## Steps

1. Return to a main mobile tab and verify the workspace name in the header before opening **Search**.
2. Enter a distinctive part of the file or folder name in **Search files and folders**.
3. Choose **Files** or **Folders** when the mixed **All** list is ambiguous.
4. Open **Sort results** and apply one of the four displayed orders to the current result page.
5. Read the result name and its row metadata before opening it; mobile results do not display a full folder breadcrumb.
6. If the item is absent, switch to the workspace that owns it and search again; changing tabs or sort order cannot widen the workspace scope.

A folder-confined member sees only the permitted subtree even though Search is workspace-wide. Hidden descendants and items behind a locked ancestor are withheld unless the current viewer is allowed to see them. Search does not provide a separate folder-scope chip on mobile.

## Expected result

The result comes from the workspace named in the mobile header and respects the member’s accessible subtree. Tabs and sort order clarify the returned page without implying that the query searched another workspace or only the previously open folder.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
