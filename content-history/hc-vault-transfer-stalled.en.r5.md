---
{
  "articleId": "hc-vault-transfer-stalled",
  "locale": "en",
  "revision": 5,
  "title": "Diagnose a stalled Vault transfer",
  "summary": "Diagnose Vault uploads and downloads that appear stalled, account for in-memory processing and sequential files, and retry without duplicating success.",
  "category": "files",
  "articleSlug": "vault-transfer-stalled",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/stores/e2ee.ts, apps/web/src/components/e2ee/unlock-gate.tsx, apps/web/src/components/e2ee/encrypted-browser.tsx, and packages/e2ee-client/src/file.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-vault-recovery",
    "hc-vault-unlock-troubleshooting"
  ],
  "keywords": [
    "vault transfer stalled",
    "Vault recovery and diagnostics",
    "Dosya help",
    "cloud storage"
  ]
}
---
The current Vault UI exposes one shared busy state rather than per-file progress. It reads each selected upload into browser memory, encrypts and uploads files sequentially, refreshes the folder, then shows one success or failure toast.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for waiting on the Vault busy state, checking connectivity and storage, reading the exact error, and retrying one file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map reflects the current single-busy-state transfer behavior rather than a nonexistent queue. <a class="workflow-map-full" href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-transfer-stalled-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Keep the Vault tab open while the busy skeleton is visible. Locking, reloading, or clearing site data drops the in-memory operation and provides no resume queue.
2. For a multi-file upload, allow earlier files to finish before assuming the last one is stuck. `uploadFiles` processes the selected list one file at a time and reports success only after a folder refresh.
3. Check browser connectivity, active workspace storage, upload policy, and that the Space is associated with a live workspace. On a scope-required refusal, the web store attaches the Space to the active workspace and retries once.
4. Read the red Vault error and toast. Upload failures use **Upload failed** with a **Report** action; download failures use **Download failed**. The fallback messages are `Could not upload file.` and `Could not download file.`
5. Refresh the folder before retrying. A prior operation may have committed even if the final refresh or toast failed, so confirm whether the filename already exists.
6. Retry one small file or download at a time. Vault chunks plaintext with a 4 MiB maximum chunk size, but the web store still holds the selected file or reconstructed download in memory.

**Concurrency recovery.** The encrypted client can re-seal and retry a file commit up to five times when the workspace key rotates. A hot workspace that continues changing can eventually return an error instead of waiting forever.

**No background guarantee.** The browser Vault flow does not promise continued transfer after the tab closes or the device sleeps. For large files, keep the browser active and avoid memory pressure from many simultaneous tabs.

## Expected result

The retried item either appears once in the refreshed encrypted folder or produces a specific visible error that can be reported. You do not rely on a progress percentage or resumable queue the current Vault UI does not provide.

## Related guides

- [Recover and reopen a Vault identity](/files/vault-recovery)
- [Fix passphrase and recovery-key unlock problems](/troubleshooting/vault-unlock)
