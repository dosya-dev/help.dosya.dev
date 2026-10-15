---
{"articleId":"hc-vault-clear-device-cache","locale":"en","revision":1,"title":"Clear a stale Vault device cache safely","summary":"Clear a stale Vault device cache safely with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"vault-clear-device-cache","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the clear a stale vault device cache safely workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-vault-recovery","hc-vault-unlock-troubleshooting"],"keywords":["vault clear device cache","Vault recovery and diagnostics","Dosya help"]}
---
Clear a stale Vault device cache safely is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Dosya Vault in the current released client.
- Confirm the active account and workspace, then identify device with stale Vault listings or previews.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: clear a stale Vault device cache safely

1. Open Dosya Vault and confirm the active account and workspace.
2. Locate device with stale Vault listings or previews and verify its name or identifying details.
3. Confirm all transfers are complete, sign out or use the supported cache reset, then unlock again.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that fresh encrypted metadata downloads without removing cloud files.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Dosya Vault recovery screen used to restore access with the offline recovery key." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Support cannot reconstruct a lost passphrase or recovery key; test recovery before an emergency. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and fresh encrypted metadata downloads without removing cloud files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya Vault, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Recover Vault](/files/vault-recovery)
- [Troubleshoot Vault unlock](/troubleshooting/vault-unlock)
