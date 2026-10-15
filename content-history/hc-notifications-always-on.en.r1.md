---
{"articleId":"hc-notifications-always-on","locale":"en","revision":1,"title":"Understand always-on Dosya notifications","summary":"Understand always-on Dosya notifications with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"notifications-always-on","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the understand always-on dosya notifications workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-notification-preferences","hc-security-notifications"],"keywords":["notifications always on","Notification delivery settings","Dosya help"]}
---
Understand always-on Dosya notifications is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Profile > Notifications in the current released client.
- Confirm the active account and workspace, then identify group marked always on or partly always on.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: understand always-on Dosya notifications

1. Open Profile > Notifications and confirm the active account and workspace.
2. Locate group marked always on or partly always on and verify its name or identifying details.
3. Read its note and review which safety or service events cannot be disabled.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that critical events remain enabled while optional events follow your preference.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile settings for account identity and notification delivery preferences." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Some security and service messages are always on even when optional groups are disabled. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and critical events remain enabled while optional events follow your preference. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Profile > Notifications, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Review security notifications](/account/security-notifications)
