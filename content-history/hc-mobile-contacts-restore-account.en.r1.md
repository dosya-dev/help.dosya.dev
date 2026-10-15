---
{"articleId":"hc-mobile-contacts-restore-account","locale":"en","revision":1,"title":"Restore contacts into the correct phone account","summary":"Restore contacts into the correct phone account with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"mobile-contacts-restore-account","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the restore contacts into the correct phone account workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-contacts-backup","hc-contacts-restore"],"keywords":["mobile contacts restore account","Advanced mobile contacts workflows","Dosya help"]}
---
Restore contacts into the correct phone account is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Contacts backup in the Dosya mobile app in the current released client.
- Confirm the active account and workspace, then identify vCard backup and destination account selector.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: restore contacts into the correct phone account

1. Open Contacts backup in the Dosya mobile app and confirm the active account and workspace.
2. Locate vCard backup and destination account selector and verify its name or identifying details.
3. Choose the intended device contact account and restore a small test set.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that restored contacts appear in that account.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app overview for contact backup, export, and restore workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before restore. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and restored contacts appear in that account. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Contacts backup in the Dosya mobile app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Back up contacts](/files/contacts-backup)
- [Restore contacts](/files/contacts-restore)
