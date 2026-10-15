---
{
  "articleId": "hc-lightroom-review-connections",
  "locale": "en",
  "revision": 5,
  "title": "Review connected Lightroom catalogs",
  "summary": "Review every Lightroom catalog connection by computer, connected age, and last use; identify stale entries before revoking the matching catalog key.",
  "category": "integrations",
  "articleSlug": "lightroom-review-connections",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/lightroom.tsx, apps/api/src/pages/api/me/api-keys/index.ts, and apps/api/src/lib/lightroom/connect.ts. The account-wide table was not opened in production.",
  "related": [
    "hc-api-key",
    "hc-choose-app"
  ],
  "keywords": [
    "lightroom review connections",
    "Lightroom Classic setup",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The web page **Integrations → Lightroom Classic** lists catalog credentials created by the plug-in connect flow. This table is account-wide: changing the active workspace affects the gallery table below it, not which Lightroom connection rows appear.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-review-connections-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-review-connections-help-workflow-2026-10-14.webp" alt="Four-step workflow for matching a Lightroom computer, reading connection age and Last used, and recording the exact stale catalog row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for matching a Lightroom computer, reading connection age and Last used, and recording the exact stale catalog row. <a class="workflow-map-full" href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-review-connections-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to the Dosya account used during Lightroom approval and open **Integrations → Lightroom Classic**.
2. Under **Your Lightroom connections**, match each **Computer** name to a Lightroom Classic installation you still control. The displayed name comes from the key label after `Lightroom Classic:`.
3. Read the relative connection age beneath the computer name, then distinguish key creation from catalog use. It is the API key creation time, not the catalog file’s date.
4. Compare **Last used** with recent publishing activity. **Never** means that stored connection has no recorded authenticated use yet.
5. If the table says **No catalog is connected yet. Follow the steps below to connect one.**, confirm you opened the correct Dosya account before starting another connection.
6. Record the exact stale computer row before using its actions menu; multiple catalog connections can have similar device names and revocation is immediate.

A new Lightroom connection requires an unconfined workspace membership with `upload_files`, `create_share_links` and `create_folders`. The approval flow also creates an API key and therefore remains subject to the account’s API-key cap.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Review connected Lightroom catalogs”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review connected Lightroom catalogs”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Every active Lightroom installation has one recognizable computer row with plausible connected and last-used times. Unknown, duplicate or obsolete rows are identified for a deliberate revoke instead of being confused with galleries in the active workspace.

**Could not load your connections. Please try again.** means the key list request failed; it does not prove that every catalog is disconnected. Reload while signed in and preserve the row names before changing anything.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
