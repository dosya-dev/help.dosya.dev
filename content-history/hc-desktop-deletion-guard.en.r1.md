---
{"articleId":"hc-desktop-deletion-guard","locale":"en","revision":1,"title":"Protect against unexpected mass deletion","summary":"Protect against unexpected mass deletion. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"desktop","articleSlug":"desktop-deletion-guard","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the protect against unexpected mass deletion workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-issues","hc-desktop-sync-modes"],"keywords":["desktop deletion guard","advanced desktop sync","Dosya help"]}
---
Protect against unexpected mass deletion is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Desktop Sync issues in the current released Dosya client.
- Confirm the active account and workspace, then identify a test sync pair.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: protect against unexpected mass deletion

1. Open Desktop Sync issues and confirm the active workspace.
2. Select a test sync pair and check its name or identifying details.
3. Review a deletion warning before approving or rejecting it.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that large unexpected deletion does not proceed silently.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and large unexpected deletion does not proceed silently. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync issues, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
