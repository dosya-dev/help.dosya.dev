---
{
  "articleId": "hc-account-workspaces",
  "locale": "en",
  "revision": 3,
  "title": "Review all workspaces on your account",
  "summary": "Use the account workspace list to check memberships, roles and context, then open the intended workspace or resolve one you no longer recognize.",
  "category": "account",
  "articleSlug": "manage-workspaces",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current review all workspaces on your account workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-switch-workspaces",
    "hc-workspace-member-removal"
  ],
  "keywords": [
    "account workspaces",
    "workspace membership",
    "manage workspaces",
    "cloud storage"
  ]
}
---
The account workspace view lists memberships across the account, while the sidebar switcher changes only the active context.

The account list shows memberships and roles across separate workspace boundaries. Similar names do not mean the workspaces share files or policies.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" alt="Four-step interface map for review all workspaces on your account, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-light-href="/screenshots/manage-workspaces-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/manage-workspaces-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: review all workspaces on your account

1. Open Profile → Workspaces.
2. Review each workspace name and role.
3. Open a known workspace and confirm its dashboard.
4. Use the switcher to compare active context.
5. Leave only through the supported membership action.
6. Report an unfamiliar membership privately.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity settings showing the signed-in account information and account-level controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the signed-in account before changing account-level preferences. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open a known workspace and compare its dashboard, role and file context. Investigate an unfamiliar membership before leaving or changing anything.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The review all workspaces on your account workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Switch workspaces](/account/switch-workspaces)
- [Leave or delete a workspace](/workspaces/member-removal)
