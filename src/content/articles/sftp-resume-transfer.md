---
{
  "articleId": "hc-sftp-resume-transfer",
  "locale": "en",
  "revision": 5,
  "title": "Resume an interrupted SFTP transfer",
  "summary": "Resume unchanged SFTP downloads with offset reads; restart uploads from byte zero to avoid missing-prefix corruption and verify complete bytes.",
  "category": "integrations",
  "articleSlug": "sftp-resume-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against apps/web/src/pages/integrations/sftp.tsx; apps/web/src/lib/integrations.ts; apps/web/src/components/api-keys/create-key-dialog.tsx; src/pages/developer/sftp.astro; apps/ftp-server/src/sftp.ts; apps/ftp-server/src/api.ts; apps/ftp-server/src/vfs.ts; apps/ftp-server/src/config.ts; apps/ftp-server/src/access.ts; apps/ftp-server/src/memory-limit.ts; apps/ftp-server/src/streaming-writer.ts; apps/ftp-server/dosya-sftp.service; apps/api/src/middleware.ts; apps/api/src/middleware.sftp-metering.unit.test.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/lib/upload/open.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/pages/api/files/[id]/index.ts; apps/api/src/lib/folder-trash.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/ftp-server/src/sftp.unit.test.ts; apps/ftp-server/src/sftp.write-size-limit.unit.test.ts; apps/ftp-server/src/streaming-writer.unit.test.ts; apps/ftp-server/src/sftp.stale-read.unit.test.ts; apps/api/src/pages/api/files/[id]/download.ts; apps/api/src/lib/usage/enforce.ts. Grant-time full-source-size egress accounting reviewed with getFileDownloadUrl/openRangeReader in apps/ftp-server/src/api.ts. Offset-download semantics derived from READ; unsupported upload-resume derived from empty write OPEN and CLOSE assembly. Process map replaces misleading inherited diagram. No live production transfer test. Official references: https://man.openbsd.org/sftp.1; https://man.openbsd.org/ssh_config.5.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp resume transfer",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**Resume a download only when your partial local file is the unchanged beginning of the current remote file. Restart an interrupted upload from byte zero.** Dosya's SFTP server supports offset reads, but its write handle starts with an empty buffer on every OPEN; a client’s upload Resume option cannot safely reconstruct the existing prefix.

This distinction matters even if your client offers both **Resume** and **Overwrite**. A general SFTP-client capability does not establish that the connected storage server supports it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-resume-transfer-process-2026-10-14.webp" data-light-href="/screenshots/sftp-resume-transfer-process-2026-10-14.webp" data-dark-href="/screenshots/sftp-resume-transfer-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-resume-transfer-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-resume-transfer-process-2026-10-14.webp" alt="Interrupted SFTP decision map: distinguish download from upload, verify an unchanged download prefix, reget the local partial, and compare complete bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Download resume requires unchanged source bytes; upload recovery sends the complete original from offset zero. <a class="workflow-map-full" href="/screenshots/sftp-resume-transfer-process-2026-10-14.webp" data-light-href="/screenshots/sftp-resume-transfer-process-2026-10-14.webp" data-dark-href="/screenshots/sftp-resume-transfer-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Decide whether to resume

| Interrupted direction | Safe recovery |
| --- | --- |
| Download from Dosya to your computer | Use an offset-capable client, such as OpenSSH `reget`, only if the remote file and local prefix have not changed. |
| Upload from your computer to Dosya | Disable Resume/Append and send the whole original again, ideally under a unique test/recovery filename. |
| Direction or partial identity is uncertain | Keep a copy of the local partial, then start a clean transfer to a different path. |

For a resumed download, the client normally starts reading at the partial local file's length. The server accepts READ requests with a byte offset and returns EOF when that offset reaches the remote size. It does not compare your partial bytes with the remote prefix, and it does not negotiate a locked snapshot across disconnected sessions. Identical names or sizes alone do not prove unchanged content.

## Steps: resume an unchanged download with OpenSSH

1. Retain the interrupted file at its existing local path. Confirm which workspace, remote folder and filename produced it. Do not rename another file to masquerade as that partial.
2. Reconnect using your email/API-key credentials and the trusted SSH host key:

```sh
sftp -P 2222 -o User=you@example.com -o PreferredAuthentications=password -o PubkeyAuthentication=no sftp.dosya.dev
```

3. At the prompt, enter the same remote workspace/folder. Compare `ls -l` information with the original transfer: a smaller source, a changed version or a different file requires a clean download. If another member or integration could have replaced it, use `get` to a new local path instead.
4. For an unchanged source and its genuine partial, run:

```text
sftp> cd "My Workspace"
sftp> reget source.bin ./source.partial.bin
```

Replace both filenames with your real paths. OpenSSH's [sftp manual](https://man.openbsd.org/sftp.1) documents `reget` as resumed download and warns that changed existing content can corrupt the result. Use your installed client's manual to check that it supports this command. Do not substitute `reput`, which resumes an upload.
5. After completion, compare the final byte count and a full SHA-256 against a trusted original or independently downloaded reference. A resumed download can reach the expected size while containing a mismatched prefix.

On macOS, `shasum -a 256 source.partial.bin source.reference.bin` compares reported hashes. On Windows PowerShell, use `Get-FileHash -Algorithm SHA256` for each local copy. Matching SHA-256 values confirm matching complete bytes; a filename comparison does not.

## Expected result

A resumed download has the complete original byte count and SHA-256. A restarted upload appears as a complete cloud file after its final close succeeds, without relying on a prior server-side partial.

## Harmless download-resume test

Use a disposable remote sample whose original bytes you already have locally, with a new name and no concurrent edits. Avoid sensitive or irreplaceable files. Download it to `resume-check.partial.bin`, interrupt the client after some bytes arrive, and leave that local partial in place. Reconnect to the same source and `reget` into that exact partial path.

Check the remote/source size, final local size and SHA-256 against your original. If the client removed the partial or completed before the interruption, there is no partial to resume; repeat only with a sufficiently large harmless sample. This test validates that client's download path without creating a production upload-resume claim. No live protocol test was performed while writing this guide.

## Recover an interrupted upload

The gateway collects write chunks per connection and begins its Dosya upload commit at **CLOSE**. It does not expose the buffered chunks as a persistent remote partial before that commit. Losing the connection before CLOSE therefore provides no saved prefix to resume. If connection loss occurs during or after CLOSE, the backend operation may already have committed; inspect **Files**, size and downloaded bytes before deciding the upload failed.

Each new write OPEN starts from empty chunks, even when the filename already exists. Append, truncate and exclusive-create flags are not a guarantee of preserved prior bytes or collision protection in this implementation. For small uploads, unsent gaps can become zero-filled bytes during assembly; larger multipart assembly rejects non-contiguous gaps. Therefore an offset-only resumed upload can fail or replace an existing file with corrupt content. Avoid **Resume**, **Append**, `reput`, `put -a` and the client's automatic upload-resume mode.

To recover, retain your complete local original. Choose a new destination filename, reconnect, and use a normal `put` that sends the entire file from offset zero. Wait for the close result, then download the completed cloud copy into another local path and compare its full bytes/hash. Only after verification should you organize or intentionally replace the existing destination.

If the same cloud filename already exists, normal full upload uses Dosya's replacement/version path. Previous versions are retention-limited: the default count is 10 and free-owner older versions are subject to a seven-day sweep. An overwrite is not an indefinite backup guarantee. Client `rm`/`rmdir` operations delete cloud content into Trash when allowed and revoke related share links; do not remove a known-good remote original to make resume easier. Permanent purge loses the stored content irreversibly.

## Limits, timing and errors

The shipped SFTP gateway allows uploads up to **352 MiB**, while storage availability, workspace size/file-type policy or explicit key/role limits may be stricter. Uploading only the remaining suffix does not evade the ceiling: the highest written offset participates in the size check. Ordinary downloads use offset reads and, at 64 MiB or above, bounded range fetching rather than one whole-file read. Offset resume can reduce the bytes retransmitted to your local client, but each new or renewed download grant is accounted at the full source-file size. Reopening a download requests a new grant; refreshing an expired ranged-download URL can request another. Resume therefore does not guarantee that your egress allowance is charged only for the remaining suffix.

A final-close pause is expected because cloud storage transfer starts at that stage; this is not a persisted SFTP partial waiting for Resume. Wait for success or the explicit failure and then inspect the destination. There is no guaranteed completion duration.

| Error or suspicious result | Next action |
| --- | --- |
| **no such file** / **no such file or directory** | Recheck the remote workspace and path; determine whether the source was moved or removed. |
| **handle is not open for reading** or **unknown or already-closed file handle** | Reconnect with a fresh download handle; a disconnected handle cannot be reused. |
| **write past the … MB per-file limit** | Send the full file through a suitable alternative uploader; repeated offset retries cannot raise the cap. |
| **upload finished with … bytes of non-contiguous data still parked** | Restart upload from offset zero; the client left a missing range. |
| **close failed: API …** | Inspect the API status/policy detail and Files. A progress percentage is not a commit receipt. |
| Correct size but different hash | Preserve the suspect copy, then perform a fresh full download from a confirmed source into a new path. |

A key/role change may take up to 60 seconds to leave the corresponding SFTP cache. Permissions are checked again when an upload closes; a revoked destination can refuse final commit even after bytes were accepted. Fix access or throttling before restarting, and use a dedicated SFTP key without a folder anchor or allowed-IP restriction.

## Related guides

- [SFTP connection, trust and credentials](/integrations/sftp-connect)
- [File versions and recovery](/files/version-history)
