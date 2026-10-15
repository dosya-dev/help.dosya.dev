---
{
  "articleId": "hc-request-recipients",
  "locale": "en",
  "revision": 3,
  "title": "Invite file-request uploaders and track submissions",
  "summary": "Send recipient-specific upload invitations, interpret Pending and Uploaded, resend safely, and understand forwarding, removal and delivery limits.",
  "category": "sharing",
  "articleSlug": "request-recipients",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/file-requests.tsx, apps/web/src/pages/file-request-detail.tsx, src/pages/upload-request/[token].astro, apps/api/src/pages/api/file-requests/create.ts, apps/api/src/pages/api/file-requests/[id]/recipients.ts, apps/api/src/pages/api/file-requests/[id]/resend.ts, apps/api/src/pages/api/file-requests/[id]/uploads.ts, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/complete.ts, apps/api/src/lib/repo/repo-d1/requests.ts and focused repository/door tests. Confirmed the initial 100-address slice, one-at-a-time later additions with no separate total cap, lower-case duplicate handling, delivery timestamp limitations, recipient-token attribution without inbox verification, first-completion status, forwarding and removal effects. Existing recipient captures remain accurate.",
  "related": [
    "hc-file-request",
    "hc-request-password",
    "hc-request-uploader-confirm-invite",
    "hc-request-upload",
    "hc-request-manage"
  ],
  "keywords": [
    "file request recipients",
    "invite client uploaders",
    "track file submissions",
    "pending file request",
    "resend upload invitation",
    "recipient upload status",
    "file collection email"
  ]
}
---
Choose **By email** when Dosya should send each uploader a recipient-specific URL and track the first completed submission against that address. These invitations provide delivery and attribution signals. They do not make the file request invitation-only and they do not verify control of the recipient's inbox.

Add a request password when the URL itself should not be sufficient to open the upload controls.

## Steps: send the initial recipient list

1. Open **File requests** and select **New request**.
2. Keep **By email** selected.
3. **Add each recipient.** Enter an address, then press Enter, comma or Space. The dialog trims and lowercases it and ignores a duplicate already entered.
4. Add the title and message recipients will recognize.
5. Choose the expiry, **Upload destination** and whether to **Put each uploader in their own folder**.
6. Add a password or **Advanced options** when required.
7. Select **Send request**.
8. Open **Recipients** for the new row and review the recorded addresses.

Creation considers valid addresses in order and accepts at most the first 100. The API writes recipient records only when the mail transport is configured. Production delivery is asynchronous from the user's inbox, and a recorded invitation or sent time does not prove the provider placed it in the inbox.

Each recipient receives the same base request token plus a unique recipient value in the URL. The email names the sender and request and can include the message and expiry.

## Add someone after creation

1. Open **Recipients** on the request row.
2. Enter one address under **Add email address...**.
3. Select **Add & send**.
4. Confirm that the address appears as **Pending**.

Post-creation addition accepts one address per action. The endpoint does not apply the creation flow's 100-address slice or a separate total-recipient ceiling. Use this for genuine additions, not bulk mailing.

Addresses are compared case-insensitively. An existing address returns **This email is already a recipient**; resend that row rather than changing capitalization. Invalid input shows **Enter a valid email address** in the dialog or **Valid email is required** from the API.

Adding recipients requires authority to manage that request and the workspace's upload permission because the invitation delegates upload access. A role with **view_all_shares** can manage anyone's request; **view_own_shares** applies only to the creator's own request. Folder-confined members remain limited to requests whose destinations are inside their scope.

<figure class="help-screenshot">
  <a href="/screenshots/request-recipient-management-2026-10-12.webp"><img src="/screenshots/request-recipient-management-2026-10-12.webp" alt="Recipients dialog with one uploaded address, two pending addresses, Add and send, Resend all and individual Resend controls." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Add one address or resend a pending row from this dialog; recipient state and the latest recorded send time are separate fields. <a href="/screenshots/request-recipient-management-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Resend an invitation

Select **Resend** beside one address, or **Resend all** to process every row that has no **Uploaded** time. The web app sends those reminders sequentially.

The resend endpoint updates the recipient's sent time after its email helper resolves. That helper also resolves when an address is suppressed or when the provider or network returns a handled failure, so the timestamp does not prove provider acceptance or inbox delivery. An ordinary thrown exception returns **Failed to send email** and leaves the timestamp unchanged; a workspace-migration error is rethrown and surfaces as a retryable 503 response instead. **Resend all** reports how many pending rows it attempted, but its interface continues past individual failures; reopen the dialog and check the rows rather than treating the summary toast as delivery proof.

Resending reuses the existing recipient token. It does not create a fresh request, reset the expiry, change the password or restore consumed file slots.

## Interpret Pending and Uploaded

When a valid recipient URL opens, the public page displays **Sending as** with the recorded address and hides the optional email input. No six-digit code is sent or requested. The recipient token is the attribution credential.

**Pending** means no completed file has marked that recipient row. It does not mean the message is unread, undelivered or ignored.

**Uploaded** is stamped when the first small-file upload is recorded or a multipart upload completes through that recipient token. The timestamp remains the first completion time. Later files do not create another recipient status.

Open the request detail to compare the recipient summary with the upload table. One address can submit several files, so uploaded-recipient count and received-file count answer different questions.

<figure class="help-screenshot">
  <a href="/screenshots/request-recipient-status-2026-10-12.webp"><img src="/screenshots/request-recipient-status-2026-10-12.webp" alt="File-request detail with Recipients expanded, one address marked uploaded, two pending and three received files identified by uploader." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Use the recipient state to find who completed at least one transfer, then inspect the file table to confirm what actually arrived. <a href="/screenshots/request-recipient-status-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Understand identity and forwarding

A recipient invitation is a bearer URL, not an account login or inbox challenge. Anyone who receives a forwarded recipient URL can:

- see **Sending as** with the invited address;
- submit files attributed to that address;
- see prior files associated with that recipient token;
- withdraw those visible submissions while the request remains active.

The optional **Your name** field is free text. It helps label a person or team but is not verified identity.

Use a password and deliver it separately when accidental forwarding matters. The password adds a shared gate, while the recipient token preserves attribution. Neither proves which human held the device.

Restricted file-sharing links use a different control: they email a six-digit code, allow five incorrect code attempts and create a 30-minute verified-recipient grant. File-request invitations do not use that workflow.

## Remove a recipient or close access

Removing a row from **Recipients** deletes its tracking record. It does not:

- revoke the base request token;
- close the upload page;
- remove files already received;
- recall an email already delivered;
- guarantee that a copied recipient URL cannot still open the public request.

After removal, that old recipient value no longer resolves to the address. Because the base request remains public, the URL can still open as an anonymous request link and can upload without the removed attribution unless another gate blocks it.

To end all future access immediately, revoke the request. Revocation is permanent and recorded recipients are notified, while completed files remain with the workspace owner. Change or add the request password when the goal is to replace the shared access secret without closing the token.

## Submission removal and retention

Removing a recipient record leaves their completed files in the destination and request ledger. An owner may manage those files from **Files**; normal owner deletion is a soft delete into **Deleted** and does not decrement the request's upload count.

The public uploader's own remove control is different. When the same recipient token or visitor cookie withdraws a received item from the still-active page, Dosya permanently purges that file, decrements the request count and frees storage. There is no Trash recovery for that withdrawal.

## Troubleshooting

**No invitation arrived.** Confirm the address and check junk folders. If the recipient previously unsubscribed from Dosya invitations, they can open the unsubscribe page from an earlier message and select **Undo, and start receiving them again**, then you can resend. When the timestamp advances but repeated messages never arrive, stop resending and contact [Dosya support](https://dosya.dev/contact/) with the request title, recipient address, attempt time and time zone; do not include the request URL or password. Share the base link manually only when losing recipient attribution is acceptable.

**The address is already a recipient.** Find the existing lower-cased row and resend it. Dosya will not add a case variant.

**The row stays Pending after a claimed upload.** Confirm the uploader used that exact recipient URL and reached a received receipt. Upload through the base URL, an interrupted transfer or another recipient's URL will not stamp the expected address.

**A removed recipient can still open the page.** This is expected for a bearer request. Add or change the password, or revoke the entire request for immediate closure.

**The invitation shows the wrong sender or request.** Tell the uploader to stop and verify through an established channel before selecting files.

## Expected result

The owner can see each recorded address, last send timestamp and first completed-upload state. The request detail lists the actual files and associated uploader labels, while the invited person can submit without creating a Dosya account.

## Related guides

- [Create a client file request](/sharing/file-request)
- [Protect a request with a password](/sharing/request-password)
- [Verify a request invitation before upload](/sharing/request-uploader-confirm-invite)
- [Upload through a file request](/sharing/request-upload)
- [Edit or revoke a file request](/sharing/manage-file-request)
