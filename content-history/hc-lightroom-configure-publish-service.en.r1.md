---
{"articleId":"hc-lightroom-configure-publish-service","locale":"en","revision":1,"title":"Configure the Dosya Lightroom publish service","summary":"Configure the Dosya Lightroom publish service with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-configure-publish-service","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the configure the dosya lightroom publish service workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lightroom-connect-catalog","hc-create-link"],"keywords":["lightroom configure publish service","Lightroom gallery publishing","Dosya help"]}
---
Configure the Dosya Lightroom publish service is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic Publish Services in the current released client.
- Confirm the active account and workspace, then identify dosya.dev service in Publish Services.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: configure the Dosya Lightroom publish service

1. Open Lightroom Classic Publish Services and confirm the active account and workspace.
2. Locate dosya.dev service in Publish Services and verify its name or identifying details.
3. Open its settings, review JPEG, size, color, metadata, and destination defaults, then save.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the service displays the saved publish settings.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview for publishing collections as client galleries." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Publish a small non-confidential collection first and leave Lightroom open until uploads finish. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the service displays the saved publish settings. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic Publish Services, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect a Lightroom catalog](/integrations/lightroom-connect-catalog)
- [Create a sharing link](/sharing/create-link)
