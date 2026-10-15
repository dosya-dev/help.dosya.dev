---
{
  "articleId": "hc-contact-support-safely",
  "locale": "en",
  "revision": 1,
  "title": "What to include in a Dosya support request",
  "summary": "Prepare a Dosya support request with the exact time, steps and redacted evidence while keeping passwords, recovery codes and API keys private.",
  "category": "troubleshooting",
  "articleSlug": "contact-support-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally against the Get help and New support ticket interface in apps/web/src/pages/support.tsx, attachment validation in apps/web/src/components/support/attach-images.tsx, and ticket length validation in apps/api/src/lib/validation-policy.generated.ts on 2026-10-14.",
  "related": [
    "hc-contact-support",
    "hc-support-privacy",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "what to include in a Dosya support request",
    "safe support ticket information",
    "redact support screenshot",
    "never share API keys with support"
  ]
}
---
Before you send a ticket from **Profile > Get help**, record the action, exact time and timezone, expected result, actual result, client version and any visible error. Remove passwords, sign-in codes, recovery codes, API keys, cookies and private link tokens from the message and attachments.

Use the signed-in **Get help** page for account-specific assistance. If you need the complete ticket workflow, follow [how to contact Dosya support](/troubleshooting/contact-support).

<figure class="help-screenshot">
  <a href="/screenshots/support-ticket-form-2026-10-12.webp"><img src="/screenshots/support-ticket-form-2026-10-12.webp" alt="Dosya New support ticket form with a concise subject, technical issue category and reproducible problem details." width="1160" height="900" loading="lazy" decoding="async" /></a>
  <figcaption>Use the New support ticket form for a private account conversation. Review the subject, description and each image before selecting Create ticket. <a href="/screenshots/support-ticket-form-2026-10-12.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: prepare useful support details

1. From **Profile**, open **Get help** and select **New ticket**.
2. In **Subject**, name the failed task and result in one line.
3. In **Description**, list the exact actions that produced the issue, in order.
4. Add **Expected** and **Actual** lines so the difference is clear.
5. In **Description**, add the date, local time and timezone, plus when the action last worked if the issue is intermittent.
6. Add the Dosya app or browser version and the operating system.
7. In **Description**, paste the exact error text after removing tokens, private URLs and personal data.

Use a harmless sample when you can reproduce the problem safely. For upload or download issues, include the file type, approximate size, destination and visible progress state. For protocol or API issues, include the request method, HTTP status, timestamp and a redacted request identifier.

## Information you must remove

Do not send a password, verification code, two-factor code, recovery code, session cookie, API key, S3 secret, WebDAV credential, private share URL or complete payment-card number. Dosya support does not need an authentication secret to investigate a ticket.

If a secret is already visible in a draft or screenshot, remove the attachment and redact the text. If you already sent or exposed the secret, revoke or rotate it first, then tell support that it was replaced. Use [the suspicious activity response steps](/account/suspicious-activity) if you do not recognize access to the account.

## Prepare a redacted screenshot

- Capture only the control, status or error needed to explain the issue.
- Cover private filenames, email addresses, local user paths, payment details and link tokens.
- Check the redacted image at full size before attaching it.
- Keep the label and error readable so support can identify the failing step.

The ticket form accepts up to three PNG, JPEG, WebP or GIF images per message. Each image must be under 5 MB. For more detail about safe diagnostic evidence, read [how to share diagnostic information safely](/troubleshooting/support-privacy).

## Expected result

The ticket describes one reproducible problem and includes enough nonsecret context to investigate it. After **Create ticket** succeeds, the conversation opens under **Open** and you can keep later evidence in the same thread.

## Related guides

- [Contacting support with useful information](/troubleshooting/contact-support)
- [Share diagnostic information with support safely](/troubleshooting/support-privacy)
- [Respond to suspicious account activity](/account/suspicious-activity)
