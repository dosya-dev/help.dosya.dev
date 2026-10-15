---
{
  "articleId": "hc-create-link",
  "locale": "en",
  "revision": 2,
  "title": "Creating a sharing link",
  "summary": "Generate a link for an uploaded file, check its access settings, and copy the URL to send to your recipient.",
  "category": "sharing",
  "articleSlug": "create-link",
  "status": "published",
  "lastReviewed": "2026-10-09",
  "verification": "Verified with the current local API/R2/D1 product harness on 2026-10-09 (upload, share/password unlock and anonymous file request suites: 232 passed, 1 unrelated skipped). English UI controls reviewed against current source. Production/browser workflow and screenshots still need editorial review.",
  "related": [
    "hc-upload-files",
    "hc-password-link",
    "hc-file-request"
  ],
  "keywords": [
    "share",
    "sharing",
    "link",
    "copy",
    "send",
    "expiry"
  ]
}
---
In **Files**, open a file's **Share** action, choose **By link**, then select **Generate link**. Copy the resulting URL and send it to your recipient.

## Before you start

- Sign in, select the file's workspace, and wait for its upload to complete.
- You need permission to share that file. Workspace policy and locked or hidden items can restrict sharing.
- Decide who should have access and how long the link should work. Someone who receives an ordinary public link can forward it to someone else.

## Steps

1. Open **Files** and find your completed file.
2. Open **Share** from the file's menu or share control. The menu is also available by right-clicking on supported devices.
3. Select **By link** in the **Share** dialog.
4. Review the expiry shown in the dialog. The workspace may provide a default; choose an expiry that suits this delivery. Do not assume that a generated link lasts forever.
5. Open **Advanced options** if you need a password, view-only setting, or download limit. These options serve different purposes; a password requires the recipient to know a secret, while view-only changes the available download controls.
6. Select **Generate link**. Wait for **Share link created** and the resulting URL.
7. Use the copy control beside the displayed URL. If the browser blocks clipboard access, select and copy the displayed URL manually.
8. Test the URL in a private browser window before sending it. Check that the correct file appears and that any password or expiry works as intended.

## Expected result

The recipient can open the link's public page without creating a Dosya account, subject to the link's password, expiry and access settings. Your original file remains in your workspace.

## Limitations

- A public link is different from an email-restricted share. Use the app's **By email** workflow when that is the task you need; this guide covers **By link**.
- View-only access should not be treated as a guarantee that the recipient cannot capture content they can see.
- A link may stop working if it expires, is revoked, reaches a configured limit, or the underlying file is unavailable.
- An ordinary share link is not end-to-end encrypted Vault sharing. See [Vault security](https://dosya.dev/vault/) for the separate client-side encryption workflow.

## Troubleshooting

If **Generate link** fails, verify that the upload has finished and read the dialog's validation message. A custom expiry must be a valid future time. Ask the workspace owner about sharing policies if the app reports that sharing is forbidden.

If the recipient sees an unavailable link, check its expiry and status in **Shared**. Confirm that you copied the whole URL. For an intentionally revoked or expired link, create a new link with the intended settings instead of promising that the old one can be restored.

Use [private support](https://app.dosya.dev/support) for an account or file-specific access problem. Do not paste confidential share URLs into public comments.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders)
- [Adding a password to a sharing link](/sharing/password-link)
- [Receiving files with a file request](/sharing/file-request)
- [Watch the existing sharing tutorial](https://dosya.dev/tutorials/share-a-file-with-a-link/)
