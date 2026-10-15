---
{
  "articleId": "hc-extension-destination-missing",
  "locale": "en",
  "revision": 5,
  "title": "Recover a missing extension destination",
  "summary": "Find an eligible extension destination by checking workspace access, hidden-folder rules and the one-hour folder cache without losing queued saves.",
  "category": "extension",
  "articleSlug": "extension-destination-missing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/state.ts, apps/extension/src/entrypoints/popup/components/FolderPicker.tsx, apps/extension/src/lib/store/prefs.ts, apps/extension/src/lib/auth/sign-in.ts, apps/extension/src/lib/api/routes.ts, apps/api/src/pages/api/folders/tree.ts. Production behavior for “Recover a missing extension destination” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension destination missing",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
A missing destination can result from the selected workspace, folder visibility, role permissions, or the extension’s one-hour folder cache. The picker has no manual refresh control.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-destination-missing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-destination-missing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" alt="Four panels show confirming the picker workspace, searching permitted folders, accounting for the one-hour cache, and testing the recovered destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Trace workspace and folder visibility, allow for cached results, then verify one harmless save in the recovered destination. <a class="workflow-map-full" href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-destination-missing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the destination row beneath **Saving to**, then confirm the workspace shown in the **Choose a folder** dialog.
2. If more than one eligible workspace exists, switch to the intended one. Vault workspaces are deliberately absent because the extension excludes encrypted destinations.
3. Enter the exact folder name in **Search folders**. A folder-confined member sees only the assigned folder subtree, and hidden folders are omitted from the API result.
4. Check the same account in Dosya if the folder remains absent. The role must have `access_files`, and the folder must be visible within the member’s workspace boundary.
5. Account for the one-hour local folder cache. There is no **Refresh** button; close and reopen the picker after the cache expires, or use **New folder here** when creating an appropriate destination because that action invalidates the cached tree.
6. Select the recovered row and run one harmless save. Confirm its completed **Recent saves** entry names that folder before using it for private content.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Dosya extension authorization screen describing the extension’s limited save and folder permissions." width="448" height="554" loading="lazy" decoding="async" /></a><figcaption>Authorization permits saving and folder creation, but folder visibility still follows workspace membership and access rules. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

An eligible folder appears and becomes the **Saving to** destination, or its absence is explained by Vault exclusion, role access, confinement, hiding, or the one-hour cache.

Do not sign out merely to refresh the picker. Sign-out clears tokens, the destination, cached and recent folders, blocked origins, and locally queued capture rows and blobs; files already uploaded remain in Dosya.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
