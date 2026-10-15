---
{"articleId":"hc-webdav-transfer-files","locale":"en","revision":1,"title":"Upload and download files over WebDAV","summary":"Upload and download files over WebDAV with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"webdav-transfer-files","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the upload and download files over webdav workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-webdav-connect","hc-webdav-cyberduck"],"keywords":["webdav transfer files","WebDAV mounted-drive operations","Dosya help"]}
---
Upload and download files over WebDAV is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify small local and remote test files.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: upload and download files over WebDAV

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate small local and remote test files and verify its name or identifying details.
3. Copy one file in each direction and wait for the client to finish.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that both copies appear with the expected sizes.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview for mounted drives and compatible file clients." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted WebDAV key and expect client behavior to vary by operating system. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and both copies appear with the expected sizes. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect WebDAV](/integrations/webdav)
- [Use Cyberduck](/integrations/webdav-cyberduck)
