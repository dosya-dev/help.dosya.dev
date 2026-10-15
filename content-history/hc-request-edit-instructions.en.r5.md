---
{
  "articleId": "hc-request-edit-instructions",
  "locale": "en",
  "revision": 5,
  "title": "Edit file-request instructions",
  "summary": "Edit a file request's title and uploader message across supported clients, understand permission rules, and confirm what changes for existing invitees.",
  "category": "sharing",
  "articleSlug": "request-edit-instructions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/web/src/components/file-request-edit-dialog.tsx; apps/desktop/src/renderer/pages/FileRequestsPage.tsx; apps/mobile/app/file-requests/[id].tsx; apps/api/src/pages/api/file-requests/[id].ts; and apps/api/src/lib/access/manage-own.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request edit instructions",
    "File-request owner controls",
    "Dosya help",
    "file sharing"
  ]
}
---
The request **Title** identifies the collection to uploaders, while **Message (optional)** carries directions such as a naming convention or deadline. Updating either field changes the public upload page after it is reloaded. It does not replace the request link, move files, or send a revised email to people who were invited earlier.

<figure class="help-screenshot"><a href="/screenshots/request-edit-instructions-help-workflow-2026-10-14.webp"><img src="/screenshots/request-edit-instructions-help-workflow-2026-10-14.webp" alt="Four-step map for opening a file request, changing its title or message, saving, and checking the uploader page." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Follow the owner path from the request list to the live uploader wording, without changing the upload destination or access link. <a href="/screenshots/request-edit-instructions-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Who can edit the wording

An Owner or Admin can normally manage every request in the workspace. A Member can edit a request they created when the role includes **View own shares**. A Viewer has neither own-share nor all-share management by default. A custom role with **View all shares** can manage any request; **View own shares** limits the person to requests they created.

Changing only the title or message does not require **Upload files** permission. Expiry, password, destination, extension, file-size, and file-count changes do require that additional permission. The request endpoints do not contain a paid-plan branch for these text fields; workspace permissions decide access.

Use the web app, desktop app, or mobile app for this task. The web command is **Edit**. Desktop and mobile group these fields under **Edit title and message**.

## Steps

1. Open **File requests** in the workspace that owns the request.
2. On the web, find the request and choose **Edit**. On desktop or mobile, open its details and choose **Edit title and message**.
3. Change **Title** or **Message (optional)**. Leading and trailing spaces are removed when the value is saved; leaving either field empty clears it.
4. Select **Save changes** on the web, or the corresponding save action in the native client. The web confirms with **Request updated** and **Your changes have been saved.**
5. Open the existing request link in a private browser window and reload it. Check the displayed title and message as an uploader would see them.
6. If recipients need the new wording in their inbox, resend their invitations separately. Saving these fields alone does not send mail.

<figure class="help-screenshot"><a href="/screenshots/file-request-overview-2026-10-13.webp"><img src="/screenshots/file-request-overview-2026-10-13.webp" alt="File requests overview with the Edit control used to open the title and message form for one request." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The overview keeps **Edit** beside the selected request; confirm the row title before opening the form so another live request is not changed. <a href="/screenshots/file-request-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## What changes for uploaders

The next load of the public page shows the current title and message. An invitation already delivered keeps the wording embedded in that email, although its link opens the updated page. The request token, personalized recipient token, password, expiry, accepted extensions, maximum size, maximum file count, and receiving folder remain unchanged.

No file is renamed or moved by a wording edit. Existing upload records and recipient states also stay intact. Clearing the message simply removes that optional paragraph from the public page.

## Expected result

The owner sees the saved text when reopening the edit form, and an uploader sees the same current wording after refreshing the public request. Existing invitations are not reissued, and previously received files remain where they were stored.

## Troubleshooting

**You see “You don't have permission to change this file request.”** Confirm that you created the request and have **View own shares**, or ask a role with **View all shares** to edit it. Gaining **Upload files** alone does not grant request management.

**The request cannot be opened.** The web detail screen reports **This file request does not exist or you do not have access to it.** Check the workspace and account, then ask an Admin to verify that the request still exists and falls inside your folder scope.

**A recipient still sees the former wording.** Have them reload the public link. If they are reading the old invitation message itself, use **Recipients** and **Resend** after confirming the new copy.

**You need to change the destination or limits.** Use the web **Edit request** dialog with **Upload files** permission. Those settings change upload behavior and should be verified independently.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
