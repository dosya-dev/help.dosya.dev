---
{"articleId":"hc-notifications-verify-email-delivery","locale":"en","revision":1,"title":"Verify email notification delivery","summary":"Verify email notification delivery with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"notifications-verify-email-delivery","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify email notification delivery workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-notification-preferences","hc-notification-troubleshoot"],"keywords":["notifications verify email delivery","Notification delivery diagnostics","Dosya help"]}
---
Verify email notification delivery is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Profile > Notifications and the notification inbox in the current released client.
- Confirm the active account and workspace, then identify enabled email channel and a controlled event.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: verify email notification delivery

1. Open Profile > Notifications and the notification inbox and confirm the active account and workspace.
2. Locate enabled email channel and a controlled event and verify its name or identifying details.
3. Confirm the verified account email, trigger a harmless event, and check inbox and filtering folders.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the message arrives for the expected account and event.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile and account controls used to review notification preferences." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep security notifications enabled and test optional channels with a harmless event. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the message arrives for the expected account and event. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
