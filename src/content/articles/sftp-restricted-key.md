---
{
  "articleId": "hc-sftp-restricted-key",
  "locale": "en",
  "revision": 6,
  "title": "Connect with SFTP using a restricted key",
  "summary": "Create an SFTP-only Dosya API key, connect on port 2222 with your account email, and understand which restrictions block SFTP authentication.",
  "category": "integrations",
  "articleSlug": "sftp-restricted-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx, apps/web/src/lib/integrations.ts, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/api/src/lib/access/anchor.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/access.ts, and apps/ftp-server/src/sftp.ts. No production SFTP login was attempted.",
  "related": [
    "hc-webdav-connect",
    "hc-api-key-protocols"
  ],
  "keywords": [
    "sftp restricted key",
    "SFTP-only API key",
    "sftp.dosya.dev port 2222",
    "secure cloud storage transfer"
  ]
}
---
Dosya SFTP uses password authentication with an API key. It does not use an SSH private key: your Dosya account email is the username, and the complete `dos_…` API key is entered at the password prompt.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" alt="SFTP-only credential workflow showing protocol restriction, optional workspace pin, email login, port 2222, and a permitted workspace listing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Restrict the credential to SFTP, keep incompatible folder and IP restrictions off, then verify the intended workspace can be listed. <a class="workflow-map-full" href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/sftp-restricted-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Create a compatible restriction set

In **Profile → API keys**, create a dedicated credential and open **Restrictions and expiry**:

1. Under **Where can it reach? → Protocols**, choose **Only the ones I pick**, then check **SFTP** only. The form explains that every unselected protocol refuses the key.
2. Use **Workspace** to pin the credential to one workspace when required. A workspace pin is supported on SFTP and prevents the key from reaching other workspaces.
3. Do not choose a **Folder** anchor. Folder-anchored credentials work only on WebDAV and the S3 gateway and are deliberately refused by SFTP.
4. Leave **Allowed IP ranges** empty. The form explicitly warns **SFTP stops working on this key** because the SFTP server connects to the API on your behalf and cannot present your client address.
5. **Active hours:** an optional weekly window applies to the credential. Expect authentication or operations outside that window to be refused.
6. Choose **Read only** for listing and downloading. Use **Full access** only for a client that must upload, create folders, rename, move, or delete, and remember that the workspace role can still deny those actions.

Your role in each visible workspace must allow `access_sftp`. The integration page displays **Your role can’t use SFTP** when the current workspace denies it. An owner or admin must change the role; another key cannot override that permission.

## Steps

1. From a terminal, start the documented `sftp` connection:

   ```sh
   sftp -P 2222 your-email@example.com@sftp.dosya.dev
   ```

2. Enter the `dos_…` API key at the password prompt. Do not put it on the command line, where shell history and process output can expose it.
3. At the `sftp>` prompt, run `ls` to view the workspace roots allowed by the credential and your memberships.
4. Change into the pinned or intended workspace, list a known path, and download a harmless test file with `get`.
5. If the key is full access and writes are required, upload a disposable small file with `put`, verify it in Dosya Files, then remove the test through an approved path.

For a saved OpenSSH shortcut, use:

```text
Host dosya
    HostName sftp.dosya.dev
    Port 2222
    User your-email@example.com
```

Then run `sftp dosya` and provide the API key interactively.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview with the sftp.dosya.dev host, port 2222, email username, and API-key password fields." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the SFTP integration values exactly: host `sftp.dosya.dev`, port `2222`, the key owner's email as username, and the complete API key as password. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Troubleshooting

- An immediate password rejection can mean an invalid/revoked key, a username that does not match the key owner's email, an excluded SFTP protocol, a folder anchor, an IP restriction, or an inactive time window.
- Five credential failures from one address within **1 minute** trigger a **15-minute** temporary IP ban. Correct the credential rather than repeating guesses.
- A successful login followed by a denied workspace path means that workspace is outside the key pin, outside your membership confinement, or lacks the SFTP role permission.
- A read-only key can connect and download but write operations fail. Granting **Full access** still does not bypass workspace upload/delete permissions or content locks.
- Dosya exposes the SFTP subsystem only. Shell and remote-exec channels are refused, so commands such as `ssh host command` are not a supported connectivity test.
- Revocation can take up to **60 seconds** to affect a fresh login because successful authentication is briefly cached. Existing operations also recheck workspace access at sensitive points.

Revoking or expiring this API key stops future access; it does not delete files already transferred. A delete performed through a permitted full-access session is a real cloud mutation and must be recovered through the applicable Dosya retention path, when available.

## Expected result

The client authenticates on `sftp.dosya.dev:2222`, lists only workspaces allowed by the key pin and the member's current access, and permits only operations allowed by both the API-key scope and workspace role.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Restrict protocol access](/developers/api-key-protocols)
