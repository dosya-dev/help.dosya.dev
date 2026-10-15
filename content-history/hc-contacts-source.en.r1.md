---
{"articleId":"hc-contacts-source","locale":"en","revision":1,"title":"Choose the contact account to back up","summary":"Choose the contact account to back up. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"contacts-source","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the choose the contact account to back up workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-permissions","hc-mobile-backup-settings"],"keywords":["contacts source","mobile contact backup","Dosya help"]}
---
Choose the contact account to back up is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Contacts settings in the current released Dosya client.
- Confirm the active account and workspace, then identify a device with more than one contact source.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: choose the contact account to back up

1. Open Mobile Contacts settings and confirm the active workspace.
2. Select a device with more than one contact source and check its name or identifying details.
3. Select the intended account or source before scanning.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the preview count reflects only that source.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before starting a device-only contacts workflow." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use a small test contact set and confirm the device contact account before a restore. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the preview count reflects only that source. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Contacts settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Mobile permissions](/account/mobile-permissions)
- [Mobile backup settings](/files/mobile-backup-settings)
