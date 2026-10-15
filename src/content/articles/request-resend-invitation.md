---
{
  "articleId": "hc-request-resend-invitation",
  "locale": "en",
  "revision": 6,
  "title": "Recover a file-request invitation that was not received",
  "summary": "Resend a pending file-request invitation, verify its Sent timestamp, and distinguish a delivered reminder from a mailbox or address problem.",
  "category": "sharing",
  "articleSlug": "request-resend-invitation",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/file-requests.tsx, apps/api/src/pages/api/file-requests/[id]/resend.ts, apps/api/src/pages/api/file-requests/[id]/recipients.ts.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request resend invitation",
    "File-request owner controls",
    "Dosya help",
    "file sharing"
  ]
}
---
Use **Resend** only for a recipient whose row is still **Pending**. A successful reminder keeps the same request and recipient URL; it does not create a duplicate request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-resend-invitation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-resend-invitation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-resend-invitation-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-resend-invitation-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-resend-invitation-help-workflow-2026-10-14.webp" alt="Four-step map for opening Recipients, finding a Pending address, resending the existing invitation, and checking its Sent time and mailbox delivery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Resend only a Pending invitation and verify both the updated Dosya Sent record and the recipient's newest message. <a class="workflow-map-full" href="/screenshots/request-resend-invitation-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-resend-invitation-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-resend-invitation-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **File requests** in the web app, identify the active request, and choose **Recipients**. The same share-management permission and folder-scope rules used for recipient removal apply.
2. Find the intended email row. **Resend** appears only while its state is **Pending**; a row marked **Uploaded** no longer offers that action.
3. Confirm the address is correct before resending. If it is wrong, remove the row and use **Add email address…** plus **Add & send**; duplicate addresses return **This email is already a recipient**.
4. Choose **Resend** for one address, or **Resend all** to attempt every pending address sequentially. The reminder carries the same recipient-specific request URL and current expiry.
5. Reopen **Recipients** and check that the row now shows **Sent** with a recent relative time. The server writes that timestamp only after the email provider accepts the reminder.
6. Ask the recipient to check spam and open the newest message. If **Resend all** reports success, still verify individual rows and inboxes: the current bulk control continues after failed sends and its toast reports the number attempted.

<figure class="help-screenshot"><a href="/screenshots/file-request-overview-2026-10-13.webp"><img src="/screenshots/file-request-overview-2026-10-13.webp" alt="File requests overview where the Recipients dialog is opened for an active request." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the overview to open **Recipients**; pending rows provide **Resend**, and **Resend all** attempts every pending invitation. <a href="/screenshots/file-request-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The pending recipient receives another reminder for the existing request, and a successful send updates that row’s Sent time without creating another request.

The API can return **Failed to send email** for a single resend.
A revoked request returns **Request not found or revoked** and cannot be reminded.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a request](/sharing/manage-file-request)
