---
{
  "articleId": "hc-sftp-filezilla-connect",
  "locale": "en",
  "revision": 5,
  "title": "Connect FileZilla to Dosya with SFTP",
  "summary": "Configure FileZilla for Dosya SFTP on port 2222, use an API key as the password, verify the SSH host key, and safely open the allowed workspace.",
  "category": "integrations",
  "articleSlug": "sftp-filezilla-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx, apps/web/src/lib/integrations.ts, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/ftp-server/src/sftp.ts, and apps/ftp-server/src/access.ts. FileZilla and the production host fingerprint were not exercised.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp filezilla connect",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
FileZilla must use **SFTP - SSH File Transfer Protocol**, not FTP or FTPS. Dosya listens at `sftp.dosya.dev:2222`; the username is the API-key owner's exact account email, and the password field receives the complete `dos_…` API key. SSH public-key login and an interactive shell are not available.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" alt="Four-step workflow for creating the FileZilla site on port 2222, checking the SSH host key, opening an allowed workspace, and transferring a harmless sample." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for creating the FileZilla site on port 2222, checking the SSH host key, opening an allowed workspace, and transferring a harmless sample. <a class="workflow-map-full" href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-filezilla-connect-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Create a dedicated credential in **Profile → API keys → New API key**. Pick **Read only** for browsing and downloads or **Full access** when FileZilla must upload, rename, move, or delete. Under protocol restrictions, include **SFTP**; a workspace pin is supported, while folder anchors and allowed-IP restrictions make the key unusable through this gateway.

## Steps

1. In FileZilla, open **File → Site Manager**, choose **New site**, and set **Protocol** to **SFTP - SSH File Transfer Protocol**.
2. Enter **Host** `sftp.dosya.dev` and **Port** `2222`. Use a password-based logon, put the exact key-owner email in **User**, and keep the API key out of the site name and comments.
3. Connect and inspect the SSH host-key prompt before sending the password. Compare hostname, port, key type, and fingerprint with a value obtained through a trusted Dosya support or administrator channel.
4. Accept and save the host key only after that independent comparison succeeds, then enter the full API key as the password. This repository does not publish a certified production fingerprint.
5. In the remote pane, open one workspace shown at `/` and list a known folder. A role without `access_sftp` will hide or refuse that workspace even when authentication itself succeeded.
6. Download a harmless known file, or upload a uniquely named non-empty sample when the key and role permit it. Verify the resulting name and byte size in Dosya **Files** before saving the site for regular use.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP landing page naming FileZilla as a supported client and showing the port 2222 connection command." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP landing page naming FileZilla as a supported client and showing the port 2222 connection command. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

If FileZilla reports an authentication failure, confirm that the protocol is SFTP, not FTP; recheck email case and the complete key; then inspect expiry, active hours, protocol selection, workspace pin, and incompatible folder/IP conditions. Five rejected credentials from one address inside one minute cause a 15-minute temporary ban, so correct the profile before retrying.

A listing that opens but rejects writes usually indicates **Read only**, a role without upload permission, a content lock, or policy/quota refusal. The SFTP upload is committed at file CLOSE, so keep FileZilla open until the final queue result appears.

## Expected result

FileZilla authenticates with the dedicated API key, the remote pane shows only workspaces allowed by current membership and SFTP role access, and the test transfer completes with matching bytes.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Connect with SFTP using a restricted key](/integrations/sftp-restricted-key)
