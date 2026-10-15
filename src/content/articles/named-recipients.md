---
{
  "articleId": "hc-named-recipients",
  "locale": "en",
  "revision": 1,
  "title": "Sharing with named email recipients",
  "summary": "Send a private link to specific addresses, test the one-time-code gate, and understand what happens when someone forwards the URL.",
  "category": "sharing",
  "articleSlug": "named-recipients",
  "status": "published",
  "lastReviewed": "2026-10-12",
  "verification": "Verified the current English By email dialog, public recipient-code gate, Shared and analytics views, web/API source and focused recipient tests on 2026-10-12. Screenshots use isolated local fixtures and fictional addresses. The review confirmed one restricted link for up to 50 deduplicated lower-cased addresses, generic request-code responses, 15-minute code lifetime, five wrong attempts per issued code, ten request attempts per IP window, recipient grant cookies, optional independent password checks and forwarded-link behavior. Production email delivery was not sent.",
  "related": ["hc-create-link", "hc-password-link", "hc-link-expiry", "hc-link-activity"],
  "keywords": ["private share link", "named recipients", "share by email", "one-time code", "email verification", "forwarded link", "recipient restriction"]
}
---
Use **Share → By email** and keep **Only these people can open it** selected. Dosya creates one restricted link for the listed addresses. Each recipient must enter an invited address and verify a six-digit code before the file is served.

Emailing an ordinary public URL does not create this restriction. The checkbox is the setting that changes the link from public to named-recipient access.

## Before you start

- Complete the file upload and confirm you can create sharing links.
- Collect the exact recipient addresses. A restricted link can contain up to 50 distinct addresses.
- Use fictional or disposable addresses when testing. Do not publish the final URL or recipient list.
- Decide whether to add a password as a second, independent gate. A recipient-restricted and password-protected link requires both checks.

## Steps: send a private link

1. Open the file's **Share** action.
2. Select **By email**.
3. Enter an address and press **Enter**, comma or Space to add it. You can paste several addresses separated by commas, semicolons, spaces or new lines.
4. Review every address chip. Duplicate addresses are ignored after they are normalized to lowercase.
5. Keep **Only these people can open it** selected. The explanation beneath it confirms that recipients use a one-time code and that forwarding the link alone gives no one else access.
6. Choose **Expires in** and any Advanced options. Add an optional message if the recipient needs context.
7. Choose **Send**. Read the completion message, especially when it reports that some email deliveries failed.

<figure class="help-screenshot">
  <a href="/screenshots/share-named-recipients-2026-10-12.webp"><img src="/screenshots/share-named-recipients-2026-10-12.webp" alt="Dosya Share dialog on the By email tab with two fictional recipient addresses and Only these people can open it selected." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The recipient chips define who may verify. Keep the restriction selected if forwarding the URL must not grant access. <a href="/screenshots/share-named-recipients-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

If you clear the restriction, Dosya still emails the listed people, but the resulting link is public. Anyone who receives or is forwarded that URL can open it subject to its other settings.

## Recipient verification

1. The recipient opens the emailed URL. The page says **This file was shared privately** without exposing the file itself.
2. They enter the same address that was invited and choose **Send code**.
3. The page always gives a neutral response. This prevents someone holding the URL from testing which addresses were invited.
4. The recipient checks that inbox for the six-digit code, returns to the same page and enters it within 15 minutes.
5. They choose **Verify**. A valid code creates a recipient grant for that browser, and the page reloads the share.
6. If the link also has a password, the password gate appears after email verification.

<figure class="help-screenshot">
  <a href="/screenshots/share-recipient-code-2026-10-12.webp"><img src="/screenshots/share-recipient-code-2026-10-12.webp" alt="Dosya private share page at the Check your email step with a six-digit code field and Verify button." width="1440" height="1000" loading="lazy" decoding="async" /></a>
  <figcaption>The confirmation deliberately says “If” the address was invited. Enter the code in the same browser before its 15-minute expiry. <a href="/screenshots/share-recipient-code-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Recipient limits and forwarded links

The forwarded URL opens the same private gate. An unlisted person can request a code, but the page does not reveal whether their address is on the list and no usable code is delivered to an uninvited inbox. Possessing the URL alone is insufficient.

An invited recipient can still choose to share material after legitimate access, including by downloading it when downloads are allowed or capturing what appears on screen. Recipient restriction controls admission to the Dosya link; it is not digital-rights management.

## Expected result

An invited address can complete verification and open the item. An unlisted address and a person who only received a forwarded URL cannot pass the recipient gate. **Shared** identifies the link as restricted and its analytics page shows invited and verified addresses without attaching individual access-log events to a named recipient.

## Troubleshooting

**The recipient did not receive a code.** Confirm the exact invited address, check spam and mail filtering, and wait briefly before retrying. The neutral page response looks the same for invited and uninvited addresses, so recheck the sender's recipient list rather than using the message as proof of delivery.

**The code expired.** Request a new one. Each code is valid for 15 minutes and replaces an earlier outstanding code for that recipient.

**The code is repeatedly rejected.** Check all six digits and use the latest message. Five wrong guesses exhaust an issued code; request a new one rather than continuing. Request and verification endpoints also apply IP-based throttling.

**A forwarded link opened for someone else.** Check whether **Only these people can open it** was cleared when the email was sent, or whether the browser already holds a grant for an invited address. Open a fresh private window to test the first-visit behavior.

**The invited person passes email verification but then sees a password prompt.** The sender enabled both recipient restriction and password protection. The recipient needs the separately shared password as well.

## Frequently asked questions

### What happens if someone forwards a private link?

The new person still has to verify an invited inbox. The URL alone does not grant access.

### Why does a recipient not receive their verification code?

The address may not exactly match the recipient list, the message may be filtered, or delivery may have failed. Confirm the list in the sender's link details, then request a new code after checking the inbox.

### Does sending by email always make a link private?

No. Keep **Only these people can open it** selected. Clearing it sends a public link to those addresses.

## Related guides

- [Creating a sharing link](/sharing/create-link)
- [Adding a password to a sharing link](/sharing/password-link)
- [Setting link expiry and checking the actual expiration](/sharing/link-expiry)
- [Reading link access and download activity](/sharing/link-activity)
