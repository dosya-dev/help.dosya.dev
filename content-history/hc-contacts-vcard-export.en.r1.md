---
{"articleId":"hc-contacts-vcard-export","locale":"en","revision":1,"title":"Export contacts as a vCard","summary":"Export contacts as a vCard. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"contacts-vcard-export","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the export contacts as a vcard workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-permissions","hc-mobile-backup-settings"],"keywords":["contacts vcard export","mobile contact backup","Dosya help"]}
---
Export contacts as a vCard is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Contacts in the current released Dosya client.
- Confirm the active account and workspace, then identify a small contact selection.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: export contacts as a vCard

1. Open Mobile Contacts and confirm the active workspace.
2. Select a small contact selection and check its name or identifying details.
3. Choose vCard export and save or share the file.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the .vcf file opens with the expected contact count.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before starting a device-only contacts workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before a restore. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the .vcf file opens with the expected contact count. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Contacts, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
