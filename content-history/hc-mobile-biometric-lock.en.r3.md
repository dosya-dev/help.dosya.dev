---
{
  "articleId": "hc-mobile-biometric-lock",
  "locale": "en",
  "revision": 3,
  "title": "Turn on biometric app lock",
  "summary": "Enable biometric lock and authenticate once, then verify that reopening the app requires the configured device biometric.",
  "category": "account",
  "articleSlug": "mobile-biometric-lock",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current turn on biometric app lock workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-signin",
    "hc-sessions"
  ],
  "keywords": [
    "mobile biometric lock",
    "mobile account security",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to turn on biometric app lock in the intended account or workspace.

Biometric app lock uses the device’s configured authentication to protect local access to the signed-in app. It does not replace the Dosya account password.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" alt="Four-step interface map for turn on biometric app lock, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Profile → Security in the current released Dosya client.
- Confirm the active account and workspace, then identify the current device.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: turn on biometric app lock

1. Open Mobile Profile → Security and confirm the active workspace.
2. Select the current device and check its name or identifying details.
3. Enable biometric lock and authenticate once.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that reopening the app requires the configured device biometric.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view showing the account that security settings apply to." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing device or sign-in security. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Close and reopen the app, confirm the biometric prompt appears and verify the device fallback behaves according to the current security settings.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and reopening the app requires the configured device biometric. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Profile → Security, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Mobile sign-in](/account/mobile-sign-in)
- [Review sessions](/account/sessions)
