---
{
  "articleId": "hc-suspicious-activity",
  "locale": "en",
  "revision": 2,
  "title": "Responding to suspicious account activity",
  "summary": "Contain an unfamiliar sign-in or account change by securing email, changing the password, revoking sessions and keys, reviewing activity and contacting support.",
  "category": "account",
  "articleSlug": "suspicious-activity",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed current password, session, API-key, workspace activity and private-support controls against the local current app and related automated tests on 2026-10-12. This is a containment workflow, not a guarantee of forensic completeness. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sessions",
    "hc-api-key",
    "hc-workspace-activity",
    "hc-contact-support"
  ],
  "keywords": [
    "suspicious activity",
    "account compromise",
    "lost device",
    "revoke session",
    "rotate API key",
    "security incident"
  ]
}
---
If a sign-in, password-reset message, API action or workspace change is unfamiliar, secure the account from a trusted device. Preserve useful details without delaying containment or exposing secrets.

## Before you start

- Use a device you trust and secure the email account connected to Dosya.
- Record the time, visible action and affected workspace or resource. Do not copy passwords, one-time codes, recovery codes, API-key secrets or private links.
- If you cannot sign in, use the password and second-factor recovery guides first.

## Steps: contain the account

1. Change the Dosya password from **Profile → Password & 2FA**. If locked out, request a password reset.
2. Confirm two-factor authentication is enabled and replace recovery codes if they may have been exposed.
3. Open **Profile → Sessions**. Identify the current session and revoke every unfamiliar device. Use the revoke-others action when appropriate.
4. Open **Profile → API keys**. Revoke keys you do not recognize and rotate any key stored on a lost device or exposed system.
5. Review connected integrations and AI apps. Disconnect anything unfamiliar.
6. For each important workspace, open **Activity** and filter around the relevant time, member and action.
7. Check members, invitation links, share links and file requests for unexpected access.
8. Contact private support with redacted evidence when the source or impact is unclear.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Dosya active sessions list showing current and other signed-in devices with controls for reviewing account access." width="1160" height="730" loading="lazy" decoding="async" /></a><figcaption>Review signed-in devices first and revoke sessions you do not recognize. Session revocation does not replace API-key rotation. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API key list showing named credentials and management controls for reviewing and revoking programmatic access." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Review API keys separately. Revoke and replace any credential that could have been copied from the affected device or service. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Unfamiliar sessions and credentials no longer provide access. New sign-ins require the changed password and current second factor. Workspace activity and current resource state give you a bounded view of recorded actions to include in a support case.

## Limits and investigation boundaries

- Session revocation does not revoke API keys, and API-key revocation does not end browser sessions.
- Password changes do not undo file, link, member or settings changes already completed.
- The activity log records supported events and metadata; it is not a file-content inspection tool or complete forensic guarantee.
- IP geolocation can reflect a VPN, proxy, carrier or corporate gateway.
- Vault keys and unlock state have separate recovery and destruction boundaries.
- Never post incident evidence containing private URLs, IP addresses or account identifiers publicly.

## Troubleshooting

**I cannot access the account.** Secure the email inbox, reset the password and use a saved recovery code if authenticator 2FA is enabled.

**I lost a device.** Revoke its session, rotate keys stored on it, disconnect integrations it authorized and review recent workspace activity.

**An unfamiliar member joined.** Revoke active invitation links, remove the member, review role and folder changes, and preserve the activity timestamps.

**Files or settings changed.** Use the appropriate restore or administration workflow. The activity log itself does not reverse changes.

**Support needs evidence.** Provide the approximate time, account email, workspace name, action, outcome and any request or session ID through [private support](https://app.dosya.dev/support). Keep all secrets out of the ticket.

## Related guides

- [Reviewing active sessions](/account/sessions)
- [API key management](/developers/api-key)
- [Reading workspace activity and audit details](/workspaces/activity)
- [Contacting support with useful information](/troubleshooting/contact-support)
