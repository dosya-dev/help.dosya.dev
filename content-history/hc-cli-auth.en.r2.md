---
{
  "articleId": "hc-cli-auth",
  "locale": "en",
  "revision": 2,
  "title": "Authenticate the Dosya CLI",
  "summary": "Sign the CLI in with the supported interactive flow or a dedicated secret, then verify the selected account without printing credentials.",
  "category": "developers",
  "articleSlug": "cli-authenticate",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current authenticate the dosya cli workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cli-install",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "CLI login",
    "CLI authentication",
    "CLI token",
    "cloud storage"
  ]
}
---
Authenticate only after confirming the CLI binary and account. Automation should use a separately revocable least-privilege credential.

Interactive sign-in and automation credentials serve different contexts. Avoid command-line arguments that place a reusable secret in shell history or process listings.

<figure class="help-screenshot"><a href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp"><img src="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" alt="Four-step interface map for authenticate the dosya cli, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: authenticate the dosya cli

1. Open the CLI authentication help.
2. Choose the supported interactive or automation method.
3. Complete sign-in without placing a secret in shell history.
4. Run the account or status command.
5. Confirm the expected account and active workspace.
6. Revoke the test credential when it is no longer needed.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each credential for the client and task it serves. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run the status or account command and confirm the expected identity and workspace. Revoke test credentials after the automation path is proven.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The authenticate the dosya cli workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Install the CLI](/developers/cli-install)
- [Choose key permission](/developers/api-key-scopes)
