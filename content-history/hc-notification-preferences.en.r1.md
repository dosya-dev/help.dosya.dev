---
{"articleId":"hc-notification-preferences","locale":"en","revision":1,"title":"Set notification preferences","summary":"Choose which account and workspace events should notify you, save the preference, and verify one controlled event.","category":"account","articleSlug":"notification-preferences","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current set notification preferences workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-email-notifications","hc-contact-support"],"keywords":["notification settings","alerts","account notifications"]}
---
Notification preferences control which supported events reach configured channels; device permission can still block delivery.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: set notification preferences

1. Open Profile → Notifications.
2. Review each available event and channel.
3. Enable only alerts that need action.
4. Save the preference.
5. Trigger one harmless test event.
6. Confirm delivery and return to adjust noisy choices.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The set notification preferences workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Manage email notifications](/account/email-notifications)
- [Contact support](/troubleshooting/contact-support)
