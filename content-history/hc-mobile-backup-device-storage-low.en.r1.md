---
{"articleId":"hc-mobile-backup-device-storage-low","locale":"en","revision":1,"title":"Recover mobile backup when device storage is low","summary":"Recover mobile backup when device storage is low with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"mobile-backup-device-storage-low","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the recover mobile backup when device storage is low workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-backup-retry-failed","hc-mobile-background"],"keywords":["mobile backup device storage low","Mobile backup recovery details","Dosya help"]}
---
Recover mobile backup when device storage is low is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Backup settings and status in the Dosya mobile app in the current released client.
- Confirm the active account and workspace, then identify backup or media processing error tied to local free space.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: recover mobile backup when device storage is low

1. Open Backup settings and status in the Dosya mobile app and confirm the active account and workspace.
2. Locate backup or media processing error tied to local free space and verify its name or identifying details.
3. Free safe device space, restart Dosya, and retry one failed item.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the app can stage and process the media item.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app backup overview with status and items needing attention." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep the device powered and test recovery with one media item before retrying the full queue. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the app can stage and process the media item. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Backup settings and status in the Dosya mobile app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Retry failed backup items](/files/mobile-backup-retry-failed)
- [Troubleshoot background backup](/troubleshooting/mobile-background-backup)
