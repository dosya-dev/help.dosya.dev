---
{
  "articleId": "hc-upload-destination-locked",
  "locale": "en",
  "revision": 5,
  "title": "Fix an upload blocked by the destination",
  "summary": "Check the destination's lock and role restrictions, then choose a writable folder and restart the affected upload deliberately.",
  "category": "uploading",
  "articleSlug": "upload-destination-locked",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/api/src/lib/upload/open.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/lib/download-guard.ts, apps/api/src/lib/folder-lock-write-gate.unit.test.ts, apps/api/src/pages/api/folders/[id]/unlock.ts, apps/web/src/pages/uploads.tsx, apps/web/src/lib/upload-runner.ts, apps/web/src/api/error-copy.ts, and focused local tests. The paired workflow map illustrates the source-backed lock recovery branches with fictional file details.",
  "related": [
    "hc-failed-upload",
    "hc-lock-folder",
    "hc-workspace-folder-access"
  ],
  "keywords": [
    "upload destination locked",
    "upload permission denied",
    "writable cloud folder",
    "folder access upload",
    "Dosya cloud storage"
  ]
}
---
An upload cannot add content inside a **full lock** on its destination folder or any ancestor. The web app displays the server's `folder_locked` code as **This folder is locked. Enter its password to open it.** A **view only** lock controls downloading and does not by itself block a new upload.

The failed row keeps the workspace and folder chosen when it was created. **Retry** sends it to that same destination; changing **Upload options → Folder** affects files you add afterward. Decide whether to unlock the original path or create a new row for another writable folder.

## Before you start

- Keep the original source file available in this browser tab. After a reload, a failed row cannot retry until the source is selected again.
- Confirm the active workspace and expand the upload list or open **Uploads → Upload queue**.
- Read the entire row message before changing access. **Destination folder not found**, **This folder is outside the folder you're confined to**, and a role permission error require different fixes.

## Steps: fix an upload blocked by the destination

1. Locate the failed filename and note the destination shown in its row. Do not remove the row until you have recorded the error.
2. Open **Files** and navigate to that folder. If an ancestor is fully locked, the folder page shows a password field and **Unlock**; access granted this way lasts **one hour** for your account.
3. Enter the folder password. Unlocking another member's session does not unlock yours, and an expired grant must be renewed.
4. Return to the existing upload row and select **Retry** while the tab still holds the source bytes. A successful unlock lets that row keep its original target.
5. If you should not unlock that area, open **Uploads**, choose a permitted destination under **Upload options → Folder**, then select the source again. This creates a separate queue row.
6. Wait for **Done**, choose **Open in Files**, and verify the final folder, filename and size.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/upload-destination-locked-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upload-destination-locked-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upload-destination-locked-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/upload-destination-locked-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/upload-destination-locked-workflow-map-2026-10-14.webp" alt="Four-step map for recovering an upload blocked by a locked destination: record the failed folder, unlock its protected ancestor or choose another writable destination, retry deliberately, and verify the completed file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Record the affected folder, unlock its protected ancestor or choose a writable destination, then verify the completed file in Files. <a class="workflow-map-full" href="/screenshots/upload-destination-locked-workflow-map-2026-10-14.webp" data-light-href="/screenshots/upload-destination-locked-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/upload-destination-locked-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** A new destination can already contain the same filename. Dosya may treat a same-name upload as another version, so inspect the target before starting the replacement row.

## Expected result

The intended row reaches **Done** in a folder your account can write to. The other failed row can be removed from the list after you verify the stored result; removing queue history does not delete a cloud file.

## Limits and important details

- A folder-level full lock seals its whole subtree, including otherwise unlocked child folders. Unlocking the relevant ancestor for your account opens uploads until that one-hour grant expires.
- A missing or hidden folder deliberately returns **Destination folder not found**. Ask an administrator to confirm the path rather than guessing whether a concealed folder exists.
- Folder-confined members can upload only inside their assigned root. The exact refusal is **This folder is outside the folder you're confined to**.
- Opening the Upload page requires **Access Upload**; sending a file requires **Upload files**. The page shows **Your role can't upload files** when the latter permission is absent.
- Changing a lock requires the role's lock permission. A member who only knows the password can unlock the folder temporarily without removing its configured lock.

## Troubleshooting

**The folder opens but Retry still says it is locked.** Confirm you unlocked the locked ancestor with the same account that owns the upload row. If more than one ancestor is protected, open each required folder before retrying.

**Retry returns the same destination error.** The row still points to the original folder. Remove it, select a writable destination under **Upload options**, and add the source file as a new upload.

**The row survived a refresh and Retry is disabled.** The browser no longer has the local bytes. If the row is **Interrupted**, use **Resume** and reselect the matching filename and byte size; otherwise remove it and create a fresh row.

**The error says Destination folder not found.** The folder was deleted, is hidden from your role, or is no longer accessible. Choose a visible folder, because retrying cannot repair that reference.

**The page says your role cannot upload.** Ask a role manager for **Upload files**. Moving to an unlocked folder does not bypass a workspace permission.

## Related guides

- [Troubleshoot a failed upload](/troubleshooting/failed-upload)
- [Lock a folder with a password](/files/lock-folder)
- [Restrict a workspace member to one folder](/workspaces/folder-access)
