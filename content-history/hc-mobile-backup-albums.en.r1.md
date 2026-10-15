---
{"articleId":"hc-mobile-backup-albums","locale":"en","revision":1,"title":"Choose albums for mobile backup","summary":"Choose albums for mobile backup. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"mobile-backup-albums","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the choose albums for mobile backup workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-backup-setup","hc-mobile-backup-settings"],"keywords":["mobile backup albums","mobile backup controls","Dosya help"]}
---
Choose albums for mobile backup is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Backup settings in the current released Dosya client.
- Confirm the active account and workspace, then identify one small photo album.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: choose albums for mobile backup

1. Open Mobile Backup settings and confirm the active workspace.
2. Select one small photo album and check its name or identifying details.
3. Enable the intended album and leave unrelated albums disabled.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that coverage begins only for the selected source.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel used before configuring backup on a supported device." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Keep the app updated and review operating-system photo and background permissions. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and coverage begins only for the selected source. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Backup settings, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Change backup settings](/files/mobile-backup-settings)
