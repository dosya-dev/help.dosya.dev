---
{"articleId":"hc-share-require-named-recipients","locale":"en","revision":1,"title":"Require named recipients for a sensitive share","summary":"Require named recipients for a sensitive share with a controlled test, clear verification, limits, and recovery steps.","category":"sharing","articleSlug":"share-require-named-recipients","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the require named recipients for a sensitive share workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-create-link","hc-password-link"],"keywords":["share require named recipients","Sharing-link security controls","Dosya help"]}
---
Require named recipients for a sensitive share is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a Dosya sharing link in the current released client.
- Confirm the active account and workspace, then identify share recipient settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: require named recipients for a sensitive share

1. Open a Dosya sharing link and confirm the active account and workspace.
2. Locate share recipient settings and verify its name or identifying details.
3. Add only intended recipient addresses and enable their verification flow.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that unlisted visitors cannot access the protected content.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-links-overview-2026-10-13.webp"><img src="/screenshots/share-links-overview-2026-10-13.webp" alt="Dosya sharing links overview for passwords, expiry, recipients, and access controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test the link in a private browser window before sending it to real recipients. <a href="/screenshots/share-links-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and unlisted visitors cannot access the protected content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a Dosya sharing link, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
