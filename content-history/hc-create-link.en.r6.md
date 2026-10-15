---
{
  "articleId": "hc-create-link",
  "locale": "en",
  "revision": 6,
  "title": "Create a secure file sharing link",
  "summary": "Create and test a cloud file sharing URL with the right recipient access, password, expiry, download controls and workspace policy.",
  "category": "sharing",
  "articleSlug": "create-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/components/share-modal.tsx, apps/web/src/pages/shared.tsx, apps/web/src/pages/share-analytics.tsx, apps/api/src/pages/api/files/[id]/share.ts, apps/api/src/pages/api/files/share-bundle.ts, apps/api/src/lib/share/create.ts, apps/api/src/lib/share/expiry.ts, apps/api/src/lib/share/recipients.ts, apps/api/src/lib/share/downloads.ts, apps/api/src/lib/share/download-session.ts, apps/api/src/lib/share/egress.ts, apps/api/src/lib/share/lock-gate.ts, apps/api/src/lib/share/view-only-image.ts, apps/api/src/lib/share/view-only-image.unit.test.ts, public share routes and focused tests. Verified current labels, role and workspace gates, public versus restricted recipients, password/expiry/download limits and preview byte-session counting, format-specific View-only image delivery, Free-plan ceilings, configured locks versus personal unlocks, notification outcomes, separate link-result and email-send completion paths, immediate revocation and the current unsaved By-link title field. Existing creation and result captures were inspected and remain accurate.",
  "related": [
    "hc-password-link",
    "hc-named-recipients",
    "hc-share-disable-downloads",
    "hc-link-expiry",
    "hc-revoke-link",
    "hc-folder-link"
  ],
  "keywords": [
    "create secure file sharing link",
    "cloud file sharing URL",
    "password protected file link",
    "share file with expiry",
    "private recipient sharing",
    "view only file link"
  ]
}
---
In **Files**, choose **Share** on a completed file, select **By link** for a public URL or **By email** for named recipients, configure its access controls, then test the result privately before sending it.

## Before you start

- Verify the active workspace, filename and completed upload. A sharing URL points to the selected workspace item; it does not upload a replacement.
- Your role needs **create share links** permission. A folder-confined member may share only targets inside the assigned subtree.
- A hidden target appears unavailable to a member it is hidden from. A target or ancestor with configured **Full lock** cannot receive a public link, even if your current member session has a personal unlock grant.
- Decide whether the URL can be forwarded. **By link** is public to anyone holding it, subject to password, expiry and other controls. **By email** can restrict access to verified addresses.
- Keep sensitive URLs and passwords out of public tickets and screenshots.

## Steps

### Choose who can open the share

1. Open **Files**, locate the completed file, and select **Share** from its row/card menu or right-click menu.
2. Verify the target name under the **Share** heading.
3. Select the recipient path that matches this delivery:
   - **By link** displays **Anyone with the link can access this file.** It creates a bearer URL and sends no invitation.
   - **By email** accepts up to 50 distinct valid addresses. Leave **Only these people can open it.** selected for a private link. Each visitor must enter an invited address and a one-time code emailed to it.
4. For restricted email access, know the timing: the code lasts 15 minutes, permits five incorrect attempts, and a successful recipient grant lasts up to 30 minutes. Forwarding the URL alone does not add another address.

<figure class="help-screenshot">
  <a href="/screenshots/share-by-link-2026-10-10.webp">
    <img src="/screenshots/share-by-link-2026-10-10.webp" alt="Share dialog for project-notes.txt with By link selected, Expires in set to 7 days and Generate link ready." width="454" height="394" loading="lazy" decoding="async" />
  </a>
  <figcaption>Use <strong>By link</strong> for a public bearer URL, verify <strong>Expires in</strong>, and generate it only after confirming the displayed target. <a href="/screenshots/share-by-link-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Configure expiry and download behavior

1. Review **Expires in**. The web choices are **1 hour**, **24 hours**, **7 days**, **30 days**, **90 days**, **Custom date…** and **Never**.
2. A custom timestamp must be at least one minute ahead and no more than 3,650 days away. Workspace policy can silently shorten a longer selection and can supply the initial default, so check the stored expiry after creation.
3. Expand **Advanced options** and apply only the controls the delivery needs:
   - **Password (optional)** requires eight or more trimmed characters. It is independent of recipient email verification.
   - **View only.** blocks the normal attachment download and serves eligible inline previews. JPEG, PNG and HEIC are re-encoded as WebP with the longest edge capped at 1,600 px. WebP, AVIF, GIF, SVG, BMP and ICO lack that server decoder and can be shown inline as their original bytes, so View only does not promise that every image preview withholds the source bytes. Any visible material can still be captured.
   - **Remove photo metadata.** strips location, camera and capture-time metadata from delivered photos while leaving the workspace original unchanged.
   - **Download limit (optional)** accepts a whole number from 1 through 10,000. The first eligible preview or download byte session claims one slot, including a View-only preview. Later Range requests for that same file within its one-hour signed session reuse the claim; a new browser or later session can consume another.
4. The current dialog also displays **Title (optional)**. The current **By link** request does not persist that field, so do not rely on it to identify or secure the public delivery. Use the target name and the row in **Shared**.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp">
    <img src="/screenshots/share-password-2026-10-10.webp" alt="Advanced sharing controls for a secure file link, including password, View only, metadata removal and download limit options." width="454" height="748" loading="lazy" decoding="async" />
  </a>
  <figcaption>Open <strong>Advanced options</strong> to combine password, view-only preview, photo-metadata removal and a numeric download ceiling before the URL is created. <a href="/screenshots/share-password-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Create and verify the delivery

1. On **By link**, generate and copy the URL; on **By email**, send the invitations:
   - For **By link**, select **Generate link**, wait for **Share link created**, use the copy icon, and select **Done**. Automatic clipboard success is confirmed by **Link copied — Share link copied to clipboard.**
   - For **By email**, select **Send**. The success notice reports how many addresses received the invitation and lists any failures. The modal then resets and closes; it does not show **Share link created** or a copy result.
2. Open **Shared → By me** and inspect the saved row. Its detail states who can open it, the stored expiry, password state and **Downloads: Allowed** or **View only**. This is also where you retrieve the saved URL after the email modal closes.
3. For a public bearer link, open the copied address in a private window. For a restricted email delivery, retrieve the address from **Shared → By me** and test with an invited inbox that can receive its one-time code.
4. Confirm the target, password prompt, recipient challenge, expiry and download behavior that you intended. Do not open file bytes while testing a one-slot delivery: even an eligible inline preview consumes its only slot. Use a limit of at least two when the private-window byte test and one recipient session must both succeed.
5. Distribute a **By link** address only after that check, sending its password separately when practical. **By email** has already sent invitations; correct and retry any addresses named as failures instead of waiting for a generated-link result.

<figure class="help-screenshot">
  <a href="/screenshots/share-created-2026-10-10.webp">
    <img src="/screenshots/share-created-2026-10-10.webp" alt="Share link created result containing the generated URL, copy icon and Done action." width="454" height="331" loading="lazy" decoding="async" />
  </a>
  <figcaption>Copy the complete generated address before selecting <strong>Done</strong>, then use that same address for the private recipient test. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The new row appears under **Shared → By me** with the selected target, final expiry, password state, recipient scope and download mode. The private-window visitor reaches the intended file and encounters every configured challenge before any protected bytes are served.

## Plan and workspace limits

- A Free-plan creator can hold five active sharing links across workspaces. The exact refusal is **The free plan allows 5 active share links at a time. Revoke one, let one expire, or upgrade for unlimited links.**
- Free links are clamped to seven days even if **Never** or a longer duration was chosen. A tighter workspace maximum wins.
- Revoked and expired URLs no longer occupy an active-link slot.
- Public share traffic owned by a Free account has a 10 GiB allowance per UTC day. When exhausted, recipients see **This link's owner has reached their free plan's daily share-transfer allowance. Try again later - or the owner can upgrade for unmetered sharing.**
- A workspace can disable share links, require every link to have a password, impose a default expiry or cap the maximum expiry.
- A multi-file link supports 1 through 100 files. A selection of 101 is refused with **Maximum 100 files per share link**.

These limits apply to what is ultimately saved, not merely what the form showed. Verify the final row in **Shared** before distribution.

## Locks, hiding and later changes

Public link creation deliberately ignores a member’s temporary unlock. If the selected file or an ancestor is configured **Full lock**, remove or change that configured lock with the appropriate authority, or share a separate delivery copy. A hidden file is reported as not found to a role that cannot see it.

If a target receives **Full lock** or becomes hidden from the link creator after the URL was created, public access is blocked at open time. Removing that configured state can make an unrevised, unrevoked link reachable again. Revocation is different: it permanently ends the token.

A target-level **View only** setting also makes the link effectively view-only even when the link itself was created with downloads allowed. Personal unlock grants never bypass any of these public-link decisions.

## Revocation and irreversible outcomes

Open **Shared → By me**, locate the precise row, select **Revoke share link**, and confirm **Revoke**. Subsequent requests immediately return **This share link has been revoked**. The URL cannot be reactivated; create another one when access should resume.

Revocation does not erase the source file, recall a downloaded copy, retract an email already delivered or change other active URLs for the same target. Review all rows when the item must no longer be shared anywhere.

## Troubleshooting

**Generate link says sharing is disabled or a password is required.** Follow the workspace policy shown by the exact message. Only an authorized workspace administrator should change those controls.

**The selected expiry is shorter in Shared.** Free-plan and workspace ceilings clamp longer choices. The saved timestamp is authoritative.

**The form reports a locked or missing file.** Confirm the item is visible to your role and not beneath a configured Full lock. Re-entering a personal unlock password cannot authorize a persistent public token.

**A private recipient cannot continue.** They must use the exact invited address. One-time codes expire after 15 minutes and are replaced when a new code is sent. After five wrong attempts, request another code.

**The download limit ended too early.** Your private-window preview or download can consume a slot. Range requests for one file within the same one-hour signed session are counted together, but another browser, another file or a later session can claim another place.

**The recipient gets a Free-plan transfer message.** Wait for the UTC-day allowance to reset or have the owning account change plan. Regenerating another link under the same Free owner does not create a separate allowance.

## Frequently asked questions

### Does a public recipient need a Dosya account?

No. A **By link** visitor opens the public page subject to the URL’s controls. Restricted **By email** access proves control of an invited inbox instead of requiring workspace membership.

### Can I edit the URL after sending it?

The authenticated API supports in-place updates to several settings, while the current web flow creates and revokes links. Use the controls actually present in your interface and retest after any change.

### Is a sharing password the same as Full lock?

No. A share password protects that URL. **Full lock** is configured on the workspace target or folder tree and blocks creation or public access regardless of a member’s temporary unlock.

## Related guides

- [Password-protect a sharing link](/sharing/password-link)
- [Restrict a link to named recipients](/sharing/named-recipients)
- [Disable downloads with View only](/sharing/share-disable-downloads)
- [Set and verify link expiry](/sharing/link-expiry)
- [Revoke a sharing URL](/sharing/revoke-link)
- [Share a cloud folder](/sharing/folder-link)
