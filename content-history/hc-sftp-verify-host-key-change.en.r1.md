---
{"articleId":"hc-sftp-verify-host-key-change","locale":"en","revision":1,"title":"Verify an SFTP host key change","summary":"Verify an SFTP host key change with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"sftp-verify-host-key-change","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify an sftp host key change workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-sftp-connect","hc-sftp-troubleshoot"],"keywords":["sftp verify host key change","SFTP connection reliability details","Dosya help"]}
---
Verify an SFTP host key change is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open an SFTP client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify host-key warning from a previously used connection.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: verify an SFTP host key change

1. Open an SFTP client connected to Dosya and confirm the active account and workspace.
2. Locate host-key warning from a previously used connection and verify its name or identifying details.
3. Stop the connection, obtain the current fingerprint from a trusted Dosya source, compare it exactly, and update the saved key only if verified.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the trusted current fingerprint is stored before file access resumes.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP integration overview for secure file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Verify the host key and restricted remote path before entering credentials or transferring files. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the trusted current fingerprint is stored before file access resumes. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an SFTP client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect with SFTP](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
