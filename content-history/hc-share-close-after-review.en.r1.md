---
{"articleId":"hc-share-close-after-review","locale":"en","revision":1,"title":"Close a sharing link after review is complete","summary":"Close a sharing link after review is complete with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"share-close-after-review","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the close a sharing link after review is complete workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-share-delivery-audit"],"keywords":["share close after review","Sharing-link delivery lifecycle","Dosya help"]}
---
Close a sharing link after review is complete is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya sharing-link management view in the current released client.
- Confirm the active account and workspace, then identify share whose recipient has completed review or download.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: close a sharing link after review is complete

1. Open the Dosya sharing-link management view and confirm the active account and workspace.
2. Locate share whose recipient has completed review or download and verify its name or identifying details.
3. Preserve any required activity record, revoke the link, and test its URL in a private window.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the old URL no longer exposes the shared content.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Dosya confirmation for a newly created sharing link and its delivery controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test the final recipient experience before sending sensitive or time-limited content. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the old URL no longer exposes the shared content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya sharing-link management view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
