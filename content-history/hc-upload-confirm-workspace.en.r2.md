---
{"articleId":"hc-upload-confirm-workspace","locale":"en","revision":2,"title":"Choose the correct workspace and folder before uploading","summary":"Confirm the active Dosya workspace, choose the intended destination folder and verify one completed test upload before transferring important files.","category":"uploading","articleSlug":"upload-confirm-workspace","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web workspace switcher, workspace-change transition, Uploads page, destination picker and active-workspace upload state against local product source and relevant tests on 2026-10-14. The screenshot uses an isolated workspace and upload fixture.","related":["hc-upload-files","hc-switch-workspaces","hc-upload-destination-locked"],"keywords":["upload to correct cloud workspace","choose upload destination folder","cloud file upload workspace","upload files to Dosya folder","verify upload location"]}
---
Every Dosya upload belongs to one workspace and one destination folder. Workspaces can contain folders with identical names, so checking only the folder name is not enough. Confirm the workspace first, then choose the folder from the upload screen.

## Before you start

- Sign in to the account that has access to the destination workspace.
- Ask the workspace owner for the exact workspace and folder names when you are delivering files for someone else.
- Prepare one small, non-confidential test file with a distinctive name, such as `upload-location-check.txt`.
- Check that your role allows uploads to the destination. Folder-scoped members may see only their assigned part of a workspace.

## Steps: select the workspace

1. In the Dosya web app, read the workspace name at the top of the left sidebar. This is the active workspace used by **Files**, **Uploads**, **Shared**, **Team** and workspace settings.
2. Select the workspace name to open the switcher.
3. Choose the intended workspace. Dosya shows a **Switching workspace...** screen and opens that workspace's dashboard.
4. Read the workspace name in the sidebar again after the transition. Do not rely on the name from the previous screen or an old browser tab.
5. If the required workspace is absent, confirm that you accepted its invitation and signed in with the invited account. Do not upload to a similarly named workspace as a workaround.

## Choose the upload destination

1. Open **Uploads** from the sidebar.
2. Find the destination control under **Upload options** before adding files.
3. If it says **Root (top level)**, the upload will land at the top of the active workspace.
4. To use a folder, open the destination picker and navigate from the active workspace root to the intended folder. Confirm each parent folder when names repeat.
5. Add the small test file and start the upload.
6. Wait until the test item reaches **Done**. A queued or uploading row does not prove that the cloud copy exists.

<figure class="help-screenshot">
  <a href="/screenshots/upload-destination-2026-10-10.webp"><img src="/screenshots/upload-destination-2026-10-10.webp" alt="Dosya Upload page with callout 1 on the Folder upload option and callout 2 on the destination button showing Root top level." width="1160" height="570" loading="lazy" decoding="async" /></a>
  <figcaption>Check the destination button before adding files. <strong>Root (top level)</strong> means the top level of the workspace currently shown in the sidebar. <a href="/screenshots/upload-destination-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Verify before the full transfer

Open **Files** in the same workspace and navigate to the chosen folder. Confirm the test file's exact name and size. Only then return to **Uploads**, recheck the destination, and add the important files.

Keep the workspace unchanged until the transfer finishes. If you must work in another workspace, use a separate browser window only when you can clearly distinguish the two sessions. Before each new upload, read the active workspace and destination again.

## Expected result

The test file reaches **Done** and appears once in the planned folder inside the intended workspace. The full transfer uses the same confirmed destination, and its completed files are visible there after reopening **Files**.

## Limits and important details

- The destination picker is scoped to the active workspace. It cannot select a folder from another workspace.
- Switching workspaces changes the data shown by workspace pages. A folder with the same name in another workspace is a different destination.
- A folder-scoped role may show the assigned folder as the usable boundary even when another member describes it as part of a larger tree.
- Storage quota, upload-size policy, allowed file types, folder locks and role permissions can still block a correctly targeted upload.
- If a completed upload went to the wrong place, verify it there before moving or deleting anything. Avoid uploading a second copy until you know whether the first transfer completed.

## Troubleshooting

**The workspace is missing from the switcher.** Check the signed-in email address and the workspace invitation. Ask an owner to confirm your membership rather than creating a replacement workspace.

**The folder is missing from the destination picker.** Confirm the active workspace, then check whether your role is limited to another folder. The folder may also have been moved, deleted or locked.

**The upload page still shows an old destination.** Return to the workspace dashboard, reopen **Uploads**, and choose the destination again. Verify with one small file before resuming the batch.

**The file reached Done but is not where expected.** Search the active workspace for the exact filename, check **Root (top level)**, and review the upload row before retrying. A second upload can create an unnecessary duplicate.

## Related guides

- [Upload files and folders](/uploading/files-and-folders)
- [Switch between workspaces](/account/switch-workspaces)
- [Fix an upload blocked by the destination](/uploading/upload-destination-locked)
