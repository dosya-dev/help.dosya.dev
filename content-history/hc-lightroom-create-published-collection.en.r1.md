---
{"articleId":"hc-lightroom-create-published-collection","locale":"en","revision":1,"title":"Create a published Lightroom collection","summary":"Create a published Lightroom collection with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-create-published-collection","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the create a published lightroom collection workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lightroom-connect-catalog","hc-create-link"],"keywords":["lightroom create published collection","Lightroom gallery publishing","Dosya help"]}
---
Create a published Lightroom collection is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic Publish Services in the current released client.
- Confirm the active account and workspace, then identify connected dosya.dev publish service.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: create a published Lightroom collection

1. Open Lightroom Classic Publish Services and confirm the active account and workspace.
2. Locate connected dosya.dev publish service and verify its name or identifying details.
3. Create a published collection, give it a client-facing name, and add test photos.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the collection appears under the Dosya publish service with photos ready to publish.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview for publishing collections as client galleries." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Publish a small non-confidential collection first and leave Lightroom open until uploads finish. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the collection appears under the Dosya publish service with photos ready to publish. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
