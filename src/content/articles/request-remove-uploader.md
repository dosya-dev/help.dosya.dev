---
{
  "articleId": "hc-request-remove-uploader",
  "locale": "en",
  "revision": 6,
  "title": "Stop an uploader from using a file-request invitation",
  "summary": "Stop future invitation email, understand what recipient removal changes, and revoke the request when the existing upload URL must stop working.",
  "category": "sharing",
  "articleSlug": "request-remove-uploader",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: apps/web/src/pages/file-requests.tsx, apps/api/src/pages/api/file-requests/[id]/recipients.ts, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/upload.ts.",
  "related": [
    "hc-file-request",
    "hc-request-manage"
  ],
  "keywords": [
    "request remove uploader",
    "File-request owner controls",
    "Dosya help",
    "file sharing"
  ]
}
---
Removing an address from a file request stops it appearing in **Recipients**, but it does not invalidate a URL that person already has. Revoke the whole request when that bearer link must stop accepting uploads.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/request-remove-uploader-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-remove-uploader-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-remove-uploader-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/request-remove-uploader-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/request-remove-uploader-help-workflow-2026-10-14.webp" alt="Four-step map for finding the recipient row, removing its invitation record, recognizing the bearer URL still works, and revoking the request when access must end." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Remove the intended recipient record, then revoke the whole request when the old bearer upload URL must stop accepting files. <a class="workflow-map-full" href="/screenshots/request-remove-uploader-help-workflow-2026-10-14.webp" data-light-href="/screenshots/request-remove-uploader-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/request-remove-uploader-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to the web app, open **File requests**, and choose the request you need to control. You need `view_all_shares`, or `view_own_shares` and ownership of this request; folder-scoped members can manage only requests inside their allowed subtree.
2. Choose **Recipients**, find the exact email address, and note whether its row says **Pending** or **Uploaded**. Removing this row does not remove files already received.
3. Use the red trash button on that row. The recipient disappears immediately; this action has no confirmation dialog and the API returns success even if another session already removed the row.
4. Do not treat that removal as per-recipient revocation. The emailed `?r=` token no longer identifies the address, but the underlying request token is still a bearer upload URL and can accept anonymous uploads.
5. If the old invitation must stop working, return to the request row and choose **Revoke**. This closes the entire request for every recipient and future visitor; the public page then says **This request was closed**.
6. Open the old invitation in a private window. A removed recipient can still reach an active request, while a revoked request returns the closed state. Create a new request for everyone who should retain access.

<figure class="help-screenshot"><a href="/screenshots/file-request-overview-2026-10-13.webp"><img src="/screenshots/file-request-overview-2026-10-13.webp" alt="File requests overview showing request rows and the Recipients control used to manage invitation records." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Open **File requests** and use **Recipients** for invitation records; use the request-level **Revoke** action when the bearer upload URL must be disabled. <a href="/screenshots/file-request-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Recipient removal clears the tracked invitation only. Revoking closes the request for all uploaders, preserves files already delivered, and cannot be undone.

**A recipient deletion emits `file_request_recipient_removed` only when a row existed.**
**The public request explicitly says that files already sent remain with the requester after revocation.**

## Related guides

- [Create a file request](/sharing/file-request)
- [Manage a request](/sharing/manage-file-request)
