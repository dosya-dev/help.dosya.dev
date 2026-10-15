---
{
  "articleId": "hc-unavailable-link",
  "locale": "en",
  "revision": 2,
  "title": "Troubleshoot an unavailable sharing link",
  "summary": "Match the public sharing message to expiry, revocation, deletion, locks, recipient checks, passwords, download controls, regional rules or transfer allowances.",
  "category": "sharing",
  "articleSlug": "unavailable-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against src/components/share/ShareShell.astro, src/lib/share-viewers/util.ts, apps/web/src/pages/shared.tsx, apps/web/src/pages/share-analytics.tsx, apps/api/src/lib/share/access.ts, apps/api/src/lib/share/lock-gate.ts, apps/api/src/lib/share/egress.ts, apps/api/src/lib/share/downloads.ts, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/unlock.ts, apps/api/src/pages/api/share/[token]/download.ts, apps/api/src/pages/api/share/[token]/download-all.ts, apps/api/src/pages/api/files/[id]/unlock.ts and apps/api/src/pages/api/files/[id]/lock.ts. Verified public error copy, gate order, 30-minute password and recipient grants, wrong-password throttling, target revival only after configured full-lock removal or change, the non-effect of a member-only one-hour unlock grant on public sharing, revoked versus expired detail actions, terminal revocation, download-cap wording, view-only refusal, Free-plan 10 GB UTC-day allowance and folder archive ceilings. Existing expired and revoked captures were inspected and remain accurate.",
  "related": ["hc-create-link", "hc-link-expiry", "hc-revoke-link", "hc-named-recipients", "hc-share-disable-downloads", "hc-link-activity"],
  "keywords": ["sharing link unavailable", "share link expired", "share link revoked", "file sharing password error", "private recipient verification", "download limit reached", "view only sharing link"]
}
---
Open the exact URL in a private browser window and use the page heading or download error to choose the recovery. The share page can be available while downloading is deliberately blocked, so separate “cannot open the link” from “cannot download the item.”

## Steps

### First checks for a recipient

1. Copy the complete URL again. Long sharing addresses can break across lines in email or chat.
2. Open it in a private window so an old password or recipient cookie does not hide the current gate.
3. Record the exact heading, message and time without posting the private URL publicly.
4. Confirm the sender and intended file through a trusted channel.

### Match the message to its cause

| What you see | What it means | Next action |
| --- | --- | --- |
| **Link expired** | Its expiry time passed | The owner opens the target in **Files** and uses **Share** to create a replacement |
| **Link revoked** | The owner permanently ended that token | Request a new sharing URL |
| **File deleted** | The target no longer exists as a live file | The owner must restore or reshare the item |
| **Region restricted** | The workspace country policy refused the request location | The owner must review the allowlist or blocklist |
| **This file was shared privately** | The link accepts named recipient addresses only | Enter the exact invited address and verify its one-time email code |
| **This file is password protected** | A separate sharing-link password is required | Enter the password supplied by the sender |
| **This content has been locked by its owner** | The target or an ancestor received a full lock after sharing | An authorized owner must remove or change that configured **Full lock** |
| **Link unavailable** | The token, hidden target or another protected state cannot be disclosed further | Ask the owner to inspect the link and item from **Shared → By me** |

A link that is both restricted and password-protected asks for recipient email verification first, then the password. Each successful grant lasts 30 minutes in that browser. Opening the URL on another browser or after the grant expires repeats the relevant check.

<figure class="help-screenshot">
  <a href="/screenshots/share-link-revoked-2026-10-12.webp"><img src="/screenshots/share-link-revoked-2026-10-12.webp" alt="Dosya public sharing page headed Link revoked with a message that the owner revoked this sharing URL." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption><strong>Link revoked</strong> is terminal for that URL. The sender must create and distribute another link if access should resume. <a href="/screenshots/share-link-revoked-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Owner checks in Shared

1. Open **Shared**, select **By me**, and set the filter to **All** so ended rows remain visible.
2. Find the item and open its link detail. Compare the displayed URL with the address the recipient used.
3. Read **Status**, **Expires**, **Access**, **Password** and **Downloads**. Several independent links can point to the same file or folder.
4. Open the target in **Files**. Confirm it is live, visible to the link creator and not beneath a full lock.
5. For a restricted link, review the invited list. The recipient must use an address on that list; forwarding the URL alone does not add them.
6. Use **Copy link** only for a live row. A revoked detail row offers **Create a new link**. An expired detail has no expiry editor or replacement button, so find the target in **Files**, use **Share**, and test the new URL privately before sending it.

Removing or changing the configured **Full lock** on the target or an ancestor, or unhiding the target, can revive a still-live link because public access is rechecked on each request. A member password unlock creates a one-hour grant for that signed-in member; it does not change the configured lock or restore anonymous public sharing. Revocation cannot be undone. The revoked detail offers **Create a new link**, while an expired detail requires creating the replacement from the target in **Files**.

<figure class="help-screenshot">
  <a href="/screenshots/share-link-expired-2026-10-12.webp"><img src="/screenshots/share-link-expired-2026-10-12.webp" alt="Dosya public sharing page headed Link expired with a message that the sharing URL is no longer available." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>An expired URL stops serving new requests, while the workspace file remains stored unless the owner separately deletes it. <a href="/screenshots/share-link-expired-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## When the page opens but download fails

**`This file is view-only. Downloads are not allowed.`** The sender enabled view-only access. Supported content may still open in the browser, but the original attachment is withheld. Ask the sender for a download-enabled link when you need a local copy.

**`This folder is view-only. Downloads are not allowed.`** The folder page can be browsed, but its archive action is disabled by the sender's link control.

**`This link has reached the number of downloads its sender allowed.`** The link's download cap is exhausted. Counts are enforced atomically, and the owner must create or change access rather than asking the recipient to keep retrying.

**`This link's owner has reached their free plan's daily share-transfer allowance.`** Free-plan owners share a 10 GB egress allowance per UTC day across all their public sharing links. Recipients can try after the reset, or the owner can upgrade for unmetered sharing.

**`Too many files to archive at once (max 10000)` or `Archive too large (max 5 GiB)`.** The folder is accessible, but one ZIP cannot contain that expanded tree. Ask the owner to share or package smaller folders.

A successful view does not guarantee a download: password, recipient and live-link checks authorize the page, while view-only mode, a link cap and daily transfer allowance decide whether bytes can be downloaded.

## Password and recipient recovery

- A wrong link password returns **Incorrect password**. The unlock route permits five attempts per token and IP in 15 minutes, while the link also has a consecutive-failure lockout. Stop guessing and ask the sender for the current password.
- Email verification and password access are independent. Completing one never substitutes for the other.
- The address must match an invited recipient. A one-time code proves inbox control; it does not create a Dosya account requirement.
- A recipient or password grant expires after 30 minutes. The page can ask again during a long session without meaning the link was revoked.

## Expected result

The recipient either regains the intended level of access through a live, tested URL or receives the exact reason that only the owner can correct. The owner knows whether the original URL can revive or whether a replacement must be distributed.

## What recovery cannot undo

Expiry or revocation does not delete the source item, and ending one link does not end another active link to the same target. These controls also cannot recall a copy someone already downloaded, exported or captured. Use link activity and private support details to investigate unexpected access, but rotate or revoke credentials promptly when the URL escaped its intended audience.

## Related guides

- [Create a secure sharing link](/sharing/create-link)
- [Set a link expiry](/sharing/link-expiry)
- [Revoke a sharing URL](/sharing/revoke-link)
- [Share with named recipients](/sharing/named-recipients)
- [Disable downloads on a link](/sharing/share-disable-downloads)
- [Review link activity](/sharing/link-activity)
- [Change a sharing-link password](/sharing/share-change-password)
