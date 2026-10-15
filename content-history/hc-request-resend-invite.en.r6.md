---
{
  "articleId": "hc-request-resend-invite",
  "locale": "en",
  "revision": 6,
  "title": "Resend a file-request invitation",
  "summary": "Resend one or all pending file-request invitations, verify delivery timestamps, and understand what the reminder changes for each recipient.",
  "category": "sharing",
  "articleSlug": "request-resend-invite",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/web/src/pages/file-requests.tsx; apps/desktop/src/renderer/pages/FileRequestsPage.tsx; apps/mobile/app/file-requests/[id].tsx; apps/api/src/pages/api/file-requests/[id]/resend.ts; and apps/api/src/pages/api/file-requests/[id]/recipients.ts. Production behavior was not exercised.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request resend invite",
    "file request operations",
    "Dosya help",
    "file sharing"
  ]
}
---
A reminder is useful when a listed recipient has not uploaded, lost the first message, or needs the invitation again. Resending reuses that recipient's existing personalized request URL. It does not create another recipient, reset access, extend the deadline, or change any upload rule.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-resend-invite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-resend-invite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-resend-invite-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-resend-invite-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-resend-invite-workflow-map-2026-10-14.webp" alt="Light and dark workflow map for finding a pending recipient, resending the invitation, and checking its sent time." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the existing recipient row to issue a reminder, then reload its status rather than assuming that an inbox accepted the message. <a class="workflow-map-full" href="/screenshots/request-resend-invite-workflow-map-2026-10-14.webp" data-light-href="/screenshots/request-resend-invite-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/request-resend-invite-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Access and client support

Web, desktop, and mobile expose recipient management. On the web, choose **Recipients** on the request row. Native clients show the same recipient list inside request details. A row is **Pending** until the first upload verified through that personalized recipient token; it becomes **Uploaded** after that first accepted file.

A manager needs **View all shares**, or **View own shares** for a request they created. The request must also fall inside the manager's folder scope. Owner and Admin roles normally manage all requests, Member normally manages their own, and Viewer normally cannot. Resending has no separate paid-plan gate in the API.

## Steps

1. Open **File requests**, select the request, and enter **Recipients**.
2. Confirm that the request is active. Do not resend from an expired or revoked request.
3. Check the complete email address in the intended row. On the web, the row also shows **Sent ...** or **Not sent** and either **Pending** or **Uploaded**.
4. For one address that has not uploaded, choose **Resend**. To remind every pending address, choose **Resend all** or **Resend all (n)** in a native client.
5. Wait for the action to finish, then refresh the recipient list. Mobile reports **Resent to X of Y**, which exposes partial success. The web can show the broader **Invites resent** message, so inspect individual sent times if some deliveries matter.
6. Ask the recipient to search for the reminder and open its personalized link. Mail-provider acceptance and a recorded sent time do not guarantee that the message escaped spam or filtering.

<figure class="help-screenshot"><a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Recipient management panel with pending and uploaded states, sent timestamps, and the Resend action on eligible rows." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The per-address state distinguishes a reminder attempt from an actual recipient upload; only a verified upload changes **Pending** to **Uploaded**. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the recipient receives

The reminder contains the request title, requester identity, expiry information, workspace branding, and that recipient's existing personalized upload URL. It omits the optional request message, although the public upload page shows the current message when the recipient opens the link. Resending does not make a fresh token. A successful send updates **sent_at** only after the mail service accepts the message.

The current password, destination, allowed extensions, per-file size limit, available file slots, and expiry still govern the link. If those settings were changed after the original invitation, the public page enforces their present values. A reminder cannot reopen an expired or revoked request.

Resending never deletes uploaded files or clears the recipient's first-upload status. The one-recipient action is unavailable after the row has reached **Uploaded**; bulk resend targets rows whose **uploaded_at** remains empty.

## Expected result

Each successful reminder uses the original recipient-specific address, records a newer sent time, and leaves request policy and stored files intact. The recipient remains **Pending** until Dosya accepts their first verified upload.

## Troubleshooting

**You see “Request not found or revoked.”** Check that the selected request still exists and is not closed. Create a new request when access was deliberately revoked.

**The API reports “Recipient not found.”** Refresh the list. Another manager may have removed the row; adding the email again creates a new recipient and a new personalized token.

**Resend returns “Failed to send email.”** The mail provider did not accept that attempt. Verify the address, try later, or give the recipient the request link through an approved channel. Do not interpret an unchanged sent time as delivery.

**The recipient never sees the message.** Have them inspect junk, quarantine, and organization filters. You can copy the request link, but remember that the base public URL can permit anonymous submission when the active request policy allows it.

**The control is missing.** An uploaded recipient cannot be reminded from the per-row button. For a pending row, verify your all-share or own-share permission and the request's folder scope.

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a file request](/sharing/manage-file-request)
