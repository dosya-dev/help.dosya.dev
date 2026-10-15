---
{"articleId":"hc-notification-troubleshoot","locale":"en","revision":1,"title":"Troubleshoot missing notifications","summary":"Check event eligibility, account preferences, email filtering, mobile permission and device background settings when an expected alert is missing.","category":"troubleshooting","articleSlug":"notifications","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current troubleshoot missing notifications workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-notification-preferences","hc-email-notifications","hc-mobile-permissions"],"keywords":["missing notification","email alert missing","push notification"]}
---
Notification delivery crosses product preference and channel-specific controls. Test one known event instead of changing every setting.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot missing notifications

1. Confirm the event supports a notification.
2. Review account notification preferences.
3. Check the verified email and filtered folders.
4. Check mobile notification permission and background restrictions.
5. Trigger one harmless test event.
6. Record time, channel and expected event for support.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The troubleshoot missing notifications workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Set notification preferences](/account/notification-preferences)
- [Manage email notifications](/account/email-notifications)
- [Manage mobile permissions](/account/mobile-permissions)
