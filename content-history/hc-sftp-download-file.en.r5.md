---
{
  "articleId": "hc-sftp-download-file",
  "locale": "en",
  "revision": 5,
  "title": "Download a file over SFTP",
  "summary": "Download a Dosya file over SFTP, verify the local byte count or checksum, and understand offset reads, permissions, and stale-path failures.",
  "category": "integrations",
  "articleSlug": "sftp-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/ftp-server/src/sftp.ts, apps/ftp-server/src/vfs.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/block-cache.ts, and packages/test-harness/tests/sftp.int.test.ts. No production object was downloaded.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp download file",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya SFTP supports ordinary and offset reads. Files smaller than 64 MiB use an in-memory read path; files at or above 64 MiB use bounded range requests, so a large download can take longer to start or run at a different speed. There is no SFTP download-size ceiling, although role, key, egress, and concurrency limits can still refuse the request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-download-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-download-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" alt="Four-step workflow for recording the remote path and size, downloading to a new local path, comparing bytes and SHA-256, and resuming only an unchanged file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for recording the remote path and size, downloading to a new local path, comparing bytes and SHA-256, and resuming only an unchanged file. <a class="workflow-map-full" href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-download-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-download-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Use a **Read only** or **Full access** API key that includes the SFTP protocol and the intended workspace. The login username must exactly match the key owner's email, including letter case. At `/`, choose a listed workspace name or slug before addressing its folders.

## Steps

1. Connect to `sftp.dosya.dev` on port `2222`, run `ls`, and enter the workspace that owns the file. Record the remote pathname and the size reported by `stat` or the client listing.
2. Choose a new local destination so an older partial copy cannot be mistaken for this run. In OpenSSH, use `get "remote-name.ext" "./remote-name.ext"`; a GUI client can use **Download**.
3. Wait for the transfer to finish without a `read failed`, **Permission denied**, or **No such file** response. A missing path is rechecked once when the directory cache had reported a miss.
4. Compare the local byte count with the remote listing. For an integrity check, calculate SHA-256 on the downloaded file and compare it with a trusted checksum or with a separately verified source copy.
5. If the transfer stopped but the remote file has not changed, resume through a client that performs offset reads. Restart from zero whenever the remote name, size, or current version changed during the interruption.
6. Open the completed local file, then relist the remote directory. Keep the client log and exact operation if a second download returns different bytes; SFTP has no shell or server-side hash command.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview whose Transfer card shows put and get commands, including the get action used for a download." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview whose Transfer card shows put and get commands, including the get action used for a download. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Permission denied** can mean the workspace role lacks SFTP or download access. **No such file** covers an absent or hidden path, and a replaced file may make one cached identifier stale; the gateway refreshes the path once when the old object returns 404. Rate-limited reads honor `Retry-After` for up to three retries, while transient GET network or 500/502/504 failures receive at most two retries.

A successful download creates only a local copy. It does not remove, share, or change the remote Dosya file, and local deletion cannot affect cloud storage unless the client sends a separate remote delete.

## Expected result

One complete local file exists at the chosen destination, its size matches the current remote listing, and any checksum comparison uses the bytes actually downloaded. The original remains in the same Dosya workspace and folder.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Connect with SFTP using a restricted key](/integrations/sftp-restricted-key)
