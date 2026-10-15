---
{
  "articleId": "hc-mobile-biometric-lock",
  "locale": "en",
  "revision": 5,
  "title": "Turn on biometric app lock",
  "summary": "Enable biometric lock and authenticate once, then verify that reopening the app requires the configured device biometric.",
  "category": "account",
  "articleSlug": "mobile-biometric-lock",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
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

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" alt="Workflow for “Turn on biometric app lock”: enable biometric lock and authenticate once; verify that reopening the app requires the configured device biometric." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Turn on biometric app lock”: enable biometric lock and authenticate once; verify that reopening the app requires the configured device biometric. <a class="workflow-map-full" href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-biometric-lock-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Mobile Profile → Security in the current released Dosya client.
- Confirm the active account and workspace, then identify the current device.

## Steps: turn on biometric app lock

1. Open Mobile Profile → Security and confirm the active workspace.
2. Select the current device and check its name or identifying details.
3. Enable biometric lock and authenticate once.
4. Verify that reopening the app requires the configured device biometric.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Reference for “Turn on biometric app lock”: Dosya profile identity view showing the account that security settings apply to." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Turn on biometric app lock”: Dosya profile identity view showing the account that security settings apply to. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Confirm the signed-in account before changing device or sign-in security.

## Verify the result

Close and reopen the app, confirm the biometric prompt appears and verify the device fallback behaves according to the current security settings.

## Expected result

The workflow completes for the controlled test and reopening the app requires the configured device biometric.

## Troubleshooting

**The expected control is missing.** Return to Mobile Profile → Security, confirm the active workspace and check that your role permits the action.

## Related guides

- [Mobile sign-in](/account/mobile-sign-in)
- [Review sessions](/account/sessions)
