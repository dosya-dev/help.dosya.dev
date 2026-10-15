---
{
  "articleId": "hc-lightroom-review-gallery-status",
  "locale": "en",
  "revision": 5,
  "title": "Review Lightroom gallery status in Dosya",
  "summary": "Read the active workspace gallery row, including photo, client, selection and link state, then open the link to verify the published collection.",
  "category": "integrations",
  "articleSlug": "lightroom-review-gallery-status",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/lightroom.tsx, apps/api/src/pages/api/galleries/index.ts, apps/api/src/lib/galleries/store.ts, apps/api/src/lib/galleries/limits.ts, and apps/api/src/lib/galleries/access.ts. Production gallery data was not requested.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-lightroom-edit-gallery-options"
  ],
  "keywords": [
    "lightroom review gallery status",
    "Lightroom gallery lifecycle",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The **Galleries** table on **Integrations → Lightroom Classic** is scoped to the active Dosya workspace. It is a read-only status view; publishing and gallery edits remain in Lightroom Classic.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14.webp" alt="Four-step workflow for choosing the active workspace, checking the gallery photo count, interpreting link status, and testing the signed-out gallery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for choosing the active workspace, checking the gallery photo count, interpreting link status, and testing the signed-out gallery. <a class="workflow-map-full" href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-review-gallery-status-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Switch Dosya to the workspace that received the published collection, then open **Integrations → Lightroom Classic**.
2. Locate the gallery title and read the photo count beneath it. The server permits up to 10,000 registered gallery items.
3. Review the **Clients** column. With favourites enabled it shows named-client and selection totals; otherwise it reads **Selections off**.
4. Interpret **Link** exactly: **Live**, **Password protected**, **Link expired**, **Link revoked**, or **Link removed**. Revoked and expired links are not usable simply because a URL remains stored.
5. Use **Copy** only when a link exists, or choose the open icon. If clipboard access fails, Dosya reports **Could not copy the link** and tells you to copy from the address bar.
6. Open the link in a signed-out browser and compare its title and visible photos with the intended Lightroom collection before sending it to a client.

The page loads gallery API pages newest-first, up to 20 pages in the current UI. Each server page defaults to 50 rows and is capped at 100. A gallery created by another member is visible only when your role can view all shares and the gallery folder is within your allowed reach.


<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Reference for “Review Lightroom gallery status in Dosya”: Lightroom Classic integration title card with a camera aperture illustration." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Review Lightroom gallery status in Dosya”: Lightroom Classic integration title card with a camera aperture illustration. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The active workspace row shows the expected title, registered-photo count, client/selection state and current link condition. The opened public gallery matches the published collection rather than a similarly named row elsewhere.

If the card says **No galleries yet. Publish a collection from Lightroom Classic and it shows up here.**, verify both workspace and account. **Could not load your galleries. Please try again.** is a retrieval failure, not an empty-gallery result.

## Related guides

- [Publish a gallery](/integrations/lightroom-publish-gallery)
- [Edit gallery options](/integrations/lightroom-edit-gallery-options)
