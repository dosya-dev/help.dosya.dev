---
{
  "articleId": "hc-sftp-resolve-authentication-failure",
  "locale": "en",
  "revision": 5,
  "title": "Resolve an SFTP authentication failure",
  "summary": "Fix Dosya SFTP password failures by checking exact email, API-key restrictions, temporary IP bans, and the required password-only authentication method.",
  "category": "integrations",
  "articleSlug": "sftp-resolve-authentication-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx, apps/web/src/lib/integrations.ts, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/ftp-server/src/sftp.ts, apps/ftp-server/src/api.ts, and apps/ftp-server/src/config.ts. Production authentication was not attempted.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp resolve authentication failure",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya SFTP accepts only password authentication: the username must equal the API-key owner's email exactly, and the password must be the complete value beginning `dos_`. An account password, SSH private key, public-key method, workspace name, or another member's email will be rejected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" alt="Four-step workflow for checking SFTP password authentication, matching the exact key-owner email, removing incompatible restrictions, and waiting out a 15-minute ban." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for checking SFTP password authentication, matching the exact key-owner email, removing incompatible restrictions, and waiting out a 15-minute ban. <a class="workflow-map-full" href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-resolve-authentication-failure-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Separate login failure from a later path refusal. Authentication can succeed while one workspace remains hidden or returns **Permission denied** because the current role lacks SFTP access. Replacing the client cannot override a workspace gate.

## Steps

1. Verify the profile uses SFTP at `sftp.dosya.dev` with port `2222`, password authentication, and no SSH public-key-only setting. A connection to port 22 or an FTP protocol is outside this service.
2. In **Profile → API keys**, match the key by name or visible prefix. Confirm it is not expired or revoked, and type the owner email with exactly the same case that Dosya returns for that key.
3. Expand the key restrictions. **Protocols** must include SFTP; a **Folder** anchor or non-empty **Allowed IP ranges** makes the credential incompatible; a workspace pin must name the workspace you intend to use.
4. Check active hours and usage conditions, then confirm the secret is the full one-time `dos_…` value rather than the masked prefix shown later. Never print the key in a terminal argument or troubleshooting log.
5. Stop repeated guesses after several failures. Five credential rejections from one address within one minute trigger a 15-minute ban; wait out the full interval after correcting the profile.
6. Reconnect once. If login succeeds, run `ls` and enter the workspace; if it fails again, record the timestamp and whether the client reported timeout or password rejection, then revoke and recreate the dedicated key instead of continuing guesses.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP landing page showing Get API Key followed by the email-at-host connection command on port 2222." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP landing page showing Get API Key followed by the email-at-host connection command on port 2222. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The server ends authentication attempts that do not complete within 30 seconds. A backend timeout or 5xx can still reject the session, but those availability errors do not count as bad credential guesses; a later retry may work. API 401 and incompatible-key 403 responses do count toward the address ban.

After login, **access to that workspace is not permitted for this credential** means membership or `access_sftp` failed. Ask an owner or admin to correct the role instead of widening an unrelated API key.

## Expected result

One corrected connection authenticates using the exact email and API key, then lists the workspaces allowed by the key and role. If authentication remains unavailable, the captured evidence distinguishes a credential rejection, temporary ban, and service timeout without exposing the secret.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
