---
{
  "articleId": "hc-password-link",
  "locale": "en",
  "revision": 1,
  "title": "Adding a password to a sharing link",
  "summary": "Set a password before generating an ordinary share link and test the recipient's password prompt.",
  "category": "sharing",
  "articleSlug": "password-link",
  "status": "published",
  "lastReviewed": "2026-10-09",
  "verification": "Verified with the current local API/R2/D1 product harness on 2026-10-09 (upload, share/password unlock and anonymous file request suites: 232 passed, 1 unrelated skipped). English UI controls reviewed against current source. Production/browser workflow and screenshots still need editorial review.",
  "related": [
    "hc-create-link",
    "hc-upload-files"
  ],
  "keywords": [
    "password",
    "protected",
    "share",
    "security",
    "advanced options"
  ]
}
---
Open **Share → By link → Advanced options**, enter a password of at least eight characters, then select **Generate link**. Send the password through a different channel from the URL where practical.

## Before you start

- Your file must be uploaded and available in **Files**.
- You need permission to share it and the workspace must permit the chosen settings.
- Choose a strong, distinct password. Avoid reusing your Dosya account password.
- This guide sets a password when creating a new ordinary share link. It does not promise that changing one link will protect other URLs you have already distributed.

## Steps

1. Find the uploaded file in **Files** and open **Share**.
2. Select **By link** and review the link expiry.
3. Expand **Advanced options**.
4. Enter your chosen password in **Password (optional)**. The current interface requires at least eight characters. Leading and trailing whitespace is trimmed; do not depend on it being part of the secret.
5. Select **Generate link**. Correct any validation message before continuing.
6. Copy the generated URL. Open it in a private browser window where the share has not already been unlocked.
7. Confirm that the page asks for a password. Try the intended password and verify that the correct file becomes available.
8. Send the URL and password to the recipient. If an earlier unprotected link exists, review it in **Shared** and revoke it if it should no longer provide access.

## Expected result

A new recipient must pass the share page's password check before accessing the protected link. Successful access may remain unlocked for that browser session, so a normal window you used earlier is not a reliable test of a new recipient's experience.

## Limitations

- This is an access password for an ordinary share link. It does not turn the file into end-to-end encrypted Vault content.
- Anyone who has both the URL and its password may share them onward. A password alone does not identify a recipient.
- Other share links to the same file retain their own settings. Protecting one URL does not protect all previous URLs.
- Expiry, revocation and workspace policy still apply to a password-protected link.
- Repeated incorrect attempts can be throttled. Do not repeatedly guess passwords.

## Troubleshooting

If the dialog rejects the password, use at least eight characters after trimming surrounding whitespace. If a recipient's password is rejected, confirm spelling and letter case through a private channel. Use a private browser window to verify whether the URL you sent is the protected one.

If you no longer know the password, create a replacement link with a new password and revoke the previous URL if appropriate. Do not post the password or the private URL in a help comment; use [private support](https://app.dosya.dev/support) for account-specific assistance.

## Related guides

- [Creating a sharing link](/sharing/create-link)
- [Uploading files and folders](/uploading/files-and-folders)
- [Password-protected file sharing](https://dosya.dev/blog/password-protected-file-sharing) explains when password protection is useful.
- [Vault encryption](https://dosya.dev/vault/) explains the separate encryption model.
