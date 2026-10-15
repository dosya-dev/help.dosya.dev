---
{
  "articleId": "hc-api-rate-limit-handling",
  "locale": "en",
  "revision": 5,
  "title": "Handle Dosya API rate limits",
  "summary": "Read Dosya rate-limit headers, honor Retry-After, add bounded jitter, and retry safely without turning a temporary 429 into a tight request loop.",
  "category": "developers",
  "articleSlug": "api-rate-limit-handling",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/middleware.ts, apps/api/src/lib/rate-limit.ts, apps/api/src/lib/usage/enforce.ts, and apps/cli/src/client.ts. Production was not load-tested.",
  "related": [
    "hc-rest-api-connect",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "api rate limit handling",
    "Developer operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Dosya enforces more than one limit. General authenticated and upload traffic is limited to 300 requests per minute per user, listing traffic to 600 per minute, and authenticated IP traffic to 600 per minute outside the desktop-sync exception. An API key may also have its own requests-per-minute allowance.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" alt="Four workflow panels show inspecting rate-limit headers, reading Retry-After, retrying only a safe operation, and capping three waits at 60 seconds." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers inspecting rate-limit headers, reading Retry-After, retrying only a safe operation, and capping three waits at 60 seconds. <a class="workflow-map-full" href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-rate-limit-handling-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Make the caller preserve response status and headers; a JSON parser alone loses the retry signal.
- Decide whether the request is safe to replay. Reads are usually safe; mutations need a route-specific receipt or idempotency contract.
- Keep concurrency below the documented limit instead of relying on retries as flow control.

## Steps

1. Inspect every response for `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`. The general limiter also includes those headers on successful requests.
2. When status is 429, read `Retry-After` before parsing the body. A per-key refusal can say `This API key has exceeded its requests-per-minute limit` and is only guaranteed to include `Retry-After`.
3. Pause for the server delay, then add a small random jitter so parallel workers do not wake together. Cap a malformed or excessive delay according to your job deadline.
4. Retry a read or an idempotent upload after waiting. For an uncertain move, rename, trash, or other mutation, verify the remote state instead of replaying it automatically.
5. Limit the retry count. Dosya CLI uses at most three retries, a fallback sequence of 1, 3, and 8 seconds, and caps a valid `Retry-After` value at 60 seconds.
6. Record the route, status, attempt number, and wait duration without logging credentials. Reduce concurrency when 429s recur after a complete reset window.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for handle dosya api rate limits." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Handle Dosya API rate limits”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client waits instead of spinning, succeeds after capacity returns, and stops after its bounded retry budget. Automation distinguishes a key-level allowance from the broader user or IP limiter without assuming identical headers.

## Troubleshooting

**`Retry-After` is absent.** Use a conservative exponential delay with jitter; the CLI’s fallback is 1, 3, then 8 seconds.

**A mutation timed out before its status arrived.** Read the resource or receipt endpoint. Only replay when that operation documents idempotency.

**429 continues after the reset.** Lower concurrency and inspect the API key’s configured requests-per-minute allowance. A new key does not remove user- or IP-level protection.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [Inspect webhook deliveries](/developers/webhook-deliveries)
