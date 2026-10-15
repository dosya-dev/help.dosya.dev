---
{"articleId":"hc-notifications-fix-reverting-preferences","locale":"en","revision":1,"title":"Fix notification preferences that revert","summary":"Fix notification preferences that revert with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"notifications-fix-reverting-preferences","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the fix notification preferences that revert workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-notification-preferences","hc-notification-troubleshoot"],"keywords":["notifications fix reverting preferences","Notification delivery diagnostics","Dosya help"]}
---
Fix notification preferences that revert is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Profile > Notifications and the notification inbox in the current released client.
- Confirm the active account and workspace, then identify preference that does not remain saved.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: fix notification preferences that revert

1. Open Profile > Notifications and the notification inbox and confirm the active account and workspace.
2. Locate preference that does not remain saved and verify its name or identifying details.
3. Change one setting, wait for confirmation, reload, and check account, role, and network state if it reverts.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the saved value persists or the blocking condition is identified.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile and account controls used to review notification preferences." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep security notifications enabled and test optional channels with a harmless event. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the saved value persists or the blocking condition is identified. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Profile > Notifications and the notification inbox, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
