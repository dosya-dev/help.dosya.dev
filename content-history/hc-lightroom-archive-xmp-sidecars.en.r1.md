---
{"articleId":"hc-lightroom-archive-xmp-sidecars","locale":"en","revision":1,"title":"Archive Lightroom XMP sidecars with originals","summary":"Archive Lightroom XMP sidecars with originals with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"lightroom-archive-xmp-sidecars","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the archive lightroom xmp sidecars with originals workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-lightroom-configure-publish-service","hc-upload-states"],"keywords":["lightroom archive xmp sidecars","Lightroom export and archive","Dosya help"]}
---
Archive Lightroom XMP sidecars with originals is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Lightroom Classic Export in the current released client.
- Confirm the active account and workspace, then identify photos whose develop metadata is stored in XMP sidecars.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: archive Lightroom XMP sidecars with originals

1. Open Lightroom Classic Export and confirm the active account and workspace.
2. Locate photos whose develop metadata is stored in XMP sidecars and verify its name or identifying details.
3. Run dosya Archive for the selected originals and verify their sidecars.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that each applicable original and current XMP sidecar appears in the mirrored folder.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic export and original-file archive workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small catalog sample and keep originals backed up independently while testing. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and each applicable original and current XMP sidecar appears in the mirrored folder. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic Export, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
