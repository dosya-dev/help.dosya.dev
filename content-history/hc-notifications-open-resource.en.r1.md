---
{"articleId":"hc-notifications-open-resource","locale":"en","revision":1,"title":"Open the resource linked from a notification","summary":"Open the resource linked from a notification with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"notifications-open-resource","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the open the resource linked from a notification workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-notification-preferences","hc-notification-troubleshoot"],"keywords":["notifications open resource","Notification inbox","Dosya help"]}
---
Open the resource linked from a notification is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Notifications in the current released client.
- Confirm the active account and workspace, then identify notification whose action is relevant.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: open the resource linked from a notification

1. Open Notifications and confirm the active account and workspace.
2. Locate notification whose action is relevant and verify its name or identifying details.
3. Select the notification card and follow its in-app destination.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that Dosya opens the related file, share, request, billing, or settings surface when available.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya account area used to reach and review the signed-in user’s notifications." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account because notification history belongs to the current user. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and Dosya opens the related file, share, request, billing, or settings surface when available. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Notifications, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Troubleshoot notifications](/troubleshooting/notifications)
