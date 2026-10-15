---
{
  "articleId": "hc-password-link",
  "locale": "en",
  "revision": 3,
  "title": "Password protect a file sharing link",
  "summary": "Create and test a password-protected file, folder or bundle link, including private-recipient verification, unlock limits and workspace policy errors.",
  "category": "sharing",
  "articleSlug": "password-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/components/share-modal.tsx, src/components/share/ShareShell.astro, apps/api/src/lib/share/create.ts, apps/api/src/lib/share/recipients.ts, apps/api/src/lib/auth.ts, apps/api/src/pages/api/share/[token]/unlock.ts, apps/api/src/pages/api/share/[token]/request-code.ts, apps/api/src/pages/api/share/[token]/verify-code.ts, apps/api/src/pages/api/files/[id]/share.ts, apps/api/src/pages/api/folders/[id]/share.ts and focused creation, unlock, recipient-code and access tests. Confirmed create-share permission, eight-character trimmed minimum, force-password and full-lock rules, five password attempts per token and IP in 15 minutes, separate restricted-recipient verification with 15-minute five-attempt codes, separate 30-minute recipient/password grants, and format-specific View-only image delivery. Existing web and recipient captures remain accurate.",
  "related": [
    "hc-create-link",
    "hc-share-change-password",
    "hc-named-recipients",
    "hc-revoke-link",
    "hc-share-preflight-private-window"
  ],
  "keywords": [
    "password protected file sharing",
    "secure share link password",
    "private file sharing link",
    "share password incorrect",
    "recipient verification code",
    "30 minute sharing access",
    "file sharing security"
  ]
}
---
Add the password before generating or sending a sharing link. Every link keeps its own settings, so protecting a new URL does not change older URLs to the same file or folder.

The secret controls access through that public token. It does not encrypt the stored item, identify the recipient, change workspace membership or recall a copy someone already downloaded.

## Steps: create a protected public link

1. Open **Files** and locate the file, folder or selected bundle.
2. Open **Share**, then select **By link**.
3. Review **Expires in**. Expiry and password are independent controls.
4. Expand **Advanced options**.
5. Enter the delivery secret in **Password (optional)**. The placeholder reads **Min 8 characters**.
6. Choose any separate controls you need, such as **View only.**, **Remove photo metadata.** or **Download limit (optional)**.
7. Select **Generate link**.
8. Under **Share link created**, copy the URL and select **Done**.

Dosya trims whitespace around the password. A non-empty result shorter than eight characters returns **Password must be at least 8 characters**.

The member's role needs the **create_share_links** capability. Workspace policy can refuse creation with **Share links are disabled for this workspace**. A workspace configured to require passwords returns **This workspace requires a password on all share links** when the field is empty. A **full_lock** link also requires a password.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the full sharing-dialog password screenshot"><img src="/screenshots/share-password-2026-10-10.webp" width="454" height="748" loading="lazy" decoding="async" alt="Share dialog with Advanced options open, a masked Password field and Generate link ready to create the protected URL." /></a>
  <figcaption>Complete <strong>Password (optional)</strong> before selecting <strong>Generate link</strong>; the password belongs only to the URL being created. <a href="/screenshots/share-password-2026-10-10.webp" target="_blank" rel="noopener noreferrer">Open full-size screenshot</a>.</figcaption>
</figure>

## Test the first-time recipient experience

1. Open a new private browser window that has never visited this URL.
2. Paste the complete link. For a file, the locked page says **This file is password protected**.
3. Enter the delivery secret in **Password**.
4. Complete the human-verification control if it appears, then select **Unlock**.
5. Confirm the expected filename, folder or file collection appears.
6. Check that preview and download controls match the link settings. A test download can consume one use of a download-limited link.

Successful password entry creates a signed 30-minute browser grant for this link token. Refreshing can continue without another prompt while that grant remains valid. Test with a fresh private window whenever you need to reproduce a new recipient's view.

<figure class="help-screenshot">
  <a href="/screenshots/password-recipient-2026-10-10.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the full recipient password-prompt screenshot"><img src="/screenshots/password-recipient-2026-10-10.webp" width="660" height="600" loading="lazy" decoding="async" alt="Public file page stating This file is password protected, with the Password input and Unlock action marked." /></a>
  <figcaption>The recipient enters the link password and chooses <strong>Unlock</strong>; this is separate from signing in to a Dosya account. <a href="/screenshots/password-recipient-2026-10-10.webp" target="_blank" rel="noopener noreferrer">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/password-unlocked-2026-10-10.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the full unlocked-file header screenshot"><img src="/screenshots/password-unlocked-2026-10-10.webp" width="400" height="80" loading="lazy" decoding="async" alt="Unlocked public file page header showing project-notes.txt after the password succeeded." /></a>
  <figcaption>Verify the item name after unlocking so a copied password is not tested against the wrong sharing URL. <a href="/screenshots/password-unlocked-2026-10-10.webp" target="_blank" rel="noopener noreferrer">Open full-size screenshot</a>.</figcaption>
</figure>

## Understand password attempt limits

The password endpoint allows five attempts per sharing token and client IP during 15 minutes. It also maintains a consecutive-failure lock on the link, which protects against guesses distributed across IP addresses. Errors include **Incorrect password** and **Too many attempts, try again later.**

Stop guessing when the secret fails. Confirm the URL and password with the sender through a known private channel. Repeated attempts can block the correct recipient until the lockout ends or the owner rotates the password through the API.

The password is case sensitive. Leading and trailing spaces are removed before verification.

## Combine a password with named-recipient access

On **Share → By email**, the sender can select **Only these people can open it.** That creates a restricted link. Holding the URL and password is then insufficient:

1. The recipient enters the address that received the share.
2. **Send code** returns the same generic message whether or not the address is invited, preventing recipient-list discovery.
3. An invited address receives a six-digit code that expires after 15 minutes.
4. That code permits five incorrect guesses; after expiry or five failures, request a new one.
5. Successful verification creates a separate 30-minute recipient grant.
6. When the link also has a password, the page then asks for the password and creates its own 30-minute password grant.

The two grants use different cookies and signed subjects. Email verification cannot substitute for the password, and a password grant cannot bypass the named-recipient gate.

Public file requests use a different invitation model. Their recipient URL associates an address without an emailed verification code.

## Deliver and retain the access details safely

Send the tested URL and exact password through separate trusted channels when practical. Anyone who obtains both can forward them unless the link is also restricted to named recipients.

Open **Shared → By me** after delivery and verify the target, password indicator, expiry, access mode and download setting. Review older links to the same item. Revoke any URL that should no longer work; revocation ends that token immediately and cannot be undone.

Password protection does not remove a recipient's saved download. **View only.** removes ordinary download controls and serves eligible content inline. JPEG, PNG and HEIC images are re-encoded as WebP derivatives with the longest edge capped at 1,600 px. WebP, AVIF, GIF, SVG, BMP and ICO can be served inline as their original bytes, so View only does not promise source-byte withholding for every previewable image. Visible content can still be captured.

## Change or remove the password later

The current web app does not edit an existing link's password. Web users revoke the old URL and create a replacement with the new secret. This gives immediate cutoff because the replacement uses another token.

The API can update a live link in place. New unlocks require the replacement password, while an already issued password grant can remain valid for the rest of its 30-minute life. An API update cannot remove the password when workspace policy requires one or the link uses full lock.

Follow [Change a sharing-link password](/sharing/share-change-password) for both workflows.

## Troubleshooting

**The password prompt is missing.** Use a new private window and confirm that you copied the protected URL rather than an older unprotected link.

**A correct password receives a private-link error.** Complete the named-recipient email verification first. The server evaluates the recipient gate before it checks the password.

**The link remains open after the password changed through the API.** The browser may hold a valid 30-minute grant. Revoke the link for immediate cutoff.

**The protected link is expired or revoked.** A password cannot reopen it. The sender must extend an editable live link or create a replacement after revocation.

**The page says the item is unavailable.** The shared target may have been deleted, moved behind a full lock or hidden from its creator. The owner must correct the target state or issue another link.

## Expected result

A first-time public recipient must supply the link password before Dosya reveals the shared content. A restricted recipient must first prove control of an invited inbox and then pass the password when both controls are enabled.

## Related guides

- [Create a secure file sharing link](/sharing/create-link)
- [Change a sharing-link password](/sharing/share-change-password)
- [Restrict a link to named recipients](/sharing/named-recipients)
- [Revoke a file sharing link](/sharing/revoke-link)
- [Test a link in a private browser](/sharing/share-preflight-private-window)
