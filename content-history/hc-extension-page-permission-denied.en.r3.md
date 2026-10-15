---
{
  "articleId": "hc-extension-page-permission-denied",
  "locale": "en",
  "revision": 3,
  "title": "Resolve a denied page permission",
  "summary": "Open extension site-access settings, grant the minimum supported access for that site, reload it, and retry. Verify that the extension can read only the page scope needed for the requested save.",
  "category": "extension",
  "articleSlug": "extension-page-permission-denied",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
This guide covers **Resolve a denied page permission** in Dosya. The main action is to open extension site-access settings, grant the minimum supported access for that site, reload it, and retry; the decisive check is whether the extension can read only the page scope needed for the requested save.

Keep the browser profile, signed-in account, site permission, destination workspace, and folder in view while you work.

<figure class="help-screenshot"><a href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp"><img src="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" alt="Four-step workflow map for resolve a denied page permission, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for resolve a denied page permission: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify page where capture is blocked by browser permission.

## Steps: resolve a denied page permission

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate page where capture is blocked by browser permission and verify its name or identifying details.
3. Open extension site-access settings, grant the minimum supported access for that site, reload it, and retry.
4. Confirm that the extension can read only the page scope needed for the requested save.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Check the active browser profile, site permission, and Dosya session before reinstalling. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The extension can read only the page scope needed for the requested save.

Open the saved result in Dosya and compare it with the selected page, screenshot, or file. Check the active browser profile, site permission, extension session, destination access, and the visible extension error.

## Expected result

The controlled workflow completes and the extension can read only the page scope needed for the requested save.

## Troubleshooting

**The expected control is missing.** Return to the browser extension menu and Save to Dosya panel, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
