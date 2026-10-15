---
{"articleId":"hc-remote-download-unknown-size","locale":"en","revision":1,"title":"Fix an unknown-size remote download","summary":"Fix an unknown-size remote download with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"remote-download-unknown-size","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the fix an unknown-size remote download workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-remote-download-errors","hc-remote-download-start"],"keywords":["remote download unknown size","Remote download failure details","Dosya help"]}
---
Fix an unknown-size remote download is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Integrations > Remote Downloads in the current released client.
- Confirm the active account and workspace, then identify job reporting Unknown file size.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: fix an unknown-size remote download

1. Open Integrations > Remote Downloads and confirm the active account and workspace.
2. Locate job reporting Unknown file size and verify its name or identifying details.
3. Use a source that provides a reliable file length or download locally and upload through Dosya.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the next transfer has a known size before storage reservation.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads overview for diagnosing direct-link and source failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only fetch content you are authorized to store, from a direct HTTPS file address. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the next transfer has a known size before storage reservation. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
