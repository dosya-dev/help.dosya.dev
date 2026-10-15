---
{
  "articleId": "hc-workspace-policy-required-expiry",
  "locale": "en",
  "revision": 3,
  "title": "Require expiry for workspace sharing links",
  "summary": "Enable the requirement, choose the allowed boundary, and create a disposable test link. Verify that the new link cannot omit the required expiry.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-required-expiry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy required expiry",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
This guide covers **Require expiry for workspace sharing links** in Dosya. The main action is to enable the requirement, choose the allowed boundary, and create a disposable test link; the decisive check is whether the new link cannot omit the required expiry.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp" alt="Four-step workflow map for require expiry for workspace sharing links, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for require expiry for workspace sharing links: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-policy-required-expiry-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Workspace settings > Policies in the current released client.
- Confirm the active account and workspace, then identify sharing-link expiry requirement.

## Steps: require expiry for workspace sharing links

1. Open Workspace settings > Policies and confirm the active account and workspace.
2. Locate sharing-link expiry requirement and verify its name or identifying details.
3. Enable the requirement, choose the allowed boundary, and create a disposable test link.
4. Confirm that the new link cannot omit the required expiry.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace policy controls for sharing, security, and member actions." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test policy changes with a non-owner account before relying on them. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The new link cannot omit the required expiry.

## Expected result

The controlled workflow completes and the new link cannot omit the required expiry.

## Troubleshooting

**The expected control is missing.** Return to Workspace settings > Policies, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
