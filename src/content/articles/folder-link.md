---
{
  "articleId": "hc-folder-link",
  "locale": "en",
  "revision": 4,
  "title": "Share a cloud folder with one link",
  "summary": "Create and test one URL for a cloud folder, including dynamic subfolders, hidden or locked exclusions, view-only access and ZIP limits.",
  "category": "sharing",
  "articleSlug": "folder-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/components/share-modal.tsx, apps/api/src/pages/api/folders/[id]/share.ts, apps/api/src/lib/share/create.ts, apps/api/src/lib/share/visibility.ts, apps/api/src/lib/share/lock-gate.ts, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts, apps/api/src/lib/archive-entries.ts, apps/api/src/lib/share/egress.ts, apps/api/src/lib/share/download-session.ts and focused folder-share tests. Verified role/subtree policy, dynamic membership, exclusion counts, root and descendant lock/hidden behavior, personal-unlock non-effect, view-only handling, 10,000-entry/5 GiB archive ceilings, 10 ZIP attempts per hour, one-slot archive and preview-session counting, Free-plan limits and separate link-result versus email-send completion paths. The current folder-share capture remains accurate.",
  "related": [
    "hc-create-link",
    "hc-password-link",
    "hc-share-disable-downloads",
    "hc-revoke-link",
    "hc-file-request"
  ],
  "keywords": [
    "share cloud folder with link",
    "folder sharing URL",
    "download shared folder ZIP",
    "view only folder link",
    "share subfolders securely",
    "cloud folder delivery"
  ]
}
---
A folder link gives recipients one address for the eligible files and subfolders beneath a selected cloud folder. It is a live view rather than a snapshot: later additions can appear, while hidden and fully locked descendants are withheld whenever the recipient opens or downloads it.

## Before you start

- Select the intended workspace and finish uploading the delivery contents.
- Use a dedicated delivery folder when possible. Reusing a working folder can expose eligible files added after the URL is sent.
- Your role needs **create share links** permission and access to the folder. A folder-confined member can share only a target inside the assigned subtree.
- One link targets one folder tree. The dialog cannot combine several folders or mix a folder with separately selected files.
- Decide whether the URL is public, password protected, restricted to named email recipients or view-only.

## Steps

1. Open **Files** and locate the folder from its containing directory. Use the folder row/card menu or right-click it, then select **Share**.
2. Confirm the displayed folder name. The dialog opens on **By email**; choose **By link** when anyone holding the address may open it.
3. Review **Expires in**. Choose **1 hour**, **24 hours**, **7 days**, **30 days**, **90 days**, **Custom date…** or **Never**. Workspace and Free-plan ceilings can shorten the saved result.
4. Expand **Advanced options** as needed:
   - **Password (optional)** requires at least eight characters.
   - **View only.** allows browsing and eligible previews without a folder ZIP or normal file download.
   - **Remove photo metadata.** strips location, camera and capture-time details from delivered photos while leaving originals intact.
   - **Download limit (optional)** accepts a whole number from 1 to 10,000. One successful **Download all** ZIP consumes one slot, not one per archived file. Opening an eligible file preview also claims one slot on its first byte session, including under View only; later Range reads for that file within the one-hour signed session reuse the claim.
5. Read the exclusion notice before proceeding. It reports how many hidden or fully locked items will not be shared, counting each excluded item once rather than expanding an excluded folder into every descendant.
6. Complete the selected delivery path:
   - With **By link**, select **Generate link**, wait for **Share link created**, save the address with its copy icon, and select **Done**.
   - With **By email**, add no more than 50 addresses, decide whether **Only these people can open it.** remains selected, and select **Send**. Read the success notice's sent count and failed-address list. The modal resets and closes without showing a generated URL.
7. Open **Shared → By me** and select the saved folder row. Use its recorded settings and URL for the owner-side check; email recipients have already been sent their invitations.
8. Open that folder address privately, traverse every intended subfolder, confirm protected branches are absent, and complete the password or invited-email code challenge when configured.
9. When downloads are enabled, download one representative file. Use **Download all** only when consuming one configured slot and the archive size is acceptable. If the delivery has a one-slot limit, do not open a file preview or archive during owner testing; either raise the limit for the test or leave its sole byte session for the recipient.
10. For **By link**, deliver the verified address manually and send its password separately when practical. For **By email**, correct any failed address and retry rather than expecting a copy-and-Done result.

<figure class="help-screenshot">
  <a href="/screenshots/folder-share-2026-10-10.webp">
    <img src="/screenshots/folder-share-2026-10-10.webp" alt="Share dialog for the Client delivery folder with By link selected, an exclusion notice for one hidden or locked item, and Generate link ready." width="454" height="442" loading="lazy" decoding="async" />
  </a>
  <figcaption>This folder delivery omits one protected descendant; review the exclusion count before selecting <strong>Generate link</strong> and verify the resulting tree privately. <a href="/screenshots/folder-share-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The tested URL opens the intended live folder tree, omits every protected descendant reported by the preflight notice, and presents only the preview or download actions allowed by the link and target settings. The recipient does not join the workspace.

## What recipients receive

The public folder page lists eligible descendants without adding the visitor as a workspace member. New eligible content placed under the shared root can appear through the same active URL. Renames and moves inside the tree are reflected as the live folder is resolved again.

The following items are not delivered normally:

- Hidden folders and files, plus the branch beneath an excluded hidden folder.
- Items configured **Full lock**, including descendants protected by a fully locked ancestor.
- Items deleted from the live workspace tree.
- Normal downloads for a descendant configured **View only**. It may remain previewable, but it is omitted from the ZIP archive.

If the shared root itself becomes hidden from its link creator or receives **Full lock** after creation, the whole URL becomes unavailable. Removing that configured state can restore an unrevoked, unexpired link. A member’s temporary one-hour unlock does not restore public access because personal grants never travel with the URL.

## Folder ZIP limits

**Download all** streams one ZIP containing the descendants the link may expose at that moment.

- Maximum archive entries: 10,000.
- Maximum total source size: 5 GiB.
- Attempt limit: 10 folder ZIP requests per hour for the same link and client IP.
- An empty eligible set returns **There is nothing in this folder to download**.
- Too many entries returns **Too many files to archive at once (max 10000)**.
- Excess size returns **Archive too large (max 5 GiB)**.
- A view-only folder returns **This folder is view-only. Downloads are not allowed.**

The archive’s full source size is checked against the Free owner’s daily public-share transfer allowance before streaming. Free accounts receive 10 GiB per UTC day across all their public links. A configured link download limit is claimed once for the complete ZIP; a refused archive that never starts does not become a successful delivery. Folder listing alone does not claim a byte slot, but opening an eligible descendant preview does.

Split a folder that exceeds an archive ceiling, or let recipients retrieve eligible files individually when policy permits. Being able to browse a large tree does not guarantee it fits into one ZIP.

## Plan, policy and access rules

- A Free creator can have five active links and every Free link is capped at seven days. Revoked and expired rows free a slot.
- Workspace settings can disable sharing, require passwords, establish a default expiry or impose a shorter maximum.
- **By link** is public to anyone holding the URL. **By email** with **Only these people can open it.** selected requires each invited address to pass a one-time email code.
- Folder sharing refuses an out-of-scope target with **This folder is outside the folder you're confined to**.
- A hidden root answers **Folder not found**. A configured locked ancestor reports **This folder is inside a locked folder and cannot be shared**; a locked root reports **This folder is fully locked and cannot be shared**.
- Unlocking the folder for your own session does not satisfy either public-link lock gate.

## Revocation and later folder changes

Open **Shared → By me** and revoke the exact folder-link row when the delivery must stop. Revocation is immediate and irreversible for that token. It does not delete the folder, remove another URL pointing to it or recall downloaded ZIPs.

Moving the shared folder outside the link’s resolvable target or deleting it makes the delivery unavailable. Adding material can expose it automatically, so revoke the link before repurposing the folder for unrelated work.

## Troubleshooting

**Generate link reports a locked folder.** A configured Full lock on the root or ancestor blocks persistent public access. A personal unlock cannot override it. Ask the authorized owner to change the configured lock or share an approved delivery copy elsewhere.

**The recipient sees fewer descendants than the owner.** Compare the private recipient view with hidden and lock settings. The preflight count names how many protected items are excluded but deliberately does not reveal their names to the public visitor.

**Download all is absent.** Check **View only** first. A target-level view-only rule can also block the affected file even when the folder link itself allows downloads.

**The ZIP fails while individual files open.** Match the exact error to the 10,000-entry, 5 GiB, hourly attempt, link download-count or Free transfer allowance above. Do not repeatedly retry a size refusal; divide the delivery.

**A new file unexpectedly appeared.** Folder links resolve contents dynamically. Move unrelated material outside the shared root or revoke the URL and create a dedicated delivery folder.

## Frequently asked questions

### Can I share only selected files from a folder?

Use a multi-file sharing link for up to 100 selected files, or place the intended set in a dedicated folder. A folder URL represents its eligible live tree.

### Can I restrict the folder to email addresses?

Yes. Choose **By email**, add no more than 50 recipients, and keep **Only these people can open it.** selected. Each recipient proves access with an emailed code.

### Will revoking the link remove its folder?

No. It ends only that public token. The source folder and its workspace access remain until separately changed.

## Related guides

- [Create a secure sharing link](/sharing/create-link)
- [Add a password to a link](/sharing/password-link)
- [Disable folder downloads](/sharing/share-disable-downloads)
- [Revoke a folder URL](/sharing/revoke-link)
- [Collect files into a folder request](/sharing/file-request)
