---
{"articleId":"hc-lightroom-gallery-expiry","locale":"en","revision":1,"title":"Set an expiry date for a Lightroom gallery link","summary":"Set an expiry date for a Lightroom gallery link with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-gallery-expiry","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the set an expiry date for a lightroom gallery link workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lightroom-publish-gallery","hc-password-link"],"keywords":["lightroom gallery expiry","Lightroom gallery options","Dosya help"]}
---
Set an expiry date for a Lightroom gallery link is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic > Edit Gallery in the current released client.
- Confirm the active account and workspace, then identify Link expiry control in Edit Gallery.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: set an expiry date for a Lightroom gallery link

1. Open Lightroom Classic > Edit Gallery and confirm the active account and workspace.
2. Locate Link expiry control in Edit Gallery and verify its name or identifying details.
3. Choose the required expiry and save the settings.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the gallery link shows the intended expiry in Dosya.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic gallery controls used to configure client access." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test access controls in a private gallery before sharing its link with a client. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the gallery link shows the intended expiry in Dosya. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic > Edit Gallery, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
