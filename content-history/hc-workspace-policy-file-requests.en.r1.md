---
{"articleId":"hc-workspace-policy-file-requests","locale":"en","revision":1,"title":"Review file-request controls under workspace policy","summary":"Review file-request controls under workspace policy with a controlled test, clear verification, limits, and recovery steps.","category":"workspaces","articleSlug":"workspace-policy-file-requests","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the review file-request controls under workspace policy workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-workspace-policies","hc-workspace-roles"],"keywords":["workspace policy file requests","Workspace policy enforcement","Dosya help"]}
---
Review file-request controls under workspace policy is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify file-request policy and a member test account.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: review file-request controls under workspace policy

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate file-request policy and a member test account and verify its name or identifying details.
3. Set the intended availability or limits, save, and attempt a disposable request as the member.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that file-request creation follows the workspace policy.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and file-request creation follows the workspace policy. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
