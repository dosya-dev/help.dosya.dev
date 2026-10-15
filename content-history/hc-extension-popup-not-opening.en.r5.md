---
{
  "articleId": "hc-extension-popup-not-opening",
  "locale": "en",
  "revision": 5,
  "title": "Fix an extension popup that will not open",
  "summary": "Restore the Save to dosya popup with browser-specific enablement checks while protecting local captures that have not finished uploading safely.",
  "category": "extension",
  "articleSlug": "extension-popup-not-opening",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against src/lib/extension-stores.ts, apps/extension/README.md, apps/extension/wxt.config.ts, apps/extension/src/entrypoints/popup/App.tsx, apps/extension/src/lib/auth/sign-in.ts. Production behavior for “Fix an extension popup that will not open” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension popup not opening",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
A popup that never renders cannot show a Dosya diagnostic. Check the installed browser target and profile first, and protect unfinished local captures before resetting the extension.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14.webp" alt="Four panels show confirming the browser profile, enabling and pinning the extension, applying Safari requirements, and protecting queued captures before reset." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Restore the popup through browser-specific controls and record context before any reset that would remove local captures. <a class="workflow-map-full" href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-popup-not-opening-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Confirm that the active browser profile contains **Save to dosya** version 0.1.3 from its published Chrome, Edge, Firefox, or Safari listing.
2. In Chrome, open the toolbar extensions menu, enable the extension, and pin it; in Edge, enable it under Extensions and pin the toolbar icon.
3. In Firefox, use version 140 or later, enable the add-on, and pin it. Chrome and Edge have no locally declared minimum version.
4. On Safari, use macOS 13 or later, open the installed containing app once, then enable **Save to dosya** under Safari Settings → Extensions.
5. Return to an ordinary tab and select the toolbar icon. A working target opens the configured 360 × 560 popup with **Save to dosya** at the top.
6. If it still does not render, record browser/version/profile details before disabling or reinstalling. Avoid a reset while the badge or prior popup indicated unfinished saves.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Dosya connection page shown after the browser extension successfully opens its sign-in flow." width="448" height="554" loading="lazy" decoding="async" /></a><figcaption>Reaching the connection page proves the installed extension can open its supported authorization flow. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The toolbar action opens the popup in the intended profile. Browser-level enablement or platform requirements explain failures without inventing an in-popup error that could not render.

Signing out clears locally queued rows and captured blobs. Already completed Dosya files remain available in the web app.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
