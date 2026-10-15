---
{
  "articleId": "hc-identity-methods",
  "locale": "en",
  "revision": 2,
  "title": "Review account identity and sign-in methods",
  "summary": "Confirm the profile email and available sign-in methods, set or change a password safely, and avoid disconnecting the only usable method.",
  "category": "account",
  "articleSlug": "identity-and-sign-in",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review account identity and sign-in methods workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-profile-settings",
    "hc-password-reset",
    "hc-two-factor"
  ],
  "keywords": [
    "sign in method",
    "account identity",
    "change password",
    "cloud storage"
  ]
}
---
Account identity settings describe the email and supported sign-in methods for the current user. Verify recovery access before changing them.

Keep at least one verified sign-in or recovery method while changing identity settings. Test the new method before ending the current session.

<figure class="help-screenshot"><a href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp"><img src="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp" alt="Four-step interface map for review account identity and sign-in methods, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/identity-and-sign-in-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review account identity and sign-in methods

1. Open Profile → Identity or Password.
2. Confirm the account email.
3. Review whether the account has a password and any connected method.
4. Add or change the password through the verified flow.
5. Test sign-in in a private window.
6. Keep at least one verified recovery path.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Use a private window to sign in, confirm the same account email, then review active sessions and remove only methods you no longer need.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The review account identity and sign-in methods workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Reset a password](/account/reset-password)
- [Use two-factor authentication](/account/two-factor)
