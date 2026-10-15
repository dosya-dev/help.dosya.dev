---
{"articleId":"hc-webdav-diagnose-read-only","locale":"en","revision":1,"title":"Diagnose a read-only WebDAV mount","summary":"Diagnose a read-only WebDAV mount with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"webdav-diagnose-read-only","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the diagnose a read-only webdav mount workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-webdav-connect","hc-webdav-lock-permission-errors"],"keywords":["webdav diagnose read only","WebDAV connection reliability details","Dosya help"]}
---
Diagnose a read-only WebDAV mount is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify mount that lists files but rejects a disposable write.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: diagnose a read-only WebDAV mount

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate mount that lists files but rejects a disposable write and verify its name or identifying details.
3. Check account role, key scope, folder restriction, lock state, and client mount mode, then repeat one test write.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the blocking permission is identified or the test file is created.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the blocking permission is identified or the test file is created. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
