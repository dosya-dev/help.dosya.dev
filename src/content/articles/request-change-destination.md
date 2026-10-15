---
{
  "articleId": "hc-request-change-destination",
  "locale": "en",
  "revision": 5,
  "title": "Change a file-request destination folder",
  "summary": "Move future file-request uploads to another workspace folder without moving existing files, while checking scope, lock, permission, and visibility rules.",
  "category": "sharing",
  "articleSlug": "request-change-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/web/src/components/file-request-edit-dialog.tsx; apps/api/src/pages/api/file-requests/[id].ts; apps/api/src/lib/access/manage-own.ts; apps/api/src/pages/api/upload-request/[token]/upload.ts; and apps/api/src/pages/api/upload-request/[token]/multipart/init.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request change destination",
    "File-request owner controls",
    "Dosya help",
    "file sharing"
  ]
}
---
Changing **Upload destination** redirects files accepted after the save. Dosya does not relocate submissions that are already stored, so a request can have older files in its previous folder and newer files in the replacement folder.

<figure class="help-screenshot"><a href="/screenshots/request-change-destination-help-workflow-2026-10-14.webp"><img src="/screenshots/request-change-destination-help-workflow-2026-10-14.webp" alt="Destination-change map showing the request edit form, folder selection, save action, and a future-upload check." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Change the receiver for future submissions, then verify it with a harmless upload while leaving earlier files in their original location. <a href="/screenshots/request-change-destination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Availability and permissions

The destination picker is available in the web app. Desktop and mobile can edit the request title and message, but their request screens do not expose a destination control.

The editor must be allowed to manage the request and have **Upload files** permission. **View all shares** permits management of every request; **View own shares** permits management only when the signed-in member created it. Owners and Admins normally have all-share access, Members normally manage their own requests, and Viewers do not manage requests. No separate paid-tier check appears in the destination update endpoint.

A folder-confined member can select only a live, visible folder inside their permitted subtree. Choosing the workspace root maps to that member's scope anchor instead of escaping the confinement boundary.

## Steps

1. In the web app, open **File requests** and locate the correct request by title, status, and creation date.
2. Choose **Edit**, then open **Upload destination**.
3. Select the new folder. Choose **Root (workspace top level)** only when future submissions truly belong at the root; a confined member's effective root is their assigned anchor.
4. Make sure the folder is active, visible to your role, and not fully locked. Do not delete or lock it while the request remains open.
5. Select **Save changes**. A successful web save shows **Request updated** followed by **Your changes have been saved.**
6. Send one small, non-sensitive test file through the existing request link. Find it in the new folder before asking recipients to continue.
7. Check the former folder separately for earlier submissions. Move those files manually only if your retention and access rules allow it.

<figure class="help-screenshot"><a href="/screenshots/file-request-overview-2026-10-13.webp"><img src="/screenshots/file-request-overview-2026-10-13.webp" alt="Request overview used to choose the exact active request before redirecting its next accepted uploads." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Match the request row carefully before editing because the same public link continues working after its receiving folder changes. <a href="/screenshots/file-request-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Folder behavior after saving

The public request URL, recipient URLs, title, message, password, expiry, extension rule, size ceiling, and file-count limit do not change. Dosya does not mail recipients about a destination update. Uploaders normally see the workspace and request instructions rather than the owner's internal folder path.

When **Put each uploader in their own folder** was enabled for the request, future uploader folders are created below the newly selected destination. The destination edit does not merge those folders with uploader folders at the prior location.

Uploads already completed stay attached to their existing workspace files. The owner request view can therefore list files whose storage locations differ. Changing a destination is reversible for future files by selecting the former folder again, but it never rolls back an upload that has already completed.

## Expected result

The request keeps its existing public address and accepts the next valid file into the newly selected folder. Older submissions remain in place, and recipients receive no automatic notice of the internal routing change.

## Troubleshooting

**The picker is absent.** Open Dosya in a web browser. The desktop and mobile request editors currently offer **Edit title and message**, without folder selection.

**Saving returns “You don't have upload permission in this workspace.”** Ask a workspace administrator to grant **Upload files**, or have an eligible manager perform the change. Share-management permission by itself is insufficient for destination edits.

**Dosya reports “Folder not found in workspace.”** The chosen folder may have been removed, may belong to another workspace, may be hidden from your role, or may sit outside your allowed subtree. Select a visible folder within scope.

**The API returns `folder_locked`.** A full folder lock blocks new content. Unlock that folder or point the request at an unlocked destination before another recipient uploads.

**A new upload remains in the old location.** Reopen **Edit request** to confirm the saved destination, then verify the upload finished after the change. Anything accepted before the save remains in the earlier folder by design.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
