---
{
  "articleId": "hc-workspace-policy-file-requests",
  "locale": "en",
  "revision": 3,
  "title": "Review file-request controls under workspace policy",
  "summary": "Set the intended availability or limits, save, and attempt a disposable request as the member. Verify that file-request creation follows the workspace policy.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-file-requests",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy file requests",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Review file-request controls under workspace policy** in Dosya. The main action is to set the intended availability or limits, save, and attempt a disposable request as the member; the decisive check is whether file-request creation follows the workspace policy.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp" alt="Four-step workflow map for review file-request controls under workspace policy, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for review file-request controls under workspace policy: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-policy-file-requests-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify file-request policy and a member test account.

## Steps: review file-request controls under workspace policy

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate file-request policy and a member test account and verify its name or identifying details.
3. Set the intended availability or limits, save, and attempt a disposable request as the member.
4. Confirm that file-request creation follows the workspace policy.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: File-request creation follows the workspace policy.

## Expected result

The controlled workflow completes and file-request creation follows the workspace policy.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Policies, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
