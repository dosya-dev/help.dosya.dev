---
{"articleId":"hc-mobile-activity-open","locale":"en","revision":1,"title":"Open workspace activity on mobile","summary":"Open workspace activity on mobile with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"mobile-activity-open","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the open workspace activity on mobile workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-permissions","hc-notification-troubleshoot"],"keywords":["mobile activity open","Mobile activity and notifications","Dosya help"]}
---
Open workspace activity on mobile is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open the Dosya mobile app in the current released client.
- Confirm the active account and workspace, then identify Activity screen for the active workspace.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: open workspace activity on mobile

1. Open the Dosya mobile app and confirm the active account and workspace.
2. Locate Activity screen for the active workspace and verify its name or identifying details.
3. Open Activity and let the newest permitted events load.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that workspace events appear with actor, action, resource, and time.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app overview for account activity and notification workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Keep the mobile app updated and allow notifications at both the app and operating-system level. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and workspace events appear with actor, action, resource, and time. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya mobile app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Manage mobile permissions](/account/mobile-permissions)
- [Troubleshoot notifications](/troubleshooting/notifications)
