---
{
  "articleId": "hc-vault-lost-passphrase-plan",
  "locale": "en",
  "revision": 4,
  "title": "Plan for a lost Vault passphrase",
  "summary": "Use recovery to set up access again, then verify Spaces and store the new credentials safely. Verify that vault access returns without relying on support to know the old secret.",
  "category": "files",
  "articleSlug": "vault-lost-passphrase-plan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-vault-recovery",
    "hc-vault-unlock-troubleshooting"
  ],
  "keywords": [
    "vault lost passphrase plan",
    "Vault recovery and diagnostics",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Plan for a lost Vault passphrase** in Dosya. The main action is to use recovery to set up access again, then verify Spaces and store the new credentials safely; the decisive check is whether vault access returns without relying on support to know the old secret.

<figure class="help-screenshot"><a href="/screenshots/vault-lost-passphrase-plan-help-workflow-2026-10-14.webp"><img src="/screenshots/vault-lost-passphrase-plan-help-workflow-2026-10-14.webp" alt="Workflow for “Plan for a lost Vault passphrase”: use recovery to set up access again, then verify Spaces and store the new credentials safely; vault access returns without relying on support to know the old secret." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Plan for a lost Vault passphrase”: use recovery to set up access again, then verify Spaces and store the new credentials safely; vault access returns without relying on support to know the old secret. <a href="/screenshots/vault-lost-passphrase-plan-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya Vault in the current released client.
- Confirm the active account and workspace, then identify account that still has its recovery key.

## Steps: plan for a lost Vault passphrase

1. Open Dosya Vault and confirm the active account and workspace.
2. Locate account that still has its recovery key and verify its name or identifying details.
3. Use recovery to set up access again, then verify Spaces and store the new credentials safely.
4. Confirm that Vault access returns without relying on support to know the old secret.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Reference for “Plan for a lost Vault passphrase”: Dosya Vault recovery screen used to restore access with the offline recovery key." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Plan for a lost Vault passphrase”: Dosya Vault recovery screen used to restore access with the offline recovery key. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Support cannot reconstruct a lost passphrase or recovery key; test recovery before an emergency.

## Verify the result

After completing the steps, check the expected result: Vault access returns without relying on support to know the old secret.

## Expected result

The controlled workflow completes and Vault access returns without relying on support to know the old secret.

## Troubleshooting

**The expected control is missing.** Return to Dosya Vault, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Recover Vault](/files/vault-recovery)
- [Troubleshoot Vault unlock](/troubleshooting/vault-unlock)
