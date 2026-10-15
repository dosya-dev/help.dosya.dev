---
{"articleId":"hc-cancel-account-deletion","locale":"en","revision":1,"title":"Cancel a scheduled account deletion","summary":"Cancel a scheduled account deletion. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"account","articleSlug":"cancel-account-deletion","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the cancel a scheduled account deletion workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-profile-settings","hc-sessions"],"keywords":["cancel account deletion","account privacy and access","Dosya help"]}
---
Cancel a scheduled account deletion is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Profile and the deletion banner in the current released Dosya client.
- Confirm the active account and workspace, then identify an account still inside its cancellation window.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: cancel a scheduled account deletion

1. Open Profile and the deletion banner and confirm the active workspace.
2. Select an account still inside its cancellation window and check its name or identifying details.
3. Choose Cancel deletion and confirm continued access.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the deletion banner clears and sign-in remains active.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity and account controls for the signed-in account." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the account email and keep access to it while reviewing privacy or session changes. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the deletion banner clears and sign-in remains active. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Profile and the deletion banner, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Profile settings](/account/profile-settings)
- [Review sessions](/account/sessions)
