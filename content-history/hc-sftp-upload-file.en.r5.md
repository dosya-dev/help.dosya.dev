---
{
  "articleId": "hc-sftp-upload-file",
  "locale": "en",
  "revision": 5,
  "title": "Upload a file over SFTP",
  "summary": "Upload a file through Dosya SFTP, wait for CLOSE to commit it, verify the remote bytes, and avoid unsupported resume or empty-file behavior.",
  "category": "integrations",
  "articleSlug": "sftp-upload-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/ftp-server/src/sftp.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/config.ts, apps/ftp-server/src/memory-limit.ts, apps/ftp-server/dosya-sftp.service, and packages/test-harness/tests/sftp.int.test.ts. No production file was uploaded.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp upload file",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
SFTP receives write chunks during the transfer but does not start the Dosya cloud upload until the client closes the file handle. The decisive receipt is a successful CLOSE, followed by the expected remote name and size. A progress bar at 100% before that response is not final confirmation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-upload-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-upload-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" alt="Four-step workflow for choosing a writable Dosya folder, checking the active file limit, uploading a unique name from byte zero, and waiting for the final CLOSE result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for choosing a writable Dosya folder, checking the active file limit, uploading a unique name from byte zero, and waiting for the final CLOSE result. <a class="workflow-map-full" href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-upload-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-upload-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Use a **Full access** key for a normal client that must browse and upload. An **Upload only** key can send bytes but cannot download and often cannot perform the listings a graphical client expects. The workspace role must separately allow SFTP and file uploads.

## Steps

1. Connect to `sftp.dosya.dev:2222`, open the intended workspace, and enter an existing writable folder. Confirm the destination path before choosing the local file.
2. Select a non-empty source no larger than the active SFTP per-file ceiling. The deployed service sets 352 MiB; workspace file-size policy, key or role limits, quota, and extension rules can lower the effective limit.
3. Upload under a unique name with `put` or the client's **Upload** action. Do not use append or resume; a write handle begins without the old prefix and unsupported read-write/append modes are refused.
4. Keep the session open after the byte counter finishes. Wait for the final CLOSE result, which can still report **Permission denied**, `close failed: API 429`, policy/quota detail, or **access to this workspace was revoked while the upload was in flight**.
5. Relist the folder and compare the remote size with the local source. Open Dosya **Files** in the same workspace and verify the same name and location; directory cache is invalidated after a successful commit.
6. Download the uploaded object to a different local path and compare SHA-256 when integrity matters. Remove the disposable test only through an approved delete path after that comparison.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview whose Transfer stage displays the put command used to send a local file." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview whose Transfer stage displays the put command used to send a local file. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Uploading to an existing filename passes its file ID into the versioned upload path, changing the current bytes and adding a version rather than creating an independent copy. Preserve the original or use a new name before replacing it. A zero-byte CLOSE currently creates no file.

The gateway retries safe rate-limit responses and selected multipart parts, but it cannot provide durable upload resume across a disconnected session. If a close result is ambiguous, inspect the destination and version state before repeating the write.

## Expected result

The final CLOSE succeeds, the remote listing and Dosya Files show the intended name, folder, and byte size, and a downloaded verification copy matches the local source. Any overwrite is recognized as a new current version.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Connect with SFTP using a restricted key](/integrations/sftp-restricted-key)
