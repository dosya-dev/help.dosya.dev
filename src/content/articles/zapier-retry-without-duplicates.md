---
{
  "articleId": "hc-zapier-retry-without-duplicates",
  "locale": "en",
  "revision": 5,
  "title": "Retry a Zap without duplicate side effects",
  "summary": "Check Dosya after an ambiguous Zapier failure, identify idempotent upload retries, and avoid replaying actions that can create duplicate links.",
  "category": "integrations",
  "articleSlug": "zapier-retry-without-duplicates",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/lib/files.js, apps/zapier/src/creates/upload-file.js, apps/zapier/src/creates/create-share-link.js, apps/api/src/pages/api/upload/file.ts, apps/zapier/test/acceptance.dedupe.test.js. Production behavior for “Retry a Zap without duplicate side effects” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-zapier-troubleshoot"
  ],
  "keywords": [
    "zapier retry without duplicates",
    "Zapier workflow reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A failed Zapier task does not always mean Dosya rejected the write. If the network failed after acceptance, replay can duplicate a non-idempotent action. The safe decision depends on the specific Dosya operation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14.webp" alt="Four panels show capturing the failed run, searching for an existing result, replaying the same idempotent upload run, and avoiding duplicate share links." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show capturing the failed run, searching for an existing result, replaying the same idempotent upload run, and avoiding duplicate share links. <a class="workflow-map-full" href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-retry-without-duplicates-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the failed run and capture its run ID, Dosya step, input file or target ID, time, status, and redacted error. Do not retry the whole Zap yet.
2. Check the destination workspace for the expected result. Match stable file ID, name, target folder, or returned share URL—not name alone—within the failed run’s time window.
3. For **Upload File**, a replay of the same Zap run is protected by a deterministic UUID `Idempotency-Key`; the one-shot upload route reclaims the same result instead of creating another version.
4. Do not apply that promise to a fresh Zap run or **Create Share Link**. Share creation has no equivalent Zap-run idempotency guard, so an ambiguous first request may already have made an active link.
5. If the result already exists, continue downstream with its recorded ID or URL rather than replaying creation. If it does not exist and the error proves rejection, retry only the failed step.
6. After recovery, verify one intended artifact and inspect for extras. Revoke any unintended share link; do not delete a duplicate file until confirming no later step references its ID.

The direct **Upload File** action is limited to 50 MB; larger inputs fail with guidance to use **Upload File From URL**. A size refusal is definitive and safe to correct, while a timeout after a write remains ambiguous.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Retry a Zap without duplicate side effects”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry a Zap without duplicate side effects”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The recovered workflow produces one intended side effect. Same-run Upload File retries reuse their idempotency key, while ambiguous share creation and fresh-run writes are checked in Dosya before any manual replay.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
