---
{"articleId":"hc-lightroom-connect-catalog","locale":"en","revision":1,"title":"Connect a Lightroom catalog to Dosya","summary":"Connect a Lightroom catalog to Dosya with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-connect-catalog","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the connect a lightroom catalog to dosya workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-key","hc-choose-app"],"keywords":["lightroom connect catalog","Lightroom Classic setup","Dosya help"]}
---
Connect a Lightroom catalog to Dosya is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic in the current released client.
- Confirm the active account and workspace, then identify dosya.dev entry in Plug-in Manager.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: connect a Lightroom catalog to Dosya

1. Open Lightroom Classic and Integrations > Lightroom Classic and confirm the active account and workspace.
2. Locate dosya.dev entry in Plug-in Manager and verify its name or identifying details.
3. Choose Connect, sign in in the opened browser, and approve the code shown by Lightroom.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that Lightroom reports the chosen workspace as connected.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview with the plug-in connection and gallery workflow." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use Lightroom Classic 10 or newer and keep the plug-in folder in a permanent local location. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and Lightroom reports the chosen workspace as connected. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic and Integrations > Lightroom Classic, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
