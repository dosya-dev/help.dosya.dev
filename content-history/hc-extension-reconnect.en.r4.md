---
{
  "articleId": "hc-extension-reconnect",
  "locale": "en",
  "revision": 4,
  "title": "Reconnect an expired extension session",
  "summary": "Choose Connect, approve the browser handoff and return, then verify that the extension displays the signed-in workspace.",
  "category": "extension",
  "articleSlug": "extension-reconnect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-extension-connect",
    "hc-extension-save"
  ],
  "keywords": [
    "extension reconnect",
    "browser extension workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to reconnect an expired extension session in the intended account or workspace.

An expired extension session should use the supported browser authorization handoff. Check the workspace shown after returning to the extension.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" alt="Four-step interface map for reconnect an expired extension session, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Save to Dosya extension in the current released Dosya client.
- Confirm the active account and workspace, then identify an extension showing a sign-in request.

## Steps: reconnect an expired extension session

1. Open Save to Dosya extension and confirm the active workspace.
2. Select an extension showing a sign-in request and check its name or identifying details.
3. Choose Connect, approve the browser handoff and return.
4. Verify that the extension displays the signed-in workspace.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to Dosya extension showing capture type and destination controls." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Use a non-sensitive test page and confirm the extension destination before saving. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Save one harmless page item and confirm it reaches the expected folder, then review the extension connection state.

## Expected result

The workflow completes for the controlled test and the extension displays the signed-in workspace.

## Troubleshooting

**The expected control is missing.** Return to Save to Dosya extension, confirm the active workspace and check that your role permits the action.

## Related guides

- [Connect the extension](/extension/install-and-connect)
- [Save from the browser](/extension/save-from-browser)
