---
{"articleId":"hc-extension-session-expired","locale":"en","revision":2,"title":"Fix an expired Save to Dosya browser session","summary":"Reconnect the Save to Dosya browser extension after its session expires, then confirm the intended account, workspace, and destination.","category":"extension","articleSlug":"extension-session-expired","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the reconnect an expired extension session workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-extension-reconnect","hc-extension-permissions"],"keywords":["extension session expired","Browser extension troubleshooting details","Dosya help"]}
---
Reconnect an expired extension session is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify extension sign-in or reconnect prompt.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: reconnect an expired extension session

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate extension sign-in or reconnect prompt and verify its name or identifying details.
3. Choose Reconnect, sign in to the intended Dosya account, and verify the selected workspace before saving.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the extension shows the expected account and destination controls.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Check the active browser profile, site permission, and Dosya session before reinstalling. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the extension shows the expected account and destination controls. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the browser extension menu and Save to Dosya panel, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
