---
{
  "articleId": "hc-zapier-inspect-failed-run",
  "locale": "en",
  "revision": 5,
  "title": "Inspect a failed Zapier run",
  "summary": "Inspect a failed Zapier task, classify Dosya authentication, scope, throttling, or input errors, and preserve enough evidence for a safe retry.",
  "category": "integrations",
  "articleSlug": "zapier-inspect-failed-run",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/middleware.js, apps/zapier/src/authentication.js, apps/zapier/src/lib/files.js, apps/zapier/test/middleware.test.js. Production behavior for “Inspect a failed Zapier run” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-zapier-troubleshoot"
  ],
  "keywords": [
    "zapier inspect failed run",
    "Zapier workflow reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A Dosya step keeps the API’s error text and HTTP status for most failures. Authentication, anchored-key, and rate-limit responses are translated into distinct Zapier errors, so the response class determines the next action.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14.webp" alt="Four panels show opening the first failed Dosya step, recording redacted run evidence, treating a 401 as reconnect-required, and checking Dosya before replay." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show opening the first failed Dosya step, recording redacted run evidence, treating a 401 as reconnect-required, and checking Dosya before replay. <a class="workflow-map-full" href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-inspect-failed-run-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the failed Zap execution in Zapier history and select the first failed Dosya step, not a later step that was skipped because of it.
2. Record the Zap name, run ID, step label, time, HTTP status, and redacted Dosya response. Never copy the `dos_…` API key, Authorization header, access code, or recipient secret.
3. Classify `401` as a connection failure. The integration raises Zapier’s reconnect-required error; replace the credential with a current full-scope, unanchored key.
4. For `403`, read the exact message. A folder-anchored key produces the corrective text **Create a key with no folder anchor and full scope, then reconnect.** A read or upload key is also insufficient for webhook triggers.
5. For `429`, retain the `Retry-After` value. Dosya raises a throttled error using that delay, or 60 seconds when the response has no usable header.
6. For other statuses, fix the preserved Dosya message or mapped input before replay. Check Dosya for an already-created result after a timeout, because some actions may have succeeded before Zapier lost the response.

Credential middleware attaches the key only to the exact Dosya API origin and disables redirect following on authenticated requests. A third-party file-source failure therefore remains that provider’s error rather than being mislabeled as a Dosya reconnect problem.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Inspect a failed Zapier run”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Inspect a failed Zapier run”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The failed run is tied to one step, request class, and nonsecret evidence set. Authentication failures lead to reconnection, throttling waits for the supplied delay, input or permission failures are corrected, and ambiguous writes are checked before replay.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
