---
{
  "articleId": "hc-desktop-transfer-concurrency",
  "locale": "en",
  "revision": 6,
  "title": "Adjust desktop transfer concurrency",
  "summary": "Set desktop sync concurrency and bandwidth limits, understand the real worker counts, and verify throughput without overloading your computer.",
  "category": "desktop",
  "articleSlug": "desktop-transfer-concurrency",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against `apps/desktop/src/renderer/pages/SyncPage.tsx`, `apps/desktop/src/main/sync/types.ts`, `transfer-concurrency.ts`, and live semaphore updates in `index.ts` on 2026-10-14. Production behavior was not exercised for this rewrite.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-sync-modes"
  ],
  "keywords": [
    "desktop transfer concurrency",
    "advanced desktop sync",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use **Sync → Settings** to balance transfer speed against CPU, memory, disk and network use. **Max concurrent transfers** advertises a range of 1–10 and defaults to 3. Treat that range as the recommended operating range: the current save path accepts any positive number, including values above 10 and fractions. The setting changes the engine immediately after you save it; active work does not require a restart.

<figure class="help-screenshot">
  <a class="workflow-map-link" href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp">
    <picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" alt="Desktop workflow map for changing Max concurrent transfers, saving the setting, and checking live transfer progress." width="1200" height="675" loading="lazy" decoding="async" /></picture>
  </a>
  <figcaption>Set the base concurrency in Sync settings, save it, then judge the result from a real upload or download rather than the number alone. <a class="workflow-map-full" href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-transfer-concurrency-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Before you start

- Leave an important folder unchanged while testing. Use a pairing with several disposable files so more than one transfer can run.
- Note the current **Max concurrent transfers**, **Upload limit (KB/s)** and **Download limit (KB/s)** values before editing them.
- Confirm the pairing is not **Paused**, **Offline**, **Waiting**, **Needs attention** or **Needs permission**. Concurrency cannot bypass those states.
- This is a device-wide sync setting, not a workspace role or plan control. The signed-in member still needs permission to read and write the relevant cloud files.

## Steps

1. Open **Sync**, select **Settings**, and find **Max concurrent transfers**.
2. Enter a whole number from **1** through **10**, the range advertised by the numeric control. Start with the default **3**. Choose 1–2 on a constrained computer or connection; raise the value one step at a time when both device and network remain responsive. Although the current save and engine paths accept positive fractions and values above 10, those inputs are not validated as supported settings and can create surprising worker counts.
3. If bandwidth is the actual constraint, set **Upload limit (KB/s)** or **Download limit (KB/s)**. A value of **0** means unlimited, and each limit is shared across all transfers rather than granted to every file.
4. Select **Save settings**. The confirmation is **Sync settings saved**. The app stores the rate fields as bytes per second and updates the running transfer gate.
5. Return to **Overview**, choose **Sync now** for the test pairing, and watch its progress. The live row can show percentage, file or byte counts, speed and estimated time. Open **Activity** to distinguish scanning and comparison from byte transfer.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Dosya desktop Sync Activity view with timestamped operations used to assess a concurrency change." width="1100" height="800" loading="lazy" decoding="async" /></a>
  <figcaption>Activity identifies whether the pairing is comparing, scanning, uploading or downloading while you evaluate the new transfer budget. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption>
</figure>

The number is a base budget, not a promise that exactly that many network requests appear at every moment. General sync work uses the saved positive value for its transfer semaphore across pairings. Direct presigned batches first floor the value, then derive wider worker pools: standard or mixed files use `min(12, max(2, floor(setting) × 2))`, while files of **256 KiB or smaller** can use up to twice that standard count, capped at 16. At the default 3, those batch ceilings are 6 standard and 12 tiny-file workers. A single file, scanning, API throttling and bandwidth limits can all leave capacity unused.

## Expected result

After **Save settings**, a busy test cycle continues under the new device-level budget. Files reach the destination required by the pairing's mode, and the app remains usable. The app does not display a separate counter for the derived direct-upload workers, so verify completed files, speed and errors instead of trying to infer concurrency from one progress bar.

## Troubleshooting

**The value behaves unexpectedly.** Return to a whole number from 1 to 10. The control advertises that range, but the current save path does not enforce its maximum or require an integer. Do not use zero to mean unlimited here; zero has that meaning only for the two bandwidth fields.

**A higher value is slower.** Return to the previous value. Many small files, disk contention, server rate limits or a shared bandwidth cap can make extra workers unhelpful. A **Waiting** row resumes according to the server's retry timing.

**Transfers still look sequential.** Make sure several eligible files are ready at once. One large file, a scan phase, a conflict or a one-file queue cannot demonstrate parallel work.

**The settings page saved, but files failed.** Expand **N files not synced** in Overview and read the per-file reason. Concurrency does not repair permissions, storage limits, locks or an unavailable local path.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
