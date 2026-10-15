---
{
  "articleId": "hc-share-recipient-report-problem",
  "locale": "en",
  "revision": 5,
  "title": "Report a sharing-link access problem",
  "summary": "Record the exact share-page state and safe context, contact the sender or Dosya, and use the prefilled abuse form without exposing passwords or codes.",
  "category": "sharing",
  "articleSlug": "share-recipient-report-problem",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/components/share/ShareShell.astro, src/pages/report-abuse.astro, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/download.ts.",
  "related": [
    "hc-unavailable-link",
    "hc-share-recipient-verification"
  ],
  "keywords": [
    "share recipient report problem",
    "Sharing-link recipient access",
    "Dosya help",
    "file sharing"
  ]
}
---
Report the visible title, time, browser, and share URL while omitting secrets. The public page provides **Contact** and a **Report abuse** form prefilled with the current link.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14.webp" alt="Four-step map for recording a safe error report, retrying one transient failure, choosing Contact, and using Report abuse for harmful content." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Preserve exact nonsecret context and send it through the correct path without exposing the password, email code, or public bearer URL. <a class="workflow-map-full" href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-report-problem-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Copy the exact error title and description, current time with time zone, device, browser version, and whether the failure happened before or after email or password verification.
2. Record the full share URL privately for the sender or Dosya support. Do not post it publicly; anyone holding a public bearer URL may be able to open the content.
3. Retry once only for **Network error. Try again.**, **Could not load that folder.**, or **Something went wrong**. Preserve terminal states such as **Link expired**, **Link revoked**, **File deleted**, and **Region restricted** without repeated attempts.
4. Contact the sender first for an expired or revoked link, wrong invited address, password, view-only policy, exhausted download cap, or deleted source. Only the owner can change those conditions.
5. Choose **Contact** in the share page footer for a Dosya service problem. Include the safe context from step 1, but never include the password or six-digit email code.
6. Choose **Report abuse** for harmful or unauthorized content. The form opens with the current share URL prefilled; review it, add the requested description, and submit through that page.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Recipient access gate where an exact password or verification error can be recorded before contacting the sender." width="660" height="600" loading="lazy" decoding="async" /></a><figcaption>Capture the displayed title and message from the gate, not the password or six-digit code entered into it. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The sender or Dosya receives the exact nonsecret state needed to investigate, while passwords and one-time codes remain outside the report.

The public page’s **Copy link** can copy the URL for a private report, but forwarding it can expand access on a public link.
**A screenshot may expose filenames, sender branding, or recipient email; redact those when they are unnecessary.**

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
