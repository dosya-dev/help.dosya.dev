---
{
  "articleId": "hc-file-request",
  "locale": "en",
  "revision": 1,
  "title": "Receiving files from clients with a file request",
  "summary": "Create a request link, choose its destination and upload rules, and check that a client's files arrive in your workspace.",
  "category": "sharing",
  "articleSlug": "file-request",
  "status": "published",
  "lastReviewed": "2026-10-09",
  "verification": "Verified with the current local API/R2/D1 product harness on 2026-10-09 (upload, share/password unlock and anonymous file request suites: 232 passed, 1 unrelated skipped). English UI controls reviewed against current source. Production/browser workflow and screenshots still need editorial review.",
  "related": [
    "hc-upload-files",
    "hc-create-link"
  ],
  "keywords": [
    "client",
    "receive",
    "request",
    "upload link",
    "collect",
    "allowed extensions"
  ]
}
---
Open **File requests**, select **New request**, then create a **By link** request with a destination and any upload restrictions. Send that request URL to your client so they can upload without a Dosya account.

## Before you start

- Sign in to the workspace that should receive the files.
- You need permission to create a file request, and the receiving workspace needs enough storage.
- Decide on a destination folder, expiry, and any file type, size or count restrictions.
- A file request receives uploads. A sharing link lets someone access files you already have; use [Creating a sharing link](/sharing/create-link) for that task.

## Steps

1. Open **File requests** in the app and select **New request**.
2. In the **Request files** dialog, choose **By link**.
3. Choose the destination folder. Use a dedicated client folder if that helps you keep deliveries separate.
4. Add an optional **Title** and **Message** that explain what the client should send. Keep credentials and confidential account information out of the message.
5. Set the expiry. If needed, enter an optional **Password** of at least eight characters.
6. Review the restrictions, under **Advanced options**, including **Allowed extensions**, **Max file size (MB)** and **Max files**. Enter extensions in the format shown by the interface, such as `.pdf, .docx, .jpg`. Leave optional restrictions unset only when that is your intended policy.
7. Select **Generate link**. Copy the resulting URL from the dialog.
8. Open the request in a private browser window. Confirm its title, instructions and restrictions, then upload a small non-confidential test file that matches the rules.
9. Return to **File requests**, open the request, and check the arriving file. Also check **Files** in the destination folder before sending the link to the client.

## Expected result

Your client sees a public upload page and can submit permitted files without creating a Dosya account. Accepted uploads appear in the request and the receiving workspace's selected folder. A password or an expired/revoked request can prevent access.

## Limitations

- A request is constrained by its receiving workspace, storage allowance, expiry and configured restrictions. Do not promise that all file types or sizes will be accepted.
- The anonymous upload page does not establish the sender's identity merely because a name is entered.
- Ordinary file requests are separate from Vault's end-to-end encryption workflow.
- The **By email** tab is a separate delivery choice. This guide uses a copied link and does not require email delivery to work.

## Troubleshooting

If a client cannot upload, ask for the exact error and check the request's expiry, status, allowed extensions, file size and remaining count. Confirm that the workspace can accept more storage. A file with the wrong extension needs either a matching request policy or the appropriate original format; renaming its extension does not convert it.

If a file seems missing, check the request's detail page and the destination in the correct workspace. Wait for the client to finish uploading before expecting a completed file.

Use [private support](https://app.dosya.dev/support) for account or file-specific problems. Do not publish a confidential request URL or client file in comments.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders)
- [Creating a sharing link](/sharing/create-link)
- [Watch the existing file request tutorial](https://dosya.dev/tutorials/collect-files-with-a-file-request/)
- [Receiving files from clients](https://dosya.dev/blog/receive-files-from-clients) discusses broader collection workflows.
