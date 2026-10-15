---
{"articleId":"hc-first-upload-share","locale":"en","revision":1,"title":"Complete your first upload and sharing task","summary":"Upload a harmless sample file, confirm its completed cloud copy, create a suitable sharing link, and test the recipient experience before sending it.","category":"uploading","articleSlug":"first-upload-and-share","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed this start-to-finish journey against the current locally verified upload and sharing flows on 2026-10-12. Screenshots come from isolated completed-upload and generated-link checks.","related":["hc-upload-files","hc-create-link","hc-password-link","hc-unavailable-link"],"keywords":["first upload","share first file","upload and share","test share link","recipient view","getting started"]}
---
This quick journey takes one harmless sample file from your device to a tested recipient link. It helps confirm your workspace, upload permission and sharing setup before you send important material.

## Before you start

- Use a small, non-confidential sample file you can recognize and open.
- Select the intended workspace and check its name above the sidebar.
- Make sure your role permits uploads and share-link creation.
- Decide whether the recipient should download the file, whether the link needs a password and when it should expire.
- Use a private browser window for the recipient test so your signed-in session does not hide access problems.

## Steps: upload and confirm the sample

1. Open **Uploads**.
2. Under **Upload options**, confirm the destination folder. **Root (top level)** means the workspace's top level.
3. Select **browse for files**, choose the sample and keep the browser tab open.
4. Wait until the upload row says **Done**.
5. Select **View file** or **Go to location**.
6. In **Files**, confirm the name, size and destination. Open the sample if its format supports a preview.

<figure class="help-screenshot"><a href="/screenshots/upload-completed-2026-10-10.webp"><img src="/screenshots/upload-completed-2026-10-10.webp" alt="Dosya upload queue showing a sample file in Done state with a View file action for confirming the completed cloud copy." width="1160" height="460" loading="lazy" decoding="async" /></a><figcaption>Wait for **Done**, then use **View file** or **Go to location** to confirm the stored result before sharing it. <a href="/screenshots/upload-completed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: create and test the sharing link

1. From the confirmed file, choose **Share**, then **By link**.
2. Review **Expires in** and open **Advanced options** if you need a password, view-only behavior or a download limit.
3. Select **Generate link**.
4. Copy the entire URL shown under **Share link created**.
5. Open a private browser window and paste the URL.
6. Confirm that the recipient page shows the intended file and enforces the password or other access choice.
7. If the test succeeds, send the link. Share a password separately when practical.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Dosya Share link created dialog showing the generated recipient URL, copy control and Done button after link creation." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>Copy the complete generated URL, test it in a signed-out private window, then select **Done** after saving the link. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The sample appears in **Files** in the intended workspace. The tested URL opens the correct recipient page without relying on your signed-in session, and the configured password, expiry, view-only choice or download limit applies.

## Limits and safety checks

- **Done** confirms the upload; selecting a file or seeing partial progress does not.
- A public link can be forwarded. Apply only the access settings suitable for that file.
- Your own test download can consume a configured download allowance.
- A share-link password protects that recipient route. It does not convert ordinary storage into Vault encryption.
- Link availability still depends on expiry, revocation, download limits, the underlying file and workspace policies.

## Troubleshooting

**The upload never reaches Done.** Read the queue error and check connectivity, available storage, destination access and workspace policies. Retry only the failed item when offered.

**Share is unavailable.** Confirm the upload completed, the file is in the active workspace and your role permits share-link creation. A workspace policy can also disable links.

**The private-window test asks for unexpected access.** Return to the link settings and verify whether you created a public link, named-recipient delivery or password-protected link.

**The link opens the wrong file.** Revoke that URL in **Shared**, return to the intended file and generate a replacement. Do not send the mistaken URL.

**The test works but the recipient cannot open it.** Copy the URL again, confirm it was not truncated and check its status and expiry in **Shared**. If password protected, verify that the recipient has the exact password through a separate channel.

## Related guides

- [Upload files and folders](/uploading/files-and-folders)
- [Create a sharing link](/sharing/create-link)
- [Add a password to a sharing link](/sharing/password-link)
- [Troubleshoot an unavailable sharing link](/sharing/unavailable-link)
