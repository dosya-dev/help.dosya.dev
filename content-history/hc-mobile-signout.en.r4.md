---
{
  "articleId": "hc-mobile-signout",
  "locale": "en",
  "revision": 4,
  "title": "Sign out and clear mobile account data",
  "summary": "Choose Sign out and confirm the local cleanup prompt, then verify that the app returns to sign-in without showing prior account files.",
  "category": "account",
  "articleSlug": "mobile-signout",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-mobile-signin",
    "hc-sessions"
  ],
  "keywords": [
    "mobile signout",
    "mobile account security",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to sign out and clear mobile account data in the intended account or workspace.

Signing out removes the active mobile account session and local app state according to the cleanup prompt. Cloud files remain in the account.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" alt="Four-step interface map for sign out and clear mobile account data, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-signout-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-signout-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Mobile Profile in the current released Dosya client.
- Confirm the active account and workspace, then identify the signed-in test account.

## Steps: sign out and clear mobile account data

1. Open Mobile Profile and confirm the active workspace.
2. Select the signed-in test account and check its name or identifying details.
3. Choose Sign out and confirm the local cleanup prompt.
4. Verify that the app returns to sign-in without showing prior account files.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity view showing the account that security settings apply to." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing device or sign-in security. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Reopen the app and confirm it returns to sign-in without showing prior account files, then review the revoked session from another trusted device.

## Expected result

The workflow completes for the controlled test and the app returns to sign-in without showing prior account files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Profile, confirm the active workspace and check that your role permits the action.

## Related guides

- [Mobile sign-in](/account/mobile-sign-in)
- [Review sessions](/account/sessions)
