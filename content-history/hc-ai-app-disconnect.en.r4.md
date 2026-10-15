---
{
  "articleId": "hc-ai-app-disconnect",
  "locale": "en",
  "revision": 4,
  "title": "Disconnect an AI app",
  "summary": "Remove a saved AI application grant, confirm the app can no longer read the workspace, and understand that prior copies remain outside Dosya.",
  "category": "integrations",
  "articleSlug": "disconnect-ai-app",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-ai-app-connect",
    "hc-sessions"
  ],
  "keywords": [
    "disconnect AI app",
    "revoke app access",
    "connected apps",
    "cloud storage"
  ]
}
---
Disconnect the exact application and workspace grant when the integration is no longer trusted or needed.

Disconnecting removes the saved Dosya grant for that client. It cannot erase files or data the external application copied before access was revoked.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" alt="Four-step interface map for disconnect an ai app, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: disconnect an ai app

1. Open Profile → Connected AI apps.
2. Match the client and workspace.
3. Select Disconnect on the exact row.
4. Wait for the row to disappear.
5. Retry a harmless app request and confirm denial.
6. Review sessions and other credentials separately.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya credential restriction controls used to limit a technical client to the required workspace, permission and protocol." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>Use a separate least-privilege credential for each client. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After the connection row disappears, retry one harmless request from the app and confirm it must authorize again or receives an access denial.

## Expected result

The disconnect an ai app workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Review sessions](/account/sessions)
