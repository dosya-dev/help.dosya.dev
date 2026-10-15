---
{"articleId":"hc-sftp-host-key-warning","locale":"en","revision":1,"title":"Troubleshoot an SFTP host-key warning","summary":"Troubleshoot an SFTP host-key warning with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"sftp-host-key-warning","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the troubleshoot an sftp host-key warning workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-sftp-connect","hc-sftp-restricted-key"],"keywords":["sftp host key warning","SFTP client operations","Dosya help"]}
---
Troubleshoot an SFTP host-key warning is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify unexpected or changed server fingerprint prompt.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: troubleshoot an SFTP host-key warning

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate unexpected or changed server fingerprint prompt and verify its name or identifying details.
3. Stop the connection and compare the fingerprint through the official Dosya documentation or support channel.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the connection proceeds only after the expected host identity is verified.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP access overview for secure interactive file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the documented host key before accepting a first connection and use an SFTP-restricted credential. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the connection proceeds only after the expected host identity is verified. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Use a restricted SFTP key](/integrations/sftp-restricted-key)
