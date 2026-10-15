---
{
  "articleId": "hc-mobile-file-remove-local-copy",
  "locale": "en",
  "revision": 5,
  "title": "Remove an unwanted mobile download safely",
  "summary": "Clear mobile cached file bytes safely, understand that the control affects the whole cache, and distinguish app cache removal from Gallery or Files copies.",
  "category": "files",
  "articleSlug": "mobile-file-remove-local-copy",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/(tabs)/settings.tsx, apps/mobile/src/files/cacheControl.ts, apps/mobile/src/files/fileCache.ts, apps/mobile/src/files/cachePolicy.ts, apps/mobile/src/upload/store.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile file remove local copy",
    "Mobile file handling details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The mobile app does not expose a per-file **Remove local copy** action. Its supported control is **Settings** → **Storage** → **Storage used by cache** → **Clear**, which clears reconstructible app caches together.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14.webp" alt="Cache-removal workflow showing Storage used by cache, a preflight with no queued, uploading, staged, or retryable error rows, Clear, Cache cleared, and cloud verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Cache-removal workflow: check **Storage used by cache**, finish or resolve every retryable upload row, tap **Clear**, confirm **Cache cleared**, and reopen the cloud file. <a class="workflow-map-full" href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-file-remove-local-copy-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

This action does not remove copies you explicitly saved to Android Downloads, an SD card, iOS Files, Photos, or Gallery. Those live outside Dosya’s private cache and must be deleted in the corresponding system app.

## Steps

1. Open **Settings** and find **Storage used by cache** under **Storage**.
2. Read the measured cache size; it includes thumbnails, opened files, temporary copies, Live Photo extraction data, and decrypted Vault cache.
3. Finish or resolve every `queued`, `uploading`, staged, or retryable `error` upload row before clearing. Dosya refuses active transfers, but an error row alone does not block the action.
4. Tap **Clear** and wait for **Cache cleared** instead of leaving while the button says **Clearing…**.
5. Confirm that the measured value falls; clearing is best-effort, so a component that the operating system will not remove can leave some bytes.
6. Reopen an unrestricted cloud file and confirm it downloads again while the server copy remains unchanged.

### What is protected during clearing

An unfinished upload row can point to the only staged copy of a file shared in from another app. If any item is currently `queued` or `uploading`, clearing stops with **An upload is in progress. Wait for it to finish, then clear the cache.**

The general file-cache sweep receives the URIs of non-done rows, but the earlier Live Photo, transient-byte, and Vault sweeps do not use that keep set. A staged or retryable error source in one of those areas can be deleted even though its row remains. Finish the upload, remove the failed row after preserving its original elsewhere, or otherwise make sure no retryable staged/error row depends on Dosya’s cache before tapping **Clear**. Each sweep is best-effort, and one failure does not stop the later steps.

### What is irreversible

Cached downloads can be fetched from the server again. The cloud file, comments, versions, share links, and workspace membership are not changed. Deleting an external Files/Downloads/Gallery copy is separate and may be irreversible outside that app’s trash policy.

## Expected result

Dosya’s reusable and temporary cached bytes are removed wherever possible, and cloud files remain available. Because the preflight left no retryable staged or error row dependent on cache storage, no pending source is lost. Explicit device exports stay in their system destinations until removed there.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Download a file on mobile](/files/mobile-download-file)
