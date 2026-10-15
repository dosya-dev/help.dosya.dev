---
{
  "articleId": "hc-favourite-folder",
  "locale": "en",
  "revision": 6,
  "title": "Add a folder to Favourites",
  "summary": "Add a folder shortcut through Dosya's REST API, because current web and mobile clients expose file favourites but no folder-favourite control.",
  "category": "files",
  "articleSlug": "favourite-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified from local source on 2026-10-14: apps/api/src/pages/api/favourites.ts, apps/api/src/pages/api/favourites.unit.test.ts, apps/api/src/lib/access/rest-scope.ts, apps/web/src/components/files-sidebar.tsx, apps/web/src/pages/files.tsx, apps/mobile/src/files/FolderActionsSheet.tsx, apps/mobile/src/files/api.ts, and apps/mobile/app/favourites.tsx. No production API mutation was sent.",
  "related": [
    "hc-organize-files",
    "hc-search-files"
  ],
  "keywords": [
    "favourite folder",
    "favourites and groups",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The current data model supports personal folder favourites, but the reviewed web and mobile file menus do not provide an **Add to favourites** control for folders. Use a personal group for a fully graphical workflow. Advanced users can create the folder pointer through the REST API.

A folder favourite references the existing folder. It does not copy its contents, change its parent, consume more storage, or grant access to anybody else.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/favourite-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/favourite-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/favourite-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/favourite-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/favourite-folder-workflow-map-2026-10-14.webp" alt="Folder favourite REST flow from workspace and folder identifiers to a personal pointer verified in the mobile list or API response." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Create one folder pointer with a full-scope, workspace-pinned API credential, then read it back without changing the folder tree. <a class="workflow-map-full" href="/screenshots/favourite-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/favourite-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/favourite-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Prefer **Add to group** when you need a client-only shortcut. Groups are available for folders in browser and mobile file menus.
- For the POST route, obtain the workspace ID and live folder ID. Use a bearer API key with `full` scope, API access, and a pin to that same workspace; restricted `read`, `upload`, `clipper`, or `wp_site` scopes cannot perform this POST.
- The key owner must be an unconfined workspace member. POST checks membership, target visibility, and the target's enclosing full-lock chain, but it does not require the role's Files page permission.
- Reading the result is stricter: GET `/api/favourites` refuses a confined member and requires Files page access before it returns visible, unlocked rows.
- Keep the credential out of terminal history, screenshots, and support messages.

## Steps

1. Put the secret in a protected environment variable and send this request with your real identifiers:

       curl --fail-with-body --request POST "https://api.dosya.dev/api/favourites" \
         -H "Authorization: Bearer $DOSYA_API_KEY" \
         -H "Content-Type: application/json" \
         --data '{"workspace_id":"ws_...","folder_id":"fld_..."}'

2. A successful first addition returns HTTP 201 with an object containing ok: true and the new favourite-row ID.
3. Verify with GET /api/favourites?workspace_id=ws_.... If the role has Files page access, the matching object appears in the folders array with its real folder_id, folder_name, parent ID, and creation time.
4. On mobile, **Settings → Favourites** can render folder rows returned by this API. The browser sidebar currently reads only the response's files array, so it will not display the folder entry.
5. Open the folder from mobile or through its normal Files path and confirm the original breadcrumb and contents.

A second POST for the same account and folder returns HTTP 409 with “Already in favourites.” An unknown or hidden target answers “Folder not found.” An enclosing full lock produces “folder_locked,” and a credential tied to another workspace receives “This API key is pinned to a different workspace.”

<figure class="help-screenshot"><a href="/screenshots/organize-create-group-2026-10-12.webp"><img src="/screenshots/organize-create-group-2026-10-12.webp" alt="Organization controls illustrating the supported Add to group alternative for a folder when a graphical favourite control is unavailable." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>For everyday navigation, a personal group exposes the folder shortcut in current graphical clients. <a href="/screenshots/organize-create-group-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The server stores one personal favourite row for the folder, and the source folder remains at its previous location with unchanged content and permissions. A caller that passes the GET membership and Files-access gates can read it, and mobile can display that returned row; the current browser sidebar cannot.

Removal is reversible and affects only the pointer: call DELETE /api/favourites with the same workspace_id and folder_id, then POST again if you need to restore it.

## Troubleshooting

**There is no folder star in Files.** That is the expected current client behavior. Choose **Add to group** or use the REST request above.

**POST is refused before reaching the folder.** Confirm that the bearer key has `full` scope and API surface access. Non-GET REST operations default to full scope unless the route has an explicit narrower override, and favourites POST has none.

**GET returns “Not a member” or a Files-access refusal.** Confirm the workspace ID, key pin, active membership, absence of folder confinement, and the role's Files page grant. These GET rules do not retroactively invalidate a successful POST pointer.

**The request reports a duplicate.** Do not retry. Read the existing favourite row instead; the server enforces one pointer per user and folder.

## Related guides

- [Organize files](/files/organize-files)
- [Search files](/files/search-files)
