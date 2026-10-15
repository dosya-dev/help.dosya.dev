---
{"articleId":"hc-remote-download-direct-url","locale":"en","revision":1,"title":"Tell a direct file URL from a share page","summary":"Tell a direct file URL from a share page with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"remote-download-direct-url","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the tell a direct file url from a share page workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-remote-download-errors","hc-remote-download-start"],"keywords":["remote download direct url","Remote download failure details","Dosya help"]}
---
Tell a direct file URL from a share page is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Integrations > Remote Downloads in the current released client.
- Confirm the active account and workspace, then identify candidate HTTPS source address.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: tell a direct file URL from a share page

1. Open Integrations > Remote Downloads and confirm the active account and workspace.
2. Locate candidate HTTPS source address and verify its name or identifying details.
3. Open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the URL is suitable for server-side fetching.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads overview for diagnosing direct-link and source failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only fetch content you are authorized to store, from a direct HTTPS file address. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the URL is suitable for server-side fetching. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Remote Downloads, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
