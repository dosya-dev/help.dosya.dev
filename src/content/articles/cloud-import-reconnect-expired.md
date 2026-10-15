---
{
  "articleId": "hc-cloud-import-reconnect-expired",
  "locale": "en",
  "revision": 5,
  "title": "Reconnect an expired cloud import account",
  "summary": "Recover a provider connection rejected by the remote service, complete a fresh OAuth round trip, and verify the same identity can browse again.",
  "category": "integrations",
  "articleSlug": "cloud-import-reconnect-expired",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/use-cloud-browser.ts, apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/api/src/pages/api/cloud/browse.ts, apps/api/src/lib/cloud-import/tokens.ts, apps/api/src/pages/api/cloud/callback/[provider].ts. Production behavior for “Reconnect an expired cloud import account” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress"
  ],
  "keywords": [
    "cloud import reconnect expired",
    "Cloud import operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya shows the reconnect state only when browsing receives a 401 with `RECONNECT_REQUIRED`. Ordinary provider throttling instead shows a timed automatic retry, and a transient listing error offers **Retry**; neither should trigger OAuth.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Reconnect an expired cloud import account: Confirm This account needs to be reconnected before you can import. Choose Reconnect, begin a fresh provider authorization. Verify the same email appears once under Connected accounts. Browse one known item, prove the refreshed token works end to end." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Confirm This account needs to be reconnected before you can import.” and ends with “Browse one known item, prove the refreshed token works end to end.” <a class="workflow-map-full" href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-reconnect-expired-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Import files** and confirm the exact message **This account needs to be reconnected before you can import.**
2. Choose **Reconnect**, which starts the same signed OAuth flow used for a new connection.
3. At the cloud provider, select the stale Dosya row’s email, and approve read access.
4. Return to the provider page and verify **Connected accounts** shows that email once rather than assuming the callback alone succeeded.
5. Choose **Import** for that row and wait for the **Home** listing to load without the reconnect warning.
6. Browse one known remote item, then cancel the picker or run a small import to confirm the refreshed token works end to end.

Account storage upserts on the provider’s stable identity, including refreshed access and refresh tokens, so reconnecting the same provider account updates its row rather than intentionally creating a duplicate. A different provider identity creates a separate connected-account row.

## Expected result

The picker lists the reauthorized account’s root and no longer displays **Reconnect**. The connected account email remains the intended identity, and a browse or test import succeeds.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
