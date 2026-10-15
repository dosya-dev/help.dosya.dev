---
{
  "articleId": "hc-share-disable-downloads",
  "locale": "en",
  "revision": 3,
  "title": "Disable downloads on a sharing link",
  "summary": "Replace an active sharing URL with a view-only link, confirm file and folder download controls are blocked, and send recipients the new address.",
  "category": "sharing",
  "articleSlug": "share-disable-downloads",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/components/share-modal.tsx, apps/web/src/pages/shared.tsx, apps/web/src/pages/share-analytics.tsx, apps/api/src/lib/share/access.ts, apps/api/src/lib/share/lock-gate.ts, apps/api/src/lib/share/view-only-image.ts, apps/api/src/lib/share/view-only-image.unit.test.ts, apps/api/src/lib/share/download-session.ts, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts and focused share download tests. Verified creation-only web control, immediate terminal revocation, effective target view-only behavior, preview-family enforcement, format-specific derivative, passthrough and refusal behavior for View-only images, folder ZIP refusal, preview byte-session counting, persistent recipient grants, separate link-result and email-send completion paths and the distinction between configured locks and personal unlocks. The real Advanced options capture remains accurate.",
  "related": [
    "hc-create-link",
    "hc-folder-link",
    "hc-revoke-link",
    "hc-share-preflight-private-window"
  ],
  "keywords": [
    "disable file sharing downloads",
    "view only cloud file link",
    "share file without download button",
    "replace download enabled link",
    "view only folder sharing",
    "secure preview link"
  ]
}
---
The web app sets **View only** when a link is created. To remove downloads from an existing URL, revoke that link and create a replacement for the same target with **View only** selected. The replacement has a different address, so every recipient needs the new URL.

## Before you start

- Identify the exact active row in **Shared → By me** and note its target, recipients, password, expiry and any download limit. These settings are not copied to the replacement automatically.
- Warn recipients that the original URL will end immediately. Revocation cannot be undone.
- Confirm the file type can open in Dosya’s browser preview. A view-only link refuses attachment bytes; an item without a supported preview may therefore be unusable to the recipient.
- Understand the boundary: removing a download button reduces ordinary saving, but visible information can still be photographed, transcribed or captured from the screen.

## Steps

1. Open **Shared**, stay on **By me**, and locate the link whose downloads should stop.
2. Open its detail page and confirm **Downloads** currently reads **Allowed**. Copy the target name, not the URL, for reference.
3. Return to the list, select **Revoke**, and confirm the warning. The old token immediately returns **This share link has been revoked** and can never be restored.
4. Open **Files**, find that same file, bundle or folder, and choose **Share**.
5. Select **By link** for a public URL. Use **By email** and leave **Only these people can open it.** selected when named addresses must verify access.
6. Review **Expires in**, expand **Advanced options**, then select **View only.** It blocks ordinary attachment downloads. The dialog summarizes images as lower-resolution previews, but the exact byte behavior depends on format as described below.
7. Re-enter the old delivery’s required password, expiry, named-recipient mode and metadata choice from its **Shared** detail; none of those controls migrate automatically.
8. Replace the revoked delivery with **Generate link** or **Send** according to its recipient mode:
   - For **By link**, select **Generate link**, copy the address under **Share link created**, select **Done**, and open that copy privately.
   - For **By email**, select **Send**, note the sent count and any failed addresses, then let the modal reset and close. Open **Shared → By me**, find the new row, and retrieve its URL there for a private test with an invited inbox; email mode does not present a generated-link result.
9. Verify that a previewable file opens without a download control. An eligible View-only preview still claims one configured download slot when its first bytes are served; Range requests for that file reuse the claim only within the same one-hour signed session. Do not perform this byte test on a one-slot replacement intended for somebody else. For a folder, browse its visible tree and confirm **Download all** is unavailable.
10. Distribute a **By link** replacement manually. For **By email**, the invitations were sent by **Send**; correct reported failures. In either mode, update messages, bookmarks or documents that still point at the **Revoked** token.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp">
    <img src="/screenshots/share-password-2026-10-10.webp" alt="Share Advanced options for creating a replacement link, with the View only control below the password field." width="454" height="748" loading="lazy" decoding="async" />
  </a>
  <figcaption>Select <strong>View only.</strong> before generating the replacement URL; this setting belongs to the new link and does not modify an existing one. <a href="/screenshots/share-password-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The original address is permanently revoked. Its replacement opens supported previews without file-download or folder-archive controls, appears as **Downloads: View only** in the owner detail, and is the only URL sent for future access.

## Expected recipient behavior

- A normal download request is refused with **This file is view-only. Downloads are not allowed.**
- A folder archive request is refused with **This folder is view-only. Downloads are not allowed.**
- Previewable document, media and image families can still open inline. JPEG, PNG and HEIC images are re-encoded as WebP derivatives capped at 1,600 px on the longest edge.
- WebP, AVIF, GIF, SVG, BMP and ICO have no server-side decoder in this path, so the browser receives their original bytes inline. View only therefore cannot promise original-byte withholding for every previewable image format.
- Folder browsing can remain available while the ZIP action is blocked. Opening an eligible descendant preview still consumes one link slot when a download ceiling is configured; View only does not bypass that counter.
- Unsupported preview formats do not become downloadable merely because the recipient holds the URL.
- Files downloaded before revocation remain on recipients’ devices. View-only cannot recall those copies.

The target’s configured lock can also determine the effective result. A file set to workspace **View only** remains view-only even when its share link was created without that option. A target or ancestor changed to **Full lock** makes the public link unavailable rather than asking the recipient for the workspace lock password.

## Locks and unlock grants

A member’s personal folder or file unlock lasts for that signed-in member and does not weaken public sharing. It cannot make a full-locked target shareable, cannot enable downloads on a view-only link, and cannot revive a public link while the configured target lock remains.

Changing the configured lock is a workspace action with wider consequences. Ask an authorized owner to decide whether the target itself should change, or leave the target protected and share a suitable copy instead.

## Troubleshooting

**View only is absent.** Expand **Advanced options** in the current **Share** dialog. If link creation itself is unavailable, confirm your role has **create share links** permission and check workspace policy.

**The old URL still shows content in an open tab.** An already-rendered page is not a valid revocation test. Reload or open the exact URL privately; new API access must be refused.

**A recipient still has a download button.** Compare the complete address with the replacement shown in **Shared → By me**, then verify its detail page says **Downloads: View only**. Multiple links can point to the same target, and changing one does not change the others.

**The recipient cannot preview the item.** The link may be correctly view-only while the format lacks an eligible inline renderer. For JPEG, PNG and HEIC, a source larger than 32 MiB or one the server cannot decode is refused instead of falling back to the original. Convert or provide a previewable delivery copy if downloading must remain disabled.

**A folder ZIP is missing but individual previews work.** This is expected for a view-only folder. Remember that each first logical preview byte session can still spend a configured link slot. If the link is not view-only, also check its download count, Free-plan transfer allowance and the archive’s 10,000-entry and 5 GiB ceilings.

## Frequently asked questions

### Can I turn downloads back on for the same URL?

The current web workflow does not edit this field in place. Revoke and replace the link again with **View only** cleared. The authenticated share API has broader update capabilities, but that does not change what the web controls currently offer.

### Does view-only stop screenshots?

No. It changes the bytes and controls Dosya serves; it cannot prevent someone from capturing content displayed on their device.

### Does a password also disable downloads?

No. A password gates entry. Select **View only** separately when the unlocked recipient should preview without downloading.

## Related guides

- [Create and test a sharing link](/sharing/create-link)
- [Share a folder through one URL](/sharing/folder-link)
- [Revoke a sharing link permanently](/sharing/revoke-link)
- [Preflight the recipient view privately](/sharing/share-preflight-private-window)
