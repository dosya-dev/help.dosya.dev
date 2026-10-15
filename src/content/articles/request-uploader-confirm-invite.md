---
{
  "articleId": "hc-request-uploader-confirm-invite",
  "locale": "en",
  "revision": 3,
  "title": "Verify a file-request invitation before uploading",
  "summary": "Confirm the sender, workspace, recipient address, request rules and final receipt before releasing files through a client upload invitation.",
  "category": "sharing",
  "articleSlug": "request-uploader-confirm-invite",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against src/pages/upload-request/[token].astro, apps/api/src/lib/email/file-request-templates.ts, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/unlock.ts, apps/api/src/pages/api/upload-request/[token]/files.ts, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/multipart/[sessionId]/complete.ts, apps/api/src/lib/upload-request/visitor.ts, apps/api/src/lib/upload-request/uploader-folder.ts and focused public-request tests. Confirmed what locked and open pages disclose, recipient-token attribution without inbox verification, visible rules and reference, stage-versus-receipt behavior, prior-upload recognition and permanent original-uploader withdrawal. Existing staged-transfer capture remains accurate.",
  "related": [
    "hc-request-upload",
    "hc-request-password",
    "hc-request-troubleshoot",
    "hc-request-recipients",
    "hc-named-recipients"
  ],
  "keywords": [
    "verify file request invitation",
    "safe client file upload",
    "confirm upload request sender",
    "recipient upload link",
    "secure file collection",
    "check file request rules",
    "upload receipt"
  ]
}
---
A file-request invitation lets you send files into another person's Dosya workspace without joining it. Confirm the sender and request context before choosing files. The recipient-specific URL is a bearer credential: it can label submissions with the invited address, but it does not prove who opened the email.

## Steps: check the invitation message

Use an earlier conversation or another established channel to confirm that the person or organization expected these files. In the invitation, compare:

- the sender name;
- the request title and message;
- the stated expiry, when present;
- the destination domain in the upload link.

The upload page should be on dosya.dev. A copied page, shortened URL or lookalike domain does not gain trust because it uses Dosya branding. Do not enter a Dosya account password, API key, recovery key or payment details into a file-request page.

If the request was unexpected, contact the sender using a known address or phone number rather than replying only to the new message.

## Verify the public page before selecting files

1. Open the full invitation URL in a current browser.
2. Read the workspace name at the top and **Requested by** line when a requester name is available.
3. **Match the request purpose.** Compare the visible title and message with the work you agreed to provide.
4. Check **Sending as**. When the invitation is recipient-specific, it should show your intended email address and the page hides the free-text email field.
5. Review **Accepts**, **Per file** and **Slots** when those request rules are present.
6. Note **Your folder** and **Your code** when the requester enabled separate uploader folders.
7. Keep the displayed **Reference** available if you need to describe the request to the sender.
8. **Read the storage destination.** Files go to the named workspace's Dosya storage and only its members can open them through the workspace.

The recipient value in the URL resolves directly to the recorded address. This flow does not email a six-digit verification code. A forwarded invitation can therefore show someone else's address and attribute the next completed upload to it. Ask for your own invitation when **Sending as** is wrong.

## Unlock a protected request safely

A password-protected request initially shows limited context: the title, requester when available and the destination workspace. It withholds the message, file rules and upload picker.

Obtain the request password from the sender through the agreed channel. It is not your Dosya account password. Enter it in **Password**, finish human verification if shown and choose **Unlock**.

Five attempts are allowed for the request token and client IP within 15 minutes. Successful unlock creates 30 minutes of browser access. If **Your access timed out** appears during transfer, enter the current secret and select **Unlock and continue**.

After unlocking, repeat the sender, recipient and file-rule checks because those details were hidden before entry.

## Inspect the files in This transfer

Select **Browse files**, **Choose a folder**, or the available photo/camera action on a touch device. Selection only stages local files in the browser.

Before choosing the final upload action:

1. Read every filename under **This transfer**.
2. **Check transfer sizes.** Compare the displayed byte total and each file size with what you selected.
3. **Inspect folder paths.** Expand the visual path for files selected from a folder.
4. **Remove unintended files.** Delete anything unrelated or confidential from the staged transfer.
5. **Resolve file rejections.** Read and correct every red message before upload.
6. Complete **Your name (optional)** only when the label will help the recipient; it is free text and is not verified.

The owner has not received a staged item. Transfer begins only after you choose **Upload N files**.

<figure class="help-screenshot">
  <a href="/screenshots/request-staged-2026-10-10.webp"><img src="/screenshots/request-staged-2026-10-10.webp" alt="Public file-request page showing an earlier received item and one newly selected sample under This transfer before upload." width="840" height="920" loading="lazy" decoding="async" /></a>
  <figcaption>Review the newly staged filename under <strong>This transfer</strong>; the earlier dated receipt is already stored, while the staged line has not been sent. <a href="/screenshots/request-staged-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

For an unfamiliar collection, a small non-confidential sample can confirm that the request accepts the expected format. Do not use identity documents, passwords or production secrets as a test.

## Confirm what Dosya received

During transfer, each line shows bytes and percentage. Completion moves the file into the dated ledger and produces a stamp stating that the requester has the file or files. The stamp includes total received bytes, local date and time, and the request reference.

That receipt means Dosya recorded the file for the request. It does not mean the requester opened, approved or retained the contents.

When you return with the same recipient URL, Dosya can show earlier files associated with that invited address on another device. An anonymous base-link visitor is instead recognized through a browser cookie; changing browser can lose that anonymous history.

Do not resend a file merely because an email acknowledgement did not arrive. Check the page receipt first or ask the owner to inspect the request detail.

## Withdraw a mistaken submission

While the request remains active, the remove control beside a prior **Received** item lets the original uploader withdraw it. Dosya authorizes this through the recipient token and/or the browser visitor cookie that made the upload.

This removal is permanent. It purges the file, versions and associated share links, frees measured workspace storage and returns the request slot. It does not move the item to **Deleted**, so the workspace owner cannot restore it from Trash.

The control cannot withdraw another uploader's file. It also stops working once the request expires or is revoked. Contact the owner immediately when a closed request contains a mistaken submission.

An owner's later deletion from **Files** behaves differently: it is a recoverable soft delete while retained, keeps using workspace storage and does not return a file-request slot.

## Stop and verify independently when

- The request arrived without prior context.
- The workspace, requester, title or purpose differs from the conversation.
- **Sending as** names another address.
- The URL is incomplete, shortened or outside the expected Dosya domain.
- The visible rules require a broader file type or more data than agreed.
- The page asks for account credentials rather than a request-only password.
- The request displays **No request at this link**, **This request has expired** or **This request was closed**.

For an expired request, the owner may set a future deadline. A revoked request cannot be reactivated; the owner must issue another token.

## Troubleshooting

**The invitation URL opens but my address is absent.** You may have the base link or an invalid recipient value. Ask the owner to resend your recipient-specific invitation when attribution matters.

**The page displays another person's email.** Close it without uploading. A forwarded recipient link would record your files under that address.

**A selected file is rejected.** Follow its exact extension, size, empty-file or slot message. Do not disguise the content by renaming its suffix.

**The connection stopped after progress began.** Keep the page open. Large-file **Retry** can reuse the same session on that page; a refresh loses the selected browser File objects. Check the dated receipt before starting over.

**You cannot confirm the sender.** Leave the page and contact the organization through an official channel you already trust.

## Expected result

The request context matches your agreement, **Sending as** shows your intended address when personalized, every selected item satisfies the visible terms, and the final dated ledger names exactly what Dosya received.

## Related guides

- [Upload files through a file request](/sharing/request-upload)
- [Unlock a password-protected request](/sharing/request-password)
- [Fix a rejected or incomplete request upload](/sharing/troubleshoot-file-request)
- [Invite and track uploaders](/sharing/request-recipients)
- [Verify a named file-sharing invitation](/sharing/named-recipients)
