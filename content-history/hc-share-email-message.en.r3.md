---
{
  "articleId": "hc-share-email-message",
  "locale": "en",
  "revision": 3,
  "title": "Email a share link with a message",
  "summary": "Add a short non-sensitive message and send the link, then verify that the recipient activity records the delivery attempt.",
  "category": "sharing",
  "articleSlug": "share-email-message",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current email a share link with a message workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-create-link",
    "hc-link-activity"
  ],
  "keywords": [
    "share email message",
    "advanced sharing delivery",
    "Dosya help",
    "file sharing"
  ]
}
---
Use this workflow to email a share link with a message in the intended account or workspace.

The email message accompanies the share link but should not contain passwords or confidential context. Link policy remains the main access control.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-email-message-workflow-map-2026-10-14.webp" alt="Four-step interface map for email a share link with a message, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-light-href="/screenshots/share-email-message-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/share-email-message-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Share → Email in the current released Dosya client.
- Confirm the active account and workspace, then identify one test recipient.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: email a share link with a message

1. Open Share → Email and confirm the active workspace.
2. Select one test recipient and check its name or identifying details.
3. Add a short non-sensitive message and send the link.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the recipient activity records the delivery attempt.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-activity-overview-2026-10-12.webp"><img src="/screenshots/share-activity-overview-2026-10-12.webp" alt="Dosya share activity overview showing recipient access and delivery events." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use a controlled recipient and non-confidential files when testing delivery settings. <a href="/screenshots/share-activity-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the delivery attempt in activity and test the link as the intended recipient or in a signed-out browser.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the recipient activity records the delivery attempt. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Share → Email, confirm the active workspace and check that your role permits the action.

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
