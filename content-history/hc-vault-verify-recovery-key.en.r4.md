---
{
  "articleId": "hc-vault-verify-recovery-key",
  "locale": "en",
  "revision": 4,
  "title": "Verify a Vault recovery key",
  "summary": "Use the supported recovery flow without deleting the offline copy. Verify that the key unlocks the intended Vault identity.",
  "category": "files",
  "articleSlug": "vault-verify-recovery-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-vault-recovery",
    "hc-vault-unlock-troubleshooting"
  ],
  "keywords": [
    "vault verify recovery key",
    "Vault recovery and diagnostics",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Verify a Vault recovery key** in Dosya. The main action is to use the supported recovery flow without deleting the offline copy; the decisive check is whether the key unlocks the intended Vault identity.

<figure class="help-screenshot"><a href="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp"><img src="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp" alt="Workflow for “Verify a Vault recovery key”: use the supported recovery flow without deleting the offline copy; the key unlocks the intended Vault identity." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify a Vault recovery key”: use the supported recovery flow without deleting the offline copy; the key unlocks the intended Vault identity. <a href="/screenshots/vault-verify-recovery-key-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Dosya Vault in the current released client.
- Confirm the active account and workspace, then identify stored recovery key and a controlled recovery check.

## Steps: verify a Vault recovery key

1. Open Dosya Vault and confirm the active account and workspace.
2. Locate stored recovery key and a controlled recovery check and verify its name or identifying details.
3. Use the supported recovery flow without deleting the offline copy.
4. Confirm that the key unlocks the intended Vault identity.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Reference for “Verify a Vault recovery key”: Dosya Vault recovery screen used to restore access with the offline recovery key." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a Vault recovery key”: Dosya Vault recovery screen used to restore access with the offline recovery key. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Support cannot reconstruct a lost passphrase or recovery key; test recovery before an emergency.

## Verify the result

After completing the steps, check the expected result: The key unlocks the intended Vault identity.

## Expected result

The controlled workflow completes and the key unlocks the intended Vault identity.

## Troubleshooting

**The expected control is missing.** Return to Dosya Vault, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Recover Vault](/files/vault-recovery)
- [Troubleshoot Vault unlock](/troubleshooting/vault-unlock)
