---
{
  "articleId": "hc-sftp-retry-interrupted-transfer",
  "locale": "en",
  "revision": 5,
  "title": "Retry an interrupted SFTP transfer",
  "summary": "Recover an interrupted SFTP transfer by resuming only an unchanged download, restarting uploads from byte zero, and verifying complete bytes.",
  "category": "integrations",
  "articleSlug": "sftp-retry-interrupted-transfer",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/ftp-server/src/sftp.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/streaming-writer.ts, apps/ftp-server/src/sftp.stale-read.unit.test.ts, packages/test-harness/tests/sftp.int.test.ts, and apps/help/src/content/articles/sftp-resume-transfer.md. No production transfer was interrupted.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp retry interrupted transfer",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Download recovery and upload recovery are different on the current SFTP gateway. Reads accept offsets, so a client can resume an unchanged remote download. Write handles start empty and are committed only at CLOSE; the server does not reload an existing prefix, so upload Resume, Append, `reput`, and `put -a` can produce missing-prefix bytes and must not be used.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" alt="Four-step workflow for classifying an interrupted transfer, resuming only an unchanged download, restarting an incomplete upload, and verifying the CLOSE result and bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for classifying an interrupted transfer, resuming only an unchanged download, restarting an incomplete upload, and verifying the CLOSE result and bytes. <a class="workflow-map-full" href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-retry-interrupted-transfer-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

An interrupted upload that never reached a successful CLOSE normally leaves no committed remote file. If the client lost the response after the commit, a complete file or new version may already exist; inspect Dosya before replaying to avoid an unnecessary replacement.

## Steps

1. Record whether the failed operation was upload or download, the source and destination paths, the last client message, and the sizes currently visible on both sides. Do not press a generic **Resume** button yet.
2. For a download, confirm the remote name, byte size, and version have not changed since the partial local copy began. If any value changed, delete or quarantine the partial local file and restart from byte zero.
3. Resume an unchanged download with the client's offset-read feature, then compare the final size and a local checksum with a trusted source. Dosya serves large reads from a bounded range cache once the file is at least 64 MiB.
4. For an upload, inspect the target folder in Dosya **Files** and relist it over SFTP. Keep any already complete destination; otherwise restart the entire local file from offset zero under a unique temporary name.
5. Wait for the restarted upload's final CLOSE response, then compare name and size in the remote listing and download it back for a checksum check. Only after verification should you replace or remove another copy.
6. If the retry returns API 429, honor the reported backoff; if CLOSE is ambiguous after a network or 5xx error, inspect the destination again before another write. Preserve both files when their contents differ.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview with the Transfer card showing put and get, the two directions classified before recovery." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview with the Transfer card showing put and get, the two directions classified before recovery. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A complete upload to an existing name follows Dosya's versioned write path and can replace current bytes while retaining a prior version under retention rules. Restarting to a new name avoids that irreversible current-version change until verification is complete. Empty uploads are not committed by the current gateway.

The deployed upload ceiling is 352 MiB, and workspace policy, remaining storage, role limits, or credential limits can refuse a smaller file. A failure above the active cap requires another supported upload path rather than offset tricks.

## Expected result

An unchanged download resumes to a complete verified local file, or an upload restarts from byte zero and commits exactly one verified remote copy. No partial prefix is treated as a valid Dosya upload.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
