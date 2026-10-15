---
{"articleId":"hc-contacts-backup","locale":"en","revision":1,"title":"Back up contacts from your phone","summary":"Back up contacts from your phone. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"contacts-backup","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the back up contacts from your phone workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-permissions","hc-mobile-backup-settings"],"keywords":["contacts backup","mobile contact backup","Dosya help"]}
---
Back up contacts from your phone is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Contacts backup in the current released Dosya client.
- Confirm the active account and workspace, then identify a small test contact set.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: back up contacts from your phone

1. Open Mobile Contacts backup and confirm the active workspace.
2. Select a small test contact set and check its name or identifying details.
3. Grant contacts access, choose the source and start backup.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that a contact backup completes with the expected count.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before starting a device-only contacts workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before a restore. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and a contact backup completes with the expected count. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Contacts backup, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
