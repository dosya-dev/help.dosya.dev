---
{"articleId":"hc-desktop-launch-login","locale":"en","revision":1,"title":"Start Dosya automatically after sign-in","summary":"Start Dosya automatically after sign-in. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"desktop","articleSlug":"desktop-launch-login","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the start dosya automatically after sign-in workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-install","hc-desktop-sync-issues"],"keywords":["desktop launch login","desktop app lifecycle","Dosya help"]}
---
Start Dosya automatically after sign-in is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Desktop Settings in the current released Dosya client.
- Confirm the active account and workspace, then identify the current computer account.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: start Dosya automatically after sign-in

1. Open Desktop Settings and confirm the active workspace.
2. Select the current computer account and check its name or identifying details.
3. Enable Launch at login and restart the computer session when practical.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that Dosya starts in its configured window or tray state.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop app showing the active workspace and desktop navigation." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Confirm the installed distribution and app version before changing startup or update behavior. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and Dosya starts in its configured window or tray state. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
