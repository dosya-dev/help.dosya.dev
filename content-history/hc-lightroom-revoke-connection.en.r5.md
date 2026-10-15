---
{
  "articleId": "hc-lightroom-revoke-connection",
  "locale": "en",
  "revision": 5,
  "title": "Revoke a Lightroom catalog connection",
  "summary": "Revoke one Lightroom catalog key, confirm that computer is signed out immediately, and understand why its previously published galleries stay online.",
  "category": "integrations",
  "articleSlug": "lightroom-revoke-connection",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/lightroom.tsx, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/pages/api/lightroom/connection.ts, and apps/api/src/lib/lightroom/connect.ts. Production behavior for “Revoke a Lightroom catalog connection” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-api-key",
    "hc-choose-app"
  ],
  "keywords": [
    "lightroom revoke connection",
    "Lightroom Classic setup",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Revoking a Lightroom connection deletes the API key created for that computer. It signs the catalog out immediately after cache invalidation, but it does not revoke gallery links or remove files already published.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14.webp" alt="Four-step workflow for matching the Lightroom catalog row, choosing Revoke, reading its warning, and confirming Connection revoked." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for matching the Lightroom catalog row, choosing Revoke, reading its warning, and confirming Connection revoked. <a class="workflow-map-full" href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-revoke-connection-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Integrations → Lightroom Classic** in the Dosya account that approved the catalog.
2. Under **Your Lightroom connections**, match the **Computer**, **Connected** and **Last used** values to the installation that must stop publishing.
3. Open that row’s actions menu and choose **Revoke**.
4. Read **Revoke _computer_?** and its warning: **Lightroom Classic on that computer is signed out and can no longer publish. Galleries already published stay online.**
5. Choose the destructive **Revoke** button once and wait for **Connection revoked — That catalog is signed out of dosya.** The row should disappear without a page reload.
6. On the affected computer, run a harmless status refresh. If that catalog should publish again, reconnect through browser approval. The revoked key cannot be restored.

This action removes one API key, not the Lightroom catalog, collection, gallery, share URL or stored photo. A reconnect creates a new credential and still requires the workspace permissions for uploads, folders and share links.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Revoke a Lightroom catalog connection”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Revoke a Lightroom catalog connection”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected connection row disappears and that Lightroom installation can no longer authenticate. Previously published galleries remain reachable according to their own link expiry, password and revocation settings.

**Revoke failed** leaves the row in place and includes the server message. Do not assume access ended until the success toast appears or the key is absent from **Profile → API keys**.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
