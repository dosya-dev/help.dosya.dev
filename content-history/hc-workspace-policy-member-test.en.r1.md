---
{"articleId":"hc-workspace-policy-member-test","locale":"en","revision":1,"title":"Verify a policy change as a regular member","summary":"Verify a policy change as a regular member with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-policy-member-test","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify a policy change as a regular member workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-policies","hc-workspace-roles"],"keywords":["workspace policy member test","Workspace policy enforcement","Dosya help"]}
---
Verify a policy change as a regular member is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify saved policy and separate non-owner session.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: verify a policy change as a regular member

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate saved policy and separate non-owner session and verify its name or identifying details.
3. Refresh the member session and run one allowed and one blocked controlled action.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the effective member experience matches the saved policy.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the effective member experience matches the saved policy. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Policies, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
