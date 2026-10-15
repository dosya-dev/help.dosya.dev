---
{"articleId":"hc-desktop-problem-report","locale":"en","revision":1,"title":"Send a desktop problem report","summary":"Send a desktop problem report. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"desktop","articleSlug":"desktop-problem-report","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the send a desktop problem report workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-install","hc-desktop-sync-issues"],"keywords":["desktop problem report","desktop app lifecycle","Dosya help"]}
---
Send a desktop problem report is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Desktop Help → Report a problem in the current released Dosya client.
- Confirm the active account and workspace, then identify a reproducible non-sensitive issue.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: send a desktop problem report

1. Open Desktop Help → Report a problem and confirm the active workspace.
2. Select a reproducible non-sensitive issue and check its name or identifying details.
3. Describe the steps, review included diagnostics and submit.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the report confirms submission without exposing secrets.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop app showing the active workspace and desktop navigation." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Confirm the installed distribution and app version before changing startup or update behavior. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the report confirms submission without exposing secrets. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Desktop Help → Report a problem, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
