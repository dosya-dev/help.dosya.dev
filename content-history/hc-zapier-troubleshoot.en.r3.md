---
{
  "articleId": "hc-zapier-troubleshoot",
  "locale": "en",
  "revision": 3,
  "title": "Troubleshoot a Zapier file automation",
  "summary": "Check the connected account, key restrictions, Zap history, field mapping and file availability when a Dosya step fails.",
  "category": "troubleshooting",
  "articleSlug": "zapier",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current troubleshoot a zapier file automation workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-zapier-connect",
    "hc-api-key-scopes",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "Zapier failed",
    "Zap history",
    "Zapier authentication",
    "file upload"
  ]
}
---
Use Zap history and a single test record to isolate authentication, mapping and file-transfer problems.

Zap history identifies the failing step and input data. Account connection, key scope, folder restriction and mapped file content can each cause a different failure.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-light-href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/zapier-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/zapier-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/zapier-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot a zapier file automation, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-light-href="/screenshots/zapier-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/zapier-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot a zapier file automation

1. Open the failed Zap run and note the Dosya step.
2. Confirm the connected account and active key.
3. Compare key scope, protocol and folder restrictions with the action.
4. Inspect required mapped fields and file content source.
5. Retest the step with one small item.
6. Turn the Zap back on only after the test succeeds.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Retest only the Dosya step with one small item and confirm it creates one expected result before turning the Zap back on.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The troubleshoot a zapier file automation workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

- [Connect Zapier](/integrations/zapier)
- [Choose key permission](/developers/api-key-scopes)
- [Revoke a key](/developers/revoke-api-key)
