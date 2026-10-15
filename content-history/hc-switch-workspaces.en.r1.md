---
{"articleId":"hc-switch-workspaces","locale":"en","revision":1,"title":"Switch between workspaces safely","summary":"Change the active Dosya workspace, confirm its name and role, and avoid uploading, sharing or changing settings in the wrong workspace.","category":"account","articleSlug":"switch-workspaces","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the workspace switcher, active-workspace state and dashboard transition against the local current web app on 2026-10-12. The screenshot uses two isolated representative workspaces.","related":["hc-navigate-web-app","hc-upload-files","hc-create-link","hc-create-workspace-region"],"keywords":["switch workspace","active workspace","missing files","workspace context","wrong workspace","workspace role"]}
---
The active workspace controls which files, uploads, members, integrations, policies and storage figure the web app shows. Switching changes that context; it does not move or combine files.

## Before you start

- Finish any action whose destination is already fixed, especially an upload or settings form.
- Know the name of the workspace you intend to use.
- If you have similar workspace names, identify a known file, member or storage figure you can check after switching.
- Remember that your role can differ between workspaces, so their menus may not match.

## Steps: switch to another workspace

1. Select the current workspace name at the top of the left sidebar.
2. Under **Your workspaces**, find the intended name. A check marks the workspace currently active.
3. Select the intended workspace.
4. Wait for the workspace transition to finish and the dashboard to load.
5. Confirm the new workspace name above the sidebar.
6. Before uploading or sharing, open **Files** and check a known folder or file. Before changing policies, open **Settings** and confirm the workspace name there too.

<figure class="help-screenshot"><a href="/screenshots/workspace-switcher-navigation-2026-10-12.webp"><img src="/screenshots/workspace-switcher-navigation-2026-10-12.webp" alt="Dosya workspace switcher listing two representative workspaces with a check beside the workspace that is currently active." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>The check identifies the current workspace. Select another row, wait for its dashboard, then verify the workspace name before acting. <a href="/screenshots/workspace-switcher-navigation-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected workspace name appears above the sidebar, its dashboard loads and workspace pages show only the data your membership can reach there. Returning to the previous workspace shows its files again.

## Limits and workspace boundaries

- Switching does not copy, move or delete a file.
- Search, storage usage, Files, Shared, Team, Integrations and workspace Settings follow the active workspace.
- A role or folder restriction can hide menu entries and files in one workspace even when you can see them in another.
- Account-wide profile and security settings continue to apply to your signed-in account.
- A transfer already queued for a destination does not become a safe cross-workspace move merely because you switch the visible workspace.

## Troubleshooting

**Files appear to be missing.** Read the workspace name above the sidebar. Switch back to the workspace where the files were uploaded and check **Files** there.

**A menu entry disappeared.** Compare your role in the two workspaces. The new workspace may grant fewer page or folder permissions.

**The switcher does not list a workspace.** Confirm that you are still a member and signed in to the expected account. An owner may have removed the membership or an invitation may still be pending.

**The page keeps showing old data.** Wait for the workspace transition, then open the destination from the sidebar. If the name changes but the page remains stale, reload once and check service status.

**You uploaded to the wrong workspace.** Keep the source file, verify the completed copy, and upload it to the correct workspace. Do not assume switching will relocate the existing copy; remove the mistaken copy only when you have permission and have confirmed the correct result.

## Related guides

- [Find your way around the web app](/account/navigate-web-app)
- [Upload files and folders](/uploading/files-and-folders)
- [Create and test a sharing link](/sharing/create-link)
- [Create a workspace and choose its storage location](/workspaces/create-and-choose-region)
