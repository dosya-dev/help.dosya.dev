---
{
  "articleId": "hc-request-destination-folder",
  "locale": "en",
  "revision": 6,
  "title": "Choose a destination for requested files",
  "summary": "Choose where requested files land, understand root and per-uploader folders, and verify the destination safely before inviting external uploaders.",
  "category": "sharing",
  "articleSlug": "request-destination-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/web/src/pages/file-requests.tsx; apps/api/src/pages/api/file-requests/create.ts; apps/api/src/pages/api/upload-request/[token]/upload.ts; apps/api/src/pages/api/upload-request/[token]/multipart/init.ts; and apps/api/src/lib/upload-request/guard.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request destination folder",
    "file request operations",
    "Dosya help",
    "file sharing"
  ]
}
---
The **Upload destination** controls where Dosya stores every accepted submission. Decide it before distributing the link, because selecting another folder later affects future uploads only.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-destination-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-destination-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-destination-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-destination-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-destination-folder-workflow-map-2026-10-14.webp" alt="Light and dark setup map for choosing an upload destination, deciding on uploader folders, and confirming a test file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Set the storage location and folder layout before invitations leave the workspace, then prove the route with one controlled submission. <a class="workflow-map-full" href="/screenshots/request-destination-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-destination-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-destination-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you choose

The web creation dialog includes a folder picker. Desktop and mobile creation forms do not, so requests created there use the effective workspace root. Use the web app when a specific receiving folder is required.

Creating a request requires **Upload files** in the current workspace. For a folder-confined member, the effective root is the member's assigned anchor and every chosen folder must remain within that subtree. A destination must be live, visible, and writable; a fully locked folder cannot accept a request. The creation endpoint does not apply a distinct paid-plan feature gate.

The web form enables **Put each uploader in their own folder** by default. With that option on, Dosya separates submitters below the request destination. Turn it off only when all received files should share one folder.

## Steps

1. In the web app, open **File requests** and choose **New request**.
2. Select **By email** to send invitations, or **By link** to copy a public URL.
3. Enter **Title (optional)** and **Message (optional)**. A clear title makes the resulting storage folder easier to recognize.
4. Open **Upload destination** and select the intended live folder. Leaving the field blank displays **Root (workspace top level)**; scoped members are still confined to their anchor.
5. Decide whether to keep **Put each uploader in their own folder** enabled. When enabled, each submitter's files are grouped under the request location.
6. Configure **Expires**, **Password (opt)**, and any **Advanced options** such as **Allowed extensions**, **Max file size (MB)**, or **Max files**.
7. Complete the request. Email mode needs at least one valid address and accepts at most the first 100 submitted recipient addresses; link mode returns the shareable request URL.
8. Before distributing it widely, upload one harmless file through the public page and confirm its exact folder in workspace storage.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="File-request recipient panel used after destination setup to confirm invited addresses and their pending upload state." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>After checking the storage route, the recipient panel confirms which email invitations belong to that configured request. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## How Dosya builds the folders

If uploader folders are on and the request has a title, Dosya first creates a folder named from that title below the chosen destination, then records that folder as the request's receiving location. Individual uploader folders are created underneath it. Without a title, uploader folders sit directly below the selected destination.

The public page may use a verified recipient identity, an entered name or email, a dropped folder name, or a generated guest label to build the uploader path. Folder names are normalized before storage. The uploader sees the workspace and request details, not a browser for the owner's internal folder tree.

A recipient does not need a Dosya account. Their accepted files become workspace data that authorized members can see according to folder scope and hidden-item rules. The request's storage consumes workspace quota.

## Expected result

A test upload is accepted once, appears beneath the chosen live destination, and follows the selected shared-folder or per-uploader layout. Invitations continue to use the same request policy that was confirmed during setup.

## Troubleshooting

**Creation says “You don't have upload permission in this workspace.”** Use a role with **Upload files** or ask a workspace administrator to create the request.

**You receive “Destination folder not found.”** Reopen the picker. The folder may be deleted, hidden, in another tenant, or outside the current member's scope.

**The response contains “folder_locked.”** Full lock prevents any new file or folder below that destination. Choose another location or have an authorized member unlock it.

**Dosya says it could not create the titled folder.** The API returns **Could not create the “Title” folder for this request** when per-uploader setup cannot create the request folder. Check naming, write access, folder state, and workspace quota before retrying.

**The request opens but uploads fail later.** A destination can be locked or the workspace can fill after creation. The public uploader may show **This upload request can no longer accept files.** for a later lock; select an available destination or free storage before another attempt.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
