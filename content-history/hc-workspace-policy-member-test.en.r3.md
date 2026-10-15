---
{
  "articleId": "hc-workspace-policy-member-test",
  "locale": "en",
  "revision": 3,
  "title": "Verify a policy change as a regular member",
  "summary": "Refresh the member session and run one allowed and one blocked controlled action. Verify that the effective member experience matches the saved policy.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-member-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy member test",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Verify a policy change as a regular member** in Dosya. The main action is to refresh the member session and run one allowed and one blocked controlled action; the decisive check is whether the effective member experience matches the saved policy.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" alt="Four-step workflow map for verify a policy change as a regular member, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for verify a policy change as a regular member: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify saved policy and separate non-owner session.

## Steps: verify a policy change as a regular member

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate saved policy and separate non-owner session and verify its name or identifying details.
3. Refresh the member session and run one allowed and one blocked controlled action.
4. Confirm that the effective member experience matches the saved policy.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The effective member experience matches the saved policy.

## Expected result

The controlled workflow completes and the effective member experience matches the saved policy.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Policies, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
