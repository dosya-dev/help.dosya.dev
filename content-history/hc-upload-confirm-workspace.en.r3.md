---
{"articleId":"hc-upload-confirm-workspace","locale":"en","revision":3,"title":"Choose the correct workspace and folder before uploading","summary":"Switch to the intended Dosya workspace, select a writable cloud folder, and verify a completed test upload before transferring important files.","category":"uploading","articleSlug":"upload-confirm-workspace","status":"published","lastReviewed":"2026-10-14","verification":"Local source-reviewed on 2026-10-14 against apps/web/src/components/layout/dashboard-sidebar.tsx, apps/web/src/router.tsx, apps/web/src/pages/uploads.tsx, apps/web/src/components/folder-picker-dialog.tsx, apps/web/src/hooks/use-permissions.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/pages/api/upload/init.ts and apps/api/src/lib/access/scope.ts. Verified the two-second workspace transition, active-workspace routing, Uploads and Upload files labels, Root destination behavior, folder search and creation controls, access_upload and upload_files gates, folder confinement, exact permission refusals, completion actions and group-upload placement. The existing destination capture was inspected and remains accurate.","related":["hc-upload-files","hc-switch-workspaces","hc-upload-destination-locked","hc-upload-test-one-file"],"keywords":["choose cloud upload workspace","select upload destination folder","upload files to correct workspace","Root top level upload","cloud storage folder upload","Dosya Uploads destination"]}
---
Every upload is tied to the workspace that was active when its queue item was created. Choose the workspace before you select files, then set the **Folder** under **Upload options**. A matching folder name in another workspace is a different destination.

## Before you start

- Sign in with the account that belongs to the receiving workspace.
- Ask the workspace owner for the exact workspace and folder path when someone else assigned the destination.
- Prepare one small, non-confidential file with a distinctive name, such as `destination-check-2026-10-14.txt`.
- Confirm your role can open **Uploads** and add bytes. These are separate capabilities: `access_upload` exposes the page, while `upload_files` permits the transfer.

## Steps

### Switch to the intended workspace

1. Read the workspace name in the upper part of the left sidebar.
2. Open the workspace switcher and choose the intended workspace.
3. Dosya displays **Switching workspace…** for at least two seconds and then lands on that workspace's dashboard.
4. Read the sidebar name again. The data shown by **Files**, **Uploads**, **Shared**, **Team** and workspace settings now belongs to that active workspace.
5. If the workspace is missing, check the signed-in email and whether its invitation was accepted. Ask the owner to confirm membership instead of uploading to a similarly named workspace.

The switch deliberately navigates away from the previous workspace page. Reopen **Uploads** after the transition rather than trusting an older destination control left in another tab.

### Select the destination folder

1. Choose **Uploads** in the sidebar. The page heading is **Upload files**.
2. In **Upload options**, find the **Folder** control before adding any files.
3. **Root (top level)** means the top level available to this member in the active workspace. A folder-confined member is resolved to the assigned anchor and cannot write to the unrestricted workspace root.
4. Open the folder control. The dialog title and confirmation action are **Select folder**.
5. Browse the folder tree or use **Search folders...**. Search results include their path, which helps distinguish repeated names.
6. Select the intended folder and choose **Select folder**. Dosya reports **Uploading here** and says that new files will go to the selected name.
7. If you are authorized to create folders, use **New folder at root** or **New folder in “_name_”**, enter the name and choose **Create**. A successful result says **Folder created**.

<figure class="help-screenshot">
  <a href="/screenshots/upload-destination-2026-10-10.webp"><img src="/screenshots/upload-destination-2026-10-10.webp" alt="Dosya Upload files page showing file and folder upload choices with the destination control set to Root top level." width="1160" height="570" loading="lazy" decoding="async" /></a>
  <figcaption>Check the <strong>Folder</strong> control before selecting source files; <strong>Root (top level)</strong> belongs to the workspace currently named in the sidebar. <a href="/screenshots/upload-destination-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Prove the destination with one file

1. With the workspace and folder visible, choose **Select files** and add the harmless test file.
2. Watch its row in **Upload queue**. **Queued** or a percentage is not proof of a stored copy.
3. Wait for **Done**.
4. Choose **View file** to open that result, or **Go to location** to open its containing folder.
5. Compare the file's exact name and size, then return to **Uploads** and reselect the same destination for the important transfer.

Files chosen from a group view still land in a real folder. When the header says files will land at the top level and be added to a group, verify both the cloud location and group membership.

## Permission and folder rules

- A role without `access_upload` does not receive the Uploads route or sidebar item.
- A role that reaches the page but lacks `upload_files` sees **Your role can't upload files** and **Ask a workspace owner or admin if you need to add files here.**
- The server can return **You don't have access to the upload page** or **You don't have upload permission in this workspace** if the role changed after the interface loaded.
- A folder-confined member receives **This folder is outside the folder you're confined to** when a request names a destination beyond the assigned subtree.
- A hidden, deleted or foreign folder is not a usable target. A full lock returns the folder's locked state rather than writing underneath it.
- Workspace storage, file-size, extension, member-storage and simultaneous-upload policies remain active after the destination is chosen.

## If you selected the wrong place

Do not start another copy until you know whether the first one completed. Use the queue row's **View file** or **Go to location**, or search **Files** in the workspace recorded on that row. Move the completed item when your role permits it; otherwise ask an owner or admin to move it. Deleting the first copy before verifying the correction can remove the only successful transfer.

## Expected result

The test row reaches **Done** and appears once in the intended folder of the intended workspace. The important transfer is then started with the same confirmed destination, and each completed row can be opened from its recorded location.

## Troubleshooting

**The active workspace is wrong after switching.** Wait for **Switching workspace…** to finish, then read the sidebar name. Close stale tabs if two workspaces are easy to confuse.

**The folder search returns no match.** Confirm the active workspace and spelling. Your role may be confined to another subtree, or the folder may have been hidden, moved or deleted.

**New folder fails.** Your role may lack folder-creation permission, the parent may be locked, or the name may conflict with an existing child. Choose an existing writable destination or ask an administrator to create it.

**The completed file is not where expected.** Check **Root (top level)**, the queue row's workspace, and **Go to location** before uploading again. The first copy may be valid in a different folder.

## Related guides

- [Upload files and folders](/uploading/files-and-folders)
- [Switch between workspaces safely](/account/switch-workspaces)
- [Fix a destination-blocked upload](/uploading/upload-destination-locked)
- [Verify a sample upload](/uploading/upload-test-one-file)
- [Choose a direct download or ZIP archive](/uploading/download-choose-method)
