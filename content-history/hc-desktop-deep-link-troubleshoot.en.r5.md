---
{
  "articleId": "hc-desktop-deep-link-troubleshoot",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot a desktop deep link",
  "summary": "Diagnose Dosya authentication and sync-folder links across macOS, Windows, and Linux while rejecting unsupported, expired, or unsafe destinations.",
  "category": "desktop",
  "articleSlug": "desktop-deep-link-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against apps/desktop/src/main/deep-link.ts, apps/desktop/src/main/deep-link-path.ts, apps/desktop/src/main/index.ts, apps/desktop/build/installer.nsh, and apps/desktop/tests/e2e/deep-link-protocol.spec.ts. Production OAuth callbacks and OS protocol registration were not exercised.",
  "related": [
    "hc-desktop-system-tray",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop deep link troubleshoot",
    "Desktop navigation and notifications",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop client accepts two `dosya://` destinations: an authentication callback and a local sync-folder request. Other paths do not have a browser fallback, so first identify which supported link failed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14.webp" alt="Four panels show classifying the deep link, retrying packaged OS delivery, restarting an expired callback, and validating a safe absolute sync path." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Separate protocol delivery from single-use authentication state and strict sync-path validation. <a class="workflow-map-full" href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-deep-link-troubleshoot-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Keep the full link private because an authentication callback can contain a token.
- Confirm Dosya is installed. Sign-in is required for sync activity, while the authentication callback is itself part of signing in.

## Steps

1. Classify the link as `dosya://auth/callback?token=…&state=…` or `dosya://sync?path=…`. Any other host or route is unsupported and may be ignored without opening a page.
2. If nothing launches, start Dosya once and retry. Packaged builds register the scheme; Windows additionally repairs its protocol-client registration at startup, while macOS uses `open-url` and Windows/Linux receive URL arguments.
3. For an authentication callback, restart the sign-in flow instead of replaying an old URL. The callback needs the pending single-use `state`; a missing or mismatched state is refused.
4. After a valid callback, confirm the client reaches the authenticated dashboard. The resulting session cookie is set for 30 days; do not paste the callback token into a report.
5. For a sync link, verify `path` names an existing absolute directory. The decoded value must stay within 1,000 characters and contain no control characters, NUL, or `..` path segments.
6. Retry the validated sync link and confirm Dosya opens `/sync?localPath=…`. Cold-start links wait for the renderer; malformed and unsupported links remain rejected rather than redirecting to a browser.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview reached after a valid authentication callback or before opening a supported sync-folder link." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use the resulting authenticated app state, not the browser tab, to verify a supported custom link. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

A valid callback completes the pending sign-in, while a valid sync link opens the Sync page with the checked local directory. Repeated encoding is decoded at most five times before refusal.

If the OS opens another program or does nothing after Dosya has launched once, repair or reinstall the packaged client for that operating system; there is no in-app “open in browser” recovery path.

## Related guides

- [Use the desktop system tray](/desktop/desktop-system-tray)
- [Check desktop updates](/desktop/desktop-check-updates)
