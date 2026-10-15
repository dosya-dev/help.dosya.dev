---
{
  "articleId": "hc-share-email-message",
  "locale": "en",
  "revision": 6,
  "title": "Email a share link with a message",
  "summary": "Email one Dosya share URL and a 500-character note to up to 50 people, then interpret web delivery details and mobile's simpler result message.",
  "category": "sharing",
  "articleSlug": "share-email-message",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/web/src/components/share-modal.tsx, apps/mobile/src/share/CreateShareSheet.tsx, apps/mobile/src/share/hooks.ts, apps/api/src/lib/share/email.ts, apps/api/src/pages/api/files/[id]/share-email.ts, and apps/api/src/pages/api/files/share-message-cap.unit.test.ts. Production status: no email was sent.",
  "related": [
    "hc-create-link",
    "hc-link-activity"
  ],
  "keywords": [
    "email share link message",
    "send cloud file email",
    "file sharing recipients",
    "Dosya email share"
  ]
}
---
Dosya can create one share URL, mail it to a recipient list, and place an optional personal note in the same branded message. The note is context for the recipient; expiry, password, view-only, download limits, and named-recipient verification remain the actual access controls.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-email-message-workflow-map-2026-10-14.webp" alt="Share-by-email workflow showing recipient entry, a bounded personal note, link policy review, and send-result feedback." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Write recipient context in the note field, then keep sensitive secrets in a separate channel and enforce access through link settings. <a class="workflow-map-full" href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Limits and delivery behavior

One link accepts no more than 50 normalized, unique email addresses. The optional message can contain at most 500 characters after trimming. The API rejects a longer note with **Message is too long (max 500 characters)** before it creates the share. Do not place the link password, verification code, or confidential material in this note because every selected recipient receives it.

Sending requires **Create share links** and access to the target. Workspace sharing rules and free-plan limits still apply. Registered recipients can receive an in-app inbox item and push notification in addition to the email; external recipients receive the mail containing the URL.

## Steps

1. Open the file or folder's **Share** control. On the web, you may select multiple files first to mail one bundle link.
2. Choose **By email** in the web dialog or **Send by email** in the mobile sheet.
3. Add the intended addresses under **Recipients** or **To**. Remove any chip that does not belong in the final audience.
4. Enter a concise note in **Message**, such as the requested action and due date. Keep it at 500 characters or fewer.
5. Decide whether to enable **Only these people can open it.** With it on, each recipient must verify that invited address; with it off, anyone who receives a forwarded URL can use the link.
6. Review **Expires in** or **Expires**, then configure any password and download restrictions.
7. Press **Send** on web or **Send to N people** on mobile.
8. Read the completion feedback before closing. On web, all successful sends report **Shared with N recipients.** and mixed results identify the addresses Dosya could not reach. Mobile instead shows **Email sent** after any successful HTTP response.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Link analytics screen used after an emailed share to review recipient verification, opens, and downloads rather than mail transport." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Analytics begins with recipient verification and link access; it is not an email-delivery receipt for the personal note. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Interpret the send result

The web client displays **Private share sent** for a restricted delivery and **Share sent** for a public one. When only some messages fail, it reports **Sent to X of N. Could not reach: address...**. Those failures do not cancel successful mail or remove the already-created link.

The mobile client discards the response's sent count and failed-address list. It shows **Email sent** for a successful HTTP response even when only some recipients were reached, so use the web flow when the sender must know which addresses failed. If every send fails, the server returns **Could not send email** to either client; inspect **Shared** before submitting again because link creation precedes outbound mail.

The owner-side **Access log** records opens and downloads, not SMTP delivery. For a restricted link, the **Invited** panel changes from **Not opened** to **Verified** after a recipient completes the code gate. A public email share cannot prove which mailbox holder used a forwarded address.

## Expected result

Each successfully reached address receives the same governed share URL and written note. Web reports full or partial delivery details; mobile confirms only that the request succeeded. Later analytics begins when recipients verify, open, or download.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
