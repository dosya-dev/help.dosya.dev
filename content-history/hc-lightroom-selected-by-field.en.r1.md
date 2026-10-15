---
{"articleId":"hc-lightroom-selected-by-field","locale":"en","revision":1,"title":"Find who selected a photo in Lightroom","summary":"Find who selected a photo in Lightroom with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-selected-by-field","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the find who selected a photo in lightroom workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lightroom-enable-client-favourites","hc-lightroom-publish-gallery"],"keywords":["lightroom selected by field","Lightroom client selections","Dosya help"]}
---
Find who selected a photo in Lightroom is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic and the published Dosya gallery in the current released client.
- Confirm the active account and workspace, then identify photo included in a synced client selection.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: find who selected a photo in Lightroom

1. Open Lightroom Classic and the published Dosya gallery and confirm the active account and workspace.
2. Locate photo included in a synced client selection and verify its name or identifying details.
3. Inspect the searchable Selected by (dosya) metadata field.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the field identifies each client who selected the photo.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic workflow for client favourites and catalog selections." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Ask clients to use a clear display name so their selection collection is recognizable. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the field identifies each client who selected the photo. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic and the published Dosya gallery, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
