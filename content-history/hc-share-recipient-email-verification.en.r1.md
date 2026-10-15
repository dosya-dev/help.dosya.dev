---
{"articleId":"hc-share-recipient-email-verification","locale":"en","revision":1,"title":"Complete named-recipient verification","summary":"Complete named-recipient verification with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"share-recipient-email-verification","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the complete named-recipient verification workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-unavailable-link","hc-share-recipient-verification"],"keywords":["share recipient email verification","Sharing-link recipient access","Dosya help"]}
---
Complete named-recipient verification is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya sharing-link recipient page in the current released client.
- Confirm the active account and workspace, then identify email verification prompt for a named recipient.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: complete named-recipient verification

1. Open a Dosya sharing-link recipient page and confirm the active account and workspace.
2. Locate email verification prompt for a named recipient and verify its name or identifying details.
3. Use the invited email address, obtain the current code, and enter it before it expires.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the invited recipient reaches the shared files.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Dosya recipient page asking for the password or verification needed to open a share." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Recipients should use the exact current link and receive passwords through a separate channel. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the invited recipient reaches the shared files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya sharing-link recipient page, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
