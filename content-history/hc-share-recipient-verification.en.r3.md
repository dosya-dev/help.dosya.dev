---
{
  "articleId": "hc-share-recipient-verification",
  "locale": "en",
  "revision": 3,
  "title": "Use a recipient verification code",
  "summary": "Request and enter the current verification code, then verify that the share opens only for the intended recipient.",
  "category": "sharing",
  "articleSlug": "share-recipient-verification",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current use a recipient verification code workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-create-link",
    "hc-link-activity"
  ],
  "keywords": [
    "share recipient verification",
    "advanced sharing delivery",
    "Dosya help",
    "file sharing"
  ]
}
---
Use this workflow to use a recipient verification code in the intended account or workspace.

A recipient code confirms control of the named delivery channel for that access attempt. It should not be forwarded or stored in the share message.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-verification-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-recipient-verification-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-verification-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-verification-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-verification-workflow-map-2026-10-14.webp" alt="Four-step interface map for use a recipient verification code, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/share-recipient-verification-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-recipient-verification-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-verification-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open the recipient share page in the current released Dosya client.
- Confirm the active account and workspace, then identify a named-recipient test link.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use a recipient verification code

1. Open the recipient share page and confirm the active workspace.
2. Select a named-recipient test link and check its name or identifying details.
3. Request and enter the current verification code.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the share opens only for the intended recipient.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya share activity overview showing recipient access and delivery events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a controlled recipient and non-confidential files when testing delivery settings. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the link remains closed before verification and opens only after the current code for the intended recipient succeeds.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the share opens only for the intended recipient. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the recipient share page, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Create a link](/sharing/create-link)
- [Read link activity](/sharing/link-activity)
