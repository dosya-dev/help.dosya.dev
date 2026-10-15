---
{"articleId":"hc-lightroom-plugin-install","locale":"en","revision":1,"title":"Install the Dosya Lightroom Classic plug-in","summary":"Install the Dosya Lightroom Classic plug-in with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-plugin-install","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the install the dosya lightroom classic plug-in workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-api-key","hc-choose-app"],"keywords":["lightroom plugin install","Lightroom Classic setup","Dosya help"]}
---
Install the Dosya Lightroom Classic plug-in is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic in the current released client.
- Confirm the active account and workspace, then identify downloaded dosya.lrplugin folder.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: install the Dosya Lightroom Classic plug-in

1. Open Lightroom Classic and Integrations > Lightroom Classic and confirm the active account and workspace.
2. Locate downloaded dosya.lrplugin folder and verify its name or identifying details.
3. Unzip the download, open File > Plug-in Manager, choose Add, and select dosya.lrplugin.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the Plug-in Manager lists dosya.dev as installed and enabled.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview with the plug-in connection and gallery workflow." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use Lightroom Classic 10 or newer and keep the plug-in folder in a permanent local location. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the Plug-in Manager lists dosya.dev as installed and enabled. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
