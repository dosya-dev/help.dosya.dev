---
{
  "articleId": "hc-vault-lost-passphrase-plan",
  "locale": "en",
  "revision": 5,
  "title": "Plan for a lost Vault passphrase",
  "summary": "Recover a Vault with the one-time recovery key, recognize exact unlock errors, and use identity destruction only when permanent unreadability is accepted.",
  "category": "files",
  "articleSlug": "vault-lost-passphrase-plan",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/stores/e2ee.ts, apps/web/src/components/e2ee/unlock-gate.tsx, apps/web/src/components/e2ee/encrypted-browser.tsx, apps/api/src/pages/api/e2ee/user-keys.ts, and packages/e2ee-client/src/file.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
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
Dosya cannot reveal or reset a Vault passphrase. The recovery key shown once at setup is the supported alternative; spaces and dashes in a pasted key are ignored.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14.webp" alt="Theme-aware four-step map for switching to recovery-key mode, unlocking, verifying a Space, and reserving destroy-and-recreate for the last resort." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The plan keeps recoverable access separate from irreversible identity destruction. <a class="workflow-map-full" href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14.webp" data-light-href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/vault-lost-passphrase-plan-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On the **Unlock Vault** card, choose **Use recovery key**. Do not create a new identity while the existing encrypted files are still needed.
2. Paste the recovery key into **Recovery key**. It may contain spaces or dashes; normalization removes those characters without changing letter case.
3. Choose **Unlock** and wait for the Vault surface. A wrong key reports `That recovery key did not unlock your Vault.` A build without recovery support reports that recovery unlock is unavailable in this version.
4. Open each important Space and download one known file. Unlock success alone is weaker evidence than decrypting actual content.
5. Store the recovered access material offline. The setup dialog’s recovery key is shown once and is never persisted by the web store.
6. If recovery is impossible, use **Destroy vault and start over** only to remove your identity, grants, and Space memberships permanently.

<figure class="help-screenshot"><a href="/screenshots/vault-recovery-unlock-2026-10-12.webp"><img src="/screenshots/vault-recovery-unlock-2026-10-12.webp" alt="Vault recovery screen showing a recovery-key field plus Unlock, Use passphrase, and Destroy vault and start over." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The recovery-key mode is the supported path when the passphrase is unavailable. <a href="/screenshots/vault-recovery-unlock-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Who loses access.** Destruction removes only the caller’s identity and access. Other members keep their identities and access to shared Space data; a Space with no remaining member has no one left who can open it.

**Last-resort confirmation.** Identity destruction requires the Dosya account password and the checkbox `I understand my encrypted files cannot be recovered after this.` An account using authenticator-app 2FA must also provide a current code. Email-code 2FA cannot complete this operation; switch to an authenticator app in security settings before trying again. There is no undo, and support cannot reconstruct the destroyed identity keys.

## Expected result

A valid recovery key restores decryption access and lets known files download. If no credential survives, you make an explicit irreversible decision rather than mistaking a new Vault setup for recovery.

## Related guides

- [Follow the complete Vault recovery guide](/files/vault-recovery)
- [Interpret Vault unlock failures](/troubleshooting/vault-unlock)
