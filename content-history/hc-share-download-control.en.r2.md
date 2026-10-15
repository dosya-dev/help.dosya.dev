---
{"articleId":"hc-share-download-control","locale":"en","revision":2,"title":"Choose download access for a sharing link","summary":"Choose between normal download access, View only and a download-count limit when creating a Dosya sharing link, then test the recipient result.","category":"sharing","articleSlug":"share-download-control","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web Share dialog, View only and download-limit controls, Shared list, analytics detail rail, recipient download enforcement and share-link creation API against local product source and relevant tests on 2026-10-14. Existing web links cannot be edited in place; changing their policy requires revocation and replacement. The screenshot uses an isolated sample file.","related":["hc-create-link","hc-share-disable-downloads","hc-share-preflight-private-window"],"keywords":["file sharing download control","view only sharing link","limit file downloads","share files without download","secure cloud file sharing"]}
---
Dosya lets you choose how a recipient can receive a shared file or folder. Set the download policy before generating the link, then test the finished recipient page. The current web app does not edit an active link's download policy in place, so changing an existing link requires a new URL.

## Before you start

- Confirm the active workspace and the exact file, folder or bundle you intend to share.
- Decide whether the recipient needs the original file, preview access, or a limited number of downloads.
- Use non-confidential test content when you are validating a new delivery policy.
- Keep link passwords and unpublished sharing URLs out of screenshots and support messages.

## Choose the right control

| Setting | Recipient behavior | Use it when |
| --- | --- | --- |
| Normal link | The recipient can use the available download controls. | The recipient needs an original local copy. |
| **View only** | The recipient can open supported content without a download button. Images use a reduced-size preview instead of the original. | Review is enough and you do not want Dosya to offer the original as a download. |
| **Download limit** | Downloads work until the link reaches the whole-number limit you set. | A small, known number of successful downloads should end delivery. |

You can combine a download limit with other creation settings. Do not combine **View only** with an expectation that the recipient will download the original.

## Steps: set download access on a new link

1. In **Files**, confirm the active workspace and select the exact file, folder or bundle.
2. Choose **Share** and select **By link** or **By email**.
3. Set the expiry and any named recipients required for this delivery.
4. Open **Advanced options**.
5. For preview-only access, select **View only**. The explanation below the checkbox should state that there is no download button and that visible content can still be captured.
6. To allow downloads but stop after a fixed count, leave **View only** off and enter a whole number of at least 1 in **Download limit**. Leave the field empty for no configured count limit.
7. Review the password, metadata, title and message settings, then generate or send the link.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp"><img src="/screenshots/share-password-2026-10-10.webp" alt="Dosya Share dialog with Advanced options expanded, showing Password and the View only checkbox before link generation." width="454" height="748" loading="lazy" decoding="async" /></a>
  <figcaption>Expand <strong>Advanced options</strong> before generating the link. Select <strong>View only</strong> when Dosya should omit the recipient download control. <a href="/screenshots/share-password-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Test the recipient experience

1. Open the finished link in a private browser window where you are not signed in as the owner.
2. Complete any password or named-recipient verification.
3. For **View only**, confirm the item opens and no download button appears.
4. For a limited-download link, use a harmless test only when you can afford to consume one count. Confirm the download completes and then review the link's analytics.
5. Return to **Shared**, open the exact link, and check the right-side **Link controls** panel. It should show **Downloads: View only** or **Downloads: Allowed** as appropriate.

## Expected result

The finished sharing link opens for the intended recipient and follows the policy selected at creation. A view-only link omits the download control, while an allowed link serves the file until any configured download limit is reached. The link detail page reports the matching download status.

## Change an existing link

The web app records the download policy when it creates the link. To change an active link:

1. Open **Shared -> By me** and identify the existing link by resource, creation time and URL.
2. Record the other controls you must preserve, including recipients, password, expiry, metadata removal, download limit and title.
3. Revoke the old link.
4. Create a replacement from the original item with the new download policy and the required controls.
5. Test both URLs. The old URL must report that it is unavailable or revoked; the replacement must show the intended recipient behavior.
6. Send the new URL to recipients and tell them the previous one was withdrawn.

## Limits and important details

- **View only** removes supported Dosya download paths. It cannot prevent screenshots, photography, screen recording or manual copying of visible information.
- A download limit controls successful delivery attempts through the link. Your own recipient-side test can consume part of the limit.
- Browser previews and file-type support vary. If Dosya cannot preview a format, a view-only link may provide less utility than expected.
- Revoking and replacing a link gives it a new URL. Bookmarks and messages containing the old URL do not update automatically.
- Workspace policy, file locks, expiry, recipient restrictions and plan limits can impose additional controls.

## Troubleshooting

**View only is missing.** Confirm that you are creating a new link in the current web app, then expand **Advanced options**. Check your role and workspace sharing policy if the control remains unavailable.

**The recipient still sees Download.** Verify that they opened the replacement URL rather than an earlier link. Open the link from **Shared** and confirm its **Downloads** status.

**The download stopped sooner than expected.** Check the configured limit and link analytics. Owner testing or repeated recipient activity may have used the available count.

**The file cannot be previewed.** Create a harmless test link for the same format. If preview is unsupported, choose a delivery method that matches the recipient's need without claiming view-only review will work.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Turn downloads off for an existing link](/sharing/share-disable-downloads)
- [Test a sharing link in a private window](/sharing/share-preflight-private-window)
