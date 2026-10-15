---
{
  "articleId": "hc-workspace-policy-public-links",
  "locale": "en",
  "revision": 5,
  "title": "Restrict public sharing links in a workspace",
  "summary": "Disable new public share links or require passwords, set default and maximum expiry, and verify existing URLs and silently clamped lifetimes correctly.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-public-links",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/settings.tsx, apps/api/src/lib/share/create.ts, apps/api/src/lib/share/update.ts, apps/api/src/pages/api/workspaces/[id]/settings.ts, and apps/api/src/lib/share/create.unit.test.ts. No production share was changed.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy public links",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Workspace security settings govern new and edited share links. Disabling creation does not revoke URLs that already exist, so active links require a separate review and revocation pass.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14.webp" alt="Four-step public-link policy map showing one security rule, Settings updated receipt, the exact required-password refusal, and separate review of older links." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Test one disposable link after convergence and handle existing URLs separately; password enforcement returns the documented workspace error. <a class="workflow-map-full" href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-public-links-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The administrator needs **Access Settings** and **Manage settings**.
- A tester also needs **Create share links** plus access to the selected file or folder.
- Prepare a disposable item; revoking its URL is irreversible for that token.

## Steps

1. Open **Workspace settings → Security** in the intended workspace.
2. Enable **Disable public share links** or **Force password on share links**, or select a **Share link max expiry** and **Default share link expiry**.
3. Select the row’s save control and wait for **Settings updated — Your security setting has been saved.**
4. After cache convergence, open the share dialog for the disposable item from a regular member session.
5. Attempt one new link, then inspect the returned URL in a private window for password and effective expiry behavior.
6. Open **Shared** to review older links separately and revoke any that no longer meet policy.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Reference for “Restrict public sharing links in a workspace”: Dosya workspace policy controls for sharing, security, and member actions." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Restrict public sharing links in a workspace”: Dosya workspace policy controls for sharing, security, and member actions. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Rule behavior

With creation disabled, the server returns **Share links are disabled for this workspace**. Password enforcement returns **This workspace requires a password on all share links** when no password is supplied. Share passwords require at least eight characters.

The expiry cap offers No limit, 1, 7, 30, 90, or 365 days in the UI; server validation accepts a whole number through 3,650 days. A longer requested lifetime is silently reduced to the workspace cap. The default controls the starting value and must not exceed that cap.

## Expected result

New-link behavior matches the saved rule, the disposable URL demonstrates the effective password and lifetime, and every older link needing removal is revoked individually.

## Troubleshooting

**You don’t have access to workspace settings.** The role lacks **Access Settings**.

**You don’t have permission: manage settings.** A role with page access still needs the capability to save security fields.

**The link expiry is shorter than selected.** The workspace maximum silently clamps requested lifetimes; inspect the created link rather than trusting the form input.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
