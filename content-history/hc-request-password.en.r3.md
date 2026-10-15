---
{
  "articleId": "hc-request-password",
  "locale": "en",
  "revision": 3,
  "title": "Password protect a file request",
  "summary": "Add, replace or remove a file-request password and understand unlock attempts, browser grants, invited-recipient tracking and immediate shutdown.",
  "category": "sharing",
  "articleSlug": "request-password",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/file-requests.tsx, apps/web/src/components/file-request-edit-dialog.tsx, src/pages/upload-request/[token].astro, apps/api/src/pages/api/file-requests/create.ts, apps/api/src/pages/api/file-requests/[id].ts, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/unlock.ts, apps/api/src/lib/upload-request/access.ts, apps/api/src/lib/auth.ts, apps/api/src/lib/rate-limit.ts and focused creation, permission, unlock and repository tests. Confirmed trimming and eight-character minimum, distinct By-email and By-link completion results, create/edit/remove behavior, upload permission requirement for access-rule changes, five attempts per token and IP in 15 minutes, 30-minute signed request grant, recipient-token independence and revoke semantics. Existing settings and unlock captures remain accurate.",
  "related": [
    "hc-file-request",
    "hc-request-manage",
    "hc-request-recipients",
    "hc-request-upload",
    "hc-request-troubleshoot"
  ],
  "keywords": [
    "file request password",
    "password protected upload request",
    "change request password",
    "remove request password",
    "request unlock failed",
    "secure client upload",
    "30 minute upload access"
  ]
}
---
A file-request password hides the message, acceptance rules and upload controls until the visitor unlocks that specific request. It is shared knowledge, separate from every Dosya account password, and it does not identify the person who entered it.

Use an emailed recipient invitation when you need delivery and submission attribution. Use a password when possession of the request URL alone should not reveal the collection instructions or allow an upload.

## Steps: protect a new request

1. Open **File requests** and choose **New request**.
2. Select **By email** for tracked invitations or **By link** for a URL you will deliver yourself.
3. Complete the title, message, expiry and **Upload destination**.
4. Enter the secret under **Password (opt)**. The web app trims leading and trailing spaces; the remaining value must contain at least eight characters.
5. Set any **Advanced options**.
6. **Finish the selected delivery mode.** For **By email**, select **Send request**; the dialog closes and displays **Request sent**. Find the created row in **File requests** and select **Copy link** when you need the URL for testing. For **By link**, select **Generate link**, copy the inline **Request link**, then select **Done**.
7. **Open a private test.** Paste the copied request URL into a fresh private browser window.
8. **Inspect the locked request.** Confirm it names the requester when available, says where files will go and withholds the message and rules.
9. Enter the request password in **Password**, complete human verification when shown and select **Unlock**.

The creator must be a workspace member whose role includes upload permission because a file request delegates that upload capability to visitors. A member confined to a folder subtree can target only that scope. A full-locked destination or ancestor cannot receive a public request, even when the creator personally unlocked it.

<figure class="help-screenshot">
  <a href="/screenshots/request-password-settings-2026-10-12.webp"><img src="/screenshots/request-password-settings-2026-10-12.webp" alt="Request files dialog for Brand asset collection with a masked password, seven-day expiry and separate uploader folders enabled." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>Enter the request-only password before selecting <strong>Send request</strong> or <strong>Generate link</strong>. <a href="/screenshots/request-password-settings-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/request-password-unlock-2026-10-12.webp"><img src="/screenshots/request-password-unlock-2026-10-12.webp" alt="Locked public file-request page with a Password field, Unlock button and the destination workspace named below." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The pre-unlock page reveals destination context but keeps the request message, file rules and picker behind the password gate. <a href="/screenshots/request-password-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Change the password on an active request

1. Return to **File requests** and choose **Edit** for the correct row.
2. Leave **Remove password** clear.
3. **Set the replacement.** Enter at least eight characters after surrounding spaces are removed.
4. Select **Save changes** and wait for **Request updated — Your changes have been saved.**
5. **Test the request URL.** In a new private window, try the old value and then the replacement.
6. **Deliver the new request password.** Use a trusted channel and avoid placing it in the same public message as the URL.

Changing access rules requires upload permission in addition to authority to manage the request. A role with **view_all_shares** can manage another creator's request; **view_own_shares** applies to the member's own request. A creator who later loses upload permission can still change wording or revoke when their role allows managing the request, but cannot change its password, expiry, destination or upload limits.

The stored password is hashed and the interface does not reveal it. If the original is lost, set a replacement.

## Remove password protection

Open **Edit**, select **Remove password**, then save. Leaving the password input blank without selecting that checkbox keeps the current password.

Removing protection makes the still-active URL usable by anyone who holds it, subject to expiry, file limits, destination state and workspace storage. Test the effect in a private window before distributing the link again.

## Unlock limits and browser timing

The public unlock endpoint accepts five attempts per combination of request token and client IP during a 15-minute window. When the limit is reached, the page displays **Too many attempts. Unlocking is paused for 15 minutes - ask the sender for the password rather than guessing.**

A correct password creates a signed browser grant for 30 minutes. The grant belongs to that request token and cannot be reused on a different request or sharing link.

If the grant expires while files remain, the page shows **Your access timed out**. Enter the current password and choose **Unlock and continue**. Files already recorded remain in the receipt, and the remaining in-memory queue carries on.

Changing or removing the password does not invalidate an already issued grant. A browser that unlocked before the edit can continue until its 30-minute grant ends. Revoke the request when access must stop immediately.

## Passwords and named invitations are separate

**By email** invitations contain a recipient-specific URL parameter. Opening it associates the invited address with completed submissions; the request flow does not send a one-time inbox code or prove control of that email account. The password gate still applies when the request has one.

Anyone who receives both a recipient URL and the password can upload under that invited address. Anyone with the base URL and password can upload without recipient attribution. For this reason:

- send each recipient their own generated invitation;
- treat **Uploaded** as token attribution, not verified identity;
- avoid forwarding recipient-specific URLs;
- use the request's receipt table to confirm actual filenames and counts.

This differs from a restricted file-sharing link, whose recipients verify an emailed six-digit code. File-request invitations deliberately do not use that code ceremony.

## Immediate shutdown and irreversible effects

Choose **Revoke** when the URL or password was exposed and waiting for a browser grant to expire is unacceptable. Revocation is permanent for that request token: the public page changes to **This request was closed**, and the owner must create a new request to collect more files.

Revoking does not delete completed submissions. They remain in the destination and request ledger. An owner can soft-delete a received file into **Deleted**. The original public uploader's remove control has a different result: it permanently withdraws that submission, frees its storage, returns its request slot and provides no Trash recovery.

## Troubleshooting

**Password must be at least 8 characters.** Count the trimmed value. Add characters rather than relying on spaces at either end.

**Incorrect password.** Confirm the current secret and exact letter case with the requester. Verify that the URL belongs to the intended request.

**The password was changed but an open browser still uploads.** That browser is using an earlier 30-minute grant. Revoke the request for immediate cutoff.

**The locked page shows an unexpected requester or workspace.** Stop before entering the password. Confirm the URL with the sender through a known channel.

**The request unlocks but rejects the file.** Password access does not bypass extension, size, count, destination or storage rules. Follow the message under the filename.

## Expected result

A visitor without a current grant sees the locked page. Correct entry reveals the message, upload terms and picker for up to 30 minutes in that browser. Incorrect entry reveals none of those request details.

## Related guides

- [Create a client file upload request](/sharing/file-request)
- [Edit or close a file request](/sharing/manage-file-request)
- [Invite and track file-request uploaders](/sharing/request-recipients)
- [Complete a file-request upload](/sharing/request-upload)
- [Recover a rejected or incomplete request upload](/sharing/troubleshoot-file-request)
