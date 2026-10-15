---
{"articleId":"hc-revoke-other-sessions","locale":"en","revision":1,"title":"Revoke every other signed-in session","summary":"Revoke every other signed-in session. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"account","articleSlug":"revoke-other-sessions","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the revoke every other signed-in session workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-profile-settings","hc-sessions"],"keywords":["revoke other sessions","account privacy and access","Dosya help"]}
---
Revoke every other signed-in session is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Profile → Sessions in the current released Dosya client.
- Confirm the active account and workspace, then identify the current trusted device.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: revoke every other signed-in session

1. Open Profile → Sessions and confirm the active workspace.
2. Select the current trusted device and check its name or identifying details.
3. Choose Sign out other sessions and confirm.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that only the current session remains listed.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity and account controls for the signed-in account." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the account email and keep access to it while reviewing privacy or session changes. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and only the current session remains listed. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Profile → Sessions, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Profile settings](/account/profile-settings)
- [Review sessions](/account/sessions)
