---
{
  "articleId": "hc-extension-page-permission-denied",
  "locale": "en",
  "revision": 5,
  "title": "Resolve a denied page permission",
  "summary": "Distinguish an unsupported page from blocked image hosts, review every origin in the permission banner, and safely retry the matching failed rows.",
  "category": "extension",
  "articleSlug": "extension-page-permission-denied",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/lib/permissions.ts, apps/extension/src/lib/capture/capture.ts, apps/extension/src/entrypoints/page.content.ts, apps/extension/src/entrypoints/popup/components/PermissionBanner.tsx, apps/extension/src/entrypoints/background.ts, apps/extension/wxt.config.ts. Production behavior for “Resolve a denied page permission” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension page permission denied",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
Page capture failure and blocked image access are different conditions. Only the blocked HTTP or HTTPS image flow offers an origin permission request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" alt="Four panels show reading the failure, reviewing every blocked host named in the banner, allowing that complete host list, and verifying the retried images." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Separate unsupported pages from blocked images, then review the complete host list before the popup requests all displayed HTTP origins together. <a class="workflow-map-full" href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read the failed row or notification. **This page cannot be captured** means the current browser or internal page cannot supply content to the extension.
2. For that restricted-page message, move to an ordinary HTTP or HTTPS page if appropriate. Changing general site-access settings does not make browser-owned pages capturable.
3. When a right-click image save is blocked, reopen the popup and find **A site blocked saving an image. Allow dosya to read images from `<hosts>`?** The banner can name several stored hosts separated by commas.
4. Confirm every host displayed belongs to an image you intended to save. **Allow** requests all origins currently named in the banner as one browser permission operation; **Not now** dismisses that complete stored list and leaves its rows failed.
5. After permission is granted, let the extension retry blocked rows whose image origins match that approved list. Do not reload the page or grant all-sites access manually unless the browser explicitly requires recovery.
6. Open the resulting completed row and verify the expected image. A `data:`, `blob:`, or extension URL cannot receive this HTTP-origin permission prompt.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Dosya extension authorization screen listing save capabilities and excluded account actions." width="448" height="554" loading="lazy" decoding="async" /></a><figcaption>Account authorization is separate from the optional site-origin permission requested after a blocked image fetch. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The displayed HTTP(S) origin list is requested only after the user selects **Allow**, and matching rows can retry. An unsupported browser page remains identified by **This page cannot be captured**.

The installed extension already has `activeTab`, scripting, and Dosya API/app host access. Optional all-sites access is not requested during installation.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
