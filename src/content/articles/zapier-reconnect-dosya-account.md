---
{
  "articleId": "hc-zapier-reconnect-dosya-account",
  "locale": "en",
  "revision": 5,
  "title": "Reconnect Dosya in Zapier",
  "summary": "Reconnect Zapier to Dosya with a current full-scope, unanchored API key, then verify workspace access before replaying failed automation runs.",
  "category": "integrations",
  "articleSlug": "zapier-reconnect-dosya-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/zapier/src/authentication.js, apps/zapier/src/middleware.js, apps/zapier/src/dropdowns/workspace.js, apps/zapier/test/authentication.test.js. Production behavior for “Reconnect Dosya in Zapier” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-zapier-troubleshoot"
  ],
  "keywords": [
    "zapier reconnect dosya account",
    "Zapier workflow reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya converts an API `401` into Zapier’s reconnect-required error. Recovery requires a replacement API key; reconnecting with a read, upload, or folder-anchored key will connect incompletely or fail when the Zap subscribes or calls REST.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14.webp" alt="Four panels show listing affected Zaps, creating a full unanchored workspace key, resolving the connection test, and retesting every Zap before revocation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show listing affected Zaps, creating a full unanchored workspace key, resolving the connection test, and retesting every Zap before revocation. <a class="workflow-map-full" href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/zapier-reconnect-dosya-account-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the affected Zapier connection and record which Zaps use it. In Dosya, open `https://app.dosya.dev/profile/api` under the intended account.
2. Create a new key with **full** scope. Do not choose a folder anchor; folder-anchored credentials work only with WebDAV or S3 and the Zapier integration uses the REST API.
3. If access must be limited, pin the key to the single workspace the Zaps need. Copy the secret at creation and store it in Zapier’s **dosya API key** field; do not place it in a Zap input.
4. Run the connection test. A non-full key reports **This key has “<scope>” scope… Create a full-scope key and reconnect.** An anchored key tells you to create an unanchored full-scope key.
5. Retest each trigger’s workspace dropdown and one read-only lookup before enabling writes. A pinned key should expose the intended workspace and refuse unrelated ones.
6. After all dependent Zaps use the new connection, revoke the old key in Dosya. Then monitor the first live event or controlled action and preserve any status other than success.

The integration labels the connection with the Dosya user email returned by `/api/me`. Treat that label as an account check, then use the workspace dropdown or a pinned-key refusal to verify actual workspace scope.

<figure class="help-screenshot"><a href="/screenshots/zapier-integration-overview-2026-10-13.webp"><img src="/screenshots/zapier-integration-overview-2026-10-13.webp" alt="Reference for “Reconnect Dosya in Zapier”: Dosya Zapier integration overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Reconnect Dosya in Zapier”: Dosya Zapier integration overview page. <a href="/screenshots/zapier-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Zapier authenticates as the intended Dosya account with a full-scope key and can reach the chosen workspace. Existing Zaps have been retested before the old key is revoked, so the credential rotation does not silently strand a webhook or write step.

## Related guides

- [Connect Dosya to Zapier](/integrations/zapier)
- [Troubleshoot Zapier](/troubleshooting/zapier)
