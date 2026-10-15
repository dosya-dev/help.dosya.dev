---
{"articleId":"hc-desktop-first-sync","locale":"en","revision":1,"title":"Review a first-sync plan","summary":"Review a first-sync plan. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"desktop","articleSlug":"desktop-first-sync","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the review a first-sync plan workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-issues","hc-desktop-sync-modes"],"keywords":["desktop first sync","advanced desktop sync","Dosya help"]}
---
Review a first-sync plan is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Desktop Sync setup in the current released Dosya client.
- Confirm the active account and workspace, then identify a small local and remote test folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review a first-sync plan

1. Open Desktop Sync setup and confirm the active workspace.
2. Select a small local and remote test folder and check its name or identifying details.
3. Review the initial direction and estimated operations before enabling sync.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the first run matches the reviewed plan.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop Sync Activity view showing transfer and connection state." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use a small test pair and let its current activity settle before changing advanced sync behavior. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the first run matches the reviewed plan. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Sync setup, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Diagnose sync](/desktop/sync-issues)
- [Choose a sync mode](/desktop/sync-modes)
