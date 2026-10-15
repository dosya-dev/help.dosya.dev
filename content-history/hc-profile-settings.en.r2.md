---
{
  "articleId": "hc-profile-settings",
  "locale": "en",
  "revision": 2,
  "title": "Changing profile details and account settings",
  "summary": "To change the avatar, select the current avatar, choose an image under 2 MB and wait for confirmation. Verify that to change Email address, enter the new address and select Change.",
  "category": "account",
  "articleSlug": "profile-settings",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Changing profile details and account settings” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-two-factor",
    "hc-sessions",
    "hc-api-key"
  ],
  "keywords": [
    "profile",
    "change name",
    "change email",
    "avatar",
    "account settings",
    "notifications",
    "secure cloud storage",
    "Dosya help"
  ]
}
---
This guide covers **Changing profile details and account settings** in Dosya. The main action is to to change the avatar, select the current avatar, choose an image under 2 MB and wait for confirmation; the decisive check is whether to change Email address, enter the new address and select Change.

Keep the signed-in account, security state, plan, billing period, and saved preference in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/profile-settings-help-workflow-2026-10-14.webp"><img src="/screenshots/profile-settings-help-workflow-2026-10-14.webp" alt="Four-step workflow map for changing profile details and account settings, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for changing profile details and account settings: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/profile-settings-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Sign in to the web app and open the profile menu in the upper-right corner.
- Keep access to your current password and email inbox before changing the email address.
- Prepare a PNG, JPEG, WebP or GIF under 2 MB for a new avatar.
- Confirm whether a change is account-wide or belongs to one workspace.

## Steps: update identity

1. Open the profile menu and select **Profile**.
2. Select **Identity**.
3. To change the avatar, select the current avatar, choose an image under 2 MB and wait for confirmation.
4. Edit **Full name** and select **Save**. Teammates will see the new name across workspaces.
5. To change **Email address**, enter the new address and select **Change**.
6. Enter the current password when asked.
7. Retrieve the six-digit verification code from the new inbox and confirm it.
8. Reload Profile and check that the new address is marked **Verified**.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya Profile Identity page with avatar, full name, verified email address and navigation to account settings sections." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Identity controls update the account across workspaces. The left navigation opens security, sessions, notifications, integrations and data pages. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Find other account settings

- **Appearance** controls the interface theme.
- **Password & 2FA** changes or sets a password and manages two-factor authentication.
- **API keys** creates and revokes programmatic credentials.
- **Sessions** lists signed-in devices and lets you revoke sessions.
- **Notifications** controls supported account and workspace notifications.
- **Integrations** manages connected cloud accounts.
- **Connected AI apps** shows authorized AI connections.
- **My workspaces** lists workspace memberships.
- **Privacy and your data** contains privacy and export controls.
- **Delete account** has its own protected workflow.

## Verify the result

After completing the steps, check the expected result: To change Email address, enter the new address and select Change. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Reopen the relevant account page and confirm the displayed value belongs to the intended account. If the result differs from what you expected, stop before repeating the action. Capture the time and nonsecret status, then check session, verification, billing, or policy requirements before trying again.

## Expected result

Saved identity values persist after reload. A verified email change becomes the address used for login and account notifications. Navigation sections display the controls available to the current account.

## Limits and behavior

- Changing an account name does not rename a workspace.
- Changing an email may affect future email-bound invitations and sign-in; existing workspace membership remains tied to the account.
- A pending email change is not complete until its verification code is accepted.
- OAuth-created accounts can set a password for email sign-in and password-gated actions.
- Session revocation, API-key revocation and Vault unlock state have separate controls.
- Deleting an account is different from leaving a workspace or canceling a paid plan.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The avatar is rejected.** Use a supported image format under 2 MB.

**The name did not change.** Enter a non-empty value, select **Save** and wait for the success message before leaving.

**The email code did not arrive.** Check the new address and filtered mail. Restart the change if the address is wrong or the code expires.

**The current password is refused.** Social-login-only accounts may need to set a password first. Otherwise use the password-reset flow.

**A workspace setting is missing from Profile.** Open that workspace's **Settings** page. Profile contains account-wide controls.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Turning on two-factor authentication](/account/two-factor)
- [Reviewing active sessions](/account/sessions)
- [Creating and managing an API key](/developers/api-key)
