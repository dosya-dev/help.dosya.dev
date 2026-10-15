---
{
  "articleId": "hc-sftp-fix-restricted-folder",
  "locale": "en",
  "revision": 5,
  "title": "Fix SFTP access to a restricted folder",
  "summary": "Diagnose an SFTP path restriction, distinguish workspace pins from unsupported folder anchors, and restore access without widening the key again.",
  "category": "integrations",
  "articleSlug": "sftp-fix-restricted-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/api/src/lib/access/anchor.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/access.ts, and apps/ftp-server/src/vfs.ts. No production restriction was changed.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp fix restricted folder",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
SFTP does not implement Dosya folder-anchored credentials. A key pinned to one folder is deliberately refused at authentication because this gateway cannot enforce that folder boundary. SFTP can honor a workspace pin, current workspace membership, the role's `access_sftp` decision, and the role's ordinary file permissions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow for inspecting key restrictions, identifying an incompatible folder anchor, creating a workspace-pinned SFTP key, and testing its intended path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for inspecting key restrictions, identifying an incompatible folder anchor, creating a workspace-pinned SFTP key, and testing its intended path. <a class="workflow-map-full" href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-fix-restricted-folder-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

This distinction prevents a dangerous workaround: removing every restriction to make a login pass would expose more workspaces than the task needs. Replace only the incompatible part of the credential and keep SFTP protocol selection, expiry, active hours, scope, and workspace reach as narrow as possible.

## Steps

1. Open **Profile → API keys**, find the credential used by the failing client, and expand its configuration. Record its **Permission**, **Protocols**, **Reach**, expiry, active hours, and key prefix without exposing the secret.
2. If **Reach** names a folder, stop retrying that key over SFTP. The creation form states that a folder-limited key works on WebDAV or the S3 gateway; SFTP rejects it rather than silently ignoring the anchor.
3. Create a replacement key for the same client. Include **SFTP**, pin it to the required **Workspace**, leave **Folder** unset, and leave **Allowed IP ranges** empty because the gateway cannot forward the original client address.
4. Choose **Read only** for list/download work or **Full access** for writes, then save the one-time secret. Confirm that the user's role in that workspace allows SFTP and the intended file action.
5. Replace the password in the client while keeping `sftp.dosya.dev`, port `2222`, and the exact account email. Connect at `/`, where the server lists permitted workspace roots rather than a folder anchor.
6. Enter the pinned workspace and list the target folder. Test one known read or a disposable non-empty write; after success, revoke the incompatible old key so it cannot be reused through WebDAV or S3.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview with Get API Key and port 2222 connection stages used after replacing an incompatible credential." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview with Get API Key and port 2222 connection stages used after replacing an incompatible credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Permission denied** on a workspace path means the role or key cannot use that workspace. **No such file or directory** means the visible tree does not contain the supplied segment; workspace names and slugs are case-sensitive path components. A folder moved or renamed elsewhere can make an old client bookmark invalid even though the key is correct.

A successful replacement narrows access to the chosen workspace, not one subfolder. If a hard per-folder boundary is required, use WebDAV with the folder anchor instead of claiming SFTP can provide it.

## Expected result

The replacement key authenticates over SFTP, `/` exposes only the permitted workspace set, and the intended path works under that workspace. No unsupported folder anchor or IP allowlist remains on the SFTP credential.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
