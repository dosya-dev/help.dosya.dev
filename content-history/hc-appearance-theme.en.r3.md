---
{
  "articleId": "hc-appearance-theme",
  "locale": "en",
  "revision": 3,
  "title": "Choose light or dark appearance",
  "summary": "Set the account appearance to light or dark, confirm contrast on key pages, and understand how the saved choice follows supported sessions.",
  "category": "account",
  "articleSlug": "appearance",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current choose light or dark appearance workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-profile-settings",
    "hc-navigate-web-app"
  ],
  "keywords": [
    "light theme",
    "dark theme",
    "appearance",
    "cloud storage"
  ]
}
---
Dosya offers light and dark appearance. Choose the one that makes content and controls readable in the current environment.

Appearance changes the supported Dosya interface for the signed-in user. It does not alter shared files or force recipients to use the same theme.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/appearance-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/appearance-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/appearance-workflow-map-2026-10-14.webp" alt="Four-step interface map for choose light or dark appearance, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/appearance-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: choose light or dark appearance

1. Open Profile → Appearance.
2. Choose Light or Dark.
3. Open Files and a settings form.
4. Check text, focus and status contrast.
5. Reload to confirm the preference persists.
6. Repeat on another supported session if needed.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Reload Files and a settings page, then confirm the selected theme persists and text, focus indicators and status colours remain readable.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The choose light or dark appearance workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
- [Navigate the web app](/account/navigate-web-app)
