---
{
  "articleId": "hc-request-review-uploads",
  "locale": "en",
  "revision": 6,
  "title": "Review files submitted to a request",
  "summary": "Review file-request uploads by name, size, uploader, and time across web and native clients, then handle unexpected files without losing evidence.",
  "category": "sharing",
  "articleSlug": "request-review-uploads",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/web/src/pages/file-request-detail.tsx; apps/desktop/src/renderer/pages/FileRequestsPage.tsx; apps/mobile/app/file-requests/[id].tsx; apps/api/src/pages/api/file-requests/[id]/uploads.ts; and apps/api/src/lib/repo/repo-d1/requests.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request review uploads",
    "file request operations",
    "Dosya help",
    "file sharing"
  ]
}
---
The request detail view reconciles what Dosya accepted with what you expected to receive. Review file name and size first, then use uploader identity and timestamp as context rather than proof that the file contents are safe.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-review-uploads-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-review-uploads-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-review-uploads-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-review-uploads-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-review-uploads-workflow-map-2026-10-14.webp" alt="Light and dark review map for comparing filenames, sizes, uploader identities, dates, and the final file disposition." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Reconcile each expected submission with the request record before downloading, renaming, sharing, or moving an unfamiliar file. <a class="workflow-map-full" href="/screenshots/request-review-uploads-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-review-uploads-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-review-uploads-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Choose the right client

The web detail screen provides the fullest review. Its upload table has **Name**, **Size**, **Uploader**, and **Uploaded** columns, plus search and sorting by **Newest**, **Oldest**, **Name A–Z**, **Name Z–A**, **Largest**, or **Smallest**. It can preview, download, rename, delete, select multiple files, and build a ZIP download.

Desktop request details show upload name and size. Mobile adds uploader identity but remains a read-only review surface. Use the web app when you must inspect timestamps or act on a file.

A viewer needs **View all shares**, or **View own shares** when they created the request. Built-in Owners and Admins normally see every request, Members see their own, and Viewers see none. Folder confinement and hidden-file rules still apply. Read-only API keys may list permitted records but do not receive the public request token.

## Steps

1. Open **File requests** and select the request whose title, status, and creation time match the collection you expect.
2. Choose **Uploads (n)** on the web, or open **Uploads (n)** in desktop or mobile request details.
3. Compare the displayed count with the expected delivery. The owner endpoint lists only live file rows visible to your current scope, so trashed or hidden items can explain a difference.
4. On the web, search by file name and choose the sort order that exposes duplicates, unusually large files, or unexpected timing.
5. Read **Uploader** carefully. Dosya prefers an entered uploader name, then a verified recipient email, then **Anonymous**. An email is associated with the upload record only when the personalized recipient token resolved successfully.
6. Compare **Uploaded** with the sender's claimed time, allowing for their upload duration. Recipient status records the first verified upload time; it is not updated for every later file.
7. Preview a supported harmless file or download it according to your organization's scanning process. A familiar name or recipient label does not validate the content.
8. Rename or organize a confirmed file if necessary. For an unwanted item, delete it on the web after recording the details your team needs.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Recipient status panel used beside upload review to compare pending addresses with those that completed a verified first upload." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Recipient state can corroborate the first authenticated submission, but the upload table remains the record for each individual file. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Identity, retention, and deletion

An upload made through a valid personalized link can carry the recipient's verified email. An anonymous visitor can enter a name or email for folder organization, but the owner record does not treat a typed email as verified recipient identity. Network address hashes are not shown as human identity.

Deleting an upload from the owner web view uses the normal workspace deletion flow and moves the file to Trash. It can be restored until Trash is emptied; permanent removal occurs when Trash is purged. A recipient removing one of their own previous uploads from the public page uses a separate withdrawal flow that permanently purges the file and related versions, share links, and chunks.

The request upload list joins live workspace files, so a trashed file disappears from that list. Renaming changes the workspace file itself. Bulk ZIP download reads the currently selected files and does not remove their originals.

## Expected result

Every visible upload is matched to an expected file or isolated for follow-up, with its actual byte size, available uploader identity, and accepted time recorded. Any owner-side deletion is recoverable from Trash until permanent cleanup.

## Troubleshooting

**The page says “No files uploaded yet.”** Check the request title and workspace, then confirm that the sender reached a completed receipt. A staged, rejected, cancelled, or interrupted item is not an upload.

**Search reports “No uploads match your search.”** Clear the search term and reset sorting. This message means the current filter found nothing, rather than proving the request has no files.

**The whole request is unavailable.** The web screen says **This file request does not exist or you do not have access to it.** Verify own-share or all-share access, folder scope, and the account currently selected.

**The recipient is Uploaded but you see fewer files than expected.** **Uploaded** marks the first verified success, not a promised file count. Inspect Trash and hidden visibility, then ask the recipient for the success receipt or reference.

**A sender appears as Anonymous.** The submission did not resolve to a retained verified recipient identity. Ask for the completion reference and compare the exact filename, size, and timestamp rather than assigning the file by guesswork.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
