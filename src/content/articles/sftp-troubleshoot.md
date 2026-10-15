---
{
  "articleId": "hc-sftp-troubleshoot",
  "locale": "en",
  "revision": 6,
  "title": "Troubleshoot a Dosya SFTP connection or transfer",
  "summary": "Resolve SFTP host-key, password, key restriction, role, path, upload-close, size, quota, throttling, and interrupted-transfer failures.",
  "category": "troubleshooting",
  "articleSlug": "sftp",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx; apps/web/src/lib/integrations.ts; apps/ftp-server/src/config.ts; apps/ftp-server/src/sftp.ts; apps/ftp-server/src/api.ts; apps/ftp-server/src/access.ts; apps/ftp-server/src/vfs.ts; apps/ftp-server/src/memory-limit.ts; apps/ftp-server/src/sftp.ban.unit.test.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/upload/finalize-session.ts. No production SSH host fingerprint or live SFTP session was verified.",
  "related": [
    "hc-sftp-connect",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "Dosya SFTP authentication failed",
    "SFTP permission denied",
    "SFTP close failed",
    "SFTP host key changed"
  ]
}
---
Identify whether the failure occurs before authentication, while listing a workspace, during byte transfer, or when the server closes the file. Dosya commits an SFTP upload at **CLOSE**, so a client progress bar reaching 100% does not prove the cloud file was accepted.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-workflow-map-2026-10-14.webp" alt="SFTP recovery sequence from SSH host verification and password authentication through workspace listing, one sample transfer, CLOSE response, and cloud-file verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>A directory listing proves login and path access; an uploaded sample is complete only after CLOSE succeeds and its downloaded cloud bytes match. <a class="workflow-map-full" href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

| Setting | Dosya value |
| --- | --- |
| Protocol | SFTP / SSH File Transfer Protocol |
| Host | `sftp.dosya.dev` |
| Port | `2222` |
| Username | API-key owner's account email, with the same letter case |
| Authentication | Password |
| Password | Complete `dos_…` API key |
| Starting directory | `/` |

The gateway does not accept the Dosya account password, OAuth/MCP tokens, SSH public keys, FTP or FTPS. It does not provide an interactive shell. In OpenSSH, uppercase `-P 2222` selects the port; lowercase `-p` has another meaning.

Create a dedicated key at **Profile → API keys**. It must permit **SFTP**, be pinned to an accessible workspace when restricted, and use **Read only** for listing/downloads or **Full access** when writes are required. An **Upload only** key cannot perform the listings most SFTP clients need. Folder-anchored keys and allowed-IP restrictions are refused by this gateway; use a workspace pin instead. Expiry, active-hour and explicit usage restrictions still apply.

## Treat host identity separately from the password

On a first connection, compare the hostname, port, key type and fingerprint with a trusted value from Dosya support or your administrator over a separate channel. This guide does not publish a certified production fingerprint.

If the client reports **REMOTE HOST IDENTIFICATION HAS CHANGED!**, stop. Confirm a legitimate rotation before altering `known_hosts`. Replacing the API key cannot repair a host-key mismatch, and disabling host-key checking removes the protection the warning provides.

## Repair authentication failures

Check the exact email, full key, SFTP protocol selection, workspace pin and expiry. Five incorrect password failures from one source address within the tracking window can ban that address for 15 minutes. Stop guessing, correct the credential, then wait for the ban to expire before a single retry.

The server drops an unauthenticated connection after 30 seconds by default. A transient API verification failure is not counted as a bad password, so capture the client time and retry once rather than rotating a known-good key immediately.

Successful key authentication and role permission checks can each remain cached for up to 60 seconds. After revoking a key or changing a role, reconnect after that interval to verify the new boundary. An already-open channel does not prove a later operation can still commit.

## Interpret path and permission messages

- **Your role can’t use SFTP** means the active workspace role lacks `access_sftp`; ask an owner/admin to change that role.
- **access to that workspace is not permitted for this credential** (status 3) indicates membership, workspace pin or role access does not cover that path.
- **no such file or directory** (status 2) can mean a misspelled listed name or a resource hidden from this credential. Begin again at `/` and use a workspace name or slug returned there.
- **the parent directory does not exist or is not writable by this credential** requires an existing destination and create/upload permission.
- **this server supports open for reading or writing, not append or read-write** means the client selected an unsupported append/resume mode.

The root lists permitted workspaces; it has no WebDAV **All** collection. Workspaces themselves cannot be created over SFTP. `chmod` and `chown` requests are acknowledged without changing Dosya permissions, and symbolic links are unsupported.

## Diagnose upload completion

The current deployed ceiling is **352 MiB (369,098,752 bytes)** per SFTP upload; a deployment can advertise a smaller active value. Workspace file policy, available cloud storage, key limits and role limits can reject a smaller file.

| Transfer result | What to do |
| --- | --- |
| **write past the 352 MB per-file limit** (or another shown value) | Use an appropriate Dosya upload method for the complete file. Writing at another offset cannot bypass the ceiling. |
| **close failed: API 403 …** | Read the attached permission/policy reason; no cloud commit occurred merely because WRITE succeeded. |
| **close failed: API 429 (rate limited - back off and retry) …** | Stop parallel transfers, wait, and retry the entire file after the applicable allowance or slot frees. |
| **access to this workspace was revoked while the upload was in flight** | Restore authorized membership/role or choose another permitted destination; do not resume the partial handle. |
| Generic `SSH_FX_FAILURE` | Capture the operation and bounded server message. API 403 maps to permission denied, 404 to no-such-file, and other failures to status 4. |

Uploads are buffered during the SFTP session and committed on close. An empty upload currently creates no file. Interrupted writes have no durable server-side resume: avoid **Resume**, **Append**, `reput`, or `put -a`. Restart at offset zero, preferably under a fresh test name, because reopening does not load the previous prefix.

Replacing an existing path can add a Dosya file version and change its current bytes. `rm` and folder deletion move eligible content to Trash and revoke related share links. Trash retention is seven days for free owners and 30 days for other plans; permanent purge is irreversible.

## Expected result

1. Connect and run `pwd` plus `ls` at `/`.
2. Enter the workspace name returned by the server and list an existing folder.
3. Download a harmless known file and compare its bytes locally.
4. If permitted, upload one non-empty uniquely named sample and wait for the final close result.
5. Refresh Dosya **Files**, compare name and size, then download the cloud copy and verify its SHA-256.

Directory changes made through another protocol can take up to the 10-second cache interval to appear. Wait once and list again before reporting a stale view.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restriction dialog used to check SFTP protocol permission, workspace pin, scope, expiry, and incompatible folder or IP restrictions." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Inspect the exact key used as the SFTP password; a valid secret can still be refused by its scope or reach restrictions. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

For support, include client/version, host and port, operation, workspace/path with private names redacted, status/message, file size, time and timezone, and whether the failure happened at login, WRITE or CLOSE. Never attach the API key, password prompt contents or private file bytes.

## Related guides

- [Connect SFTP](/integrations/sftp-connect)
- [Revoke a key](/developers/revoke-api-key)
