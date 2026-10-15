---
{
  "articleId": "hc-sftp-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect an SFTP client",
  "summary": "Configure SFTP host, port and password authentication, verify the SSH host key, and test workspace transfers within the gateway’s limits.",
  "category": "integrations",
  "articleSlug": "sftp-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx; apps/web/src/lib/integrations.ts; apps/web/src/components/api-keys/create-key-dialog.tsx; src/pages/developer/sftp.astro; apps/ftp-server/src/sftp.ts; apps/ftp-server/src/api.ts; apps/ftp-server/src/vfs.ts; apps/ftp-server/src/config.ts; apps/ftp-server/src/access.ts; apps/ftp-server/src/memory-limit.ts; apps/ftp-server/src/streaming-writer.ts; apps/ftp-server/dosya-sftp.service; apps/api/src/middleware.ts; apps/api/src/middleware.sftp-metering.unit.test.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/upload/open.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/pages/api/files/[id]/index.ts; apps/api/src/lib/folder-trash.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/pages/api/internal/files/trim-versions.ts. Source-derived connection and process map, no production fingerprint or live-client certification. OPEN/CLOSE inspected: write handles start empty, zero-byte CLOSE skips upload, and the current gateway does not support durable upload resume. Official reference: https://man.openbsd.org/sftp.1; https://man.openbsd.org/ssh_config.5.",
  "related": [
    "hc-api-key-protocols",
    "hc-api-key-folder"
  ],
  "keywords": [
    "SFTP connection",
    "SFTP host",
    "SFTP credential",
    "cloud storage"
  ]
}
---
Connect to **sftp.dosya.dev**, port **2222**, with **SFTP over SSH**. The username is your Dosya account email, and the password is a full API key. This service provides file operations only: it is not FTP, FTPS, or an interactive SSH shell.

## Create credentials this client can use

In the web app, select the workspace and open **Integrations → SFTP**. If **Your role can’t use SFTP** appears, ask the workspace owner/admin for access before making a client profile. SFTP access and upload/download/delete permissions are separate role decisions.

Open **Profile → API keys → New API key**. Name the key for this computer under **What is it for?**, and choose **Read only** for listing/downloads or **Full access** for upload and management. Select **Restrictions and expiry → Where can it reach? → Protocols → Only the ones I pick**, check **SFTP**, and choose the appropriate **Workspace** pin. Generate it and save the one-time secret privately.

Do not select **Choose folder…** for an SFTP credential: folder-anchored keys are rejected at this protocol. Workspace-pinned keys are supported. A key with **Upload only** cannot perform the listing requests needed for this connection walkthrough. Also avoid allowed-IP restrictions: the gateway connects to the API on your behalf, so the API cannot verify your original address and refuses an IP-restricted key. Expiry, active-hour and applicable usage restrictions continue to matter.

## Configure the connection

| Client setting | Dosya value |
| --- | --- |
| Protocol | SFTP / SSH File Transfer Protocol |
| Host | `sftp.dosya.dev` |
| Port | `2222` |
| Username | Your key-owner account email, with the same letter case |
| Authentication | Password |
| Password | Complete `dos_…` API key |
| Initial directory | `/` for the workspace list |

The server supports password authentication, not login with an SSH public key. Your email is not a workspace name, and no account-password login is provided here. Save the key only in your client's private credential store.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-connect-process-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-process-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-connect-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-connect-process-2026-10-14.webp" alt="SFTP connection process showing host sftp.dosya.dev, port 2222, host-key verification, workspace selection and sample-byte comparison." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use password authentication for the API key, then choose the workspace before transferring a sample. <a class="workflow-map-full" href="/screenshots/sftp-connect-process-2026-10-14.webp" data-light-href="/screenshots/sftp-connect-process-2026-10-14.webp" data-dark-href="/screenshots/sftp-connect-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

For OpenSSH, keep the email separate from the hostname with the SSH user option:

```sh
sftp -P 2222 -o User=you@example.com -o PreferredAuthentications=password -o PubkeyAuthentication=no sftp.dosya.dev
```

Replace the sample email with yours. Enter the API key only at the password prompt; terminal commands, saved scripts and shell history should contain no secret. `-P` selects the SFTP port; lowercase `-p` has a different meaning. The client must be installed on your computer.

## Check the host before authenticating

A first connection can show an SSH host-key fingerprint and ask whether to trust it. The host key identifies the server, while the API key identifies your account. Compare the displayed hostname, port, key type and fingerprint against a trusted value obtained from Dosya support or your administrator through a separate channel before accepting. This guide has no certified production fingerprint, and fetching a key with `ssh-keyscan` alone does not prove identity.

If **REMOTE HOST IDENTIFICATION HAS CHANGED!** appears, stop and confirm a legitimate change before altering known-host entries. Do not set `StrictHostKeyChecking=no` as a routine fix. A saved trust record is independent of the client password; rotating your API key will not resolve a host-key mismatch.

## Steps: navigate and verify a transfer

1. Connect, then use `pwd` and `ls`. At `/`, SFTP lists the workspaces available to this key and role. It does not expose WebDAV's All/smart-view collections.
2. Use `cd "My Workspace"`, replacing that example with a listed name. A workspace slug also resolves. Use `ls` again to see that workspace's actual folders and files.
3. Change into an existing destination folder, or create a disposable one with `mkdir "sftp-check"` when permitted. Workspaces cannot be created from the SFTP root.
4. Upload a uniquely named, non-empty local sample with `put sample.txt sftp-check-20261014.txt`. Wait for completion and any final close response. The gateway commits the upload at file close, so a progress bar reaching 100% can precede cloud completion.
5. Confirm that name and size in Dosya **Files**, at the same workspace/folder. Download with `get sftp-check-20261014.txt ./sftp-check-downloaded.txt`; compare its bytes or SHA-256 against the original.
6. Reconnect and list again to confirm the saved location. Changes from another client may briefly lag; directory caching defaults to 10 seconds, while misses are checked afresh.

Read-only users can validate a known remote sample with `get` instead. Ordinary downloads can issue offset reads; large reads at 64 MiB or above use bounded range fetching, so first-byte timing and throughput can differ. No server-side hash command or shell session is available for comparison: calculate hashes on your local source and downloaded copy.

## Expected result

The workspace path lists the intended files and a completed sample download matches the original. An uploaded sample becomes an ordinary file in Dosya Files only after a successful cloud commit; it is not a public share link.

## Supported operations and boundaries

The gateway handles listing/stat, `get`, `put`, `mkdir`, rename/move, `rm` and `rmdir`. `chmod`/`chown` attribute requests are acknowledged without changing Dosya workspace permissions. Symbolic links and SSH shell/exec are unsupported. A client probing for a shell must continue using SFTP-only mode.

The shipped server configuration sets an upload ceiling of **352 MiB (369,098,752 bytes)**. A deployment can configure a smaller cap; its error reports the active MB value. This ceiling is independent of your plan's total cloud storage. Workspace size/extension policy, remaining storage and explicit credential/role usage limits can refuse a smaller file. Free and paid accounts may use SFTP; plan request/concurrency ceilings are excluded for this protocol, but daily egress and explicit limits still apply. Start with one transfer and lower client concurrency if the service reports throttling.

Uploads are buffered in the SFTP session until CLOSE; empty uploads currently create no file. An interrupted upload is not a durable resumable transfer. **Do not use upload Resume, Append, `reput` or `put -a`**: the current server does not reload the old prefix when opening a write. Restart the full upload from offset zero, preferably to a new filename.

Uploading a complete file to an existing name passes the existing file ID to Dosya's versioned upload path. It can replace current bytes and add a version; version history defaults to 10 unless configured differently and is subject to retention/pruning. Preserve independent originals before replacement. `rm` and folder deletion affect cloud content, moving eligible items to Trash and revoking share links. Trash retention is seven days for free owners or 30 for other plans; permanent purge is irreversible. Restoring content does not reactivate an old revoked share URL.

## Diagnose refusals

| Message or status | Action |
| --- | --- |
| Password authentication fails | Check exact email case/full API key, SFTP protocol selection, workspace pin, expiry and folder/IP restrictions. Repeated credential guesses can cause a temporary IP ban. |
| **Your role can’t use SFTP** | Request workspace access; changing clients does not bypass the role gate. |
| **access to that workspace is not permitted for this credential** (SFTP status 3) | Verify membership and the role's SFTP permission. |
| **no such file or directory** (status 2) | Check the listed workspace name and path; resources you cannot see can appear absent. |
| **the parent directory does not exist or is not writable by this credential** | Enter an existing workspace/folder and confirm create/upload permissions. |
| **write past the 352 MB per-file limit** (or another active value) | Use the web uploader or another suitable protocol for a file beyond the gateway's ceiling; do not split offsets as a workaround. |
| **close failed: API 403 …** or **close failed: API 429 (rate limited - back off and retry) …** | Inspect the permission/policy detail or back off. A successful WRITE did not prove CLOSE could commit. |
| **access to this workspace was revoked while the upload was in flight** | The final commit was refused; contact the owner rather than resuming the partial write. |

SFTP translates API 403 to permission denied, 404 to no-such-file and other failures to status 4; a client may show only these generic names. Server details are bounded to 180 characters and redact key-shaped secrets. Capture the displayed operation, error and time without exposing credentials.

## Disconnect and revoke

Use `bye` or disconnect the client. Remove saved credentials separately and revoke the dedicated key in **Profile → API keys** when its access should end. A successful login cache and role-permission cache can each lag up to 60 seconds; an already-open connection is not proof a revoked key can still commit operations. Reconnect after a role change and verify the required action. Revoking credentials does not delete existing workspace files.

## Related guides

- [Recover an interrupted SFTP transfer](/integrations/sftp-resume-transfer)
- [API-key setup and restrictions](/developers/api-key)
