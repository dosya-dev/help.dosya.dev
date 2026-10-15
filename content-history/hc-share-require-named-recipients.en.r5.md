---
{
  "articleId": "hc-share-require-named-recipients",
  "locale": "en",
  "revision": 5,
  "title": "Require named recipients for a sensitive share",
  "summary": "Create a private file share for named email addresses, enforce one-time-code verification, and confirm that a forwarded URL alone cannot grant access.",
  "category": "sharing",
  "articleSlug": "share-require-named-recipients",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/web/src/components/share-modal.tsx, apps/mobile/src/share/CreateShareSheet.tsx, and apps/api/src/lib/share/recipients.ts. Production status: no private share was sent.",
  "related": [
    "hc-create-link",
    "hc-password-link"
  ],
  "keywords": [
    "private share named recipients",
    "restricted file link",
    "recipient email verification",
    "secure file sharing"
  ]
}
---
A restricted Dosya link requires both the URL and control of an invited inbox. Use it when forwarding the address must not extend access to another person. The recipient does not need a Dosya account, but must complete the emailed code challenge before any file bytes are served.

<figure class="help-screenshot"><a href="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp"><img src="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp" alt="Private sharing setup from recipient address entry through the Only these people control and recipient email-code gate." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Bind one share URL to its invited address list, then require inbox proof from each person who opens it. <a href="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Recipient rules

The signed-in sender needs **Create share links** for the target's workspace scope. A link accepts at most 50 unique recipient addresses. Dosya trims and lowercases entries, removes duplicates, and rejects malformed addresses. External users cannot address Dosya-managed `dosya.dev` mailboxes; that attempt returns **You can't send to dosya.dev email addresses**. Staff whose own verified account uses that domain are exempt for internal delivery.

The restricted choice exists on the email path: web uses **By email** and the checkbox **Only these people can open it.**; mobile uses **Send by email** and **Only these people can open it**. A link made through the plain link tab is public and has no invited list.

## Steps

1. From **Files**, open **Share** for one file or folder. On web, a multi-file selection can also create one restricted bundle.
2. Choose **By email** on web or **Send by email** on mobile.
3. Add every intended address under **Recipients** or **To**. Web accepts comma-separated paste and Enter; mobile accepts commas, semicolons, or spaces.
4. Enable **Only these people can open it.** Confirm the explanatory text says that recipients verify with a one-time code and a forwarded link does not work.
5. Choose expiry and any password or download policy needed. If a password is added, recipients must satisfy both the address gate and the password gate.
6. Select **Send** on web or **Send to N people** on mobile.
7. Ask one listed test recipient to open the email, submit the same address, and enter the current six-digit code.
8. In a separate private window, try an unlisted address. The request responds generically and never reveals whether an address is invited; it must not expose the file.

<figure class="help-screenshot"><a href="/screenshots/share-links-overview-2026-10-13.webp"><img src="/screenshots/share-links-overview-2026-10-13.webp" alt="Shared links overview showing a restricted-link people icon and its invited recipient count." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>A people icon and numeric count distinguish a named-recipient link from an ordinary bearer URL in Shared. <a href="/screenshots/share-links-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Understand the outcome

All listed people receive the same address, but each verifies independently. **A private link needs at least one recipient email** prevents a locked URL with nobody eligible to open it. More than 50 yields **A share link can have at most 50 recipients**. The web interface reports partial delivery as **Sent to X of N. Could not reach: ...**; successfully mailed recipients retain access while failed addresses still remain on the link's invite list.

An invited person with a verified Dosya account can also see the record under **Shared → With me**. That list is available only after account email verification and does not replace the share-page code gate.

## Expected result

Listed recipients can pass the email-code challenge and open the protected item. A person who only receives a forwarded URL cannot satisfy the gate with an address absent from the invite list.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
