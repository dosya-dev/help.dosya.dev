---
{"articleId":"hc-mobile-backup-retry-failed","locale":"en","revision":1,"title":"Retry failed mobile backup items","summary":"Retry failed mobile backup items with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"mobile-backup-retry-failed","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the retry failed mobile backup items workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-backup-progress","hc-mobile-background"],"keywords":["mobile backup retry failed","Mobile backup status and widgets","Dosya help"]}
---
Retry failed mobile backup items is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Dosya mobile backup in the current released client.
- Confirm the active account and workspace, then identify items marked failed or needing attention.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: retry failed mobile backup items

1. Open Dosya mobile backup and confirm the active account and workspace.
2. Locate items marked failed or needing attention and verify its name or identifying details.
3. Open the item details, correct the reported cause, and choose Retry.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the item returns to progress and completes or reports a specific remaining error.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app overview for photo backup state and home-screen status." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The operating system can delay background work; keep photo and background permissions enabled. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the item returns to progress and completes or reports a specific remaining error. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya mobile backup, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Monitor mobile backup](/files/mobile-backup-progress)
- [Fix paused background backup](/troubleshooting/mobile-background-backup)
