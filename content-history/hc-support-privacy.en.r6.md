---
{
  "articleId": "hc-support-privacy",
  "locale": "en",
  "revision": 6,
  "title": "Share diagnostics with Dosya support safely",
  "summary": "Prepare reproducible steps, timestamps, client details, IDs, redacted logs, and screenshots without exposing credentials, private links, or file content.",
  "category": "troubleshooting",
  "articleSlug": "support-privacy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/support.tsx; apps/web/src/pages/support-ticket.tsx; apps/web/src/components/support/attach-images.tsx; apps/web/src/components/support/report-problem-dialog.tsx; apps/api/src/pages/api/support/tickets/index.ts; apps/api/src/pages/api/support/tickets/[id]/reply.ts; apps/api/src/lib/support.ts; apps/help/src/content/articles/contact-support.md; apps/help/src/content/articles/suspicious-activity.md. No ticket was submitted. Local repository evidence only; no production request was made.",
  "related": [
    "hc-contact-support",
    "hc-suspicious-activity",
    "hc-vault-recovery"
  ],
  "keywords": [
    "safe support ticket",
    "redact diagnostic logs",
    "Dosya support privacy",
    "share error details safely"
  ]
}
---
Support needs enough detail to reproduce and correlate a failure, but it does not need an authentication secret or an entire private file. Build the report around one action, one time window and the smallest evidence that shows the result.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/support-privacy-workflow-map-2026-10-14.webp" data-light-href="/screenshots/support-privacy-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/support-privacy-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/support-privacy-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/support-privacy-workflow-map-2026-10-14.webp" alt="Safe support-report workflow: reproduce once, record time and environment, copy a redacted exact error, crop attachments, review for secrets, and keep the ticket ID." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Correlatable timestamps and nonsecret identifiers are more useful than broad logs; review every field and attachment before creating the ticket. <a class="workflow-map-full" href="/screenshots/support-privacy-workflow-map-2026-10-14.webp" data-light-href="/screenshots/support-privacy-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/support-privacy-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

Check [status.dosya.dev](https://status.dosya.dev/) first when several product areas fail together. Reproduce the action once only when doing so cannot duplicate a payment, invitation, deletion, upload, webhook job, public link or external message.

Record:

- the task, ordered steps, expected result and actual result;
- date, local time and timezone, plus the last known successful time;
- Dosya surface and version: browser, mobile, desktop, CLI, API, S3, SFTP, WebDAV or integration;
- operating system and relevant client/runtime version;
- active workspace name/ID and affected nonsecret resource ID when safe;
- exact error text, HTTP/SFTP status, CLI exit code or request/delivery/job identifier;
- whether the problem happens every time and what safe checks already ran.

Use a disposable item where possible. For a confidential file failure, start with its type, approximate size, destination and policy result rather than attaching the source.

## Remove secrets and private capabilities

Never include a Dosya password, email verification code, authenticator code, recovery code, session cookie, bearer token, API key, S3 secret, webhook signing secret, Vault passphrase/recovery key, payment-card number/security code, or private share/file-request URL.

A signed download URL, OAuth authorization code and private link token grant access even though they do not look like a password. Redact query strings and fragments from URLs. In an HTTP request, remove `Authorization`, `Cookie`, `X-Dosya-Signature` and other credential headers before sharing. Replace secret values with labels such as `[API KEY REDACTED]`; do not leave the first or last characters visible.

If a credential was already posted, rotate or revoke it immediately, then tell support what type was exposed and when. Editing a later ticket message does not guarantee that copies outside the visible conversation never existed.

## Crop logs and screenshots

Include only lines around the failing request. Preserve the exact error, status, operation, timestamp and nonsecret ID, while removing environment dumps, authorization headers, local usernames, home-directory paths, unrelated filenames, email addresses and payload/file contents.

The ticket attachment control accepts PNG, JPEG, WebP and GIF. Each image must be under 5 MB, and one message can contain at most three images. Crop to the relevant control and error before uploading. A screen recording, archive, document or arbitrary failing source file is not accepted by that image control; describe it and wait for an approved private transfer method.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace security settings example containing workspace-specific controls that should be cropped and redacted before attachment to a support ticket." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Workspace settings can expose names, policies and access choices; keep only the control needed to explain the problem and hide unrelated values. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Create and review the private ticket

1. In the signed-in web app, open the profile menu and choose **Get help**.
2. Select **New ticket** and the closest category, such as **Technical issue**.
3. Use a subject naming the action and result. The subject limit is 200 characters.
4. Enter the reproduction and evidence. The description limit is 10,000 characters.
5. Attach at most three redacted supported images, each below 5 MB.
6. Read the complete draft again, including filenames and visible browser address bars, then select **Create ticket** once.

The created conversation appears under **Open**. Add later evidence to the same ticket so timestamps and replies remain together; do not create duplicates merely to ask for an update. **Report a bug** is a separate structured-diagnostics flow. Review what it will send before submission, and use **New ticket** for an account-specific support conversation.

## Diagnostic examples by surface

| Problem | Useful evidence | Exclude |
| --- | --- | --- |
| Upload/download | File type, approximate bytes, workspace/folder, transfer state, network change, exact error | Original confidential bytes, signed download URL, cookies |
| Sharing/request | Creation/open/download stage, expiry, recipient/browser, request/share ID if safe | Public token, password/access code, recipient private data not needed for diagnosis |
| MCP/OAuth | Client/version, server URL, consent stage, workspace, tool and exact nonsecret response | Access/refresh token, authorization code, exposed file text |
| API/S3/SFTP/CLI | Method/operation, client version, endpoint/port, status/code, time, redacted request ID | Key, secret, Authorization header, complete private object path |
| Mobile backup | Platform/app version, Backup label, permission scope, policy, workspace, item type/size | Photo contents, full library listing, device backup credentials |
| Billing/account | Plan, invoice date, last four digits only when requested, sign-in method, displayed error | Full card number, security code, password, 2FA/recovery values |

## Expected result

Search the draft and attachments for `dos_`, `DOSYA`, `whsec_`, `Authorization`, `Cookie`, `token=`, `code=`, long query strings, QR codes and private URLs. Confirm the time includes a timezone and the report identifies one concrete failing operation. Keep the resulting ticket reference.

A legitimate support response does not need your password, two-factor code, Vault recovery key or complete API/S3 secret. If a reply requests one, do not provide it; use the existing signed-in support conversation to question the request and secure any credential already disclosed.

## Related guides

- [Contact support](/troubleshooting/contact-support)
- [Respond to suspicious activity](/account/suspicious-activity)
- [Recover Vault access](/files/vault-recovery)
