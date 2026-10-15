---
{"articleId":"hc-share-send-updated-settings","locale":"en","revision":1,"title":"Send an updated sharing link after changing settings","summary":"Send an updated sharing link after changing settings with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"share-send-updated-settings","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the send an updated sharing link after changing settings workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-share-delivery-audit"],"keywords":["share send updated settings","Sharing-link delivery lifecycle","Dosya help"]}
---
Send an updated sharing link after changing settings is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya sharing-link management view in the current released client.
- Confirm the active account and workspace, then identify share whose password, expiry, or recipient rules changed.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: send an updated sharing link after changing settings

1. Open the Dosya sharing-link management view and confirm the active account and workspace.
2. Locate share whose password, expiry, or recipient rules changed and verify its name or identifying details.
3. Save the settings, retest the same link, and tell recipients which access details changed.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that recipients use the current controls without receiving a conflicting duplicate share.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Dosya confirmation for a newly created sharing link and its delivery controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test the final recipient experience before sending sensitive or time-limited content. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and recipients use the current controls without receiving a conflicting duplicate share. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
