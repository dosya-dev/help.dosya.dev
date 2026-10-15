---
{
  "articleId": "hc-extension-session-expired",
  "locale": "en",
  "revision": 5,
  "title": "Fix an expired Save to Dosya browser session",
  "summary": "Choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving. Verify that the extension shows the expected account and destination controls.",
  "category": "extension",
  "articleSlug": "extension-session-expired",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension session expired",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
This guide covers **Fix an expired Save to Dosya browser session** in Dosya. The main action is to choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving; the decisive check is whether the extension shows the expected account and destination controls.

For the item saved after reconnecting, keep the browser profile, account, site permission and destination folder visible.

<figure class="help-screenshot"><a href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp"><img src="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" alt="Workflow for “Fix an expired Save to Dosya browser session”: choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving; the extension shows the expected account and destination controls." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Fix an expired Save to Dosya browser session”: choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving; the extension shows the expected account and destination controls. <a href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify extension sign-in or reconnect prompt.

## Steps: reconnect an expired extension session

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate extension sign-in or reconnect prompt and verify its name or identifying details.
3. Choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving.
4. Confirm that the extension shows the expected account and destination controls.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Reference for “Fix an expired Save to Dosya browser session”: Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix an expired Save to Dosya browser session”: Browser consent screen for the Save to Dosya extension. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Check the active browser profile, site permission, and Dosya session before reinstalling.

## Verify the result

After completing the steps, check the expected result: The extension shows the expected account and destination controls.

Compare the item saved after reconnecting in Dosya with the original browser content. If the item saved after reconnecting is missing or incorrect, check the browser profile, site permission, extension session and destination error.

## Expected result

The controlled workflow completes and the extension shows the expected account and destination controls.

## Troubleshooting

**The expected control is missing.** Return to the browser extension menu and Save to Dosya panel, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
