---
{
  "articleId": "hc-mobile-signin",
  "locale": "en",
  "revision": 3,
  "title": "Sign in to Dosya on mobile",
  "summary": "Sign in with the intended account, complete email or two-factor challenges, and verify the active workspace before browsing files.",
  "category": "account",
  "articleSlug": "mobile-sign-in",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current sign in to dosya on mobile workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-install",
    "hc-two-factor",
    "hc-sessions"
  ],
  "keywords": [
    "mobile sign in",
    "phone login",
    "mobile two factor",
    "cloud storage"
  ]
}
---
Mobile sign-in uses the same Dosya account security while device permissions and local session state remain specific to the phone.

Successful sign-in identifies the account, while the workspace switcher identifies the file boundary. Complete verification challenges without sharing codes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" alt="Four-step interface map for sign in to dosya on mobile, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-sign-in-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: sign in to dosya on mobile

1. Open the installed official app.
2. Choose the supported sign-in method.
3. Complete email verification or two-factor challenge when requested.
4. Confirm account name and active workspace.
5. Open a known folder as a harmless check.
6. Review mobile session access after setup.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open one known folder and confirm the account name and active workspace before enabling backup or performing file actions.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The sign in to dosya on mobile workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Install mobile](/account/mobile-install)
- [Use two-factor authentication](/account/two-factor)
- [Review sessions](/account/sessions)
