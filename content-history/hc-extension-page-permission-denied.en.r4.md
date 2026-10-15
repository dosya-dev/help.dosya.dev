---
{
  "articleId": "hc-extension-page-permission-denied",
  "locale": "en",
  "revision": 4,
  "title": "Resolve a denied page permission",
  "summary": "Open extension site-access settings, grant the minimum supported access for that site, reload it, and retry. Verify that the extension can read only the page scope needed for the requested save.",
  "category": "extension",
  "articleSlug": "extension-page-permission-denied",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

For the permitted page capture, keep the browser profile, account, site permission and destination folder visible.

<figure class="help-screenshot"><a href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp"><img src="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp" alt="Workflow for “Resolve a denied page permission”: open extension site-access settings, grant the minimum supported access for that site, reload it, and retry; the extension can read only the page scope needed for the requested save." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Resolve a denied page permission”: open extension site-access settings, grant the minimum supported access for that site, reload it, and retry; the extension can read only the page scope needed for the requested save. <a href="/screenshots/extension-page-permission-denied-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify page where capture is blocked by browser permission.

## Steps: resolve a denied page permission

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate page where capture is blocked by browser permission and verify its name or identifying details.
3. Open extension site-access settings, grant the minimum supported access for that site, reload it, and retry.
4. Confirm that the extension can read only the page scope needed for the requested save.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Reference for “Resolve a denied page permission”: Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Resolve a denied page permission”: Browser consent screen for the Save to Dosya extension. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Check the active browser profile, site permission, and Dosya session before reinstalling.

## Verify the result

After completing the steps, check the expected result: The extension can read only the page scope needed for the requested save.

Compare the permitted page capture in Dosya with the original browser content. If the permitted page capture is missing or incorrect, check the browser profile, site permission, extension session and destination error.

## Expected result

The controlled workflow completes and the extension can read only the page scope needed for the requested save.

## Troubleshooting

**The expected control is missing.** Return to the browser extension menu and Save to Dosya panel, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
