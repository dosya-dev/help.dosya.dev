---
{"articleId":"hc-extension-destination-missing","locale":"en","revision":1,"title":"Recover a missing extension destination","summary":"Recover a missing extension destination with a controlled test, clear verification, limits, and recovery steps.","category":"extension","articleSlug":"extension-destination-missing","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the recover a missing extension destination workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-extension-reconnect","hc-extension-permissions"],"keywords":["extension destination missing","Browser extension troubleshooting details","Dosya help"]}
---
Recover a missing extension destination is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify folder picker that does not show the expected folder.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: recover a missing extension destination

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate folder picker that does not show the expected folder and verify its name or identifying details.
3. Confirm workspace, refresh the picker, check folder access in Dosya, and reconnect only if the listing remains stale.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the authorized destination appears or its access restriction is clear.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Check the active browser profile, site permission, and Dosya session before reinstalling. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the authorized destination appears or its access restriction is clear. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
