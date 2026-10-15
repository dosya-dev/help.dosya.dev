---
{"articleId":"hc-share-disable-downloads","locale":"en","revision":2,"title":"Turn downloads off for a sharing link","summary":"Replace an existing download-enabled link with a view-only link, verify the old URL is revoked, and test the new recipient experience.","category":"sharing","articleSlug":"share-disable-downloads","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web Share dialog, Shared list, analytics controls, recipient view-only behavior, and share-link API rules against local product source and relevant tests on 2026-10-14. The current web app sets View only when creating a link; changing an existing link requires revoking it and generating a replacement. The screenshot uses an isolated sample file.","related":["hc-create-link","hc-revoke-link","hc-share-preflight-private-window"],"keywords":["disable share link downloads","view only file sharing","share files without download","secure file sharing link","replace sharing link"]}
---
The Dosya web app sets download access when a sharing link is created. To turn downloads off for a link that is already active, revoke the old link and generate a replacement with **View only** selected. Recipients must receive the new URL.

## Before you start

- Copy the name of the file, folder or bundle attached to the current link.
- Tell active recipients that you will replace the URL. Revoking the old link removes access immediately.
- Confirm that recipients can use Dosya's preview for the shared file type. View-only links remove the download control, but they do not make screen content impossible to copy.
- Keep the old and new URLs out of screenshots, tickets and public messages.

## Steps: replace the link with a view-only link

1. Open **Shared** and stay on **By me**.
2. Find the active link for the intended item. Open its details and confirm the **Downloads** control currently says **Allowed**.
3. Return to the Shared list, select **Revoke** for that link, read the warning, and confirm. The old URL stops working immediately and cannot be restored.
4. Open **Files**, find the same file or folder, and choose its sharing action.
5. Select **By email** if access must stay limited to named recipients; otherwise select **By link**. Choose the required expiry and expand **Advanced options**.
6. Select **View only**. The explanation should say that people can open the item with no download button and that images use a reduced-size preview.
7. Reapply any other controls the previous link needed, including a password, recipient addresses, metadata removal, expiry or title. These settings do not transfer from the revoked URL automatically.
8. Select **Generate link**, copy the new URL, and open it in a private browser window.
9. Confirm the item opens but no download button is available. Send the new URL to recipients only after this check passes.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp">
    <img src="/screenshots/share-password-2026-10-10.webp" alt="Dosya Share dialog with Advanced options expanded and the View only checkbox visible below Password." width="454" height="748" loading="lazy" decoding="async" />
  </a>
  <figcaption>Expand <strong>Advanced options</strong> and select <strong>View only</strong> before generating the replacement link. <a href="/screenshots/share-password-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The old URL reports that the link is unavailable or revoked. The replacement URL opens the shared item for preview and does not show a download control. The new link appears in **Shared → By me** with the view-only indicator, and its detail page lists **Downloads: View only**.

## Limits and important details

- View-only access reduces casual downloading through the share page. Anything visible on a screen can still be photographed, captured or copied by a recipient.
- A view-only image uses a reduced-size preview instead of the stored original. Other preview behavior depends on the file type.
- Revoking a link changes its URL. Bookmarks, emails and messages containing the previous URL are not updated automatically.
- A password and named-recipient access solve different problems. A password can be forwarded; named recipients must verify an invited email address.
- Workspace policy or your role may prevent link creation or require a password and maximum expiry.

## Troubleshooting

**View only is missing.** Confirm that you are creating a new share from the current web app and expand **Advanced options**. If the control remains unavailable, check your role and workspace sharing policy.

**The recipient still sees a download button.** Confirm they opened the replacement URL rather than the revoked one. Open the exact new URL in a fresh private window and inspect **Shared → By me** for the view-only icon.

**The file cannot be previewed.** View-only sharing depends on a usable browser preview. Use a supported format, or decide whether a normal download-enabled link is appropriate for this recipient.

**The old link still opens in your browser.** Test it in a private window so a previous session does not confuse the result. Then confirm the old row is marked **Revoked** in Shared.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Revoke a sharing link](/sharing/revoke-link)
- [Preflight a sharing link in a private window](/sharing/share-preflight-private-window)
